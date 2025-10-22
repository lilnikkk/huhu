const { ActivityType } = require("discord.js");
require("dotenv").config();

module.exports = {
  bot: {
    token: process.env.token || "", // Bot token
    clientName: process.env.clientName || "Nhot", // Bot username
    clientId: process.env.clientId || "", // Bot clientId
    clientSecret: process.env.clientSecret || "", // Bot clientSecret
  },

  owner: {
    userId: process.env.userId || "", // Owner userId for developer command
    updateChecker: true, // Check for latest update. set to false if you dont want to check for latest update
  },

  botSettings: {
    mongoUrl: process.env.mongoUrl || "", // Mongodb url for database
    geniusToken: process.env.geniusToken || "", // Genius token use to fetch lyrics, you can leave it blank.
    prefix: process.env.prefix || "+", // Default prefix is set to "?" use prefix command to change
    embedColor: process.env.embedColor || "2F3136", // You can use any HEX Color but without the "#"
  },

  // Lavalink settings. Please use lavalink v4
  // You can remove docker-node if youre not using docker to run the bot.
  nodes: [
  
    {
      name: "Main",
      host: "lavalinkv4.serenetia.com",
      password: "https://dsc.gg/ajidevserver",
      port: 80,
      secure: false,
    },
  ],

  // Client Presence
  presence: {
    activities: [
      {
        name: "Nhót iu em",
        type: ActivityType.Listening,
      },
    ],
    status: "online",
  },
};
