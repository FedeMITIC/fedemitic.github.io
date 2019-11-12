/**
 * Contains all the projects. Each project has:
 * ID :int - incremental, starting from 1,
 * name :string,
 * img :string,
 * desc :string - description for the card
 * extdesc :string - extended description for the project page (might contain html tags)
 * tags :array - available labels: personal, professional, university. Multiple lables may be present (alphabetically ordered)
 *
 */
const PROJECTS = {
  id: 1,
  name: "Elisa Viihde",
  desc: "bdbawbdaw",
  extdesc: "dbawawhdpawdawndoawodbabdabowd",
  tags: ["professional", "university"],
};

// const blocks the reassigning but still let other code to modify the object itself, so let's freeze it (shallow freeze though)
Object.freeze(PROJECTS);
