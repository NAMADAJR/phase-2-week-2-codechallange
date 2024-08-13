import React from "react";
import Bot from "./Bot";

const BotArmy = ({ bots, retireBot }) => {
  const displayEnlistedBots = bots.map((bot) => (
    <div key={bot.id}>
      <Bot bot={bot} retireBot={retireBot} />
    </div>
  ));

  return <div>{displayEnlistedBots}</div>;
};

export default BotArmy;