const { CosmosDBNoSql } = require('@azberry/az-simple');

async function getNewDatabaseAndContainer() {
  const endpoint = process.env.AZURE_COSMOS_DB_NOSQL_ENDPOINT;
  const key = process.env.AZURE_COSMOS_DB_NOSQL_KEY;

  const timestamp = new Date().valueOf();

  const client = new CosmosDBNoSql(key, endpoint);
  const databaseName = 'test';
  const containerName = `azure-samples-${timestamp}`;

  const container = await client.createNewDatabaseAndContainer(
    databaseName,
    containerName
  );
  console.log(`continer: ${container.id}`);

  const existingContainer = await client.getExistingContainer(
    databaseName,
    containerName
  );
  console.log(`existingContainer: ${existingContainer.id}`);

  console.log(
    `same container? ${(container.id === existingContainer.id).toString()}`
  );
  client.close();
}

exports.getNewDatabaseAndContainer = getNewDatabaseAndContainer;
