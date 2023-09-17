const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "919163670148"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'tatexdtanmay@gmail.com'
global.github = 'https://github.com/extronteam/XLICON-MD'
global.location = 'Ohio'
global.gurl = 'https://instagram.com/elegance_studio/' // add your username
global.sudo = process.env.SUDO || '919163670148' 
global.devs = '919163670148';
global.website = 'https://github.com/extronteam/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUtLd0JRd0JORWpsdTJ0TGMzNlNpdWh5bnR4UkFOQ3FJaEVRWnl5VlkzYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidk9ReTJaQWdpbFZwczA3UURCV29uOURoTG5MOUxMQUJQZUVxQ2dwT0ttOD0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSEQxOXpVeExMaml1VnlYaHUvK1Q0Yng2ejFoVUNCMThYV3d0b0hnQlZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxMHQwS3pGL0pFZE9HNjZpU1RUUklQdjJ5d09vL0VhbUVMZjV3cU05aVJzPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlNTEEzbkxWbUY1eEtVSHpvVEw3S1dQdWpVdEVheUVRNlVUYTBSZ0FtSDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllXa2xPbWRDblRZaG8xVEIwV3laN1ZEblZQanNMM1VrV0x0b0tiNlVZbFE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5QXB5ZmFWeGtNc0xRTlZ3bzhuaFdHcnoreW5RV3lvK0hVVlpHeG8vU0RKa2FmVUdrOHI5aWhoRmI4UTFRY1NETjZKZEtTR0JNN1VuZW1DRHptSjhqZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjExMCwiYWR2U2VjcmV0S2V5IjoiWGFCZE5xWUlkMytWdDVuUHdiWUFhNVpXaWs4Y2VBY2Jjc3V4aCsrZjh4WT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNmJJUkxpVC1TN1M2elZ1NGFkNTdwQSIsInBob25lSWQiOiI0MjYwOGNmNS01NzY5LTRmZTAtYTJlZS0wNTQ0ZGQ3ZGNlNjIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkgxdWZKVTJuRjVPelV1eGRXcGpaWG83KzVFPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TERxcSswSEpwemVYRlZ5NERKQXp3VGhhR2c9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNPU2Z2dGdGRUlLcm02Z0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjR3VDM1Ykp0TTNTdWxPY0hSQ0RFcXZ1YU1Dd2lqdHo4c1N0ZVNZbEVZamc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IklMR1pkVHBnMm5IQkxSR0RBTSs1bExFTmVWN0JlWVRjTjR2dmYwVkRiaUo2NlZ6Wlp0dGhPc0ZGcEdpRytxRklzWDk1dE11bnNLT2h6d3g0eWZyMURBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJPQjJ0T3lZT1pRWjU2RUgrSFdyVC9UMlFQS3ZoejVJRFVFK1ljZFE3Z0xHKzdtY3RnNFBId1dYa1RRYzh1S0U5cCtsNXdRcnF4T0UvcHRYaFZoRkhoUT09In0sIm1lIjp7ImlkIjoiOTE5MTYzNjcwMTQ4OjE1QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxOTE2MzY3MDE0ODoxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlTUU5K1d5YlROMHJwVG5CMFFneEtyN21qQXNJbzdjL0xFclhrbUpSR0k0In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjk0OTQ2NjkzfQ==",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'ELEGANCE STUDIO',
  packname:  process.env.PACK_NAME || 'MADE BY FALIX',
   
  botname:   process.env.BOT_NAME === undefined ? "Elegance" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'elegancestudio' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
