# CultureGO 🗺️

**▶ [Jouer sur kiliangir.github.io/culturego](https://kiliangir.github.io/culturego/)**

Un jeu de cartes à collectionner géolocalisé, inspiré de Pokémon GO, dédié aux lieux
culturels, historiques, naturels et sportifs qui t'entourent. Le joueur se déplace,
débloque les lieux à proximité et ouvre des paquets pour découvrir des cartes uniques
réparties en plusieurs **séries** thématiques.

> **Pas de serveur, pas de compte, pas de build.** Le jeu est une page statique
> (`index.html`) qui charge ses collections depuis des fichiers `JSON`. Tout tourne
> côté navigateur ; il suffit d'un hébergement statique comme GitHub Pages.

---

## Fonctionnement

1. Ouvre [kiliangir.github.io/culturego](https://kiliangir.github.io/culturego/) sur mobile ou desktop.
2. Autorise la géolocalisation quand le navigateur le demande.
3. Approche-toi à moins de **50 m** d'un lieu pour le débloquer.
4. Ouvre un paquet (1 carte par lieu, rechargeable toutes les 24 h).
5. Touche la carte face cachée pour la révéler.
6. Complète ta collection sur l'ensemble des séries disponibles.

Le mode **God Mode ⚡** bypasse la géolocalisation et les cooldowns — pratique pour
tester ou faire une démonstration.

---

## Séries

Le jeu est organisé en **séries thématiques indépendantes** (une ville, une ligne de
transport, un thème…). La liste des séries actives est entièrement définie par les
fichiers de `collections/` ; ajouter ou retirer une série ne demande aucune
modification du code (voir *Ajouter une collection*).

Les écrans Carte et Collection proposent un filtre par série dès que plusieurs
collections sont chargées.

---

## Cartes & raretés

Chaque lieu propose **une carte de chaque rareté**. Le tirage est aléatoire à chaque
ouverture de paquet.

| Rareté     | Probabilité | Étoiles |
| ---------- | ----------- | ------- |
| Commun     | 70 %        | ★☆☆     |
| Rare       | 25 %        | ★★★     |
| Légendaire | 5 %         | ★★★★★   |

**Trade-up** : 2 exemplaires d'une même carte peuvent être échangés contre la carte
de rareté supérieure du même lieu.

---

## Architecture des données

Le contenu est **séparé du code**. La logique vit dans `index.html` ; les données
vivent dans `collections/`, découvertes via un manifeste :

```
index.html
collections/
  manifest.json      → liste ordonnée des fichiers de collections à charger
  <collection>.json
  <collection>.json
  …
```

`manifest.json` est un simple tableau de noms de fichiers :

```json
["<collection>.json", "<collection>.json"]
```

Au démarrage, l'application lit `manifest.json`, charge en parallèle chaque collection
qu'il référence, concatène les lieux et calcule les structures dérivées (cartes
totales, séries, statistiques). Un écran de chargement s'affiche pendant l'opération ;
en cas d'échec (manifeste manquant, JSON invalide, fichier introuvable), un écran
d'erreur propose de **réessayer** plutôt qu'une page blanche. Les requêtes utilisent
`cache: 'no-cache'` pour limiter les effets du cache GitHub Pages lors d'une mise à jour.

Chaque fichier de collection est un tableau de lieux. Format d'un lieu :

```json
{
  "id": "mon_lieu",
  "nom": "Nom du lieu",
  "description": "Courte description du lieu.",
  "coordonnees": [46.5, 6.6],
  "emoji": "🏰",
  "categorie": "historique",
  "serie": "Série N • Ma Série",
  "cartes": [
    { "id": "perso_commun",     "nom": "Personnage Commun",     "rarete": "commun",     "description": "…" },
    { "id": "perso_rare",       "nom": "Personnage Rare",       "rarete": "rare",       "description": "…" },
    { "id": "perso_legendaire", "nom": "Personnage Légendaire", "rarete": "legendaire", "description": "…" }
  ]
}
```

Catégories disponibles : `historique` · `nature` · `culture` · `sport` · `gastronomie`.

---

## Ajouter une collection

Ajouter une série est **une opération de pure donnée**, sans toucher au code :

1. Crée `collections/<nom>.json` (tableau de lieux au format ci-dessus).
2. Ajoute son nom **à la fin** de `collections/manifest.json` (l'ordre préserve la
   numérotation globale des cartes `#xxx / total`).
3. Pousse sur la branche GitHub Pages.

Un gabarit complet — schéma, prompt prêt à l'emploi, règles anti-erreurs et checklist
de validation — est fourni dans **[`TEMPLATE_nouvelle_collection.md`](TEMPLATE_nouvelle_collection.md)**.

Valider un fichier avant de pousser :

```
node -e "JSON.parse(require('fs').readFileSync('collections/<fichier>.json','utf8')); console.log('OK')"
```

---

## Artwork

Les illustrations sont générées procéduralement en SVG — aucun fichier image externe.
Chaque carte reçoit un visuel unique et déterministe basé sur son identifiant :

- fond dégradé teinté par la catégorie du lieu ;
- motifs géométriques spécifiques à chaque catégorie (historique, nature, sport, gastronomie, culture) ;
- anneaux et étincelles proportionnels à la rareté ;
- halo doré et rayons rotatifs pour les légendaires.

---

## Sauvegarde

La progression est sauvegardée automatiquement dans IndexedDB (locale, sur l'appareil).
Depuis l'écran **Profil**, tu peux :

- **Exporter** ta collection en `.json` (sauvegarde ou transfert) ;
- **Importer** un fichier `.json` (restauration) ;
- **Réinitialiser** la collection.

Comme la progression stocke les identifiants de cartes (et non leur numéro), ajouter
de nouvelles collections ne casse pas les sauvegardes existantes.

---

## Statistiques

L'écran Profil affiche :

- nombre de cartes uniques et % de complétion ;
- nombre de lieux visités ;
- nombre de doublons ;
- progression par rareté et par série ;
- liste des légendaires obtenus ;
- date de première partie.

---

## Retour haptique

Sur les appareils compatibles, l'ouverture d'un paquet déclenche une vibration calibrée
selon la rareté de la carte révélée.

---

## Architecture technique

| Aspect      | Choix                                          |
| ----------- | ---------------------------------------------- |
| Framework   | React 18 (UMD, CDN)                            |
| Carte       | Leaflet.js                                     |
| Données     | `collections/*.json` + `manifest.json`         |
| Chargement  | `fetch` asynchrone au démarrage                |
| Persistance | IndexedDB                                      |
| Artwork     | SVG généré (inline, `data:image/svg+xml`)      |
| Déploiement | GitHub Pages (`kiliangir.github.io/culturego`) |

Aucun build, aucun bundler, aucune dépendance npm.

---

## Déploiement & test local

Le jeu est hébergé sur GitHub Pages à l'adresse
**[kiliangir.github.io/culturego](https://kiliangir.github.io/culturego/)**. Pour mettre
à jour, pousse une nouvelle version des fichiers sur la branche configurée.

> ⚠️ Les collections sont chargées via `fetch`, ce qui **exige un contexte HTTP(S)** :
> l'ouverture directe du fichier en `file://` ne fonctionne pas. La géolocalisation et
> IndexedDB exigent par ailleurs un contexte sécurisé (`https` ou `localhost`), que
> GitHub Pages satisfait nativement.

Pour tester localement avant de pousser :

```
python3 -m http.server 8080
# puis ouvrir http://localhost:8080/
```

---

## Personnalisation

- **Contenu** : tout se règle dans `collections/*.json` et `manifest.json` (voir
  *Ajouter une collection*). Aucune donnée de jeu n'est codée en dur dans `index.html`.
- **Réglages moteur** (dans le script de `index.html`) :
  - `RARETE_CONFIG` — couleurs, labels et étoiles par rareté ;
  - `CATEGORIE_CONFIG` — couleurs, icônes et noms de stats par catégorie ;
  - `POIDS_RARETE` — probabilités de tirage ;
  - `RAYON_DEBLOCAGE` — rayon de déclenchement en mètres (défaut : 50).

---

## Licence

Projet personnel / usage libre. Les données cartographiques sont fournies par
[OpenStreetMap](https://www.openstreetmap.org/) via Leaflet.
