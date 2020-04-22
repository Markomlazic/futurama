// Based on Udemy course: https://www.udemy.com/course/build-a-quiz-app-with-html-css-and-javascript/

const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

if (mostRecentScore < 50) {
  finalScore.innerText =
    "Wow! That was, kinda, bad! You realy don´t like Futurama, do you? Your score was only " +
    mostRecentScore +
    " points.";
} else if ((mostRecentScore > 50) & (mostRecentScore < 70)) {
  finalScore.innerText =
    "Good Work, but I guess you can do better. Your score was " +
    mostRecentScore +
    " points.";
} else {
  finalScore.innerText =
    "A true Fan! Bravo! Your scored " + mostRecentScore + " points!";
}
