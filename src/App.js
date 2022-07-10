import "./App.css";
import Card from "./components/Card";
import { data } from "./data";

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <img src='https://s3.india.com/cricket/wp-content/themes/cricscorecard/images/menubg.jpg?20160223'></img>
        <h2>Get the Details of Previous Matches</h2>
      </div>
      <div className='cards-wrapper'>
        {data.map((matchData) => (
          <div className='card'>{<Card matchData={matchData} />}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
