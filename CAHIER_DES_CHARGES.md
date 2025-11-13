# Cahier des Charges - Éditeur LaTeX en Temps Réel

## 1. Présentation du Projet

### 1.1 Contexte
Application web permettant l'édition et le rendu en temps réel de contenu Markdown et LaTeX, destinée aux étudiants, chercheurs, enseignants et professionnels ayant besoin de rédiger des documents scientifiques et mathématiques.

### 1.2 Objectifs
- Fournir un éditeur WYSIWYG pour LaTeX sans installation locale
- Permettre la visualisation instantanée du rendu des formules mathématiques
- Faciliter la création de documents scientifiques avec une interface intuitive
- Offrir des fonctionnalités d'export et de partage

---

## 2. Spécifications Fonctionnelles

### 2.1 Fonctionnalités Principales

#### 2.1.1 Éditeur de Texte
- **Zone de saisie** : Textarea avec coloration syntaxique pour le code LaTeX/Markdown
- **Police monospace** : Monaco, Menlo, Ubuntu Mono, Courier New
- **Taille de police** : 14px avec interligne de 1.8
- **Support des tabulations** : Insertion automatique de 4 espaces
- **Placeholder** : Message d'aide initial

#### 2.1.2 Rendu en Temps Réel
- **Mise à jour instantanée** : Déclenchée à chaque modification (événement `input`)
- **Parser Markdown** : Utilisation de Marked.js
- **Moteur LaTeX** : MathJax 3 pour le rendu des formules
- **Zone de prévisualisation** : Affichage formaté dans la colonne droite

#### 2.1.3 Support LaTeX Complet

##### Formules Mathématiques
- **En ligne** : `$...$` ou `\(...\)`
- **En bloc** : `$$...$$` ou `\[...\]`

##### Opérations de Base
- Fractions : `\frac{a}{b}`
- Racines : `\sqrt{x}`, `\sqrt[n]{x}`
- Puissances : `x^n`
- Indices : `x_i`

##### Opérateurs
- Sommes : `\sum_{i=1}^{n}`
- Produits : `\prod_{i=1}^{n}`
- Intégrales : `\int`, `\iint`, `\iiint`, `\oint`
- Limites : `\lim_{x \to a}`
- Dérivées : `\frac{d}{dx}`, `\frac{\partial}{\partial x}`

##### Structures
- Matrices : `\begin{pmatrix}`, `\begin{bmatrix}`, `\begin{vmatrix}`
- Systèmes d'équations : `\begin{cases}...\end{cases}`
- Alignements : `\begin{align}...\end{align}`

##### Symboles
- Grecs : `\alpha`, `\beta`, `\gamma`, `\delta`, `\theta`, `\pi`, `\Omega`...
- Opérateurs : `\pm`, `\times`, `\div`, `\cdot`
- Relations : `\leq`, `\geq`, `\neq`, `\approx`, `\equiv`
- Ensembles : `\in`, `\notin`, `\subset`, `\cup`, `\cap`
- Flèches : `\to`, `\rightarrow`, `\Rightarrow`, `\leftrightarrow`

##### Fonctions
- Trigonométrie : `\sin`, `\cos`, `\tan`, `\arcsin`...
- Logarithmes : `\log`, `\ln`
- Autres : `\exp`, `\max`, `\min`, `\sup`, `\inf`

### 2.2 Fonctionnalités Secondaires

#### 2.2.1 Mode Sombre
- **Basculement** : Bouton toggle dans l'en-tête
- **Persistance** : Sauvegarde de la préférence dans localStorage
- **Thème sombre** : Palette de couleurs adaptée (gris foncés, bleus)
- **Thème clair** : Couleurs par défaut

#### 2.2.2 Gestion du Contenu
- **Sauvegarde automatique** : Stockage dans localStorage à chaque modification
- **Chargement automatique** : Restauration du contenu au démarrage
- **Effacement** : Bouton avec confirmation
- **Exemple préchargé** : Guide complet des balises LaTeX

#### 2.2.3 Export et Partage
- **Export HTML** : Génération d'un document HTML autonome
  - Inclusion de MathJax
  - Styles embarqués
  - Respect du mode sombre/clair
  - Téléchargement automatique
- **Copie du rendu** : Copie du texte formaté dans le presse-papiers

#### 2.2.4 Notifications
- **Toast messages** : Notifications temporaires en bas à droite
- **Durée** : 2 secondes par défaut
- **Style** : Fond vert, texte blanc, ombre portée

---

## 3. Spécifications Techniques

### 3.1 Architecture

#### 3.1.1 Frontend
- **Technologie** : HTML5, CSS3, JavaScript Vanilla (pas de framework)
- **Mode** : Client-side uniquement (pas de backend)
- **Responsive** : Adaptation mobile avec media queries

