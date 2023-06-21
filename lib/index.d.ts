import ShellUtils from './shellUtils';
import UshellServices from './ushellServices';
declare const getUserDetails: typeof UshellServices.getUserInfo;
declare const crossAppNavigate: typeof UshellServices.crossAppNavigate;
declare const tsCrossAppVersion: typeof UshellServices.tsCrossAppVersion;
declare const toggleShellHeader: typeof ShellUtils.toggleShellHeader;
declare const changeShellTitle: typeof ShellUtils.changeShellTitle;
export { crossAppNavigate, tsCrossAppVersion, getUserDetails, toggleShellHeader, changeShellTitle };
