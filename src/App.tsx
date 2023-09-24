import { useState, useEffect } from "react";
import { useDebounce } from "./hooks/useDebounce/useDebounce";

function App() {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    console.log("debouncedValue", debouncedValue);
  }, [debouncedValue]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input aria-label="DEBOUNCE HOOK" placeholder="DEBOUNCE HOOK" onChange={handleOnChange} />
    </div>
  );
}

export default App;
