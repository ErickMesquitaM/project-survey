import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import PageLogin from '@/pages/Login';
import PageSign from '@/pages/Sign';

function App() {

  return (
    <Fragment>
      <Router>
        <Routes>

          <Route path="/login" element={ <PageLogin /> } />
          <Route path="/sign" element={ <PageSign /> } />

        </Routes>
      </Router>
    </Fragment>
  )
}

export default App;