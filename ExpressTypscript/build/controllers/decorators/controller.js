"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var appRouter_1 = require("./../../appRouter");
var MetatdataKeys_1 = require("./MetatdataKeys");
function bodyValidators(keys) {
    return function (req, res, next) {
        if (!req.body) {
            res.status(422).send('Invalid request');
            return;
        }
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!req.body[key]) {
                res.status(422).send('Invalid request');
                return;
            }
        }
        next();
    };
}
function controller(routePrefix) {
    return function (target) {
        var router = appRouter_1.AppRouter.getInstance();
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata(MetatdataKeys_1.MetadataKeys.path, target.prototype, key);
            var method = Reflect.getMetadata(MetatdataKeys_1.MetadataKeys.method, target.prototype, key);
            var middlewares = Reflect.getMetadata(MetatdataKeys_1.MetadataKeys.middleware, target.prototype, key) || [];
            var requiredBodyProps = Reflect.getMetadata(MetatdataKeys_1.MetadataKeys.validator, target.prototype, key) || [];
            var validator = bodyValidators(requiredBodyProps);
            if (path) {
                router[method].apply(router, ["" + routePrefix + path].concat(middlewares, [routeHandler]));
            }
        }
    };
}
exports.controller = controller;
