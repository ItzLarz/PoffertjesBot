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