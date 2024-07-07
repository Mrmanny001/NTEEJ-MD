//Nteej code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic05qOEZzQStXN0ExbzgyWXlRNHZqNEttYzBKSnJoT0J2UVBWeFVBclBGND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidG1iMUwrVUs2QStLUkJEZjNTckwwUkRpV0x3emRHcVhNdVBQakJPTk9DND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLS1Z6T280cVJ2UkVubjc2ck5UQXVxQ2xHVS9SbHVCQUhacHpKQzdSajBvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxbUlMY3ZpZVc0VEVXTC93TVUwQnRXVWdpcElSaVc5OGpSQVppZG5KMHk0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNIY1QwMS8vWkh3cjVmbVN1dDBBTU5BWUpRd014MThwMXo3MTFHMXhlMW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpwNFRaTlc5TWhSaEVWNHZ1RllJeW1YKys2SzN1OHBiaGIrTHFnMnpjVGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUxjOVNIMXI5a2VDUCtyenNqN2VsRktsWndrZFdkdjJwK2tuRkxna29uYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1ZFcTNOWW9NclZpK2prazM0eE4wY3FkNUZFbm4zc3FmbnYzVlErMGFpaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVFNDhGUFdlSGVZQ1VENVQ1aGFEYlB0dWxSb05kcHF6b0llRktqVzFHdXYxRytyaFFQSE5NRDFwRlpGak5ya1pxTHg4TXRjU3MyaDNqcUZSYnJqZUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzMsImFkdlNlY3JldEtleSI6IjNDSFBzajRFdk5KYVV4MGhPU1ByUnJUUmpaYXM2SVk2c0s2VVFKaGg4S0U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik93cGxJcDE5UkwyZXp4MVNXTWU3V1EiLCJwaG9uZUlkIjoiNDNmZjIzZjgtMmNkOC00OTg3LWFhYTYtYTRiNzBkNDA2NDgyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZtYk9XMllLQmlvM3FvNU14N05Wa3laK1lETT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6ZlhXeVI0L1pGMXNYTXFiNXpmR3VkM29JdlE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiN1ZYU0Y3RUoiLCJtZSI6eyJpZCI6IjIzNDkxMTIwNDA1MDM6MjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU0FNQ09NTVMgSU5URVJORVQgU0VSVklDRVMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0l1UThzMEZFSUN2bzdRR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InVKR1ZkdkJXTll3WVpUYStXODBvY3B0QnJJbGF6RUZtblhpUzAxSDUvbEU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IndHZ3ZDNUk5eCtjK21SWjlYOXpUNUxTWm5uRTJaNkhsUFRma042ZHB0VnllbWxMVDFQcmNad3AxQjdMSEZ0VTE0b2t3d3ZpdzRqVVFOUVFEVlFXVERRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJFYjYwLzRFV3VSbTdzaXVQdTc3L1BmK2EycFNBV2RnZkZKL0dBb041MlJMbG84V2N0dERnNFNmVy9sQmg3L2NoKzFvNUxIejlaUHRUWmJSRXB4UHFCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMTIwNDA1MDM6MjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYmlSbFhid1ZqV01HR1Uydmx2TktIS2JRYXlKV3N4QlpwMTRrdE5SK2Y1UiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDI0NDEwOX0=";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "2349112040503";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`SAMCOMMS__BOT__ 😎`",
  author: process.env.PACK_AUTHER || "SAMCOMMS__BOT__ 😎",
  packname: process.env.PACK_NAME || "SAMCOMMS__BOT__ 😎",
  botname: process.env.BOT_NAME || "SAMCOMMS__BOT__ 😎",
  ownername: process.env.OWNER_NAME || "`SAMCOMMS_INTERNET_SERVICES`",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Ntee-j01/NTEEJ-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vae3GZF9Bb658QgSCl1I";
global.website = process.env.GURL || "https://chat.whatsapp.com/Er6RNNNVWV5LORN9Nr6hL7";
global.devs = "2349112040503";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
