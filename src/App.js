import React from 'react';
import { Provider } from "react-redux";

import PlaneList from "./components/PlaneList";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <main role="main" className="container">
        <div className="jumbotron">
          <PlaneList />
        </div>
      </main>
    </Provider>
  );
}

export default App;
