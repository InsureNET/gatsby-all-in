## gatsby-all-in
[![Netlify Status](https://api.netlify.com/api/v1/badges/b654c94e-08a6-4b79-b443-7837581b1d8d/deploy-status)](https://app.netlify.com/sites/gatsby-all-in/deploys)

### Introduction

This is a starter application using gatsby.js.

### Getting started

- Create a new Gatsby site using the gatsby-all-in starter: `gatsby new blog https://github.com/Gherciu/gatsby-all-in`
- Start dev server: `npm run start`

### Features

- `ESLint` and `Stylelint` to enforce code style. Run `npm run lint:scripts` for `.js|.jsx` and `npm run lint:styles` for `.css|.scss` files.
- Pre-commit hooks with `husky` and `lint-staged`
- Useful SCSS helpers `_mixins` and `_vars` see all in `./src/styles`
- `redux` and `redux-devtools` implimented and configured to work well in `development` mode and `production`. The store is hot reloadable ;)
- Aliases for all folders (components, styles, store etc.) see all available aliases in `./gatsby-config.js`
- `antd` is added and configured to work well as an UI framework (css normalization is not need, antd has own)
- All folders in `./src` have own README.md file with a little documentation and usage guide
- `Helmet` implimented and configured with `gatsby-plugin-react-helmet` see an example in `./src/layouts/MainLayout.js`
- Configured `tailwindcss` a utility-first CSS framework for rapidly building custom designs.

### When ready to build for production

- Ccreate file `.env.production` the content should be the same as in `.env.development`
- Build the project: `npm run build`
- Start production server: `npm run serve`

---

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**@Gherciu/gatsby-all-in** © [GHERCIU](https://github.com/Gherciu), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by GHERCIU with help from contributors ([list](https://github.com/Gherciu/gatsby-all-in/contributors)).

> [github.com/Gherciu](https://github.com/Gherciu) · GitHub [@GHERCIU](https://github.com/Gherciu)

#### If you like this repository star⭐ and watch👀 on [GitHub](https://github.com/Gherciu/gatsby-all-in)

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Gherciu/gatsby-all-in)
