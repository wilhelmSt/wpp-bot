const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const newClient = require('./bot');

// Guardando o whatsapp
const client = new Client();

// Gerando o QR Code para acessar o whataspp
client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

// Quando o whatsapp estiver pronto
client.on('ready', () => {
  console.log('Client is ready!');
});

// Inicializando o whatsapp
client.initialize();

// Inicializando o bot
newClient(client);
