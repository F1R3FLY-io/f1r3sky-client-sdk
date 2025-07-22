import { transferMoney } from "..";
import { Configuration, HTTPHeaders, WalletsApi } from "../api-client";
import { generateAddressFrom } from "../functions";
import { Address } from "./Address";
import { Amount } from "./Amount";
import { Description } from "./Description";
import { PrivateKey } from "./PrivateKey";


export class Wallet {
    private privateKey: PrivateKey;
    private wallet: WalletsApi;

    constructor(config: { host: string; port: number; privateKey: PrivateKey; headers: HTTPHeaders }) {
        this.privateKey = config.privateKey;

        const configuration = new Configuration({
            basePath: `${config.host}:${config.port}`,
            headers: config.headers,
        });

        this.wallet = new WalletsApi(configuration);

    }

    async sendMoney(to: Address, amount: Amount, description: Description) {
        return await transferMoney(
            this.privateKey,
            to,
            amount,
            description,
            args => this.wallet.apiWalletsTransferPreparePost(args),
            args => this.wallet.apiWalletsTransferSendPost(args));
    }

    async getWalletState() {
        const address = generateAddressFrom(this.privateKey);

        return await this.wallet.apiWalletsAddressStateGet({ address: address.toString() });
    }
}