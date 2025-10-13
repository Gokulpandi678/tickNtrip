import { RegisterForm } from "../components/features";
import { Card } from "../components/ui";


export const Register = () => {
  const specialTags = [
    {
      count: "2000",
      label: "Hotels",
    },
    {
      count: "5000",
      label: "Movies",
    },
    {
      count: "1000",
      label: "Routes",
    },
  ];

  return (
    <div className="flex items-center min-h-screen justify-center">
      <div className="flex items-center p-10 space-x-15 bg-neutral-300 rounded-2xl">
        <div className="space-y-3 w-100">
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

        <RegisterForm />
      </div>
    </div>
  );
};
