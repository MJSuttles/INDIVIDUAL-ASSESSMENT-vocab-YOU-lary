import firebase from 'firebase';
import addVocabForm from '../forms/vocabForm';
import {
  getSingleCard, deleteSingleCard, getCards
} from '../api/vocabData';
import { showCards } from '../pages/vocab';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR ADDING CARD
    if (e.target.id.includes('add-vocab-btn')) {
      addVocabForm(`${firebase.auth().currentUser.uid}`);
    }

    // // CLICK EVENT FOR VIEWING INDIVIDUAL CARD
    // if (e.target.id.includes('view-card-btn')) {
    //   const [, firebaseKey] = e.target.id.split('--');

    //   getSingleCard(firebaseKey).then(showCards);
    // }

    // CLICK EVENT FOR DELETING A CARD
    if (e.target.id.includes('delete-card-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE CARD', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteSingleCard(firebaseKey).then(() => {
          getCards(`${firebase.auth().currentUser.uid}`).then(showCards);
        });
      }
    }

    // ADD CLICK EVENT FOR EDITING A CARD
    if (e.target.id.includes('update-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleCard(firebaseKey).then((cardObj) => addVocabForm(cardObj));
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A CARD
    if (e.target.id.includes('submit-form')) {
      addVocabForm(`${firebase.auth().currentUser.uid}`);
    }
  });
};

export default domEvents;
