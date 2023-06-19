export default class LaunchpadUtils {
  public static crossAppNavigate(sSemObject: string, sAction: string, oParams: object, sAppend?: string) {
    // @ts-ignore
    let oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
    let hash =
      (oCrossAppNavigator &&
        oCrossAppNavigator.hrefForExternal({
          target: {
            semanticObject: sSemObject,
            action: sAppend ? sAction + sAppend : sAction,
          },
          params: oParams,
        })) ||
      "";
    let sintent = "#" + sSemObject + "=" + sAction;

    oCrossAppNavigator.isintentSupported([sintent]).done(
      function (olntentSupported: object) {
        // @ts-ignore
        if (
          olntentSupported &&
          // @ts-ignore
          olntentSupported[sIntent] &&
          // @ts-ignore
          olntentSupported[sintent].supported === true
        ) {
          oCrossAppNavigator.toExternal({
            target: {
              shellHash: hash,
            },
          });
        } else {
          console.error("Intent + sintent + is not supported");
        }
      }.bind(this)
    );
  }
}
