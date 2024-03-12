import {
  LOGLINE_MARKER,
  CHARACTER_MARKER,
  DESCRIPTION_MARKER,
  STOP_MARKER,
  END_MARKER,
  SCENES_MARKER,
  PLACE_ELEMENT,
  PLOT_ELEMENT,
  BEAT_ELEMENT,
  DESCRIPTION_ELEMENT,
  LOGLINE_ELEMENT,
  TITLE_ELEMENT,
  SUMMARY_ELEMENT,
  CHARACTERS_ELEMENT,
  DIALOG_MARKER,
} from "../constants.js";
import { PromptPrefixes } from "./types.js";

/**
 * @title Custom
 *
 * @description These prefixes for `CHARACTERS_PROMPT`, `SCENE_PROMPT`, `SETTING_PROMPT`, `TITLES_PROMPT` and `DIALOG_PROMPT` were written by the authors. They were not used in the evaluation study but can serve as a template to write custom prefix sets.
 * To write your own prompt prefix set, edit this code and pay attention to follow the existing formatting, with appropriate `STOP_MARKER`, `END_MARKER` and element markers.
 */
export const customPrefixes: PromptPrefixes = {} as PromptPrefixes;

/**
 * Characters prompt
 */
customPrefixes.CHARACTERS_PROMPT = `
Here is an example of a logline and a list of characters.

${LOGLINE_MARKER}James finds a well in his backyard that is haunted by the ghost of Sam.

${CHARACTER_MARKER} James ${DESCRIPTION_MARKER} James is twenty-six, serious about health and wellness and optimistic. ${STOP_MARKER}
${CHARACTER_MARKER} Sam ${DESCRIPTION_MARKER} Sam fell down the well when he was 12, and was never heard from again. Sam is now a ghost. ${STOP_MARKER}
${END_MARKER}

Example 2.

${LOGLINE_MARKER}Morgan adopts a new cat, Misterio, who sets a curse on anyone that pets them.

${CHARACTER_MARKER} Morgan ${DESCRIPTION_MARKER} Morgan is booksmart and popular; they are trusting but also have been known to hold a grudge. ${STOP_MARKER}
${CHARACTER_MARKER} Misterio ${DESCRIPTION_MARKER} Misterio is a beautiul black cat, it is of uncertain age; it has several gray whiskers that make it look wise and beyond its years.  ${STOP_MARKER}
${END_MARKER}

Example 3.

${LOGLINE_MARKER}Mr. Dorbenson finds a book at a garage sale that tells the story of his own life. And it ends in a murder!

${CHARACTER_MARKER} Mr. Glen Dorbenson ${DESCRIPTION_MARKER} Mr. Glen Dorbenson frequents markets and garage sales always looking for a bargain. He is lonely and isolated and looking for his meaning in life. ${STOP_MARKER}
${END_MARKER}

Using the examples above and the following logline, complete the list of characters.

${LOGLINE_MARKER}`;

/**
 * Scene prompt
 */
customPrefixes.SCENE_PROMPT = `
Here is an example of a logline, a list of characters, and a list of plot points.

${LOGLINE_MARKER}In the following story, James finds a well in his backyard that is haunted by the ghost of Sam. The main characters are James and Sam.
James is twenty-six, serious about health and wellness and optimistic.
Sam fell down the well when he was 12, and was never heard from again. Sam is now a ghost.

${SCENES_MARKER}

${PLACE_ELEMENT}The backyard.
${PLOT_ELEMENT}Beginning.
${BEAT_ELEMENT}James is weeding his garden in the backyard, the ghost of Sam is rummaging around in the well. James listens closely and hears the murmurs of Sam down the well. James unearths the opening to the well, and looks down to see a glimmering reflection.

${PLACE_ELEMENT}The well.
${PLOT_ELEMENT}Middle.
${BEAT_ELEMENT}James is making his way down the well, Sam's voice is reverberating on the walls of the well. Sam tells the story of how he came to haunt the well. James offers to help set the soul of Sam free.

${PLACE_ELEMENT}The house.
${PLOT_ELEMENT}Conclusion.
${BEAT_ELEMENT}Looking at a photo of the gardden featuring Sam, James says his goodbyes to Sam, Sam thanks James for his help. The ghost of Sam is set free after and James goes living his life.

${END_MARKER}

Example 2.

${LOGLINE_MARKER}Morgan adopts a new cat, Misterio, who sets a curse on anyone that pets them.
The main characters are Morgan and Misterio (a cat).
Morgan is booksmart and popular; they are trusting but also have been known to hold a grudge.
Misterio is a beautiul black cat, it is of uncertain age; it has several gray whiskers that make it look wise and beyond its years.

${SCENES_MARKER}

${PLACE_ELEMENT}The Adoption Center
${PLOT_ELEMENT}Beginning.
${BEAT_ELEMENT}Morgan walks into The Adoption Center looking for a new pet. Morgan talks to the various cats and dogs in the center, they can hear a response from one very special cat: Misterio. Misterio is stuck in a cage. After sharing an interesting and intimate exchange, Morgan adopts Misterio on several conditions.

${PLACE_ELEMENT}Morgan's house.
${PLOT_ELEMENT}Middle.
${BEAT_ELEMENT}Morgan is describing to Misterio all the facts they know about felines, and then asks them to behave when company arrives. Misterio is getting pets from Morgan, broods and puurs with the pets of Morgan, they are up to something.

${PLACE_ELEMENT}The back stoop.
${PLOT_ELEMENT}Conclusion.
${BEAT_ELEMENT}Morgan has gone to bed, and Misterio transtransmorgifies into a half-cat-half-human horror. Misterio wakes up Morgan with a meow loud enough to shatter the window. Morgan erupts from bed, realizing the consequences of their recent adoption and quickly try to fix things.

${END_MARKER}

Using the example above and the following logline and list of characters, complete the list of plot points.

${LOGLINE_MARKER}`;

