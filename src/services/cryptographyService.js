const cryptography = require('cryptography');

cryptography.defaults.key = "peakyBlinders";
cryptography.defaults.encryptionAlgorithm = "aes192";
cryptography.defaults.encoding = "hex";

function crypt(senha) {
    const encryptedPassword = cryptography.encryptSync(senha);
    return encryptedPassword;
};

function decrypt(senha) {
    const decryptedPassword = cryptography.decryptSync(senha);
    return decryptedPassword;
};

module.exports = { crypt, decrypt }