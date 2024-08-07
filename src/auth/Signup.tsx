import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { toast } from "react-toastify";
import useAuth from "./../hooks/useAuth";
import { ErrorMessage } from "../interface";

function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const isErrorMessage = (error: unknown): error is ErrorMessage => {
    return typeof error === "object" && error !== null && "message" in error;
  };
  const handleSignup = async () => {
    const name = nameRef?.current?.value;
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;
    const confirmPassword = confirmPasswordRef?.current?.value;

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      await signup(name, email, password);
      toast.success("Signed up successfully!");
      navigate("/");
    } catch (error) {
      if (isErrorMessage(error)) {
        console.error("Error signing up: ", error.message);
        toast.error(error?.message);
      } else {
        console.error("Unknown error signing up");
      }
    }
  };

  return (
    <form className="welcome__form">
      <Logo title1="Sign Up" title2="Form" />

      <label id="welcome__label" htmlFor="input_name">
        <input
          autoComplete="off"
          ref={nameRef}
          type="text"
          id="input_name"
          name="input_name"
          placeholder="insert your name"
        />
        <span />
      </label>
      <label id="welcome__label" htmlFor="input_email">
        <input
          autoComplete="off"
          ref={emailRef}
          type="text"
          id="input_email"
          name="input_email"
          placeholder="Enter your email"
        />{" "}
        <span />
      </label>
      <label id="welcome__label" htmlFor="input_password">
        <input
          autoComplete="off"
          ref={passwordRef}
          type="password"
          id="input_password"
          name="input_password"
          placeholder="Enter your password"
        />{" "}
        <span />
      </label>
      <label id="welcome__label" htmlFor="input_confirmPassword">
        <input
          autoComplete="off"
          ref={confirmPasswordRef}
          type="password"
          id="input_confirmPassword"
          name="input_confirmPassword"
          placeholder="Confirm your password"
        />{" "}
        <span />
      </label>
      <button type="button" onClick={handleSignup}>
        Sign Up
      </button>
      <div className="welcome__switch">
        Already have an account? <Link to="/welcome/login">Login</Link>
      </div>
    </form>
  );
}

export default Signup;
