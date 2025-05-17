const crypto = require('crypto');
const bcrypt = require('bcryptjs');

const senha = "minha_senha_super_secreta";

// Hash usando SHA-256 (fixo)
const sha256Hash = crypto.createHash('sha256').update(senha+"chinforinfula").digest('hex');
console.log("SHA-256 Hash:", sha256Hash);
let hash = crypto.createHash('sha1').update(senha+"chinforinfula").digest('base64');
console.log("\n"+sha256Hash)

console.log("SHA-256 Hash:", hash);

