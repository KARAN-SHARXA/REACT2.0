import React from "react";
import Card1 from "./componenet/comp1";
import "./App.css";

const App = () => {
  const arr = [
    {
      company: "Amazon",
      daysAgo: "5 days ago",
      title: "Senior UI/UX Designer",
      jobType: "Full Time",
      level: "Senior",
      salary: "$150k",
      location: "Mumbai, India",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      company: "Google",
      daysAgo: "2 days ago",
      title: "Frontend Developer",
      jobType: "Remote",
      level: "Mid-Level",
      salary: "$130k",
      location: "Bangalore, India",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      company: "Netflix",
      daysAgo: "1 week ago",
      title: "Product Designer",
      jobType: "Part Time",
      level: "Junior",
      salary: "$90k",
      location: "Delhi, India",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    },
    {
      company: "Meta",
      daysAgo: "3 days ago",
      title: "React Developer",
      jobType: "Full Time",
      level: "Mid-Level",
      salary: "$140k",
      location: "Hyderabad, India",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    },
  ];

  return (
    <div className="parent">
     {arr.map(function(elem){
      return <Card1 company={elem.company} title={elem.title}></Card1>
     })}
    </div>
  );
};

export default App;
