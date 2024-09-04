import firebase from 'firebase';
import { signOut } from '../utils/auth';
import { getCards } from '../api/vocabData';
import { showCards, emptyCards } from '../pages/vocab';
import addVocabForm from '../forms/vocabForm';

const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // BOOKS ON SALE
  // document.querySelector('#sale-books').addEventListener('click', () => {
  //   // booksOnSale().then((books) => (showBooks(books)));
  //   booksOnSale(`${firebase.auth().currentUser.uid}`).then(showBooks);
  // });

  // ALL CARDS
  document.querySelector('#createEntry').addEventListener('click', () => {
    addVocabForm();
  });

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
