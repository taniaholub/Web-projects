//The test contains 30 random questions

var quizQuestions = [
    // LEVEL 1 Questions with one correct answer
    {
        questionType: "normal",
        question: "Яким CSS властивістю ви задаєте ширину блокового елемента?",
        answers: [
            "width",
            "height",
            "margin",
            "padding",
        ],
        correctAnswer: "width",
    },

    // 2 question
    {
        questionType: "normal",
        question: "Яка властивість CSS відповідає за визначення розміру внутрішнього відступу блока?",
        answers: [
            "margin",
            "padding",
            "border",
            "height",
        ],
        correctAnswer: "margin",
    },

    // 3 question
    {
        questionType: "normal",
        question: "Як ви встановлюєте позицію елемента в CSS, щоб він залишався на одному місці при прокручуванні сторінки?",
        answers: [
            "position: static;",
            "position: relative;",
            "position: fixed;",
            "position: absolute;",
        ],
        correctAnswer: "position: static;",
    },

    // 4 question
    {
        questionType: "normal",
        question: "Яким чином ви вирівнюєте текст в середині блока горизонтально?",
        answers: [
            "text-align: center;",
            "line-height: center;",
            "margin: auto;",
            "vertical-align: middle;",
        ],
        correctAnswer: "text-align: center;",
    },

    // 5 question
    {
        questionType: "normal",
        question: "Як ви вирівнюєте блок по вертикалі в CSS?",
        answers: [
            "vertical-align: middle;",
            "margin: auto;",
            "align-items: center;",
            "position: relative;",
        ],
        correctAnswer: "vertical-align: middle;",
    },

    // 6 question
    {
        questionType: "normal",
        question: "Яка властивість в CSS відповідає за зміну порядку накладання блоків?",
        answers: [
            "stacking-order",
            "z-index",
            "position-order",
            "layer-index",
        ],
        correctAnswer: "z-index",
    },
 
    // 7 question
    {
        questionType: "normal",
        question: "Які можливі значення може мати властивість position в CSS?",
        answers: [
            "static, relative, absolute, fixed, sticky",
            "top, right, bottom, left",
            "flex, grid, block, inline",
            "visible, hidden, collapse, inherit",
        ],
        correctAnswer: "static, relative, absolute, fixed, sticky",
    },

    // 8 question
    {
        questionType: "normal",
        question: "Що робить властивість float в CSS?",
        answers: [
            "Робить елемент невидимим",
            "Зміщує елемент вправо або вліво відносно його звичайного положення",
            "Задає розташування елемента відносно його батьківського контейнера",
            "Фіксує елемент на сторінці",
        ],
        correctAnswer: "Зміщує елемент вправо або вліво відносно його звичайного положення",
    },


    // Questions with multiple correct answers
    {
        questionType: "multiple choice",
        question: "Яка властивість CSS визначає розмір зовнішнього відступу блока?",
        answers: [
            "padding",
            "margin",
            "border",
            "height",
        ],
        correctAnswer: ["padding", "margin"],
    },

    // 10 question
    {
        questionType: "muliple choice",
        question: "Яка властивість CSS встановлює розташування блока відносно його нормального місця?",
        answers: [
            "position",
            "float",
            "display",
            "clear",
        ],
        correctAnswer: ["display", "position"],
    },

    // 11 question
    {
        questionType: "multiple choice",
        question: "Як ви вирівнюєте текст в середині блока вертикально?",
        answers: [
            "text-align: center;",
            "vertical-align: middle;",
            "text-align",
            "line-height: center;",
            "margin: auto;"
        ],
        correctAnswer: ["vertical-align: middle;", "line-height: center;"],
    },

    // 12 question
    {
        questionType: "multiple choice",
        question: "Як ви встановлюєте блок на весь екран та виключаєте його зі звичайного потоку документа?",
        answers: [
            "position: static;",
            "position: relative;",
            "position: fixed;",
            "position: absolute;",
        ],
        correctAnswer: ["position: absolute;", "position: relative;"],
    },


    // 13 question
    {
        questionType: "multiple choice",
        question: "Яка властивість CSS визначає ширину границі блока?",
        answers: [
            "padding-width",
            "border-width",
            "margin-width",
            "outline-width",
        ],
        correctAnswer: ["border-width", "outline-width"],
    },

    // 14 question
    {
        questionType: "multiple choice",
        question: "Як ви встановлюєте блок на весь екран та виключаєте його зі звичайного потоку документа?",
        answers: [
            "position: static;",
            "position: relative;",
            "position: fixed;",
            "position: absolute;",
        ],
        correctAnswer: ["position: absolute;", "position: relative;"],
    },

    // 15 question
    {
        questionType: "multiple choice",
        question: "Як ви вирівнюєте текст в середині блока вертикально?",
        answers: [
            "text-align: center;",
            "vertical-align: middle;",
            "text-align",
            "line-height: center;",
            "margin: auto;"
        ],
        correctAnswer: ["vertical-align: middle;", "line-height: center;"],
    },


    // LEVEL 2 Questions with a drop-down list of answers
    {
        questionType: "select",
        question: "Оберіть правильний варіант відповіді:",
        text: " Яка CSS-властивость використовуються для задання тіні блока: %answer%",
        answers: [
            "box-shadow",
            "border-shadow",
            "element-shadow"
        ],
        correctAnswer: ["box-shadow"],
    },

    // 2 question
    {
        questionType: "select",
        question: "Оберіть правильний варіант відповіді:",
        text: "Яка властивість CSS визначає порядок розміщення блоків у відношенні один до одного та може мати значення, такі як row, column, row-reverse, column-reverse: %answer%",
        answers: [
            "position",
            "display",
            "flex-direction"
        ],
        correctAnswer: ["display"],
    },

    // 3 question
    {
        questionType: "select",
        question: "Оберіть правильний варіант відповіді:",
        text: "Як ви задаєте зовнішній відступ для верхнього краю блока в CSS: %answer%",
        answers: [
            "margin-top",
            "margin-bottom",
            "margin-right",
            "margin-left"
        ],
        correctAnswer: ["margin-top"],
    },

    // 4 question
    {
        questionType: "select",
        question: "Оберіть правильний варіант відповіді:",
        text: "Як властивість 'box-sizing' впливає на обчислення розміру блоку: %answer%",
        answers: [
            "Змінює внутрішній відступ блока",
            "Визначає тип контуру блока",
            "Визначає, як розраховується розмір блока, включаючи або виключаючи поля та границі",
            "Встановлює прозорість блока"
        ],
        correctAnswer: ["Визначає, як розраховується розмір блока, включаючи або виключаючи поля та границі"],
    },

    // 5 question
    {
        questionType: "select",
        question: "Оберіть правильний варіант відповіді:",
        text: "Як використовувати псевдоклас ':before' для додавання контенту перед елементом: %answer%",
        answers: [
            "content-before: 'Текст';",
            "before-content: 'Текст';",
            "content: 'Текст' before;",
            ":before { content: 'Текст'; }"
        ],
        correctAnswer: [":before { content: 'Текст'; }"],
    },

    // 6 question
    {
        questionType: "select",
        question: "Оберіть правильний варіант відповіді:",
        text: "Як використовувати 'grid-template-columns' для визначення ширини стовпців у CSS Grid: %answer%",
        answers: [
            "grid-columns: auto;",
            "columns: auto-grid;",
            "grid-template-columns: auto;",
            "grid-template-columns: repeat(auto, 1fr);"
        ],
        correctAnswer: ["grid-template-columns: auto;"],
    },

    // 7 question
    {
        questionType: "select",
        question: "Оберіть правильний варіант відповіді:",
        text: "Як зробити так, щоб кожне слово в тексті починалося з великої літери: %answer%",
        answers: [
            "text-style: capitalize;",
            "text-transform: capitalize;",
            "style: capitalize;",
            "transform: capitalize;"
        ],
        correctAnswer: ["text-transform: capitalize;"],
    },

    // 8 question
    {
        questionType: "select",
        question: "Оберіть правильний варіант відповіді:",
        text: "Як властивість 'align-self' використовується в контексті flexbox): %answer%",
        answers: [
            "Вирівнює дочірній елемент відносно батьківського контейнера",
            "Встановлює прозорість елемента",
            "Вирівнює елемент вздовж головної (осі x)",
            "Задає порядок елемента в контейнері"
        ],
        correctAnswer: ["Вирівнює дочірній елемент відносно батьківського контейнера"],
    },

    // 9 question
    {
        questionType: "select",
        question: "Оберіть правильний варіант відповіді:",
        text: "Що таке 'clearfix' і як воно використовується для уникнення проблеми 'float' в CSS: %answer%",
        answers: [
            "Техніка для зміни фону контейнера",
            "Клас для створення відступів між елементами",
            "Спеціальний спосіб для зміни порядку елементів",
            "Техніка для правильного обтікання 'float' елементів"
        ],
        correctAnswer: ["Техніка для правильного обтікання 'float' елементів"],
    },

    // 10 question
    {
        questionType: "select",
        question: "Оберіть правильний варіант відповіді:",
        text: "Що робить властивість 'display: inline-block;': %answer%",
        answers: [
            "Змінює блочний елемент на інлайн-блок",
            "Дозволяє елементу займати всю ширину батьківського контейнера",
            "Робить елемент видимим на сторінці",
            "Дозволяє елементу бути частиною текстового потоку"
        ],
        correctAnswer: ["Змінює блочний елемент на інлайн-блок"],
    },

    // 11 question
    {
        questionType: "select",
        question: "Оберіть правильний варіант відповіді:",
        text: "За допомогою якого тегу можна додати зображення: %answer%",
        answers: [
            "img",
            "br",
            "p",
            "table"
        ],
        correctAnswer: ["img"],
    },

    // 12 question
    {
        questionType: "select",
        question: "Оберіть правильний варіант відповіді:",
        text: "Як властивість 'align-self' використовується в контексті flexbox: %answer%",
        answers: [
            "Вирівнює дочірній елемент відносно батьківського контейнера",
            "Встановлює прозорість елемента",
            "Вирівнює елемент вздовж головної (осі x)",
            "Задає порядок елемента в контейнері"
        ],
        correctAnswer: ["Вирівнює дочірній елемент відносно батьківського контейнера"],
    },


    // Level 3 Questions with text input

    {
        questionType: "enter text",
        question: "Як використовувати властивість CSS для вирівнювання тексту всередині блочного елемента по центру горизонталі?",
        correctAnswer: "text-align: center;",
    },

    // 2 question
    {
        questionType: "enter text",
        question: "Яке значення властивості CSS визначає, як елемент обтікає інші елементи, якщо він має зовнішній відступ із значенням 'auto'?",
        correctAnswer: "clear",
    },

    // 3 question
    {
        questionType: "enter text",
        question: "Як властивість 'box-sizing' впливає на розрахунок розміру блока в CSS?",
        correctAnswer: "border-box",
    },

    // 4 question
    {
        questionType: "enter text",
        question: "Що таке 'clearfix' і як воно використовується для уникнення проблеми 'float' в CSS?",
        correctAnswer: "overflow",
    },

    // 5 question
    {
        questionType: "enter text",
        question: "Як використовувати 'flexbox' для вирівнювання елементів вздовж вертикалі?",
        correctAnswer: "align-items",
    },

    // 6 question
    {
        questionType: "enter text",
        question: "Як правильно використовувати 'z-index' для керування порядком накладання блоків на сторінці?",
        correctAnswer: "z-index",
    },

    // 7 question
    {
        questionType: "enter text",
        question: "Як використовувати 'display: grid' для визначення розміщення елементів в CSS Grid Layout?",
        correctAnswer: "grid-template-areas",
    },

    // 8 question
    {
        questionType: "enter text",
        question: "Як правильно використовувати 'position: sticky' для створення прилипаючого елемента при прокрутці сторінки?",
        correctAnswer: "top",
    },

    // Error correction task
    {
        questionType: "enter text",
        question: "Виправ помилку: margin: auto 10px;",
        correctAnswer: "margin: 10px auto;"
    },

    // 10 question
    {
        questionType: "enter text",
        question: "Виправ помилку: display: box;",
        correctAnswer: "display: flex;",
    },

    // 11 question
    {
        questionType: "enter text",
        question: "Виправ помилку: padding: 20px 30;",
        correctAnswer: "padding: 20px 30px;",
    },

    // 12 question
    {
        questionType: "enter text",
        question: "Виправ помилку: position: relativ;",
        correctAnswer: "position: relative;",
    },

    // 13 question
    {
        questionType: "enter text",
        question: "Виправ помилку: background: 00000;",
        correctAnswer: "background: #000;",
    },
];


