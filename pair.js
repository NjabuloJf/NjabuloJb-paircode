const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: France_King,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("@whiskeysockets/baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function FLASH_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_France_King = France_King({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({ level: "fatal" }).child({ level: "fatal" }),
                browser: Browsers.macOS('Chrome')
             });

         if(!Pair_Code_By_France_King.authState.creds.registered) {
                await delay(1500);
                num = num.replace(/[^0-9]/g,'');
                const custom = "NJABULOJ";
                const code = await Pair_Code_By_France_King.requestPairingCode(num, custom)
                if(!res.headersSent){
                    await res.send({code});
                }
         }
            Pair_Code_By_France_King.ev.on('creds.update', saveCreds)
            Pair_Code_By_France_King.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(50000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(8000);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_France_King.sendMessage(Pair_Code_By_France_King.user.id, { text: ''+ b64data });

               let FLASH_MD_TEXT = `


*╭ׂ─ׂ┄『• ɴᴊᴀʙᴜʟᴏ-ᴊʙ•』┴*
│╭ׂ─ׂ┄─ׅ─ׂ┄ 
┴│
❒│▸ ▢ *ᴛʜɪs ɪs sᴇssɪᴏɴs ɪᴅ ᴡᴏʀᴋ* 
❒│▸ ▢ *ᴇᴍᴏ-ᴀɪ ʀᴏʙᴏᴛ*
❒│▸ ▢ *ᴇɪʟɪᴋ-ᴀɪ ʀᴏʙᴏᴛ*
❒│▸ ▢ *ᴏᴡɴᴇʀ:* (ɴᴊᴀʙᴜʟᴏ)
❒│▸ ▢ *ᴏɴʟɪɴᴇ ᴀɪ ғᴜᴛᴜʀᴇ ᴏɴ ᴡʜᴀᴛsᴀᴘᴘ*
┬│ 
│╰─ׂ┄─ׅ─ׂ┄
├┅┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄|
│╭ׂ─ׂ┄─ׅ─ׂ┄
┴│ *1ᴛᴀɴᴋs ғᴏʀ ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ* 
││ *2ᴇᴍᴏ ᴍᴇᴇᴛ ᴇɪʟɪᴋ ᴀɪ*
┬│ *visit* 
│╰─ׂ┄─ׅ─ׂ┄
╰─┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ─ׂ┄┴
`
  let randomNjabulourl = "https://files.catbox.moe/nmne6s.jpg",
      
 await Pair_Code_By_France_King.sendMessage(Pair_Code_By_France_King.user.id,{
     image: { url: randomNjabulourl },
     caption:FLASH_MD_TEXT
    },{quoted:session})
                    
        await delay(100);
        await Pair_Code_By_France_King.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    FLASH_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service is Currently Unavailable"});
         }
        }
    }
    return await FLASH_MD_PAIR_CODE()
});
module.exports = router







const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Gifted_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("@whiskeysockets/baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function GIFTED_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Gifted_Tech = Gifted_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: Browsers.macOS('Chrome') // Changed from ["Chrome (Linux)", "", ""] to Browsers.macOS('Chrome')
             });

               if(!Pair_Code_By_Gifted_Tech.authState.creds.registered) {
                await delay(1500);
                num = num.replace(/[^0-9]/g,'');
                const custom = "NJABULOJ";
                const code = await Pair_Code_By_Gifted_Tec.requestPairingCode(num, custom)
                   
                if(!res.headersSent){
                    await res.send({code});
                }
                }
            Pair_Code_By_Gifted_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Gifted_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Gifted_Tech.sendMessage(Pair_Code_By_Gifted_Tech.user.id, { text: '' + b64data });
               let AUDIO_URL = "https://files.catbox.moe/hhw2a6.mp3"; // New audio URL
               let img = "https://files.catbox.moe/bb85zo.jpg";
                    
               let GIFTED_MD_TEXT = `
*╭ׂ─ׂ┄『• ɴᴊᴀʙᴜʟᴏ-ᴊʙ•』┴*
│╭ׂ─ׂ┄─ׅ─ׂ┄ 
┴│
❒│▸ ▢ *ᴛʜɪs ɪs sᴇssɪᴏɴs ɪᴅ ᴡᴏʀᴋ* 
❒│▸ ▢ *ᴇᴍᴏ-ᴀɪ ʀᴏʙᴏᴛ*
❒│▸ ▢ *ᴇɪʟɪᴋ-ᴀɪ ʀᴏʙᴏᴛ*
❒│▸ ▢ *ᴏᴡɴᴇʀ:* (ɴᴊᴀʙᴜʟᴏ)
❒│▸ ▢ *ᴏɴʟɪɴᴇ ᴀɪ ғᴜᴛᴜʀᴇ ᴏɴ ᴡʜᴀᴛsᴀᴘᴘ*
┬│ 
│╰─ׂ┄─ׅ─ׂ┄
├┅┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ┄|
│╭ׂ─ׂ┄─ׅ─ׂ┄
┴│ *1ᴛᴀɴᴋs ғᴏʀ ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ* 
││ *2ᴇᴍᴏ ᴍᴇᴇᴛ ᴇɪʟɪᴋ ᴀɪ*
┬│ *visit* 
│╰─ׂ┄─ׅ─ׂ┄
╰─┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ─ׂ┄┴`
 await Pair_Code_By_Gifted_Tech.
     sendMessage(Pair_Code_By_Gifted_Tech.user.id,{
    image: { url: img },
     text: GIFTED_MD_TEXT,
    contextInfo: {
      ternalAdReply: {
      title: "this season ld work on Njabulo Jb and Alec Jb",
       body: "session working on heroku",
     thumbnailUrl: "https://files.catbox.moe/cvd9sb.jpg",
      sourceUrl: "https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T",
      mediaType: 1,
      renderLargerThumbnail: true
    },
 },
}, { quoted: {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                remoteJid: "status@broadcast"
            },
            message: {
                contactMessage: {
                    displayName: "✆︎NנɐႦυℓσ נႦ verified",
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Njabulo-Jb;BOT;;;\nFN:Njabulo-Jb\nitem1.TEL;waid=254700000000:+254 700 000000\nitem1.X-ABLabel:Bot\nEND:VCARD`
                }
            }
        } });
 await Pair_Code_By_Gifted_Tech.
 sendMessage(Pair_Code_By_Gifted_Tech.user.id,{
     audio: { url: AUDIO_URL }, 
     mimetype: 'audio/mp4', 
     ptt: true, // Voice note form
     contextInfo: {      
      ternalAdReply: {
      title: "this season ld work on Njabulo Jb and Alec Jb",
       body: "session working on heroku",
     thumbnailUrl: "https://files.catbox.moe/cvd9sb.jpg",
      sourceUrl: "https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T",
      mediaType: 1,
      renderLargerThumbnail: true
    },
 },
 }, { quoted: {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                remoteJid: "status@broadcast"
            },
            message: {
                contactMessage: {
                    displayName: "✆︎NנɐႦυℓσ נႦ verified",
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Njabulo-Jb;BOT;;;\nFN:Njabulo-Jb\nitem1.TEL;waid=254700000000:+254 700 000000\nitem1.X-ABLabel:Bot\nEND:VCARD`
                }
            }
        } });

        await delay(100);
        await Pair_Code_By_Gifted_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    GIFTED_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await GIFTED_MD_PAIR_CODE()
});
module.exports = router
