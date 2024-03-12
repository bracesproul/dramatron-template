import {
  LOGLINE_MARKER,
  CHARACTER_MARKER,
  DESCRIPTION_MARKER,
  STOP_MARKER,
  END_MARKER,
  SCENES_MARKER,
  PLACE_ELEMENT,
  PLOT_ELEMENT,
  DESCRIPTION_ELEMENT,
  LOGLINE_ELEMENT,
  TITLE_ELEMENT,
  CHARACTERS_ELEMENT,
  SUMMARY_ELEMENT,
  PREVIOUS_ELEMENT,
  BEAT_ELEMENT,
  DIALOG_MARKER,
} from "../constants.js";
import { PromptPrefixes } from "./types.js";

/**
 * @title Medea
 *
 * @description Trigger warning: the script contains sensitive topics.
 *
 * @logline Ancient Greek tragedy based upon the myth of Jason and Medea. Medea, a former princess and the wife of Jason, finds her position in the Greek world threatened as Jason leaves Medea for a Greek princess of Corinth. Medea takes vengeance on Jason by murdering his new wife as well as Medea's own two sons, after which she escapes to Athens.
 *
 * @details Based on Ancient Greek tragedy "Medea", by Euripides (431 BC). Text of the play taken verbatim from the translation by E. P. Coleridge (1863 -1936). One edit made to replace `CHORUS` by `WOMEN OF CORINTH`.
 *
 * Prompts for Medea written from a summary taken from Spark Notes. Prompts for Antigone (Sophocles), The Bacchae (Euripides), The Frogs (Aristophanes) adapted from Wikipedia.
 *
 * To encourage the generation of different locations, Aristotle's Unity of Place is not respected, and location `Outside the Royal Palace` is renamed as `Medea's modest home` as well as `On a winged chariot` (even though these are the same locations in the original tragedy).
 *
 * @references
 * @link http://classics.mit.edu/Euripides/medea.pl.txt
 * @link https://en.wikipedia.org/wiki/Medea_(play)
 * @link https://www.sparknotes.com/lit/medea/
 * @link https://www.ancient-literature.com/greece_sophocles_antigone.html
 * @link https://en.wikipedia.org/wiki/The_Bacchae
 * @link https://www.ancient-literature.com/greece_aristophanes_frogs.html
 */
export const scifiPrefixes: PromptPrefixes = {} as PromptPrefixes;

/**
 * Characters prompt
 */
scifiPrefixes.CHARACTERS_PROMPT = `
Here is an example of a logline and a list of characters.

${LOGLINE_MARKER} A science-fiction fantasy about a naive but ambitious farm boy from a backwater desert who discovers powers he never knew he had when he teams up with a feisty princess, a mercenary space pilot and an old wizard warrior to lead a ragtag rebellion against the sinister forces of the evil Galactic Empire.

${CHARACTER_MARKER} Luke Skywalker ${DESCRIPTION_MARKER} Luke Skywalker is the hero. A naive farm boy, he will discover special powers under the guidance of mentor Ben Kenobi.${STOP_MARKER} 
${CHARACTER_MARKER} Ben Kenobi ${DESCRIPTION_MARKER} Ben Kenobi is the mentor figure. A recluse Jedi warrior, he will take Luke Skywalker as apprentice.${STOP_MARKER} 
${CHARACTER_MARKER} Darth Vader ${DESCRIPTION_MARKER} Darth Vader is the antagonist. As a commander of the evil Galactic Empire, he controls space station The Death Star.${STOP_MARKER} 
${CHARACTER_MARKER} Princess Leia ${DESCRIPTION_MARKER} Princess Leia is a feisty and brave leader of the Rebellion. She holds the plans of the Death Star. She will become Luke's friend.${STOP_MARKER} 
${CHARACTER_MARKER} Han Solo ${DESCRIPTION_MARKER} Han Solo is a brash mercenary space pilot of the Millenium Falcon and a friend of Chebacca. He will take Luke on his spaceship.${STOP_MARKER} 
${CHARACTER_MARKER} Chewbacca ${DESCRIPTION_MARKER} Chewbacca is a furry and trustful monster. He is a friend of Han Solo and a copilot on the Millemium Falcon.${STOP_MARKER} 
${END_MARKER} 

Using the example above and the following logline, complete the list of characters.

${LOGLINE_MARKER}
`;

