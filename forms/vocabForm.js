import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
   <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <label for="image" id="wordLabel">Word</label>
        <input type="text" class="form-control" id="vocabWord" placeholder="Word you want defined" required>
      </div>
      <div class="form-group">
        <label for="image" id="definitionLabel">Definition</label>
        <input type="text" class="form-control" id="definition" placeholder="Definition" required>
      </div>
      <div class="form-floating mb-3">
        <select class="form-select" id="language" aria-label="Default select example" required>
          <label>Language/Tech</label>
          <option value="HTML">HTML (Text Only - No Special Characters)</option>
          <option value="CSS">CSS (Text Only - No Special Characters)</option>
          <option value="JavaScript">JavaScript (Text Only - No Special Characters)</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Submit</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
