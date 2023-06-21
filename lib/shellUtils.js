"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sapUtils_1 = require("./sapUtils");
class ShellUtils {
    static toggleShellHeader(display) {
        if ((0, sapUtils_1.isSapEnv)()) {
            const oRenderer = ShellUtils.container.getRenderer("fiori2");
            oRenderer.setHeaderVisibility(display, display, ["home", "app"]);
        }
    }
    static changeShellTitle(title) {
        if ((0, sapUtils_1.isSapEnv)()) {
            const menuButton = sap.ui.getCore().byId("shellAppTitle");
            menuButton.setText(title);
        }
    }
}
// @ts-ignore
ShellUtils.container = (0, sapUtils_1.isSapEnv)() ? sap.ushell.Container : {};
exports.default = ShellUtils;
