

const body = document.querySelector('body');
// skapar body element med en 4loop och ger värde på 1-5 
//  lägger på text för skriva ut rad.
//storleken på raderna ändras med att jag gångar 1 med 7

for (let i = 0; i < 6; i++) {
    const h3 = document.createElement('h3');
    body.appendChild(h3);
    h3.innerText = "Rad " + i;
    h3.style.textAlign = 'center';
    const textStorlek = i * 7;
    h3.style.fontSize = `${textStorlek}px`;
// försöker få ihop en snygg färg haha. här kan man sitta länge och testa sig fram
    const light = 90 - (i * 10);
    h3.style.backgroundColor = `hsl(${light}, 100%, ${light}%)`;

}

// array med 10 värden
let num = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];
//unordered list med container  DIV
let ul = document.createElement("ul"),
    container = document.createElement("div");
body.appendChild(ul);




body.appendChild(container);
// i container väljer jag flex för kunna få det centrerat 
// med flex evenly och en border runt container.
container.style.display = "flex";
container.style.border = "1px solid black";
container.style.justifyContent = "space-evenly"

for (let i = 0; i < 3; i++) { // startar med for loop som ger sätter ut 3 unorded listor där jag får in all text i
    let ul3 = document.createElement("ul");
    container.appendChild(ul3);
    ul3.style.listStyle = "none";
    ul3.style.border = "1rem solid blue";
    ul3.style.padding = "0";
    ul3.style.width = "4rem";
    ul3.style.background = "green";


    if (i === 0) {//for loop med en lista på tio nummer.
        for (let i = 0; i < 10; i++) {
            let li = document.createElement("li");
            ul3.appendChild(li);
            li.innerHTML = i;//skriver ut mitt värde
            li.style.textAlign = "left";
            //modelus värdet med 2 alltså varannan blir vit 
            if (i % 2) {
                li.style.background = "white";
            }// 4 blir samma som min bakgrund  = grön
            else if (i == 4) {
                li.style.background = "transparent";
            }// de andra blir vit och svarta
            else {
                li.style.background = "black";
                li.style.color = "white";
            }
        }
    }
    else if (i === 1) { // andra loopen som gör samma som första 
        for (let i = 10; i > 0; i--) {
            let li = document.createElement("li");
            ul3.appendChild(li);
            li.innerHTML = i;
            li.style.textAlign = "center";
            if (i % 2) { 
                li.style.background = "black";
                li.style.color = "white";
            }
            else if (i === 8) { // väljer 8 som ska byta färg.
                li.style.background = "transparent";
            }
            else {
                li.style.background = "white";
            }
        }
    }
    else if (i === 2) { // sista där jag har en array där jag väljer ett värde ( char)
        for (let i = 0; i < num.length; i++) {

            let li = document.createElement("li");
            ul3.appendChild(li);
            li.innerHTML = num[i]; // skriver ut min nummer i en lista som jag skrivit innan
            li.style.textAlign = "right";
            if (i % 2) {
                li.style.background = "white";
            }
            else if (i === 6) { // väljer mitt sjätte värde som blir 'sex' ,eftersom jag har ett = tio i värde
                li.style.background = "transparent";
            }
            else {
                li.style.background = "black";
                li.style.color = "white";
            }
        }
    }

}

