import React, { useState, useRef } from "react";
import { Alert, Button, Card } from "../../ui";

export const VerifyOtp = ({ isOpen, onClose, onResend, mail }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const inputRefs = useRef([]);

  if (!isOpen) return null;

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);

    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = pastedData.split("");
    setOtp([...newOtp, ...Array(6 - newOtp.length).fill("")]);

    const focusIndex = Math.min(pastedData.length, 5);
    inputRefs.current[focusIndex]?.focus();
  };

  const handleSubmit = () => {
    const otpValue = otp.join("");
    if (otpValue.length === 6) {
      onClose();
    } else {
      setError("Please enter complete OTP");
    }
  };

  const formattedEmail = () => {
    const fMail = mail.split("@");
    return (
      fMail[0].substring(0, 3) +
      "***" +
      "@" +
      fMail[1]
    );
  };

  return (
    <Card>
      <div className="space-y-5">
        <h2 className="header-text text-center">
          Enter OTP
        </h2>

        {error != "" ? (
          <Alert type="error" title={error} />
        ) : (
          <Alert
            type="info"
            message={formattedEmail()}
            title="Otp is sent to the email"
          />
        )}

        {onResend && (
          <p
            className="text-end font-poppins text-blue-700 cursor-pointer hover:text-blue-400 "
            onClick={() => onResend()}
          >
            Resend OTP
          </p>
        )}

        <div className="flex gap-3 justify-center">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : undefined}
              aria-label={`OTP digit ${index + 1}`}
              className="w-14 h-14 text-center text-2xl font-semibold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-all"
            />
          ))}
        </div>

        <Button fullWidth={true} onClick={handleSubmit}>
          Verify OTP
        </Button>
      </div>
    </Card>
  );
};
