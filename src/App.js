import './App.css';
import FullName from './Component/profile/FullName'; 
import Address from './Component/profile/Address';
import ProfilePhoto from './Component/profile/ProfilePhoto';
import photo from './Component/profile/myphoto.jpg';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={photo} className="marwa" alt="logo" />
        <FullName></FullName>
        <Address></Address>
        <ProfilePhoto></ProfilePhoto> 
      </header>
    </div>
  );
}

export default App;
