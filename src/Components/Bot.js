import React from 'react'

const Bot = ({ bot , enlistBot }) => {
  return (
    <div className="Bot">
      <img src={bot.avatar_url} alt={bot.name} />
      <h2>Bot name: {bot.name}</h2>
      <h3>Bot Class: {bot.bot_class}</h3>
      <h3>Health: {bot.health}</h3>
      <h3>Damage: {bot.damage}</h3>
      <h3>Armor: {bot.armor}</h3>
      <button onClick={enlistBot}>Enlist Bot</button>
    </div>
  )
}

export default Bot