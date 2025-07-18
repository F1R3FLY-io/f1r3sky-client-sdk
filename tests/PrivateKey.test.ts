import { PrivateKey } from "../src/entities/PrivateKey";

describe("PrivateKey class", () => {
    test("should create a valid private key", () => {
        const privateKey = PrivateKey.new();
        expect(privateKey).toBeInstanceOf(PrivateKey);
    });

    test("should create a valid private key from a string", () => {
        const privateKey = PrivateKey.fromUint8Array(
            require("crypto").randomBytes(32),
        );
        expect(privateKey).toBeInstanceOf(PrivateKey);
    });
});


