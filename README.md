# newsportalwebapp

This is a demo project of News Article using Angular 17. It contains the feauture like listing the latest 5 news article. managing the news article..

## Get started

### Clone the repo

```shell
git clone https://github.com/rahulkumarmahto/newsportalwebapp.git
cd newsportalwebapp
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

The `npm start` command builds (compiles TypeScript and copies assets) the application into `dist/`, watches for changes to the source files, and runs `lite-server` on port `4200`.

Shut it down manually with `Ctrl-C`.

#### npm scripts

These are the most useful commands defined in `package.json`:

* `npm start` - runs the TypeScript compiler, asset copier, and a server at the same time, all three in "watch mode".
* `npm run build` - runs the TypeScript compiler and asset copier once.
* `npm run build:watch` - runs the TypeScript compiler and asset copier in "watch mode"; when changes occur to source files, they will be recompiled or copied into `dist/`.
* `npm run lint` - runs `tslint` on the project files.
* `npm run serve` - runs `lite-server`.

## Packages:
npm install primeng

## With angular.json
"styles": [
    "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
    "node_modules/primeng/resources/primeng.min.css",
    ...
]

### With styles.css

@import "primeng/resources/themes/lara-light-blue/theme.css";
@import "primeng/resources/primeng.css";
