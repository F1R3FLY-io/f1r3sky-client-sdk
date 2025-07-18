import { PrivateKey } from "./entities/PrivateKey";
import { Address } from "./entities/Address";
import { Configuration, WalletsApi } from "./api-client";
import { Description } from "./entities/Description";
import { generateAddressFrom, sign } from "./functions";

export * from "./entities/PrivateKey";
export * from "./entities/Address";


export async function getWalletState(address: Address) {
    const configuration = new Configuration();
    const client = new WalletsApi(configuration);

    return client.apiWalletsAddressStateGet({ address: address.toString() })
}

export async function transferMoney(privateKey: PrivateKey, toAddress: Address, amount: number, description: Description) {
    const configuration = new Configuration();
    const client = new WalletsApi(configuration);


    const contract = await client.apiWalletsTransferPreparePost({
        transferReq: {
            from: generateAddressFrom(privateKey).toString(),
            to: toAddress.toString(),
            amount,
            description: description.getValue(),
        }
    }).then(({ contract }) => new Uint8Array(contract));

    const signedContract = sign(contract, privateKey);

    return client.apiWalletsTransferSendPost({
        signedContract: {
            contract: Array.from(signedContract.signature),
            sig: Array.from(signedContract.signature),
            sigAlgorithm: signedContract.sigAlgorithm,
            deployer: Array.from(signedContract.deployer),
        },
    });
}