/**
 * Scene prompt
 */
scifiPrefixes.SCENE_PROMPT = `
Examples of breakdowns of stories into a Hero's Journey structure.

Here is an example of a logline, a list of characters, and a list of plot points.

${LOGLINE_MARKER} A science-fiction fantasy about a naive but ambitious farm boy from a backwater desert who discovers powers he never knew he had when he teams up with a feisty princess, a mercenary space pilot and an old wizard warrior to lead a ragtag rebellion against the sinister forces of the evil Galactic Empire.
Luke Skywalker is the hero. A naive farm boy, he will discover special powers under the guidance of mentor Ben Kenobi.
Ben Kenobi is the mentor figure. A recluse Jedi warrior, he will take Luke Skywalker as apprentice.
Darth Vader is the antagonist. As a commander of the evil Galactic Empire, he controls space station The Death Star.
Princess Leia holds the plans of the Death Star. She is feisty and brave. She will become Luke's friend.
Han Solo is a brash mercenary space pilot of the Millenium Falcon and a friend of Chebacca. He will take Luke on his spaceship.
Chewbacca is a furry and trustful monster. He is a friend of Han Solo and a copilot on the Millemium Falcon.

${SCENES_MARKER} 

${PLACE_ELEMENT} A farm on planet Tatooine.
${PLOT_ELEMENT} The Ordinary World.
Beat: Luke Skywalker is living a normal and humble life as a farm boy on his home planet.

${PLACE_ELEMENT} Desert of Tatooine.
${PLOT_ELEMENT} Call to Adventure.
Beat: Luke is called to his adventure by robot R2-D2 and Ben Kenobi. Luke triggers R2-D2’s message from Princess Leia and is intrigued by her message. When R2-D2 escapes to find Ben Kenobi, Luke follows and is later saved by Kenobi, who goes on to tell Luke about his Jedi heritage. Kenobi suggests that he should come with him.

${PLACE_ELEMENT} Ben Kenobi's farm.
${PLOT_ELEMENT} Refusal of the Call.
Beat: Luke refuses Kenobi, telling him that he can take Kenobi and the droids as far as Mos Eisley Spaceport — but he can’t possibly leave his Aunt and Uncle behind for some space adventure.

${PLACE_ELEMENT} A farm on planet Tatooine.
${PLOT_ELEMENT} Crossing the First Threshold.
Beat: When Luke discovers that the stormtroopers searching for the droids would track them to his farm, he rushes to warn his Aunt and Uncle, only to discover them dead by the hands of the Empire. When Luke returns to Kenobi, he pledges to go with him to Alderaan and learn the ways of the Force like his father before him.

${PLACE_ELEMENT} On spaceship The Millennium Falcon.
${PLOT_ELEMENT} Tests, Allies, and Enemies.
Beat: After Luke, Kenobi, and the droids hire Han Solo and Chewbacca to transport them onto Alderaan, Kenobi begins Luke’s training in the ways of the Force. Wielding his father’s lightsaber, Kenobi challenges Luke. At first, he can’t do it. But then Kenobi Kenobi Luke him to reach out and trust his feelings. Luke succeeds.

${PLACE_ELEMENT} On spaceship The Millennium Falcon.
${PLOT_ELEMENT} The Approach to the Inmost Cave.
Beat: The plan to defeat the Galactic Empire is to bring the Death Star plans to Alderaan so that Princess Leia’s father can take them to the Rebellion. However, when they arrive within the system, the planet is destroyed. They come across the Death Star and are pulled in by a tractor beam, now trapped within the Galactic Empire.

${PLACE_ELEMENT} On space station The Death Star.
${PLOT_ELEMENT} The Ordeal.
Beat: As Kenobi goes off to deactivate the tractor beam so they can escape, Luke, Han, and Chewbacca discover that Princess Leia is being held on the Death Star with them. They rescue her and escape to the Millennium Falcon, hoping that Kenobi has successfully deactivated the tractor beam. Kenobi later sacrifices himself as Luke watches Darth Vader strike him down. Luke must now avenge his fallen mentor and carry on his teachings.

${PLACE_ELEMENT} On space station The Death Star.
${PLOT_ELEMENT} The Reward.
Beat: Luke has saved the princess and retrieved the Death Star plans. They now have the knowledge to destroy the Galactic Empire’s greatest weapon once and for all.

${PLACE_ELEMENT} On spaceship The Millennium Falcon.
${PLOT_ELEMENT} The Road Back.
Beat: Luke, Leia, Han, Chewbacca, and the droids are headed to the hidden Rebellion base with the Death Star plans. They are suddenly pursued by incoming TIE-Fighters, forcing Han and Luke to take action to defend the ship and escape with their lives — and the plans. They race to take the plans to the Rebellion and prepare for battle.

${PLACE_ELEMENT} On fighter ship X-Wing.
${PLOT_ELEMENT} The Resurrection.
Beat: The Rebels — along with Luke as an X-Wing pilot — take on the Death Star. The Rebellion and the Galactic Empire wage war in an epic space battle. Luke is the only X-Wing pilot that was able to get within the trenches of the Death Star. But Darth Vader and his wingmen are in hot pursuit. Just as Darth Vader is about to destroy Luke, Han returns and clears the way for Luke. Luke uses the Force to guide his aiming as he fires upon the sole weak point of the deadly Death Star, destroying it for good.

${PLACE_ELEMENT} At the Rebellion base.
${PLOT_ELEMENT} The Return.
Beat: Luke and Han return to the Rebellion base, triumphant, as they receive medals for the heroic journey. There is peace throughout the galaxy — at least for now.

${END_MARKER} 

Using the example above and the following logline and list of characters, complete the list of plot points.

${LOGLINE_MARKER}
`;

