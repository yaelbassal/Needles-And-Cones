import React from 'react'

/**
 * COMPONENT
 */
export const About = () => {
  return (
    <div className="about-outer-container">
      <br />
      <div className="about-container">
        <section className="about-title">
          <h1>About</h1>
        </section>
        <section className="about-description-container">
          <p>
            Welcome to Needles And Cones! Needles And Cones is an educational
            web application aimed to help nature enthusiasts learn about the
            different pine tree species in Massachusetts. The idea arose from
            listening to arborists and nature lovers from the region share their
            challenges around differentiating between the different species of
            pine trees.
          </p>
          <h3>How does it work?</h3>
          <p>
            Any site visitor can identify a pine using an interactive tree
            identification key. Just navigate to “Find My Pine” in the
            navigation bar. Or, If you’d prefer to browse through tree
            information, just visit the “Learn” link.
          </p>
          <p>
            If you create an account, you’ll get a more personal experience and
            get to save your pine tree findings in your very own tree journal!
          </p>
          <p>
            So, don’t pine over that confusing pine! Let’s go figure it out!
          </p>
        </section>
      </div>
    </div>
  )
}
