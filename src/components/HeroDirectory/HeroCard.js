import React from 'react'
import { Link } from 'react-router-dom'

const HeroCard = ({ name, images, id }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
    <Link to={`/heroes/${id}`}>
      <div className="card hero-card">
        <div className="card-image">
          <figure className="image">
            <img src={images.sm} alt={name} />
          </figure>
        </div>
        <div className="card-content">
          <h1 className="title is-6">{name}</h1>
        </div>
      </div>
    </Link>
  </div>
)

export default HeroCard