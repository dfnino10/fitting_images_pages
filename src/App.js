import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import UserGreeting from './components/UserGreeting/UserGreeting';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <UserGreeting />
      <ImageLinkForm />
      {/*<OutputSize /> */}
    </div>
  );
}

export default App;
