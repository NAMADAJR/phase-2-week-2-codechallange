import React, { useState, useEffect } from "react";
import Bot from "./Bot";
import BotArmy from "./BotArmy";

const BotCollection = () => {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((error) => console.log(error));
  }, []);

  const enlistBot = (bot) => {
    if (!enlistedBots.find((enlistedBot) => enlistedBot.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  const displayBots = bots.map((bot) => (
    <div key={bot.id}>
      <Bot bot={bot} enlistBot={() => enlistBot(bot)} />
    </div>
  ));

  return (
    <div>
      <div className="Title">
      <h2>Bot Collection</h2>
      </div>
      <div className="BotCollection">{displayBots}</div>
      <div className="Title">
      <h2>Bot Army</h2>
      </div>
      <BotArmy bots={enlistedBots} />
    </div>
  );
};

export default BotCollection;
