let audioPlayer = document.querySelector(".music-player");
let form = document.querySelector(".search-form");
let results = document.querySelector(".results");

// 2. Create your `onSubmit` event for getting the user’s search term
function onSubmit() {
  console.log(form.search.value);
  event.preventDefault();
  searchSoundCloud(form.search.value);
};


function searchSoundCloud(song) {
  console.log("insideSearchFunction");
  fetch("http://api.soundcloud.com/tracks/?client_id=8538a1744a7fdaa59981232897501e04&q=" + song)
  .then(function(response) {
    response.json().then(function(data) {
      console.log(data);
      renderResults(data);
    });
  });
}


function renderResults(data) {
  console.log("hello");
  for (var i = 0; i < data.length; i++) {
    // data[i].title;
  let text = '<div class="box"><div class="pic"><img src="#"></div><div class="artistTwo">artist name</div><div class="title">'+data[i].title+'</div></div>';


  results.insertAdjacentHTML("beforeend", text);
  }
}

// 5. Create a way to listen for a click that will play the song in the audio play