import React from 'react';
import SignInForm from "./pages/SignInForm/SigninForm";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignInForm/>} />
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
