// =====================================
// SECRET PASSCODE
// =====================================

const SECRET_PASSCODE = "120126";

let enteredPin = "";
let currentMessageType = "";

const passcodeScreen = document.getElementById("passcodeScreen");
const envelopeScreen = document.getElementById("envelopeScreen");
const choicesScreen = document.getElementById("choicesScreen");
const letterScreen = document.getElementById("letterScreen");

const pinDots = document.querySelectorAll(".pin-dot");
const pinMessage = document.getElementById("pinMessage");
const unlockButton = document.getElementById("unlockButton");

const envelope = document.getElementById("envelope");

const messageTitle = document.getElementById("messageTitle");
const letterText = document.getElementById("letterText");

const replyText = document.getElementById("replyText");
const replyStatus = document.getElementById("replyStatus");


// =====================================
// CHANGE THIS TO YOUR OWN EMAIL
// =====================================

const YOUR_EMAIL = "your-email@example.com";


// =====================================
// LETTER CONTENTS
// =====================================

const messages = {

    sorry: {
        title: "I'm Sorry, My babi 🥀",
        text: `Hi, babi. 🖤

I just want to say sorry for the times I hurt you,
for the words I said without thinking, and for the
moments when I failed to understand you.

I'm not perfect, and I know that loving each other
doesn't mean we will never make mistakes.

I'm sorry if I made you feel sad, unappreciated,
or unloved. I want to learn from my mistakes
and become better for our relationship.

I hope we can talk about the things that hurt us
and understand each other a little more.

i'm sorry bab kung may mga time na hindi mo nagugustohan 
yung attitude ko at yung pag uugali ko, sorry kung minsan 
nasasaktan kita sa mga pinag gagagawa ko.

sorry sa mga araw na nasasaktan ka dahil sakin, alam 
ko naman kasi na may nararamdaman ka rin at pinipilit 
ko yun intindihin.

sorry kung mahirap akong intindihin o paintindihin, 
sa mga panahong subrang gulo na para satin.

I'm sorry bab if i failed being your girlfriend

You mean so much to me, babi.
I'm sorry, and Iloveyoumuch. 🖤`
    },

    tampo: {
        title: "unsaid thoughts:< 🖤",
        text: `Love, may mga times na nagtatampo ako sa'yo
pero hindi ko alam kung paano sasabihin. :<

Minsan gusto ko lang na mapansin mo kapag
tahimik ako, kapag iba na yung tono ko,
o kapag kailangan ko lang ng konting lambing.

Minsan gusto ko lang maramdaman na
naiintindihan mo rin ako kahit hindi ko pa
nasasabi lahat.

May times na nasasaktan ako pero pinipili kong
manahimik kasi ayokong mauwi tayo sa away.

Mas gusto kong pag-usapan natin ang problema
kaysa hayaan nating lumaki ang tampuhan natin.

Hindi ko kailangan na maging perfect ka.
Gusto ko lang na pareho tayong willing makinig,
umintindi, at mag-adjust para sa isa't isa.

napagtanto kong hindi pala kita mababago. 
hindi ko rin pala dapat paulit ulit na intindihin 
ang mga bagay na ayaw mo namang ayusin.

hindi ko rin pala dapat gawin ang lahat para
lang manatili ka. hindi ko rin pala dapat 
itinuturo sa'yo kung paano ako dapat mahalin.

Iloveyou, babi. Sana kapag may tampuhan tayo,
huwag nating kalimutang kakampi tayo ng isa't isa. 🥀`
    },

    random: {
        title: "A Little Reminder For You 💌",
        text: `Hi, babi ! 🖤

T loved you more than words can express, and God knows
how much you mean to me. I'm willing to give everything
that I can.

Mamahalin kita hangga't kaya ko. I'll choose
you over everything, over anyone, every single time.

I'll always be there for you to cheer you up, to support
you, to listen to you, at maging number one na proud say
sa lahat ng achievements mo, mallit man o malaki and
no matter what happens, l'il always be here.

I want to be your comfort, your safe place, and your home.
Yung taong pwede mong takbuhan kapag pagod ka na sa mundo.
hindi man ako perpekto at marami man akong pagkukulang,
I promise to always try my best for you.

araw-araw pipilin kita, mamahalin kita, at aalagaan kita.
will grow with you, fight for us, and stay by your side.
kasi ikaw yung taong gusto kong makasama habang buhay ikaw
yung pahinga ko, yung saya ko, at yung future ko.
And as long as God allows me, I will love you with all my
heart today, tomorrow, and always.

gustohin ko mang sukuan kana dahil sa bigat nang 
nararamdaman ko, pero mas nangingibabaw yung ppagmamahal
ko sayo na para bang kahit kahit anong sakit okay lang.

just wanna say last words
I'm proud of you, even for the little things
that you think nobody notices.

If today feels difficult, take a deep breath.
You don't have to figure everything out at once.

If you're sad, you can tell me.
If you're tired, you can rest.
If you need someone, I hope you remember
that you can come to me, too.

Thank you for being part of my life.
You make ordinary days feel more special.

And if you ever wonder whether I still love you,
here's your answer:

YES, BABI. IKAW PA RIN. ALWAYS. 🖤🥀`
    }

};


