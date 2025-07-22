import { Address, PrivateKey, transferMoney } from "../src";
import { HTTPHeaders, WalletStateAndHistory, Boost, Transfer, Request } from "../src/api-client";
import { Amount } from "../src/entities/Amount";
import { Description } from "../src/entities/Description";
import { Wallet } from "../src/entities/Wallet";

beforeEach(() => {
    jest.clearAllMocks();
});

describe('Wallet Transfer Tests', () => {

    test('transferMoney function', async () => {
        const privateKey = PrivateKey.new();
        const toAddress = Address.fromString("1111NypGkNrhxpLKFwiZ8gLKmiwLQUyzuEe1p3nEKQCSKMvd1YHY3");
        const amount = Amount.tryFrom(1000);
        const description = Description.tryFromString("This is a test transfer with a valid description.");

        const mockPreparePostCallback = jest.fn().mockResolvedValueOnce({
            contract: new Uint8Array([1, 2, 3, 4])
        });
        const mockTransferSendCallback = jest.fn();

        await transferMoney(privateKey, toAddress, amount, description, mockPreparePostCallback, mockTransferSendCallback);

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

    test('Wallet.sendMoney method', async () => {
        let privateKey = PrivateKey.new();

        let client = new Wallet({
            host: 'http://localhost',
            port: 3100,
            privateKey: privateKey,
            headers: {} as HTTPHeaders
        });

        const address = Address.fromString("1111NypGkNrhxpLKFwiZ8gLKmiwLQUyzuEe1p3nEKQCSKMvd1YHY3");
        const amount = Amount.tryFrom(1000);
        const description = Description.tryFromString("This is a test transfer with a valid description.");
        let result = client.sendMoney(address, amount, description);

        expect(result).resolves.toBeTruthy();
    });

    test('Wallet.getWalletState method', async () => {

        let client = new Wallet({
            host: 'http://localhost',
            port: 3100,
            privateKey: PrivateKey.new(),
            headers: {} as HTTPHeaders
        });

        let result: Promise<WalletStateAndHistory> = client.getWalletState();

        expect(result).resolves.toEqual(expect.objectContaining<WalletStateAndHistory>({
            balance: expect.any(Number),
            requests: expect.arrayOf(expect.objectContaining<Request>({
                id: expect.any(String),
                date: expect.any(Date),
                amount: expect.any(Number),
                status: expect.any(String),
            })),
            exchanges: expect.arrayOf(Object),
            boosts: expect.arrayOf(expect.any(Object)),
            transfers: expect.arrayOf(expect.objectContaining<Transfer>({
                id: expect.any(String),
                direction: expect.any(String),
                date: expect.any(Date),
                amount: expect.any(Number),
                toAddress: expect.any(String),
                cost: expect.any(Number),
            })),
        }));
    });
});
