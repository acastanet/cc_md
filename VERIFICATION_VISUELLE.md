# 🎨 Vérification Visuelle - Mode Sombre

## Instructions de Test

Pour vérifier visuellement l'implémentation du mode sombre :

### 1. Démarrer le Serveur
```bash
cd /home/user/cc_md
python3 -m http.server 8080
```

### 2. Ouvrir dans le Navigateur
```
http://localhost:8080/index.html
```

## Points de Vérification Visuelle

### A. Mode Clair (par défaut)

#### Header
- [ ] Gradient violet/rose (de #667eea à #764ba2)
- [ ] Titre "📝 Éditeur Markdown en Temps Réel" en blanc
- [ ] Bouton "🌙 Mode Sombre" avec fond blanc et texte violet
- [ ] Bouton "📥 Exporter en HTML" avec fond blanc et texte violet

#### Colonne Gauche (Éditeur)
- [ ] En-tête "Markdown (Source)" sur fond gris clair (#f8f9fa)
- [ ] Zone de texte avec fond gris clair (#f8f9fa)
- [ ] Texte en police monospace
- [ ] Bordure droite grise (#e9ecef)

#### Colonne Droite (Rendu)
- [ ] En-tête "Aperçu (Rendu)" sur fond gris clair (#f8f9fa)
- [ ] Zone de rendu avec fond blanc
- [ ] Titres avec bordures grises
- [ ] Code blocks sur fond gris clair (#f4f4f4)
- [ ] Tableaux avec bordures et en-têtes gris clair
- [ ] Liens en violet (#667eea)
- [ ] Citations avec bordure gauche violette

#### Formules LaTeX
- [ ] Formules inline bien rendues : $E = mc^2$
- [ ] Formules block centrées et lisibles
- [ ] Équation de Schrödinger complète

---

### B. Mode Sombre (après activation)

#### Header
- [ ] Gradient gris foncé (de #4a5568 à #2d3748)
- [ ] Titre toujours en blanc
- [ ] Bouton "☀️ Mode Clair" avec fond gris foncé (#2d3748) et texte clair
- [ ] Bouton "📥 Exporter en HTML" avec fond gris foncé et texte clair
- [ ] Effet hover sur les boutons (background #4a5568)

#### Colonne Gauche (Éditeur)
- [ ] En-tête sur fond gris foncé (#2d3748) avec texte clair
- [ ] Zone de texte avec fond gris foncé (#2d3748)
- [ ] Texte en gris clair (#e0e0e0)
- [ ] Bordure droite gris moyen (#4a5568)
- [ ] Curseur visible

#### Colonne Droite (Rendu)
- [ ] En-tête sur fond gris foncé (#2d3748) avec texte clair
- [ ] Zone de rendu avec fond noir doux (#1a1a1a)
- [ ] Texte en gris clair (#e0e0e0)
- [ ] Titres H1/H2 avec bordures gris moyen (#4a5568)
- [ ] Titres lisibles et bien contrastés

#### Éléments Spéciaux
- [ ] Code inline : fond gris foncé (#2d3748), texte clair
- [ ] Code blocks : fond gris foncé (#2d3748), texte clair
- [ ] Tableaux : bordures gris moyen (#4a5568)
- [ ] En-têtes de tableaux : fond gris foncé (#2d3748)
- [ ] Liens en bleu clair (#90cdf4) - bien visible
- [ ] Citations : bordure violette, texte gris-bleu (#a0aec0)
- [ ] Lignes de séparation (HR) : gris moyen (#4a5568)

#### Formules LaTeX (Mode Sombre)
- [ ] Formules inline toujours lisibles
- [ ] Formules block avec bon contraste
- [ ] Symboles mathématiques clairs
- [ ] Pas de "halo" blanc autour des formules

#### Scrollbar
- [ ] Track (fond) : gris foncé (#2d3748)
- [ ] Thumb (curseur) : gris moyen (#4a5568)
- [ ] Hover : gris plus clair (#718096)

---

### C. Transition Mode Clair ↔ Sombre

#### Animation
- [ ] Changement fluide et instantané
- [ ] Pas de flash blanc/noir
- [ ] Bouton change de texte immédiatement
- [ ] Tous les éléments changent en même temps

#### Cohérence
- [ ] Aucun élément ne reste dans l'ancien mode
- [ ] Les bordures changent de couleur
- [ ] Le texte reste lisible pendant la transition
- [ ] Les formules LaTeX se re-rendent correctement

---

### D. Export HTML en Mode Clair

#### Processus
1. [ ] S'assurer d'être en mode clair
2. [ ] Cliquer sur "📥 Exporter en HTML"
3. [ ] Bouton affiche "✅ Exporté !" pendant 2 secondes
4. [ ] Fichier `document-exporte.html` téléchargé

#### Contenu du Fichier Exporté
1. [ ] Ouvrir le fichier dans un nouvel onglet
2. [ ] Vérifier : fond blanc
3. [ ] Vérifier : texte noir/gris foncé
4. [ ] Vérifier : code blocks gris clair (#f4f4f4)
5. [ ] Vérifier : liens violets (#667eea)
6. [ ] Vérifier : tableaux avec fond gris clair
7. [ ] Vérifier : formules LaTeX bien rendues
8. [ ] Vérifier : pas de boutons ou controls
9. [ ] Vérifier : contenu centré (max-width: 900px)
10. [ ] Vérifier : padding de 2rem autour

---

### E. Export HTML en Mode Sombre

#### Processus
1. [ ] Activer le mode sombre
2. [ ] Cliquer sur "📥 Exporter en HTML"
3. [ ] Bouton affiche "✅ Exporté !"
4. [ ] Nouveau fichier téléchargé

#### Contenu du Fichier Exporté
1. [ ] Ouvrir le fichier dans un nouvel onglet
2. [ ] Vérifier : fond noir doux (#1a1a1a)
3. [ ] Vérifier : texte gris clair (#e0e0e0)
4. [ ] Vérifier : code blocks gris foncé (#2d3748)
5. [ ] Vérifier : liens bleu clair (#90cdf4)
6. [ ] Vérifier : tableaux avec bordures gris moyen (#4a5568)
7. [ ] Vérifier : en-têtes de tableaux gris foncé (#2d3748)
8. [ ] Vérifier : citations gris-bleu (#a0aec0)
9. [ ] Vérifier : formules LaTeX lisibles en mode sombre
10. [ ] Vérifier : titres avec bordures gris moyen (#4a5568)

---

### F. Persistance

#### Test 1 : Mode Sombre
1. [ ] Activer le mode sombre
2. [ ] Recharger la page (F5)
3. [ ] Vérifier : mode sombre toujours actif
4. [ ] Vérifier : bouton affiche "☀️ Mode Clair"

#### Test 2 : Mode Clair
1. [ ] Désactiver le mode sombre (retour au clair)
2. [ ] Recharger la page (F5)
3. [ ] Vérifier : mode clair actif
4. [ ] Vérifier : bouton affiche "🌙 Mode Sombre"

#### Test 3 : Nouveau Onglet
1. [ ] Activer le mode sombre
2. [ ] Ouvrir `index.html` dans un nouvel onglet
3. [ ] Vérifier : mode sombre actif dès le départ

#### Test 4 : Effacer le Cache
1. [ ] Ouvrir DevTools (F12)
2. [ ] Aller dans Application > Local Storage
3. [ ] Vérifier la présence de `dark-mode: "enabled"` ou `"disabled"`
4. [ ] Supprimer la clé `dark-mode`
5. [ ] Recharger la page
6. [ ] Vérifier : retour au mode clair par défaut

---

### G. Responsive Design

#### Desktop (>768px)
- [ ] Deux colonnes côte à côte
- [ ] Bordure verticale entre les colonnes
- [ ] Boutons dans le header bien alignés

#### Mobile/Tablette (<768px)
1. [ ] Redimensionner la fenêtre à moins de 768px
2. [ ] Vérifier : colonnes empilées verticalement
3. [ ] Vérifier : bordure horizontale entre les colonnes
4. [ ] Vérifier : header responsive
5. [ ] Vérifier : boutons toujours accessibles

---

### H. Tests de Contenu

#### Markdown Complexe
Tester avec :
```markdown
# Titre H1
## Titre H2
### Titre H3

**Gras** et *italique*

- Liste 1
- Liste 2

1. Numérotée 1
2. Numérotée 2

`code inline`

\`\`\`javascript
const code = "block";
\`\`\`

> Citation importante

[Lien](https://example.com)

| Col1 | Col2 |
|------|------|
| A    | B    |

---

$E = mc^2$

$$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$$
```

#### Vérifier en Mode Clair
- [ ] Tous les éléments bien rendus
- [ ] Formules LaTeX correctes
- [ ] Code lisible
- [ ] Tableau formaté

#### Vérifier en Mode Sombre
- [ ] Tous les éléments bien rendus
- [ ] Contraste suffisant partout
- [ ] Rien n'est invisible ou illisible
- [ ] Formules LaTeX avec bon contraste

---

## Résultats Attendus

### ✅ Succès si :
- Tous les éléments visuels sont corrects dans les deux modes
- Les transitions sont fluides
- L'export HTML respecte le mode actuel
- La persistance fonctionne
- Le contenu est toujours lisible
- Les formules LaTeX s'affichent correctement

### ❌ Échec si :
- Des éléments restent dans l'ancien mode après transition
- Le texte est illisible dans un mode
- L'export ne respecte pas le mode
- Les formules LaTeX ne s'affichent pas
- La persistance ne fonctionne pas

---

## Checklist Finale

### Fonctionnalités
- [ ] Mode sombre activable/désactivable
- [ ] Bouton toggle fonctionnel
- [ ] Tous les éléments stylisés en mode sombre
- [ ] Export HTML en mode clair
- [ ] Export HTML en mode sombre
- [ ] Persistance localStorage

### Qualité Visuelle
- [ ] Contraste suffisant (mode sombre)
- [ ] Cohérence des couleurs
- [ ] Transitions fluides
- [ ] Pas de flash lors du changement
- [ ] Scrollbars stylisées

### Contenu
- [ ] Markdown rendu correctement
- [ ] LaTeX fonctionnel
- [ ] Tableaux bien formatés
- [ ] Code blocks lisibles
- [ ] Liens cliquables et visibles

### Technique
- [ ] Pas d'erreurs console
- [ ] localStorage accessible
- [ ] Export télécharge un fichier
- [ ] Fichier exporté autonome

---

## Notes

Si un test échoue :
1. Ouvrir la console (F12)
2. Vérifier les erreurs JavaScript
3. Inspecter les éléments CSS
4. Vérifier localStorage
5. Tester dans un autre navigateur

---

**Date de vérification** : ________________

**Navigateur utilisé** : ________________

**Résolution d'écran** : ________________

**Tests réussis** : _____ / Total

**Commentaires** :
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________
