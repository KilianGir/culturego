import React from 'react';
import { lieuxCulturels } from '../data/lieux.js';

const configParRarete = {
  commun: {
    icon: '⚪️',
    backgroundColor: '#e0e0e0',
    color: '#003333'
  },
  rare: {
    icon: '🔵',
    backgroundColor: '#69abfcff',
    color: '#003366'
  },
  epique: {
    icon: '🟣',
    backgroundColor: '#b46efaff',
    color: '#4b006e'
  },
  legendaire: {
    icon: '⭐',
    backgroundColor: '#fad155ff',
    color: '#533c01ff'
  }
};

// 🔧 Fonction pour obtenir le chemin d'image
const getImageUrl = (lieuId, rarete) => {
  try {
    return new URL(`../assets/${lieuId}/${rarete}.jpg`, import.meta.url).href;
  } catch {
    return ''; // fallback si image non trouvée
  }
};

export default function CollectionCartes({ cartes }) {
  const cartesParLieu = cartes.reduce((acc, carte) => {
    if (!acc[carte.lieuNom]) {
      acc[carte.lieuNom] = [];
    }
    acc[carte.lieuNom].push(carte);
    return acc;
  }, {});

  const lieuxVisites = Object.keys(cartesParLieu);
  const totalLieux = lieuxCulturels.length;
  const totalCartesPossibles = lieuxCulturels.reduce(
    (acc, lieu) => acc + lieu.cartes.length,
    0
  );
  const cartesDebloqueesUniques = cartes.length;
  const pourcentageCompletion = Math.round(
    (cartesDebloqueesUniques / totalCartesPossibles) * 100
  );

  return (
    <div>
      <h2>Ma collection</h2>
      <p><strong>Lieux visités :</strong> {lieuxVisites.length} / {totalLieux}</p>
      <p><strong>Cartes débloquées :</strong> {cartesDebloqueesUniques} / {totalCartesPossibles} ({pourcentageCompletion}%)</p>

      <div style={{
        height: '20px',
        backgroundColor: '#ddd',
        borderRadius: '10px',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '400px',
        marginBottom: '20px'
      }}>
        <div style={{
          height: '100%',
          width: `${pourcentageCompletion}%`,
          backgroundColor: '#4caf50',
          transition: 'width 0.3s ease'
        }} />
      </div>

      {lieuxVisites.map(lieuNom => {
        const cartesLieu = cartesParLieu[lieuNom];
        const lieuData = lieuxCulturels.find(l => l.nom === lieuNom);
        const lieuId = lieuData?.id || 'inconnu';
        const nbTotal = lieuData?.cartes?.length || 0;

        const cartesTriees = [...cartesLieu].sort((a, b) => {
          const ordre = ['legendaire', 'epique', 'rare', 'commun'];
          const diff = ordre.indexOf(a.carte.rarete) - ordre.indexOf(b.carte.rarete);
          return diff !== 0 ? diff : a.carte.nom.localeCompare(b.carte.nom);
        });

        return (
          <div key={lieuNom} style={{ marginBottom: '20px' }}>
            <h3>{lieuNom} — {cartesTriees.length} / {nbTotal}</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '12px 40px'
            }}>
              {cartesTriees.map(({ carte, count }, index) => {
                const config = configParRarete[carte.rarete] || {};
                const imageUrl = getImageUrl(lieuId, carte.rarete);

                return (
                  <div key={index} style={{
                    backgroundColor: config.backgroundColor,
                    color: config.color,
                    padding: '15px',
                    borderRadius: '15px',
                    maxWidth: '240px',
                    width: '100%',
                    margin: '0 auto 10px'
                  }}>
                    <div style={{ fontSize: '20px', paddingTop: '2px', paddingBottom: '20px'  }}>
                      {config.icon} <strong>{carte.nom}</strong> <span style={{ fontSize: '16px', ontStyle: 'italic' }}>{count > 1 && `×${count}`}</span>
                    </div>
                    {imageUrl && (
                      <img
                        src={imageUrl}
                        alt={`${carte.nom} (${carte.rarete})`}
                        style={{ width: '100%', borderRadius: '5px', marginBottom: '20px', display: 'block', margin: '0 auto 15px' }}
                      />
                    )}
                    
                    <div style={{ paddingTop: '2px', paddingBottom: '15px'  }}>{carte.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}