
export default class LaunchpadUtils {
    public static crossAppNavigate(sSemObject: string, sAction: string, oParams: object, sAppend?: string) {
        if (typeof window !== 'undefined' && window.hasOwnProperty('sap')) {
            // @ts-ignore
            sap.ushell.Container.getServiceAsync("CrossApplicationNavigation").then(function(oService){
                const hash =
                (oService &&
                    oService.hrefForExternal({
                        target: {
                            semanticObject: sSemObject,
                            action: sAppend ? sAction + sAppend : sAction,
                        },
                        params: oParams,
                    })) || "";
                const sintent = "#" + sSemObject + "=" + sAction;

                oService.isIntentSupported([sintent]).done(
                    function (olntentSupported: object) {
                        // @ts-ignore
                        if (
                            olntentSupported &&
                            // @ts-ignore
                            olntentSupported[sintent] &&
                            // @ts-ignore
                            olntentSupported[sintent].supported === true
                        ) {
                            oService.toExternal({
                                target: {
                                    shellHash: hash,
                                },
                            });
                        } else {
                            console.error("Intent " + sintent + " is not supported");
                        }
                    // @ts-ignore
                    }.bind(this));
                }.bind(this));
        }
        else {
            console.log("You must work in fiori launchpad")
        }
    }
}
const crossAppNavigate = LaunchpadUtils.crossAppNavigate
export { crossAppNavigate }
