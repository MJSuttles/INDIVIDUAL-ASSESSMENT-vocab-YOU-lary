import logoutButton from '../components/loginButton';
import domBuilder from '../shared/domBuilder';
import formEvents from '../events/formEvents';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';
import navBar from '../shared/navBar';
import { getCards } from '../api/vocabData';
import { showCards } from '../pages/vocab';

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  navBar();
  logoutButton();
  navigationEvents();

  getCards(user.uid).then((cards) => showCards(cards));
};

export default startApp;
