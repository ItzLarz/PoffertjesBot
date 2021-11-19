const { MessageEmbed } = require('discord.js');

player.on('error', (queue, error) => {
    console.log(`Error emitted from the queue ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Error emitted from the connection ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`Started playing ${track.title} in **${queue.connection.channel.name}**`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`Track ${track.title} added in the queue`);
    // const embed = new MessageEmbed();

    // embed.setColor('GREEN');
    // // embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

    // embed.setDescription(`Track ${track.title} added in the queue`);

    // embed.setTimestamp();
    // // embed.setFooter('All my homies hate Pancakes', message.author.avatarURL({ dynamic: true }));

    // queue.metadata.send({ embeds: [embed] });
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('Someone kicked me, that hurt');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('I\'m all alone, I\'ll be going now...');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('I finished reading the whole queue, I\'m a good boy');
});