// * Characters to use for generating the password
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphabetUpper = alphabet.toUpperCase();
const numbers = '0123456789';
const specialCharacters = '!@#$%^&*()_+~`|}{[]\:;<>?';

/**
 * @param {json} params - The parameter object
 * @param {string} params.size - The size of the password to generate
 * @param {string} params.type - The type of password to generate (alphabet, alphabetUpper, alphabetaAll, numeric, alphanumeric, characters, all)
 * @returns {string} - The generated password
 */
export const generatePassword = (params) => {
    const { size, type } = params;
    
    // * Variables for generating the password
    let characters = '';
    let charactersRandomOrder = '';
    let pass = '';
    let arrayCharacters = [];

    // * Select the type of password to generate
    switch (type) {
        case 'alphabet':
            characters = alphabet;
            break;
        case 'alphabetUpper':
            characters = alphabetUpper;
            break;
        case 'alphabetaAll':
            characters = alphabet + alphabetUpper;
            break;
        case 'numeric':
            characters = numbers;
            break;
        case 'alphanumeric':
            characters = alphabet + alphabetUpper + numbers;
            break;
        case 'characters':
            characters = specialCharacters;
            break;
        case 'all':
            characters = alphabet + alphabetUpper + numbers + specialCharacters;
            break;
        default:
            throw new Error('Invalid type of password, please use "alphabet", "numeric", "alphanumeric" or "all"');
    }

    // * Split the characters into an array
    arrayCharacters = characters.split('');

    // * Move the characters random
    charactersRandomOrder += arrayCharacters.sort(() => Math.random() - (Math.random() * (1 - Math.round(Math.random() * 10)) + Math.round(Math.random() * 10)).toFixed(2));

    // * Assign characters in random order to the characters variable
    characters = charactersRandomOrder.replace(/,/g, '');

    // * Generate the password
    for (let i = 0; i < size; i++) pass += characters.charAt(Math.floor(Math.random() * characters.length));
    return pass;
}
