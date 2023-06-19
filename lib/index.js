"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crossAppNavigate = void 0;
var LaunchpadUtils = /** @class */ (function () {
    function LaunchpadUtils() {
    }
    LaunchpadUtils.crossAppNavigate = function (sSemObject, sAction, oParams, sAppend) {
        if (typeof window !== 'undefined' && window.hasOwnProperty('sap')) {
            // @ts-ignore
            sap.ushell.Container.getServiceAsync('CrossApplicationNavigation').then(
            // @ts-ignore
            function (oService) {
                var hash = (oService &&
                    oService.hrefForExternal({
                        target: {
                            semanticObject: sSemObject,
                            action: sAppend ? sAction + sAppend : sAction,
                        },
                        params: oParams,
                    })) ||
                    '';
                var sintent = '#' + sSemObject + '=' + sAction;
                oService.isIntentSupported([sintent]).done(function (olntentSupported) {
                    // @ts-ignore
                    if (olntentSupported &&
                        // @ts-ignore
                        olntentSupported[sintent] &&
                        // @ts-ignore
                        olntentSupported[sintent].supported === true) {
                        oService.toExternal({
                            target: {
                                shellHash: hash,
                            },
                        });
                    }
                    else {
                        console.error('Intent ' + sintent + ' is not supported');
                    }
                    // @ts-ignore
                }.bind(this));
            }.bind(this));
        }
        else {
            console.log('You must work in fiori launchpad');
        }
    };
    return LaunchpadUtils;
}());
exports.default = LaunchpadUtils;
var crossAppNavigate = LaunchpadUtils.crossAppNavigate;
exports.crossAppNavigate = crossAppNavigate;
