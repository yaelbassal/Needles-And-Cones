'use strict'

const {db} = require('../server/db')
const {User} = require('../server/db/models')
const {Tree_Type} = require('../server/db/models/index.js')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const treeTypes = await Promise.all([
    Tree_Type.create({
      common_name: 'Eastern White Pine',
      latin_name: 'Pinus strobus',
      tree_image: '/images/eastern-white-pine/eastern-white.jpeg',
      general_description:
        'Evergreen. Tall, often over 100’ (max 220’), or a low-creeping shrub at timberline. The only native white pine in its range. Easily identified by large size, irregular crown, long horizontal branches, slender needles in bundles of 5, and slender, stalked cones that lack prickles. One of the most important lumber trees in the East. (Sibley 6)',
      needles_description:
        'Needles are 4’’, in bundles of 5, bluish green, straight and slender. Needles form triangular clusters angled toward branch tips. (Sibley 6)',
      needles_image: '/images/eastern-white-pine/eastern-white-needles.jpg',
      cones_description:
        'Mature cones 5½”, relatively slender, with relatively long stalk and thin scales often dotted with sap; not persistent. Immature cones slender and green, hanging in clusters. (Sibley 6)',
      cones_image: '/images/eastern-white-pine/eastern-white-cones.jpg',
      twigs_description:
        'Slender, gray-green to orange-brown in color; buds long, ovoid, reddish brown. (Seiler et al. Virginia Tech Dendrology)',
      twigs_image: '/images/eastern-white-pine/eastern-white-twig.jpg',
      branches_description:
        'Branches are stout, irregular in shape, and grow horizontal to ascending. (Eastern White Pine Pinus strobus)',
      branches_image: '/images/eastern-white-pine/eastern-white-branches.jpg',
      bark_description:
        'Bark on young trunks pale gray-green and smooth. Bark on mature trunks dark gray, often tinged with purple; slightly to conspicuously furrowed. (Sibley 6)',
      bark_image: '/images/eastern-white-pine/eastern-white-bark.jpg',
      shape_description:
        'Graceful, long horizontal branches; irregular outline. (Sibley 6)',
      shape_image: '/images/eastern-white-pine/eastern-white-shape.jpg',
      sources: [
        '“Eastern White Pine Pinus Strobus.” Edible Wild Food, www.ediblewildfood.com/eastern-white-pine.aspx.”',
        '“Seiler, John, et al. “Virginia Tech Dendrology.” Virginia Tech Dendrology Fact Sheet, Virginia Tech Dept. of Forest Resources and Environmental Conservation, 2021, dendro.cnre.vt.edu/dendrology/syllabus/factsheet.cfm?ID=111.”',
        'Sibley, David Allen. The Sibley Guide to Trees. Alfred A. Knopf, 2009.'
      ]
    }),
    Tree_Type.create({
      common_name: 'Mugo Pine',
      latin_name: 'Pinus mugo',
      tree_image: '/images/mugo-pine/mugo.jpg',
      general_description:
        "Evergreen. Shrub to medium tree(max. 62'). Most planted cultivars short and bushy to about 20'. Related to Scotch and Japanese Red Pines, but with short, stiff, sharp needles. (Sibley 17)",
      needles_description:
        '2 needles, 2", dark green, stiff; persist 5 years or longer (Sibley 17)',
      needles_image: '/images/mugo-pine/mugo-needles.jpg',
      cones_description:
        'cones 1 1/2", gray-brown, lopsided, with thickened scales and small spines; similar to Scotch, but nearly stalkless (Sibley 17)',
      cones_image: '/images/mugo-pine/mugo-cones.jpg',
      twigs_description:
        'Moderate, typically short growth, very dense foliage, gray-brown buds and stem. (Seiler et al. Virginia Tech Dendrology)',
      twigs_image: '/images/mugo-pine/mugo-twig.jpeg',
      branches_description:
        "branches don't droop (Edward F. Gilman and Dennis G. Watson, 2015)",
      branches_image: '/images/mugo-pine/mugo-branches.jpeg',
      bark_description:
        'bark brownish gray, rather smooth but splitting vertically and horizontally. (Sibley 17)',
      bark_image: '/images/mugo-pine/mugo-bark.jpeg',
      shape_description:
        'symmetrical canopy with a regular (or smooth) outline, and individuals have more or less identical crown forms; crown shape can be round or pyramidal; crown density is dense (Edward F. Gilman and Dennis G. Watson, 2015)',
      shape_image: '/images/mugo-pine/mugo-shape.jpeg',
      sources: [
        'Edward F. Gilman and Dennis G. Watson. (2015, April 01). Pinus Mugo: Mugo pine. Retrieved March 18, 2021, from https://edis.ifas.ufl.edu/st467',
        '“Seiler, John, et al. “Virginia Tech Dendrology.” Virginia Tech Dendrology Fact Sheet, Virginia Tech Dept. of Forest Resources and Environmental Conservation, 2021, dendro.cnre.vt.edu/dendrology/syllabus/factsheet.cfm?ID=111.”',
        'Sibley, David Allen. The Sibley Guide to Trees. Alfred A. Knopf, 2009.'
      ]
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${treeTypes.length} treeTypes`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
