import secp256k1 from "secp256k1";

export class PrivateKey {
    static new() {
        let privateKey;
        do {
            privateKey = require("crypto").randomBytes(32);
        } while (!secp256k1.privateKeyVerify(privateKey));

        return new PrivateKey(privateKey);
    }

    private constructor(private value: Uint8Array) { }

    public static fromUint8Array(value: Uint8Array) {
        if (!secp256k1.privateKeyVerify(value)) {
            throw new Error("Invalid private key");
        }
        return new PrivateKey(value);
    }

    public getValue(): Uint8Array {
        return this.value
    }

    private toString() { }
}
