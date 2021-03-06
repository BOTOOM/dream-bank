import * as fromLogin from '../reducers/login.reducer';
import { selectLoginState } from './login.selectors';

describe('Login Selectors', () => {
  it('should select the feature state', () => {
    const result = selectLoginState({
      [fromLogin.loginFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
