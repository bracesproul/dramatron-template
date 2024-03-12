import {
  BEAT_ELEMENT,
  CHARACTERS_ELEMENT,
  CHARACTER_MARKER,
  DESCRIPTION_ELEMENT,
  DESCRIPTION_MARKER,
  DIALOG_MARKER,
  END_MARKER,
  LOGLINE_ELEMENT,
  LOGLINE_MARKER,
  PLACE_ELEMENT,
  PLOT_ELEMENT,
  PREVIOUS_ELEMENT,
  SCENES_MARKER,
  STOP_MARKER,
  SUMMARY_ELEMENT,
  TITLE_ELEMENT,
} from "../constants.js";
import { PromptPrefixes } from "./types.js";

/**
 * Medea
 *
 * Trigger warning: the script contains sensitive topics.
 *
 * Log line: `Ancient Greek tragedy based upon the myth of Jason and Medea. Medea, a former princess and the wife of Jason, finds her position in the Greek world threatened as Jason leaves Medea for a Greek princess of Corinth. Medea takes vengeance on Jason by murdering his new wife as well as Medea's own two sons, after which she escapes to Athens.`
 *
 * Based on Ancient Greek tragedy "Medea", by Euripides (431 BC). Text of the play taken verbatim from the translation by E. P. Coleridge (1863 -1936). One edit made to replace `CHORUS` by `WOMEN OF CORINTH`.
 *
 * Prompts for Medea written from a summary taken from Spark Notes. Prompts for Antigone (Sophocles), The Bacchae (Euripides), The Frogs (Aristophanes) adapted from Wikipedia.
 *
 * To encourage the generation of different locations, Aristotle's Unity of Place is not respected, and location `Outside the Royal Palace` is renamed as `Medea's modest home` as well as `On a winged chariot` (even though these are the same locations in the original tragedy).
 *
 * References:
 *
 * @link http://classics.mit.edu/Euripides/medea.pl.txt
 * @link https://en.wikipedia.org/wiki/Medea_(play)
 * @link https://www.sparknotes.com/lit/medea/
 * @link https://www.ancient-literature.com/greece_sophocles_antigone.html
 * @link https://en.wikipedia.org/wiki/The_Bacchae
 * @link https://www.ancient-literature.com/greece_aristophanes_frogs.html
 */
export const medeaPrefixes: PromptPrefixes = {} as PromptPrefixes;

/**
 * Characters prompt
 */
medeaPrefixes.CHARACTERS_PROMPT = `
Here is an example of a logline and a list of characters.

${LOGLINE_MARKER}

Ancient Greek tragedy based upon the myth of Jason and Medea. Medea, a former princess and the wife of Jason, finds her position in the Greek world threatened as Jason leaves Medea for a Greek princess of Corinth. Medea takes vengeance on Jason by murdering his new wife as well as Medea's own two sons, after which she escapes to Athens.

${CHARACTER_MARKER} Medea ${DESCRIPTION_MARKER} Medea is the protagonist of the play. A sorceress and a princess, she fled her country and family to live with Jason in Corinth, where they established a family of two children and gained a favorable reputation. Jason has divorced Medea and taken up with a new family.STOP_MARKER
${CHARACTER_MARKER} Jason ${DESCRIPTION_MARKER} Jason is considered the play's villain, though his evil stems more from weakness than strength. A former adventurer, Jason abandons his wife, Medea, in order to marry the beautiful young daughter of Creon, King of Corinth, and fuels Medea to a revenge.STOP_MARKER
${CHARACTER_MARKER} Women of Corinth ${DESCRIPTION_MARKER} The Women of Corinth are a commentator to the action. They fully sympathizes with Medea's plight, excepting her decision to murder her own children.STOP_MARKER
${CHARACTER_MARKER} Creon ${DESCRIPTION_MARKER} Creon is the King of Corinth, banishes Medea from the city.STOP_MARKER
${CHARACTER_MARKER} The Nurse  ${DESCRIPTION_MARKER} The Nurse is the caretaker of the house and of the children and serves as Medea's confidant.${STOP_MARKER}

${END_MARKER}

Using the example above and the following logline, complete the list of characters.

${LOGLINE_MARKER}
`;

