"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendQrCode = void 0;
const axios_1 = __importDefault(require("axios"));
const form_data_1 = __importDefault(require("form-data"));
const fs_1 = __importDefault(require("fs"));
const qrcode_1 = __importDefault(require("qrcode"));
const sendQrCode = async (code) => {
    const form = new form_data_1.default();
    qrcode_1.default.toFile("./qrCode.png", code, async (err) => {
        if (err) {
            throw err;
        }
        form.append("avatar_url", "https://rodcordeiro.github.io/shares/img/vader.png");
        form.append("username", "rod");
        form.append("content", "KODA-Class QRCode");
        form.append("file1", fs_1.default.createReadStream("./qrCode.png"));
        await axios_1.default
            .post(
        // eslint-disable-next-line no-undef
        "https://discord.com/api/webhooks/1096546893179396096/Dtg3rf_vr-roPMGHKWU2KVZF0WszWx__UKPqbrZWZk7VG1ukU8LREvcRyXgIOK2iw7Kn", form)
            .then(() => {
            console.log("QR Code sent. Please verify quickly.");
            fs_1.default.unlink("./qrCode.png", () => { });
        })
            .catch((err) => {
            console.error(err);
            throw err;
        });
    });
};
exports.sendQrCode = sendQrCode;
