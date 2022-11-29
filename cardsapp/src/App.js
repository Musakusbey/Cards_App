import './App.css';
import Card from './Card';
import  './cards.css'; 
 
function App() {
  return (
    
    <div className="wrapper"> 
    <center> 
       <Card
        img="Tarkan.jpg"
        title="TARKAN"
        description="Türk Pop Sanatçısı" 
       />
       <Card 
        img="oguz-1.jpg"
        title="Murat Boz"
        description="Türk Pop Sanatçısı"
       />  
        <Card
        img="murat boz.jpg"
        title="Oğuzhan Koç"
        description="Türk Pop Sanatçısı"
       />  
       </center>
    </div>
  );
}

export default App;
 