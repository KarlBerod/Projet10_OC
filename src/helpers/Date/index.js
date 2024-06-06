export const MONTHS = {
  0: "janvier",
  1: "février",
  2: "mars",
  3: "avril",
  4: "mai",
  5: "juin",
  6: "juillet",
  7: "août",
  8: "septembre",
  9: "octobre",
  10: "novembre",
  11: "décembre",
};
// changes were maid to adapt the index of the months, index 0 did not exist causing january month to never display 
// and other months to be indexed by 1
export const getMonth = (date) => MONTHS[date.getMonth()];
