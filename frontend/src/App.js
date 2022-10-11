import {Provider} from 'react-redux'
import configureStore from './store';

import Main from './page/Main';

const store = configureStore()
function App(props) {
  return (
    <Provider store={store}>
    <div className="App">
        <Main></Main>
    </div>
    </Provider>
  );
}

export default App