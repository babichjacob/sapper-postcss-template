<h1 align="center">🌐 Sapper with PostCSS project base</h1>

## ❓ What is this?
This is a relatively lightweight extension to the [official Sapper Rollup template](https://github.com/sveltejs/sapper-template-rollup) with support for PostCSS inside Svelte components. You are also recommended to check out [@nhristov's similar template](https://github.com/nhristov/sapper-template-rollup).

If you're looking for something with much, much more bundled in, check out [my opinionated project base](https://github.com/babichjacob/sapper-firebase-typescript-graphql-tailwindcss-actions-template).
* [Sapper for Svelte](https://sapper.svelte.dev/)
  * [Official VS Code Plugin (beta)](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)
  * [Type Checker VS Code Plugin](https://marketplace.visualstudio.com/items?itemName=halfnelson.svelte-type-checker-vscode)
* [PostCSS](https://postcss.org/)
  * [Tailwind CSS](https://tailwindcss.com/)
  * [postcss-import](https://github.com/postcss/postcss-import)
  * [PurgeCSS](https://www.purgecss.com/)
  * [CSSNano](https://cssnano.co/)
  * Inside Svelte components, thanks to [`svelte-preprocess`](https://github.com/kaisermann/svelte-preprocess)
* [ESLint](https://eslint.org/)
  * [VS Code Plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  * `eslint:fix` package script

## 📋 Copy
Choose either to clone or fork depending on your preference.

### 🐑 Clone
```sh
git clone https://github.com/babichjacob/sapper-postcss-template
```

### 🍴 Fork
Click the `Use this template` button on [this project's GitHub page](https://github.com/babichjacob/sapper-postcss-template).


### ⬇️ Install Dependencies
```sh
cd sapper-postcss-template
npm install
```

## 🛠 Usage
### 🔄 Development
```sh
npm run dev
```

### 📦 Building for Production
```sh
npm run prod
```

## ⚙ Configuration
### 💨 Optionally removing Tailwind CSS
1. Remove all Tailwind imports in the `src/global.pcss` file
2. Remove the `require("tailwindcss")("./tailwind.config.js"),` line in `postcss.config.js`
3. Delete the `tailwind.config.js` file
4. Because PurgeCSS is bundled with Tailwind CSS, if you want to reinstate it then install `@fullhuman/postcss-purgecss` and add this to the end of your PostCSS plugins list (in `postcss.config.js`):
```js
!dev && require("@fullhuman/postcss-purgecss")({
    content: ["./src/**/*.svelte", "./src/**/*.html"],
    defaultExtractor: (content) => {
        let matching = [];

        const regulars = content.match(/[\w-/:%]+(?<!:)/g);
        const classDirectives = content.match(
            /(?<=class:)[\w-/:%]+(?<!:)/g
        );

        if (regulars) {
            matching.push(...regulars);
        }

        if (classDirectives) {
            matching.push(...classDirectives);
        }

        return matching;
    },
}),
```

## 😵 Help! I have a question
[Create an issue](https://github.com/babichjacob/sapper-postcss-template/issues/new) and I'll try to help.

## 😡 Fix! There is something that needs improvement
[Create an issue](https://github.com/babichjacob/sapper-postcss-template/issues/new) or [pull request](https://github.com/babichjacob/sapper-postcss-template/pulls) and I'll try to fix.

I'm sorry, because of my skill level and the fragility of (the combination of) some of these tools, there are likely to be problems in this project. Thank you for bringing them to my attention or fixing them for me.

## 📄 License
MIT

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
