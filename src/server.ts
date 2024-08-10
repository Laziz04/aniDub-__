import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
app.use(bodyParser.json());

// Telegram bot tokeni va chat ID (bularni o'zingizning ma'lumotlaringiz bilan almashtiring)
const TELEGRAM_BOT_TOKEN = "7404963914:AAEOCph3rzi-VwSKngEPzIlSl4t9AQYxa1c";
const CHAT_ID = "5557888523"; // Vergulsiz chat ID

app.post("/notify", async (req: Request, res: Response) => {
  const message = req.body.text;

  console.log(`Xabar: ${message}`);

  try {
    // Telegram bot orqali xabar yuborish
    await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: CHAT_ID,
        text: message,
      }
    );

    res.sendStatus(200);
  } catch (error) {
    console.error("Xabar yuborishda xato:", error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => {
  console.log("Bot serveri ishga tushdi.");
});

// Agar bu fayl import qilinadigan bo'lsa, modullar sifatida tanilishini ta'minlash
export {};
