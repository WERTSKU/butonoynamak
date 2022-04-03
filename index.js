var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "we ❤️ discord",
assets : {
large_image : "dcturkiye",
large_text : "Discord Türkiye",
small_image : "tick",
small_text : "gg/turkiye"
},
buttons : [{label : "🔗 Forum sitemiz" , url : "https://discordturkiye.com/"}]
}
})
})
client.login({ clientId : "815158681926762507" }).catch(console.error);
