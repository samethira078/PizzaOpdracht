//Samet Hira
//Software Developer

//It starts a function and only succeeds to work if the user has pressed the button associated with the "onclick" line.
function pizzaBerekenen(){

/* Prompt for the user to enter a number per size.
If it's a number, it continues, if not, it keeps asking until the person enters a number. */
var small_pizza = prompt("Hoeveel Small Size pizza's wilt u?");
while(isNaN(small_pizza)){
small_pizza = prompt("Geen getal ingevoerd. Probeer het opnieuw: ");
}
var medium_pizza = prompt("Hoeveel Medium Size pizza's wilt u?");
while(isNaN(medium_pizza)){
medium_pizza = prompt("Geen getal ingevoerd. Probeer het opnieuw: ");
}
var large_pizza = prompt("Hoeveel Large Size pizza's wilt u?");
while(isNaN(large_pizza)){
large_pizza = prompt("Geen getal ingevoerd. Probeer het opnieuw: ");
}

//It calculates the price per size by multiplying the price by the quantity.
var small = Number(small_pizza) * 8;
var medium = Number(medium_pizza) * 10;
var large = Number(large_pizza) * 13;

//Delivery charges.
var verzendkosten = 3.99;

//Counts the sizes together.
var opgeteld = Number(small) + Number(medium) + Number(large);

//Adds the delivery charges to the total prize.
const TOTAAL = opgeteld + verzendkosten;

//Checks that the total price is less than 50 and not more than 50 to add delivery costs.
if(opgeteld < 50 || !opgeteld > 50){

//Shows the total calculated size prize to each dimension.
document.write("Kosten voor Small Pizza's in totaal: €" + small + "<br>");
document.write("Kosten voor Medium Pizza's in totaal: €" + medium + "<br>");
document.write("Kosten voor Large Pizza's in totaal: €" + large + "<br>");

//Shows the total prize including delivery costs.
document.write("<br>Totaal: €" + opgeteld + " met verzendkosten van €" + verzendkosten + " = €" + TOTAAL + "</br>");}

//If the customer ordered a total price of more than 50 euros, it continues with the same steps excluding delivery costs.
else{

//Shows the total calculated size prize to each dimension.
document.write("Kosten voor Small Pizza's in totaal: €" + small + "<br>");
document.write("Kosten voor Medium Pizza's in totaal: €" + medium + "<br>");
document.write("Kosten voor Large Pizza's in totaal: €" + large + "<br>");

//Total prize excluding delivery costs.
document.write("<br>Totaal: €" + opgeteld + "</br>");}
}