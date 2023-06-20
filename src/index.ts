import LaunchpadUtils from './ushellServices';

const getUserDetails = LaunchpadUtils.getUserInfo;
const crossAppNavigate = LaunchpadUtils.crossAppNavigate;
const tsCrossAppVersion = LaunchpadUtils.tsCrossAppVersion;

export { crossAppNavigate, tsCrossAppVersion, getUserDetails };
