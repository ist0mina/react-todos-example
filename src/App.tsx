import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Layout from './core/layout';
import TodoPage from './core/todo-page';

const App: React.FC = () => (
  <Provider store={store}>    
    <Layout>
      <TodoPage />
    </Layout>    
  </Provider>
);

export default App;
