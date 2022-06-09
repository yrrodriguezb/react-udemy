import Swal from 'sweetalert2'
import { types } from "../types/types"
import { firebase, googleAuthProvider } from "../firebase/firebase.config";
import { startLoading, finishLoading } from "./ui";

export const startLoginWithEmailAndPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid,  user.displayName));
        dispatch(finishLoading());
      })
      .catch(err => {
        dispatch(finishLoading());
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: err.message
        })
      })
  }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({
          displayName: name
        })
        
        dispatch(login(user.uid, user.displayName))
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: err.message
        })
      })
  }
}


export const starGoogleLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then( ({ user }) => {
        dispatch(login(user.uid, user.displayName))
      });
  }
}

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName
    }
  }
}

export const startLogout = () => {
  return (dispatch) => {
    firebase.auth().signOut()
      .then(() => {
        dispatch(logout());
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: err.message
        })
      })
  }
}

export const logout = () => ({
  type: types.logout
})