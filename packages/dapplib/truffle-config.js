require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski strong radar prefer protect inflict brass forget gather'; 
let testAccounts = [
"0x87763b0f70c0d8ee34fa86fffc345dea2519c5284717b648e23fe92113a2e556",
"0xb2b76e14db3b2299aa9513593c3d9acb57f135237225c87fd216460cf61ef79f",
"0x38c3ab5501f26fd1736c8808d5a868d797ecb9a1dec7419ce64105779ad59fd2",
"0xe2149b1f0a6a0becfcabdc16fb32889738b515159040549c8363effb0859e6c6",
"0xa972cb865b7f9e55bb81918d6f24ab192dfcf5184eb5ebdcd4a060ae1dcd7a61",
"0x7e4b58e014e036d0a76a061df0188191e1bb55a375db6ba208cc4e9decc7f6cf",
"0x367adb24a66b92a8e06cfbdc9e5f83a9e935b207bad8cee79faa2dffb3799abf",
"0x83647a69cc0393ac25ff9fa9ed961d8eba8c2060faab544c669afd63f1bef44f",
"0x7caf8d58cb4f211f5d8b2d09d7bb455bc870269ea0de4c0b9a9e82f412680497",
"0x9350d9b143ebf6f11265263337d91df3cbcebbe386dc4e92d5c9e70bbdbc634f"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
