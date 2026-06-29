# CultureGO – Nyon 🗺️

**▶ [Jouer sur kiliangir.github.io/culturego](https://kiliangir.github.io/culturego/)**

Un jeu de cartes à collectionner géolocalisé, inspiré de Pokémon GO, dédié aux lieux culturels, historiques et naturels de Nyon. Le joueur se déplace dans la ville, débloque des lieux à proximité et ouvre des paquets pour découvrir des cartes uniques.

> **Fichier unique** — aucun serveur, aucune dépendance à installer, aucun compte requis. Tout tient dans un seul `culturego.html`.

---

## Fonctionnement

1. Ouvre [kiliangir.github.io/culturego](https://kiliangir.github.io/culturego/) sur mobile ou desktop.
2. Autorise la géolocalisation quand le navigateur le demande.
3. Approche-toi à moins de 50 m d'un lieu pour le débloquer.
4. Ouvre un paquet (1 carte par lieu, rechargeable toutes les 24 h).
5. Touche la carte face cachée pour la révéler.
6. Complète ta collection des 111 cartes réparties sur 37 lieux.

Le mode **God Mode ⚡** bypasse la géolocalisation et les cooldowns — pratique pour tester ou démontrer l'application.

---

## Cartes & raretés

| Rareté | Probabilité | Cartes | Étoiles |
|---|---|---|---|
| Commun | 70 % | 37 | ★☆☆ |
| Rare | 25 % | 37 | ★★★ |
| Légendaire | 5 % | 37 | ★★★★★ |

Chaque lieu propose une carte de chaque rareté. Le tirage est aléatoire à chaque ouverture de paquet.

**Trade-up** : 2 exemplaires d'une même carte peuvent être échangés contre la carte de rareté supérieure du même lieu.

---

## Artwork

Les illustrations sont générées procéduralement en SVG — aucun fichier image externe. Chaque carte reçoit un visuel unique et déterministe basé sur son identifiant :

- fond dégradé teinté par la catégorie du lieu
- motifs géométriques spécifiques à chaque catégorie (historique, nature, sport, gastronomie, culture)
- anneaux et étincelles proportionnels à la rareté
- halo doré et rayons rotatifs pour les légendaires

---

## Lieux & catégories

37 lieux de Nyon couvrant 5 catégories : **historique**, **culture**, **nature**, **sport**, **gastronomie**.

Chaque lieu possède un identifiant, des coordonnées GPS, une série, et un emoji représentatif.

---

## Sauvegarde

La progression est sauvegardée automatiquement dans IndexedDB (locale, sur l'appareil). Depuis l'écran **Profil**, tu peux :

- **Exporter** ta collection en `.json` (sauvegarde ou transfert)
- **Importer** un fichier `.json` (restauration)
- **Réinitialiser** la collection

---

## Statistiques

L'écran Profil affiche :

- nombre de cartes uniques sur 111 et % de complétion
- lieux visités sur 37
- nombre de doublons
- progression par rareté et par série
- liste des légendaires obtenus
- date de première partie

---

## Retour haptique

Sur les appareils compatibles, l'ouverture d'un paquet déclenche une vibration calibrée selon la rareté de la carte révélée.

---

## Architecture technique

| Aspect | Choix |
|---|---|
| Framework | React 18 (UMD, CDN) |
| Carte | Leaflet.js |
| Persistance | IndexedDB |
| Artwork | SVG généré (inline, `data:image/svg+xml`) |
| Déploiement | GitHub Pages (`kiliangir.github.io/culturego`) |

Aucun build, aucun bundler, aucune dépendance npm. Le fichier final fait environ **118 Ko**.

---

## Déploiement

Le jeu est hébergé sur GitHub Pages à l'adresse **[kiliangir.github.io/culturego](https://kiliangir.github.io/culturego/)** — aucune configuration serveur nécessaire, le fichier `culturego.html` est servi directement.

Pour mettre à jour, il suffit de pousser une nouvelle version du fichier sur la branche configurée pour GitHub Pages.

Pour tester localement avant de pousser :

```bash
python3 -m http.server 8080
# puis ouvrir http://localhost:8080/culturego.html
```

La géolocalisation et IndexedDB exigent un contexte sécurisé (`https` ou `localhost`) — GitHub Pages satisfait cette contrainte nativement.

---

## Personnalisation

Tout le contenu est défini dans le script inline du fichier HTML :

- **`LIEUX`** — tableau des 37 lieux (coordonnées, catégorie, série, emoji, cartes)
- **`RARETE_CONFIG`** — couleurs, labels et nombre d'étoiles par rareté
- **`CATEGORIE_CONFIG`** — couleurs, icônes et noms de stats par catégorie
- **`POIDS_RARETE`** — probabilités de tirage
- **`RAYON_DEBLOCAGE`** — rayon de déclenchement en mètres (défaut : 50)

Pour adapter le jeu à une autre ville, il suffit de modifier `LIEUX` avec de nouvelles coordonnées et de changer le titre.

---

## Licence

Projet personnel / usage libre. Les données cartographiques sont fournies par [OpenStreetMap](https://www.openstreetmap.org/) via Leaflet.
