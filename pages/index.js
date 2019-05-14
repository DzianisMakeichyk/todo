import { Provider } from 'react-redux';

import Layout from '../components/Layout/Layout';
import TodoItemContainer from '../containers/TodoItemContainer';
import store from '../redux/store';

export default () => (
  <Provider store={store}>
    <Layout>
        <TodoItemContainer />
    </Layout>
  </Provider>
)