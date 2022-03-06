import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Banner from './Components/Banner/Banner';
import Services from './Menu-service/Services';
import Testimonial from './Components/Testimonials/Testimonial';
import SignIn from './Components/AccountLogin/SignIn';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <Testimonial />
      <Footer/>
      {/* <SignIn /> */}
    </div>
  );
}

export default App;
