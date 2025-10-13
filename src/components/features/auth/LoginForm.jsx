import React, { useState } from "react";
import { LockKeyhole, Mail } from "lucide-react";
import { Alert, Button, Card, Input } from "../../ui";
import { useNavigate } from "react-router-dom";
import { SendOtp } from "../otp/SendOtp";
import { VerifyOtp } from "../otp/VerifyOtp";
import { OAuth } from "./OAuth";

export const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isSendOtpModal,setIsSendOtpModal] = useState(false);
  const [isVerifyOtpModal, setIsVerifyOtpModal] = useState(false);
  const [isResetPassword, setIsResetPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const formFields = [
    {
      label: "Email",
      placeholder: "Enter your email",
      required: true,
      icon: <Mail size={20} />,
      value: formData.email,
      onChange: (e) => setFormData({ ...formData, email: e.target.value }),
    },
    {
      label: "Password",
      placeholder: "Enter your password",
      required: true,
      icon: <LockKeyhole size={20} />,
      type: "password",
      value: formData.password,
      onChange: (e) => setFormData({ ...formData, password: e.target.value }),
    },
  ];

  const handleLogin = () => {
    if (
      formData.email.trim().length <= 0 ||
      formData.password.trim().length <= 0
    ) {
      setError("Please fill all the fields");
      return;
    }
  };

  const handleSendOtpModalClose = (email) => {
    setFormData({...formData, email: email})
    setIsSendOtpModal(!isSendOtpModal);
    setIsVerifyOtpModal(!isVerifyOtpModal);
  }
  
  const handleVerifyOtpModalClose = () => {
    setIsVerifyOtpModal(!isVerifyOtpModal);
    setIsResetPassword(!isResetPassword);
  }

  if(isSendOtpModal){
    return <SendOtp isOpen={true} onClose={handleSendOtpModalClose} />
  }

  if(isVerifyOtpModal){
    return <VerifyOtp isOpen={true} onClose={handleVerifyOtpModalClose} onResend={handleSendOtpModalClose} mail={formData.email}/>
  }

  return (
    <Card>
      <div className="space-y-5 w-full">
        <h2 className="header-text text-center">
          Welcome Back
        </h2>

        {error && <Alert type="error" message={error} />}

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
              // error={error}  TODO
            />
          ))}
        </form>

        <div className="text-xs md:text-sm font-poppins flex justify-end">
          <span 
            className="text-blue-500 cursor-pointer hover:text-blue-800"
            onClick={() => setIsSendOtpModal(true)}  
          >
            Forgot password?
          </span>
        </div>

        <p
          className="text-center font-poppins text-sm md:text-base"
          onClick={() => navigate("/register")}
        >
          Don't have an account?
          <span className="text-red-500 cursor-pointer hover:text-red-800">
            {" "}
            Signup
          </span>
        </p>

        <Button
          size="lg"
          fullWidth={true}
          onClick={handleLogin}
        >
          Login
        </Button>

        <div className="font-poppins flex items-center gap-2 text-sm md:text-base">
          <hr className="flex-1 text-gray-600" />
          <p>or continue with</p>
          <hr className="flex-1 text-gray-600" />
        </div>

        <OAuth />
      </div>
    </Card>
  );
};
