# Portfolio

Portfolio personnel moderne construit avec Next.js 15, React 19, TypeScript et Tailwind CSS.

## 🚀 Technologies utilisées

- **Next.js 15** - Framework React avec App Router
- **React 19** - Bibliothèque d'interface utilisateur
- **TypeScript** - JavaScript typé
- **Tailwind CSS** - Framework CSS utilitaire
- **Shadcn/ui** - Composants UI modernes
- **Lucide React** - Icônes SVG
- **Geist** - Typographie moderne

## 📦 Installation

1. Cloner le repository

```bash
git clone <your-repo-url>
cd portfolio
```

2. Installer les dépendances

```bash
pnpm install
# ou
npm install
# ou
yarn install
```

## 🛠️ Scripts disponibles

```bash
# Développement
pnpm dev

# Build de production
pnpm build

# Démarrer en production
pnpm start

# Linting
pnpm lint
pnpm lint:fix

# Vérification des types TypeScript
pnpm type-check

# Nettoyer les fichiers de build
pnpm clean

# Analyser le bundle
pnpm analyze
```

## 🚀 Démarrage rapide

1. Lancer le serveur de développement :

```bash
pnpm dev
```

2. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur

## 📁 Structure du projet

```
portfolio/
├── app/                    # App Router de Next.js
│   ├── _components/       # Composants spécifiques aux pages
│   ├── fonts/            # Polices personnalisées
│   ├── globals.css       # Styles globaux
│   ├── layout.tsx        # Layout principal
│   └── page.tsx          # Page d'accueil
├── components/
│   └── ui/              # Composants UI réutilisables (Shadcn)
├── lib/
│   └── utils.ts         # Utilitaires et helpers
└── ...
```

## 🎨 Composants

Le projet utilise **Shadcn/ui** pour les composants UI. Les composants disponibles :

- Badge
- Button
- Card

## ⚡ Optimisations

- **Images** : Formats AVIF et WebP automatiques
- **Fonts** : Optimisation automatique avec Geist
- **Bundle** : Optimisation des imports pour lucide-react et radix-ui
- **TypeScript** : Configuration stricte pour une meilleure qualité de code

## 🚀 Déploiement

Le projet est optimisé pour un déploiement sur **Vercel** :

1. Connecter votre repository GitHub à Vercel
2. Le déploiement se fait automatiquement à chaque push

[Déployer sur Vercel](https://vercel.com/new)

## 📝 Contribuer

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/amazing-feature`)
3. Commit les changements (`git commit -m 'Add amazing feature'`)
4. Push sur la branche (`git push origin feature/amazing-feature`)
5. Ouvrir une Pull Request
