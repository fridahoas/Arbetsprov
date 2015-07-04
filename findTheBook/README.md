#Hitta boken

En webbapplikation för sökning av böcker där man söker genom att ange en författares namn. 
Resultatet visas i form av en lista med de 20 första förslagna resultaten.
Applikation använder sig av AJAX och REST för att hitta böckerna via Xsearch.

Xsearch är ett LIBRIS-specifikt lättvikts-API. Xsearch gör det möjligt att söka och få ut träfflistor och enskilda poster från LIBRIS i en rad olika format. 
API:et är baserat på HTTP-anrop som returnerar antingen XML eller text beroende på valt format. 
Källa: http://librishelp.libris.kb.se/help/xsearch_swe.jsp?open=tech

Kör
* Klona projektet
* Öppna index.html en webbläsare (se intruktioner nedan)

Sök efter en bok i Firefox
* Skriv in en titel eller efternamn eller förnamn på författaren
* Listan med böcker visas nedanför inputfältet, max 20 resultat visas.
* Bläddra i listan med hjälp av piltangenterna och välj genom att trycka på ENTER.
* Ditt val loggas med tid och datum under sökrutan.

Sök efter en bok i Chrome eller Internet Explorer ( sökning enbart på författare )
* Skriv in ett efternamn på en författare. För mer specifik sökning, fyll på med förnamn ex: Rowling, J. K.
* Listan med böcker visas nedanför inputfältet, max 20 resultat visas.
* Bläddra i listan med hjälp av piltangenterna och välj genom att trycka på ENTER
* Ditt val loggas med tid och datum under sökrutan.