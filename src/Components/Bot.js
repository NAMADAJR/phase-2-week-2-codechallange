import React from "react";

const Bot = ({ bot, enlistBot, retireBot }) => {
  return (
    <div className="Bot">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>Bot name: {bot.name}</h3>
      <h4>Bot Class: {bot.bot_class}</h4>
      <h4>Health: {bot.health}</h4>
      <h4>Damage: {bot.damage}</h4>
      <h4>Armor: {bot.armor}</h4>
      {enlistBot && <button id="enlist" onClick={enlistBot}>Enlist Bot</button>}
      {retireBot && <button id="retire" onClick={() => retireBot(bot)}>X</button>}
    </div>
  );
};

export default Bot;
