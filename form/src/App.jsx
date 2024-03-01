import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  return (
    <div className="flex flex-col items-center mt-2">
      <form>
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          onChange={changeHandler}
          placeholder="Kabir"
          className=" border-2"
        />

        <br />
        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          onChange={changeHandler}
          placeholder="Ahmed"
          className=" border-2"
        />

        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="kabir.cse.bd@gmail.com"
          className=" border-2"
        />

        <br />
        <label htmlFor="country">Country</label>
        <br />
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="border-2"
        >
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

        <br />
        <label htmlFor="streetAddress">Street Address</label>
        <br />
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          value={formData.streetAddress}
          onChange={changeHandler}
          placeholder="B-25C"
          className=" border-2"
        />

        <br />
        <label htmlFor="city">City</label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          value={formData.city}
          onChange={changeHandler}
          placeholder="Mumbai"
          className=" border-2"
        />

        <br />
        <label htmlFor="state">State / Province</label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          value={formData.state}
          onChange={changeHandler}
          placeholder="Bihar"
          className=" border-2"
        />

        <br />
        <label htmlFor="postalCode">Zip / Postal Code</label>
        <br />
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          value={formData.postalCode}
          onChange={changeHandler}
          placeholder="110077"
          className=" border-2"
        />

        <fieldset>
          <legend>By Email</legend>
          <div className="flex">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              value={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>
          <div className="flex">
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              value={formData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidates">Comments</label>
              <p>Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>
          <div className="flex">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              value={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">Comments</label>
              <p>Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
