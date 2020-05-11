import React, {Fragment} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Router/AppRouter";
import RefundPolicy from "./pages/RefundPolicy/RefundPolicy";

function App() {
  return (
    <Fragment className="App">

<BrowserRouter>
    <AppRouter/>
</BrowserRouter>

    </Fragment>
  );
}

export default App;