#### 3.1.2 Bibliothèques Externes
- **Marked.js** : v4+ (parser Markdown)
  - Source : `https://cdn.jsdelivr.net/npm/marked/marked.min.js`
- **MathJax** : v3
  - Source : `https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js`
  - Packages : ams, cases, mathtools

#### 3.1.3 Configuration MathJax
```javascript
window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        processEscapes: true,
        processEnvironments: true,
        packages: {'[+]': ['ams', 'cases', 'mathtools']},
        tags: 'ams'
    }
}
```

#### 3.1.4 Configuration Marked.js
```javascript
marked.setOptions({
    breaks: true,
    gfm: true,
    headerIds: true,
    mangle: false,
    sanitize: false
})
```

### 3.2 Interface Utilisateur

#### 3.2.1 Layout
- **Structure** : Disposition en colonnes (50/50)
- **En-tête** : Titre + boutons d'action
- **Colonne gauche** : Éditeur de code
- **Colonne droite** : Zone de prévisualisation
- **Responsive** : Empilage vertical sur mobile (<768px)

#### 3.2.2 Palette de Couleurs

##### Mode Clair
- Fond principal : `#f5f5f5`
- Fond éditeur : `#fafafa`
- Fond prévisualisation : `white`
- Texte : `#1e293b`
- Headers : `#1e293b`
- Accent : `#3b82f6` (bleu)
- Gradient header : `#2563eb` → `#7c3aed`

##### Mode Sombre
- Fond principal : `#0f172a`
- Fond éditeur : `#1e293b`
- Fond prévisualisation : `#1e293b`
- Texte : `#e2e8f0`
- Headers : `#0f172a`
- Accent : `#3b82f6` (bleu)

#### 3.2.3 Typographie
- **Famille** : -apple-system, BlinkMacSystemFont, Segoe UI, Roboto
- **Code** : Monaco, Menlo, Ubuntu Mono, Courier New
- **Tailles** :
  - H1 : 2em
  - H2 : 1.5em
  - H3 : 1.25em
  - Corps : 16px
  - Code : 14px

### 3.3 Performances

#### 3.3.1 Optimisations
- **Rendu asynchrone** : MathJax.typesetPromise()
- **Gestion d'erreurs** : Try/catch sur le parsing
- **Débouncing** : Pas implémenté (rendu instantané suffisant pour usage normal)

#### 3.3.2 Stockage
- **localStorage** :
  - Clé `latex-content` : Contenu de l'éditeur
  - Clé `latex-dark-mode` : Préférence thème (enabled/disabled)
- **Limite** : ~5-10 MB selon navigateur

### 3.4 Compatibilité

#### 3.4.1 Navigateurs
- Chrome/Edge : v90+
- Firefox : v88+
- Safari : v14+
- Opera : v76+

#### 3.4.2 Appareils
- Desktop : Tous OS (Windows, macOS, Linux)
- Tablette : iPad, Android
- Mobile : Responsive mais usage limité (petits écrans)

---

## 4. Spécifications Non-Fonctionnelles

### 4.1 Performance
- **Temps de chargement initial** : < 2 secondes
- **Temps de rendu** : < 100ms pour formules simples
- **Taille page** : ~16 KB (HTML + CSS + JS inline)
- **Bande passante** : Nécessite connexion internet pour CDN

### 4.2 Sécurité
- **XSS** : marked.js avec sanitize: false (à surveiller)
- **CSP** : Pas de Content Security Policy stricte
- **HTTPS** : Recommandé pour les CDN

### 4.3 Accessibilité
- **Contrastes** : Ratios WCAG AA respectés
- **Navigation clavier** : Support basique (Tab, Enter)
- **Screen readers** : Support limité (formules mathématiques)

### 4.4 Maintenance
- **Code** : JavaScript vanilla, facile à maintenir
- **Dépendances** : 2 bibliothèques externes (CDN)
- **Documentation** : Code commenté, console.log pour debug

---

## 5. Cas d'Usage

### 5.1 Utilisateur : Étudiant en Mathématiques
**Objectif** : Rédiger des devoirs avec formules mathématiques
**Actions** :
1. Ouvre l'application
2. Tape les formules avec syntaxe LaTeX
3. Visualise le rendu en temps réel
4. Exporte en HTML pour remettre le devoir

### 5.2 Utilisateur : Enseignant
**Objectif** : Créer des supports de cours
**Actions** :
1. Charge l'exemple pour référence
2. Rédige le cours avec sections et formules
3. Active le mode sombre pour confort visuel
4. Exporte en HTML pour publication

### 5.3 Utilisateur : Chercheur
**Objectif** : Rédiger des articles scientifiques
**Actions** :
1. Colle du contenu LaTeX existant
2. Vérifie le rendu des équations complexes
3. Modifie et ajuste en temps réel
4. Copie le rendu pour intégration ailleurs

---

## 6. Tests et Validation

### 6.1 Tests Fonctionnels

