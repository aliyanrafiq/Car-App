var cars = {
    honda: {
        civic: {
            reborn: {
                name: "Honda Civic Reborn",
                year: 2023,
                price: 2000000,
                colors: ["red", "black", "white"],
                gates: 4,
                wheels: 4,
            }
        },
        accord: {
            name: "Honda Accord",
            year: 2020,
            price: 1500000,
            colors: ["red", "black", "white"],
            gates: 4,
            wheels: 4,
        }
    },
    toyota: {
        camry: {
            standard: {
                name: "Toyota Camry Standard",
                year: 2023,
                price: 2500000,
                colors: ["blue", "silver", "gray"],
                gates: 4,
                wheels: 4,
            }
        }
    },
    ford: {
        mustang: {
            gt: {
                name: "Ford Mustang GT",
                year: 2023,
                price: 3000000,
                colors: ["red", "black", "yellow"],
                gates: 2,
                wheels: 4,
            }
        }
    }
};

var search = document.getElementById("search")

for (var key in cars){
    search.innerHTML += `
    <option value="${key}">${key.toUpperCase()}</option>
    `
    console.log(key)
}