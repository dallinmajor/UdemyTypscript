"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var loginRoutes_1 = require("./routes/loginRoutes");
var bodyParser = require("body-parser");
var app = express_1.default();
var PORT = 4000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(loginRoutes_1.router);
app.listen(PORT, function () {
    console.log("Listening on " + PORT);
});
