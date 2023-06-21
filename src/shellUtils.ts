import Container from 'sap/ushell/Container';
import Renderer from 'sap/ushell/renderers/fiori2/Renderer';
import { isSapEnv } from './sapUtils';
import Button from 'sap/m/Button';

export default class ShellUtils {
  // @ts-ignore
  public static container: Container = isSapEnv() ? sap.ushell.Container : {};

  public static toggleShellHeader(display: boolean) {
    if (isSapEnv()) {
      const oRenderer = ShellUtils.container.getRenderer('fiori2') as Renderer;
      oRenderer.setHeaderVisibility(display, display, ['home', 'app']);
    }
  }
  public static changeShellTitle(title: string) {
    if (isSapEnv()) {
      const menuButton = sap.ui.getCore().byId('shellAppTitle') as Button;
      menuButton.setText(title);
    }
  }
}
