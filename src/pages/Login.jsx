import React, { useState } from "react";
import { LockKeyhole, Mail } from "lucide-react";
import AuthForm from "../components/layout/AuthForm";
import { Alert, Button, Card, Input } from "../components/ui";
import { AppleIcon, FacebookIcon, GoogleIcon } from "../utils/socialIcons";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formData, setFormdata] = useState({
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
  ];

	const specialTags = [
		{
			count:"2000",
			label:"Hotels"
		},{
			count:"5000",
			label:"Movies"
		},{
			count:"1000",
			label:"Routes"
		}
	]

  const handleLogin = () => {
    if (formData.email == "" || formData.password == "") {
      setError("Please fill all the fields");
      return;
    }
  };

  return (
    <div className="flex items-center min-h-screen justify-center">
      <div className="flex items-center p-24 space-x-15 bg-neutral-300 rounded-2xl">
        <div className="space-y-3 w-100">
          <p className="font-poppins text-4xl font-bold">
            Your Journey Starts Here
          </p>
          <p className="font-outfit text-xl">
            Book hotels, bus tickets, and movie shows all in one place.
            Experience seamless booking with exclusive deals and rewards.
          </p>
					<div className="font-inter flex justify-between">
						{
							specialTags.map((tag, i) => (
								<Card key={i} bg="bg-neutral-200">
									<p className="text-2xl font-bold">{tag.count}</p>
									<p className="text-md">{tag.label}</p>
								</Card>
							))
						}
					</div>
        </div>

        <Card bg="bg-gray-50">
          <div className="space-y-5 w-100">
            <h2 className="font-outfit font-bold text-2xl text-center">
              Welcome Back
            </h2>

            {error != "" ? <Alert type="error" message={error} /> : <></>}

            <AuthForm data={formFields} />

            <div className="text-sm font-poppins flex justify-end">
              {/* <Input type="checkbox" label="Remember me" /> */}
              <span className="text-blue-500 cursor-pointer hover:text-blue-800">
                Forgot password &#63;
              </span>
            </div>

            <p
              className="text-center font-poppins text-md"
              onClick={() => navigate("/register")}
            >
              Don't have an account?
              <span className="text-red-500 cursor-pointer hover:text-red-800">
                {" "}
                Signup
              </span>
            </p>

            <Button
              variant="secondary"
              size="lg"
              fullWidth={true}
              onClick={handleLogin}
            >
              Login
            </Button>

            <div className="font-poppins flex items-center space-x-5">
              <hr className="flex-1 text-gray-600" />
              <p>or continue with</p>
              <hr className="flex-1 text-gray-600" />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <Button variant="secondary">
                <FacebookIcon />
              </Button>
              <Button variant="secondary">
                <GoogleIcon />
              </Button>
              <Button variant="secondary">
                <AppleIcon />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
