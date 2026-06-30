# Générer une nouvelle collection CultureGO

**Utilisation** : remplace `{{THÈME}}` et `{{NUMÉRO}}` ci-dessous, envoie le prompt,
enregistre la sortie dans `collections/<nom>.json`. Puis **corrige les coordonnées à la
main** (le modèle les estime ; le rayon de déblocage est de 50 m) et ajoute le fichier à
`collections/manifest.json`.

---

```
Tu crées une collection complète pour CultureGO, un jeu de cartes à collectionner
géolocalisé inspiré de Pokémon GO. Sors UNIQUEMENT un tableau JSON valide (de [ à ]),
sans aucun texte ni bloc de code autour.

ENTRÉES
- Thème : {{THÈME}}
- Numéro de série : {{NUMÉRO}}

À FAIRE
1. Choisis 10 à 15 lieux RÉELS cohérents avec le thème et géographiquement
   regroupés (même ville, zone ou itinéraire). Ordonne-les logiquement
   (géographiquement ou thématiquement).
2. Pour chaque lieu, renseigne ses coordonnées GPS réelles au mieux de ta
   connaissance, au format [latitude, longitude] avec ~5 décimales. Ces valeurs
   seront vérifiées et corrigées à la main ensuite : donne ta meilleure estimation
   du lieu réel, n'invente pas de nombres au hasard.
3. Donne à la série un nom court dérivé du thème. Le champ "serie" vaut
   "Série {{NUMÉRO}} • <nom court>", IDENTIQUE sur tous les lieux.
4. Pour chaque lieu, crée 3 cartes — un personnage par rareté — formant une montée
   en puissance propre au lieu :
     commun     → un humain ordinaire lié au lieu (habitué, passant, amateur) ;
     rare       → une figure remarquable ou experte (maître, champion, érudit) ;
     legendaire → une créature, divinité ou esprit mythique incarnant le lieu.
   Chaque description : une seule phrase au présent, en français, ancrée dans le
   lieu précis, ~12 à 22 mots, terminée par un point.

SCHÉMA (un objet par lieu)
{
  "id": "<snake_case sans accent, unique, préfixé par un radical du lieu>",
  "nom": "<nom du lieu>",
  "description": "<une phrase décrivant le lieu>",
  "coordonnees": [<latitude>, <longitude>],
  "emoji": "<un seul emoji représentatif>",
  "categorie": "<historique|nature|culture|sport|gastronomie>",
  "serie": "Série {{NUMÉRO}} • <nom court>",
  "cartes": [
    { "id": "<snake_case unique>", "nom": "<personnage>", "rarete": "commun",     "description": "…" },
    { "id": "<snake_case unique>", "nom": "<personnage>", "rarete": "rare",       "description": "…" },
    { "id": "<snake_case unique>", "nom": "<personnage>", "rarete": "legendaire", "description": "…" }
  ]
}

RÈGLES JSON STRICTES (sinon le fichier ne se charge pas)
- Tableau racine ; guillemets DOUBLES partout ; AUCUNE virgule finale.
- coordonnees = deux NOMBRES, pas des chaînes.
- Apostrophes écrites normalement (l'aube), JAMAIS échappées (pas de \').
- "categorie" et "rarete" strictement dans les listes ci-dessus (minuscules, sans accent).
- Tous les "id" (lieux ET cartes) uniques entre eux.
- Sortie finale : le tableau JSON seul, rien d'autre.
```

---

**Après génération**
- Corrige les `coordonnees` de chaque lieu (Google Maps / OpenStreetMap → clic droit → coordonnées).
- Valide : `node -e "JSON.parse(require('fs').readFileSync('collections/<fichier>.json','utf8')); console.log('OK')"`
- Ajoute `"<fichier>.json"` à la fin de `collections/manifest.json`.