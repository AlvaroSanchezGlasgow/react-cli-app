import { userConstants } from '../_constants';

const initialState = {};

export function activation(state = initialState, action) {
  switch (action.type) {
    case userConstants.ACTIVATE_REQUEST:
         return {
          activatingIn: true,
         
        };
    
    case userConstants.ACTIVATE_SUCCESS:
      return {};
    case userConstants.ACTIVATE_FAILURE:
      return {};
    default:
      return state
  }
}