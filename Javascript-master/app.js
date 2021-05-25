    /** import data
     * - use data from json file to create dino children from parent
     * **/
    const dinoData = require("./dino.json");

    /** Dino Constructor
     *  -
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
     *  -
     * **/
    const dinoPrototype = {
        vowels: ['a', 'e', 'i', 'o', 'u'],
        // Create Dino Compare Method 1: weight
        // NOTE: Weight in JSON file is in lbs, height in inches.
        compareWeight: function cw(person) {
            const article = this.vowels.includes(this.species.charAt(0)) ? "an" : "a";
            if (person.weight <= this.weight){
                return(`You weigh ${this.weight/person.weight} times less than ${article} ${this.species}`);
            } else {
                return(`You weigh ${person.weight/this.weight} times more than ${article} ${this.species}`);
            }
        },
        // Create Dino Compare Method 2: height
        // NOTE: Weight in JSON file is in lbs, height in inches.
        compareHeight: function ch(person) {
            const article = this.vowels.includes(this.species.charAt(0)) ? "an" : "a";
            if (person.height <= this.height){
                article.charAt(0).toUpperCase();
                return(`${article} ${this.species} is ${this.height/person.height} times taller than you.`);
            } else {
                return(`You are ${this.height/person.height} times taller than ${article} ${this.species}.`);
            }
        },
        // Create Dino Compare Method 3: diet
        // NOTE: Weight in JSON file is in lbs, height in inches.
    }

    /** Assign prototype methods to objects with dino data **/
    dinoConstructor.prototype = dinoPrototype;

    /** Populate an array of dino objects from json data
     * -
     * **/
    // array of dinos
    dinoArray = [];
    // loop through dinoData array of objects, instantiating dino objects from data within
    dinoData.Dinos.forEach(dino => {
        dinoArray.push(new dinoConstructor(dino));
    });

    /** Create Human Object **/
    function human(data) {
        weight: 66,
    };

    /* Use IIFE to get human data from form */

    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
