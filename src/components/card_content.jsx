import styled, { keyframes } from 'styled-components';

const Card = (props) => {
  return (
    <StyledWrapper>
      <div className="cardContainer w-100">
        <div className="card">
          <p className="city">{props.city}</p>
          <p className="weather h1">PARCIALMENTE NUBLADO</p> {/* Changed to Spanish for consistency */}
          {/* Consider replacing this SVG with a dynamic one based on props.weatherCondition for more realism */}
          <p className="temp">{props.temperature}°C</p>
          <div className="minmaxContainer mt-0">
            <div className="min">
              <p className="minHeading">Min</p>
              <p className="minTemp">{props.temperatureMin}°C</p>
            </div>
            <div className="max">
              <p className="maxHeading">Max</p>
              <p className="maxTemp">{props.temperatureMax}°C</p>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

// Keyframe animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

const StyledWrapper = styled.div`
  .cardContainer {
    width: fit-content;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1000px; /* For 3D transformations on hover */
    animation: ${fadeIn} 0.8s ease-out; /* Add fade-in animation to container */
  }

  .card {
    position: relative;
    width: 500px; /* Slightly increased width */
    height: 500px; /* Slightly increased height */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 25px 15px; /* Increased padding */
    border-radius: 15px; /* More rounded corners */
    backdrop-filter: blur(40px); /* Increased blur for stronger glass effect */
    background-color: rgba(255, 255, 255, 0.15); /* Lighter, more transparent background */
    border: 1px solid rgba(255, 255, 255, 0.2); /* Stronger border for better definition */
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2); /* Enhanced shadow for depth */
    transition: all 0.3s ease-in-out; /* Smooth transition for hover effects */
    cursor: pointer;
    overflow: hidden; /* Ensures no content spills out with inner effects */

    &:hover {
      transform: translateY(-5px) scale(1.02); /* Lift and slightly scale on hover */
      box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.3); /* Darker shadow on hover */
    }
  }

  .city {
    font-weight: 700;
    font-size: 1em; /* Slightly larger font */
    letter-spacing: 1.5px; /* Increased letter spacing */
    color: white;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3); /* Add subtle text shadow for readability */
    margin-bottom: 5px; /* Add some margin */
  }

  .weather {
    font-weight: 500;
    font-size: 0.8em; /* Slightly larger font */
    letter-spacing: 1.5px;
    color: rgba(255, 255, 255, 0.8); /* Lighter white for secondary text */
    text-transform: uppercase; /* Make it uppercase for emphasis */
    margin-bottom: 10px;
  }

  .weather-icon { /* New class for the SVG icon */
    width: 120px;
    height: 120px;
    margin: 10px 0; /* Add margin around the icon */
    animation: ${float} 3s ease-in-out infinite; /* Gentle floating animation */
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2)); /* Shadow for the icon */
  }

  .temp {
    font-size: 2.5em; /* Larger temperature text */
    font-weight: 600;
    color: white;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.4); /* Stronger text shadow for temperature */
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .minmaxContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto; /* Pushes min/max to the bottom */
  }

  .min,
  .max {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center align min/max values */
    justify-content: center;
    padding: 0px 10px;
    gap: 2px; /* Reduced gap */
  }

  .max {
    border-left: 1px solid rgba(255, 255, 255, 0.3); /* Softer border for separation */
  }

  .maxHeading,
  .minHeading {
    font-size: 0.75em; /* Slightly larger heading */
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
    text-transform: uppercase;
  }

  .maxTemp,
  .minTemp {
    font-size: 0.8em; /* Larger temp values */
    font-weight: 500;
    color: rgba(255, 255, 255, 0.7);
  }

  /* Background blob animation */
  .cardContainer::before {
    width: 150px; /* Larger blob */
    height: 150px; /* Larger blob */
    content: "";
    position: absolute;
    background: linear-gradient(135deg, rgba(144, 161, 255, 0.8), rgba(0, 200, 255, 0.8)); /* Gradient for the blob */
    z-index: -1;
    border-radius: 50%;
    filter: blur(80px); /* More blur for a softer glow */
    left: 80px; /* Adjusted position */
    top: 30px; /* Adjusted position */
    transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); /* Smoother, more natural transition */
  }

  /* Second background blob */
  .cardContainer::after {
    width: 100px;
    height: 100px;
    content: "";
    position: absolute;
    background: linear-gradient(45deg, rgba(255, 180, 0, 0.8), rgba(255, 0, 100, 0.8)); /* Another gradient blob */
    z-index: -1;
    border-radius: 50%;
    filter: blur(70px);
    right: 50px;
    bottom: 20px;
    transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  .cardContainer:hover::before {
    transform: translate(-30px, 40px) scale(1.1); /* Blob moves and scales on hover */
    opacity: 0.9;
  }

  .cardContainer:hover::after {
    transform: translate(30px, -40px) scale(1.1); /* Second blob moves and scales */
    opacity: 0.9;
  }

  /* Responsive adjustments for smaller screens */
  @media (max-width: 400px) {
    .card {
      width: 90%; /* Make card wider on very small screens */
      height: auto; /* Adjust height automatically */
      padding: 20px 10px;
    }

    .temp {
      font-size: 2em;
    }

    .weather-icon {
      width: 100px;
      height: 100px;
    }

    .cardContainer::before,
    .cardContainer::after {
      filter: blur(50px); /* Less blur on smaller screens */
    }
  }
`;

export default Card;