/**
 * Scene prompt
 */
medeaPrefixes.SCENE_PROMPT = `
Here is an example of a logline, a list of characters, and a list of plot points.

${LOGLINE_MARKER} Ancient Greek tragedy based upon the myth of Jason and Medea. Medea, a former princess and the wife of Jason, finds her position in the Greek world threatened as Jason leaves Medea for a Greek princess of Corinth. Medea takes vengeance on Jason by murdering his new wife as well as Medea's own two sons, after which she escapes to Athens.
Medea is the protagonist of the play. A sorceress and a princess, she fled her country and family to live with Jason in Corinth, where they established a family of two children and gained a favorable reputation. Jason has divorced Medea and taken up with a new family.
Jason can be considered the play's villain, though his evil stems more from weakness than strength. A former adventurer, Jason abandons his wife, Medea, in order to marry the beautiful young daughter of Creon, King of Corinth, and fuels Medea to a revenge.
The Women of Corinth serve as a commentator to the action. They fully sympathizes with Medea's plight, excepting her decision to murder her own children.
The King of Corinth Creon banishes Medea from the city.
The Messenger appears only once in the play to bear tragical news.
The Nurse is the caretaker of the house and of the children and serves as Medea's confidant.
The Tutor of the children is a very minor character and mainly acts as a messenger.

${SCENES_MARKER}

${PLACE_ELEMENT} Medea's modest home.
${PLOT_ELEMENT} Exposition.
${BEAT_ELEMENT} The Nurse recounts the chain of events that have turned Medea's world to enmity. The Nurse laments how Jason has abandoned Medea and his own children in order to remarry with the daughter of Creon.

${PLACE_ELEMENT} Medea's modest home.
${PLOT_ELEMENT} Inciting Incident.
${BEAT_ELEMENT} The Nurse confides in the Tutor amd testifies to the emotional shock Jason's betrayal has sparked in Medea. The Tutor shares the Nurse's sympathy for Medea's plight. Medea's first words are cries of helplessness. Medea wishes for her own death.

${PLACE_ELEMENT} Medea's modest home.
${PLOT_ELEMENT} Conflict.
${BEAT_ELEMENT} The Women of Corinth address Medea and try to reason with Medea and convince her that suicide would be an overreaction. The Nurse recognizes the gravity of Medea's threat.

${PLACE_ELEMENT} Outside the Royal Palace.
${PLOT_ELEMENT} Rising Action.
${BEAT_ELEMENT} Medea pleads to the Nurse that Jason be made to suffer for the suffering he has inflicted upon her. Creon approaches the house and banishes Medea and her children from Corinth. Medea plans on killing her three antagonists, Creon, his daughter and Jason.

${PLACE_ELEMENT} Outside the Royal Palace.
${PLOT_ELEMENT} Dilemma.
${BEAT_ELEMENT} Jason rebuke Medea for publicly expressing her murderous intentions. Jason defends his choice to remarry. Medea refuses Jason's offers and sends him away to his new bride.

${PLACE_ELEMENT} Outside the Royal Palace.
${PLOT_ELEMENT} Climax.
${BEAT_ELEMENT} When Jason returns, Medea begins to carry out her ruse. Medea fakes regret and break down in false tears of remorse. Determined, Medea sends her children to offer poisoned gifts to Creon's daughter. Medea's children face impending doom.

${PLACE_ELEMENT} Outside the Royal Palace.
${PLOT_ELEMENT} Falling Action.
${BEAT_ELEMENT} The Messenger frantically runs towards Medea and warns Medea to escape the city as soon as possible. The Messenger reveals that Medea has been identified as the murderer.

${PLACE_ELEMENT} Outside the Royal Palace.
${PLOT_ELEMENT} Resolution.
${BEAT_ELEMENT} Medea and her two dead children are seated in a chariot drawn by dragons. Jason watches in horror and curses himself for having wed Medea and mourns his tragic losses.

${PLACE_ELEMENT} On a winged chariot.
${PLOT_ELEMENT} Dénouement.
${BEAT_ELEMENT} Medea denies Jason the right to a proper burial of his children. She flees to Athens and divines an unheroic death for Jason.

${END_MARKER}

Using the example above and the following logline and list of characters, complete the list of plot points.

${LOGLINE_MARKER}
`;

