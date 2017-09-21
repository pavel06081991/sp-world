import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';

export default combineReducers({
  form: formReducer,
});