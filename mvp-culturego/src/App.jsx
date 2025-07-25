import React, { useState, useEffect} from 'react';
import { lieuxCulturels } from './data/lieux';
import CollectionCartes from './components/CollectionCartes';

const profils = ['Kilian', 'Jude', 'Arduino', 'Invité'];

function tirerCarteAleatoire(cartes) {
  const probabilités = {
    légendaire: 0.10,
    épique: 0.20,
    rare: 0.30,
    commun: 0.40
  };

  const tirage = Math.random();
  let seuil = 0;
  for (const rarete of ['légendaire', 'épique', 'rare', 'commun']) {
    seuil += probabilités[rarete];
    if (tirage <= seuil) {
      const candidates = cartes.filter(c => c.rarete === rarete);
      if (candidates.length > 0) {
        return candidates[Math.floor(Math.random() * candidates.length)];
      }
    }
  }
  return cartes[Math.floor(Math.random() * cartes.length)];
}

export default function App() {
  const [profil, setProfil] = useState(profils[0]);
  const [cartes, setCartes] = useState([]);
  const [message, setMessage] = useState("");

  // Charger la collection du profil depuis localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`collection_${profil}`);
    setCartes(saved ? JSON.parse(saved) : []);
  }, [profil]);

  // Sauvegarder la collection à chaque mise à jour
  useEffect(() => {
    localStorage.setItem(`collection_${profil}`, JSON.stringify(cartes));
  }, [cartes, profil]);

  const handleVisite = (lieu) => {
    const carte = tirerCarteAleatoire(lieu.cartes);

    setCartes(prev => {
      const existing = prev.find(c => c.lieuNom === lieu.nom && c.carte.nom === carte.nom);
      if (existing) {
        return prev.map(c =>
          c.lieuNom === lieu.nom && c.carte.nom === carte.nom
            ? { ...c, count: c.count + 1 }
            : c
        );
      }
      return [...prev, { lieuNom: lieu.nom, carte, count: 1 }];
    });

    setMessage(`Tu as débloqué ${carte.nom} (${carte.rarete}) au ${lieu.nom} !`);
  };

  const resetCollection = () => {
    setCartes([]);
    setMessage("");
    localStorage.removeItem(`collection_${profil}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>CultureGo - MVP Multi-Profiles</h1>

      <label>
        Choisir un profil :{' '}
        <select value={profil} onChange={e => setProfil(e.target.value)}>
          {profils.map(p => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </label>

      <div>
        <h2>Choisis un lieu à visiter :</h2>
        {lieuxCulturels.map((lieu) => (
          <button
            key={lieu.id}
            onClick={() => handleVisite(lieu)}
            style={{ margin: '4px', padding: '6px 12px' }}
          >
            Je suis à {lieu.nom}
          </button>
        ))}
        <button onClick={resetCollection} style={{ marginLeft: '12px', color: 'red' }}>
          Réinitialiser la collection
        </button>
      </div>

      {message && (
        <p style={{ marginTop: '16px', fontWeight: 'bold', color: '#2c3e50' }}>{message}</p>
      )}

      <hr />
      <CollectionCartes cartes={cartes} />
    </div>
  );
}
