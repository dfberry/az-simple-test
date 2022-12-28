const { BlobStorage } = require('@azberry/az-simple');

async function getJson() {
  const name = process.env.AZURE_BLOB_STORAGE_ACCOUNT_NAME;
  const key = process.env.AZURE_BLOB_STORAGE_ACCOUNT_KEY;
  const url = process.env.AZURE_BLOB_STORAGE_BLOB_URL;

  const client = new BlobStorage(name, key);

  // expect json arry
  const { json } = await client.getJsonDataFromBlob(url);

  return json;
}

exports.getJson = getJson;
