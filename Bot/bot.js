const { Telegraf } = require("telegraf");

const TOKEN = "6880391141:AAENZeHQqvkpKlNtDKeRnT_VcjfROR1ucDU";
const bot = new Telegraf(TOKEN);

const web_link = "https://dmkrl.github.io/test-project-global/";

bot.start((ctx) =>
    ctx.reply("Откройте приложение магазина-мебели", {
        reply_markup: {
            keyboard: [
                [{ text: "Furniture store", web_app: { url: web_link } }],
            ],
        },
    })
);

bot.launch();
