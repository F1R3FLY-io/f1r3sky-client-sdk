import { PrivateKey } from "./entities/PrivateKey";
import { Address } from "./entities/Address";
import { Configuration, WalletsApi } from "./api-client";
import { Description } from "./entities/Description";
import { generateAddressFrom, sign } from "./functions";
import { Amount } from "./entities/Amount";

export * from "./entities/PrivateKey";
export * from "./entities/Address";


/**
 * Return Wallet State for a given address.
 * @param address - The address to check the wallet state for.
 * @returns A promise that resolves to the wallet state.
 */
export async function getWalletState(address: Address) {
    const configuration = new Configuration();
    const client = new WalletsApi(configuration);

    return client.apiWalletsAddressStateGet({ address: address.toString() })
}

/**
 * Transfers money from one address to another.
 * This function prepares a transfer contract, signs it with the provided private key,
 * and sends the signed contract to the wallet API.
 *
 * @param privateKey - The private key of the sender's wallet.
 * @param toAddress - The address of the recipient.
 * @param amount - The amount of money to transfer.
 * @param description - A description of the transfer.
 * @returns A promise that resolves when the transfer is sent.
 */
export async function transferMoney(privateKey: PrivateKey, toAddress: Address, amount: Amount, description: Description) {
    const configuration = new Configuration();
    const client = new WalletsApi(configuration);


    const contract = await client.apiWalletsTransferPreparePost({
        transferReq: {
            from: generateAddressFrom(privateKey).toString(),
            to: toAddress.toString(),
            amount: amount.getValue(),
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