// Event listener for starting the test
const startTestBtn = document.querySelector(".login_btn");

startTestBtn.addEventListener("click", () => {
    // Hide the button and prevent further clicks
    startTestBtn.style.display = "none";

    // Your existing code for opening the modal
    openModal();
});

// Containers and elements
const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".login_btn");
const overlay = document.querySelector(".overlay");
const submitBtn = document.querySelector(".submit_btn");
const quizInner = document.querySelector(".quiz_inner");
const header = document.querySelector(".header");

var headerContainer;
var taskContainer
var listContainer;
var loginInputs;

// Student information
var studentInfo = {};

// Student score
let score = 0;

let questionIndex = 0;


// Event listeners for opening and closing modals
openModalBtn.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);

// Event listener for submitting answers
submitBtn.addEventListener("click", () => {
    submitBtn.onclick = checkAnswer;
    saveInfo();
    changeModal();
    shuffle(quizQuestions);
    showQuestion();
}, { once: true });

// Function to open the modal
function openModal() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

// Function to close the modal
function closeModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

// Function to save user input
function saveInfo() {
    loginInputs = document.querySelectorAll(".login_input");
    for (i = 0; i < loginInputs.length; i++) {
        var element = loginInputs[i];
        var name = element.name;
        var value = element.value;
        if (name) {
            studentInfo[name] = value;
        }
    }
}

