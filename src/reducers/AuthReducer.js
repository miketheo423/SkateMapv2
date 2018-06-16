import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  USERNAME_CHANGED,
  AUTHENTICATE_USER_START,
  AUTHENTICATE_USER_SUCCESS,
  AUTHENTICATE_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  username: '',
  user: null,
  error: '',
  loading: 'false'
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case EMAIL_CHANGED:
      console.log('email reducer', action.payload)
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      console.log('password reducer', action.payload)
      return { ...state, password: action.payload };
    case USERNAME_CHANGED:
      console.log('username reducer', action.payload)
      return { ...state, username: action.payload };
    case AUTHENTICATE_USER_START:
      return { ...state, loading: true, error: '' };
    case AUTHENTICATE_USER_SUCCESS:
      return { ...state, user: action.payload };
    case AUTHENTICATE_USER_FAIL:
      return { ...state, error: action.payload }
    default:
      return state;
  }
}