let popoverContainerElement = document.getElementById("popoverContainer");

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
    document.addEventListener('wheel', preventScroll, {
        passive: false
    });

    function preventScroll(e) {
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
submitButton.addEventListener("click", function() {
    storeUserInfoAndClosePopup();
    targetAds();
});

function storeUserInfoAndClosePopup() {
    inputName = document.getElementById('namebox').value.trim();
    errorMessage = document.getElementById('errormessage');
    if ('' == inputName) {
        errorMessage.innerText = "Please fill out the form.";
        return;
    } else if (inputName.charAt(0).toLowerCase() == inputName.charAt(0).toUpperCase()) {
        errorMessage.innerText = "Your name must begin with a letter of the alphabet.";
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
            "iphone.mp4",
            "cereal.mp4",
            "shutterstock.mp4",
            "starbucks.mp4"
        ]
    } else if (inputBirthYear >= 1972) {
        videoList = [
            "ember.mp4",
            "shutterstock.mp4",
            "acrobat.mp4",
            "strong.mp4"
        ]
    } else {
        videoList = [
            "aleris.mp4",
            "coke.mp4",
            "retirementad.mp4",
            "homecare.mp4"
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


function targetAds() {
    let politicalAd = document.getElementById('politicalad');
    let politicalLink = document.getElementById('politicallink');
    let zodiacAd = document.getElementById('zodiacad');
    let nameAd = document.getElementById('namead');
    let nameLink = document.getElementById('namelink');
    let leftAdOne = document.getElementById('adleft1');
    let leftAdLinkOne = document.getElementById('leftlink1');
    let leftAdTwo = document.getElementById('adleft2');
    let leftAdLinkTwo = document.getElementById('leftlink2');

    if (inputZodiac == 'Capricorn') {
        zodiacAd.src = "capricorn.png"
    } else if (inputZodiac == 'Aquarius') {
        zodiacAd.src = "aquarius.png"
    } else if (inputZodiac == 'Pisces') {
        zodiacAd.src = "pisces.png"
    } else if (inputZodiac == 'Aries') {
        zodiacAd.src = "aries.png"
    } else if (inputZodiac == 'Taurus') {
        zodiacAd.src = "taurus.png"
    } else if (inputZodiac == 'Gemini') {
        zodiacAd.src = "gemini.png"
    } else if (inputZodiac == 'Cancer') {
        zodiacAd.src = "cancer.png"
    } else if (inputZodiac == 'Leo') {
        zodiacAd.src = "leo.png"
    } else if (inputZodiac == 'Virgo') {
        zodiacAd.src = "virgo.png"
    } else if (inputZodiac == 'Libra') {
        zodiacAd.src = "libra.png"
    } else if (inputZodiac == 'Scorpio') {
        zodiacAd.src = "scorpio.png"
    } else if (inputZodiac == 'Sagittarius') {
        zodiacAd.src = "sagittarius.png"
    }

    if (inputPolitical == 'Liberal') {
        politicalAd.src = 'max.png';
        politicalLink.setAttribute('href', 'https://www.dellapiaforny23.com/');
        leftAdOne.src = 'gravel.jpeg';
        leftAdLinkOne.setAttribute('href', 'https://gravelinstitute.org/');

    } else {
        politicalAd.src = 'prageru.jpeg';
        politicalLink.setAttribute('href', 'https://www.prageru.com/');
        leftAdOne.src = 'nicklang.png';
        leftAdLinkOne.setAttribute('href', 'https://nicklangworthy.com/');
    }

    let nameFirstLetter = inputName.charAt(0).toUpperCase();
    if (nameFirstLetter == 'A') {
        nameAd.src = "A.png";
    } else if (nameFirstLetter == 'B') {
        nameAd.src = "B.png";;
    } else if (nameFirstLetter == 'C') {
        nameAd.src = "C.png";;
    } else if (nameFirstLetter == 'D') {
        nameAd.src = "D.png";
    } else if (nameFirstLetter == 'E') {
        nameAd.src = "E.png";
    } else if (nameFirstLetter == 'F') {
        nameAd.src = "F.png";
    } else if (nameFirstLetter == 'G') {
        nameAd.src = "G.png";
    } else if (nameFirstLetter == 'H') {
        nameAd.src = "H.png";
    } else if (nameFirstLetter == 'I') {
        nameAd.src = "I.png";
    } else if (nameFirstLetter == 'J') {
        nameAd.src = "J.png";
    } else if (nameFirstLetter == 'K') {
        nameAd.src = "K.png";
    } else if (nameFirstLetter == 'L') {
        nameAd.src = "L.png";
    } else if (nameFirstLetter == 'M') {
        nameAd.src = "M.png";
    } else if (nameFirstLetter == 'N') {
        nameAd.src = "N.png";
    } else if (nameFirstLetter == 'O') {
        nameAd.src = "O.png";
    } else if (nameFirstLetter == 'P') {
        nameAd.src = "P.png";
    } else if (nameFirstLetter == 'Q') {
        nameAd.src = "Q.png";
    } else if (nameFirstLetter == 'R') {
        nameAd.src = "R.png";
    } else if (nameFirstLetter == 'S') {
        nameAd.src = "S.png";
    } else if (nameFirstLetter == 'T') {
        nameAd.src = "T.png";
    } else if (nameFirstLetter == 'U') {
        nameAd.src = "U.png";
    } else if (nameFirstLetter == 'V') {
        nameAd.src = "V.png";
    } else if (nameFirstLetter == 'W') {
        nameAd.src = "W.png";
    } else if (nameFirstLetter == 'X') {
        nameAd.src = "X.png";
    } else if (nameFirstLetter == 'Y') {
        nameAd.src = "Y.png";
    } else {
        nameAd.src = "Z.png"
    }
}



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
    'header2': 0,
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

            videoAd.style.display = "block";
            /* Also the popover container */
            popoverContainerElement.style.display = "block";
            videoAd.pause();
            videoAd.currentTime = 0;
            videoAd.load();


            document.addEventListener('wheel', preventScroll, {
                passive: false
            });

            function preventScroll(e) {
                if (videoIsPlayingCurrently) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            }

            videoAd.addEventListener('ended', e => {
                videoAd.style.display = "none";
                /* Also the popover container */
                popoverContainerElement.style.display = "none";
                videoIsPlayingCurrently = false;
            });
        }
        hasHeaderBeenClicked[this.id] = true;


        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
