import { Client, LocalAuth } from "whatsapp-web.js";
import { sendQrCode } from "./disc";

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", async (qr) => {
  await sendQrCode(qr);
});

client.on("ready", () => {
  console.log("Client is ready!");
});
client.on("message", (message) => {
  console.log(message.body);
});

client.initialize();
