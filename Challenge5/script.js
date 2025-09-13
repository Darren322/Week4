const { createElement } = require("react");



function generate_board() {

    //============================================================================
    // Task 1
    // Retrieve the friend name(s) from the 'friends' multi-select dropdown menu
    //============================================================================

    // Array to contain the names of user-selected friend(s)
    // For example, if the user selected 'Darryl' and 'Yin Kit',
    //   this array's value will be:
    //      [ 'darryl', 'yinkit' ]
    //
    let friends = []; // Initialize to empty

    friends = document.getElementById('friends');
    // YOUR CODE GOES HERE

    // Display user's selection in Developer Tools --> Console.
    console.log(friends);

    
    //============================================================================
    // Task 2
    // Given one or more selected friends and given 4 fruit names,
    //   generate a 'randomized' Array of finalized card names.
    // 
    // Card names are as follows:
    //    apple_brandon.png
    //    banana_brandon.png
    //    kiwi_brandon.png
    //    orange_brandon.png
    //
    // where 'brandon' can be replaced with another friend's name,
    // e.g.
    //    apple_nick.png
    // (and so on)
    //
    // Display all 4 fruit cards of one or more selected friends.
    //
    // NOTE: Each card must be displayed TWO and ONLY TWO times (thus, a "pair")
    //       (such that the user can attempt to 'match').
    //
    // Check out this utility function (declared at the bottom of this file)
    //   for randomizing the order of Array elements.
    //        shuffleArray()
    //============================================================================
    const fruits = [ 'apple', 'banana', 'kiwi', 'orange' ];

    
    // YOUR CODE GOES HERE
    const generateArr = () => {
        ret = [];
        count = 0;
        for(friend of friends) {
            if(friend.selected) {
                count += 1;
                for(fruit of fruits) {
                    const imgName = fruit + "_" + friend.value + ".png";
                    ret.push(imgName);
                }
                
            }
            
        }
        ret = ret.concat(ret);
        return ret;
    }
    const arr = shuffleArray(friends.length >= 1 ? generateArr() : "");
    





    //============================================================================
    // Task 3
    // Display the cards in <div id="game-board">
    //
    // For this, we will make use of Template Literal (using backticks).
    //
    // NOTE: The game board will always have 4 columns and N rows, where N denotes
    //       (number of selected friends) x 2.
    //
    //       For example, if I chose 'Brandon', 'Darryl', and 'Nick' (3 friends),
    //         then the newly generated game board will be
    //         6 (rows) by 4 (columns).
    //============================================================================
    const num_cols = fruits.length;
    const num_rows = friends.length * 2;

    console.log("# of columns: " + num_cols)
    console.log("# of rows: " + num_rows);


    // YOUR CODE GOES HERE


    // You will need to rewrite the value of this result_str (String).
    let result_str = `
        <div style='color: red'>
            <p>This is a sample HTML code that will replace the parent div's innerHTML!</p>
            <p>Instead of paragraph texts, you will display cards here.</p>
        </div>
    `;

    result_str = "<div>";

    for(i=0;i<arr.length;i+=4) {
        result_str += "<p class='row'>";
        for(x=i;x<(i+4);x++) {
      
            result_str += `<img id="${arr[x]}|${x}|${arr.length}" src="cards/hidden.png" onclick="flip(this)" class='column'>`;
        }
        result_str += "</p>";
    }
   
    result_str += "</div><input type='hidden' id='track'>";
    

    
 
    // DO NOT MODIFY THE FOLLOWING
    // Replace the innerHTML of <div id="game-board">
    //   with a newly prepared HTML string (result_str).
    document.getElementById('game-board').innerHTML = result_str;
   
    
}



function flip(card) {
    let score = document.getElementById('score')
    var currPoint = parseInt(score.innerText);
    var track = document.getElementById('track');


    var img = card.id.split("|")[0]
    var uniqueid = card.id.split("|")[1];
    var checkWin = parseInt(card.id.split("|")[2]);
   
    card.outerHTML = `<img src='cards/${img}' class='${card.className}' id='${card.id}' class='column'>`;


    if(track.value == "") {
        track.value = card.id;
    } else if (track.value.split("|")[0] == img) {
        currPoint += 1;
        
        score.innerText = currPoint;
        document.getElementById(card.id).style.opacity = 0.5;
        document.getElementById(track.value).style.opacity = 0.5;
        track.value = "";
        if(currPoint == checkWin/2) {
            document.getElementById('scoreboard').innerHTML = "All Matched, congratulations";
            return
        }
    } else if(track.value != "" && track.value != card.id){
        setTimeout(()=>{
            document.getElementById(card.id).outerHTML = `<img id="${card.id}" src="cards/hidden.png" onclick="flip(this)" class='column'>`;
            document.getElementById(track.value).outerHTML = `<img id="${track.value}" src="cards/hidden.png" onclick="flip(this)" class='column'>`;
            document.getElementById('track').value = "";
        },2000);
        
       
        return;
    }
   
    
   

    
    
}

// Utility Function
// DO NOT MODIFY
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}