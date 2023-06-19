import { crossAppNavigate, tsCrossAppVersion } from '../index';
import LfpUtils from '../index';

test('My crossAppNavigate with destract', () => {
  expect(crossAppNavigate('d', 'dd', {}, 'dd'));
});

test('My crossAppNavigate with default export', () => {
  expect(LfpUtils.crossAppNavigate('d', 'dd', {}, 'dd'));
});
test('My tsCrossAppVersion ', () => {
  expect(tsCrossAppVersion('d', 'dd', {}, 'dd'));
});

