let options = document.getElementById("options");
let po = document.getElementById("po");
let co = document.getElementById("co");
let ps = document.getElementById("ps");
let cs = document.getElementById("cs");
let result = document.getElementById("result");
let reset = document.getElementById("reset");
let pscore = 1;
let cscore = 1;

function rockk() {
  po.textContent = "Rock";
}

function paperr() {
  po.textContent = "Paper";
}

function scissorss() {
  po.textContent = "Scissors";
}

function guess() {
  let possibilities = ["Rock", "Paper", "Scissors"];
  co.textContent = possibilities[Math.floor(Math.random() * 3)];
}

options.addEventListener("click", guess);
options.addEventListener("click", update);

function update() {
  let player = po.textContent;
  let computer = co.textContent;

  if (player === co.textContent) {
    result.textContent = "IT'S A TIE..";
    result.style.color = "blue";
  } else if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper")
  ) {
    result.textContent = "YOU WIN !!";
    result.style.color = "green";
    ps.textContent = pscore++;
  } else {
    result.textContent = "YOU LOSE";
    result.style.color = "red";
    cs.textContent = cscore++;
  }
}

function resett() {
  po.textContent = "";
  co.textContent = "";
  ps.textContent = "0";
  cs.textContent = "0";
  result.textContent = "";
  pscore = 1;
  cscore = 1;
}

options.addEventListener("click", guess);
reset.addEventListener("click", resett);

// smooth scroll

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });

/*------------------------------------------------------------------------------------------*/
