import React, { useState } from "react";
import { LockKeyhole, Mail, User } from "lucide-react";
  import { Alert, Button, Card, Input } from "../../ui";
import { useNavigate } from "react-router-dom";
import { VerifyOtp } from "../otp/VerifyOtp";
import { OAuth } from "./OAuth";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showVerifyOtpModal, setShowVerifyOtpModal] = useState(false);
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const formFields = [
    {
      label: "Email",
      placeholder: "Enter your email",
      required: true,
      icon: <Mail size={20} />,
      value: formData.email,
      onChange: (e) => {
        setFormdata({ ...formData, email: e.target.value });
      },
    },
    {
      label: "Password",
      placeholder: "Enter your password",
      required: true,
      icon: <LockKeyhole size={20} />,
      type: "password",
      value: formData.password,
      onChange: (e) => {
        setFormdata({ ...formData, password: e.target.value });
      },
    },
    {
      label: "Confirm Password",
      placeholder: "Re-enter password",
      required: true,
      icon: <LockKeyhole size={20} />,
      type: "password",
      value: formData.confirmPassword,
      onChange: (e) => {
        setFormdata({ ...formData, confirmPassword: e.target.value });
      },
    },
    {
      label: "Username",
      placeholder: "Enter your name",
      required: false,
      icon: <User size={20} />,
      value: formData.name,
      onChange: (e) => {
        setFormdata({ ...formData, name: e.target.value });
      },
    },
  ];

  const handleLogin = () => {
    if (
      formData.email.trim().length <= 0 ||
      formData.password.trim().length <= 0 ||
      formData.confirmPassword.trim().length <= 0
    ) {
        setError("Please fill all the fields");
        return;

    } else if (formData.password.trim().length < 8) {
        setError("Password length should be greater than 8");
        return;

    } else if (formData.password !== formData.confirmPassword) {
        setError("Confirm password does not match");
        return;

    } else if(!formData.email.includes("@") || !formData.email.includes(".")){
      setError("Please enter a valid email");
      return;

    } else {
        setShowVerifyOtpModal(true);
    }
  };

  if(showVerifyOtpModal){
    return (
      <VerifyOtp
        mail={formData.email}
        isOpen={true}
        onClose={() => setShowVerifyOtpModal(false)}
      />
    );
  }

  return (
    <Card>
      <div className="space-y-5 w-100">
        <h2 className="header-text text-center">
          Get Started
        </h2>

        {error != "" ? <Alert type="error" message={error} /> : <></>}

        <form action="" className="space-y-3">
          {formFields.map((item, i) => (
            <Input
              key={i}
              placeholder={item.placeholder}
              label={item.label}
              type={item.type || "text"}
              required={item.required}
              onChange={item.onChange}
              value={item.value}
              icon={item.icon}
            />
          ))}
        </form>

        <p
          className="text-center font-poppins text-md"
          onClick={() => navigate("/login")}
        >
          Already an account?
          <span className="text-red-500 cursor-pointer hover:text-red-800">
            {" "}
            Login
          </span>
        </p>

        <Button
          size="lg"
          fullWidth={true}
          onClick={handleLogin}
        >
          Create Account
        </Button>

        <div className="font-poppins flex items-center space-x-5">
          <hr className="flex-1 text-gray-600" />
          <p>or continue with</p>
          <hr className="flex-1 text-gray-600" />
        </div>

       <OAuth />
      </div>
    </Card>
  );
};
