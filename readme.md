# 🪟 Site Vitrine - Loutik

Ce dépôt héberge le code source du site vitrine de l'activité professionnelle **Loutik**.
Il s'agit d'un site statique performant, conteneurisé avec Docker et servi par un serveur Nginx optimisé.

## 📋 À propos

Ce projet a pour but de présenter les services, les partenaires et l'identité de Loutik.
Actuellement développé en **HTML/CSS/JS natif** (sans framework ni Node.js), il est conçu pour être léger, rapide et facilement déployable sur une infrastructure Kubernetes.

## 🏗️ Architecture du projet

L'architecture sépare clairement la configuration (DevOps) du contenu public.

```text
├── .github/              # Pipelines CI/CD (GitHub Actions)
├── public/               # Racine du site web (accessible aux visiteurs)
│   ├── css/              # Feuilles de styles
│   ├── favicon/          # Icônes et manifeste
│   ├── images/           # Assets graphiques (SVG, PNG)
│   ├── js/               # Scripts interactifs
│   ├── *.html            # Pages du site
│   └── robots.txt        # Configuration SEO
├── Dockerfile            # Instruction de construction de l'image
├── nginx.conf            # Configuration du serveur web
└── readme.md             # Documentation du projet
```

## 🚀 Installation et Démarrage

### Prérequis

* Docker installé sur votre machine.

### Lancer le projet localement (via Docker)

Pour tester le site dans des conditions de production (avec la configuration Nginx active), il est recommandé d'utiliser Docker :

1. **Construire l'image :**
```bash
docker build -t site-vitrine-loutik .
```


2. **Lancer le conteneur :**
```bash
docker run -d -p 80:80 --name loutik-web site-vitrine-loutik

```

3. **Accéder au site :**
Ouvrez votre navigateur sur `http://localhost:80`.

## ⚙️ Configuration Nginx

Le fichier `nginx.conf` à la racine inclut des règles spécifiques pour l'expérience utilisateur et le SEO :

* **Clean URLs :** Suppression des extensions `.html` dans l'URL (ex: `/a-propos` affiche le contenu de `a-propos.html`).
* **Sécurité :** Masquage de la version de Nginx (`server_tokens off`).
* **Gestion d'erreurs :** Redirection personnalisée vers `404.html`.
* **Favicon :** Redirection transparente de `/favicon.ico` vers le dossier `/favicon/`.
* **Normalisation :** Suppression automatique des slashs de fin d'URL (trailing slash) et redirection de `/index` vers la racine `/`.

## 🔄 CI/CD (Intégration Continue)

Le déploiement est automatisé via **GitHub Actions** (`.github/workflows/docker-publish.yml`).

* **Registry :** Les images sont stockées sur le GitHub Container Registry (GHCR).
* **Tags automatiques :**
* Push sur `main` → tag `latest`.
* Création d'une release (vX.Y.Z) → tag `vX.Y.Z` (Version sémantique).

## 📅 Roadmap / Évolutions futures

* [ ] Migration du projet vers **PHP** (image `php:fpm-alpine` + Nginx) pour permettre l'intégration dynamique du numéro de version en pied de page.
* [ ] Optimisation et minification automatique des assets CSS/JS.

## 👤 Auteur

**Louis MEDO** - *Passionné par l'administration système ❤️*