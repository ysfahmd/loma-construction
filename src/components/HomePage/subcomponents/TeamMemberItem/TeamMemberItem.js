import React from 'react';
import './TeamMemberItem.css';
import headshotIcon from '../../../../assets/headshot-icon.jpg'

export default function TeamMemberItem({ name, title, biography }) {
  return (
    <div id='team-member-item'>
      <img src={headshotIcon} alt='temporary headshot placeholder until I get the actual pictures.' />
      <h3>{name}</h3>
      <h4>{title}</h4>
      <p>{biography}</p>
    </div>
  )
};