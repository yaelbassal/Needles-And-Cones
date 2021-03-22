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
    //EASTERN WHITE PINE
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
    //MUGO PINE
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
    }),
    //PITCH PINE
    Tree_Type.create({
      common_name: 'Pitch Pine',
      latin_name: 'Pinus rigida',
      tree_image: '/images/pitch-pine/pitch.jpeg',
      general_description:
        'Evergreen. Small to medium tree usually 40-60\' tall (max.101\'). Straight or crooked, commonly with tufts of needles along trunk; crown rounded or irregular. Known to hybridize naturally with Shortleaf Pine, and very closely related to and integrading with Pond Pine. Common and widespread, especially in dry sandy "pine barrens" or rocky soil, but also in damp soils in swamp margins. (Sibley 24)',
      needles_description:
        '3 (4-5) needles, 3 1/4", yellow-green, stiff, spreading, somewhat curved and twisted; persist 2-3 years (Sibley 24)',
      needles_image: '/images/pitch-pine/pitch-needles.jpeg',
      cones_description:
        'cones 2 1/2", flat at base, very prickly; often persistent; cones often in clusters of 2-3 (Sibley 24)',
      cones_image: '/images/pitch-pine/pitch-cones.jpeg',
      twigs_description:
        'long, stiff needles clumped at twig tip; twigs are fibrous and do not snap cleanly when bent; the only 3-needle pine with fibrous twigs (Sibley 24); twigs are orange-brown and moderately stout; buds narrowly ovoid, light gray-brown (Seiler et al. Virginia Tech Dendrology)',
      twigs_image: '/images/pitch-pine/pitch-twig.jpeg',
      branches_description: 'twisting, gnarled, drooping branches (2013)',
      branches_image: '/images/pitch-pine/pitch-branches.jpeg',
      bark_description:
        'tufts of needles often sprout directly from trunk, a habit shared only with Pond Pine; bark red-brown, deeply and irregularly furrowed, with long, rectangular plates (Sibley 24)',
      bark_image: '/images/pitch-pine/pitch-bark.jpeg',
      shape_description:
        'irregular branches and clumps of foliage create relatively smooth rounded crown(Sibley 24)',
      shape_image: '/images/pitch-pine/pitch-shape.jpeg',
      sources: [
        '“Seiler, John, et al. “Virginia Tech Dendrology.” Virginia Tech Dendrology Fact Sheet, Virginia Tech Dept. of Forest Resources and Environmental Conservation, 2021, dendro.cnre.vt.edu/dendrology/syllabus/factsheet.cfm?ID=111.”',
        'Sibley, David Allen. The Sibley Guide to Trees. Alfred A. Knopf, 2009.',
        'T. (2013, October 11). Lady Bird Johnson Wildflower Center, Plant Database. Retrieved March 18, 2021, from https://www.wildflower.org/plants/result.php?id_plant=PIRI#:~:text=Pitch%20pine%20is%20a%2040,bark%20which%20eventually%20becomes%20black.&amp;text=Medium%2Dsized%20tree%20often%20bearing,irregular%20crown%20of%20horizontal%20branches.'
      ]
    }),
    //RED PINE
    Tree_Type.create({
      common_name: 'Red Pine',
      latin_name: 'Pinus resinosa',
      tree_image: '/images/red-pine/red.jpeg',
      general_description:
        "Evergreen. Medium to large tree usually 50-80' tall (max. 154'); crown narrowly rounded. Red Pine was once the most important timber pine in the Great Lakes region. Common in dry woodlands, sandy soils, eastern boreal forests. Very commonly cultivated and naturalized, most trees seen are planted. (Sibley 28)",
      needles_description:
        '2(3) needles; 5", rigid and straight, often yellow-green; persist 2 - 4 years; needles snap cleanly when bent unlike other pines (Sibley 28)',
      needles_image: '/images/red-pine/red-needles.jpeg',
      cones_description: 'cones small, 2", not prickly (Sibley 28)',
      cones_image: '/images/red-pine/red-cones.jpeg',
      twigs_description: 'twigs fairly stout, rough (Sibley 28)',
      twigs_image: '/images/red-pine/red-twig.jpeg',
      branches_description:
        'needles densely tufted at branch tips; cones very small among long needles (Sibley 28)',
      branches_image: '/images/red-pine/red-branches.jpeg',
      bark_description:
        'bark pale silvery red-brown, furrowed into irregular scaly ridges (Sibley 28)',
      bark_image: '/images/red-pine/red-bark.jpeg',
      shape_description:
        'trunk straight, pale silvery and reddish; oval crown with tufts of dark needles, stout twigs (Sibley 28)',
      shape_image: '/images/red-pine/red-shape.jpeg',
      sources: [
        'Sibley, David Allen. The Sibley Guide to Trees. Alfred A. Knopf, 2009.'
      ]
    }),
    //SCOTCH PINE
    Tree_Type.create({
      common_name: 'Scotch Pine',
      latin_name: 'Pinus sylvestris',
      tree_image: '/images/scotch-pine/scotch.jpeg',
      general_description:
        "Evergreen. Small to medium tree usually 25-50' tall(max.106'). Trunk usually curved, with few long branches. Distinctive orange bark of upper trunk and branches, short blue-green needles, and small cones without prickles (Sibley 22)",
      needles_description:
        '2 needles, 2", twisted, stiff, blunt-tipped, gray to blue-green, persist 2-4 years (Sibley 22)',
      needles_image: '/images/scotch-pine/scotch-needles.jpeg',
      cones_description:
        'cones 2", not prickly, open when ripe and sometimes persistent (Sibley 22)',
      cones_image: '/images/scotch-pine/scotch-cones.jpeg',
      twigs_description:
        'twigs slender; needles twisted; cones point back towards twig (Sibley 22)',
      twigs_image: '/images/scotch-pine/scotch-twig.jpeg',
      branches_description:
        'Branches are thin, gnarled, often crooked, and have needles at their ends. Overall, the branching of the tree is not very dense and showcases a lot of open space between branches. (19, Yale University 2016)',
      branches_image: '/images/scotch-pine/scotch-branches.jpeg',
      bark_description:
        'bark on upper trunk and branches of mature tree smooth, bright rusty-orange; bark of main trunk gray with thin scaly ridges (Sibley 22)',
      bark_image: '/images/scotch-pine/scotch-bark.jpeg',
      shape_description:
        'curved orange trunk and irregular crown; most cultivated and escaped trees, shorter, curved; some varieties tall and straight; valuable lumber trees(Sibley 22)',
      shape_image: '/images/scotch-pine/scotch-shape.jpeg',
      sources: [
        'Sibley, David Allen. The Sibley Guide to Trees. Alfred A. Knopf, 2009.',
        '19, J. (2016, April 19). Yale University. Retrieved March 22, 2021, from https://naturewalk.yale.edu/trees/pinaceae/pinus-sylvestris/scotch-pine-21'
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
