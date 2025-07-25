import React from 'react';
import { lieuxCulturels } from '../data/lieux.js';

const configParRarete = {
  commun: {
    icon: '⚪️',
    backgroundColor: '#e0e0e0',
    color: '#333'
  },
  rare: {
    icon: '🔵',
    backgroundColor: '#b3d4fc',
    color: '#003366'
  },
  épique: {
    icon: '🟣',
    backgroundColor: '#d9b3ff',
    color: '#4b006e'
  },
  légendaire: {
    icon: '⭐',
    backgroundColor: '#ffe082',
    color: '#7a5700'
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
        const nbTotal = lieuData?.cartes?.length || 0;

        const cartesTriees = [...cartesLieu].sort((a, b) => {
          const ordre = ['légendaire', 'épique', 'rare', 'commun'];
          const diff = ordre.indexOf(a.carte.rarete) - ordre.indexOf(b.carte.rarete);
          return diff !== 0 ? diff : a.carte.nom.localeCompare(b.carte.nom);
        });

        return (
          <div key={lieuNom} style={{ marginBottom: '20px' }}>
            <h3>{lieuNom} — {cartesTriees.length} / {nbTotal}</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '12px'
            }}>
              {cartesTriees.map(({ carte, count }, index) => {
                const config = configParRarete[carte.rarete] || {};
                return (
                  <div key={index} style={{
                    backgroundColor: config.backgroundColor,
                    color: config.color,
                    padding: '10px',
                    borderRadius: '8px'
                  }}>
                    <div style={{ fontSize: '24px' }}>{config.icon}</div>
                    <strong>{carte.nom}</strong>
                    <div style={{ fontStyle: 'italic' }}>
                      ({carte.rarete}) {count > 1 && `×${count}`}
                    </div>
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
