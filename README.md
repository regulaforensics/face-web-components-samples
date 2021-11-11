# Table of сontents
1. [About](#about)
1. [NPM sample](#npm)
1. [CDN sample](#cdn)
1. [CodePen samples](#codepen)

---

<a name="about"></a>
## About

This repository contains examples of using [@regulaforensics/vp-frontend-face-components](https://www.npmjs.com/package/@regulaforensics/vp-frontend-face-components).

<a name="npm"></a>
## NPM sample

The ```npm``` folder contains an example of using components when installing a package via NPM.

### Creating a new project:

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
1. ```<face-liveness></face-liveness>``` - for liveness verification;

### Adding to an existing project:

Install package from NPM:

```
npm i @regulaforensics/vp-frontend-face-components
```

Import package into your ```.js``` file:

```javascript
import './node_modules/@regulaforensics/vp-frontend-face-components/dist/main.js';
```

Add the name of the component to your ```.html``` file. The list of components is given above.

<a name="cdn"></a>
## CDN sample

The ```cdn``` folder contains an example of using the component when connecting a package via a cdn link.

### Adding a package:

Connect the package to your ```.html``` file using the CDN link: ```unpkg.com/:package@:version/:file```

```html
<script src="https://unpkg.com/@regulaforensics/vp-frontend-face-components@0.0.1/dist/main.js"></script>
```

Add the name of the component to the html.

<a name="codepen"></a>
## CodePen samples

### Face detection component

https://codepen.io/regulaforensics/pen/zYdParM

### Face liveness component

https://codepen.io/regulaforensics/pen/pordKzd