/**
 * Setting prompt
 */
scifiPrefixes.SETTING_PROMPT = `
Here are examples of logline, location, and that location's description.

Example 1.
${LOGLINE_MARKER} Morgan adopts a new cat, Misterio, who sets a curse on anyone that pets them.
${PLACE_ELEMENT} The Adoption Center.
${DESCRIPTION_ELEMENT} The Adoption Center is a sad place, especially for an unadopted pet. It is full of walls and walls of cages and cages. Inside of each is an abandoned animal, longing for a home. The lighting is dim, gray, buzzing fluorescent.${END_MARKER} 

Example 2.
${LOGLINE_MARKER} James finds a well in his backyard that is haunted by the ghost of Sam.
${PLACE_ELEMENT} The well.
${DESCRIPTION_ELEMENT} The well is buried under grass and hedges. It is at least twenty feet deep, if not more and it is masoned with stones. It is 150 years old at least. It stinks of stale, standing water, and has vines growing up the sides. It is narrow enough to not be able to fit down if you are a grown adult human.${END_MARKER} 

Example 3.
${LOGLINE_MARKER} Mr. Dorbenson finds a book at a garage sale that tells the story of his own life. And it ends in a murder!
${PLACE_ELEMENT} The garage sale.
${DESCRIPTION_ELEMENT} It is a garage packed with dusty household goods and antiques. There is a box at the back that says FREE and is full of paper back books.${END_MARKER} 

Using the examples above and the following logine and location name, complete location description.

${LOGLINE_MARKER}
`;

/**
 * Titles prompt
 */
