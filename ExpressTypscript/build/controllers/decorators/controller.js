"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var appRouter_1 = require("./../../appRouter");
function controller(routePrefix) {
    return function (target) {
        var router = appRouter_1.AppRouter.getInstance();
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata('path', target.prototype, key);
            var method = Reflect.getMetadata('method', target.prototype, key);
            if (path) {
                router[method]("" + routePrefix + path, routeHandler);
            }
        }
    };
}
exports.controller = controller;
