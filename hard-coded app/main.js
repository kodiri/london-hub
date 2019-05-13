
/* accesing the object
[0] for location
[1] for price range
[2] for purpose
[3] for rating
console.log(Object.values(hotels)[0][2])
 */
let hotels = {
    theRitz: ["Mayfair", 500, "family", 1],
    aceHotel: ["Shoreditch", 400, "holiday", 2],
    theDeanStreetTownHouse: ["Soho", 200, "leisure", 3],
    shangriLaHotelatTheShard: ["London Bridge", 420, "family", 4],
    claridges: ["Mayfair", 210, "holiday", 5],
    theNed: ["Mansion House", 150, "leisure", 6],
    theLangham: ["Marylebone", 350, "family", 1],
    theMandrake: ["Fitzrovia", 150, "holiday", 2],
    thePilgrim: ["Paddington", 220, "leisure", 3],
    kettnersTownHouse: ["Soho", 180, "family", 4],
    laSuiteWest: ["Bayswater", 300, "holiday", 5],
    theDorchester: ["Mayfair", 410, "leisure", 6],
    nobuHotel: ["Shoreditch", 460, "family", 1],
    boundary: ["Shoreditch", 100, "holiday", 2],
    theCurtain: ["Shoreditch", 380, "leisure", 2]
};

function searchHotels() {
    let locationInput = document.getElementById('selectLocationHotels').value;
    let priceRangeInput = document.getElementById('sliderVal').value;
    let holidayTypeInput = document.getElementById('purpose').value;
    let ratingInput = document.getElementById('ratingHotels').value;

    for (i = 0; i < Object.values(hotels).length; i++) {
        let location = Object.values(hotels)[i][0];
        let value = Object.values(hotels)[i][1];
        let type = Object.values(hotels)[i][2];
        let rating = Object.values(hotels)[i][3];

        if (locationInput == location) {
            if (value >= 100 && value <= priceRangeInput) {
                if (holidayTypeInput === type) {
                    if (ratingInput == rating) {
                        let result = Object.keys(hotels)[i];
                        document.getElementById("result").innerHTML = result;
                    }
                    else {
                        document.getElementById("result").innerHTML = 'No Results! Try Arain!';
                    }
                }
                else {
                    document.getElementById("result").innerHTML = 'No Results! Try Arain!';
                }
            }
            else {
                document.getElementById("result").innerHTML = 'No Results! Try Arain!';
            }
        }
        else {
            document.getElementById("result").innerHTML = 'No Results! Try Arain!';
        }

    }
}


let restaurants = {
    theBarbary: ["Convent Garden", "italian", 1],
    kiln: ["Soho", "asian", 2],
    hoppers: ["Soho", "mediterranean", 3],
    bao: ["Soho", "italian", 4],
    socialEatingHouse: ["Soho", "asian", 5],
    barrafina: ["Covent Garden", "mediterranean", 6],
    counterCulture: ["Clapham", "italian", 1],
    scully: ["St James", "asian", 2],
    smokeAndSalt: ["Brixton", "mediterranean", 3],
    padella: ["South Bank", "italian", 4],
    temper: ["Soho", "asian", 5],
    theCounteAtSabor: ["Mayfair", "mediterranean", 6],
    tandoorChopHouse: ["Covent Garden", "italian", 1],
    smokingGoatShoreditch: ["Shoreditch", "asian", 2],
    xu: ["China Town", "mediterranean", 2]
};

var result;


function searchRestaurants() {
    let locationInput = document.getElementById('selectLocation').value;
    let kitchenInput = document.getElementById('kitchenSelector').value;
    let ratingInput = document.getElementById('ratingRestaurants').value;

    for (i = 0; i < Object.values(restaurants).length; i++) {
        let locationDB = Object.values(restaurants)[i][0];
        let kitchenDB = Object.values(restaurants)[i][1];
        let ratingDB = Object.values(restaurants)[i][2];

        if (locationInput == locationDB) {
            if (kitchenInput == kitchenDB) {
                if (ratingInput == ratingDB) {
                    result = Object.keys(restaurants)[i];
                    return result;
                    //document.getElementById("result").innerHTML = result;
                }
                else {
                    document.getElementById("result").innerHTML = 'No Results! Try Again!';
                }
            }
            else {
                document.getElementById("result").innerHTML = 'No Results! Try Again!';
            }
        }
        else {
            document.getElementById("result").innerHTML = 'No Results! Try Again!';
        }
    }
}

setTimeout(console.log(result), 15000);


function toggleButtons(id) {
    let x = document.getElementById(id);
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


function evalSlider() {
    let sliderValue = document.getElementById("price").value;
    document.getElementById("sliderVal").innerHTML = sliderValue;
}
