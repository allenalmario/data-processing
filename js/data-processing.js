//use location object to access querystring (address bar)
const queryString = window.location.search;

let myData = '';

let myCart = ''; // will store card details
let myTotal = 0; // will store total cost

console.log(queryString);

if(queryString != ""){
    //separate querystring parameters
    const urlParams = new URLSearchParams(queryString);

    urlParams.forEach(function(value, key) {

        if(key == "Cart"){// process cart
            switch(value){
                case "Widget":
                    myCart += "Widget: $3.99<br />"
                    myTotal += 3.99;
                break;

                case "Sprocket":
                    myCart += "Sprocket: $5.99<br />"
                    myTotal += 5.99;
                break;

                case "Thingy":
                    myCart += "Thingy: $1.99<br />"
                    myTotal += 1.99;
                break;
            }
        }else{//build shipping info
            // will replace underscore with spaces
            key = key.split("_").join(" ");

            myData += `<p>${key}: ${value}</p>`;
        }
    });

    myCart = `
        <p><b>Cart Contents</b></p>
        <p>${myCart}</p>
        <p>Total: $${myTotal}</p>
    `;

    myData = myCart + "<p><b>Shipping Information</b></p>" + myData;

    myData += `<p><a href="index.html">CLEAR</a></p>`
    document.getElementById("output").innerHTML = myData;
}