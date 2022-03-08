
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Banner from './Components/Banner/Banner';
import Services from './Menu-service/Services';
import Testimonial from './Components/Testimonials/Testimonial';
import SignIn from './Components/AccountLogin/SignIn';

import MyDocument from './Components/PdfReport/PatientReport';
import SignUp from './Components/SignUp/SignUp';

 function App() {
   return (
    <div>
      {/* <Header />
      <Banner />
      <Services />
      <Testimonial />
      <Footer/>
       <SignIn /> */}
       <SignUp/>
    </div>
  );
}

export default App;
