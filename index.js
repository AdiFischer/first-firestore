// const firebase = requair
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
// import our credentials (derviceAccount)
import serviceAccount from './serviceAccount.js';

// connect to our firebase project using those credentials
initializeApp({
    credential: cert(serviceAccount)
})

// connect to firestore database
const db = getFirestore();
//all steps above - same for all

// lets definde a new video game

const newGame = {
    title: 'Frogger',
    rated: 'E',
    genre: 'Arcade',
    released: 1981,
}

// creat a doc inside a collection
db.collection('games').add(newGame)
 
  // if ok, console.log the doc id
  .then(doc => console.log('Game created: ', doc.id))
  // if not, console.log the error. Do this first cause it's easier
  .catch(console.error)

// give me all the docs/games
db.collection('games').get()
// reshepe the collection
.then(collection => {
    collection.docs.forEach(doc => {
    console.log(doc.id, doc.data())
    })
})
.catch(console.error)