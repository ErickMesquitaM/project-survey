import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PageLogin from './pages/Login';

function App() {

  return (
    <Fragment>
      <Router>
        <Routes>

          <Route path="/" element={ <PageLogin /> } />


        </Routes>
      </Router>
    </Fragment>
  )
}

export default App;