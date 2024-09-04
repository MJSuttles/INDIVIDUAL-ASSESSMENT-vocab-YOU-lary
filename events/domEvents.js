import firebase from 'firebase';
import addVocabForm from '../forms/vocabForm';
import { getSingleCard } from '../api/vocabData';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR ADDING CARD
    if (e.target.id.includes('add-vocab-btn')) {
      addVocabForm(`${firebase.auth().currentUser.uid}`);
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
