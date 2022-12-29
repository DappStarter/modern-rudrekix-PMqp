require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope kite bone tooth tissue rice stereo mixture grace forget fun gasp'; 
let testAccounts = [
"0xdad56fd1b72f6eaf79437faed51e2eaeb71f3024587fd6e04fec7040fcf20dcd",
"0xee9afc87ed5aa0cac61b55b6c7663ee3afd64ebeeb0d3bd08638cacb861ad7f4",
"0x903d8a0c461fd71b2cd0f6842c8252dc383fcb6bb30fb9a4b7d045d0f7918187",
"0x1b7d7265fbdf08909f46426afccb922e6d564030d1199bfde0bb1737eb904d6f",
"0x264cd034a8f1e625a25edd066f64801f88a86914745720eb54230f7371cb444f",
"0x0f9b4309f01e40fd2f998a7d01d03c59e7bb245fb4436c2f1e7a81a146e00de5",
"0x1fed7aaacd68a6bd9bd26ca43a3c7530b0ef49f3a801178d34575d3b2952db39",
"0xff02340dd7e615b2c34907b15f481deaa4d8c3818d94f3e75f11cc6dc4d12a33",
"0x4de1bb01931e4bf4cba26b284ac1691301e0e8b165063681d1ad2332b28c44f7",
"0x24261188ded57eca520acc80648334b705c90be1bb3fb97a3609258b52e4c648"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

