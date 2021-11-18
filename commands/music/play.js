const { QueryType } = require('discord-player');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'play',
    aliases: ['p'],
    utilisation: '{prefix}play [song name/URL]',
    voiceChannel: true,

    async execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));
        embed.setTimestamp();
        embed.setFooter('All my homies hate Pancakes', message.author.avatarURL({ dynamic: true }));



        if (!args[0]) {
            embed.setColor("RED");
            embed.setDescription(`Please enter a valid search ${message.author}`);
            return message.channel.send({ embeds: [embed] });
        }

        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length){
            embed.setColor("RED");
            embed.setDescription(`No results found ${message.author}`);
            return message.channel.send({ embeds: [embed] });
        } 

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel
        });

        try {
            if (!queue.connection) await queue.connect(message.member.voice.channel);
        } 
        
        catch {
            await player.deleteQueue(message.guild.id);
            description = `I can't join the voice channel ${message.author}`;
            embed.setColor("RED");
            embed.setDescription(`I can't join the voice channel ${message.author}`);
            return message.channel.send({ embeds: [embed] });
        }

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();

        embed.setColor("GREEN");
        embed.setDescription(`Loading your ${res.playlist ? 'playlist' : 'track'}`);
        return message.channel.send({ embeds: [embed] });
    },
};