import React from 'react'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */

export const HomeOptions = () => {
  return (
    <div>
      <section>
        <h3>
          <Link to="/find">Identify a pine Tree 🔎 </Link>
        </h3>
        <h3>
          <Link to="/journal">Write in my journal 📝 </Link>
        </h3>
        <h3>
          <Link to="/learn">
            Explore the different species of pine trees 🌲
          </Link>
        </h3>
        <h3>
          <Link to="/about">Learn more about Needles And Cones ℹ️ </Link>
        </h3>
      </section>
      <section>
        <p>
          "You can live for years next door to a big pine tree, honored to have
          so venerable a neighbor, even when it sheds needles all over your
          flowers or wakes you, dropping big cones onto your deck at still of
          night." ~ Denise Levertov
        </p>
      </section>
    </div>
  )
}
