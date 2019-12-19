Idéen
Idéen med dette projekt er at få kameraet på computeren til at genkende antallet af ansigter, der dukker op på skærmen. Baseret på antallet af ansigter på skærmen, skal der vises en farve lys, på en Philips HUE LED pærer. 
Idéen er på den måde at jo flere der er på skærmen, jo mere ændre pæren sig, hvilket altså vil sige at lyset bliver mere dynamisk og spændende. Denne feature kunne eksempelvis være sjov at kunne vise frem under fester og lignende.

https://digitalteknik.it.slotshaven.dk/?p=3804
Vores program

På diagrammet ses kommunikationen mellem vores program og API’erne. Vores program sender data til Face API, som så sender ny data tilbage til vores program. Derefter sender vores program, så de data videre til HUE API, som styre pærens farve/lysstyrke. 
Face-API
https://github.com/justadudewhohacks/face-api.js/
Machine learning algoritme (Det smarte)
(vi bruger tinyfacedetector modellen)
Vi benytter os af et andet projekt, der hedder “Face-API”. Dette projekt har et API man kan hente på github, så man kan bruge denne til at finde ud af om der er et ansigt i det givne billede. Dette projekt er en udvikling på projektet “Tiny Yolo V2”. Der er mange forskellige “indstillinger” man kan bruge med dette API, blandt andet er der “SSD mobilenet V1” og “tinyface”. Dette API er blevet trænet med ca. 14 tusinde træningsbilleder og er sågar blevet trænet til at kunne finde ansigter der mangler nogle unikke træk ved ansigtet. Dette er ikke den første version af dette API. I forhold til andre ansigtsgenkendere er denne 
“Tinyface” er, af dem som vores programlaver har, den mindst intensive ansigtsdetector, dette betyder dog også at den er lidt værere til at finde ansigter der er længere væk fra kameraet. Det er dog ifølge produktudvikleren dit “GO-TO”  ansigtsdetektor til “mobile devices and limited clients”.
Hue-API
Der findes nogle LED lamper, som kan ændre farve når der gives bestemte kommandoer. Dem vi bruger, hedder “Phillips hue”. Disse kan man give kommandoer med et API, der hedder “HueAPI”. Der er en referenceliste til HueAPI, som kan bruges til at skrive selve koden til at manipulere lyset. Der er mange forskellige måder at manipulere lyset, og vi har valgt at bruge farve manipulation, hvilket kræver en bestemt type LED lampe fra hue serien.


Test
Vi har præsenteret vores program foran klassen og til denne fremvisning gik alt som det skulle og programmet virkede efter hensigten. Der var ikke nogen kommentarer til eventuelle fejl, mangler eller ændringer, hvilket må betyde at vores program er af god kvalitet.

Følgende er nogle billeder af programmet i anvendelse.

Her ses programmet, hvor der ikke genkendes nogle ansigter i programmet (Casper dækker ansigtet)

Her ses programmet, hvor der er 1 genkendt ansigt (Caspers)

Her ses programmet, hvor der er genkendt to ansigter (Casper og Natasja)

GDPR
Med denne installation har vi nogle forbehold vi er nødt til at tage højde for. Vi kan ikke bare sætte et program op et hvilket som helst sted, der genkender ansigter og evt gemmer den, derfor vil der skulle være nogle ændringer i forhold til funktionaliteten, sådan at den ikke gemmer billederne eller fastslå nogle specifikke forhold, hvor programmet kan benyttes f.eks. Til private fester og lignende.
