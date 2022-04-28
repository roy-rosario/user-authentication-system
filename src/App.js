import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Dashboard from './pages/Dashboard'
import Error from './pages/Error'
import Container from 'react-bootstrap/Container'
// import Button from 'react-bootstrap/Button'
// import Alert from 'react-bootstrap/Alert'
// import Breadcrumb from 'react-bootstrap/Breadcrumb'
// import BreadcrumbItem from 'react-bootstrap/BreadcrumbItem'
// import Card from 'react-bootstrap/Card'
// import CardHeader from 'react-bootstrap/CardHeader'
// import CardImg from 'react-bootstrap/CardImg'
// import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LogIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
