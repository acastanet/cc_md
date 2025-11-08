#!/usr/bin/env node

/**
 * Script de validation du code HTML et JavaScript
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Validation du fichier index.html...\n');

// Lire le fichier
const htmlPath = path.join(__dirname, 'index.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

let errors = 0;
let warnings = 0;

// Vérifications de base
console.log('📋 Vérifications de base:');

// 1. Vérifier la présence des balises essentielles
const checks = [
    { pattern: /<html/i, name: 'Balise <html>' },
    { pattern: /<head>/i, name: 'Balise <head>' },
    { pattern: /<body>/i, name: 'Balise <body>' },
    { pattern: /toggleDarkMode/i, name: 'Fonction toggleDarkMode()' },
    { pattern: /exportToHTML/i, name: 'Fonction exportToHTML()' },
    { pattern: /\.dark-mode|classList\.toggle\('dark-mode'\)/i, name: 'Styles mode sombre' },
    { pattern: /theme-toggle-btn/i, name: 'Bouton toggle' },
    { pattern: /localStorage\.setItem\('dark-mode'/i, name: 'Persistance localStorage' },
    { pattern: /MathJax/i, name: 'Support MathJax' },
];

checks.forEach(check => {
    if (check.pattern.test(htmlContent)) {
        console.log(`  ✅ ${check.name}`);
    } else {
        console.log(`  ❌ ${check.name} - MANQUANT`);
        errors++;
    }
});

// 2. Vérifier les styles du mode sombre
console.log('\n🎨 Vérification des styles du mode sombre:');

const darkModeStyles = [
    { pattern: /body\.dark-mode/i, name: 'Classe body.dark-mode' },
    { pattern: /background:?\s*#1a1a1a/i, name: 'Background sombre principal' },
    { pattern: /background:?\s*#2d3748/i, name: 'Background éditeur sombre' },
    { pattern: /color:?\s*#e0e0e0/i, name: 'Couleur texte sombre' },
];

darkModeStyles.forEach(check => {
    if (check.pattern.test(htmlContent)) {
        console.log(`  ✅ ${check.name}`);
    } else {
        console.log(`  ⚠️  ${check.name} - Vérifier manuellement`);
        warnings++;
    }
});

// 3. Vérifier l'export HTML
console.log('\n📤 Vérification de l\'export HTML:');

const exportChecks = [
    { pattern: /isDarkMode.*classList\.contains\('dark-mode'\)/i, name: 'Détection mode actuel' },
    { pattern: /darkModeStyles/i, name: 'Styles export mode sombre' },
    { pattern: /lightModeStyles/i, name: 'Styles export mode clair' },
];

exportChecks.forEach(check => {
    if (check.pattern.test(htmlContent)) {
        console.log(`  ✅ ${check.name}`);
    } else {
        console.log(`  ❌ ${check.name} - MANQUANT`);
        errors++;
    }
});

// 4. Vérifier la cohérence des couleurs
console.log('\n🎯 Vérification de la cohérence:');

// Compter les occurrences de la classe dark-mode
const darkModeCount = (htmlContent.match(/body\.dark-mode/g) || []).length;
console.log(`  ℹ️  Nombre de règles CSS pour .dark-mode: ${darkModeCount}`);

if (darkModeCount >= 10) {
    console.log(`  ✅ Styles du mode sombre complets`);
} else {
    console.log(`  ⚠️  Nombre de règles CSS pour le mode sombre semble faible`);
    warnings++;
}

// Résumé
console.log('\n' + '='.repeat(50));
console.log('📊 RÉSUMÉ:');
console.log('='.repeat(50));
console.log(`Erreurs: ${errors}`);
console.log(`Avertissements: ${warnings}`);

if (errors === 0 && warnings === 0) {
    console.log('\n✅ Tous les tests sont passés avec succès!');
    console.log('\n📝 Prochaines étapes:');
    console.log('  1. Ouvrir http://localhost:8080/index.html');
    console.log('  2. Tester le basculement du mode sombre');
    console.log('  3. Tester l\'export HTML dans les deux modes');
    console.log('  4. Vérifier le rendu des formules LaTeX');
    process.exit(0);
} else if (errors === 0) {
    console.log('\n⚠️  Tests passés avec quelques avertissements');
    console.log('Vérifiez manuellement les points marqués ci-dessus.');
    process.exit(0);
} else {
    console.log('\n❌ Des erreurs ont été détectées!');
    console.log('Corrigez les problèmes avant de continuer.');
    process.exit(1);
}
