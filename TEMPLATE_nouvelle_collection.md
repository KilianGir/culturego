# Template — Nouvelle collection CultureGO

But : générer un fichier `collections/<nom>.json` **valide du premier coup**, sans
casser le moteur ni la numérotation des cartes.

Principe clé : **toi** tu fournis les faits non négociables (lieux réels + coordonnées
GPS exactes, que le modèle ne doit jamais inventer) ; **le modèle** génère le texte
créatif (personnages) et assemble le JSON. Ça élimine les deux sources d'erreur :
GPS faux et JSON malformé.

---

## 1) À remplir avant de lancer

| Paramètre              | Ta valeur                          |
| ---------------------- | ---------------------------------- |
| Nom de la série        | `<ex. Lausanne>`                   |
| Numéro de série        | `<le suivant, ex. Série 4>`        |
| Nom du fichier         | `<minuscules, ex. lausanne.json>`  |
| Thème                  | `<ex. street art, lac, médiéval…>` |
| Nombre de lieux        | `<ex. 8>`                          |

Puis remplis ce **tableau de lieux** (une ligne par lieu). Les coordonnées se
récupèrent dans Google Maps ou OpenStreetMap (clic droit → coordonnées), au format
`latitude, longitude`, ~5 décimales. **Le rayon de déblocage est de 50 m : une
coordonnée approximative rend le lieu injouable hors God Mode.**

| nom du lieu | catégorie | emoji | latitude | longitude | note de cadrage (1 ligne) |
| ----------- | --------- | ----- | -------- | --------- | ------------------------- |
| …           | …         | …     | …        | …         | …                         |

Catégories autorisées (exactement, sans majuscule) :
`historique` 🏛️ · `nature` 🌿 · `culture` 🎨 · `sport` ⚡ · `gastronomie` 🍷
(toute autre valeur retombe silencieusement sur `culture`.)

---

## 2) Le prompt à copier-coller

> Remplace les `{{…}}` par tes valeurs, colle ton tableau de lieux, puis envoie.

```
Tu génères une collection pour CultureGO, un jeu de cartes géolocalisé.
Sors UNIQUEMENT un tableau JSON (commençant par [ et finissant par ]), sans
texte autour, sans bloc de code, sans commentaire.

CONTEXTE
- Série : "Série {{N}} • {{Nom}}"
- Thème : {{thème}}
- Voici les lieux à utiliser, dans cet ordre. N'invente AUCUNE coordonnée :
  recopie exactement celles fournies.

{{coller ici le tableau de lieux : nom | catégorie | emoji | latitude | longitude | note}}

SCHÉMA EXACT (un objet par lieu)
{
  "id": "<snake_case, sans accent, unique, préfixé par un radical du lieu>",
  "nom": "<nom affiché du lieu>",
  "description": "<une phrase décrivant le lieu>",
  "coordonnees": [<latitude>, <longitude>],   // nombres, latitude puis longitude
  "emoji": "<un seul emoji>",
  "categorie": "<historique|nature|culture|sport|gastronomie>",
  "serie": "Série {{N}} • {{Nom}}",            // identique pour TOUS les lieux
  "cartes": [ <commun>, <rare>, <legendaire> ] // exactement 3, dans cet ordre
}

Chaque carte :
{
  "id": "<snake_case, sans accent, unique dans toute l'app>",
  "nom": "<nom du personnage>",
  "rarete": "<commun|rare|legendaire>",        // minuscules, sans accent
  "description": "<une phrase, présent, en français, ~12 à 22 mots, finie par un point>"
}

ÉCHELLE DE RARETÉ (obligatoire, propre à CHAQUE lieu)
- commun     : un humain ordinaire lié au lieu (habitué, passant, amateur).
- rare       : une figure remarquable ou experte du lieu (maître, champion, érudit).
- legendaire : une créature / divinité / esprit mythique incarnant le lieu.
  Exemples du jeu : "Oracle du Lac", "Genius Loci", "Maître des Eaux",
  "Sirène du Léman", "Aigle de Genève", "Esprit de la Forêt".
Les trois cartes d'un lieu forment une montée en puissance cohérente avec ce lieu.

STYLE DES DESCRIPTIONS
- Français, temps présent, une seule phrase évocatrice, terminée par un point.
- Ancrée dans le lieu précis (pas de généralités interchangeables).
- Pas de superlatifs creux à répétition ; ton proche des exemples ci-dessus.

RÈGLES JSON STRICTES (sinon le fichier ne se charge pas)
- Guillemets DOUBLES partout. Aucune virgule finale (trailing comma).
- coordonnees = deux NOMBRES, pas des chaînes.
- Apostrophes écrites normalement (l'aube), JAMAIS échappées (pas de \\').
- categorie et rarete strictement dans les listes ci-dessus.
- Tous les "id" (lieux ET cartes) uniques entre eux.
- Encodage UTF-8, accents conservés.

Génère maintenant le tableau JSON complet pour les {{nombre}} lieux fournis.
```

