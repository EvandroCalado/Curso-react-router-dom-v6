import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  return (
    <div>
      <h1>About</h1>
      <p>{location.state}</p>
    </div>
  );
};

export default About;
