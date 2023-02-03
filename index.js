// // Create a function that will play songs from list everytime when I  click the button play;

// - create list at HTML UR;
// - create a storage for list of fav song;- array with songs.
// - get button 
// - create function attached to button
// - call function; 

let mySongs = ["Miley Cyrus, Flowers", "Taylor Swift, Anti-Hero2", "Mariah Carey, All I Want for Christmas Is You", "The Weekend Blinding Lights", "Umbrealla Rihanna"];

document.querySelector("button").onclick = playMusic;

function playMusic() {
    var index = Math.floor(Math.random() * 5);
    console.log(mySongs[index]);
}

