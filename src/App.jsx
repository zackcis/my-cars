
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { AboutPage } from './pages/About/about';
import { MyProvider } from './utils/contextProvider';
import { Header } from './layouts/header';
import { Footer } from './layouts/footer';
import { VehiclesPage } from './pages/Vehicles/vehicles';
import { DetailPage } from './pages/detail/detailpage';
import { ContactUsPage } from './pages/contactUs/contactUsPage';
function App() {
  return (
    <MyProvider>
      <Header/>
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/vehicles' element = {<VehiclesPage/>}/>
        <Route path='/details/:idCar' element={<DetailPage/>}/>
        <Route path='/aboutus' element={<AboutPage />} />
        <Route path='/contactus' element={<ContactUsPage/>}/>
      </Routes >
      <Footer/>
    </MyProvider>

  );
}
export default App;
