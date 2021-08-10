import './App.css';
import Routes from './routes/Routes';
import { UserProvider } from './context/user';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Routes />
      </UserProvider>
    </div>
  );
}

export default App;
