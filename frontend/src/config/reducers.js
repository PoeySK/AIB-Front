import { combineReducers } from 'redux';
import { TabReducer } from './tabReducer/tabReducer';
import { FontReducer } from './fontReducer/fontReducer';

const rootReducer = combineReducers({
  tab: TabReducer,
  font: FontReducer,
});

export default rootReducer;
