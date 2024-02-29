import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <div>
      <form>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          onChange={changeHandler}
        />
      </form>
    </div>
  );
}

export default App;
