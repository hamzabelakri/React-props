import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile'
import image from './John Wick.jpg';
function App() {
  const handleName = (name) => alert(name);


  return (
    <div style={{border:"solid 1px black",maxWidth:"100vw", textAlign: "center" }}>

      <Profile 
      fullName="Johw Wick" 
      Bio= "A legenday assassin" 
      profession= "Hitman" 
      handleName={handleName}/>
       
      <img src= {image} />
     
      
    </div>
  );
}

export default App;
