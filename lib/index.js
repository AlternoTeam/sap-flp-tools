"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crossAppNavigate = void 0;
var LaunchpadUtils = /** @class */ (function () {
    function LaunchpadUtils() {
    }
    LaunchpadUtils.crossAppNavigate = function (sSemObject, sAction, oParams, sAppend) {
        if (typeof window !== 'undefined' && window.hasOwnProperty('sap')) {
            // @ts-ignore
            var oCrossAppNavigator_1 = sap.ushell.Container.getService("CrossApplicationNavigation");
            var hash_1 = (oCrossAppNavigator_1 &&
                oCrossAppNavigator_1.hrefForExternal({
                    target: {
                        semanticObject: sSemObject,
                        action: sAppend ? sAction + sAppend : sAction,
                    },
                    params: oParams,
                })) || "";
            var sintent_1 = "#" + sSemObject + "=" + sAction;
            oCrossAppNavigator_1.isintentSupported([sintent_1]).done(function (olntentSupported) {
                // @ts-ignore
                if (olntentSupported &&
                    // @ts-ignore
                    olntentSupported[sIntent] &&
                    // @ts-ignore
                    olntentSupported[sintent_1].supported === true) {
                    oCrossAppNavigator_1.toExternal({
                        target: {
                            shellHash: hash_1,
                        },
                    });
                }
                else {
                    console.error("Intent + sintent + is not supported");
                }
            }.bind(this));
        }
        else {
            console.log("you must work in fiori launchpad");
        }
    };
    return LaunchpadUtils;
}());
exports.default = LaunchpadUtils;
var crossAppNavigate = LaunchpadUtils.crossAppNavigate;
exports.crossAppNavigate = crossAppNavigate;
