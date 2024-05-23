import "./App.css";
import { TableBody, TableHead } from "./components";

function App() {
  return (
    <div className="App">
      <table className="border w-full whitespace-nowrap">
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
}

export default App;
