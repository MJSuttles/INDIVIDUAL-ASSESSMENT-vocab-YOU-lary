import renderToDOM from '../utils/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid">
        <a class="navbar-brand title" href="#">Vocab-YOU-lary</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#" id="allCards">Show All Vocab Cards</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="HTMLButton">HTML</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="CSSButton">CSS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="JavaScriptButton">JavaScript</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="createEntry">Create Entry</a>
            </li>
          </ul>
          <span class="navbar-text">
            <div id="cart-button"></div>
            <div id="logout-button"></div>
          </span>
        </div>
        </div>
      </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
