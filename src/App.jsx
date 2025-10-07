import { useState } from "react";
import "./App.css";
import { Card, Button, Badge, Alert, Input, Loader, Modal, Select } from "./components/ui";


function App() {

  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState('');

  const destinationOptions = [
    { value: 'mumbai', label: 'Mumbai' },
    { value: 'delhi', label: 'Delhi' },
    { value: 'bangalore', label: 'Bangalore' },
    { value: 'goa', label: 'Goa' }
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-outfit font-bold text-gray-800 mb-2">
            UI Components Library
          </h1>
          <p className="text-gray-600 font-inter">
            Essential components for booking reservation website
          </p>
        </div>

        {/* Cards Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-poppins font-bold text-gray-800">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="default">
              <h3 className="font-poppins font-bold text-lg mb-2">Default Card</h3>
              <p className="font-inter text-gray-600 text-sm">Simple card with border</p>
            </Card>
            <Card variant="elevated">
              <h3 className="font-poppins font-bold text-lg mb-2">Elevated Card</h3>
              <p className="font-inter text-gray-600 text-sm">Card with shadow</p>
            </Card>
            <Card variant="outlined">
              <h3 className="font-poppins font-bold text-lg mb-2">Outlined Card</h3>
              <p className="font-inter text-gray-600 text-sm">Card with colored border</p>
            </Card>
            <Card variant="gradient" hover>
              <h3 className="font-poppins font-bold text-lg mb-2">Hover Card</h3>
              <p className="font-inter text-gray-600 text-sm">Hover for effect</p>
            </Card>
          </div>
        </section>

        {/* Input Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-poppins font-bold text-gray-800">Input Fields</h2>
          <Card variant="elevated">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input 
                label="Full Name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
              />
              <Input 
                label="Email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
              />
              <Input 
                label="Check-in Date"
                type="date"
              />
              <Select 
                label="Destination"
                options={destinationOptions}
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Choose destination"
                required
              />
            </div>
          </Card>
        </section>

        {/* Badges Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-poppins font-bold text-gray-800">Badges</h2>
          <Card variant="elevated">
            <div className="flex flex-wrap gap-3">
              <Badge variant="default">Default</Badge>
              <Badge size="sm" variant="primary">Available</Badge>
              <Badge variant="success">Confirmed</Badge>
              <Badge variant="warning">Pending</Badge>
              <Badge variant="danger">Cancelled</Badge>
              <Badge size="sm" variant="info">New</Badge>
              <Badge size="lg" variant="primary">Large Badge</Badge>
            </div>
          </Card>
        </section>

        {/* Alerts Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-poppins font-bold text-gray-800">Alerts</h2>
          <div className="space-y-4">
            <Alert 
              type="info" 
              title="Information"
              message="Your booking details have been saved successfully."
            />
            <Alert 
              type="success" 
              title="Success!"
              message="Payment completed! Confirmation sent to your email."
            />
            <Alert 
              type="warning" 
              title="Warning"
              message="Limited rooms available for your selected dates."
            />
            <Alert 
              type="error" 
              title="Error"
              message="Payment failed. Please try again or use different payment method."
            />
          </div>
        </section>

        {/* Modal Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-poppins font-bold text-gray-800">Modal</h2>
          <Card variant="elevated">
            <button 
              onClick={() => setModalOpen(true)}
              className="px-6 py-3 bg-blue-600 text-white font-poppins font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Open Booking Modal
            </button>
          </Card>

          <Modal 
            isOpen={modalOpen} 
            onClose={() => setModalOpen(false)}
            title="Complete Your Booking"
            size="sm"
            footer={
              <>
                <button 
                  onClick={() => setModalOpen(false)}
                  className="px-6 py-2.5 bg-gray-200 text-gray-800 font-poppins font-semibold rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => setModalOpen(false)}
                  className="px-6 py-2.5 bg-blue-600 text-white font-poppins font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Confirm Booking
                </button>
              </>
            }
          >
            <div className="space-y-4">
              <Alert 
                type="info" 
                message="Please review your booking details before confirming."
              />
              <div className="bg-gray-50 p-4 rounded-lg space-y-2 font-inter">
                <div className="flex justify-between">
                  <span className="text-gray-600">Hotel:</span>
                  <span className="font-semibold">Grand Luxury Resort</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Check-in:</span>
                  <span className="font-semibold">Dec 20, 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Check-out:</span>
                  <span className="font-semibold">Dec 25, 2024</span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span className="text-gray-600">Total:</span>
                  <span className="font-bold text-blue-600 text-lg">₹29,995</span>
                </div>
              </div>
            </div>
          </Modal>
        </section>

        {/* Loader Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-poppins font-bold text-gray-800">Loaders</h2>
          <Card variant="elevated">
            <div className="flex flex-wrap gap-12 justify-around items-center">
              <Loader size="sm" text="Small" />
              <Loader size="md" text="Medium" />
              <Loader size="lg" text="Large" />
              <Loader size="xl" text="Processing..." />
            </div>
          </Card>
        </section>

        {/* Real World Example */}
        <section className="space-y-6">
          <h2 className="text-2xl font-poppins font-bold text-gray-800">Hotel Booking Card Example</h2>
          <Card variant="elevated" hover>
            <div className="flex gap-4">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-white font-outfit text-xl">
                Hotel Image
              </div>
              <div className="flex-1 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-poppins font-bold text-gray-800">Taj Palace Hotel</h3>
                    <p className="text-gray-600 font-inter">Mumbai, Maharashtra</p>
                  </div>
                  <Badge variant="success" size="lg">Available</Badge>
                </div>
                <div className="flex gap-2">
                  <Badge variant="primary">Free WiFi</Badge>
                  <Badge variant="primary">Pool</Badge>
                  <Badge variant="primary">Spa</Badge>
                </div>
                <p className="font-inter text-gray-600">
                  Experience luxury at its finest with stunning views and world-class amenities.
                </p>
                <div className="flex items-end justify-between pt-4">
                  <div>
                    <p className="text-sm text-gray-500 font-inter">Starting from</p>
                    <p className="text-3xl font-poppins font-bold text-blue-600">₹8,999</p>
                    <p className="text-sm text-gray-500 font-inter">per night</p>
                  </div>
                  <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-outfit font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </section>

      </div>
    </div>
  );
}

export default App;