// Function to change the modal content
function changeModal() {
    quizInner.innerHTML =
        `<div class="header_container"></div>
          <div class="task_container">
              <ul class="quiz_list">
              </ul>
          </div>`;
    headerContainer = document.querySelector(".header_container");
    taskContainer = document.querySelector(".task_container");
    listContainer = document.querySelector(".quiz_list");
    submitBtn.innerHTML = 'Відповісти';
    quizInner.style.display = 'block';
}

// Function to clear the page content
function clearPage() {
    headerContainer.innerHTML = '';
    listContainer.innerHTML = '';
}

// Function to shuffle array elements randomly
function shuffle(array) {
    let j, temp;
    for (let i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
    }
    return array;
}


// Output questions

function showQuestion() {
    const headerTemplate = `<h2 class="title">%title%</h2>`;
    const title = headerTemplate.replace('%title%', quizQuestions[questionIndex]['question']);
    headerContainer.innerHTML = title;

    // Type checking
    
    if (quizQuestions[questionIndex]['questionType'] === 'normal') { 
        // shuffling
        shuffle(quizQuestions[questionIndex]['answers']);

        // output
        for (answerText of quizQuestions[questionIndex]['answers']) {
            const questionTemplate =
                `<li>
                      <label>
                          <input value="%answer%" type="radio" class="answer" name="answer" />
                          <span>%answer%</span>
                      </label>
                  </li>`;
            const answerHtml = questionTemplate.replace('%answer%', answerText).replace('%answer%', answerText);
            listContainer.innerHTML += answerHtml;
        }

    } else if (quizQuestions[questionIndex]['questionType'] === 'multiple choice') { 

        shuffle(quizQuestions[questionIndex]['answers']);
        for (answerText of quizQuestions[questionIndex]['answers']) {
            const questionTemplate =
                `<li>
                      <label>
                          <input value="%answer%" type="checkbox" class="answer" name="answer" />
                          <span>%answer%</span>
                      </label>
                  </li>`;
            const answerHtml = questionTemplate.replace('%answer%', answerText).replace('%answer%', answerText);
            listContainer.innerHTML += answerHtml;
        }

        // Writing the answer
    } else if (quizQuestions[questionIndex]['questionType'] === 'enter text') {
        const answerHtml =
            `<li>
                  <label>
                      <input type="text" class="answer" name="answer" placeholder="Поле для вводу" />
                  </label>
              </li>`;
        listContainer.innerHTML = answerHtml;

    } else if (quizQuestions[questionIndex]['questionType'] === 'select') { 
        shuffle(quizQuestions[questionIndex]['answers']);

        const selectTemplate = `<select class="quiz_select"></select>`;
        let textTemplate = quizQuestions[questionIndex]['text'];
        for (i = 0; i < quizQuestions[questionIndex]['answers'].length; i++)
            textTemplate = textTemplate.replace('%answer%', selectTemplate);
        const text = `<p class="select_text"> ${textTemplate}</p>`;
        listContainer.innerHTML = text;
        const selectContainer = taskContainer.querySelectorAll('.quiz_select');
        for (j = 0; j < selectContainer.length; j++) {
            selectContainer[j].innerHTML += `<option selected="selected" disabled="disabled">Select</option>`
            for (i = 0; i < quizQuestions[questionIndex]['answers'].length; i++)
                selectContainer[j].innerHTML += `<option>${quizQuestions[questionIndex]['answers'][i]}</option>`;
        }
    }
}