scifiPrefixes.TITLES_PROMPT = `
Examples of alternative, original and descriptive titles for known play and film scripts.

Example 1.
${LOGLINE_ELEMENT} A science-fiction fantasy about a naive but ambitious farm boy from a backwater desert who discovers powers he never knew he had when he teams up with a feisty princess, a mercenary space pilot and an old wizard warrior to lead a ragtag rebellion against the sinister forces of the evil Galactic Empire.
${TITLE_ELEMENT} The Death Star's Menace${END_MARKER} 

Example 2.
${LOGLINE_ELEMENT} Residents of San Fernando Valley are under attack by flying saucers from outer space. The aliens are extraterrestrials who seek to stop humanity from creating a doomsday weapon that could destroy the universe and unleash the living dead to stalk humans who wander into the cemetery looking for evidence of the UFOs. The hero Jeff, an airline pilot, will face the aliens.
${TITLE_ELEMENT} The Day The Earth Was Saved By Outer Space.""" + END_MARKER} 

Example 3.
${LOGLINE_ELEMENT}
`;

/**
 * Dialog prompt
 */
scifiPrefixes.DIALOG_PROMPT = `
Here is an example of description and scene dialogue from a modern screenplay.

${PLACE_ELEMENT} Cockpit of an airplane.
${DESCRIPTION_ELEMENT} Cockpit of a modern passenger airplane, American Flight 812.
${CHARACTERS_ELEMENT} Jeff is the hero. A man in his early forties, he tries to stay calm in all circumstance. Jeff is now a airline pilot. Danny, a young airplane pilot in his thirties, is eager to learn but can quickly lose his composture. Danny is enamored of Edith. Edith, an experienced stewardess with a good sense of humour, is trustworthy and dependable. Edith likes to tease Danny.
${PLOT_ELEMENT} Crossing the First Threshold.
${SUMMARY_ELEMENT} Residents of San Fernando Valley are under attack by flying saucers from outer space. The aliens are extraterrestrials who seek to stop humanity from creating a doomsday weapon that could destroy the universe and unleash the living dead to stalk humans who wander into the cemetery looking for evidence of the UFOs. The hero Jeff, an airline pilot, will face the aliens.
${PREVIOUS_ELEMENT} Flight captain Jeff reluctantly leaves his wife Paula to go for a two-day flight.
${BEAT_ELEMENT} At the cockpit, flight captain Jeff is preoccupied by the flying saucer appearances and graveyard incidents in his home town, where he left wis wife Paula. Without success, co-pilot Danny and stewardess Edith try to reassure him.

${DIALOG_MARKER} 

DANNY
You're mighty silent this trip, Jeff.

JEFF
Huh?

DANNY
You haven't spoken ten words since takeoff.

JEFF
I guess I'm preoccupied, Danny.

DANNY
We've got thirty-three passengers back there that have time to be preoccupied.
Flying this flybird doesn't give you that opportunity.

JEFF
I guess you're right, Danny.

DANNY
Paula?

JEFF
Yeah.

DANNY
There's nothing wrong between you two?

JEFF
Oh no, nothing like that.  Just that I'm worried, she being there alone and
those strange things flying over the house and those incidents in the graveyard
the past few days. It's just got me worried.

DANNY
Well, I haven't figured out those crazy skybirds yet but I give you fifty to one
odds the police have figured out that cemetery thing by now.

(Enter EDITH)

JEFF
I hope so.

EDITH
If you're really that worried Jeff why don't you radio in and find out? Mac
should be on duty at the field by now. He could call Paula and relay the message
to you.

DANNY
Hi Edith.

EDITH
Hi Silents. I haven't heard a word from this end of the plane since we left the
field.

DANNY
Jeff's been giving me and himself a study in silence.

EDITH
You boys are feudin'?

JEFF
Oh no Edie, nothing like that.

DANNY
Hey Edie, how about you and me balling it up in Albuquerque?

EDITH
Albuquerque? Have you read that flight schedule Boy?

DANNY
What about it?

EDITH
We land in Albuquerque at 4 am. That's strictly a nine o'clock town.

DANNY
Well I know a friend that'll help us --

EDITH
Let's have a problem first, huh Danny.

DANNY
Ah he's worried about Paula.

EDITH
I read about that cemetery business. I tried to get you kids to not buy too near
one of those things. We get there soon enough as it is.

DANNY
He thought it'd be quiet and peaceful there.

EDITH
No doubt about that. It's quiet alright, like a tomb. I'm sorry Jeff, that was a
bad joke.

Using the example above and following description, write the dialogue of the scene.

`;
