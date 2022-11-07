const { KeyVaultSecret } = require("@azberry/az-simple");
require('dotenv').config()

const keyVaultName = process.env.AZURE_KEY_VAULT_NAME;

async function callLib(secretName){
        const kvSecretMgr = new KeyVaultSecret(keyVaultName);
    
        const secretResponse = await kvSecretMgr.getSecret(secretName);
    
        console.log("after get secret");
    
        return secretResponse;
}

async function getKeyVaultSecret(){

    // expect Key Vault Secrets User RBAC role

    try{

    const secretName = "test";

    const secretValue = await callLib(secretName);

    console.log("after gcallLib");

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