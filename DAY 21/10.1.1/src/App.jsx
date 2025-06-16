import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import HomePage from './Pages/HomePage.jsx';
import NeetClass10 from './Pages/neet/NeetClass10.jsx';
import NeetClass11 from './Pages/neet/NeetClass11.jsx';
import NeetClass12 from './Pages/neet/NeetClass12.jsx';
import NavbarComponent from './Components/NavbarComponent.jsx';
import JeeClass10 from './Pages/jee/JeeClass10.jsx';
import JeeClass11 from './Pages/jee/JeeClass11.jsx';
import JeeClass12 from './Pages/jee/JeeClass12.jsx';
import NotFoundPage from './Pages/ErrorPage.jsx';
import Outline from './Pages/outline.jsx';
import SignupPage from './Pages/SignUpPage.jsx';

const App = () => {

  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Outline />}>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/neet/online-coaching-class-10"
              element={<NeetClass10 />}
            />
            <Route
              path="/neet/online-coaching-class-11"
              element={<NeetClass11 />}
            />
            <Route
              path="/neet/online-coaching-class-12"
              element={<NeetClass12 />}
            />
            <Route
              path="/jee/online-coaching-class-10"
              element={<JeeClass10 />}
            />
            <Route
              path="/jee/online-coaching-class-11"
              element={<JeeClass11 />}
            />
            <Route
              path="/jee/online-coaching-class-12"
              element={<JeeClass12 />}
            />
            <Route
              path="/signup"
              element={<SignupPage />}
            />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;