---

## 3) Exemple de sortie valide (1 lieu, à imiter)

```json
[
  {
    "id": "cathedrale_lausanne",
    "nom": "Cathédrale de Lausanne",
    "description": "Joyau gothique dominant la vieille ville, gardé par son guet nocturne.",
    "coordonnees": [46.52310, 6.63542],
    "emoji": "⛪",
    "categorie": "historique",
    "serie": "Série 4 • Lausanne",
    "cartes": [
      { "id": "touriste_cathedrale", "nom": "Touriste Émerveillé", "rarete": "commun", "description": "Le nez en l'air, il photographie la rosace sans se lasser de ses couleurs." },
      { "id": "guet_cathedrale", "nom": "Guet de Nuit", "rarete": "rare", "description": "Chaque heure, du haut du beffroi, il crie l'heure aux quatre points cardinaux." },
      { "id": "gardien_pierres", "nom": "Gardien des Pierres", "rarete": "legendaire", "description": "Esprit séculaire taillé dans le grès, il veille sur la cathédrale depuis sa première pierre." }
    ]
  }
]
```

---

## 4) Checklist anti-fautes (avant commit)

- [ ] Le fichier commence par `[` et finit par `]` (tableau, pas objet).
- [ ] Chaque lieu a 3 cartes : une `commun`, une `rare`, une `legendaire`.
- [ ] `serie` identique sur tous les lieux du fichier.
- [ ] `categorie` ∈ {historique, nature, culture, sport, gastronomie}.
- [ ] `coordonnees` = `[latitude, longitude]` en nombres, vérifiées sur une carte.
- [ ] Tous les `id` (lieux + cartes) uniques, y compris vis-à-vis des autres collections.
- [ ] Aucune virgule finale, guillemets doubles, apostrophes non échappées.
- [ ] Validation : `node -e "JSON.parse(require('fs').readFileSync('collections/<fichier>.json','utf8')); console.log('OK')"`

Détection rapide des id en double sur l'ensemble du jeu :
```
node -e "const fs=require('fs');const m=JSON.parse(fs.readFileSync('collections/manifest.json','utf8'));const ids=m.flatMap(f=>JSON.parse(fs.readFileSync('collections/'+f,'utf8')).flatMap(l=>[l.id,...l.cartes.map(c=>c.id)]));const dup=ids.filter((x,i)=>ids.indexOf(x)!==i);console.log(dup.length?['DOUBLONS',...new Set(dup)]:'aucun doublon')"
```

---

## 5) Intégration au dépôt

1. Place le fichier dans `collections/<fichier>.json`.
2. Ajoute son nom au manifeste, **à la fin** pour préserver la numérotation des cartes
   existantes (`#xxx / total`) :
   ```json
   ["nyon.json", "RE33.json", "geneve.json", "<fichier>.json"]
   ```
3. Numéro de série = le suivant disponible (ici `Série 4`). Les filtres de série
   (carte + collection) et les statistiques se mettent à jour automatiquement.
4. Pousse sur la branche GitHub Pages. Aucune modification de `index.html` requise.

> Rappel : le jeu nécessite un contexte HTTP(S). Pour tester en local avant de pousser :
> `python3 -m http.server` puis ouvrir `http://localhost:8000/`.