// =====================================
// SCREEN NAVIGATION
// =====================================

function showScreen(screenToShow) {

    [
        passcodeScreen,
        envelopeScreen,
        choicesScreen,
        letterScreen
    ].forEach(screen => {
        screen.classList.add("hidden");
    });

    screenToShow.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// =====================================
// UPDATE PASSCODE DOTS
// =====================================

function updatePinDisplay() {

    pinDots.forEach((dot, index) => {
        dot.classList.toggle(
            "filled",
            index < enteredPin.length
        );
    });

}


// =====================================
// KEYPAD
// =====================================

document.querySelector(".keypad").addEventListener("click", event => {

    const button = event.target.closest("[data-number]");

    if (!button) return;

    if (enteredPin.length >= 6) return;

    enteredPin += button.dataset.number;

    updatePinDisplay();

    pinMessage.textContent = "Enter the secret numbers 🖤";

});


// CLEAR ALL NUMBERS

document.getElementById("clearPin").addEventListener("click", () => {

    enteredPin = "";

    updatePinDisplay();

    pinMessage.textContent = "Enter the secret numbers 🖤";

});


// DELETE LAST NUMBER

document.getElementById("deletePin").addEventListener("click", () => {

    enteredPin = enteredPin.slice(0, -1);

    updatePinDisplay();

    pinMessage.textContent = "Enter the secret numbers 🖤";

});


// =====================================
// UNLOCK LETTER
// =====================================

unlockButton.addEventListener("click", () => {

    if (enteredPin.length !== 6) {

        pinMessage.textContent = "Please enter all 6 numbers. 🖤";

        return;
    }

    if (enteredPin !== SECRET_PASSCODE) {

        pinMessage.textContent = "Wrong passcode. Try again, love. 🥀";

        enteredPin = "";

        updatePinDisplay();

        return;
    }

    pinMessage.textContent = "Correct! Your letter is unlocked. 💌";

    unlockButton.disabled = true;

    setTimeout(() => {

        envelope.classList.remove("is-open");

        showScreen(envelopeScreen);

        unlockButton.disabled = false;

    }, 500);

});


// =====================================
// OPEN THE ENVELOPE
// =====================================

function openMail() {

    envelope.classList.add("is-open");

    const continueButton = document.getElementById("continueButton");

    continueButton.disabled = true;

    continueButton.textContent = "Opening your mail...";

    setTimeout(() => {

        showScreen(choicesScreen);

        continueButton.disabled = false;

        continueButton.textContent = "Open My Mail 💌";

    }, 800);

}

document.getElementById("openEnvelope")
    .addEventListener("click", openMail);

document.getElementById("continueButton")
    .addEventListener("click", openMail);


// =====================================
// CHOOSE A LETTER
// =====================================

choicesScreen.addEventListener("click", event => {

    const button = event.target.closest("[data-message]");

    if (!button) return;

    currentMessageType = button.dataset.message;

    const selectedMessage = messages[currentMessageType];

    if (!selectedMessage) return;

    messageTitle.textContent = selectedMessage.title;

    letterText.textContent = selectedMessage.text;

    replyText.value = "";

    replyStatus.textContent = "";

    showScreen(letterScreen);

});


// =====================================
// BACK BUTTONS
// =====================================

document.getElementById("backToEnvelope")
    .addEventListener("click", () => {

        envelope.classList.remove("is-open");

        showScreen(envelopeScreen);

    });


document.getElementById("backToChoices")
    .addEventListener("click", () => {

        showScreen(choicesScreen);

    });


// =====================================
// SEND REPLY THROUGH EMAIL
// =====================================

document.getElementById("sendReply")
    .addEventListener("click", () => {

        const reply = replyText.value.trim();

        if (!reply) {

            replyStatus.textContent =
                "Write a little message first, love. 🖤";

            replyText.focus();

            return;
        }

        if (
            !YOUR_EMAIL ||
            YOUR_EMAIL === "delfinocessy@gmail.com" ||
            !YOUR_EMAIL.includes("@")
        ) {

            replyStatus.textContent =
                "The owner needs to set the reply email in script.js first.";

            return;
        }

        const subject = encodeURIComponent(
            "My reply to your " + messages[currentMessageType].title
        );

        const body = encodeURIComponent(
            "Hi, love! 🖤\n\n" +
            "My reply to your letter:\n\n" +
            reply +
            "\n\nSent from your Secret Letter website. 💌"
        );

        const mailto =
            "mailto:" + YOUR_EMAIL +
            "?subject=" + subject +
            "&body=" + body;

        window.location.href = mailto;

    });