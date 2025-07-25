const lieux = [
  {
    id: 'musee_leman',
    nom: 'Musée du Léman',
    description: 'Musée dédié au lac Léman et à son écosystème.',
    cartes: [
      { id: 'lac_leman', nom: 'Lac Léman', rarete: 'commun', description: 'Étendue majestueuse aux eaux profondes.' },
      { id: 'poisson_dore', nom: 'Poisson Doré', rarete: 'rare', description: 'Espèce rare, brillante comme l\'or.' },
      { id: 'tresor_englouti', nom: 'Trésor Englouti', rarete: 'épique', description: 'Mystérieux vestiges cachés sous les flots.' },
      { id: 'esprit_leman', nom: 'Esprit du Léman', rarete: 'légendaire', description: 'Gardien ancestral des eaux du lac.' }
    ]
  },
  {
    id: 'chateau_nyon',
    nom: 'Château de Nyon',
    description: 'Château médiéval surplombant le lac Léman.',
    cartes: [
      { id: 'gardien_chateau', nom: 'Gardien du Château', rarete: 'commun', description: 'Il veille attentivement sur les murs et les tours du château.' },
      { id: 'chevalier_errant', nom: 'Chevalier Errant', rarete: 'rare', description: 'De passage au château, il est toujours prêt à dégainer son épée.' },
      { id: 'esprit_donjon', nom: 'Esprit du Donjon', rarete: 'épique', description: 'Âme mystérieuse qui hante les profondeurs du château.' },
      { id: 'seigneur_chateau', nom: 'Seigneur du Château', rarete: 'légendaire', description: 'En noble maître des lieux, son autorité est incontestée.' }
    ]
  },
  {
    id: 'eglise_saint_vincent',
    nom: 'Église Saint-Vincent',
    description: 'Église gothique au cœur de Nyon.',
    cartes: [
      { id: 'cloche_antique', nom: 'Cloche Antique', rarete: 'commun', description: 'Résonne encore des prières d\'autrefois.' },
      { id: 'vitrail_colore', nom: 'Vitrail Coloré', rarete: 'rare', description: 'Illumine l\'intérieur de mille éclats.' },
      { id: 'choeur_chantant', nom: 'Chœur Chantant', rarete: 'épique', description: 'Écho céleste des voix sacrées.' },
      { id: 'saint_protecteur', nom: 'Saint Protecteur', rarete: 'légendaire', description: 'Gardien spirituel de la ville.' }
    ]
  },
  {
    id: 'parc_des_gaules',
    nom: 'Parc des Gaules',
    description: 'Parc historique avec vestiges gaulois.',
    cartes: [
      { id: 'pierre_ancienne', nom: 'Pierre Ancienne', rarete: 'commun', description: 'Témoin silencieux des siècles passés.' },
      { id: 'sculpture_gauloise', nom: 'Sculpture Gauloise', rarete: 'rare', description: 'Art ancestral gravé dans la pierre.' },
      { id: 'chef_gaulois', nom: 'Chef Gaulois', rarete: 'épique', description: 'Guerrier légendaire des peuples anciens.' },
      { id: 'esprit_ancetre', nom: 'Esprit Ancêtre', rarete: 'légendaire', description: 'Mémoire vivante de la tribu disparue.' }
    ]
  },
  {
    id: 'musee_roulet',
    nom: 'Musée Roulet',
    description: 'Musée d\'histoire locale et d\'art.',
    cartes: [
      { id: 'tableau_classique', nom: 'Tableau Classique', rarete: 'commun', description: 'Peinture intemporelle d\'un autre âge.' },
      { id: 'sculpture_moderne', nom: 'Sculpture Moderne', rarete: 'rare', description: 'Forme audacieuse et contemporaine.' },
      { id: 'artiste_celebre', nom: 'Artiste Célèbre', rarete: 'épique', description: 'Génie créatif reconnu dans tout le canton.' },
      { id: 'chef_oeuvre', nom: 'Chef-d\'œuvre Unique', rarete: 'légendaire', description: 'Œuvre d\'art sans égale, précieuse et rare.' }
    ]
  },
  {
    id: 'jardin_botanique_nyon',
    nom: 'Jardin Botanique de Nyon',
    description: 'Jardin avec plantes rares et exotiques.',
    cartes: [
      { id: 'fleur_sauvage', nom: 'Fleur Sauvage', rarete: 'commun', description: 'Beauté simple poussant librement.' },
      { id: 'plante_exotique', nom: 'Plante Exotique', rarete: 'rare', description: 'Venue de contrées lointaines.' },
      { id: 'arbre_millennaire', nom: 'Arbre Millénaire', rarete: 'épique', description: 'Sage témoin du temps qui passe.' },
      { id: 'esprit_foret', nom: 'Esprit de la Forêt', rarete: 'légendaire', description: 'Protecteur mystique des bois enchantés.' }
    ]
  },
  {
    id: 'moulin_rouge_nyon',
    nom: 'Moulin Rouge de Nyon',
    description: 'Ancien moulin rénové en espace culturel.',
    cartes: [
      { id: 'meule_ancienne', nom: 'Meule Ancienne', rarete: 'commun', description: 'Usée par le grain et les années.' },
      { id: 'toile_moulin', nom: 'Toile du Moulin', rarete: 'rare', description: 'Capturant l\'âme du lieu sur la toile.' },
      { id: 'maitre_meunier', nom: 'Maître Meunier', rarete: 'épique', description: 'Habile et respecté dans son art.' },
      { id: 'ame_moulin', nom: 'Âme du Moulin', rarete: 'légendaire', description: 'Force invisible qui anime les pierres.' }
    ]
  },
  {
    id: 'villa_dumezil',
    nom: 'Villa Dumezil',
    description: 'Belle villa historique avec jardins.',
    cartes: [
      { id: 'cle_antique', nom: 'Clé Antique', rarete: 'commun', description: 'Ouvre des portes pleines de secrets.' },
      { id: 'portrait_familial', nom: 'Portrait Familial', rarete: 'rare', description: 'Représente les anciens résidents des lieux.' },
      { id: 'jardin_secret', nom: 'Jardin Secret', rarete: 'épique', description: 'Coin caché où règne la sérénité.' },
      { id: 'esprit_villa', nom: 'Esprit de la Villa', rarete: 'légendaire', description: 'Présence bienveillante entre les murs anciens.' }
    ]
  },
  {
    id: 'place_du_chateau',
    nom: 'Place du Château',
    description: 'Place centrale animée avec vue sur le château.',
    cartes: [
      { id: 'pave_ancien', nom: 'Pavé Ancien', rarete: 'commun', description: 'Foulé par des siècles de passants.' },
      { id: 'marchand_ambulant', nom: 'Marchand Ambulant', rarete: 'rare', description: 'Il apporte vie et couleur à la place.' },
      { id: 'fete_populaire', nom: 'Fête Populaire', rarete: 'épique', description: 'Moments festifs gravés dans les mémoires.' },
      { id: 'ame_place', nom: 'Âme de la Place', rarete: 'légendaire', description: 'Incarnation de l\'esprit collectif du lieu.' }
    ]
  },
  {
    id: 'bibliotheque_nyon',
    nom: 'Bibliothèque de Nyon',
    description: 'Bibliothèque municipale riche en ouvrages anciens.',
    cartes: [
      { id: 'livre_relier', nom: 'Livre Relié', rarete: 'commun', description: 'Pages jaunies pleines de savoir.' },
      { id: 'manuscrit_rare', nom: 'Manuscrit rare', rarete: 'rare', description: 'Texte ancien aux secrets oubliés.' },
      { id: 'ecrivain_celebre', nom: 'Écrivain Célèbre', rarete: 'épique', description: 'Auteur dont l\'œuvre traverse le temps.' },
      { id: 'savoir_ancien', nom: 'Savoir Ancien', rarete: 'légendaire', description: 'Connaissances profondes venues d\'un autre âge.' }
    ]
  }
];

export const lieuxCulturels = lieux;