#### 6.1.1 Rendu LaTeX
- [ ] Formules en ligne s'affichent correctement
- [ ] Formules en bloc s'affichent correctement
- [ ] Matrices se formatent correctement
- [ ] Symboles grecs s'affichent
- [ ] Fractions complexes imbriquées fonctionnent

#### 6.1.2 Fonctionnalités
- [ ] Mode sombre bascule correctement
- [ ] Export HTML télécharge un fichier
- [ ] Copie dans presse-papiers fonctionne
- [ ] Sauvegarde localStorage persiste au rechargement
- [ ] Bouton "Exemple" charge le guide
- [ ] Bouton "Effacer" vide l'éditeur après confirmation

#### 6.1.3 Interface
- [ ] Layout responsive fonctionne sur mobile
- [ ] Scrolling vertical dans preview fonctionne
- [ ] Tabulations insèrent 4 espaces
- [ ] Toast notifications apparaissent et disparaissent

### 6.2 Tests de Performance
- [ ] Chargement page < 2 secondes
- [ ] Rendu formules simples < 100ms
- [ ] Pas de lag lors de la frappe
- [ ] Gestion de gros documents (>1000 lignes)

### 6.3 Tests de Compatibilité
- [ ] Chrome/Edge : Toutes fonctionnalités OK
- [ ] Firefox : Toutes fonctionnalités OK
- [ ] Safari : Toutes fonctionnalités OK
- [ ] Mobile (iOS) : Interface responsive
- [ ] Mobile (Android) : Interface responsive

---

## 7. Évolutions Futures

### 7.1 Améliorations Court Terme
- Coloration syntaxique dans l'éditeur
- Numérotation des lignes
- Raccourcis clavier (Ctrl+S pour sauvegarder, etc.)
- Historique d'annulation (Undo/Redo)

### 7.2 Améliorations Moyen Terme
- Export en PDF
- Export en Markdown
- Import de fichiers .tex
- Bibliothèque de snippets LaTeX
- Auto-complétion des commandes LaTeX

### 7.3 Améliorations Long Terme
- Mode collaboratif en temps réel
- Sauvegarde cloud (compte utilisateur)
- Templates de documents
- Plugin système
- Support d'autres langages (AsciiMath, etc.)

---

## 8. Contraintes et Limitations

### 8.1 Contraintes Techniques
- **Connexion internet requise** : CDN pour MathJax et Marked.js
- **Taille localStorage** : Limitée selon navigateur (~5-10 MB)
- **Performance** : Formules très complexes peuvent ralentir
- **Compatibilité** : Navigateurs anciens non supportés

### 8.2 Limitations Fonctionnelles
- **Pas de backend** : Pas de sauvegarde serveur
- **Pas d'authentification** : Pas de comptes utilisateurs
- **Pas de collaboration** : Édition solo uniquement
- **Export limité** : HTML uniquement (pas de PDF direct)

### 8.3 Limitations LaTeX
- **Packages** : Seulement ams, cases, mathtools
- **Macros** : Limitées à la configuration MathJax
- **Environnements** : Pas tous supportés (tikz, pgfplots, etc.)

---

## 9. Annexes

### 9.1 Exemple de Contenu LaTeX Supporté

```latex
# Titre Principal

## Sous-titre

Texte avec formule en ligne : $E = mc^2$

Formule en bloc :
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

Matrice :
$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$

Système :
$$
\begin{cases}
x + y = 5 \\
2x - y = 1
\end{cases}
$$
```

### 9.2 Structure des Fichiers

```
/cc_md/
├── index.html              # Ancien éditeur Markdown
├── latex-workflow.html     # Éditeur LaTeX (principal)
├── test-validation.js      # Tests (si existant)
├── CAHIER_DES_CHARGES.md   # Ce document
└── README.md               # Documentation utilisateur (si créé)
```

### 9.3 Ressources Externes
- Documentation MathJax : https://docs.mathjax.org/
- Documentation Marked.js : https://marked.js.org/
- Syntaxe LaTeX : https://www.latex-project.org/
- Guide LaTeX math : https://en.wikibooks.org/wiki/LaTeX/Mathematics

---

## 10. Glossaire

- **LaTeX** : Système de composition de documents scientifiques
- **Markdown** : Langage de balisage léger
- **MathJax** : Bibliothèque JavaScript pour afficher du LaTeX dans navigateurs
- **CDN** : Content Delivery Network (réseau de distribution de contenu)
- **localStorage** : API de stockage local du navigateur
- **WYSIWYG** : What You See Is What You Get (ce que vous voyez est ce que vous obtenez)
- **Toast** : Notification légère et temporaire
- **Responsive** : Interface qui s'adapte à la taille de l'écran

---

**Version** : 1.0
**Date** : 13 novembre 2025
**Auteur** : Claude (Anthropic)
**Projet** : Éditeur LaTeX en Temps Réel
