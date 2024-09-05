import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
   <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <label for="image">Word</label>
        <input type="text" class="form-control" id="vocabWord" placeholder="Word you want defined" required>
      </div>
      <div class="form-group">
        <label for="image">Definition</label>
        <input type="text" class="form-control" id="definition" placeholder="Definition" required>
      </div>
      <div class="dropdown show">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Language/Tech
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
         <a class="dropdown-item" href="#">HTML</a>
          <a class="dropdown-item" href="#">CSS</a>
          <a class="dropdown-item" href="#">JavaScript</a>
        </div>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
