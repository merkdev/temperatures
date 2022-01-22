# Temperatures

## Test results
[![CircleCI](https://circleci.com/gh/merkdev/temperatures/tree/circleci-project-setup.svg?style=svg)](https://circleci.com/gh/merkdev/temperatures/tree/circleci-project-setup)

<p align="center">
  <img width="128" height="128" src="./logo.png">
</p>

## Information
Convert any temperature between Celcius, Fahrenheit and Kelvin or vice versa.


## Example
### Install Package
```zsh
# Install package
npm install temperatures
# or
yarn add temperatures
```

### Usage
```js
// ES6
import TempConvert from "temperatures";

console.log(TempConvert.CToF(11));
```

```js
// ES6 with convert function
import TempConvert from "temperatures";

console.log(TempConvert.convert({
  from: "C",
  to: "K",
  value: 30
}));
```

```js
// ES5
const x = require("temperatures").default;

console.log(x.KToF(11));
```

## License
Licensed under The MIT License (MIT)
For the full copyright and license information, please view the LICENSE file.