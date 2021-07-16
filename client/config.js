//Pine Tree Identification Chart Information

const pineIdChart = {
  name: "Does the tree have needle-like leaves and bear cones? It's a pine!",
  children: [
    {
      name: 'Are the needles in bundles of 2?',
      children: [
        {
          name: 'Are the needles twisted?',
          children: [
            {
              name:
                'Does it have curved cones and very short 1 1/4 inch needles?',
              children: [
                {
                  name: 'Congrats!',
                  attributes: {
                    result: "It's a Jack Pine!"
                  }
                }
              ]
            },
            {
              name:
                'Are the needles blunt tipped and is the bark on the upper trunk and branches orange?',
              children: [
                {
                  name: 'Congrats!',
                  attributes: {
                    result: "It's a Scotch Pine!"
                  }
                }
              ]
            },
            {
              name:
                'Are there multiple leaning and curving trunks and cones that are 2 1/4 inches long?',
              children: [
                {
                  name: 'Congrats!',
                  attributes: {
                    result: "It's a Japanese Black Pine!"
                  }
                }
              ]
            },
            {
              name:
                'Are the needles only slighly twisted and the needles 4 inches long?',
              children: [
                {
                  name: 'Congrats!',
                  attributes: {
                    result: "It's a Austrian Pine!"
                  }
                }
              ]
            }
          ]
        },
        {
          name: 'Are the needles straight?',
          children: [
            {
              name:
                'Is the trunk very straight and do the needles snap cleanly when bent?',
              children: [
                {
                  name: 'Congrats!',
                  attributes: {
                    result: "It's a Red Pine!"
                  }
                }
              ]
            },
            {
              name: 'Are the needles short, 2 inches long, stiff and sharp?',
              children: [
                {
                  name: 'Congrats!',
                  attributes: {
                    result: "It's a Mugo Pine!"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name:
        'Are the needles in bundles of 3 and do tufts of needles sprout directly from the trunk?',
      children: [
        {
          name: 'Congrats!',
          attributes: {
            result: "It's a Pitch Pine!"
          }
        }
      ]
    },
    {
      name: 'Are the needles in bundles of 5 with long and slender cones?',
      children: [
        {
          name: 'Congrats!',
          attributes: {
            result: "It's an Eastern White Pine!"
          }
        }
      ]
    }
  ]
}

export {pineIdChart}