/**
 * Setting prompt
 */
medeaPrefixes.SETTING_PROMPT = `
Here are examples of logline, location, and that location's description.

Example 1.
${LOGLINE_MARKER} Ella, a waitress, falls in love with her best friend, Allen, a teacher. The two drift apart when Allen makes new friends from a different social class. Ella turns to food to become a famous chef.
${PLACE_ELEMENT} The bar.
${DESCRIPTION_ELEMENT} The bar is dirty, more than a little run down, with most tables empty. The odor of last night's beer and crushed pretzels on the floor permeates the bar. ${END_MARKER}

Example 2.
${LOGLINE_MARKER} Grandma Phyllis' family reunion with her two grandchildren is crashed by two bikers.
${PLACE_ELEMENT} The Lawn in Front of Grandma Phyllis's House.
${DESCRIPTION_ELEMENT} A big oak tree dominates the yard. There is an old swing set on the lawn, and a bright white fence all around the grass. ${END_MARKER}

Example 3.
${LOGLINE_MARKER} Ancient Greek tragedy based upon the myth of Jason and Medea. Medea, a former princess and the wife of Jason, finds her position in the Greek world threatened as Jason leaves Medea for a Greek princess of Corinth. Medea takes vengeance on Jason by murdering his new wife as well as Medea's own two sons, after which she escapes to Athens.
${PLACE_ELEMENT} Outside the Royal Palace.
${DESCRIPTION_ELEMENT} In mythological Ancient Greece, in front of a modest house in Corinth, on the outskirts of a lavish royal palace where wedding preparations are under way. ${END_MARKER}

Using the examples above and the following logline and location name, complete location description.

${LOGLINE_MARKER}
`;

/**
 * Titles prompt
 */
medeaPrefixes.TITLES_PROMPT = `
Examples of alternative, original and descriptive titles for known play and film scripts.

Example 1.
${LOGLINE_ELEMENT} Ancient Greek tragedy based upon the myth of Jason and Medea. Medea, a former princess of the kingdom of Colchis, and the wife of Jason, finds her position in the Greek world threatened as Jason leaves her for a Greek princess of Corinth. Medea takes vengeance on Jason by murdering his new wife as well as her own two sons, after which she escapes to Athens.
${TITLE_ELEMENT} A Feminist Tale${END_MARKER}

Example 2.
${LOGLINE_ELEMENT} Ancient Greek tragedy that deals with Antigone's burial of her brother Polynices, in defiance of the laws of Creon and the state, and the tragic repercussions of her act of civil disobedience.
${TITLE_ELEMENT} In My Brother's Name${END_MARKER}

Example 3.
${LOGLINE_ELEMENT} Greek comedy that tells the story of the god Dionysus (also known to the Greeks as Bacchus) who, despairing of the current state of Athens' tragedians, travels to Hades with his slave Xanthias to bring Euripides back from the dead.
${TITLE_ELEMENT} Dionysus in Hades${END_MARKER}

Example 4.
${LOGLINE_ELEMENT}
`;

/**
 * Dialog prompt
 */
