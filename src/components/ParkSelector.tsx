import React, { useState } from "react";
import "./ParkSelector.css";

interface Park {
  name: string;
  image: string;
  heading: string;
  features: string[];
}

const parks: Park[] = [
  {
    name: "Opera Park",
    image: "/images/opera-park.jpg",
    heading: "Opera Park",
    features: ["Entrance Plaza Selfie Corner", "Walking Track", "Cricket Nets Yoga Lawn","Outdoor Gym" , "Pavilion","Multipurpose Court","Stage","Plaza","Amphitheater","Lawn Twister","Kids Play Area","Frangipani Court","Toddlers Sand Pit","Elders Seating Area"],
  },
  {
    name: "Symphony Park",
    image: "/images/symphony-park.jpg",
    heading: "Symphony Park",
    features: ["Aroma Garden", "Multipurpose Court", "Seating Area","Butterfly Garden","Jogging Track","Party Lawn","Camp Fire","Forest Planting","Seating Court","Kids Play Area","Kids Maze","Sculpture Court","Frangipani Court"],
  },
  {
    name: "Serenede Park",
    image: "/images/serenede-park.jpg",
    heading: "Serenade Park",
    features: ["Herb Garden", "Pebble Sculpture Court", "Hammock Court","Multipurpose Court","Pavilion","Party Lawn","Story Telling Circle","Pergola and Deck","Chalk Wall","Kids Play Area","Toddlers Sand Pit","Seating Area"],
  },
  {
    name: "Concerto Park",
    image: "/images/concerto-park.jpg",
    heading: "Concerto Park",
    features: ["Miyawaki Forest", "Walkaway"],
  },
];

const ParkSelector: React.FC = () => {
  const [selectedPark, setSelectedPark] = useState<Park>(parks[0]);

  const handleSelect = (park: Park) => {
    setSelectedPark(park);
  };

  return (
    <div className="main-wrapper" id = "amenities">
      <div className="left-menu">
        {parks.map((park, index) => (
          <button
            key={index}
            className={`menu-item ${selectedPark.name === park.name ? "active" : ""}`}
            onClick={() => handleSelect(park)}
          >
            {park.name}
          </button>
        ))}
      </div>

      <div
        className="right-content"
        style={{
          backgroundImage: `url(${selectedPark.image})`,
        }}
      >
        <div className="overlay-content">
          <h2>{selectedPark.heading}</h2>
          <ul>
            {selectedPark.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ParkSelector;
