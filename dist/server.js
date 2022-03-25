"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const connectDB_1 = __importDefault(require("./config/connectDB"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./config/config"));
const routes_1 = __importDefault(require("./routes/routes"));
const app = (0, express_1.default)();
const router = new routes_1.default(app);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)({ origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE'] }));
(0, connectDB_1.default)();
router.init();
app.listen(config_1.default.port, () => {
    console.log('Server Running!');
});
