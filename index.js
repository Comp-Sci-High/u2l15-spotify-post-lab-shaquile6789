// U2L15: Spotify POST Request Lab

// Create a Playlist:

// 1. Look through the Spotify API Documentation and find the end point for creating a playlist.
// Update the variable below called `createPlaylistURL` and add the URL, the user_id will be 31s5fcbgzo3pkww6ancnzov63cjm
let createPlaylistURL = "https://api.spotify.com/v1/users/31s5fcbgzo3pkww6ancnzov63cjm/playlists";

// 2. The documentation describes how to create the request body. Using that information update the object below called `newPlaylistBody`
// Add the name of the playlist, make sure it's public, and add a description with your name and section (+ whatever else you want)

const newPlaylistBody = {
"name" : "Shaq playlist",
"description" : "songs",
"public" : true
};

// 3. Add `playlistData` as a parameter to the asynchronous function `createPlaylist`.

async function createPlaylist(playlistData) {

  // 4. Build out the options object.
  //    - Set the HTTP Method
  //    - Add the headers Authorization and Content-Type, the API Key will be on G-Chat. Format it like so: "Bearer <Your API Key>"
  //    - Add the `newPlaylistBody` object into the body, make sure you stringify it

  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer BQCbCUQNADA28SeT0V2vvTf1Rc-ZHbaX_xk4BRifyQBzSfwYJMgj6o-M-85Qv3jZZDc8wqIpfgwPBykDWvJTGlH1OKbqY6sNWYRNFgUD2smcSqWMpVpp7FqXUrELoofkTWIqJwRpCiMB_apQnBOwURZK88Hg2RsKQExwQ8Lf4zImJnE1agLOiSFcEnGfVlQHGdiscjng059EDeQHWNsaJhkBQBRix5huQEIruMZyvhxjxB6IyWm4LSUcfJ0uUU-Vf3GDFNw0sQoALpoweGvXHvGP-SVUXWFhx-7DOt1Xd1xR`,
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(playlistData),
  };
  

  // 5. Use fetch() to send a POST request using the `createPlaylistURL` and options object. Console log the response.
  const response = await fetch('https://api.spotify.com/v1/users/31s5fcbgzo3pkww6ancnzov63cjm/playlists', options);
  const data = await response.json();
  console.log(data)
}

// 6. Call your function `createPlaylist` with `newPlaylistBody` passed as the parameter. Take note of the ID it will be needed in the next request.
// Go to the Spotify Profile to see the playlist you created. (Or follow the URL in the response)
// https://open.spotify.com/user/31s5fcbgzo3pkww6ancnzov63cjm
createPlaylist(newPlaylistBody)


// Add Songs to Playlist:

// 1. Look through the Spotify API Documentation and find the end point for adding songs to a playlist.
// Update the variable below called `addingSongsURL` and add the URL, use the playlist_id that you recieved from the function above

let addingSongsURL = "https://api.spotify.com/playlists/77XIKbVF0d14XeOyhRLI7V/tracks";

// 2. Find 4 songs on spotify and add them to the songs array below. (If spotify is blocked use the example below, or ask Mr.Castro)
//    - The songs should be in the format: "spotify:track:<track_id>"
//    - Find the track id from the songs URL after track/ but before the queries
//    - Ex: https://open.spotify.com/track/6a6JDEQbXdxkWFRIA0pRqL?si=e9e0c29125a746f6 => spotify:track:6a6JDEQbXdxkWFRIA0pRqL

const songs = ["6I86RF3odBlcuZA9Vfjzeq", "6I86RF3odBlcuZA9Vfjzeq", "6I86RF3odBlcuZA9Vfjzeq", "6I86RF3odBlcuZA9Vfjzeq"];

// 3. The documentation describes how to create the request body. Using that information update the object below called `newSongsBody`
// Add the array `songs` into this object

const newSongsBody = {
 "uris": songs,
 "position": 0
};

// 4. Add `songData` as a parameter to the asynchronous function `addPlaylistSongs`.

async function addPlaylistSongs(songData) {

  // 5. Inside the function build out the options object.
  //    - Set the HTTP Method
  //    - Add the headers Authorization and Content-Type, the API Key will be on G-Chat. Format it like so: "Bearer <Your API Key>"
  //    - Add the `newSongsBody` object into the body, make sure you stringify it

  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer BQCbCUQNADA28SeT0V2vvTf1Rc-ZHbaX_xk4BRifyQBzSfwYJMgj6o-M-85Qv3jZZDc8wqIpfgwPBykDWvJTGlH1OKbqY6sNWYRNFgUD2smcSqWMpVpp7FqXUrELoofkTWIqJwRpCiMB_apQnBOwURZK88Hg2RsKQExwQ8Lf4zImJnE1agLOiSFcEnGfVlQHGdiscjng059EDeQHWNsaJhkBQBRix5huQEIruMZyvhxjxB6IyWm4LSUcfJ0uUU-Vf3GDFNw0sQoALpoweGvXHvGP-SVUXWFhx-7DOt1Xd1xR`,
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(songData),

    
  };

  // 6. Use fetch() to send a POST request using the `addingSongsURL` and options object. Console log the response.
const reponse = await fetch('https://api.spotify.com/playlists/77XIKbVF0d14XeOyhRLI7V/tracks', options)
const data = await reponse.json()
console.log(data)
}

// 7. Call your function `addPlaylistSongs` with `newSongsBody` passed as the parameter.
// Refresh the page to your playlist, you should see your 3 new songs.
addPlaylistSongs(newSongsBody)