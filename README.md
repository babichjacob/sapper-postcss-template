<h1 align="center">🌐 Sapper with PostCSS project base</h1>

## ❓ What is this?

This is a relatively lightweight extension to the [official Sapper Rollup template](https://github.com/sveltejs/sapper-template-rollup) with support for PostCSS inside Svelte components. You are also recommended to check out [@nhristov's similar template](https://github.com/nhristov/sapper-template-rollup).

If you're looking for something with much, much more bundled in, check out [my opinionated project base](https://github.com/babichjacob/sapper-firebase-typescript-graphql-tailwindcss-actions-template).

- [Sapper for Svelte](https://sapper.svelte.dev/)
  - [Official VS Code Plugin (beta)](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)
- [PostCSS](https://postcss.org/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [postcss-import](https://github.com/postcss/postcss-import)
  - [PurgeCSS](https://www.purgecss.com/)
  - [CSSNano](https://cssnano.co/)
  - Inside Svelte components, thanks to [`svelte-preprocess`](https://github.com/kaisermann/svelte-preprocess)
- [Progressive Web App (PWA)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) best practices set up
  - [`manifest.json`](https://developer.mozilla.org/en-US/docs/Web/Manifest)'s most important fields filled out
  - High [Lighthouse](https://developers.google.com/web/tools/lighthouse) audit score
- [ESLint](https://eslint.org/)
  - [VS Code Plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - `eslint:fix` package script

## 📋 Copy

Choose either to clone or fork depending on your preference.

### 🐑 Clone

```sh
git clone https://github.com/babichjacob/sapper-postcss-template
```

### 🍴 Fork

Click the `Use this template` button on [this project's GitHub page](https://github.com/babichjacob/sapper-postcss-template).

### ⬇️ Install Dependencies

```shell
cd sapper-postcss-template
npm install  # pnpm also works
```

## 🛠 Usage

### 🧪 Development

```shell
npm run dev
```

### 🔨 Building for Production
If you do not need to include heavy Babel transforms and polyfills to support old browsers on your site, then remove the `--legacy` flag in the `build` package script to lighten it up.
```shell
npm run prod
```

### 📦 Exporting a Static Site
If you do not need to include heavy Babel transforms and polyfills to support old browsers on your site, then remove the `--legacy` flag in the `export` package script to lighten it up.
```shell
npm run export
```

## ⚙ Configuration

### 💨 Optionally removing Tailwind CSS

1. Remove all Tailwind imports in the `src/global.pcss` file
2. Remove these lines in `postcss.config.js`:
    1. ```js
       import tailwindcss from "tailwindcss";
       ```
    3. ```js
       import tailwindcssConfig from "./tailwind.config";
       ```
    3. ```js
       tailwindcss(tailwindcssConfig),
       ```
3. Delete the `tailwind.config.js` file
4. Uninstall the `tailwindcss` package

### ⚡ Web app
Many of the fields in `static/manifest.json` (`short_name`, `name`, `description`, `categories`, `theme_color`, and `background_color`) are filled with demonstrative values that won't match your site. Similarly, you've got to take new screenshots to replace the included `static/screenshot-1.png` file.

The [Apple touch icon](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html), favicon, and `logo-` files (also all in the `static` directory) are created by placing the logo within a "safe area" centered circle that takes up 80% of the canvas's dimension. For instance, the constraining circle in `logo-512.png` is 512 × 0.80 = 409.6 ≈ 410 pixels wide and tall. 

### 🗺 Source maps
This project base comes with [source maps](https://blog.teamtreehouse.com/introduction-source-maps) enabled during development and disabled during production (and exports) for the best compromise between performance and developer experience. You can change this behavior through the `sourcemap` variable in `rollup.config.js`.

## 😵 Help! I have a question

[Create an issue](https://github.com/babichjacob/sapper-postcss-template/issues/new) and I'll try to help.

## 😡 Fix! There is something that needs improvement

[Create an issue](https://github.com/babichjacob/sapper-postcss-template/issues/new) or [pull request](https://github.com/babichjacob/sapper-postcss-template/pulls) and I'll try to fix.

I'm sorry, because of my skill level and the fragility of (the combination of) some of these tools, there are likely to be problems in this project. Thank you for bringing them to my attention or fixing them for me.

## 📄 License

MIT

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
