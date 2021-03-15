const btn = document.getElementById("button");

btn.addEventListener('click', function(){

    convert();

});

function convert() {
    
/*     
    Ex: Convert height of 5 feet 2 inches to centimeters.

    First, convert 5 feet to inches: 5 feet × 12 inches/foot = 60 inches
    Add up our inches: 60 + 2 = 62 inches
    Convert inches to cm: 62 inches × 2.54 cm/inch = 157.48 cm 
*/
    var feet = Number(document.getElementById("feet").value);
    var inches = Number(document.getElementById("inches").value);

    var cm = 2.54 * ((feet * 12) + inches);
    
    document.getElementById("output__area").innerHTML = cm + " cm";

}

