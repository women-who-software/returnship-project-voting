import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCjeokw8a1Rboko-adxaqz1vPTFxAg0-Ew',
  authDomain: 'wwc-projecthub.firebaseapp.com',
  databaseURL: 'https://wwc-projecthub.firebaseio.com',
  projectId: 'wwc-projecthub',
  storageBucket: 'wwc-projecthub.appspot.com',
  messagingSenderId: '481983717776',
  appId: '1:481983717776:web:ae6684d7600c2db42d1315',
  measurementId: 'G-HEW6B6W8L4'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
