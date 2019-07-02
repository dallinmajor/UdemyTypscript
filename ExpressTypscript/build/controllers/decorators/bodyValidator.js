"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var MetatdataKeys_1 = require("./MetatdataKeys");
function bodyValidator() {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    return function (target, key, desc) {
        Reflect.defineMetadata(MetatdataKeys_1.MetadataKeys.validator, keys, target, key);
    };
}
exports.bodyValidator = bodyValidator;
