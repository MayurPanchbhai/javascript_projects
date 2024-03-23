// Initialize roll history array
let historyList = [];

// Get the roll history element
const rollHistoryEl = document.getElementById("roll-history");

// Get the button elements
let btns = document.getElementsByClassName("button");

// Add event listeners to buttons
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        // Roll the dice
        let n = Math.floor(Math.random() * 6) + 1;

        // Update dice face display
        setTimeout(function(){
            updateDiceFace(n);
        },1800)
        

        // Apply rolling animation to the dice div
        const diceDiv = document.querySelector('.showDice');
        if (diceDiv) {
            // Restart animation
            diceDiv.style.animation = 'none';
            void diceDiv.offsetWidth; // Trigger reflow
            diceDiv.style.animation = 'rollDice 2s ease-in-out forwards';
        }

        // Delay roll history update until after animation completes
        setTimeout(function() {
            // Update roll history
            updateRollHistory(n);
            // Update dice image
            updateDiceImage(n);
        }, 2000); // Adjust timeout to match animation duration
    });
}

// Function to update the dice face display
function updateDiceFace(n) {
    // Hide all faces first
    for (let j = 0; j < 6; j++) {
        document.getElementById(`diceFace${j + 1}`).style.display = "none";
    }
    
    // Display the selected face
    document.getElementById(`diceFace${n}`).style.display = "block";
}

// Function to update the roll history
function updateRollHistory(n) {
    // Add current roll to history
    historyList.push(n);
    
    // Clear current roll history
    rollHistoryEl.innerHTML = "";
    
    // Update roll history display
    for (let i = 0; i < historyList.length; i++) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i + 1}: <img src="../images/dice/${historyList[i]}.png" alt="Dice ${historyList[i]}">`;
        rollHistoryEl.appendChild(listItem);
    }
}

// Function to update the dice image in showDice div
function updateDiceImage(n) {
    const diceImageDiv = document.querySelector('.showDice img');
    if (diceImageDiv) {
        diceImageDiv.src = `../images/dice/${n}.png`;
    }
}
