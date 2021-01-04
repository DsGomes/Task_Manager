const cryptography = require('cryptography');

cryptography.defaults.key = "peakyBlinders";
cryptography.defaults.encryptionAlgorithm = "aes192";
cryptography.defaults.encoding = "hex";

function crypt(senha) {
    cryptography.encrypt(senha)
        .then(encrypted => {
            return encrypted;
        })
        .catch(error => {
            console.log(error);
        })
};

function decrypt(senha) {
    cryptography.decrypt(senha)
        .then(decrypted => {
            return decrypted;
        })
        .catch(error => {
            console.log(error);
        })
};

module.exports = { crypt, decrypt }