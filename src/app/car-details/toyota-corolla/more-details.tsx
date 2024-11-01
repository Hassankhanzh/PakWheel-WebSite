// Path: D:\Governor NextJs\Project\cars-get-wings\src\app\car-details\honda-city\more-details.tsx

import React from 'react';

const MoreDetailsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 text-center underline">
        More Details about Honda City 2024
      </h1>

      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Vehicle Specifications</h2>
        <ul className="list-disc pl-6">
          <li><strong>Fuel Economy:</strong> 13 Km/L</li>
          <li><strong>Engine:</strong> 1.5L Inline-4</li>
          <li><strong>Transmission:</strong> CVT Automatic</li>
          <li><strong>Seating Capacity:</strong> 5</li>
          <li><strong>Safety Features:</strong> Airbags, ABS, Traction Control</li>
          <li><strong>Entertainment:</strong> Touchscreen, Bluetooth, USB</li>
        </ul>
      </div>

      <div className="mt-6 text-lg">
        <p>The Honda City 2024 is known for its reliability, fuel efficiency, and advanced safety features. It’s a perfect choice for urban drivers seeking comfort and performance.</p>
      </div>

      <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 text-lg mt-6">
        Book Now
      </button>
    </div>
  );
};

export default MoreDetailsPage;
