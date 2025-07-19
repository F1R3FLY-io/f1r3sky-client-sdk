import { assert } from "console";
import { Address, PrivateKey, transferMoney, TransferSendCallback } from "../src";
import { Amount } from "../src/entities/Amount";
import { Description } from "../src/entities/Description";

test('transferMoney function', async () => {
    const privateKey = PrivateKey.new();
    const toAddress = Address.fromString("1111NypGkNrhxpLKFwiZ8gLKmiwLQUyzuEe1p3nEKQCSKMvd1YHY3");
    const amount = Amount.tryFrom(1000);
    const description = Description.tryFromString("This is a test transfer with a valid description.");

    const mockPreparePostCallback = jest.fn().mockResolvedValueOnce({
        contract: new Uint8Array([1, 2, 3, 4])
    });
    const mockTransferSendCallback = jest.fn();

    await transferMoney(mockPreparePostCallback, mockTransferSendCallback)(privateKey, toAddress, amount, description);

    expect(mockPreparePostCallback).toHaveBeenCalledWith({
        transferReq: {
            amount: 1000,
            description: "This is a test transfer with a valid description.",
            from: expect.stringMatching(/1111/),
            to: "1111NypGkNrhxpLKFwiZ8gLKmiwLQUyzuEe1p3nEKQCSKMvd1YHY3"
        }
    });

    expect(mockTransferSendCallback).toHaveBeenCalled();
    expect(mockTransferSendCallback).toHaveBeenCalledWith({
        signedContract: expect.objectContaining({
            sigAlgorithm: "secp256k1",
            contract: expect.arrayOf(expect.any(Number)),
            sig: expect.arrayOf(expect.any(Number)),
            deployer: expect.arrayOf(expect.any(Number)),
        })
    });
}); 