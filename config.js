module.exports = {
    app: {
        px: '/',
        token: 'NzkyNDU2MjUwMjA1OTI5NTQz.X-d-ZQ.tmhUOR8HaKu_BmKZJd-f8Qei4rM',
        playing: 'All my homies hate Pancakes'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 150,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
