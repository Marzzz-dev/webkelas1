window.onload = function() {
  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  }, 1800); // waktu loading 1.8 detik
};

function showBlock(block) {
  let html = '';
  if (block === 'dev-intro') {
    html = `<b>ɪᴍ ᴄᴏᴅᴇ/ɴᴀᴍᴇ(ᴍᴀʀᴢ.ᴊꜱ) ꜱᴇʟᴀᴋᴜ ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴅᴀʀɪ ᴡᴇʙ ɴʏᴀ ᴍᴇɴɢᴜᴄᴀᴘ ᴋᴀɴ ꜱᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ ᴡᴇʙ ᴠɪɪɪ ᴀʙᴜ ʙᴀᴋᴀʀ, ᴅᴀɴ ꜱᴇʟᴀᴍᴀᴛ ᴍᴇɴɪᴋᴍᴀᴛɪ.`;
  } else if (block === 'class-info') {
    html = `<b>kelas ini adalah kelas yang saya tempati dimana</b> tempat ini adalah kelas yang asik dan guru nya baik.`;
  } else if (block === 'dev-info') {
    html = `<b>Informasi Developer:</b><br>
    Nama: <span style="color:#1a8cff;font-weight:bold;">Im marz / yang kalian lebih sering kenal bumi dan yap aku dev nya 🤭</span><br>
    contact dev: <span style="color:#1a8cff;font-weight:bold;">ini adalah may kontak ygy</span><br>
    tele dev: <span style="color:#1a8cff;font-weight:bold;">t.me/Marz_offc</span><br>
    wangsaf dev:= <span style="color:#1a8cff;font-weight:bold;">6285135716554</span><br>
    Email: <span style="color:#00eaff;">yroheni9@gmail.com (busines prupose only)</span>`;
  } else if (block === 'school-profile') {
    html = `<div class="school-profile-bg">
      <h2>Smp almuslim, sidoarjo</h2>
      <b>Profil Kelas:</b><br>
      Kelas VIII yang murid nya berprestasi dan sangat baik,disini ustadzah kami, yaitu ustadzah eko sangat baik dalam mengajar meta pelajaran ipa selaku mata pelajaran yang diajar nya.
    </div>`;
  }
  document.getElementById('content-area').innerHTML = html;
}