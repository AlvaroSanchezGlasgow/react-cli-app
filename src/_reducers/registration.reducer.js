import { userConstants } from '../_constants';

const initialState = { registering: false } ;
export function registration(state = initialState, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return {
        registering: true
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        registering: true
      };
    case userConstants.REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}