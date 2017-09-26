# React Site V2

## React Site V1
Find my old site @ https://github.com/fayyazazam/fayyazazam.github.io/tree/v1-react-site

## Project Info

### Development
- `npm run build` to build for deployment
- `npm run start` to start dev environment on `localhost:8080`

### Webpack
- `webpack.production.config.js` is for production build: `npm run build`
- `webpack.config.js` is for development: `npm run start`

### Project Structural Info
- `/dist` is where all the project files go after they are built for production
- `/template/index.template.html` is the template for `index.html` that webpack looks at.
- `/assets` contains the `.scss` and any image files used in the site.
- `/main.js` our initial entry point; includes HMR / .scss / initial render 
- `/config/Root.js` is the primary component (should be moved), handles routing and component loading.
