import { base16, base58 } from "@scure/base"
import secp256k1 from "secp256k1";
import { blake2b, blake2bHex } from "blakejs"
import { PrivateKey } from "./entities/PrivateKey"
import { PublicKey } from "./entities/PublicKey";
import { Address } from "./entities/Address";
import keccak256 from "keccak256";


export const F1R3CAP_TOKE_ID = '000000'
export const F1R3CAP_VERSION = '00'

/**
 * Verifies F1R3Cap an address by checking its checksum.
 *
 * @param address - The address to verify, encoded in base58.
 * @returns A boolean indicating whether the address is valid.
 */
export function verify(address: string): boolean {
    try {
        const revBytes = base58.decode(address)

        const payload = revBytes.slice(0, -4)
        const checksum = revBytes.slice(-4)

        const checksumCalc = blake2b(payload, undefined, 32).slice(0, 4)

        return checksum.every((byte, index) => byte === checksumCalc[index])
    } catch {
        return false
    }
}

/**
 * Signs a payload using the specified private key.
 * This function uses the secp256k1 algorithm to create a digital signature.
 * @param payload - The payload to sign, typically a hash of the transaction data.
 * @param key - The private key to sign the payload with.
 * @returns An object containing the signature algorithm, the deployer public key, and the signature.
 */
export function sign(payload: Uint8Array, key: PrivateKey): { sigAlgorithm: "secp256k1", deployer: Uint8Array<ArrayBufferLike>, signature: Uint8Array<ArrayBufferLike> } {
    const { signature } = secp256k1.ecdsaSign(blake2b(payload, undefined, 32), key.getValue());

    const deployer = secp256k1.publicKeyCreate(key.getValue(), false);

    return {
        sigAlgorithm: "secp256k1",
        deployer,
        signature,
    };
}

/**
 * Derives an F1R3Cap address from a public key.
 * The address is constructed using a specific token ID, version, and the public key hash.
 * It also includes a checksum for validation.
 * 
 * @param publicKey - The public key from which to derive the address.
 * @returns The derived F1R3Cap address as an Address object.
 */
export function getAddressFrom(publicKey: PublicKey): Address {
    const publicKeyHash = publicKey.getHash()
    const ethHash = keccak256(base16.decode(publicKeyHash)).toString().toUpperCase()

    const payload = `${F1R3CAP_TOKE_ID}${F1R3CAP_VERSION}${ethHash}`

    const payloadBytes = base16.decode(payload)
    const checksum = blake2bHex(payloadBytes, undefined, 32)
        .slice(0, 8)
        .toUpperCase()

    return Address.fromString(base58.encode(base16.decode(payload + checksum)))
}

/**
 * Derives a public key from a private key using the secp256k1 algorithm.
 * @param key - The private key from which to derive the public key.
 * @returns The derived public key as a PublicKey object.
 */
export function getPublicKeyFrom(key: PrivateKey): PublicKey {
    return PublicKey.fromUint8Array(secp256k1.publicKeyCreate(key.getValue(), false))
}

/**
 * Generates an F1R3Cap address directly from a private key.
 * @param key - The private key from which to generate the address.
 * @returns The derived F1R3Cap address as an Address object.
 */
export function generateAddressFrom(key: PrivateKey): Address {
    const publicKey = getPublicKeyFrom(key)
    return getAddressFrom(publicKey)
}