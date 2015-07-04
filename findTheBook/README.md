#Hitta boken

En webbapplikation för sökning av böcker där man söker genom att ange en författares namn. 
Resultatet visas i form av en lista med de 20 första förslagna resultaten.
Applikation använder sig av AJAX och REST för att hitta böckerna via LIBRIS API.

LIBRIS-specifikt lättvikts-API.
Xsearch är ett LIBRIS-specifikt lättvikts-API. 
Xsearch gör det möjligt att söka och få ut träfflistor och enskilda poster från LIBRIS i en rad olika format. 
API:et är baserat på HTTP-anrop som returnerar antingen XML eller text beroende på valt format. 
Alla format har utf-8 som teckenkodning. 
Bas-URL för API:et är http://libris.kb.se/xsearch till vilken nedanstående parametrar hängs på.
Källa: http://librishelp.libris.kb.se/help/xsearch_swe.jsp?open=tech

Kör
* Clone
* Öppna index.html i en webbläsare (Webbläsare som stöds: Google Chrome Version 43)

Sök bok genom att anger författarens efternamn
* Skriv in efternamnet på en författare, t ex Rowling. För en mer specificerad sökning ange även förnamn efter kommatecken t ex. Rowling, J.
* Listan med böcker visas enligt följande: efternamn, förnamn, år, titel
* Bläddra i listan med hjälp av piltangenterna och välj genom att tryckea på ENTER.
* Ditt val loggas med tid och datum under sökrutan.

