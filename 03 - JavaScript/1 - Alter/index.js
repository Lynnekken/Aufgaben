const alter = prompt ("Bitte gebe dein Alter ein");
const monate = alter * 12;
const tage = alter * 365;
const stunden = tage * 24;
//if (alter <= 0) {
//prompt("Fehlermeldung")
//}    
//else {
  //  prompt("Du bist " + monate + " Monate alt oder " + tage + " Tage alt oder " + stunden + " Stunden alt.");
//}

(alter <= 0) ? prompt ("Fehlermeldung") : prompt ("Du bist alt");
// bedinung  wahr?    dann prompt Fehlermeldung    ansonsten Prompt du bist alt