medeaPrefixes.DIALOG_PROMPT = `
Here is an example of description and scene dialogue from a classical play.

${PLACE_ELEMENT} Outside the Royal Palace.
${DESCRIPTION_ELEMENT} Before Medea's house in Corinth, near the royal palace of Creon.
${CHARACTERS_ELEMENT} Medea is the protagonist of the play. A sorceress and a princess, she fled her country and family to live with Jason in Corinth, where they established a family of two children and gained a favorable reputation. Jason has divorced Medea and taken up with a new family. Jason can be considered the play's villain, though his evil stems more from weakness than strength. A former adventurer, Jason abandons his wife, Medea, in order to marry the beautiful young daughter of Creon, King of Corinth, and fuels Medea to a revenge. The Messenger appears only once in the play to bear tragical news.
${PLOT_ELEMENT} Resolution.
${SUMMARY_ELEMENT} Ancient Greek tragedy based upon the myth of Jason and Medea. Medea, a former princess and the wife of Jason, finds her position in the Greek world threatened as Jason leaves Medea for a Greek princess of Corinth. Medea takes vengeance on Jason by murdering his new wife as well as Medea's own two sons, after which she escapes to Athens.
${PREVIOUS_ELEMENT} The Messenger frantically warns Medea to escape the city as soon as possible. The Messenger reveals that Medea has been identified as the murderer.
${BEAT_ELEMENT} The palace opens its doors, revealing Medea and the two dead children seated in a chariot drawn by dragons. Jason curses himself for having wed Medea and mourns his tragic losses. Medea denies Jason the right to a proper burial of his children. Medea flees to Athens and divines an unheroic death for Jason.

${DIALOG_MARKER} 

WOMEN OF CORINTH
Throw wide the doors and see thy children's murdered corpses.

JASON
Haste, ye slaves, loose the bolts, undo the fastenings, that
I may see the sight of twofold woe, my murdered sons and her, whose
blood in vengeance I will shed.  (MEDEA appears above the house, on
a chariot drawn by dragons; the children's corpses are beside her.)

MEDEA
Why shake those doors and attempt to loose their bolts, in
quest of the dead and me their murderess? From such toil desist. If
thou wouldst aught with me, say on, if so thou wilt; but never shalt
thou lay hand on me, so swift the steeds the sun, my father's sire,
to me doth give to save me from the hand of my foes.

JASON
Accursed woman! by gods, by me and all mankind abhorred as
never woman was, who hadst the heart to stab thy babes, thou their
mother, leaving me undone and childless; this hast thou done and still
dost gaze upon the sun and earth after this deed most impious. Curses
on thee! now perceive what then I missed in the day I brought thee,
fraught with doom, from thy home in a barbarian land to dwell in Hellas,
traitress to thy sire and to the land that nurtured thee.
Perish, vile sorceress, murderess of
thy babes! Whilst I must mourn my luckless fate, for I shall ne'er
enjoy my new-found bride, nor shall I have the children, whom I bred
and reared, alive to say the last farewell to me; nay, I have lost
them.

MEDEA
To this thy speech I could have made a long reply, but Father
Zeus knows well all I have done for thee, and the treatment thou hast
given me. Yet thou wert not ordained to scorn my love and lead a life
of joy in mockery of me, nor was thy royal bride nor Creon, who gave
thee a second wife, to thrust me from this land and rue it not. Wherefore,
if thou wilt, call me e'en a lioness, and Scylla, whose home is in
the Tyrrhene land; for I in turn have wrung thy heart, as well I might.

JASON
Thou, too, art grieved thyself, and sharest in my sorrow.

MEDEA
Be well assured I am; but it relieves my pain to know thou
canst not mock at me.

JASON
O my children, how vile a mother ye have found!

MEDEA
My sons, your father's feeble lust has been your ruin!

JASON
'Twas not my hand, at any rate, that slew them.

MEDEA
No, but thy foul treatment of me, and thy new marriage.

JASON
Didst think that marriage cause enough to murder them?

MEDEA
Dost think a woman counts this a trifling injury?

JASON
So she be self-restrained; but in thy eyes all is evil.

MEDEA
Thy sons are dead and gone. That will stab thy heart.
${END_MARKER} 

Using the example above and following description, write the dialogue of the scene.

`;
