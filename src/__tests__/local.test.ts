import LaunchpadUtils from '../ushellServices';
import { changeShellTitle, getUserDetails, tsCrossAppVersion } from '../index';

test('My getUserInfo', () => {
  expect(getUserDetails());
});

test('My crossAppNavigate with default export', () => {
  expect(LaunchpadUtils.crossAppNavigate('d', 'dd', {}, 'dd'));
});
test('My tsCrossAppVersion ', () => {
  expect(tsCrossAppVersion('d', 'dd', {}, 'dd'));
});

test('My crossAppNavigate with default export', () => {
  expect(changeShellTitle('my new title'));
});

