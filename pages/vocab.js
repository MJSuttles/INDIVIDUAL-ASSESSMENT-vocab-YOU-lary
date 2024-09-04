import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyCards = () => {
  const domString = '<h1>No Authors</h1>';
  renderToDOM('#store', domString);
};

const showCards = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h3 class="card-title">${item.word}</h3>
        <h3 class="card-subtitle mb-2 text-muted">${item.language}</h3>
        <h3 class="card-subtitle mb-2 text-muted">${item.definition}</h3>
        <hr>
        <i class="btn btn-success fas fa-eye" id="view-card-btn--${item.firebaseKey}"></i>
        <i class="fas fa-edit btn btn-info" id="update-card--${item.firebaseKey}"></i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-card-btn--${item.firebaseKey}"></i>
      </div>
    </div>
    `;
  });
  renderToDOM('#store', domString);
};

export { showCards, emptyCards };
