const lieux = [
  {
    id: 'musee_leman',
    nom: 'Musée du Léman',
    description: 'Musée dédié au lac Léman et à son écosystème.',
    cartes: [
      { id: 'lac_leman', nom: 'Lac Léman', rarete: 'commun', description: 'Étendue majestueuse aux eaux profondes.' },
      { id: 'poisson_dore', nom: 'Poisson Doré', rarete: 'rare', description: 'Espèce rare, brillante comme l\'or.' },
      { id: 'tresor_englouti', nom: 'Trésor Englouti', rarete: 'epique', description: 'Mystérieux vestiges cachés sous les flots.' },
      { id: 'esprit_leman', nom: 'Esprit du Léman', rarete: 'legendaire', description: 'Gardien ancestral des eaux du lac.' }
    ]
  },
  {
    id: 'chateau_nyon',
    nom: 'Château de Nyon',
    description: 'Château médiéval surplombant le lac Léman.',
    cartes: [
      { id: 'gardien_chateau', nom: 'Gardien du Château', rarete: 'commun', description: 'Il veille attentivement sur les murs et les tours du château.' },
      { id: 'chevalier_errant', nom: 'Chevalier Errant', rarete: 'rare', description: 'De passage au château, il est toujours prêt à dégainer son épée.' },
      { id: 'esprit_donjon', nom: 'Esprit du Donjon', rarete: 'epique', description: 'Âme mystérieuse qui hante les profondeurs du château.' },
      { id: 'seigneur_chateau', nom: 'Seigneur du Château', rarete: 'legendaire', description: 'En noble maître des lieux, son autorité est incontestée.' }
    ]
  },
  {
    id: 'temple_nyon',
    nom: 'Temple de Nyon',
    description: 'Temple protestant situé dans la ville de Nyon.',
    cartes: [
      { id: 'cloche_antique', nom: 'Cloche Antique', rarete: 'commun', description: 'Résonne encore des prières d\'autrefois.' },
      { id: 'vitrail_colore', nom: 'Vitrail Coloré', rarete: 'rare', description: 'Illumine l\'intérieur de mille éclats.' },
      { id: 'choeur_chantant', nom: 'Chœur Chantant', rarete: 'epique', description: 'Écho céleste des voix sacrées.' },
      { id: 'saint_protecteur', nom: 'Saint Protecteur', rarete: 'legendaire', description: 'Gardien spirituel de la ville.' }
    ]
  },
  {
    id: 'amphitheatre_nyon',
    nom: 'Amphithéâtre de Nyon',
    description: 'Parc historique avec vestiges gaulois.',
    cartes: [
      { id: 'pierre_ancienne', nom: 'Pierre Ancienne', rarete: 'commun', description: 'Témoin silencieux des siècles passés.' },
      { id: 'sculpture_romaine', nom: 'Sculpture Romaine', rarete: 'rare', description: 'Art ancestral gravé dans la pierre.' },
      { id: 'chef_romain', nom: 'Chef Romain', rarete: 'epique', description: 'Guerrier légendaire des peuples anciens.' },
      { id: 'esprit_ancetre', nom: 'Esprit Ancêtre', rarete: 'legendaire', description: 'Mémoire vivante de la tribu disparue.' }
    ]
  },
  {
    id: 'place_du_chateau',
    nom: 'Place du Château',
    description: 'Place centrale animée avec vue sur le château.',
    cartes: [
      { id: 'pave_ancien', nom: 'Pavé Ancien', rarete: 'commun', description: 'Foulé par des siècles de passants.' },
      { id: 'marchand_ambulant', nom: 'Marchand Ambulant', rarete: 'rare', description: 'Il apporte vie et couleur à la place.' },
      { id: 'fete_populaire', nom: 'Fête Populaire', rarete: 'epique', description: 'Moments festifs gravés dans les mémoires.' },
      { id: 'ame_place', nom: 'Âme de la Place', rarete: 'legendaire', description: 'Incarnation de l\'esprit collectif du lieu.' }
    ]
  },
  {
    id: 'bibliotheque_nyon',
    nom: 'Bibliothèque de Nyon',
    description: 'Bibliothèque municipale riche en ouvrages anciens.',
    cartes: [
      { id: 'livre_relier', nom: 'Livre Relié', rarete: 'commun', description: 'Pages jaunies pleines de savoir.' },
      { id: 'manuscrit_rare', nom: 'Manuscrit rare', rarete: 'rare', description: 'Texte ancien aux secrets oubliés.' },
      { id: 'ecrivain_celebre', nom: 'Écrivain Célèbre', rarete: 'epique', description: 'Auteur dont l\'œuvre traverse le temps.' },
      { id: 'savoir_ancien', nom: 'Savoir Ancien', rarete: 'legendaire', description: 'Connaissances profondes venues d\'un autre âge.' }
    ]
  }
];

export const lieuxCulturels = lieux;
