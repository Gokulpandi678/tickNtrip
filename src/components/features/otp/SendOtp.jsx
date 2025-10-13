import React, { useState } from "react";
import { Alert, Button, Card, Input, Modal } from "../../ui";
import { Mail } from "lucide-react";

export const SendOtp = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleClose = () => {
    if (email.trim().length === 0) {
      setError("Please enter your email");
      return;
    } else if(!email.includes("@") || !email.includes(".")){
      setError("Please enter a valid email");
      return;
    }
    onClose(email);
  };

  return (
    <Card>
      <div className="space-y-3">
        <div>
        <h3 className="header-text">Enter your email</h3>
        {/* <h3 className="text-sm">
          We will send you an OTP to verify your email
       </h3> */}
        </div>
        {error !== "" && <Alert type="error" message={error} />}
        <Input
          type="text"
          icon={<Mail size={20} />}
          placeholder="sample@xyz.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button fullWidth={true} onClick={handleClose}>
          Send OTP
        </Button>
      </div>
    </Card>
  );
};