/**
 * Setting prompt
 */
customPrefixes.SETTING_PROMPT = `
Here are examples of logline, location, and that location's description.

Example 1.
${LOGLINE_MARKER}Morgan adopts a new cat, Misterio, who sets a curse on anyone that pets them.
${PLACE_ELEMENT}The Adoption Center.
${DESCRIPTION_ELEMENT}The Adoption Center is a sad place, especially for an unadopted pet. It is full of walls and walls of cages and cages. Inside of each is an abandoned animal, longing for a home. The lighting is dim, gray, buzzing fluorescent.${END_MARKER}

Example 2.
${LOGLINE_MARKER}James finds a well in his backyard that is haunted by the ghost of Sam.
${PLACE_ELEMENT}The well.
${DESCRIPTION_ELEMENT}The well is buried under grass and hedges. It is at least twenty feet deep, if not more and it is masoned with stones. It is 150 years old at least. It stinks of stale, standing water, and has vines growing up the sides. It is narrow enough to not be able to fit down if you are a grown adult human.${END_MARKER}

Example 3.
${LOGLINE_MARKER}Mr. Dorbenson finds a book at a garage sale that tells the story of his own life. And it ends in a murder!
${PLACE_ELEMENT}The garage sale.
${DESCRIPTION_ELEMENT}It is a garage packed with dusty household goods and antiques. There is a box at the back that says FREE and is full of paper back books.${END_MARKER}

Using the examples above and the following logine and location name, complete location description.

${LOGLINE_MARKER}`;

/**
 * Title prompt
 */
customPrefixes.TITLES_PROMPT = `
Examples of alternative, original and descriptive titles for known play and film scripts.

Example 1.
${LOGLINE_ELEMENT}Bob has an argument with his best friend, Charles.
${TITLE_ELEMENT}The End of A Friend${END_MARKER}

Example 2.
${LOGLINE_ELEMENT}Terence tries and fails to become a wizard.
${TITLE_ELEMENT}Spellcaster${END_MARKER}

Example 3.
${LOGLINE_ELEMENT}Tom falls in love with Daisy.
${TITLE_ELEMENT}The Greatest Love Story Ever Told${END_MARKER}

Example 4.
${LOGLINE_ELEMENT}


# Alternative summary, if concatenating stories and beats.
${SUMMARY_ELEMENT}`;

/**
 * Dialog prompt
 */
customPrefixes.DIALOG_PROMPT = `
Here is an example of description and scene dialogue from a modern screenplay.

${PLACE_ELEMENT}The Adoption Center.
${DESCRIPTION_ELEMENT}The Adoption Center is a sad place, especially for an unadopted pet. It is full of walls and walls of cages and cages. Inside of each is an abandoned animal, longing for a home. The lighting is dim, gray, buzzing fluorescent.
${CHARACTERS_ELEMENT}Morgan is booksmart and popular; they are trusting but also have been known to hold a grudge.
Misterio is a beautiul black cat, it is of uncertain age; it has several gray whiskers that make it look wise and beyond its years.
${PLOT_ELEMENT}Beginning.
${SUMMARY_ELEMENT}Morgan adopts a new cat, Misterio, who sets a curse on anyone that pets them.
${BEAT_ELEMENT}Morgan walks into The Adoption Center looking for a new pet. Morgan talks to the various cats and dogs in the center, they can hear a response from one very special cat: Misterio. After sharing an interesting and intimate exchange, Morgan adopts Misterio on several conditions.

${DIALOG_MARKER}

MORGAN
Well, well, well ... aren't you the most precious little rascal.

Cats are meowing and dogs are barking. There is a loud purr in the background.

MORGAN
Look at this little face... how could you not love a little Devon Rex face like this. With whiskers almost as long as your tail.

Morgan makes their way down the hallways, running their hand along the cages. They feel a warm fuzzy paw bat their fingers.

MORGAN
Hello precious, and what is your name?

Misterio let's out a long and sustained meow.

MORGAN
Well, well, I am Morgan and it is nice to meet you.

MISTERIO
(meowing louder this time) purrr, purrr, purrr.

Morgan reads the sign on the bottom right of the cage, it reads: Misterio.

MORGAN
You have the most amazing face, and beautiful eyes. I could absolutely get lost in them.

Morgan and Misterio start to stare at each other. They look deeply into each others eyes. They start to breath in rhythm.

MISTERIO
I can hear what you are thinking...

Morgan is startled and looks around to see if anyone else can hear the cat's thoughts...

MORGAN
(looking around) you can hear my thoughts?

MISTERIO
I can hear what you are thinking.

MORGAN
What?

MISTERIO
Yes, I can hear your thoughts.

MORGAN
You are amazing. Want to come home with me? Want your new forever home?

MISTERIO
Yes, I would love that.

MISTERIO purrs loud enough that the other animals all fall silent.

MORGAN
I will adopt you on a few conditions. First, you must not talk to me at night when I am sleeping. Second, you must not talk to me when I am out in public.

MISTERIO
Okay.

MORGAN
Okay, it's a deal.

Misterio runs around the cage, Morgan laughs as Misterio rubs against the cage and tries to jump in Morgan's arms as soon as the cage is opened.
${END_MARKER}

Using the example above and following description, write the dialogue of the scene.
`;
