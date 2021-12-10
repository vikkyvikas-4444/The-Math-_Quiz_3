addUser()
{

    player1_name=document.getElementById("player1_no_input").value;
    player2_name=document.getElementById("player2_no_input").value;
    localStorage.setItem("player1_no" , player1_no);
    localStorage.setItem("player2_no" , player2_no);
window.location="quiz_game_page.html";
}