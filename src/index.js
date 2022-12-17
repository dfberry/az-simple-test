require('dotenv').config();
const azSimple = require('@azberry/az-simple');
const { getSecret } = require('./keyvault');
const { getTranslation } = require('./translator');

//console.log(getSecret);
console.log(getTranslation);

async function main() {
  console.log(azSimple);
  console.log(getSecret);
  console.log(getTranslation);

  // Key vault secret
  const { value } = await getSecret();
  console.log(`secret: ${value}`);

  // Translator
  const translation = await getTranslation();
  console.log(`translation: ${JSON.stringify(translation)}`);
}

main()
  .then(() => {
    console.log('done');
  })
  .catch((err) => {
    console.log(err);
  });
