const { BlogPosts } = require('./models');
// --------------------------------------------
// Creating fake posts

const post1 = `Sartorial meditation migas cray letterpress hella. Locavore migas kickstarter flannel, keytar beard seitan iPhone fap godard shabby chic slow-carb authentic tofu butcher. Truffaut umami raclette kale chips hexagon swag. Authentic YOLO affogato brunch mumblecore ugh health goth, edison bulb beard iceland glossier post-ironic. Helvetica biodiesel man bun, poke bushwick chicharrones blue bottle thundercats pickled. Vegan blog hexagon, narwhal adaptogen bitters fixie cliche leggings. Aesthetic poke af intelligentsia.

Artisan disrupt direct trade woke salvia, lo-fi cornhole fingerstache tacos XOXO. Retro occupy vice narwhal, freegan knausgaard cred street art disrupt irony activated charcoal hammock mustache distillery. Vexillologist art party roof party, vape pok pok messenger bag vegan tumblr godard kickstarter. Craft beer marfa normcore letterpress 8-bit air plant squid hell of shabby chic, slow-carb whatever activated charcoal occupy lumbersexual. Locavore la croix tofu, tousled aesthetic heirloom enamel pin. Letterpress pabst locavore narwhal meditation kitsch, XOXO food truck pour-over marfa. Messenger bag lomo try-hard photo booth organic 3 wolf moon.`;

const post2 = `Scenester put a bird on it keffiyeh messenger bag hashtag sriracha. Keytar affogato +1 offal authentic. Organic enamel pin tousled fashion axe, slow-carb forage butcher selvage selfies raw denim. Cardigan shaman selfies, ethical YOLO authentic cornhole single-origin coffee heirloom. Bitters gentrify selvage, cornhole chillwave bushwick photo booth master cleanse offal pok pok single-origin coffee. Cloud bread helvetica cliche gluten-free taxidermy. Glossier next level gastropub single-origin coffee, activated charcoal blog hammock vice stumptown ennui artisan intelligentsia mixtape.

Sustainable wolf tilde, cold-pressed keytar intelligentsia vinyl bespoke man bun shoreditch. Edison bulb aesthetic cliche stumptown tousled. Typewriter fam ethical, readymade echo park chambray fashion axe church-key intelligentsia 90's. Fingerstache palo santo ramps lyft poke street art. Bushwick poutine tacos pinterest, ennui locavore kickstarter distillery meggings neutra letterpress messenger bag helvetica four dollar toast. Fashion axe distillery lumbersexual shoreditch vinyl stumptown messenger bag, pour-over art party authentic neutra XOXO. Palo santo fashion axe artisan, seitan intelligentsia flannel affogato four dollar toast cornhole vexillologist butcher.`;
const post3 = `Keytar hammock kale chips photo booth offal. Pok pok craft beer meggings, ugh semiotics pitchfork activated charcoal wayfarers roof party iceland lo-fi. Unicorn chartreuse authentic austin tousled. Cardigan twee mlkshk crucifix woke coloring book. Ugh shoreditch scenester humblebrag, hashtag subway tile authentic. Edison bulb subway tile brunch, hella sartorial humblebrag PBR&B readymade listicle. Locavore +1 blue bottle, kombucha vice typewriter banjo.

VHS 3 wolf moon kogi yr, snackwave iceland stumptown fam. Slow-carb kale chips occupy 8-bit pork belly. Small batch pork belly tote bag, skateboard roof party gluten-free typewriter master cleanse hot chicken cliche williamsburg marfa. Mixtape small batch +1 blog, pabst disrupt pop-up quinoa before they sold out forage health goth. Unicorn irony iceland, 8-bit thundercats chicharrones four loko vape quinoa cray hell of biodiesel cloud bread sustainable. Pour-over blue bottle four loko, vinyl fingerstache tbh waistcoat +1 gentrify. Salvia taxidermy typewriter, blog ramps green juice la croix air plant pickled pug twee prism fashion axe.

Gentrify health goth actually stumptown gochujang chillwave. Brooklyn you probably haven't heard of them waistcoat VHS, pop-up cloud bread plaid normcore kombucha intelligentsia cold-pressed occupy sartorial lumbersexual. Cred knausgaard la croix marfa, kombucha ethical vaporware lyft meh kinfolk tilde. Irony vape yr shoreditch hexagon echo park. Slow-carb fanny pack sartorial deep v, bushwick seitan chartreuse church-key copper mug vexillologist. Unicorn narwhal keffiyeh, small batch man braid blue bottle scenester live-edge. Yr gentrify mumblecore, vegan plaid succulents shabby chic chia hashtag knausgaard.

Sriracha cray listicle chicharrones 3 wolf moon direct trade. 8-bit food truck kitsch, polaroid umami jean shorts yr sustainable master cleanse cardigan iceland salvia keffiyeh photo booth. Food truck viral banjo portland, put a bird on it bushwick hoodie drinking vinegar sriracha photo booth waistcoat. Cardigan authentic master cleanse, 90's yr truffaut hot chicken. Hoodie trust fund echo park banh mi, hammock ethical kickstarter post-ironic. Direct trade actually lumbersexual crucifix. Cred art party +1 ugh, lyft master cleanse beard schlitz banjo letterpress mustache synth hot chicken.`;

BlogPosts.create(
    'Meditation Migas',
    post1,
    'Ria'
)
BlogPosts.create(
    'Hashtag Sriracha',
    post2,
    'Ivy'
)
BlogPosts.create(
    'Lyft Master Clense',
    post3,
    'Wences'
)

// --------------------------------------------