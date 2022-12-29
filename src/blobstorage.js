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

async function listBlobs() {
  const name = process.env.AZURE_BLOB_STORAGE_ACCOUNT_NAME;
  const key = process.env.AZURE_BLOB_STORAGE_ACCOUNT_KEY;

  console.log(`name = ${name}`);
  console.log(`key = ${key}`);

  const containerName = 'test';
  const prefixStr = 's';
  const delimiter = '/';
  const pageSettings = { maxPageSize: 10 }; // don't pass empty continuation token

  try {
    const client = new BlobStorage(name, key);

    const results = await client.listBlobsInContainer(
      containerName,
      pageSettings,
      prefixStr,
      delimiter
    );

    return results;
  } catch (err) {
    console.log(JSON.stringify(err));
  }
}

exports.getJson = getJson;
exports.listBlobs = listBlobs;
