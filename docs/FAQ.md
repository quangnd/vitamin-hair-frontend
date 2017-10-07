## FAQ (updating...)

<a name="what-do-the-scripts-in-package.json-do"></a>
### What do the scripts in package.json do?
Unfortunately, scripts in package.json can't be commented inline because the JSON spec doesn't support comments, so I'm providing info on what each script in package.json does here.

| **Script** | **Description** |
|----------|-------|
| remove-demo | Removes the demo application so you can begin development. |
| prestart | Runs automatically before start. Calls remove-dist script which deletes the dist folder. This helps remind you to run the build script before committing since the dist folder will be deleted if you don't. ;) |
| start | Runs tests, lints, starts dev webserver, and opens the app in your default browser. |
| lint:tools | Runs ESLint on build related JS files. (eslint-loader lints src files via webpack when `npm start` is run) |
| clean-dist | Removes everything from the dist folder. |
| remove-dist | Deletes the dist folder. |
| create-dist | Creates the dist folder and the necessary subfolders. |
| prebuild | Runs automatically before build script (due to naming convention). Cleans dist folder, builds html, and builds sass. |
| build | Bundles all JavaScript using webpack and writes it to /dist. |
| test | Runs tests (files ending in .spec.js or .test.js) using Jest and outputs results to the command line. Watches all files so tests are re-run upon save. |
| test:cover | Runs tests as described above. Generates a HTML coverage report to ./coverage/index.html |
| test:cover:travis | Runs coverage as described above, however sends machine readable lcov data to Coveralls. This should only be used from the travis build! |
| analyze-bundle | Analyzes webpack bundles for production and gives you a breakdown of where modules are used and their sizes via a convenient interactive zoomable treemap. |

<a name="what-are-the-dependencies-in-package.json-used-for"></a>
### What are the dependencies in package.json used for?
| **Dependency** | **Use** |
|----------|-------|
|autoprefixer | Automatically adds vendor prefixes, using data from Can I Use. |
|object-assign | Polyfill for Object.assign |
|babel-cli|Babel Command line interface |
|babel-core|Babel Core for transpiling the new JavaScript to old |
|babel-eslint|Integrates Babel with ESLint so experimental JS features ESLint doesn't support yet can be linted.
|babel-jest|Integrates Babel with Jest so tests are transpiled|
|babel-loader|Adds Babel support to Webpack |
|babel-polyfill|Polyfills features that cannot be transpiled|
|babel-plugin-react-display-name| Add displayName to React.createClass calls |
|babel-plugin-transform-react-constant-elements | Performance optimization: Hoists the creation of elements that are fully static to the top level. reduces calls to React.createElement and the resulting memory allocations. [More info](https://medium.com/doctolib-engineering/improve-react-performance-with-babel-16f1becfaa25#.2wbkg8g4d) |
|babel-preset-latest|Babel preset for ES2015, ES2016 and ES2017|
|babel-preset-react-hmre|Hot reloading preset for Babel|
|babel-preset-react| Add JSX support to Babel |
|babel-preset-stage-1| Include stage 1 feature support in Babel |
|browser-sync| Supports synchronized testing on multiple devices and serves local app on public URL |
|chalk|Adds color support to terminal |
|connect-history-api-fallback  | Support reloading deep links |
|coveralls|For tracking and displaying code coverage information via Coveralls.io|
|cross-env|Cross-environment friendly way to handle environment variables|
|css-loader|Add CSS support to Webpack|
|enzyme|Simplified JavaScript Testing utilities for React|
|eslint|Lints JavaScript |
|eslint-loader|Adds ESLint support to Webpack |
|eslint-plugin-import|Adds ES6 import related linting rules|
|eslint-plugin-react|Adds additional React-related rules to ESLint|
|eslint-watch|Wraps ESLint to provide file watch support and enhanced command line output|
|extract-text-webpack-plugin| Extracts CSS into separate file for production build |
|file-loader| Adds file loading support to Webpack |
|html-webpack-plugin|Generates custom index.html for each environment as part of webpack build|
|identity-obj-proxy|Mocks webpack imports that Jest doesn't understand such as image and CSS imports.|
|jest|Testing framework|
|json-loader|Enhance Webpack to support importing .json files|
|mockdate|Mock dates in testing|
|node-sass| Adds SASS support to Webpack |
|npm-run-all| Run multiple scripts at the same time |
|open|Open the app in your default browser|
|postcss-loader| Adds PostCSS support to Webpack |
|react|React library |
|redux-immutable-state-invariant|Alert if Redux state is mutated (helps catch bugs, since Redux state is immutable)|
|react-dom|React library for DOM rendering |
|react-router|React library for routing |
|react-test-renderer|Renders React components to pure JavaScript objects without depending on the DOM or a native mobile environment|
|replace|Renaming files, cross-platform|
|rimraf|Delete files, cross-platform |
|sass-loader| Adds Sass support to Webpack|
|style-loader| Add Style support to Webpack |
|url-loader|Add Webpack support for loading files via url with querystring |
|webpack| Bundler with plugin system and integrated development server |
|webpack-bundle-analyzer| Webpack plugin and CLI utility that represents bundle content as convenient interactive zoomable treemap |
|webpack-dev-middleware| Used to integrate Webpack with Browser-sync |
|webpack-hot-middleware| Use to integrate Webpack's hot reloading support with Browser-sync |
|webpack-md5-hash| Hash bundles, and use the hash for the filename so that the filename only changes when contents change|
