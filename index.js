(function () {
    var startbutton = document.querySelector(".start-btn");
    var start_display = document.querySelector(".start");
    var game_question = document.querySelector(".game-question");

    // function for clicking start button
    startbutton.addEventListener('click', function () {
        start_display.style.display = "none";
        game_question.style.display = "flex";
        game_display.style.display = "none";
    })

    var play = document.querySelector(".yes");
    var exit = document.querySelector(".exit");
    var game_display = document.querySelector(".game-display");

    // starting the game
    play.addEventListener('click', function () {
        game_question.style.display = "none";
        game_display.style.display = "flex";
    })

    // exiting the game
    exit.addEventListener('click', function () {
        game_question.style.display = "none";
        game_display.style.display = "none";
        start_display.style.display = "flex";
    })

    var myarry = ['ROCK', 'PAPER', 'SCISSOR'];
    var player_choices = document.querySelectorAll('.player-choice');
    var com_score = document.querySelector('.coms-score');
    var player_score = document.querySelector('.player-score');
    var result = document.querySelector('.result');

    var count_com = 0;
    var count_player = 0;
    var result_statement = document.querySelector('.res-statment');

    // for all the game
    player_choices.forEach(function (player_choice) {
        player_choice.addEventListener('click', function () {
            var a = player_choice.textContent;
            for (let i = 0; i < player_choices.length; i++) {
                player_choices[i].style.pointerEvents = "none";
            }
            var b = document.querySelector('.com-choice');
            var com_choice = Math.floor(Math.random() * 3);
            if ((myarry[com_choice] == 'ROCK' && a == 'PAPER') || (myarry[com_choice] == 'PAPER' && a == 'SCISSOR') || (myarry[com_choice] == 'SCISSOR' && a == 'ROCK')) {
                b.textContent = myarry[com_choice];
                for (let i = 0; i < player_choices.length; i++) {
                    player_choices[i].style.pointerEvents = "all";
                }
                count_player = count_player + 1;
                if (count_player < 10) {
                    player_score.textContent = count_player;
                    result_statement.style.backgroundColor = "green";
                    result_statement.textContent = "You won this round";
                }
                else {
                    count_player = 0;
                    player_score.textContent = count_player;
                    count_com = 0;
                    com_score.textContent = count_com;
                    game_display.style.display = "none";
                    result.style.display = "flex";
                    alert('Player wins the game');
                }
            }
            else if ((myarry[com_choice] == 'PAPER' && a == 'ROCK') || (myarry[com_choice] == 'SCISSOR' && a == 'PAPER') || (myarry[com_choice] == 'ROCK' && a == 'SCISSOR')) {
                b.textContent = myarry[com_choice];
                for (let i = 0; i < player_choices.length; i++) {
                    player_choices[i].style.pointerEvents = "all";
                }
                count_com = count_com + 1;
                if (count_com < 10) {
                    com_score.textContent = count_com;
                    result_statement.style.backgroundColor = "red";
                    result_statement.textContent = "Computer won this round";
                }
                else {
                    count_player = 0;
                    player_score.textContent = count_player;
                    count_com = 0;
                    com_score.textContent = count_com;
                    game_display.style.display = "none";
                    result.style.display = "flex";
                    alert('Computer wins the game');
                }
            }
            else {
                b.textContent = myarry[com_choice];
                result_statement.style.backgroundColor = "black";
                result_statement.textContent = "This round has been drawn";
                for (let i = 0; i < player_choices.length; i++) {
                    player_choices[i].style.pointerEvents = "all";
                }
            }

        })
    })
    var b = document.querySelector('.com-choice');
    var reset = document.querySelector('.result .reset');
    var finish = document.querySelector('.result .finish');

    // function for finishing the game
    finish.addEventListener('click', function () {
        result.style.display = "none";
        start_display.style.display = "flex";
        result_statement.style.backgroundColor = "black";
        result_statement.textContent = "Lets see who will win";
        b.textContent = "?";
    })
    // function for reset the game
    reset.addEventListener('click', function () {
        result.style.display = "none";
        game_display.style.display = "flex";
        result_statement.style.backgroundColor = "black";
        result_statement.textContent = "Lets see who will win";
        b.textContent = "?";
    })


})();