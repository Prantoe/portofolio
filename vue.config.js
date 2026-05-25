const crypto = require('crypto');
const origCreateHash = crypto.createHash;
crypto.createHash = (algorithm) =>
  origCreateHash(algorithm === 'md4' ? 'sha256' : algorithm);

module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
}