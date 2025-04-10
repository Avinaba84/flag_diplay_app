import React, { useState, useEffect } from "react";

const Card = ({ name, flag }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        justifyContent: "center",
        alignItems: "center",
        height: "150px",
        width: "150px",
        border: "0.5px solid black",
        borderRadius: "4px",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <img
        src={flag}
        alt={`Flag of ${name}`}
        style={{ width: "100px", height: "100px" }}
      />
      <h5>{name}</h5>
    </div>
  );
};

const API_ENDPOINT = "https://xcountries-backend.azurewebsites.net/all";

export default function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_ENDPOINT);
        const jsonRes = await res.json();
        setCountries(jsonRes);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      {countries.map(({ name,flag, abbr }) => (
        <Card name={name} flag={flag} key={abbr} />
      ))}
    </div>
  );
}
