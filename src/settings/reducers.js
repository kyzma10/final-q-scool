import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const reducers = combineReducers({
  form: form
});

export default reducers