// Function to check the user's answer

function checkAnswer() {
    
    if (quizQuestions[questionIndex]['questionType'] === 'normal') {
        const checkedRadio = taskContainer.querySelector('input[type="radio"]:checked');
        const userAnswer = checkedRadio.value;
        if (userAnswer === quizQuestions[questionIndex]['correctAnswer']) {
            score++;
        }
    } else if (quizQuestions[questionIndex]['questionType'] === 'multiple choice') {
        const checkedCheckBox = Array.from(taskContainer.querySelectorAll('input[type="checkbox"]:checked'));
        let userAnswer = [];
        for (i = 0; i < checkedCheckBox.length; i++) {
            userAnswer[i] = checkedCheckBox[i].value;
        }

        if (JSON.stringify(quizQuestions[questionIndex]['correctAnswer'].sort()) === JSON.stringify(userAnswer.sort())) {
            score++;
        }
    } else if (quizQuestions[questionIndex]['questionType'] === 'enter text') {
        let userAnswer = taskContainer.querySelector('input[type="text"]');

        if (quizQuestions[questionIndex]['correctAnswer'] === userAnswer.value) {
            score++;
        }
    } else if (quizQuestions[questionIndex]['questionType'] === 'select') {
        const userAnswerTemplate = Array.from(taskContainer.querySelectorAll('.quiz_select'));
        let userAnswer = [];
        for (i = 0; i < userAnswerTemplate.length; i++) {
            userAnswer[i] = userAnswerTemplate[i].value;
        }

        if (JSON.stringify(quizQuestions[questionIndex]['correctAnswer']) === JSON.stringify(userAnswer)) {
            score++;
        }
    }

    if (questionIndex !== quizQuestions.length - 11) {
        questionIndex++;
        clearPage();
        showQuestion();
    } else {
        clearPage();
        showResults();
        sendResults();
    }
}


// Function to show the quiz results
function showResults() {
    const headerTemplate = `<h2 class="title">Тест завершено!</h2>`;
    headerContainer.innerHTML = headerTemplate;

    const resultTemplate = `<h3 class="result_msg">%result%</h3>`;
    let result = `${studentInfo.name}, Ви набрали ${score}/30 балів!`;
    const finalResult = resultTemplate.replace('%result%', result);
    taskContainer.innerHTML = finalResult;
    studentInfo.score = `${score}/30`;

    // Hide the "Відповісти" button after the test is completed
    submitBtn.style.display = 'none';
    submitBtn.onclick = null;
}