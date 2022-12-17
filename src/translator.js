const { AiTranslator } = require('@azberry/az-simple');

async function getTranslation() {
  // expect Key Vault Secrets User RBAC role

  const key = process.env.AZURE_TRANSLATOR_KEY;
  const endpoint = process.env.AZURE_TRANSLATOR_ENDPOINT;

  if (!key && !endpoint) throw new Error('missing params');

  console.log(key, endpoint);

  const myTranslator = new AiTranslator(key, endpoint);

  const [translation] = await myTranslator.getTranslation('fr', 'en', [
    'hello'
  ]);

  return translation;
}

exports.getTranslation = getTranslation;
