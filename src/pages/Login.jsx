import React from "react";
import { Card } from "../components/ui";
import { LoginForm } from "../components/features";

export const Login = () => {
  const specialTags = [
    { count: "2000", label: "Hotels" },
    { count: "5000", label: "Movies" },
    { count: "1000", label: "Routes" },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex items-center lg:p-10 space-x-15 lg:bg-neutral-300 rounded-2xl flex-wrap justify-center drop-shadow-neutral-400 drop-shadow-lg">
        <div className="space-y-3 w-100 hidden lg:block">
          <p className="font-poppins text-4xl font-bold">
            Your Journey Starts Here
          </p>
          <p className="font-outfit text-xl">
            Book hotels, bus tickets, and movie shows all in one place.
            Experience seamless booking with exclusive deals and rewards.
          </p>
          <div className="font-inter flex justify-between">
            {specialTags.map((tag, i) => (
              <Card key={i} bg="bg-neutral-200">
                <p className="text-2xl font-bold">{tag.count}</p>
                <p className="text-md">{tag.label}</p>
              </Card>
            ))}
          </div>
        </div>

        <LoginForm />
      </div>
    </div>
  );
};
