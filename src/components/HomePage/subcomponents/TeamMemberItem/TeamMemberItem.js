import React from 'react';
import './TeamMemberItem.css';

export default function TeamMemberItem({ name, title, biography }) {
  return (
    <div id='team-member-item'>
      <h3>{name}</h3>
      <h4>{title}</h4>
      <p>{biography}</p>
    </div>
  )
}