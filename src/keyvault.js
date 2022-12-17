const { KeyVaultSecret } = require('@azberry/az-simple');

async function getSecret() {
  const keyVaultName = process.env.AZURE_KEY_VAULT_NAME;

  const secretName = 'test';
  const kvSecretMgr = new KeyVaultSecret(keyVaultName);
  const secretResponse = await kvSecretMgr.getSecret(secretName);

  return secretResponse;
}

exports.getSecret = getSecret;
