const Discord = require("discord.js");
const bot = new Discord.Client();

const config = require("./config.json");

bot.on("ready", () => {
  console.log(`Em funcionamento!!!! total de ${bot.channels.size} Canais, em ${bot.guilds.size} servers, um total de ${bot.users.size} usuarios.`);
});

bot.on('message', message => {
    const {
        content,
        author,
        channel: userChannel
    } = message;

    const args = content.split(' ');

    const sugestaoChannel = bot.channels.get("310619886688927745");

    if(content.startsWith("@sugestao")) {
        let cmd = args.shift();
        let sugestao = args.join();

        userChannel.send(author.username + ", obrigado pela sugestão, irei analizar assim que possível!");
        sugestaoChannel.send("A sugestão foi enviada por: " + author.username + ".\n" + sugestao);
        message.delete("@sugestao");
    }
});

bot.on('message', message => {
    const {
        content,
        author,
        channel: userChannel
    } = message;

    const arg = content.split(' ');

    const denunciaChannel = bot.channels.get("310619886688927745");

    if(content.startsWith("@denuncia")) {
        let cmd = arg.shift();
        let denuncia = arg.join();

        userChannel.send(author.username + ", obrigado, irei analizar assim que possível!");
        denunciaChannel.send("A denuncia foi enviada por: " + author.username + ".\n" + denuncia);
        message.delete("@denuncia");
    }
});

bot.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  if (command === "teste") {
    message.channel.send("Tudo ok!");
  }

  if (command === "help") {
   message.channel.send("**Olá!** Eu sou KaHique-CL, criador por Henrique_MB, veja alguns comandos com @comandos ou @cmds.");
  }

  if (command === "comandos") {
    message.channel.send("```Alguns comandos \n@sugestao [sua sugestao] \n@denuncia [nick a ser denunciado] [sua denuncia] [print (obrigatório)]```");
  }

  if (command === "cmds") {
    message.channel.send("```Alguns comandos \n@sugestao [sua sugestao] \n@denuncia [nick a ser denunciado] [print (obrigatório)] [sua denuncia]```");
  }

});

bot.login(config.token);
