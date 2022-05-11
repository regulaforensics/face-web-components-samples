# Table of сontents
1. [About](#about)
1. [NPM sample](#npm-sample)
1. [CDN sample](#cdn-sample)
1. [CodePen samples](#codepen-samples)

---

## About

This repository contains examples of using [@regulaforensics/vp-frontend-face-components](https://www.npmjs.com/package/@regulaforensics/vp-frontend-face-components).

## NPM sample

The ```npm``` folder contains an example of using components when installing a package via NPM.

### Creating a new Javascript project:

Create a folder for your project and go to it:

```
cd /path/to/project
```

Init your project:

```
npm init
```
Answer the questions in the command line questionnaire.

Install [@regulaforensics/vp-frontend-face-components](https://www.npmjs.com/package/@regulaforensics/vp-frontend-face-components):

```
npm i @regulaforensics/vp-frontend-face-components
```

Create ```index.html``` and ```index.js``` files in the root directory of the project.

Import ```@regulaforensics/vp-frontend-components``` into your ```index.js```:

```javascript
import './node_modules/@regulaforensics/vp-frontend-face-components/dist/main.js';
```

In ```index.html``` connect ```index.js``` and add the name of the component you want to use. Available components:

1. ```<face-capture></face-capture>``` - for create a face snapshot;
2. ```<face-liveness></face-liveness>``` - for liveness verification;

### Creating a new Typescript project:

Create a folder for your project and go to it:

```
cd /path/to/project
```

Init your project:

```
npm init
```
Answer the questions in the command line questionnaire.

Install dev-dependencies and [@regulaforensics/vp-frontend-face-components](https://www.npmjs.com/package/@regulaforensics/vp-frontend-face-components):

```
npm i @regulaforensics/vp-frontend-face-components
npm i -D @types/pako ts-loader tsconfig-paths-webpack-plugin typescript webpack webpack-cli
```

Create ```index.html```, ```index.ts```, ```tsconfig.json``` and ```webpack.config.js``` files in the root directory of the project.

Add in your ```tsconfig.json``` file:

```json
{
  "compilerOptions": {
    "outDir": "./build",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "target": "ES6",
    "module": "ES6",
    "moduleResolution": "node",
    "strictNullChecks": true,
    "suppressImplicitAnyIndexErrors": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "isolatedModules": true,
    "baseUrl": ".",
    "paths": {
      "@face-component": ["./node_modules/@regulaforensics/vp-frontend-face-components/dist/main.js"],
      "@face-types": ["./node_modules/@regulaforensics/vp-frontend-face-components/lib/web-components"]
    }
  }
}
```

Add in your ```webpack.config.js``` file:

```javascript
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: './index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
    plugins: [
      new TsconfigPathsPlugin()
    ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
  },
};
```

Import ```@face-component``` into your ```index.ts```:

```javascript
import './node_modules/@regulaforensics/vp-frontend-face-components/dist/main.js';
```

In ```index.html``` connect ```index.js``` like:
```html
<script type="module" src="./build/index.js"></script>
```

Add the name of the component you want to use. Available components:

1. ```<face-capture></face-capture>``` - for create a face snapshot;
1. ```<face-liveness></face-liveness>``` - for liveness verification;

### Adding to an existing Javascript project:

Install package from NPM:

```
npm i @regulaforensics/vp-frontend-face-components
```

Import package into your ```.js``` file:

```javascript
import './node_modules/@regulaforensics/vp-frontend-face-components/dist/main.js';
```

Add the name of the component to your ```.html``` file. The list of components is given above.

### Adding to an existing Typescript project:

Install package from NPM:

```
npm i @regulaforensics/vp-frontend-face-components
```

Import package and types into your ```.ts``` file:

```typescript
import './node_modules/@regulaforensics/vp-frontend-face-components/dist/main.js';
import { Needed_type } from './node_modules/@regulaforensics/vp-frontend-face-components/lib/web-components';
```

Add the name of the component to your ```.html``` file. The list of components is given above.

## CDN sample

The ```cdn``` folder contains an example of using the component when connecting a package via a cdn link.

### Adding a package:

Connect the package to your ```.html``` file using the CDN link: ```unpkg.com/:package@:version/:file```

```html
<script src="https://unpkg.com/@regulaforensics/vp-frontend-face-components@1.3.0/dist/main.js"></script>
```

Add the name of the component to the html.

## CodePen samples

### Face detection component

https://codepen.io/regulaforensics/pen/zYdParM

### Face liveness component

https://codepen.io/regulaforensics/pen/pordKzd