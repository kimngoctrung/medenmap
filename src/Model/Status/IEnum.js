"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberMessage;
(function (NumberMessage) {
    NumberMessage[NumberMessage["Success"] = 200] = "Success";
    NumberMessage[NumberMessage["NotFound"] = 404] = "NotFound";
    NumberMessage[NumberMessage["ErrorSever"] = 500] = "ErrorSever";
})(NumberMessage || (NumberMessage = {}));
exports.default = NumberMessage;
