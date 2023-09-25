import Debounce from "./hooks/useDebounce/Debounce";
import Fetch from "./hooks/useFetch/Fetch";

function App() {
  return (
    <div style={{ padding: "15px", display: "flex", flexWrap: "wrap" }}>
      <Debounce />
      <Fetch />
    </div>
  );
}

export default App;
