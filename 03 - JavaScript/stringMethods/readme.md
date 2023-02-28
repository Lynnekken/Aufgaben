# String Methoden
Strings bringen viele vordefinierte Methoden mit, um mit diesen zu arbeiten.

```js 
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(txt.length)     // 26
```
```js 
let str = "Apple, Banana, Kiwi";
str.slice(7, 13)     // Returns Banana
```
https://www.w3schools.com/js/js_string_methods.asp

## Aufgaben

* Speichere deinen Namen in einer Variablen. Du solltest diesen selbst eingeben können.

* Slice den ersten Buchstaben aus deinem Namen und speichere diesen in einer zweiten Variablen z.B **firstChar**.   
Du solltest relativ schnell Suchergebnisse finden, wenn du Schlagworte wie **string** **slice** **javascript/js** eingibst.

* Mach aus dem ersten Buchstaben einen Großbuchstaben. Auch hierfür gibt es eine Methode.

* Slice ab dem zweiten Buchstaben aus deinem Namen bis zum Ende deines Namens. Du solltest die Methode aus dem zweiten Schritt wiederverwenden und den slice String in einer dritten Variablen z.B **restName** speichern.

* Verbinde nun den ersten Buchstaben mit dem Rest des Namens.

* Lass dir das Ergebnis mit der **alert** Funktion ausgeben z.B **Hallo, Kermit**