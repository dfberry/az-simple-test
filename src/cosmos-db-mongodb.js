const { MongoDb } = require('@azberry/az-simple');

async function insertArray() {
  const connectionString =
    process.env.AZURE_COSMOS_DB_MONGODB_CONNECTION_STRING;
  const databaseName = 'test';
  const timestamp = new Date().valueOf();
  const containerName = `azure-samples-${timestamp}`;

  const client = new MongoDb(connectionString);

  const insertResult = await client.uploadDocs(databaseName, containerName, [
    { a: 'b' },
    { c: 'd' }
  ]);
  client.close();
  return insertResult;
}

exports.insertArray = insertArray;
