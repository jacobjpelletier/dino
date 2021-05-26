    // Jacob Pelletier - Udacity Intermediate JavaScript - Project 1.

    /** dino data
     * - use data from json file to create dino children from parent
     * **/
    const dinoData = {
        "Dinos": [
            {
                "species": "Triceratops",
                "weight": 13000,
                "height": 114,
                "diet": "herbavor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "First discovered in 1889 by Othniel Charles Marsh"
            },
            {
                "species": "TyrannosaurusRex",
                "weight": 11905,
                "height": 144,
                "diet": "carnivor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "The largest known skull measures in at 5 feet long."
            },
            {
                "species": "Anklyosaurus",
                "weight": 10500,
                "height": 55,
                "diet": "herbavor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "Anklyosaurus survived for approximately 135 million years."
            },
            {
                "species": "Brachiosaurus",
                "weight": 70000,
                "height": 372,
                "diet": "herbavor",
                "where": "North America",
                "when": "Late Jurasic",
                "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
            },
            {
                "species": "Stegosaurus",
                "weight": 11600,
                "height": 79,
                "diet": "herbavor",
                "where": "North America, Europe, Asia",
                "when": "Late Jurasic to Early Cretaceous",
                "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
            },
            {
                "species": "Elasmosaurus",
                "weight": 16000,
                "height": 59,
                "diet": "carnivor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
            },
            {
                "species": "Pteranodon",
                "weight": 44,
                "height": 20,
                "diet": "carnivor",
                "where": "North America",
                "when": "Late Cretaceous",
                "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
            },
            {
                "species": "Pigeon",
                "weight": 0.5,
                "height": 9,
                "diet": "herbavor",
                "where": "World Wide",
                "when": "Holocene",
                "fact": "All birds are living dinosaurs."
            }
        ]
    }

    /** Dino Constructor
     *  - constructor for creating new dino objects
     *  - contains data for dinos
     */
    function dinoConstructor(data) {
        this.species = data.species;
        this.weight = data.weight;
        this.height = data.height;
        this.diet = data.diet;
        this.where = data.where;
        this.when = data.when;
        this.fact = data.fact;
    }

    /** Dino Prototype
     *  - prototype for dinos
     *  - contains methods for dino objects
     * **/
    const dinoPrototype = {
        vowels: ['a', 'e', 'i', 'o', 'u'],
        // Create Dino Compare Method 1: weight
        // NOTE: Weight in JSON file is in lbs, height in inches.
        compareWeight: function cw(person) {
            const article = this.vowels.includes(this.species.charAt(0).toLowerCase()) ? "an" : "a";
            if (person.weight <= this.weight) {
                return (`You weigh ${Math.round(this.weight / person.weight)} times less than ${article} ${this.species}`);
            } else if (person.weight > this.weight) {
                return(`You weigh ${Math.round(person.weight/this.weight)} times more than ${article} ${this.species}`);
            }
        },
        // Create Dino Compare Method 2: height
        // NOTE: Weight in JSON file is in lbs, height in inches.
        compareHeight: function ch(person) {
            const article = this.vowels.includes(this.species.charAt(0).toLowerCase()) ? "An" : "A";
            console.log(person.height);
            if (person.height <= this.height) {
                return (`${article} ${this.species} is ${Math.round(this.height / person.height)} times taller than you.`);
            } else if (person.height > this.height) {
                return (`${article} ${this.species} is ${Math.round(person.height/this.height)} times shorter than you.`);
            }
        },
        // Create Dino Compare Method 3: diet
        // NOTE: Weight in JSON file is in lbs, height in inches.
        compareDiet: function cd(person) {
            const article = this.vowels.includes(this.diet.charAt(0).toLowerCase()) ? "an" : "a";
            if (this.diet === person.diet){
                return(`You and ${this.species} share the same diet!`);
            } else {
                return(`You are ${article} ${person.diet} while ${this.species}s are ${this.diet}s.`);
            }
        },
    }

    /** Assign prototype methods to objects with dino data **/
    dinoConstructor.prototype = dinoPrototype;

    /** Populate an array of dino objects from json data
     * - this array of objects will be iterated through to create dino grid
     * **/
    // array of dinos
    dinoArray = [];
    // loop through dinoData array of objects, instantiating dino objects from data within
    dinoData.Dinos.forEach(dino => {
        dinoArray.push(new dinoConstructor(dino));
    });

    /** Create Human Object
     * - constructor for human object
     * **/
    function human(name, weight, height, diet){
        this.species = "human";
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
    }
    /** Use IIFE to:
     *  1. Get human data from form,
     *  2. Generate Tiles for each Dino in Array,
     *  3. Add tiles to DOM,
     *  4. Remove form from screen.
     *
     *  - By encapsulating all these functions within the IIFE, user data of new human object remains private from
     *    the rest of the program.
     *  - Note: requirements necessitate a check for errors.
     * **/
    // On button click, prepare and display infographic
    document.getElementById('btn').addEventListener('click', evaluate);
    // Use IIFE to get human data from form
    function evaluate() { (function (){
        if (document.getElementById('name').value === "") {         // catch name input errors
            document.getElementById('error').innerHTML = '<p>Please enter a name.</p>';
            return;
        } else if (document.getElementById('feet').value <= 0 &&
            document.getElementById('inches').value <= 0) {         // catch height input errors
                document.getElementById('error').innerHTML = '<p>Please enter a height greater than 0</p>';
                return;
        } else if(document.getElementById('weight').value <= 0) {   // catch weight input errors
            document.getElementById('error').innerHTML = '<p>Please enter a weight greater than 0</p>';
            return;
        } else {
            console.log(document.getElementById('feet').value);
            console.log(document.getElementById('inches').value);
            // no input errors, continue with creation of new human object from form data
            const newUser = new human(document.getElementById('name').value,
                (document.getElementById('weight').value),
                Number((document.getElementById('feet').value)*12 +
                    Number(document.getElementById('inches').value)),
                document.getElementById('diet').value,
            )

            // Remove form from screen
            document.getElementById('dino-compare').hidden = true;

            // loop through array of dino objects and add them to grid
            for (let i = 0; i < dinoArray.length; i += 1){
                // if middle tile is reached, place human object
                if (i == 4){
                    addDinoDiv(newUser);
                }
                // add next dino object in array
                addDinoDiv(dinoArray[i], newUser);
            };
        }
    })();};

    /* Takes in an object, creates a div for this object, adds this div to grid.
    *   Does ALL the work of each individual dino div:
    *   1. create div containing:
    *       a. add header with name
    *       b. add image
    *       c. add fact
    *   2. add div completed to DOM
    * */
    function addDinoDiv(object1, object2=undefined){
        // 1. creat div
        let dinoGrid = document.getElementById('grid');
        let newDiv = document.createElement('div');
        newDiv.classList.add("grid-item");                              // add class
        // a. add header
        let newHeader = document.createElement('h3');
        if (object1.species === "human"){
            newHeader.innerHTML = `${object1.name}`;
        } else {
            newHeader.innerHTML = `${object1.species}`;
        }
        newDiv.appendChild(newHeader);
        // b. add image
        let dinoName = object1.species.toLowerCase();                    // format name for image search
        let newImg = document.createElement('img');             // create new img element
        newImg.src = `./images/${dinoName}.png`;                        // add src property to new img element
        newDiv.appendChild(newImg);                                     // add new img to div
        // c. add a random fact
        if (object1.species !== "human"){
            let newFact = document.createElement('p');
            let random = Math.floor((Math.random() * 6) + 1);
            let chosenFact = "";
            switch(random){
                case 1:
                    chosenFact = object1.compareHeight(object2);
                    break;
                case 2:
                    chosenFact = object1.compareWeight(object2);
                    break;
                case 3:
                    chosenFact = object1.compareDiet(object2);
                    break;
                case 4:
                    chosenFact = object1.fact;
                    break;
                case 5:
                    chosenFact = `${object1.species} lived in the ${object1.when} period.`;
                    break;
                case 6:
                    chosenFact = `${object1.species} could be found in ${object1.where}.`;
                    break;
            }
            newFact.innerHTML = chosenFact;
            newDiv.appendChild(newFact);
        }
        // 2. add completed div with class=grid-item to id=grid
        dinoGrid.appendChild(newDiv);
    }




