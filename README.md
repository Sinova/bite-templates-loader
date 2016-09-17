# bite-templates-loader

A Webpack loader for [Bite.js](https://sinova.github.io/Bite.js/)

## Installation

```Bash
npm install --save-dev bite-templates bite-templates-loader
```

## Usage

```JavaScript
var template = require('bite-templates-loader!./my_file.bite');
```

## Webpack Configuration

```JavaScript
module.exports = {
	module: {
		loaders: [
			{
				test   : /\.bite$/,
				loader : 'bite-templates-loader'
			}
		]
	}
};
```
