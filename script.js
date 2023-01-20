let secretNumber = 0;
let score = 10;

const againButton = document.getElementById("againBtn");
const checkBtn = document.getElementById("checkBtn");
//add onkey press check
const scoreField = document.getElementById("score");
const message = document.getElementById("message");
const numberBox = document.getElementById("numberBox");

scoreField.innerHTML = score;
secretNumber = Math.trunc(Math.random() * 20) + 1;

checkBtn.addEventListener("click", async (btn) => {
  calcAnswer();
});

checkBtn.addEventListener("keypress", async (key) => {
  if (key.code == "Enter" || key.code == "NumpadEnter") {
    calcAnswer();
  }
});

againButton.addEventListener("click", async () => {
  again();
});

document.addEventListener("keypress", async (key) => {
  console.log(key.code);
  if (key.code == "KeyR") {
    again();
  } else if (key.code == "Enter" || key.code == "NumpadEnter") {
    calcAnswer();
  }
});

function again() {
  const guessBox = document.getElementById("guessBox");
  guessBox.value = "";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 10;
  scoreField.innerHTML = score;
  message.innerHTML = "Start guessing...";
  checkBtn.style.display = "Block";
  message.style.color = "RED";
  numberBox.innerHTML = "?";
  document.body.style.backgroundColor = "";
}

function calcAnswer() {
  const guessBox = document.getElementById("guessBox");
  const guessedNumber = guessBox.value;
  console.log(guessedNumber);
  console.log(secretNumber);

  if (score > 1) {
    if (guessedNumber < secretNumber) {
      score -= 1;
      message.innerHTML = "Too low!";
    } else if (guessedNumber > secretNumber) {
      score -= 1;
      message.innerHTML = "Too high!";
    } else {
      message.innerHTML = "Correct Number!";
      checkBtn.style.display = "None";
      message.style.color = "BLACK";
      numberBox.innerHTML = secretNumber;
      document.body.style.backgroundColor = "#70ba7f";
    }
  } else {
    message.innerHTML = "You lost";
    score = 0;
    checkBtn.style.display = "None";
    guessBox.value = "";
  }
  scoreField.innerHTML = score;
  console.log("test");
}
/* Κάθε φορά που ξεκινάει το παιχνίδι το score θα γίνεται 10 
   και για να πάρει νέα τιμή ο τυχαίος αριθμός
   secretNumber = Math.trunc(Math.random() * 20) + 1;
*/
/* Σtον κώδικά σας θα χρειαστεί να αναφερθείτε τουλάχιστον στα 4 στοιχεία (elements) της σελίδας:
   1) το μήνυμα message
   2) το κουμπί checkBtn
   3) το guessBox
   4) το numberBox
*/

/* Γράψτε τη συνάρτηση που θα εκτελείται όταν γίνεται cklick στο κουμπί checkBtn
   Η συνάρτηση θα πρέπει 
     1) να sυγκρίνει τον αριθμό στο numberBox με τον secretNumber 
        και να εμφανίζει στο message το ανάλογο μήνυμα 
		    (Correct Number! Too high! Too low!)
     2) Να μειώνει το score κάθε φορά που ο χρήστης δίνει λάθος αριθμό 
        να ενημερώνει το score στην οθόνη
     3) Όταν το score γίνει μηδέν 
        να εμφανίζει στο message το μήνυμα You lost the game!
        Να κρύβει το κουμπί checkBtn προσθέτοντας την κλάση hidden
*/

/* Γράψτε τη συνάρτηση που θα εκτελείται όταν γίνεται cklick στο κουμπί againBtn 
  Ποια στοιχεία πρέπει να ενημερώσετε για να ξεκινήσει το παιχνίδι από την αρχή;
*/
