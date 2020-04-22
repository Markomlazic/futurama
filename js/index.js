// rotating each letter of h1
new CircleType(document.getElementById("text-bend")).radius(360);

// var text holds values for caption. First two seasons
var text = [
  "In color",
  "In Hypno-Vision",
  "As seen on TV",
  "Presented in BC [Brain Control] Where Available",
  "Featuring gratuitous alien nudity",
  "Loading...",
  "Presented in double vision (where drunk)",
  "Mr. Bender's Wardrobe By Robotany 500",
  "Condemned by the Space Pope",
  "	Filmed On Location",
  "Transmitido en Martian en SAP",
  "Proudly Made on Earth",
  "	Live from Omicron Persei 8",
  "Made from meat by-products",
  ">>Not Y3K Compliant<<",
  "	Based On a True Story",
  "From the network that brought you 'The Simpsons'",
  "The show that watches back",
  "Not Based On The Novel By James Fenimore Cooper",
  "Nominated For Three Glemmys",
  "This episode has been modified to fit your primitive screen",
  "Coming soon to an illegal DVD",
  "As foretold by Nostradamus",
  "A Stern Warning of Things to Come",
  "Simulcast on Crazy People's Fillings",
  "Larva-tested, pupa-approved",
  "For external use only",
  "Painstakingly drawn before a live audience",
  "Touch eyeballs to screen for cheap laser surgery",
  "Smell-O-Vision Users Insert Nose Tubes Now.",
  "Not a Substitute for Human Interaction",
  "Secreted by the Comedy Bee"
];

// displays one caption at a time
var counter = 0;
var elem = document.getElementById("title-caption");

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}

var inst = setInterval(change, 3000);
