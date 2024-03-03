import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password != formData.confirmPassword) {
      toast.error("Password do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    navigate("/dashboard");
  }
  return (
    <div>
      <div className=" flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button
          onClick={() => setAccountType("student")}
          className={`${
            accountType === "student"
              ? " bg-richblack-900 text-richblack-5"
              : " bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
        >
          Student
        </button>
        <button
          onClick={() => setAccountType("instructor")}
          className={`${
            accountType === "instructor"
              ? " bg-richblack-900 text-richblack-5"
              : " bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
        >
          Instructor
        </button>
      </div>
      <form onSubmit={submitHandler} className=" flex flex-col gap-4">
        <div className=" flex gap-x-4">
          <label className=" w-full">
            <p className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name <sup className=" text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
              className=" bg-richblack-800 rounded-lg text-richblack-5 w-full p-[12px]"
            />
          </label>

          <label className=" w-full">
            <p className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name <sup className=" text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
              className=" bg-richblack-800 rounded-lg text-richblack-5 w-full p-[12px]"
            />
          </label>
        </div>

        <label>
          <p className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address<sup className=" text-pink-200">*</sup>
          </p>
          <input
            required
            type="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email Address"
            name="email"
            className=" bg-richblack-800 rounded-lg text-richblack-5 w-full p-[12px]"
          />
        </label>
        <div className=" flex gap-x-4">
          <label className=" w-full relative">
            <p className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Create Password<sup className=" text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter password"
              name="password"
              className=" bg-richblack-800 rounded-lg text-richblack-5 w-full p-[12px]"
            />

            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className=" absolute right-3 top-[38px] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#afb2bf" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#afb2bf" />
              )}
            </span>
          </label>

          <label className=" w-full relative">
            <p className=" text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password<sup className=" text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Enter password"
              name="confirmPassword"
              className=" bg-richblack-800 rounded-lg text-richblack-5 w-full p-[12px]"
            />

            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className=" absolute right-3 top-[38px] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#afb2bf" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#afb2bf" />
              )}
            </span>
          </label>
        </div>
        <button className=" w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
