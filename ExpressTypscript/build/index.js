"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var loginRoutes_1 = require("./routes/loginRoutes");
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
require("./controllers/loginController");
var appRouter_1 = require("./appRouter");
var app = express_1.default();
var PORT = 4000;
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cookie_session_1.default({ keys: ['laskdjf'] }));
app.use(loginRoutes_1.router);
app.use(appRouter_1.AppRouter.getInstance());
app.listen(PORT, function () {
    console.log("Listening on " + PORT);
});
