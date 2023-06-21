import ShellUtils from './shellUtils';
import UshellServices from './ushellServices';

// UshellServices
const getUserDetails = UshellServices.getUserInfo;
const crossAppNavigate = UshellServices.crossAppNavigate;
const tsCrossAppVersion = UshellServices.tsCrossAppVersion;
const loadPersonalization = UshellServices.loadPersonalization;
const savePersonalization = UshellServices.savePersonalization;
export { crossAppNavigate, tsCrossAppVersion, getUserDetails, loadPersonalization, savePersonalization };

// ShellUtils
const toggleShellHeader = ShellUtils.toggleShellHeader;
const changeShellTitle = ShellUtils.changeShellTitle;
export { toggleShellHeader, changeShellTitle };
