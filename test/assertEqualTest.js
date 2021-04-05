const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 9);

assertEqual(([5,6,7]), 5);
assertEqual((["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual((1), 1);
assertEqual([], 1);