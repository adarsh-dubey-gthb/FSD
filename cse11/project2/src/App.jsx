import './App.css';

export default function App() {
  return (
    <div className="container">
      <h1>select gender</h1>
      
      <form>
        <label>
          <input type="radio" name="color" value="red" />
          male 
        </label>
        <br />
        
        <label>
          <input type="radio" name="color" value="blue" />
          female
        </label>
        <br />
        
        <label>
          <input type="radio" name="color" value="green" />
          gmail
        </label>
        <br />
        
        <label>
          <input type="radio" name="color" value="yellow" />
          other
        </label>
        <br /><br />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
