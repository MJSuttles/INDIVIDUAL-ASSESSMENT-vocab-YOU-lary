import client from '../utils/client';

const endpoint = client.databaseURL;

// GET ALL CARDS
const getCards = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleCard = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// CREATE CARD
const createCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application.json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// DELETE CARD
const deleteSingleCard = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// UPDATE CARD
const updateCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// GET ALL LANGUAGES
const getLanguages = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  getCards,
  createCard,
  updateCard,
  getSingleCard,
  deleteSingleCard,
  getLanguages,
};
