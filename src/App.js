import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <h1>Calculate alcohol blood level</h1>
    
    <label for="weight">Weight:</label>
    <input type="number" id="weight"><br /><br /></input>

    <label for="bottles">Bottles:</label>
    <input type="number" id="bottles"><br /><br /></input>

    <label for="time">Time:</label>
    <input type="number" id="time"><br /><br /></input>
    <div>
        <label className="gender-selection" for="male">Male</label>
        <input type="radio" id="male" name="gender" value="male"></input>
        
        <label className="gender-selection" for="female">Female</label>
        <input type="radio" id="female" name="gender" value="female"></input>
    </div><br /><br />


    <button onclick="calculate()">Calculate</button><br><br></br></br>

    <div id="result"></div>
</div>
  );
}

export default App;
