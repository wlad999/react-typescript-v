import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>About Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        laudantium quod facere in iste excepturi voluptas itaque quia eveniet
        quibusdam?
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Back to list
      </button>
    </>
  );
};
