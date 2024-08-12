import React, { useState, useEffect } from "react";
import Bot from "./Bot";

const BotCollection = () => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((error) => console.log(error));
  }, []);

  const displayBots = bots.map((bot) => (
    <div key={bot.id}>
      <Bot bot={bot} />
    </div>
  ));

  return (
    <>
      <div className="Title">
        <h1>Bot Collection</h1>
      </div>
      <div className="BotCollection">{displayBots}</div>
    </>
  );
};

export default BotCollection;
