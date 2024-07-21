import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

import Layout from './Layout';
// import Home from './pages/Home';
// import NotFound from './pages/NotFound';
import Main from './Main';
import Blog from './Blog';
import SignIn from './SignIn';
import Clause from './Clause';
function App() {
  return (
    <div className="App">
      <Routes>

        
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Clause />} />
          <Route path="signIn" element={<SignIn />} />
          {/* <Route path="not-found" element={<NotFound />} /> */}


          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
