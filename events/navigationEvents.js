/* eslint-disable prefer-destructuring */
import firebase from 'firebase';
import { signOut } from '../utils/auth';
import {
  getCards, cardsByHTML, cardsByCSS, cardsByJavaScript
} from '../api/vocabData';
import { showCards, emptyCards } from '../pages/vocab';
import addVocabForm from '../forms/vocabForm';

const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // CREATE ENTRY BUTTON
  document.querySelector('#createEntry').addEventListener('click', () => {
    addVocabForm();
  });

  // ALL CARDS
  document.querySelector('#allCards').addEventListener('click', () => {
    getCards(`${firebase.auth().currentUser.uid}`).then(showCards);
  });

  // CARDS BY HTML
  document.querySelector('#HTMLButton').addEventListener('click', () => {
    cardsByHTML(`${firebase.auth().currentUser.uid}`).then(showCards);
  });

  // CARDS BY CSS
  document.querySelector('#CSSButton').addEventListener('click', () => {
    cardsByCSS(`${firebase.auth().currentUser.uid}`).then(showCards);
  });

  // CARDS BY JAVASCRIPT
  document.querySelector('#JavaScriptButton').addEventListener('click', () => {
    cardsByJavaScript(`${firebase.auth().currentUser.uid}`).then(showCards);
  });

  // DELETE CARD
  document.querySelector('#allCards').addEventListener('click', () => {
    getCards(`${firebase.auth().currentUser.uid}`).then((cards) => {
      if (cards.length === 0) {
        emptyCards();
      } else {
        showCards(cards);
      }
    });
  });
};

export default navigationEvents;
