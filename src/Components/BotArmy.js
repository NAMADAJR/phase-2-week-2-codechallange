import React from "react";
import Bot from "./Bot";

const BotArmy = ({ bots }) => {
  const displayEnlistedBots = bots.map((bot) => (
    <div key={bot.id}>
      <Bot bot={bot} />
    </div>
  ));

  return <div>{displayEnlistedBots}</div>;
};

export default BotArmy;