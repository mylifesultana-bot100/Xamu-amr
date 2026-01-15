const axios = require("axios");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
  name: "info",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Mehedi Hasan",
  description: "Bot information",
  commandCategory: "Information",
  cooldowns: 1
};

module.exports.run = async function ({ api, event }) {
  const uptime = process.uptime();
  const hours = Math.floor(uptime / 3600);
  const minutes = Math.floor((uptime % 3600) / 60);
  const seconds = Math.floor(uptime % 60);

  const time = moment.tz("Asia/Dhaka").format("hh:mm:ss A");
  const date = moment.tz("Asia/Dhaka").format("DD/MM/YYYY");

  const msg = `
══❁🌺❁═════
🤖 Bot Information
══❁🌺❁═════

👑 Bot Owner : Mehedi Hasan

📘 Facebook ID :
https://www.facebook.com/profile.php?id=61585587277162

📘 Facebook ID :
https://www.facebook.com/profile.php?id=61585587277162

⏰ Uptime : ${hours}:${minutes}:${seconds}
🕒 Time : ${time}
📅 Date : ${date}

✨ Thanks For Using Bot ✨
`;

  try {
    const stream = await global.utils.getStreamFromURL(
      "https://i.ibb.co/4wLxpq9M/image0.jpg"
    );

    return api.sendMessage(
      {
        body: msg,
        attachment: stream
      },
      event.threadID
    );
  } catch (err) {
    return api.sendMessage(msg, event.threadID);
  }
};
