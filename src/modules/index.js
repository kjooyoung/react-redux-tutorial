import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

// 만들어놓은 리듀서를 하나로 합쳐줌
const rootReducer = combineReducers({
    counter,
    todos,
});

export default rootReducer;


//파일 이름을 index.js로 해주면 나중에 import 할때 디렉터리 이름만 입력하여 불러올수 있다.
// import rootReducer from './modules';