# random-generated-password - NPM package to generate configurable passwords

![GitHub](https://img.shields.io/github/license/manghidev/random-generated-password)
![GitHub package.json version](https://img.shields.io/github/package-json/v/manghidev/random-generated-password)
![npm](https://img.shields.io/npm/dm/random-generated-password)

# Installation
```shellscript
npm i random-generated-password
```

The library has 7 options to generate a password:

- alphabet
    - Use all lowercase letters of the alphabet
- alphabetUpper
    - Use all the letters of the alphabet in uppercase
- alphabetaAll
    - Use all letters of the alphabet in upper and lower case
- numeric
    - Use all the numbers from 0 to 9
- alphanumeric
    - Uses all uppercase and lowercase letters of the alphabet and all numbers from 0 to 9
- characters
    - Uses all the characters from the list below
- all
    - Uses all uppercase and lowercase letters of the alphabet, all numbers from 0 to 9 and all special characters

# Usage example with default characters
```javascript

import { generatePassword } from 'random-generated-password';

const pass = generatePassword({ size: 20, type: 'all' });

console.log(pass); // outpud: >HV_S:Cv9UBY^*PO#:k;
```

# Usage example with custom characters
```javascript

import { generatePassword } from 'random-generated-password';

const pass = generatePassword({ size: 20, type: 'all', mySpecialCharacters: '&%&$_--][!}{--_$&%&' /* optional */ });

console.log(pass); // outpud: ZT}hoDksb&knF%k2-4_I
```