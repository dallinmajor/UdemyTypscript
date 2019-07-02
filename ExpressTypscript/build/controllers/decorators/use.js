"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var MetatdataKeys_1 = require("./MetatdataKeys");
function use(middleware) {
    return function (target, key, desc) {
        var middlewares = Reflect.getMetadata(MetatdataKeys_1.MetadataKeys.middleware, target, key) || [];
        middlewares.push(middleware);
        Reflect.defineMetadata(MetatdataKeys_1.MetadataKeys.middleware, middlewares.concat([middleware]), target, key);
    };
}
exports.use = use;
