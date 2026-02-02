
const PastebinAPI = require('pastebin-js'), 
    pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const { default: France_King, useMultiFileAuthState, delay, makeCacheableSignalKeyStore, Browsers } = require("@whiskeysockets/baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
};

router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
    async function FLASH_MD_PAIR_CODE() {
        const { state, saveCreds } = await useMultiFileAuthState('./temp/'+id)
        try {
            let Pair_Code_By_France_King = France_King({ 
                auth: { 
                    creds: state.creds, 
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                }, 
                printQRInTerminal: false, 
                logger: pino({ level: "fatal" }).child({ level: "fatal" }), 
                browser: Browsers.macOS('Safari')
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
                const { connection, lastDisconnect } = s;
                if (connection == "open") {
               Pair_Code_By_France_King.groupAcceptInvite('F4L9boph6pUH7vpGTWbfan');
            let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
            await delay(8000);
            let b64data = Buffer.from(data).toString('base64');
            let session = await Pair_Code_By_France_King.sendMessage(Pair_Code_By_France_King.user.id, { text: ''+ b64data });

                    
                    
                    let fanax = `╔════◇ 
║ *『 THANKS 👍 FOR SHOWING LOVE』* 
║ _You Have Completed the First Step to Deploy a Whatsapp Bot._ 
╚════════════════════════╝ 
╔═════◇ 
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』 
║❒ *Owner:* _https://wa.me/255693629079_ 
║❒ *Repo:* _https://github.com/Qartde/RAHMANI-XMD 
║❒ *WaChannel:* _https://whatsapp.com/channel/0029VatokI45EjxufALmY32X _ 
║❒ 
╚════════════════════════╝ 
_____________________________________ 
❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒❒ `

      let randomNjabuloaudio = "https://files.catbox.moe/hhw2a6.mp3"; // New audio URL
      let randomNjabulourl = "https://files.catbox.moe/cvd9sb.jpg";
                    
     await Pair_Code_By_France_King.sendMessage(Pair_Code_By_France_King.user.id, {                        
    image: { url: img },
    caption : fanax,
    image: { url: randomNjabulourl },
        contextInfo: {
          mentionedJid: [ms?.sender?.jid || ""],
          externalAdReply: {
            title: "❣️ Owner Info",
            mediaType: 1,
            previewType: 0,
            thumbnailUrl: randomNjabulourl,
            renderLargerThumbnail: false,
          }
        }
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

     await Pair_Code_By_France_King.sendMessage(Pair_Code_By_France_King.user.id, {
     audio: { url: randomNjabuloaudio }, 
     mimetype: 'audio/mp4', 
     ptt: true, // Voice note form
        contextInfo: {
          mentionedJid: [ms?.sender?.jid || ""],
          externalAdReply: {
            title: "❣️ Owner Info",
            mediaType: 1,
            previewType: 0,
            thumbnailUrl: randomNjabulourl,
            renderLargerThumbnail: false,
         }
     }
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
