import LaunchpadUtils from "../ushellServices";
import { getUserInfo, tsCrossAppVersion } from "../index";

test('My getUserInfo', () => {
  expect(getUserInfo());
});

test('My crossAppNavigate with default export', () => {
  expect(LaunchpadUtils.crossAppNavigate('d', 'dd', {}, 'dd'));
});
test('My tsCrossAppVersion ', () => {
  expect(tsCrossAppVersion('d', 'dd', {}, 'dd'));
});

