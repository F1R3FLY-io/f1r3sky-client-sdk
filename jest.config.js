import { createDefaultEsmPreset  } from "ts-jest";

const tsJestTransformCfg = createDefaultEsmPreset().transform;

/** @type {import("jest").Config} **/
export default {
    setupFilesAfterEnv: ['./jest.setup.js'],
    testEnvironment: "node",
    transformIgnorePatterns: [
        "/node_modules/(?!@noble/secp256k1)", // let jest transpile it
    ],
    transform: {
        ...tsJestTransformCfg,
    },
};
