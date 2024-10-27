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
import Team from './Team';
import Ambassadors from './Ambassadors/Ambassdors';
import Heroes from './Heroes/Heroes';
import News from './News/News';
// import Ambassadors from './Ambassadors';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/neopalymi" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="team" element={<Team />} />
          <Route path="ambassadors" element={<Ambassadors />} />
          <Route path="heroes" element={<Heroes />} />
          <Route path="news" element={<News />} />
          {/* <Route path="not-found" element={<NotFound />} /> */}


          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
