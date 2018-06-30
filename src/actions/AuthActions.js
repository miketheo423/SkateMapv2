import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  AUTHENTICATE_USER_START,
  AUTHENTICATE_USER_SUCCESS,
  AUTHENTICATE_USER_FAIL,
  USERNAME_CHANGED
} from './types'

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const usernameChanged = (text) => {
  return {
    type: USERNAME_CHANGED,
    payload: text
  }
}

export const createUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: AUTHENTICATE_USER_START });

      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
          authenticateUserSuccess(dispatch, user)
        }).catch((error) => authenticateUserFail(dispatch, error));
  }
}

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: AUTHENTICATE_USER_START });
    console.log(email, password, '---- logging in user ------');
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        authenticateUserSuccess(dispatch, user)
      }).catch((error) => authenticateUserFail(dispatch, error));
  }
}

const authenticateUserSuccess = (dispatch, user) => {
  dispatch({
    type: AUTHENTICATE_USER_SUCCESS,
    payload: user
  });

  Actions.spotFeedFlow();
}

const authenticateUserFail = (dispatch, error) => {
  dispatch({ 
    type: AUTHENTICATE_USER_FAIL,
    payload: error.message
  });
}

const addUserName = (username) => {
  const user = firebase.auth().currentUser;
  user.updateProfile({
    displayName: username
  })
  .catch((error) => console.log(error));
}

