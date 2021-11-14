import './App.css';
import { Header } from './partials/Header';
import { Hero } from './partials/Hero';
import { Main } from './partials/Main';
import { CallForAction } from './partials/CallForAction';
import { Footer } from './partials/Footer';
import { Timeline } from './partials/Timeline';
import { FAQ } from './partials/FAQ';
import { Subscribe } from './partials/Subscribe';

function App() {
  return (
    <div className="leading-normal tracking-normal text-white gradient body">
      <Header/>
      <Hero/>
      <Main/>
      <Timeline/>
      <Subscribe/>
      <FAQ/>
      <CallForAction/>
      <Footer/>
    </div>
  );
}

export default App;