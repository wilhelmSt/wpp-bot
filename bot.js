function newClient() {
  const welcomeMessage = 'Olá, estou querendo conhecer a loja.';
  const { clientName, hasClientName } = {
    clientName: '',
    hasClientName: false
  };

  const getClientName = (message) => {
    if (!!message && message != welcomeMessage) {
      client.sendMessage(
        message.from,
        'Me fale seu nome para que eu possa te conhecer melhor.'
      );

      clientName = message;
    
      client.sendMessage(
        message.from,
        `Muito prazer ${clientName}, me fale o que você procura na loja.`
      );
    };
  };

  // Quando o cliente enviar uma mensagem
  client.on('message', (message) => {
    if (message.body === welcomeMessage) {
      client.sendMessage(
        message.from,
        `${hasClientName ? 'Olá ' + clientName : 'Olá'}, seja bem vindo a loja!`
      );
    };

    clientName = !hasClientName && getClientName(message.body);
  });
}
