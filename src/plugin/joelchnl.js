const ping = async (m, sock) => {
  const prefix = config.PREFIX;
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === "support") {
    const start = new Date().getTime();
    await m.React('❀');
    const end = new Date().getTime();
    const responseTime = (end - start) / 1000;

    const text = `┏━━━━❐
┃『ᴊᴏᴇʟ ᴍᴇ ʙᴏᴛ』
┗━━━━
┏
┃『ᴡᴀ ᴄʜᴀɴɴᴇʟ』
┃❑ https://whatsapp.com/channel/0029Vade9VgD38CPEnxfYF0M
┗━━━━━━━━
┏
┃『ᴡᴀ ɢʀᴏᴜᴘ 』
┃❐ https://chat.whatsapp.com/GxlcVwkXrPo2YwNoQI5TwS
┗━━━━━━━━━━━
┏
┃『ʏᴏᴜ ᴛᴜʙᴇ 』
┃❐https://youtube.com/@joeltech255?si=rqhYlAhFtqK7CVX2
┗━━━━━━━━━━━━━
┏
┃『ᴛɪᴋᴛᴏᴋ 』
┃❐https://www.tiktok.com/@joeljamestech
┗━━━━━━━━━━━━━━━━━━━━━━━❑`;
    sock.sendMessage(m.from, { text }, { quoted: m });
  }
}

export default ping;
