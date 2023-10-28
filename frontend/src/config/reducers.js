import { combineReducers } from 'redux';
import { TabReducer } from './tabReducer/tabReducer';
import { FontReducer } from './fontReducer/fontReducer';
import { TextIndexReducer } from './textIndexReducer/textIndexReducer';

const rootReducer = combineReducers({
  tab: TabReducer,
  font: FontReducer,
  tIndex: TextIndexReducer,
});

export default rootReducer;
