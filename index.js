const { KeyVaultSecret } = require("@azberry/az-simple");
require('dotenv').config()

const keyVaultName = process.env.AZURE_KEY_VAULT_NAME;

async function getKeyVaultSecret(){

    // expect Key Vault Secrets User RBAC role

    try{
    const kvSecretMgr = new KeyVaultSecret(keyVaultName);

    const secretName = "test";
    const secretValue = await kvSecretMgr.getSecret(secretName);

    console.log(secretValue);
    } catch(err){
        console.error(err.message);
    }
}

getKeyVaultSecret().then(()=>{
    console.log("done");
}).catch((err)=>{
    console.log(err);
})