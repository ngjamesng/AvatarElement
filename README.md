# avatar_element

Enter a number, and get the corresponding avatar element. Based on the ***Avatar: The Last Airbender*** and ***Avatar: The Legend of Korra*** tv series. 

## Installation
```bash
$ npm install avatar_element
```

## Usage

```js
const getAvatarElement = require("avatar_element")

// Aang was 182, and was an airbender
getAvatarElement(182) // returns "air"

// Korra was 183 and a water bender
getAvatarElement(183) // returns "water"
```