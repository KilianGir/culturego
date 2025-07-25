const lieux = [
    {
      id: 'musee_leman',
      nom: 'Musée du Léman',
      description: 'Musée dédié au lac Léman et à son écosystème.',
      cartes: [
        { id: 'lac_leman', nom: 'Lac Léman', rarete: 'commun' },
        { id: 'poisson_dore', nom: 'Poisson Doré', rarete: 'rare' },
        { id: 'tresor_englouti', nom: 'Trésor Englouti', rarete: 'épique' },
        { id: 'esprit_leman', nom: 'Esprit du Léman', rarete: 'légendaire' }
      ]
    },
    {
      id: 'chateau_nyon',
      nom: 'Château de Nyon',
      description: 'Château médiéval surplombant le lac Léman.',
      cartes: [
        { id: 'gardien_chateau', nom: 'Gardien du Château', rarete: 'commun' },
        { id: 'chevalier_errant', nom: 'Chevalier Errant', rarete: 'rare' },
        { id: 'esprit_donjon', nom: 'Esprit du Donjon', rarete: 'épique' },
        { id: 'seigneur_chateau', nom: 'Seigneur du Château', rarete: 'légendaire' }
      ]
    },
    {
      id: 'eglise_saint_vincent',
      nom: 'Église Saint-Vincent',
      description: 'Église gothique au cœur de Nyon.',
      cartes: [
        { id: 'cloche_antique', nom: 'Cloche Antique', rarete: 'commun' },
        { id: 'vitrail_colore', nom: 'Vitrail Coloré', rarete: 'rare' },
        { id: 'choeur_chantant', nom: 'Chœur Chantant', rarete: 'épique' },
        { id: 'saint_protecteur', nom: 'Saint Protecteur', rarete: 'légendaire' }
      ]
    },
    {
      id: 'parc_des_gaules',
      nom: 'Parc des Gaules',
      description: 'Parc historique avec vestiges gaulois.',
      cartes: [
        { id: 'pierre_ancienne', nom: 'Pierre Ancienne', rarete: 'commun' },
        { id: 'sculpture_gauloise', nom: 'Sculpture Gauloise', rarete: 'rare' },
        { id: 'chef_gaulois', nom: 'Chef Gaulois', rarete: 'épique' },
        { id: 'esprit_ancetre', nom: 'Esprit Ancêtre', rarete: 'légendaire' }
      ]
    },
    {
      id: 'musee_roulet',
      nom: 'Musée Roulet',
      description: 'Musée d’histoire locale et d’art.',
      cartes: [
        { id: 'tableau_classique', nom: 'Tableau Classique', rarete: 'commun' },
        { id: 'sculpture_moderne', nom: 'Sculpture Moderne', rarete: 'rare' },
        { id: 'artiste_celebre', nom: 'Artiste Célèbre', rarete: 'épique' },
        { id: 'chef_oeuvre', nom: 'Chef-d\'œuvre Unique', rarete: 'légendaire' }
      ]
    },
    {
      id: 'jardin_botanique_nyon',
      nom: 'Jardin Botanique de Nyon',
      description: 'Jardin avec plantes rares et exotiques.',
      cartes: [
        { id: 'fleur_sauvage', nom: 'Fleur Sauvage', rarete: 'commun' },
        { id: 'plante_exotique', nom: 'Plante Exotique', rarete: 'rare' },
        { id: 'arbre_millennaire', nom: 'Arbre Millénaire', rarete: 'épique' },
        { id: 'esprit_foret', nom: 'Esprit de la Forêt', rarete: 'légendaire' }
      ]
    },
    {
      id: 'moulin_rouge_nyon',
      nom: 'Moulin Rouge de Nyon',
      description: 'Ancien moulin rénové en espace culturel.',
      cartes: [
        { id: 'meule_ancienne', nom: 'Meule Ancienne', rarete: 'commun' },
        { id: 'toile_moulin', nom: 'Toile du Moulin', rarete: 'rare' },
        { id: 'maitre_meunier', nom: 'Maître Meunier', rarete: 'épique' },
        { id: 'ame_moulin', nom: 'Âme du Moulin', rarete: 'légendaire' }
      ]
    },
    {
      id: 'villa_dumezil',
      nom: 'Villa Dumezil',
      description: 'Belle villa historique avec jardins.',
      cartes: [
        { id: 'cle_antique', nom: 'Clé Antique', rarete: 'commun' },
        { id: 'portrait_familial', nom: 'Portrait Familial', rarete: 'rare' },
        { id: 'jardin_secret', nom: 'Jardin Secret', rarete: 'épique' },
        { id: 'esprit_villa', nom: 'Esprit de la Villa', rarete: 'légendaire' }
      ]
    },
    {
      id: 'place_du_chateau',
      nom: 'Place du Château',
      description: 'Place centrale animée avec vue sur le château.',
      cartes: [
        { id: 'pave_ancien', nom: 'Pavé Ancien', rarete: 'commun' },
        { id: 'marchand_ambulant', nom: 'Marchand Ambulant', rarete: 'rare' },
        { id: 'fete_populaire', nom: 'Fête Populaire', rarete: 'épique' },
        { id: 'ame_place', nom: 'Âme de la Place', rarete: 'légendaire' }
      ]
    },
    {
      id: 'bibliotheque_nyon',
      nom: 'Bibliothèque de Nyon',
      description: 'Bibliothèque municipale riche en ouvrages anciens.',
      cartes: [
        { id: 'livre_relier', nom: 'Livre Relié', rarete: 'commun' },
        { id: 'manuscrit_rare', nom: 'Manuscrit rare', rarete: 'rare' },
        { id: 'ecrivain_celebre', nom: 'Écrivain Célèbre', rarete: 'épique' },
        { id: 'savoir_ancien', nom: 'Savoir Ancien', rarete: 'légendaire' }
      ]
    }
  ];
  
export const lieuxCulturels = lieux;