import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { lieuxCulturels } from './data/lieux';
import CollectionCartes from './components/CollectionCartes';

function tirerCarteAleatoire(cartes) {
  const probabilités = {
    légendaire: 0.10,
    épique: 0.20,
    rare: 0.30,
    commun: 0.40,
  };

  const tirage = Math.random();
  let seuil = 0;
  for (const rarete of ['légendaire', 'épique', 'rare', 'commun']) {
    seuil += probabilités[rarete];
    if (tirage <= seuil) {
      const candidates = cartes.filter((c) => c.rarete === rarete);
      if (candidates.length > 0) {
        return candidates[Math.floor(Math.random() * candidates.length)];
      }
    }
  }
  return cartes[Math.floor(Math.random() * cartes.length)];
}

export default function App() {
  const [profil, setProfil] = useState('Invité');
  const [cartes, setCartes] = useState([]);
  const [dernierMessage, setDernierMessage] = useState('');

  // Charger la collection quand on change de profil
  useEffect(() => {
    if (profil) {
      axios
        .get(`http://localhost:3001/api/collections/${profil}`)
        .then((res) => {
          setCartes(res.data);
          setDernierMessage('');
        })
        .catch(() => {
          setCartes([]);
          setDernierMessage('');
        });
    }
  }, [profil]);

  const sauvegarderCartes = (nouvellesCartes) => {
    setCartes(nouvellesCartes);
    axios.post(`http://localhost:3001/api/collections/${profil}`, nouvellesCartes);
  };

  const handleVisite = (lieu) => {
    const carte = tirerCarteAleatoire(lieu.cartes);

    const nouvellesCartes = cartes.some(
      (c) => c.lieuNom === lieu.nom && c.carte.nom === carte.nom
    )
      ? cartes.map((c) =>
          c.lieuNom === lieu.nom && c.carte.nom === carte.nom
            ? { ...c, count: c.count + 1 }
            : c
        )
      : [...cartes, { lieuNom: lieu.nom, carte, count: 1 }];

    setDernierMessage(`Tu as débloqué ${carte.nom} (${carte.rarete}) au ${lieu.nom} !`);
    sauvegarderCartes(nouvellesCartes);
  };

  const resetCollection = () => {
    setCartes([]);
    setDernierMessage('');
    axios.post(`http://localhost:3001/api/collections/${profil}`, []);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>CultureGO - MVP</h1>

      <label htmlFor="profil">Choisis ton profil : </label>
      <select
        id="profil"
        value={profil}
        onChange={(e) => setProfil(e.target.value)}
        style={{ marginBottom: '16px', padding: '4px' }}
      >
        <option value="Kili">Kili</option>
        <option value="Jude">Jude</option>
        <option value="Arduino">Arduino</option>
        <option value="Invité">Invité</option>
      </select>

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
        <button
          onClick={resetCollection}
          style={{ marginLeft: '12px', color: 'red' }}
        >
          Réinitialiser la collection
        </button>
      </div>

      {dernierMessage && (
        <p style={{ marginTop: '12px', fontWeight: 'bold', color: '#2c3e50' }}>
          {dernierMessage}
        </p>
      )}

      <hr />
      <CollectionCartes cartes={cartes} />
    </div>
  );
}
