const FuturamaData = {
  0: {
    name: "Filip J Fry",
    age: 25,
    job: "Delivery Boy",
    bio:
      "Philip J Fry was born in 1974. He suffered 3 heart attacks in high school after drinking 100 cans of Cola a week. After dropping out of Coney Island college he took three years off during which he continuously watched TV, knowing that someday it would help him save the world. He then got a job delivering pizzas for Panuccis Pizza during which, on December 31 1999, he got frozen while delivering a pizza to Applied Cryogenics. Leaving his two-timing girlfriend Michelle behind he woke up on December 31 2999. Professor Farnsworth is his great (x30) nephew. In the 20th century he had one brother called Yancy who missed Fry so much when he was frozen, presumed dead, that he named his son Philip to 'carry on the memory of his lost brother'. Currently, he lives with Bender in the Robot Arms Appartments and enjoys watching TV and drinking Slurm. Although he had affairs with Amy before, the woman he is really into is Leela who acknowledges his feelings but won't return them.",
    img: "../img/chr/0.png"
  },
  1: {
    name: "Turanga Leela",
    age: "unknown",
    job: "Ship's Captain",
    bio:
      "Leela is the only person from her species that lives on earth. She was brought up in an orphanage and attended high school where she was a bit of an outcast for having oneeye and went dateless to her prom. She took up kick boxing and other similar sports to make up for the lack of friends. Whether she attended college is unknown. She later got a job as a fate assignment officer and after a while met Fry while she was assigning a career to him. He convinced her to quit and she was then offered a job, along with Fry and Bender, on the Planet Express delivery crew where she impressed Professor Farnsworth enough for him to make her captain. She still has problems with men and often gets jealous of Amy's popularity among the opposite sex. She has a soft spot for Fry but is unsure of anything further than that, due to Fry's clumsy advances.",
    img: "../img/chr/1.webp"
  },
  2: {
    name: "Bender Bending Rodriquez",
    age: "Head: 1057, body: 4",
    job: "Ship's Cook",
    bio:
      "Bender is a Unit 22 Bending Unit and was his mothers 1729 th son. His father was killed by a can opener. Comprising of 40% Zinc and 40% Titanium he later attended Bending State college where he majored in Bending and minored in Robo-American studies. He became a legend for his pranks while being part of the house Epsilon rho rho. He then took up a successful career in bending Girders but tried to kill himself when he found out they were for suicide booths. He was saved by Fry and later took up the job of ships cook at Planet Express. His other pastimes include watching TV, smoking cigars and stealing. To be able to function properly he needs the chemical energy from alcohol, so excessive drinking is mandatory or he will become sober and unable to control his body. Magnets stuck to his head make him sing like a folk singer.",
    img: "../img/chr/2.png"
  },
  3: {
    name: "Hubert J Farnsworth",
    age: 160,
    job: "Inventor, Lecturer, P.E Founder",
    bio:
      "Professor Hubert Farnsworth is the oldest living member of The Academy of Professors. He was born in 2841. He currently owns the Planet Express delivery firm so as to fund his inventing. He also lectures at Mars University on the mathematics of quantum neutrino fields (he made up the name so no one would dare take it). He is technically 160 years old but to avoid being picked up by the sunset squad and taken to the near death star he says he is 150. Every person who lives past 160 on earth is taken there and used as an energy source in the same way people were in the film 'The Matrix' He is Fry's great (x30) nephew and has a clone called Cubert.",
    img: "../img/chr/3.jpg"
  },
  4: {
    name: "John Zoidberg",
    age: "unknown",
    job: "Company Doctor",
    bio:
      "Dr Zoidberg left his home planet to become a rich doctor but instead he became the Planet Express staff doctor. He went to high school where he made people laugh by having barnacles on his face. When it is time for mating season on his planet, Decapod 10, he becomes angry and violent as well as producing a large fin atop his head. But once his species has mated they die. His species have their small brains in their rump. He has a cousin Zoidfarb and an Uncle, Harold Zoid, who is a silent hologram star. He has a desire to be famous wether it's in the movies or the stand up comedy circuit.",
    img: "../img/chr/4.png"
  },
  5: {
    name: "Amy Wong",
    age: "unknown",
    job: "Planet Express Intern",
    bio:
      "Amy Wong is a young Mars University student interning at Planet Express. She is daughter to two very pushy parents, Inez and Leo, who are desperate for her to produce a grandchild for them. Her family come from a very rich background. She wears sweats most of the time mainly to go against her parents comments about dressing like a real lady. But she does have a large, very fashionable wardrobe usually for clubbing and attracting handsome men. Her man-eating style often gets her into conflict with Leela but they are mostly friends. She is currently dating DOOP Lieutenant Kif Kroker",
    img: "../img/chr/5.png"
  },
  6: {
    name: "Hermes Conrad",
    age: 25,
    job: "37th Class Bureaucrat",
    bio:
      "Hermes Conrad is a certified 37th class bureaucrat and is married to LaBarbara Conrad. He is an expert limboist, so much so he represented earth in the 2980 Olympics but his competition was tragically cut short when a fan, trying to be just like Hermes, limboed too low and broke his back. Feeling partly responsible, Hermes never limboed again. Even from an early age Hermes was identified as a potential bureaucrat. While professor Farnsworth owns the Planet Express company, Hermes is more involved in the day to day running of it, handling the finances, notifying next of kin etc. He was previously a 36th class bureaucrat. Hermes and LaBarbara have a son called Dwight.",
    img: "../img/chr/6.png"
  }
};

// Define character variables
var chrName = document.getElementById("chr-name");
var chrAge = document.getElementById("chr-age");
var chrJob = document.getElementById("chr-job");
var chrBio = document.getElementById("chr-bio");
var chrImg = document.getElementById("chr-img");

// Change character displayed on click

function changeCharacter(clicked) {
  chrName.innerHTML = "Name: " + FuturamaData[clicked].name;
  chrAge.innerHTML = "Age: " + FuturamaData[clicked].age;
  chrJob.innerHTML = "Occupation: " + FuturamaData[clicked].job;
  chrBio.innerHTML = FuturamaData[clicked].bio;
  chrImg.src = FuturamaData[clicked].img;
}
