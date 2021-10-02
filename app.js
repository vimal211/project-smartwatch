let msgBtn = document.getElementById("msgBtn");
let clockBtn = document.getElementById("clockBtn");
let musicBtn = document.getElementById("musicBtn");

let displayMsg = false;
let displaySong = false;
let displayClock = false;

let middle = document.getElementById("middle");
let msgContainer = document.getElementById("msg-conatiner");
let musContainer = document.getElementById("music-container");
let clockContainer = document.getElementById("clock-container");
//calculating time and displaying
function showTime() {
  let curDate = new Date();
  let curDay = curDate.getDay();
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  document.getElementById("day").innerText = week[curDay];

  let hours = curDate.getHours();
  let minutes = curDate.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let myTime = `${hours}:${minutes}`;
  document.getElementById("top").innerText = myTime;
  document.getElementById(
    "time"
  ).innerHTML = `${hours}<span>:</span>${minutes}`;
}

setInterval(showTime, 1000);

//displaying the message conatiner on click the button

msgBtn.addEventListener("click", function () {
  displaySong = false;
  displayClock = false;
  musContainer.style.display = "none";
  clockContainer.style.display = "none";
  if (displayMsg) {
    displayMsg = false;
    middle.style.display = "inherit";
    msgContainer.style.display = "none";
  } else {
    displayMsg = true;
    middle.style.display = "none";
    msgContainer.style.display = "inherit";

    let msg = `
        <div id="msg-list">
        <p id="java">Java</p>
        <p id="html">Html</p>
        <p id="css">Css</p>
        </div>`;

    msgContainer.innerHTML = msg;
    var java = document.getElementById("java");
    var html = document.getElementById("html");
    var css = document.getElementById("css");
  }

  //displaying the respective messages

  java.addEventListener("click", function () {
    document.getElementById("msg-list").style.display = "none";
    let javaMsg = `<p>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</p>`;
    msgContainer.innerHTML = javaMsg;
  });

  html.addEventListener("click", function () {
    document.getElementById("msg-list").style.display = "none";
    let htmlMsg = `<p>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser.</p>`;
    msgContainer.innerHTML = htmlMsg;
  });

  css.addEventListener("click", function () {
    document.getElementById("msg-list").style.display = "none";
    let cssMsg = `<p>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</p>`;
    msgContainer.innerHTML = cssMsg;
  });
});

//displaying music player
musicBtn.onclick = () => {
  displayMsg = false;
  displayClock = false;
  msgContainer.style.display = "none";
  clockContainer.style.display = "none";

  if (displaySong) {
    displaySong = false;
    middle.style.display = "inherit";
    musContainer.style.display = "none";
  } else {
    displaySong = true;
    middle.style.display = "none";
    musContainer.style.display = "inherit";
  }

  let fragment = `
  <div class="mus">
    <div class="music_top">
       <img id="img-src" src="./images/song1.jpg" alt="" srcset="">
       <audio id="song-src" controls>
          <source src="./songs/song1.mp3" type="audio/mp3">
       </audio>
    </div>
    <div class="music_bottom">
      <p id="song1" class="music_name">1. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Vera Mari &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp 4:14 </p>
      <p id="song2" class="music_name">2. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Jai Sulthan &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp 4:06 </p>
      <p id="song3" class="music_name">3. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Vaathi Coming &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3:48 </p>
      <p id="song4" class="music_name">4. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Chumma Kizhi &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3:50 </p>
  <div>
  </div>
  `;
  musContainer.innerHTML = fragment;

  let song1 = document.getElementById("song1");
  let song2 = document.getElementById("song2");
  let song3 = document.getElementById("song3");
  let song4 = document.getElementById("song4");

  let imgSrc = document.getElementById("img-src");
  let songSrc = document.getElementById("song-src");

  //changing audio and image source on clicking tha song title
  song1.onclick = () => {
    imgSrc.setAttribute("src", `./images/song1.jpg`);
    songSrc.setAttribute("src", `./songs/song1.mp3`);
    songSrc.play();
  };
  song2.onclick = () => {
    imgSrc.setAttribute("src", `./images/song2.jpg`);
    songSrc.setAttribute("src", `./songs/song2.mp3`);
    songSrc.play();
  };
  song3.onclick = () => {
    imgSrc.setAttribute("src", `./images/song3.jpg`);
    songSrc.setAttribute("src", `./songs/song3.mp3`);
    songSrc.play();
  };
  song4.onclick = () => {
    imgSrc.setAttribute("src", `./images/song4.jpg`);
    songSrc.setAttribute("src", `./songs/song4.mp3`);
    songSrc.play();
  };
};

//displaying Timer
clockBtn.onclick = () => {
  displayMsg = false;
  displaySong = false;
  msgContainer.style.display = "none";
  musContainer.style.display = "none";
  if (displayClock) {
    displayClock = false;
    middle.style.display = "inherit";
    clockContainer.style.display = "none";
  } else {
    displayClock = true;
    middle.style.display = "none";
    clockContainer.style.display = "inherit";
    let clockFragment = `
    <div class="clockMain">
       <h2 id="timer">00:00:00</h2>
       <p id="mark">00:00:00</p>
       <div class="clock_bottom">
          <i id="resetBtn" class="fas fa-redo-alt"></i>
          <i id="playBtn" class="fas fa-play"></i>
          <i id="pauseBtn" class="fas fa-pause"></i>
          <i id="markBtn" class="fas fa-flag"></i>
       </div>
    </div>
    `;
    clockContainer.innerHTML = clockFragment;

    let play = document.getElementById("playBtn");
    let pause = document.getElementById("pauseBtn");
    let reset = document.getElementById("resetBtn");
    let mark = document.getElementById("markBtn");
    let timer = document.getElementById("timer");
    var interval;

    //adding functions to the buttons
    play.onclick = () => {
      play.style.display = "none";
      pause.style.display = "inherit";
      timeP = false;
      clearInterval(interval);
      interval = setInterval(timerStart, 18);
    };

    pause.onclick = () => {
      pause.style.display = "none";
      play.style.display = "inherit";
      timeP = true;
      timerStart();
    };

    reset.onclick = () => {
      play.style.display = "inherit";
      pause.style.display = "none";
      resetTimer();
    };

    mark.onclick = () => {
      document.getElementById("mark").innerHTML = timer.innerHTML;
    };

    let milli = 0;
    let min = 0;
    let sec = 0;
    let timeP = false;

    function timerStart() {
      if (timeP == false) {
        milli = parseInt(milli) + 1;
        if (milli == 60) {
          milli = 0;
          sec = parseInt(sec) + 1;
        }
        if (sec == 60) {
          sec = 0;
          min = parseInt(min) + 1;
        }
      }
      show(min, sec, milli);
    }

    function show(min, sec, milli) {
      if (min >= 0 && min < 10) {
        min = "0" + min;
      }
      if (sec >= 0 && sec < 10) {
        sec = "0" + sec;
      }
      if (milli >= 0 && milli < 10) {
        milli = "0" + milli;
      }
      timer.innerHTML = `${min}:${sec}:${milli}`;
    }

    function resetTimer() {
      clearInterval(interval);
      milli = 0;
      sec = 0;
      min = 0;
      timer.innerHTML = "00:00:00";
      document.getElementById("mark").innerHTML = "00:00:00";
    }
  }
};
