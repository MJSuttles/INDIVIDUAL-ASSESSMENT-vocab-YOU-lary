import firebase from 'firebase';
import { signOut } from '../utils/auth';
import { getCards, cardsByLanguage } from '../api/vocabData';
import { showCards, emptyCards } from '../pages/vocab';
import addVocabForm from '../forms/vocabForm';

const navigationEvents = () => {
  // LOGOUT BUTTON
  console.warn("I'm about to listen to logout button");
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // ALL CARDS
  console.warn("I'm about to listen to #createEntry");
  document.querySelector('#createEntry').addEventListener('click', () => {
    addVocabForm();
  });

  // CARDS BY LANGUAGE
  document.querySelector('#allLanguages').addEventListener('click', () => {
    cardsByLanguage(`${firebase.auth().currentUser.uid}`).then(showCards);
  });

  // DELETE CARD
  console.warn("I'm about to listen to #allCards");
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
