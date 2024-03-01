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
    pushNotification: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Printing Form Data: ");
    console.log(formData);
  }
  return (
    <div className="flex flex-col items-center mt-2">
      <form onSubmit={submitHandler}>
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
          <option value="india">India</option>
          <option value="united states">United States</option>
          <option value="canada">Canada</option>
          <option value="mexico">Mexico</option>
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
        <br />
        <br />
        <fieldset>
          <legend>By Email</legend>
          <div className="flex">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              checked={formData.comments}
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
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when a candidate applies for a job.</p>
            </div>
          </div>
          <div className="flex">
            <input
              id="offers"
              name="offers"
              type="checkbox"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer.</p>
            </div>
          </div>
        </fieldset>
        <br />
        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone.</p>
          <input
            id="pushEverything"
            name="pushNotification"
            type="radio"
            onChange={changeHandler}
            value="Everything"
          />
          <label htmlFor="pushEverything">Everything</label>
          <br />

          <input
            id="pushEmail"
            name="pushNotification"
            type="radio"
            onChange={changeHandler}
            value="Same as Email"
          />
          <label htmlFor="pushEmail">Same as Email</label>
          <br />

          <input
            id="pushNothing"
            name="pushNotification"
            type="radio"
            onChange={changeHandler}
            value="No Push Notifications"
          />
          <label htmlFor="pushNothing">No Push Notifications</label>
        </fieldset>
        <button className=" bg-blue-500 text-white font-bold rounded py-2 px-4">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
