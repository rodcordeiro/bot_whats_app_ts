"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const whatsapp_web_js_1 = require("whatsapp-web.js");
const disc_1 = require("./disc");
const client = new whatsapp_web_js_1.Client({
    authStrategy: new whatsapp_web_js_1.LocalAuth(),
});
client.on("qr", async (qr) => {
    await (0, disc_1.sendQrCode)(qr);
});
client.on("ready", () => {
    console.log("Client is ready!");
});
client.on("message", (message) => {
    console.log(message.from);
});
client.initialize();
