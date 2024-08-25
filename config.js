const fs = require("fs");
const chalk = require("chalk");
require("dotenv").config();

// Default values for global variables
global.available = process.env.AVAILABLE || true;
global.autoReadAll = process.env.AUTO_READ_ALL || false;
global.antitags = process.env.ANTITAGS || true;

// Auto functioner
global.autoTyping = process.env.AUTO_TYPING || false;
global.autoRecord = process.env.AUTO_RECORD || false;
global.groupevent = process.env.GROUPEVENT || false;
global.statusseen = process.env.STATUSSEEN || true;
global.autoreadgc = process.env.AUTOREADGC || true;


// Auth information
global.pairNumber = "249916270201";                         // Add your paining number with country code example "916297175943"; 
global.port = process.env.PORT || "10000";
global.auth = process.env.AUTH || "Pairing";                // Auth mode OR/Pairing.
global.sessionFile = process.env.SESSION_FILE || "A17-SESSION";
global.mongodb = process.env.MONGODB || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority";                 // Mongodb url.
global.website = "https://www.exenoz.tech"; 
global.github = "https://github.com/Trama-007";


// Default prefix
global.prefa = process.env.PREFIX ? process.env.PREFIX.split("#") : ["-"];


// Owner information
global.Owner = process.env.OWNER ? process.env.OWNER.split(",") : ["249995436584", "249992134574"];
global.OwnerNumber = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.split(",") : ["249995436584","249992134574"];
global.ownertag = process.env.OWNER_TAG ? process.env.OWNER_TAG.split(",") : ["249995436584","249992134574"];
global.OwnerName = process.env.OWNER_NAME || "𝐓𝐑𝐀𝐌𝐀_𝐙𝐎𝐎𝐋 💊❌";
global.BotName = process.env.BOT_NAME || "Yuki";
global.packname = process.env.PACK_NAME || "Yuki Bot";
global.author = "By: Trama";
global.BotSourceCode = "https://github.com/trama-008/A17";
global.SupportGroupLink = "https://chat.whatsapp.com";
global.yuki = ["249991672637"];


//
global.openAiAPI = process.env.OPENAI_API || "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";
global.location = process.env.LOCATION || "Sudan , Shendi";
global.reactmoji = process.env.REACT_MOJI || "❤️";
global.themeemoji = process.env.THEME_EMOJI || "💖";
global.vidmenu = { url: process.env.VID_MENU_URL || 'https://media.tenor.com/Jdu0Ov8X2sIAAAAC/A17-Bot.mp4' };


//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");
global.them = "https://graph.org/file/5aa9c778c5462118a2e5a.png";


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


// Messages
global.mess = {
  jobdone: 'استلم يا مدير',
  useradmin: 'هذا الأمر خاص *بالمشرفين فقط*!',
  botadmin: 'بعتذر ، بس أنا ما مشرفة في القروب!',
  botowner: 'فقط *تراما* من يمكنه استخدامي الآن!',
  grouponly: 'هذا الأمر خاص *بالمجموعات* فقط',
  privateonly: 'هذا الأمر يعمل في *الخاص* فقط',
  botonly: 'لا يمكن لأحدٍ استخدامي الآن!',
  waiting: 'انتظر قليلاً من فضلك....',
  nolink: 'لا يوجد رابط؟!',
  error: 'حصل خطأ غير معروف!',
  banned: 'آسفة ، بس انت محظور من البوت!',
  bangc: 'آسفة ، بس القروب دا محظور من البوت!',
  nonsfw: 'أمنع الفارغة!'

}
