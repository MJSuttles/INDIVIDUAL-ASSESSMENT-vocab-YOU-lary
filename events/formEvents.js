import firebase from 'firebase';
import {
  createCard, getCards, updateCard,
} from '../api/vocabData';
import { showCards } from '../pages/vocab';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A CARD
    if (e.target.id.includes('submit-vocab')) {
      const payload = {
        word: document.querySelector('#vocabWord').value,
        language: document.querySelector('#language').value,
        definition: document.querySelector('#definition').value,
        uid: `${firebase.auth().currentUser.uid}`
      };

      createCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateCard(patchPayload).then(() => {
          getCards(`${firebase.auth().currentUser.uid}`).then(showCards);
        });
      });
    }

    // CLICK EVENT FOR EDITING A CARD
    if (e.target.id.includes('update-vocab')) {
      const payload = {
        word: document.querySelector('#vocabWord').value,
        language: document.querySelector('#language').value,
        definition: document.querySelector('#definition').value,
        uid: `${firebase.auth().currentUser.uid}`
      };

      updateCard(payload).then(() => {
        getCards(`${firebase.auth().currentUser.uid}`).then(showCards);
      });
    }
  });
};

export default formEvents;
