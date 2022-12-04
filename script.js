// let politicalPreference = null;
//
// let politicalJSON = {
//   'liberal': 'videolink.mp4',
//   'conservative': 'alternativevideolink.mp4'
// }


  let inputDiv = document.getElementById("userinputdiv");
document.addEventListener("DOMContentLoaded", function() {
  appear();
});

function appear() {
  // display = window.getComputedStyle(inputDiv).getPropertyValue("display");
  visibility = window.getComputedStyle(inputDiv).getPropertyValue("visibility");
  opacity = window.getComputedStyle(inputDiv).getPropertyValue("opacity");
  if (visibility === "hidden") {
    inputDiv.style.visibility = "visible";
  }
  if (opacity === "0") {
    inputDiv.style.opacity = "1";
  }
  document.addEventListener('wheel', preventScroll, {passive: false});
  function preventScroll(e){
    if (window.getComputedStyle(inputDiv).getPropertyValue("visibility") == "visible") {
      e.preventDefault();
      e.stopPropagation();
    }
  }
};

let inputName = '';
let inputBirthDay = '';
let inputBirthMonth = '';
let inputBirthYear = '';
let inputPolitical = '';
let inputZodiac = '';

var submitButton = document.getElementById("submitbutton");
submitButton.addEventListener("click", function () {
  storeUserInfoAndClosePopup();
});

function storeUserInfoAndClosePopup(){
  inputName = document.getElementById('namebox').value.trim();
  errorMessage = document.getElementById('errormessage');
  if ('' == inputName) {
    errorMessage.innerText = "Please fill out the form.";
    return;
  }
  dayE = document.getElementById('daydropdown');
  monthE = document.getElementById('monthdropdown');
  yearE = document.getElementById('yeardropdown');
  inputBirthDay = dayE.options[dayE.selectedIndex].text;
  inputBirthMonth = monthE.options[monthE.selectedIndex].text;
  inputBirthYear = yearE.options[yearE.selectedIndex].text;


  if (inputBirthYear >= 1997) {
    videoList = [
      "https://www.w3schools.com/html/mov_bbb.mp4",
      "alfred.mov",
      "https://www.w3schools.com/html/mov_bbb.mp4",
      "alfred.mov"
    ]
  } else if (inputBirthYear >= 1972) {
    videoList = [
      "https://www.w3schools.com/html/mov_bbb.mp4",
      "https://www.w3schools.com/html/mov_bbb.mp4",
      "https://www.w3schools.com/html/mov_bbb.mp4",
      "https://www.w3schools.com/html/mov_bbb.mp4"
    ]
  } else {
    videoList = [
      "https://www.w3schools.com/html/mov_bbb.mp4",
      "https://www.w3schools.com/html/mov_bbb.mp4",
      "https://www.w3schools.com/html/mov_bbb.mp4",
      "https://www.w3schools.com/html/mov_bbb.mp4"
    ]
  }

  inputZodiac = getZodiac(inputBirthYear, inputBirthMonth, inputBirthDay);

  politicalE = document.getElementById('politicaldropdown');
  inputPolitical = politicalE.options[politicalE.selectedIndex].text;

  inputDiv.style.visibility = "hidden";
};

function getZodiac(y, m, d) {
  let end = y.toString() + '-' + m.toString() + '-' + d.toString();
  let start = y.toString() + '-1-1';
  let nthDayOfYear = (new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24) + 1;

  let zodiac = ''
  if (nthDayOfYear <= 19) {
      zodiac = 'Capricorn';
  } else if (nthDayOfYear <= 49) {
      zodiac = 'Aquarius';
  } else if (nthDayOfYear <= 80) {
      zodiac = 'Pisces';
  } else if (nthDayOfYear <= 110) {
      zodiac = 'Aries';
  } else if (nthDayOfYear <= 141) {
      zodiac = 'Taurus';
  } else if (nthDayOfYear <= 172) {
      zodiac = 'Gemini';
  } else if (nthDayOfYear <= 204) {
      zodiac = 'Cancer';
  } else if (nthDayOfYear <= 235) {
      zodiac = 'Leo';
  } else if (nthDayOfYear <= 266) {
      zodiac = 'Virgo';
  } else if (nthDayOfYear <= 296) {
      zodiac = 'Libra';
  } else if (nthDayOfYear <= 326) {
      zodiac = 'Scorpio';
  } else if (nthDayOfYear <= 356) {
      zodiac = 'Sagittarius';
  } else {
      zodiac = 'Capricorn';
  }
  return zodiac;
}


// function wait(ms){
//    var start = new Date().getTime();
//    var end = start;
//    while(end < start + ms) {
//      end = new Date().getTime();
//   }
// }

// function submitData() {
//   let age = document.getElementById("textEntryBox1").text;
//   politicalPreference = document.getElementById("politicalPreferenceBox").value;
// }

// let video1 = "https://www.w3schools.com/html/mov_bbb.mp4"
// let video2 = "alfred.mov"
// let video3 = "https://www.w3schools.com/html/mov_bbb.mp4"
// let video4 = "https://www.w3schools.com/html/mov_bbb.mp4"
//
// let videoAds = [video1, video2, video3, video4];

let videoList = [];


let hasHeaderBeenClicked = {
  'header1': false,
  'header2': false,
  'header3': false,
  'header4': false,
  'header5': false,
  'header6': false,
  'header7': false,
  'header0': false
}

let whatVideoNumberGoesWithWhatHeader = {
  'header1': 0,
  'header3': 1,
  'header5': 2,
  'header7': 3
}

var headerButton = document.getElementsByClassName("headerbutton");
var i;
var videoIsPlayingCurrently = false;

for (i = 0; i < headerButton.length; i++) {
  headerButton[i].addEventListener("click", function() {
    let videoToWatch = null;
    if (this.id in whatVideoNumberGoesWithWhatHeader) {
      videoToWatch = whatVideoNumberGoesWithWhatHeader[this.id];
    }
    if (hasHeaderBeenClicked[this.id] == false && videoToWatch != null) {
      var videoAd = document.getElementById("videoad");
      videoIsPlayingCurrently = true;
      videoAd.src = videoList[videoToWatch];
      console.log(videoAd.src);
      videoAd.style.display = "block";
      videoAd.pause();
      videoAd.currentTime = 0;
      videoAd.load();

        window.scroll(0, 9);

        document.addEventListener('wheel', preventScroll, {passive: false});
        function preventScroll(e){
          if (videoIsPlayingCurrently) {
            e.preventDefault();
            e.stopPropagation();
          }
        }

      videoAd.addEventListener('ended', e => {
      videoAd.style.display = "none";
      videoIsPlayingCurrently = false;
      });
    }
    hasHeaderBeenClicked[this.id] = true;



    // window.open("https://www.w3schools.com/html/mov_bbb.mp4");
    // alert('Your webpage will resume after the video has finished playing.');
    // wait(10000);

  this.classList.toggle("active");
  var content = this.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }

  if (content.style.maxHeight){
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
  });
}
