import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CrudHeader from './crudHeader/CrudHeader';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <CrudHeader />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit/:id" component={StreamEdit} />
          <Route path="/streams/show/:id" component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
