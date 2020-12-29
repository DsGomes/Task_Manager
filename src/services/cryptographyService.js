const crypto = require('crypto');

const CRYPTOGRAPHY_DATA = {
    algorithm : "aes256",
    secret_key : "chaves",
    type : "hex"
};

function crypt(senha) {
    const cipher = crypto.createCipheriv(CRYPTOGRAPHY_DATA.algorithm, CRYPTOGRAPHY_DATA.secret_key);
    cipher.update(senha);
    return cipher.final(CRYPTOGRAPHY_DATA.type);
};

function decrypt(senha) {
    const decipher = crypto.createDecipheriv(CRYPTOGRAPHY_DATA.algorithm, CRYPTOGRAPHY_DATA.secret_key);
    decipher.update(senha, CRYPTOGRAPHY_DATA.type);
    return decipher.final();
};

module.exports = { crypt, decrypt }