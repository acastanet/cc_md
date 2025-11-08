# Fonctionnalités de l'Éditeur Markdown

## Vue d'ensemble
Application web permettant d'écrire et de prévisualiser du contenu Markdown en temps réel avec support LaTeX.

---

## 1. Édition Markdown en Temps Réel

### Description
Zone d'édition de texte avec prévisualisation instantanée du rendu HTML.

### Fonctionnement
- **Panneau gauche** : Écriture du code Markdown
- **Panneau droit** : Aperçu du rendu HTML en direct
- Mise à jour automatique à chaque frappe

### Éléments Markdown supportés
- Titres (`#`, `##`, `###`, etc.)
- **Gras** (`**texte**`)
- *Italique* (`*texte*`)
- Listes à puces et numérotées
- Blocs de code avec coloration syntaxique
- Citations (`> texte`)
- Liens (`[texte](url)`)
- Images (`![alt](url)`)
- Tableaux
- Séparateurs horizontaux (`---`)

---

## 2. Support des Formules Mathématiques (LaTeX)

### Description
Rendu de formules mathématiques avec la syntaxe LaTeX via MathJax.

### Types de formules

#### Formules en ligne
Syntaxe : `$formule$`

**Exemple :**
```
L'équation $E = mc^2$ d'Einstein
```

#### Formules en bloc
Syntaxe : `$$formule$$`

**Exemple :**
```
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

### Capacités
- Intégrales
- Fractions
- Racines carrées
- Exposants et indices
- Symboles mathématiques
- Matrices
- Équations multi-lignes

---

## 3. Mode Sombre / Mode Clair

### Description
Basculement entre un thème clair et un thème sombre pour un confort visuel optimal.

### Utilisation
**Bouton :** 🌙 Mode Sombre / ☀️ Mode Clair (en haut à droite)

### Fonctionnement
- **Un clic** : Change immédiatement le thème
- **Persistance** : Votre choix est sauvegardé automatiquement
- **Au redémarrage** : Le mode précédemment choisi est restauré

### Éléments affectés
- Arrière-plan général
- Zone d'édition
- Zone de prévisualisation
- En-tête
- Éléments de texte
- Blocs de code
- Tableaux
- Barres de défilement

---

## 4. Export HTML

### Description
Exportation du contenu rendu en fichier HTML autonome et portable.

### Utilisation
**Bouton :** 📥 Exporter en HTML (en haut à droite)

### Caractéristiques de l'export

#### Adaptation au mode actuel
- **Mode clair actif** → Export avec styles clairs
- **Mode sombre actif** → Export avec styles sombres

#### Contenu du fichier exporté
- Document HTML complet et autonome
- Tous les styles CSS intégrés
- Support MathJax inclus (via CDN)
- Formules LaTeX rendues correctement
- Pas de dépendances externes (sauf MathJax CDN)

#### Nom du fichier
`document-exporte.html`

#### Confirmation
Une notification "✅ Exporté !" s'affiche pendant 2 secondes après l'export.

---

## 5. Sauvegarde Automatique

### Description
Sauvegarde automatique du contenu dans le navigateur.

### Fonctionnement
- **Sauvegarde** : Automatique à chaque modification
- **Stockage** : Dans le localStorage du navigateur
- **Restauration** : Automatique au rechargement de la page

### Avantages
- Pas de perte de travail en cas de fermeture accidentelle
- Travail continu entre les sessions
- Aucune action manuelle requise

---

## 6. Gestion des Tabulations

### Description
Insertion de tabulations (indentation) dans la zone d'édition.

### Utilisation
- **Touche Tab** : Insère 4 espaces
- Fonctionne dans le textarea sans changer de focus

### Utilité
- Indentation de code
- Listes imbriquées
- Structuration du contenu

---

## 7. Interface Responsive

### Description
Adaptation automatique de l'interface à la taille de l'écran.

### Comportement

#### Sur grand écran
- 2 colonnes côte à côte
- Éditeur à gauche
- Prévisualisation à droite

#### Sur mobile (< 768px)
- 1 colonne
- Éditeur en haut
- Prévisualisation en bas
- Défilement vertical

---

## 8. Exemple Intégré

### Description
Contenu d'exemple pré-chargé au premier démarrage.

### Contenu de l'exemple
- Démonstration des titres
- Texte formaté (gras, italique)
- Listes
- Code
- Citations
- Liens
- Tableaux
- Formules LaTeX (inline et bloc)

### Utilité
- Apprentissage rapide de la syntaxe
- Template de démarrage
- Référence visuelle

---

## Résumé des Fonctionnalités

| Fonctionnalité | Description | Bouton/Action |
|----------------|-------------|---------------|
| **Édition live** | Prévisualisation en temps réel | Écrire dans la zone de gauche |
| **Support LaTeX** | Formules mathématiques | Utiliser `$...$` ou `$$...$$` |
| **Mode sombre** | Thème sombre/clair | 🌙 / ☀️ |
| **Export HTML** | Télécharger en HTML | 📥 Exporter en HTML |
| **Sauvegarde auto** | Persistance du contenu | Automatique |
| **Tabulation** | Indentation | Touche Tab |
| **Responsive** | Adaptation mobile | Automatique |
| **Exemple** | Template de départ | Automatique au 1er lancement |

---

## Raccourcis et Astuces

### Raccourcis
- **Tab** : Insérer une indentation (4 espaces)
- **Ctrl/Cmd + S** : Le navigateur peut proposer de sauvegarder (selon config)

### Astuces
1. Le contenu est sauvegardé automatiquement, inutile de sauvegarder manuellement
2. Exportez en HTML pour partager ou archiver votre document
3. Utilisez le mode sombre la nuit pour réduire la fatigue oculaire
4. Les formules LaTeX nécessitent une connexion internet (MathJax CDN)
5. Le fichier exporté peut être ouvert hors ligne (sauf les formules LaTeX qui nécessitent une connexion)

---

## Limitations Connues

1. **MathJax CDN** : Nécessite une connexion internet pour le rendu LaTeX
2. **Stockage local** : Le contenu est lié au navigateur (ne se synchronise pas entre appareils)
3. **Taille limite** : Le localStorage a une limite (~5-10 MB selon navigateur)
4. **Export unique** : Un seul fichier à la fois, pas d'export batch

---

## Compatibilité

### Navigateurs supportés
- Chrome / Edge (recommandé)
- Firefox
- Safari
- Opera

### Prérequis
- JavaScript activé
- Connexion internet (pour MathJax)
- Navigateur moderne (ES6+)
