import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
  const [time, setTime] = useState(3);
  const timeout = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      setTime((t) => t - 1);

      if (time <= 0) {
        navigate("/about", {
          state: `This is state: ${Math.random()}`
        });
      }

      return () => {
        clearTimeout(timeout.current);
      };
    }, 1000);
  }, [time]);

  return (
    <div>
      <h1>Get out od here in: {time}</h1>
    </div>
  );
};

export default Redirect;
