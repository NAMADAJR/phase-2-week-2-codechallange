import React from 'react'

const Bot = ({ bot , enlistBot }) => {
  return (
    <div className="Bot">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>Bot name: {bot.name}</h3>
      <h4>Bot Class: {bot.bot_class}</h4>
      <h4>Health: {bot.health}</h4>
      <h4>Damage: {bot.damage}</h4>
      <h4>Armor: {bot.armor}</h4>
      <button onClick={enlistBot}>Enlist Bot</button>
    </div>
  )
}

export default Bot