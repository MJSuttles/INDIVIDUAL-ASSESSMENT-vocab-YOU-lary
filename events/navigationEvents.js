import firebase from 'firebase';
import { signOut } from '../utils/auth';
import { getCards } from '../api/vocabData';
import { showCards, emptyCards } from '../pages/vocab';
import addVocabForm from '../forms/vocabForm';
// import { showLanguages, emptyLanguages } from '../pages/languages';
// import addLanguageForm from '../forms/LanguageForm';

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

  // document.querySelector('#createLanguage').addEventListener('click', () => {
  //   addLanguageForm();
  // });

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
