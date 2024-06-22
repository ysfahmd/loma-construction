import React from 'react';
import './ServiceItem.css';

export default function ServiceItem({ title, description }) {
  return (
    <div id='service-item'>
      <h3>{title}</h3>
      <figcaption>{description}</figcaption>
    </div>
  )
}