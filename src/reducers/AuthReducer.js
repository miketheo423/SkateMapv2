import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  USERNAME_CHANGED,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
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
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case USERNAME_CHANGED:
      return { ...state, username: action.payload };
    case LOGIN_USER_START:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: action.payload }
  }
}