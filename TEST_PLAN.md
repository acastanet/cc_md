# Plan de Test - Mode Sombre et Export HTML

## Fonctionnalités Implémentées

### 1. Mode Sombre
- ✅ Bouton toggle "🌙 Mode Sombre" / "☀️ Mode Clair" dans le header
- ✅ Styles CSS complets pour le mode sombre
- ✅ Persistance de la préférence dans localStorage
- ✅ Application automatique au démarrage

### 2. Styles Mode Sombre
- ✅ Background principal : #1a1a1a
- ✅ Texte : #e0e0e0
- ✅ Header avec dégradé sombre
- ✅ Éditeur Markdown : fond #2d3748
- ✅ Zone de rendu : fond #1a1a1a
- ✅ Code blocks : fond #2d3748
- ✅ Tableaux avec bordures #4a5568
- ✅ Liens en bleu clair #90cdf4
- ✅ Citations avec couleur adaptée #a0aec0

### 3. Export HTML
- ✅ Détection du mode actuel (clair/sombre)
- ✅ Export avec les styles correspondants
- ✅ Support LaTeX (MathJax) dans l'export
- ✅ Styles adaptatifs selon le mode

## Tests à Effectuer

### Test 1 : Mode Clair (par défaut)
1. Ouvrir index.html dans un navigateur
2. Vérifier que le design est en mode clair
3. Vérifier la lisibilité du contenu
4. Vérifier le rendu du Markdown et LaTeX

### Test 2 : Basculement Mode Sombre
1. Cliquer sur le bouton "🌙 Mode Sombre"
2. Vérifier que :
   - Le bouton change en "☀️ Mode Clair"
   - Tout le design passe en mode sombre
   - Les couleurs sont cohérentes
   - Le texte est lisible
   - Le code est visible avec bon contraste
   - Les tableaux sont correctement stylés

### Test 3 : Persistance
1. Activer le mode sombre
2. Recharger la page
3. Vérifier que le mode sombre est toujours actif

### Test 4 : Export HTML en Mode Clair
1. Désactiver le mode sombre (mode clair)
2. Cliquer sur "📥 Exporter en HTML"
3. Ouvrir le fichier exporté
4. Vérifier que :
   - Le document est en mode clair
   - Les formules LaTeX s'affichent correctement
   - Le markdown est bien rendu

### Test 5 : Export HTML en Mode Sombre
1. Activer le mode sombre
2. Cliquer sur "📥 Exporter en HTML"
3. Ouvrir le fichier exporté
4. Vérifier que :
   - Le document est en mode sombre
   - Les couleurs sont cohérentes
   - Les formules LaTeX s'affichent correctement
   - Tous les éléments (code, tableaux, liens) sont visibles

### Test 6 : Contenu Markdown Complexe
Tester avec le contenu par défaut qui contient :
- [x] Titres H1, H2, H3
- [x] Texte en gras et italique
- [x] Listes à puces et numérotées
- [x] Blocs de code
- [x] Citations
- [x] Liens
- [x] Tableaux
- [x] Formules LaTeX inline et block
- [x] Lignes de séparation

## Résultats Attendus

### Mode Sombre
- Background sombre reposant pour les yeux
- Contraste suffisant pour la lisibilité
- Cohérence visuelle sur tous les éléments
- Transitions fluides lors du basculement

### Export HTML
- Fichier HTML autonome et complet
- Styles intégrés (pas de dépendances externes sauf MathJax)
- Rendu identique au mode actuel de l'éditeur
- Support complet des formules mathématiques

## Serveur de Test

Un serveur HTTP est disponible sur http://localhost:8080
- Ouvrez http://localhost:8080/index.html pour tester
- Les fichiers exportés seront téléchargés automatiquement

## Notes Techniques

### CSS Variables Utilisées
- Mode Clair : backgrounds blancs/gris clairs (#f8f9fa, #f4f4f4)
- Mode Sombre : backgrounds noirs/gris foncés (#1a1a1a, #2d3748, #4a5568)

### JavaScript
- `toggleDarkMode()` : gère le basculement
- `localStorage` : persiste la préférence
- Export adaptatif basé sur `document.body.classList.contains('dark-mode')`

## Conclusion

L'implémentation du mode sombre est complète avec :
- Interface utilisateur intuitive
- Styles complets et cohérents
- Persistance des préférences
- Export HTML adaptatif
- Support complet du Markdown et LaTeX dans les deux modes
