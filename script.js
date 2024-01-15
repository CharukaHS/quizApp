const form = document.querySelector('.quiz-form');
const submitBtn = document.querySelector('.btn');
const correctAnswers = ['q1-1', 'q2-2', 'q3-2', 'q4-1'];
const displayPts = document.getElementById('displayPts');
  
submitBtn.addEventListener ('click', (e) => {
    e.preventDefault();

    let selectedAnswrs = form.querySelectorAll('input[type=radio]:checked');
    let score = 0;


    selectedAnswrs.forEach((input, index) => {
        const correctAnsId = correctAnswers[index];
        if(input.id === correctAnsId){
            score++;

        }
    })
    console.log(score);
});