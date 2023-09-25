import React, { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

function Debounce() {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    console.log("debouncedValue", debouncedValue);
  }, [debouncedValue]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div style={{ padding: "15px", backgroundColor:"lightcoral" }}>
      <input
        aria-label="DEBOUNCE HOOK"
        placeholder="DEBOUNCE HOOK"
        onChange={handleOnChange}
      />
    </div>
  );
}

export default Debounce;
