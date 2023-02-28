# Dynamische Object erstellen mit Eingaben

Wir möchten ein Objekt mittels einer Objektvorlage (*prototype*) erstellen. Diese Objekte werden typisch für *JSON*- Dateien später in einer *Liste* gespeichert. Außerdem werden wir mit Eingaben die *properties* in unseren Objekt verändern. Das Ergebnis wird ausgegeben kann so aussehen.

![Ausgabe](./img/ausgabe.PNG);

Um die Sache zu erschweren, wird die Anleitung in ungeordneter Reihenfolge angegeben. Du musst zuerst die Anleitung richtig ordnen! 😋

* Erstelle einen *prototype* eines Objekts mit entsprechendes *properties* (*key: value*). Dieser *prototype* kann mit der *object initializer* Methode erstellt werden.

* Das *prototype* sollte einen *key* mit **name** (und Platzhalter für *value*), einen *key* mit **age** (und Platzhalter für *value*) und eine *function* namens **logCredentials**, mit der die beiden **values** von **name** und **age** in der Konsole ausgegeben werden, haben.

* Als letztes lässt du dir nach der Iteration die *Objekte* des *arrays* einzeln ausgeben 

* Füge beide *Objekte* einem *array* hinzu

* Iteriere mit einer der Schleifenmöglichkeiten (*foreach,for of, for...*) über das *array* 
* Gebe das *array* aus. Gebe dir außerdem die *Objekte* einzeln mittls *index* Zugriff aus.

* Erstelle mittels `Object.create(prototypeObject)` zwei *Objekte* und speichere diese jeweils in *Variablen*.

* Greife während der Iteration auf das gerade durchlaufende Element zu. Lasse dir es zuerst ausgeben. Versuche dann die *properties* mittels **Objektzugriff auf die Schlüssel** mit festen Werten zu belegen. Nach dem Schleifendurchlauf haben beide *Objekte* im *array* für die *keys* **name** und **age** die gleichen Werte.

* Nun soll während der Iteration die einzelnen **properties** nicht statisch vergeben werden, sondern dynamisch durch Eingaben. So soll man einen Namen eingeben können und dieser soll als *value* für den *key* **name** gespeichert werden. Gleiches gilt auch für **age**.

* Da für die Eingabe des Alters auch irgendein *String* eingeben werden kann, soll mittels des *conditional operators* geprüft werden of eine Zahl eingegeben wurde. Falls dies nicht geschieht soll **NaN** als Wert gespeichert werden in dem *key **age**.
*Tipp*:
    `something typeof something`

