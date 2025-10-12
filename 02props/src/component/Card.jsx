import React from "react";

const Card = (props) => {
  return (
    <div>
      {" "}
      <div className="card">
        <img
          width={"50px"}
          src="https://images.unsplash.com/photo-1760233586362-1767ee653cf6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=1000"
          alt=""
        />
        <h1>{props.name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.and my age is{props.age}</p>
        <button>View</button>
      </div>
    </div>
  );
};

export default Card;
