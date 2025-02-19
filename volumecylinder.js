// volumecylinder.js
// This program calculates the volume of a cylinder given its diameter and height.

let diameter = 20; // Diameter of the base in meters
let height = 40;   // Height of the cylinder in meters

let radius = diameter / 2; // Convert diameter to radius
let volume = Math.PI * Math.pow(radius, 2) * height; // Volume formula: πr²h

console.log(`The volume of a cylinder with a diameter of ${diameter} meters and height of ${height} meters is ${volume.toFixed(2)} cubic meters.`);
