const createKeccakHash = require("keccak");
import secp256k1 from "secp256k1";

export class PublicKey {

    private constructor(private value: Uint8Array) { }

    public static fromUint8Array(value: Uint8Array) {
        if (!secp256k1.publicKeyVerify(value)) {
            throw new Error("Invalid public key");
        }
        return new PublicKey(value);
    }

    public getValue(): Uint8Array {
        return this.value
    }

    public getHash(): string {
        const value = this.value.slice(1, -40);
        const newLocal = createKeccakHash('keccak256').update(Buffer.from(value)).digest('hex');
        return newLocal.toUpperCase()
    }

    private toString() { }
}
