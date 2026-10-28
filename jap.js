/* SAVED COUNT */

let count = Number(localStorage.getItem("naamJapCount")) || 0;

const target = 108;


/* SOUNDS */

const mantraSound = new Audio("om-namah-.mp3");

const bellSound = new Audio("templebell.mp3");

mantraSound.volume = 1.0;

bellSound.volume = 1.0;


/* SAVE COUNT */

function saveCount(){

    localStorage.setItem(
        "naamJapCount",
        count
    );

}


/* JAP */

function japKaro(){

    if(count >= target){

        return;

    }


    count = count + 1;


    /* SAVE AFTER EVERY JAP */

    saveCount();


    playMantra();

    updateCounter();


    /* TARGET COMPLETE */

    if(count === target){

        setTimeout(function(){

            playBell();

            document.getElementById("message").innerText =
                "108 जाप पूर्ण हुए 🙏🔔 हर हर महादेव 🔱";

        },500);

    }

}


/* MANTRA SOUND */

function playMantra(){

    mantraSound.currentTime = 0;

    mantraSound.play().catch(function(error){

        console.log(
            "Mantra sound play nahi ho saka:",
            error
        );

    });

}


/* BELL SOUND */

function playBell(){

    bellSound.currentTime = 0;

    bellSound.play().catch(function(error){

        console.log(
            "Bell sound play nahi ho saka:",
            error
        );

    });

}


/* UPDATE COUNTER */

function updateCounter(){

    document.getElementById("counter").innerText =
        count;


    document.getElementById("todayCount").innerText =
        count;


    let progress =
        (count / target) * 100;


    if(progress > 100){

        progress = 100;

    }


    document.getElementById("progressBar").style.width =
        progress + "%";


    document.getElementById("percentage").innerText =
        Math.floor(progress) + "%";


    let left =
        target - count;


    if(left < 0){

        left = 0;

    }


    document.getElementById("remaining").innerText =
        left;


    let message =
        document.getElementById("message");


    if(count === target){

        message.innerText =
            "108 जाप पूर्ण हुए 🙏 हर हर महादेव 🔱";

    }

    else if(count > 0){

        message.innerText =
            "ॐ नमः शिवाय 🙏";

    }

    else{

        message.innerText =
            "हर जाप के साथ मन को शांत करें 🙏";

    }

}


/* RESET */

function resetCounter(){

    let answer = confirm(
        "क्या आप Counter को 0 करना चाहते हैं?"
    );


    if(answer){

        count = 0;


        /* REMOVE SAVED COUNT */

        localStorage.removeItem(
            "naamJapCount"
        );


        updateCounter();

    }

}


/* LOAD SAVED COUNT */

updateCounter();