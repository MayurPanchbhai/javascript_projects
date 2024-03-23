    let btns = document.getElementsByClassName("button");
    let faces = document.getElementsByClassName("Dice-face");

    let n = 6;

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function() {
            n = Math.floor(Math.random() * 6) + 1;
            console.log(n);

            // Hide all faces first
            for (let j = 0; j < 6; j++) {
                faces[j].style.display = "none";
            }
            
            // Display the selected face
            faces[n - 1].style.display = "block";
        });
    }


    // function rollDice() {
    //     var showDice = document.getElementById('showDice');
        
    //     showDice.style.transform="translate(50px, 100px);"
    
    //   }
      