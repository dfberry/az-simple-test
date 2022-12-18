require('dotenv').config();
const azSimple = require('@azberry/az-simple');
const { getSecret } = require('./keyvault');
const { getTranslation } = require('./translator');
const { getJson } = require('./blobstorage');
const { getNewDatabaseAndContainer } = require('./cosmos-db-nosql');
const { insertArray } = require('./cosmos-db-mongodb');

async function main() {
  console.log(azSimple);
  console.log(getSecret);
  console.log(getTranslation);
  console.log(getJson);
  console.log(getNewDatabaseAndContainer);
  console.log(insertArray);

  // Key vault secret
  const { value } = await getSecret();
  console.log(`secret: ${value}`);

  // // Translator
  const translation = await getTranslation();
  console.log(`translation: ${JSON.stringify(translation)}`);

  // // Blob Storage
  const json = await getJson();
  console.log(`json: ${JSON.stringify(json)}`);

  // Cosmos DB NoSQL (DocumentDb)
  await getNewDatabaseAndContainer();

  // Cosmos DB MongoDb
  const insertResult = await insertArray();
  console.log(`insertResult: ${JSON.stringify(insertResult)}`);
}

main()
  .then(() => {
    console.log('done');
  })
  .catch((err) => {
    console.log(err);
  });
