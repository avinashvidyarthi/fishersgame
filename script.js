const fishersTypes = [
    { id: 0, type: 1, clicked: false, color: "#35bcdf" },
    { id: 1, type: 2, clicked: false, color: "#7172a9" },
    { id: 2, type: 3, clicked: false, color: "#0af22b" },
    { id: 3, type: 4, clicked: false, color: "#297047" },
    { id: 4, type: 5, clicked: false, color: "#6c3c62" },
    { id: 5, type: 6, clicked: false, color: "#372995" },
    { id: 6, type: 7, clicked: false, color: "#d5a6cf" },
    { id: 7, type: 8, clicked: false, color: "#1accd1" },
    { id: 8, type: 9, clicked: false, color: "#6eee85" },
    { id: 9, type: 10, clicked: false, color: "#6256b4" },
    { id: 10, type: 11, clicked: false, color: "#09ada4" },
    { id: 11, type: 12, clicked: false, color: "#d2329a" },
    { id: 12, type: 1, clicked: false, color: "#35bcdf" },
    { id: 13, type: 2, clicked: false, color: "#7172a9" },
    { id: 14, type: 3, clicked: false, color: "#0af22b" },
    { id: 15, type: 4, clicked: false, color: "#297047" },
    { id: 16, type: 5, clicked: false, color: "#6c3c62" },
    { id: 17, type: 6, clicked: false, color: "#372995" },
    { id: 18, type: 7, clicked: false, color: "#d5a6cf" },
    { id: 19, type: 8, clicked: false, color: "#1accd1" },
    { id: 20, type: 9, clicked: false, color: "#6eee85" },
    { id: 21, type: 10, clicked: false, color: "#6256b4" },
    { id: 22, type: 11, clicked: false, color: "#09ada4" },
    { id: 23, type: 12, clicked: false, color: "#d2329a" },
];

let clickedFishers = [];
let correctScore = 0;
let incorrectScore = 0;

const fisherArea = document.getElementById("fisher-area");
const correctScoreArea = document.getElementById("correct-score");
const incorrectScoreArea = document.getElementById("incorrect-score");
const firstBox = document.getElementById("first-box");
const secondBox = document.getElementById("second-box");

const failureDrumAudio = new Audio("./music/failure-drum.mp3");
const negativeBeepAudio = new Audio("./music/negative-beep.mp3");
const shortSuccessAudio = new Audio("./music/short-success.mp3");

const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

const shuffledFishersArray = shuffleArray(fishersTypes);

const renderBtns = () => {
    fisherArea.innerHTML = "";
    shuffledFishersArray.forEach(fisher => {
        fisherArea.innerHTML += `
            <div class="col-3 col-md-2 my-2">
                <button class="btn ${fisher.clicked ? "btn-secondary" : "btn-outline-secondary"} p-0" type="button" ${fisher.clicked ? "disabled" : ""} onclick="fisherClicked(${fisher.id})"> <img src="./images/fish-icon.png" height="60%" width="60%" ></button>
            </div>
        `
    });
}

const fisherClicked = (id) => {
    const index = shuffledFishersArray.findIndex(e => e.id === id);
    shuffledFishersArray[index].clicked = true;
    if (clickedFishers.length === 0) {
        clickedFishers.push({ ...shuffledFishersArray[index], index });
        firstBox.style.backgroundColor = shuffledFishersArray[index].color;
    } else if (clickedFishers.length === 1) {
        secondBox.style.backgroundColor = shuffledFishersArray[index].color;
        if (clickedFishers[0].type === shuffledFishersArray[index].type) {
            correctScore += 1;
            correctScoreArea.innerText = correctScore;
            shuffledFishersArray.splice(index, 1);
            const newIndexToBeDeleted = shuffledFishersArray.findIndex(e => e.id === clickedFishers[0].id);
            shuffledFishersArray.splice(newIndexToBeDeleted, 1);
            clickedFishers = [];
            shortSuccessAudio.play();
            if(shuffledFishersArray.length === 0 ){
                alert("You Win!!!");
            }
        } else {
            incorrectScore += 1;
            incorrectScoreArea.innerText = incorrectScore
            shuffledFishersArray[index].clicked = false;
            shuffledFishersArray[clickedFishers[0].index].clicked = false;
            clickedFishers = [];
            if (incorrectScore === 10) {
                negativeBeepAudio.play();
                alert("You are eliminated after 10 failed attempts!!");
                window.location.reload();
            }
            failureDrumAudio.play();
        }

        setTimeout(() => {
            firstBox.style.backgroundColor = null;
            secondBox.style.backgroundColor = null;
        }, 1000);
    } else {
        alert("Something went wrong!");
    }
    renderBtns();
}

renderBtns();

