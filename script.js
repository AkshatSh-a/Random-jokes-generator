const jokes = [
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call cheese that isn't yours? Nacho cheese.",
    "Why couldn't the bicycle stand up by itself? It was two tired!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised."
];

const jokeBtn = document.getElementById('jokeBtn');
const jokeDisplay = document.getElementById('joke');
const pepeGif = document.getElementById('pepeGif');

let gifToggle = true;

jokeBtn.addEventListener('click', function() {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    jokeDisplay.innerText = randomJoke;

    if (gifToggle) {
        pepeGif.src = 'pepe.gif';
    } else {
        pepeGif.src = 'pepe-not-funny.gif';
    }
    
    pepeGif.style.display = 'block';
    gifToggle = !gifToggle;
});
