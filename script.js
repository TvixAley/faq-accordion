const questions = document.querySelectorAll(".faq-card__question");
const answers = document.querySelectorAll(".faq-card__answer");
const plusIcons = document.querySelectorAll(".faq-card__icon-plus");
const minusIcons = document.querySelectorAll(".faq-card__icon-minus");

questions.forEach((question, id) => {
  const answer = answers[id];

  question.addEventListener("click", () =>{
    const isExpanded = question.getAttribute("aria-expanded") === "true";
    
    if (isExpanded){
      plusIcons[id].hidden = false;
      minusIcons[id].hidden = true;
      question.setAttribute("aria-expanded", false);
      answer.style.maxHeight = "0px";
      answer.setAttribute("aria-hidden", true);
      setTimeout(() => {
          answer.hidden = true;
        }, 300);
    }
    else{
      plusIcons[id].hidden = true;
      minusIcons[id].hidden = false;
      question.setAttribute("aria-expanded", true);
      answer.hidden = false;
      answer.setAttribute("aria-hidden", false);
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });

});