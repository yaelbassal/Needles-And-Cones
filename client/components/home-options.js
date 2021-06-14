import React from 'react'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */

export const HomeOptions = () => {
  return (
    <div>
      <hr className="line" />
      <div className="home-options-outer-container">
        <section className="home-options">
          <h2>
            <Link to="/find">
              <span>🔎 </span>Identify a pine tree
            </Link>
          </h2>
          <h2>
            <Link to="/journal">
              <span>📝 </span>Write in my journal
            </Link>
          </h2>
          <h2>
            <Link to="/learn">
              <span>🌲 </span>
              Explore the different species of pine trees
            </Link>
          </h2>
          <h2>
            <Link to="/about">
              <span>ℹ️ </span>Learn more about Needles And Cones{' '}
            </Link>
          </h2>
        </section>
        <img
          src={
            window.location.origin +
            '/images/eastern-white-pine/eastern-white-cones.jpg'
          }
        />
      </div>
      <hr className="line" />
      <section className="quote">
        <h3>
          "You can live for years next door to a big pine tree, honored to have
          so venerable a neighbor, even when it sheds needles all over your
          flowers or wakes you, dropping big cones onto your deck at still of
          night." ~ Denise Levertov
        </h3>
      </section>
    </div>
  )
}
