import list from 'src/modules/navigation/list/navigationListReducers';
import form from 'src/modules/navigation/form/navigationFormReducers';
import view from 'src/modules/navigation/view/navigationViewReducers';
import destroy from 'src/modules/navigation/destroy/navigationDestroyReducers';
import importerReducer from 'src/modules/navigation/importer/navigationImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
