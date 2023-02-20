// const button = document.getElementById('button');

// function debounce(fn, delay){
//     let timeoutId;
//     return function () {
//         if(timeoutId){
//             clearTimeout(timeoutId)
//         }
//        timeoutId = setTimeout(() => {
//             fn();
//         }, delay);
//     }
// }

// button.addEventListener(
//   "click",
//   debounce(function () {
//     console.log("Clicked");
//   }, 500)
// );

// console.log([] + []);
// console.log({} + []);

// function myFunction(){
//     return 'Bangladesh'
// }
// const string = myFunction `Hello`;
// console.log(string)

// function b(){
//     console.log(`the length is ${this.length}`)
// }
// let a = {
//     length : 10,
//     mathod: function(b){
//         arguments[0]();
//     }
// }
// a.mathod(b,5)

// const a = 'constructor';
// console.log(a[a](01));

// const fileInput = document.querySelector('input'), downloadBtn = document.querySelector('button');

// downloadBtn.addEventListener('click', e =>{
//     e.preventDefault();
//     fetchFile(fileInput.value)
// })
// function fetchFile(url){
//     fetch(url).then(res => res.blob()).then(file =>{
//        let tempUrl = URL.createObjectURL(file);
//        let aTag = document.createElement('a');
//        aTag.href = tempUrl;
//        aTag.download = 'filename';
//        document.body.appendChild(aTag);
//        aTag.click();
//        aTag.remove()
//     })
// }

// const removeFalsyValue = [
//     false,
//     null,
//     NaN,
//     undefined,
//     '',
//     0,
//     "Karim",
//     'Rahim',
//     'Tanvir'
// ]
// console.log(removeFalsyValue.filter(Boolean))
// let abc = removeFalsyValue.filter((element) =>{
//     return element;
// })
// console.log(abc)

// console.log(!!0);
// console.log(!!1);
// console.log(!!"Mashrafi");
// console.log(!!undefined);
// console.log(!!NaN);
// console.log(!!null)

// console.log(Boolean('Mashrafi'));
// console.log(Boolean(0));
// console.log(Boolean(4));
// console.log(Boolean(undefined))

// const numbers = [1,2,3,4,5,6,7,8,9];
// numbers.length = 5;
// console.log(numbers);

// let mltDArr = [1,2,4,[1,4,[2,3,5],5],8];

// console.log(mltDArr.flat().flat());

// let mltDArr1 = [1,5,2,[9,6,[7,[2,6,[5,[2],3],9,[6,9,[,2,5]]]]]];
// console.log(mltDArr1.flat().flat().flat().flat().flat())
// console.log(mltDArr1.flat(Infinity))

// const captain = 'Mashrafi';

// captain === 'Mashrafi' && console.log('True');
// captain !== 'Mashrafi' || console.log('False');

// const quote = "React is a JS Framework & this framework is the most popular front-end framework right now";

// console.log(quote.replace(/framework/ig,'library'));

// const library1 = 'jQuery';
// const library2 = 'React';

// console.log({ library1 });
// console.log({ library2 });
// const startTime = performance.now();
// console.log

// for(let i = 0; i <= 50; i++){
//     console.log(i);
// }
// const endTime = performance.now();
// console.log(`Loop Took ${endTime- startTime} milliseconds`)

// let array = [1, 2, 3, 4, 5];

// // let temp = array[0];
// // array[0] = array[4]
// // array[4] = temp;

// // console.log(array)

// [array[0], array[4]] = [array[4], array[0]];
// console.log(array);

// let a = 1;
// let b = 2;

// // [a, b] = [b, a];
// // console.log(a, b);

// b = a + (a = b) - b;
// console.log(a, b);

// const button = document.querySelector('#btn');

// button.addEventListener('click', function(){
//     let text = document.querySelector('#text');
//     copyToClipBoard(text.innerText);
// });

// function copyToClipBoard(str) {
//     const element = document.createElement('textarea');
//     element.value = str;
//     document.body.appendChild(element);
//     element.select();
//     document.execCommand('copy');
//     document.body.removeChild(element);
// }

// const language = {
//     name : 'javaScript',
//     founded : '1995',
//     founder : 'Branden Eich'
// }
// const {name : languageName, founded : languageFounded, founder : languageFounder} = language;
// console.log(languageName,languageFounded,languageFounder)

// const element = document.querySelector('#number').valueAsNumber;
// console.log(typeof element)

// const array = [1,2,2,2,3,4,3,4,5,6,4,5,6];

// const nArray = [...new Set(array)];

// console.log(nArray)

// const hasElements = (a, b) => {
//     return a.length === b.length && a.every((v, i) => v === b[i]);
// }

// console.log(hasElements([3,1],[1,3]))

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// console.log(numbers.sort(() => Math.random() - 0.5))

// let x = 1;
// x = (x++, x);
// console.log(x)

// const firstName = "Tamim";
// const lastName = "Mridha";
// const names = ["tamim", "Rahim", "Shamim"];

// const numbers = [1, 2, 3, 4, 6];
// const num = [1, 2, 3, 4, 5];

// let name = "Robiul Islam";
// let fullName = "Robiul Islam";
// let universityName = "Dhaka";

// let x = "Robiul Islam Munna";

// function display() {
//   console.log("This is Function");
// }
// display();

// function display1() {
//   console.log("This is Another Function");
// }
// display1();

// if (true) {
//   if (true) {
//     console.log("Conditional Express");
//   }
// }

// function addNumbers(x, y) {
//   console.log(x + y);
// }
// addNumbers(20, 30);

// /**
//  * @param {number} x - first number
//  * @param {number} y - second number
//  */

// function addNumbers(x, y) {
//   console.log(x + y);
// }
// addNumbers(20, 30);

// let x = 20;
// let y = 10;
// let result = x + y;
// console.log(result);

// let x = 10;
// let y = 10;
// let result = x + y;
// console.log(result);

// function addNumbers(x, y) {
//   console.log(x + y);
// }
// addNumbers(10, 20);
// addNumbers(10, 10);

// const items = document.querySelectorAll(".item");

// let count = 1;

// setInterval(() => {
//   count++;
//   let active = document.querySelector(".active");
//   active.classList.remove("active");
//   if (count > items.length) {
//     count = 1;
//     items[0].classList.add("active");
//   } else {
//     active.nextElementSibling.classList.add("active");
//   }
// }, 1500);

// const cardItems = [
//   {
//     title: "Card Title One",
//     body: "Card Body One",
//   },
//   {
//     title: "Card Title Two",
//     body: "Card Body Two",
//   },
//   {
//     title: "Card Title Three",
//     body: "Card Body Three",
//   },
//   {
//     title: "Card Title Four",
//     body: "Card Body Four",
//   },
//   {
//     title: "Card Title Five",
//     body: "Card Body Five",
//   },
//   {
//     title: "Card Title Six",
//     body: "Card Body Six",
//   },
//   {
//     title: "Card Title Seven",
//     body: "Card Body Seven",
//   },
//   {
//     title: "Card Title Eight",
//     body: "Card Body Eight",
//   },
//   {
//     title: "Card Title Nine",
//     body: "Card Body Nine",
//   },
//   {
//     title: "Card Title Ten",
//     body: "Card Body Ten",
//   },
//   {
//     title: "Card Title One",
//     body: "Card Body One",
//   },
//   {
//     title: "Card Title One",
//     body: "Card Body One",
//   },
//   {
//     title: "Card Title One",
//     body: "Card Body One",
//   },
//   {
//     title: "Card Title One",
//     body: "Card Body One",
//   },
//   {
//     title: "Card Title One",
//     body: "Card Body One",
//   },
//   {
//     title: "Card Title One",
//     body: "Card Body One",
//   },
//   {
//     title: "Card Title One",
//     body: "Card Body One",
//   },
//   {
//     title: "Card Title One",
//     body: "Card Body One",
//   },
//   {
//     title: "Card Title One",
//     body: "Card Body One",
//   },
//   {
//     title: "Card Title One",
//     body: "Card Body One",
//   },
//   {
//     title: "Card Title One",
//     body: "Card Body One",
//   },
//   {
//     title: "Card Title One",
//     body: "Card Body One",
//   },
//   {
//     title: "Card Title One",
//     body: "Card Body One",
//   },
//   {
//     title: "Card Title One",
//     body: "Card Body One",
//   },
//   {
//     title: "Card Title One",
//     body: "Card Body One",
//   },
// ];

// const posts = document.querySelector(".posts");

// cardItems.map((card) => {
//   const div = document.createElement("div");
//   div.innerHTML = `
//     <div class="post">
//         <h3>${card.title}</h3>
//         <p>${card.body}</p>
//     </div>
//   `;
//   posts.appendChild(div);
// });
// const card = document.querySelector(".card");
// const form = document.querySelector("form");
// const input = document.querySelector("#number");
// const result = document.querySelector("#result");
// const remainingAttempts = document.querySelector("#remainingAttempts");
// const button = document.querySelector("#btn");
// const p = document.createElement("p");
// const refreshButton = document.querySelector("#refresh");

// let won = 0;
// let lost = 0;
// let attempts = 0;
// let totalAttempts = 5;

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   output();
//   attempts++;
//   remainingAttempts.innerHTML = `Remaining Attempts = <span style="color:black;">${
//     totalAttempts - attempts
//   }</span> , Total Attempts = <span style="color:black">${totalAttempts}</span>`;
//   if (attempts == 5) {
//     input.disabled = true;
//     button.disabled = true;
//     input.style.background = "gray";
//     button.style.background = "gray";
//     button.innerHTML = "Disabled";
//   }
//   input.value = "";
// });

// const output = () => {
//   let inputValue = input.value;
//   let guessNumber = guessingNumber(5);

//   if (inputValue == guessNumber) {
//     result.innerHTML = `You are Won`;
//     won++;
//   } else {
//     result.innerHTML = `You are lost, Random Number Was ${guessNumber}`;
//     lost++;
//   }
//   card.appendChild(p);
//   p.classList.add("largeText");
//   p.innerHTML = `You are Won = <span style="color:white;">${won}</span> Times,<br> and<br> You are Lost = <span style="color:white;">${lost}</span> Times`;
// };

// const guessingNumber = (limit) => {
//   return Math.floor(Math.random() * limit) + 1;
// };

// refreshButton.addEventListener("click", function () {
//   location.reload();
// });

// ==================================================

// const items = document.querySelectorAll(".item");
// let count = 1;

// setInterval(() => {
//   count++;
//   let active = document.querySelector(".active");
//   active.classList.remove("active");
//   if (count > items.length) {
//     count = 1;
//     items[0].classList.add("active");
//   } else {
//     active.nextElementSibling.classList.add("active");
//   }
// }, 2000);

// ==================================================

// "use strict";

// const nav = document.querySelector("nav");
// const span1 = document.querySelector(".span1");
// const span2 = document.querySelector(".span2");
// span1.addEventListener("click", function () {
//   nav.classList.toggle("navs");
//   span1.classList.add("span");
//   span2.classList.toggle("span3");
// });
// span2.addEventListener("click", function () {
//   nav.classList.remove("navs");
//   span1.classList.remove("span");
//   span2.classList.remove("span3");
// });

// const parentContainer = document.querySelector(".container");
// parentContainer.addEventListener("click", (event) => {
//   const current = event.target;

//   const isReadMoreBtn = current.className.includes("btn");

//   if (!isReadMoreBtn) return;

//   const currentText = event.target.parentNode.querySelector(".text");
//   currentText.classList.toggle("text--show");

//   if (current.textContent === "Read More...") {
//     current.textContent = "Read Less...";
//   } else {
//     current.textContent = "Read More...";
//   }
// });

// const container = document.querySelector(".container");

// container.addEventListener("click", function (e) {
//   const current = e.target;
//   const btn = current.className.includes("btn");

//   if (!btn) return;
//   const textCnt = e.target.parentNode.querySelector(".text");
//   textCnt.classList.toggle("showText");
//   /*  if (current.textContent === "Read More...") {
//     current.textContent = "Read Less...";
//   } else {
//     current.textContent = "Read More...";
//   } */
// });

// const container = document.querySelector(".container");
// container.addEventListener("click", function (e) {
//   const current = e.target;
//   const btn = current.className.includes("btn");
//   if (!btn) return;
//   const ctx = e.target.parentNode.querySelector(".text");
//   ctx.classList.toggle("showText");
//   if (current.textContent === "Read More") {
//     current.textContent = "Read Less";
//   } else {
//     current.textContent = "Read More";
//   }
// });

// const container = document.querySelector(".container");
// container.addEventListener("click", function (e) {
//   const current = e.target;
//   const btn = current.className.includes("btn");
//   if (!btn) return;
//   const ctx = e.target.parentNode.querySelector(".text");
//   ctx.classList.toggle("showText");
// });

// const container = document.querySelector(".container");
// container.addEventListener("click", function (e) {
//   const current = e.target;
//   const btn = current.className.includes("btn");
//   if (!btn) return;
//   const ctx = e.target.parentNode.querySelector(".text");
//   ctx.classList.toggle("showText");
//   if (current.textContent === "Read More") {
//     current.textContent = "Read Less";
//   } else {
//     current.textContent = "Read More";
//   }
// });

// const inputBox = document.querySelector("input");
// inputBox.addEventListener("keyup", function () {
//   const inputValue = inputBox.value.toUpperCase();
//   const storeItems = document.querySelector(".products");
//   const product = document.querySelectorAll(".product");
//   const pname = storeItems.getElementsByTagName("h1");

//   for (let i = 0; i < pname.length; i++) {
//     let match = product[i].getElementsByTagName("h1")[0];
//     if (match) {
//       if (match.textContent.toUpperCase().indexOf(inputValue)) {
//         product[i].style.display = "";
//       }
//     } else {
//       product[i].style.display = "none";
//     }
//   }
// });

// ==================================================

// const text = document.querySelector(".sec-text");

// const textLoad = () => {
//   setTimeout(() => {
//     text.textContent = "Freelancer";
//   }, 0);
//   setTimeout(() => {
//     text.textContent = "Blogger";
//   }, 4000);
//   setTimeout(() => {
//     text.textContent = "YouTuber";
//   }, 8000); //1s = 1000 milliseconds
// };

// textLoad();
// setInterval(textLoad, 12000);

// ==================================================

// const container = document.querySelector(".container");

// container.addEventListener("click", function (e) {
//   const current = e.target;
//   const btn = current.className.includes("btn");
//   if (!btn) return;
//   const txt = e.target.parentNode.querySelector(".text");
//   txt.classList.toggle("showText");
//   if (current.textContent === "Read More") {
//     current.textContent = "Read Less";
//     current.style.background = "Orange";
//     current.style.color = "black";
//   } else {
//     current.textContent = "Read More";
//     current.style.background = "black";
//     current.style.color = "white";
//   }
// });

// const container = document.querySelector(".container");

// container.addEventListener("click", function (e) {
//   const cElement = e.target;
//   const cButton = cElement.className.includes("btn");
//   if (!cButton) return;
//   const cContent = e.target.parentNode.querySelector(".text");
//   cContent.classList.toggle("showText");
//   if (cElement.textContent === "Read More") {
//     cElement.textContent = "Read Less";
//     cElement.style.color = "white";
//     cElement.style.background = "orange";
//   } else {
//     cElement.style.color = "black";
//     cElement.style.background = "hotpink";
//     cElement.textContent = "Read More";
//   }
// });

// const container = document.querySelector(".container");
// const todoForm = document.querySelector(".todo-form");
// const todoInput = document.querySelector("#inputTodo");
// const todoAddButtton = document.querySelector("#addTodoButton");
// const todoLists = document.querySelector("#lists");
// const messageElement = document.querySelector("#message");

// // showMessage =====================================

// const showMessage = (text, status) => {
//   messageElement.textContent = text;
//   messageElement.classList.add(`bg-${status}`);
//   setTimeout(() => {
//     messageElement.textContent = "";
//     messageElement.classList.remove(`bg-${status}`);
//   }, 1000);
// };

// // create todo ======================================

// const createTodo = (todoId, todoValue) => {
//   const todoElement = document.createElement("li");

//   todoElement.classList.add("li-style");

//   todoElement.id = todoId;

//   todoElement.innerHTML = `
//     <span>${todoValue}</span>
//     <span><button class="btn" id="deleteButton"><i class="fa fa-trash"></i></button></span>
//   `;

//   todoLists.appendChild(todoElement);

//   const deleteButton = todoElement.querySelector("#deleteButton");
//   deleteButton.addEventListener("click", deleteTodo);
// };

// // deleteTodo =======================================

// const deleteTodo = (e) => {
//   const selectedTodo = e.target.parentElement.parentElement.parentElement;

//   todoLists.removeChild(selectedTodo);

//   showMessage("Todo is Deleted", "danger");

//   const todoId = selectedTodo.id;
//   let todos = getTodosFromLocalStorage();
//   todos = todos.filter((todo) => todo.todoId !== todoId);
//   localStorage.setItem("mytodos", JSON.stringify(todos));
// };

// // getTodosFromLocalStorage =========================

// const getTodosFromLocalStorage = () => {
//   return localStorage.getItem("mytodos")
//     ? JSON.parse(localStorage.getItem("mytodos"))
//     : [];
// };

// // add todo ========================================

// const addTodo = (e) => {
//   e.preventDefault();

//   const todoValue = todoInput.value;

//   const todoId = Date.now().toString();

//   createTodo(todoId, todoValue);

//   showMessage("Todo is Added", "success");

//   // adding value to localStorage ===================

//   const todos = getTodosFromLocalStorage();
//   todos.push({ todoId, todoValue });
//   localStorage.setItem("mytodos", JSON.stringify(todos));

//   todoInput.value = "";
// };

// // loadTodos ========================================

// const loadTodos = () => {
//   const todos = getTodosFromLocalStorage();
//   todos.map((todo) => createTodo(todo.todoId, todo.todoValue));
// };

// // submit Todo ======================================

// todoForm.addEventListener("submit", addTodo);

// window.addEventListener("DOMContentLoaded", loadTodos);

// const container = document.querySelector(".container");
// container.addEventListener("click", function (e) {
//   const cElement = e.target;
//   const cBtn = cElement.className.includes("btn");
//   if (!cBtn) return;
//   const cText = e.target.parentNode.querySelector(".text");
//   cText.classList.toggle("showText");
//   if (cElement.textContent === "Read More") {
//     cElement.textContent = "Read Less";
//     cElement.style.color = "black";
//     cElement.style.background = "hotpink";
//   } else {
//     cElement.style.background = "orange";
//     cElement.style.color = "white";
//     cElement.textContent = "Read More";
//   }
// });

// =================================================

// const container = document.querySelector(".container");
// const p = document.createElement("p");
// container.appendChild(p);
// setInterval(() => {
//   var date = new Date();

//   var hours = date.getHours();
//   var minutes = date.getMinutes();
//   var seconds = date.getSeconds();
//   if (hours >= 12) {
//     hours = hours - 12;
//     var amPm = "PM";
//   } else {
//     amPm = "AM";
//   }
//   if (hours < 10) {
//     var hours = "0" + hours;
//   }
//   if (minutes < 10) {
//     var minutes = "0" + minutes;
//   }
//   if (seconds < 10) {
//     var seconds = "0" + seconds;
//   }

//   p.innerHTML = `<span> ${hours} : ${minutes} : ${seconds} : ${amPm}</span>`;
// }, 1000);

// =================================================

// const container = document.querySelector(".container");
// const todoInput = document.querySelector("#todoInput");
// const todoForm = document.querySelector(".todo-form");
// const todoButton = document.querySelector("#addTodoButton");
// const todoLists = document.querySelector("#lists");
// const messageElement = document.querySelector("#message");

// // showMessage ======================================

// const showMessage = (text, status) => {
//   messageElement.innerHTML = text;
//   messageElement.classList.add(`bg-${status}`);
//   setTimeout(() => {
//     messageElement.innerHTML = "";
//     messageElement.classList.remove(`bg-${status}`);
//   }, 1000);
// };

// createTodo =======================================

// const createTodo = (todoValue, todoId) => {
//   const todoElement = document.createElement("li");
//   todoElement.id = todoId;
//   todoElement.innerHTML = `
//     <span>${todoValue}</span>
//     <span><button class="addTodoButton" id="deleteTodoButton"><i class="fa fa-trash"></i></button></span>
//   `;
//   todoLists.appendChild(todoElement);
//   todoElement.classList.add("li-style");

//   showMessage("Todo is Added", "success");

//   const deleteTodo = document.querySelector("#deleteTodoButton");
//   deleteTodo.addEventListener("click", deleteTodo);
// };

// // deleteTodo =====================================

// const deleteTodo = (e) => {
//   const selectedTodo = e.target.parentElement.parentElement.parentElement;
//   console.log(selectedTodo);
// };

// // addTodo =========================================

// const addTodo = (e) => {
//   e.preventDefault();

//   const todoValue = todoInput.value;

//   const todoId = Date.now().toString();

//   createTodo(todoValue, todoId);
// };

// submit todo =====================================

// todoForm.addEventListener("submit", addTodo);

// const container = document.querySelector(".container");

// container.addEventListener("click", function (e) {
//   const cElement = e.target;
//   const cBtn = cElement.className.includes("btn");
//   if (!cBtn) return;
//   const cText = e.target.parentNode.querySelector(".text");
//   cText.classList.toggle("showText");
//   if (cElement.textContent === "Read More") {
//     cElement.textContent = "Read Less";
//     cElement.style.color = "black";
//     cElement.style.background = "darkcyan";
//   } else {
//     cElement.textContent = "Read More";
//     cElement.style.color = "white";
//     cElement.style.background = "black";
//   }
// });

// const text = document.querySelector(".sec-text");

// const textLoad = () => {
//   setTimeout(() => {
//     text.textContent = "Freelancer";
//   }, 0);
//   setTimeout(() => {
//     text.textContent = "Blogger";
//   }, 4000);
//   setTimeout(() => {
//     text.textContent = "YouTuber";
//   }, 8000); //1s = 1000 milliseconds
// };

// textLoad();
// setInterval(textLoad, 12000);

// const text = document.querySelector(".sec-text");

// function textLoad() {
//   setTimeout(() => {
//     text.innerHTML = "web Developer";
//   }, 0);
//   setTimeout(() => {
//     text.innerHTML = "Freelancer";
//   }, 4000);
//   setTimeout(() => {
//     text.innerHTML = "Blogger";
//   }, 8000);
// }

// textLoad();
// setInterval(textLoad, 12000);

// const text = document.querySelector(".sec-text");

// function setText() {
//   setTimeout(() => {
//     text.innerHTML = "Freelancer";
//   }, 0);
//   setTimeout(() => {
//     text.innerHTML = "Web Developer";
//   }, 4000);
//   setTimeout(() => {
//     text.innerHTML = "Blogger";
//   }, 8000);
// }
// setText();
// setInterval(setText, 12000);

// const text = document.querySelector(".sec-text");

// function textLoad() {
//   setTimeout(() => {
//     text.innerHTML = "Web Developer";
//   }, 0);
//   setTimeout(() => {
//     text.innerHTML = "Freelancer";
//   }, 4000);
//   setTimeout(() => {
//     text.innerHTML = "Blogger";
//   }, 8000);
// }
// textLoad();
// setInterval(textLoad, 12000);

// const container = document.querySelector(".container");
// const todoForm = document.querySelector(".todo-form");
// const todoInput = document.querySelector("#inputTodo");
// const todoAddButton = document.querySelector("#addTodoButton");
// const todoLists = document.querySelector("#lists");
// const messageElement = document.querySelector("#message");

// // showMessage =====================================

// const showMessage = (text, status) => {
//   messageElement.innerHTML = text;
//   messageElement.classList.add(`bg-${status}`);

//   setTimeout(() => {
//     messageElement.innerHTML = "";
//     messageElement.classList.remove(`bg-${status}`);
//   }, 1000);
// };

// // createTodo =======================================

// const createTodo = (todoId, todoValue) => {
//   const todoElement = document.createElement("li");
//   todoElement.classList.add("li-style");

//   todoElement.id = todoId;
//   todoElement.innerHTML = `
//     <span>${todoValue}</span>
//     <span><button class="btn" id="deleteButton"><i class="fa fa-trash"></i></button></span>
//   `;
//   todoLists.appendChild(todoElement);

//   const deleteButton = todoElement.querySelector("#deleteButton");
//   deleteButton.addEventListener("click", deleteTodo);
// };

// deleteTodo =======================================

// const deleteTodo = (e) => {
//   const selectedTodo = e.target.parentElement.parentElement.parentElement;

//   todoLists.removeChild(selectedTodo);
//   showMessage("Todo is Deleted", "danger");

//   const todoId = selectedTodo.id;
//   let todos = getTodosFromLocalStorage();
//   todos = todos.filter((todo) => todo.todoId !== todoId);
//   localStorage.setItem("mytodos", JSON.stringify(todos));
// };

// const deleteTodo = (e) => {
//   const selectedTodo = e.target.parentElement.parentElement.parentElement;

//   todoLists.removeChild(selectedTodo);
//   showMessage("Todo is Deleted", "danger");

//   const todoId = selectedTodo.id;
//   let todos = getTodosFromLocalStorage();
//   todos = todos.filter((todo) => todo.todoId !== todoId);
//   localStorage.setItem("mytodos", JSON.stringify(todos));
// };
// // getTodosFromLocalStorage ========================

// const getTodosFromLocalStorage = () => {
//   return localStorage.getItem("mytodos")
//     ? JSON.parse(localStorage.getItem("mytodos"))
//     : [];
// };

// // addTodo ==========================================

// const addTodo = (e) => {
//   e.preventDefault();
//   const todoValue = todoInput.value;
//   const todoId = Date.now().toString();

//   showMessage("Todo is Added", "success");

//   createTodo(todoId, todoValue);

//   const todos = getTodosFromLocalStorage();
//   todos.push({ todoId, todoValue });
//   localStorage.setItem("mytodos", JSON.stringify(todos));
//   todoInput.value = "";
// };

// // loadTodos =======================================

// const loadTodos = () => {
//   const todos = getTodosFromLocalStorage();
//   todos.map((todo) => createTodo(todo.todoId, todo.todoValue));
// };

// // adding listener =================================

// todoForm.addEventListener("submit", addTodo);

// document.addEventListener("DOMContentLoaded", loadTodos);

// const text = document.querySelector(".sec-text");

// function textLoad() {
//   setTimeout(() => {
//     text.innerHTML = "Web Developer";
//   }, 0);
//   setTimeout(() => {
//     text.innerHTML = "Freelancer";
//   }, 4000);
//   setTimeout(() => {
//     text.innerHTML = "Content Creator";
//   }, 8000);
// }
// textLoad();
// setInterval(textLoad, 12000);

// const todoForm = document.querySelector(".todo-form");
// const todoInput = document.querySelector("#todoInput");

// const todoLists = document.querySelector("#lists");
// const messageElement = document.querySelector("#message");

// getTodoFromLocalStorage =========================

// const getTodoFromLocalStorage = () => {
//   return localStorage.getItem("mytodos")
//     ? JSON.parse(localStorage.getItem("mytodos"))
//     : [];
// };

// showMessage======================================

// const showMessage = (text, status) => {
//   messageElement.innerHTML = text;
//   messageElement.classList.add(`bg-${status}`);

//   setTimeout(() => {
//     messageElement.innerHTML = "";
//     messageElement.classList.remove(`bg-${status}`);
//   }, 1000);
// };

// createTodo ======================================

// const createTodo = (todoId, todoValue) => {
//   const todoElement = document.createElement("li");
//   todoElement.id = todoId;
//   todoElement.classList.add("li-style");
//   todoElement.innerHTML = `
//     <span>${todoValue}</span>
//     <span><button class="btn" id="deleteButton"><i class="fa fa-trash"></i></button></span>
//   `;
//   todoLists.appendChild(todoElement);

//   const deleteButton = todoElement.querySelector("#deleteButton");
//   deleteButton.addEventListener("click", deleteTodo);
// };

// deleteTodo ======================================

// const deleteTodo = (e) => {
//   const selectedTodo = e.target.parentElement.parentElement.parentElement;
//   todoLists.removeChild(selectedTodo);

//   showMessage("Todo is Deleted", "danger");

//   const todoId = selectedTodo.id;

//   let todos = getTodoFromLocalStorage();
//   todos = todos.filter((todo) => todo.todoId !== todoId);
//   localStorage.setItem("mytodos", JSON.stringify(todos));
// };

// addtodo =========================================

// function addTodo(e) {
//   e.preventDefault();
//   const todoValue = todoInput.value;

//   const todoId = Date.now().toString();

//   createTodo(todoId, todoValue);
//   showMessage("Todo is Added", "success");

//   const todos = getTodoFromLocalStorage();
//   todos.push({ todoId, todoValue });
//   localStorage.setItem("mytodos", JSON.stringify(todos));
// todoInput.value = "";
// }
// dataLoaded ======================================

// const dataLoaded = () => {
//   const todos = getTodoFromLocalStorage();
//   todos.map((todo) => createTodo(todo.todoId, todo.todoValue));
// };

// add listener ====================================
// todoForm.addEventListener("submit", addTodo);

// document.addEventListener("DOMContentLoaded", dataLoaded);

// const photos = [
//   "images/1.jpg",
//   "images/2.jpg",
//   "images/3.jpg",
//   "images/4.jpg",
//   "images/5.jpg",
//   "images/6.jpg",
//   "images/7.jpg",
//   "images/8.jpg",
// ];

// const image = document.querySelector("img");

// const right = document.querySelector(".fa-angle-right");

// const left = document.querySelector(".fa-angle-left");

// let count = 0;

// setTimeout(() => {
//   image.addEventListener("mouseover", function () {
//     count++;
//     if (count > photos.length) {
//       count = 1;
//       image.src = photos[count];
//       console.log((image.src = photos[count]));
//     } else {
//       image.src = photos[count];
//     }
//   });
// }, 2000);

// setTimeout(() => {
//   right.addEventListener("mousemove", function () {
//     count--;
//     if (count < 0) {
//       count = photos.length - 1;
//       image.src = photos[count];
//     } else {
//       image.src = photos[count];
//     }
//   });
// }, 4000);

// const todoForm = document.querySelector(".todo-form");
// const todoinput = document.querySelector("#inputTodo");
// const messageElement = document.querySelector("#message");
// const todoLists = document.querySelector("#lists");
// const showMessage = (text, status) => {
//   messageElement.innerHTML = text;
//   messageElement.classList.add(`bg-${status}`);
//   setTimeout(() => {
//     messageElement.innerHTML = "";
//     messageElement.classList.remove(`bg-${status}`);
//   }, 1000);
// };
// const getTodoFromLocalStorage = () => {
//   return localStorage.getItem("mytodos")
//     ? JSON.parse(localStorage.getItem("mytodos"))
//     : [];
// };

// const createTodo = (todoId, todoValue) => {
//   const todoElement = document.createElement("li");
//   todoElement.classList.add("li-style");
//   todoElement.id = todoId;
//   todoElement.innerHTML = `
//       <span>${todoValue}</span>
//     <span><button class="btn" id="deleteButton"><i class="fa fa-trash"></i></button></span>
//   `;
//   todoLists.appendChild(todoElement);
//   const deleteButton = todoElement.querySelector("#deleteButton");
//   deleteButton.addEventListener("click", deleteTodo);
// };
// const deleteTodo = (e) => {
//   const selectedTodo = e.target.parentElement.parentElement.parentElement;
//   todoLists.removeChild(selectedTodo);
//   showMessage("Todo is removed", "danger");
//   let todos = getTodoFromLocalStorage();
//   todos = todos.filter((todo) => todo.todoId !== selectedTodo.id);
//   localStorage.setItem("mytodos", JSON.stringify(todos));
// };
// const addTodo = (e) => {
//   e.preventDefault();
//   const todoValue = todoinput.value;
//   const todoId = Date.now().toString();
//   createTodo(todoId, todoValue);
//   showMessage("Todo is Added", "success");
//   const todos = getTodoFromLocalStorage();
//   todos.push({ todoId, todoValue });
//   localStorage.setItem("mytodos", JSON.stringify(todos));
//   todoinput.value = "";
// };
// const domLoaded = () => {
//   const todos = getTodoFromLocalStorage();
//   todos.map((todo) => createTodo(todo.todoId, todo.todoValue));
// };
// todoForm.addEventListener("submit", addTodo);
// window.addEventListener("DOMContentLoaded", domLoaded);

// document.querySelector(".container").addEventListener("click", function (e) {
//   const cElement = e.target;
//   const cBtn = cElement.className.includes("btn");
//   if (!cBtn) return;
//   const cText = e.target.parentNode.querySelector(".text");
//   cText.classList.toggle("showText");
//   if (cElement.textContent === "Read More") {
//     cElement.textContent = "Read Less";
//     cElement.style.color = "black";
//     cElement.style.background = "hotpink";
//   } else {
//     cElement.style.color = "white";
//     cElement.style.background = "black";
//     cElement.textContent = "Read More";
//   }
// });

// function allText() {
//   const text = document.querySelector(".sec-text");
//   setTimeout(() => {
//     text.textContent = "Web Developer";
//   }, 0);
//   setTimeout(() => {
//     text.textContent = "Freelancer";
//   }, 4000);
//   setTimeout(() => {
//     text.textContent = "Blogger";
//   }, 8000);
// }
// allText();
// setInterval(() => {
//   allText();
// }, 12000);

// const container = document.querySelector(".container");
// container.addEventListener("click", function (e) {
//   const cElement = e.target;
//   const cBtn = cElement.className.includes("btn");
//   if (!cBtn) return;
//   const cText = e.target.parentNode.querySelector(".para");
// });

// const tabcontents = document.querySelectorAll(".tab-contents");
// function opentab(tabname) {
//   for (tabc of tabcontents) {
//     tabc.classList.remove("active-tab");
//   }
//   document.getElementById(tabname).classList.add("active-tab");
// }

// const content = document.querySelectorAll(".content");

// function myFunc(na) {
//   for (cont of content) {
//     cont.classList.remove("ac");
//   }
//   document.getElementById(na).classList.add("ac");
// }

// const coreContent = document.querySelectorAll(".cont");

// function myFunc(name) {
//   for (let subContent of coreContent) {
//     subContent.classList.remove("active");
//   }
//   document.getElementById(name).classList.add("active");
// }

// const input = document.querySelector("input");

// input.addEventListener("keyup", function (e) {
//   const inputValue = input.value.toUpperCase();
//   const storeItems = document.querySelector(".items");

//   const porducts = document.querySelectorAll(".item");

//   const pname = document.getElementsByTagName("h2");

//   for (let i = 0; i < pname.length; i++) {
//     const match = porducts[i].getElementsByTagName("h2")[0];
//     if (match) {
//       if (match.textContent.toUpperCase().indexOf(inputValue) > -1) {
//         porducts[i].style.display = "";
//       } else {
//         porducts[i].style.display = "none";
//       }
//     }
//   }
// });

// const contents = document.querySelectorAll(".cont");

// function myFunc(name) {
//   for (let x of contents) {
//     x.classList.remove("active");
//   }
//   document.getElementById(name).classList.add("active");
// }

// const coreContent = document.querySelectorAll(".cont");

// function myFunc(name) {
//   for (let subContent of coreContent) {
//     subContent.classList.remove("active");
//   }
//   document.getElementById(name).classList.add("active");
// }

// const allContent = document.querySelectorAll(".tab");
// const button = document.querySelectorAll(".btn");

// function myFunc(name) {
//   for (let singleTab of allContent) {
//     singleTab.classList.remove("active");
//   }

//   document.getElementById(name).classList.add("active");
// }

// const button = document.querySelector("#btn");

// button.addEventListener("click", function () {
//   const bangla = parseInt(document.querySelector("#bangla").value);
//   const english = parseInt(document.querySelector("#english").value);
//   const math = parseInt(document.querySelector("#math").value);
//   const chemistry = parseInt(document.querySelector("#chemistry").value);
//   const hireMath = parseInt(document.querySelector("#hireMath").value);
//   const physics = parseInt(document.querySelector("#physics").value);
//   const result = document.querySelector("#result");
//   const bn = document.querySelector("#bn");
//   const en = document.querySelector("#en");
//   const ma = document.querySelector("#ma");
//   const cm = document.querySelector("#cm");
//   const hm = document.querySelector("#hm");
//   const ps = document.querySelector("#ps");

//   if (bangla <= 32) {
//     bn.innerHTML = `You Faild in Bangla`;
//   }
//   if (english <= 32) {
//     en.innerHTML = `You Faild in English`;
//   }
//   if (math <= 32) {
//     ma.innerHTML = `You Faild in Math`;
//   }
//   if (hireMath <= 32) {
//     hm.innerHTML = `You Faild in Hire Math`;
//   }
//   if (chemistry <= 32) {
//     cm.innerHTML = `You Faild in Chemistry`;
//   }
//   if (physics <= 32) {
//     ps.innerHTML = `You Faild in Physics`;
//   }
//   const totalValue = bangla + english + math + chemistry + hireMath + physics;
//   const totalValues = parseFloat(totalValue / 6).toFixed();
//   console.log(totalValues);

//   if (
//     totalValues >= 80 &&
//     totalValues <= 100 &&
//     bangla >= 33 &&
//     english >= 33 &&
//     math >= 33 &&
//     chemistry >= 33 &&
//     hireMath >= 33 &&
//     physics >= 33
//   ) {
//     result.innerHTML = `Your Total Number is = ${totalValue},<br> & Your GPA is = <span style="color:cyan;">A+</span>`;
//   } else if (
//     totalValues >= 70 &&
//     totalValues <= 79 &&
//     bangla >= 33 &&
//     english >= 33 &&
//     math >= 33 &&
//     chemistry >= 33 &&
//     hireMath >= 33 &&
//     physics >= 33
//   ) {
//     result.innerHTML = `Your Total Number is = ${totalValue},<br> & Your GPA is = <span style="color:cyan;">A</span>`;
//   } else if (
//     totalValues >= 60 &&
//     totalValues <= 69 &&
//     bangla >= 33 &&
//     english >= 33 &&
//     math >= 33 &&
//     chemistry >= 33 &&
//     hireMath >= 33 &&
//     physics >= 33
//   ) {
//     result.innerHTML = `Your Total Number is = ${totalValue},<br> & Your GPA is = <span style="color:cyan;">A-</span>`;
//   } else if (
//     totalValues >= 50 &&
//     totalValues <= 59 &&
//     bangla >= 33 &&
//     english >= 33 &&
//     math >= 33 &&
//     chemistry >= 33 &&
//     hireMath >= 33 &&
//     physics >= 33
//   ) {
//     result.innerHTML = `Your Total Number is = ${totalValue},<br> & Your GPA is = <span style="color:cyan;">B</span>`;
//   } else if (
//     totalValues >= 40 &&
//     totalValues <= 49 &&
//     bangla >= 33 &&
//     english >= 33 &&
//     math >= 33 &&
//     chemistry >= 33 &&
//     hireMath >= 33 &&
//     physics >= 33
//   ) {
//     result.innerHTML = `Your Total Number is = ${totalValue},<br> & Your GPA is = <span style="color:cyan;">C</span>`;
//   } else if (
//     totalValues >= 33 &&
//     totalValues <= 39 &&
//     bangla >= 33 &&
//     english >= 33 &&
//     math >= 33 &&
//     chemistry >= 33 &&
//     hireMath >= 33 &&
//     physics >= 33
//   ) {
//     result.innerHTML = `Your Total Number is = ${totalValue},<br> & Your GPA is = <span style="color:cyan;">D</span>`;
//   } else {
//     result.innerHTML = `Your Total Number is = ${totalValue},<br> & Your GPA is = <span style="color:red;">Fail</span>`;
//   }
// });

// document.querySelector(".btn").addEventListener("click", function () {
//   location.reload();
// });
// function age() {
//   var d1 = document.getElementById("date").value;
//   var m1 = document.getElementById("month").value;
//   var y1 = document.getElementById("year").value;

//   var date = new Date();
//   var d2 = date.getDate();
//   var m2 = 1 + date.getMonth();
//   var y2 = date.getFullYear();
//   var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//   if (d1 > d2) {
//     d2 = d2 + month[m2 - 1];
//     m2 = m2 - 1;
//   }
//   if (m1 > m2) {
//     m2 = m2 + 12;
//     y2 = y2 - 1;
//   }
//   var d = d2 - d1;
//   var m = m2 - m1;
//   var y = y2 - y1;

//   document.getElementById("age").innerHTML =
//     "Your Age is " + y + " Years " + m + " Months " + d + " Days";
// }

// const btn = document.querySelector("#btn");

// btn.addEventListener("click", function () {
//   var birthDay = document.querySelector("#day").value;
//   var birthMonth = document.querySelector("#month").value;
//   var birthYear = document.querySelector("#year").value;

//   var date = new Date();
//   var currentDay = date.getDate();
//   var currentMonth = date.getMonth() + 1;
//   var currentYear = date.getFullYear();

//   var months = [31, 28, 31, 30, 31, 31, 30, 31, 30, 31, 30, 31];

//   if (birthDay > currentDay) {
//     currentDay = currentDay + months[currentMonth - 1];
//     currentMonth = currentMonth - 1;
//   }

//   if (birthMonth > currentMonth) {
//     currentMonth = currentMonth + 12;
//     currentYear = currentYear - 1;
//   }
//   var day = currentDay - birthDay;
//   var month = currentMonth - birthMonth;
//   var year = currentYear - birthYear;

//   console.log(day, month, year);
// });
// const btn = document.querySelector("#btn");

// btn.addEventListener("click", function () {
//   var birthDate = document.querySelector("#day").value;
//   const birthMonth = document.querySelector("#month").value;
//   const birthYear = document.querySelector("#year").value;

//   var date = new Date();
//   var currentDate = date.getDate();
//   var currentMonth = date.getMonth() + 1;
//   var currentYear = date.getFullYear();

//   var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//   if (birthDate > currentDate) {
//     currentDate = currentDate + month[currentMonth - 1];
//     currentMonth - currentMonth - 1;
//   }
//   if (birthMonth > currentMonth) {
//     currentMonth = currentMonth + 12;
//     currentYear = currentYear - 1;
//   }

//   var day = currentDate - birthDate;
//   var months = currentMonth - birthMonth;
//   var year = currentYear - birthYear;

//   console.log(day, months, year);
// });

// const input = document.querySelector("input");

// input.addEventListener("keyup", function () {
//   const inputValue = input.value.toUpperCase();
//   const product = document.querySelectorAll(".item");
//   const pname = document.getElementsByTagName("h2");
//   for (let i = 0; i < pname.length; i++) {
//     const match = product[i].getElementsByTagName("h2")[0];
//     if (match) {
//       if (match.textContent.toUpperCase().indexOf(inputValue) > -1) {
//         product[i].style.display = "";
//       } else {
//         product[i].style.display = "none";
//       }
//     }
//   }
// });

// const container = document.querySelector(".container");

// container.addEventListener("click", function (e) {
//   const cElement = e.target;
//   const btn = e.target.className.includes("btn");
//   if (!btn) return;
//   const cText = e.target.parentNode.querySelector(".text");
//   cText.classList.toggle("active");
//   if (cElement.textContent === "Read More") {
//     cElement.textContent = "Read Less";
//   } else {
//     cElement.textContent = "Read More";
//   }
// });

// const input = document.querySelector("#input");

// input.addEventListener("click", function () {
//   var birthDate = document.querySelector("#date").value;
//   var birthMonth = document.querySelector("#month").value;
//   var birthYear = document.querySelector("#year").value;

//   var date = new Date();
//   var currentDate = date.getDate();
//   var currentMonth = date.getMonth() + 1;
//   var currentYear = date.getFullYear();

//   var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//   if (birthDate > currentDate) {
//     currentDate = currentDate + months[currentMonth - 1];
//     currentMonth = currentMonth - 1;
//   }
//   if (birthMonth > currentMonth) {
//     currentMonth = currentMonth + 12;
//     currentYear = currentYear - 1;
//   }
//   var day = currentDate - birthDate;
//   var month = currentMonth - birthMonth;
//   var year = currentYear - birthYear;

//   console.log(day, month, year);
// });

/* onst todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("#todoInput");
const todoLists = document.querySelector("#lists");
const messageElement = document.querySelector("#message");

// showMessage =====================================

const showMessage = (text, status) => {
  messageElement.innerHTML = text;
  messageElement.classList.add(`bg-${status}`);

  setTimeout(() => {
    messageElement.innerHTML = "";
    messageElement.classList.remove(`bg-${status}`);
  }, 1000);
};

// getTodosFromLocalStorage ========================

const getTodosFromLocalStorage = () => {
  return localStorage.getItem("mytodos")
    ? JSON.parse(localStorage.getItem("mytodos"))
    : [];
};

// createTodo ======================================

const createTodo = (todoId, todoValue) => {
  const todoElement = document.createElement("li");
  todoElement.Id = todoId;
  todoElement.classList.add("li-style");

  todoElement.innerHTML = `
  
    <span>${todoValue}</span>
    <span><button class="btn" id="deleteTodoButton"><i class="fa fa-trash"></i></button></span>
  `;
  todoLists.appendChild(todoElement);

  const deleteButton = todoElement.querySelector("#deleteTodoButton");
  deleteButton.addEventListener("click", deleteTodo);
};

// deleteTodo ======================================

const deleteTodo = (e) => {
  const selectedTodo = e.target.parentElement.parentElement.parentElement;

  todoLists.removeChild(selectedTodo);

  let todos = getTodosFromLocalStorage();

  todos = todos.filter((todo) => todo.todoId !== selectedTodo.Id);

  localStorage.setItem("mytodos", JSON.stringify(todos));
};
// addTodo =========================================

const addTodo = (e) => {
  e.preventDefault();

  const todoValue = todoInput.value;

  // unique id ====================================

  const todoId = Date.now().toString();

  createTodo(todoId, todoValue);

  showMessage("Todo is Added", "success");

  const todos = getTodosFromLocalStorage();
  todos.push({ todoId, todoValue });
  localStorage.setItem("mytodos", JSON.stringify(todos));

  todoInput.value = "";
};

// domLoaded ========================================

const domLoaded = () => {
  const todos = getTodosFromLocalStorage();

  todos.map((todo) => createTodo(todo.todoId, todo.todoValue));
};

// add listener ====================================

todoForm.addEventListener("submit", addTodo);

window.addEventListener("DOMContentLoaded", domLoaded);
 */

// const card = document.querySelector(".card");

// const form = document.querySelector("form");

// const input = document.querySelector("#number");

// const result = document.querySelector("#result");

// const remainingAttempts = document.querySelector("#remainingAttempts");
// const btn = document.querySelector(".btn");

// const p = document.createElement("p");

// let won = 0;
// let lost = 0;
// let totalAttempts = 5;
// let attempts = 0;

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const gNumber = guessingNumber(5);
//   const inputValue = input.value;
//   outputArea(gNumber, inputValue);
//   attempts++;

//   if (attempts == 5) {
//     input.disabled = true;
//     btn.disabled = true;
//     btn.style.background = "gray";
//     btn.innerHTML = "--Disabled--";
//   }
//   remainingAttempts.innerHTML = `Remaining attempts = ${
//     totalAttempts - attempts
//   }`;

//   input.value = "";
// });

// const outputArea = (gNumber, inputValue) => {
//   if (gNumber == inputValue) {
//     result.innerHTML = `<span style="color:white; font-weight:bold;">You have Won</span>`;
//     won++;
//   } else {
//     result.innerHTML = `You have Lost, Guessing Number Was = ${gNumber}`;
//     lost++;
//   }
//   p.classList.add("large-text");
//   card.appendChild(p);
//   p.innerHTML = `<span style="color:black; font-weight:bold;">You have Won = ${won} times</span> <br> You have lost = ${lost} times`;
// };

// const guessingNumber = (limit) => {
//   return Math.floor(Math.random() * limit + 1);
// };

// const stext = document.querySelector(".s-text");

// function allText() {
//   setTimeout(() => {
//     stext.innerHTML = "Web Developre";
//   }, 0);
//   setTimeout(() => {
//     stext.innerHTML = "Freelancer";
//   }, 4000);
//   setTimeout(() => {
//     stext.innerHTML = "Blogger";
//   }, 8000);
// }
// allText();
// setInterval(() => {
//   allText();
// }, 12000);

// const active = document.querySelectorAll(".content");

// function myFunc(passIdName) {
//   for (let activ of active) {
//     activ.classList.remove("active");
//   }
//   document.getElementById(passIdName).classList.add("active");
// }

// const contents = document.querySelectorAll(".content");

// function myFync(passIdName) {
//   for (let content of contents) {
//     content.classList.remove("active");
//   }
//   document.getElementById(passIdName).classList.add("active");
// }

// const container = document.querySelector(".container");
// container.addEventListener("click", function (e) {
//   const cElement = e.target;
//   const cBtn = cElement.className.includes("button");
//   if (!cBtn) return;
//   const cText = e.target.parentNode.querySelector(".text");
//   cText.classList.toggle("showHide");
//   if (cElement.textContent === "Read More") {
//     cElement.textContent = "Read Less";
//     cElement.style.background = "deepskyblue";
//     cElement.style.color = "black";
//   } else {
//     cElement.textContent = "Read More";
//     cElement.style.background = "darkcyan";
//     cElement.style.color = "white";
//   }
// });

// const button = document.querySelector("#btn");

// button.addEventListener("click", function () {
//   var dateOfBirth = document.querySelector("#dateOfBirth");
//   var inputDate = new Date(dateOfBirth.value);

//   var birthDate = inputDate.getDate();
//   var birthMonth = inputDate.getMonth() + 1;
//   var birthYear = inputDate.getFullYear();

//   var date = new Date();
//   var currentDate = date.getDate();
//   var currentMonth = date.getMonth() + 1;
//   var currentYear = date.getFullYear();

//   if (birthDate > currentDate) {
//     birthDate = currentDate + (currentMonth + 1);
//     currentMonth = currentMonth - 1;
//   }
//   if (birthMonth > currentMonth) {
//     currentMonth = currentMonth + 12;
//     currentYear = currentYear - 1;
//   }
//   var bDate = currentDate - birthDate;
//   var bMonth = currentMonth - birthMonth;
//   var bYear = currentYear - birthYear;
//   document.querySelector(
//     "#result"
//   ).innerHTML = `Your Current Age is = ${bYear} years ${bMonth} month ${bDate} Days`;
// });

// const input = document.querySelector("input");

// input.addEventListener("keyup", function (e) {
//   e.preventDefault();
//   const inputValue = input.value.toUpperCase();
//   const product = document.querySelectorAll(".item");
//   const pname = document.getElementsByTagName("h2");

//   for (let i = 0; i < pname.length; i++) {
//     let match = product[i].getElementsByTagName("h2")[0];
//     if (match) {
//       if (match.textContent.toUpperCase().indexOf(inputValue) > -1) {
//         product[i].style.display = "";
//       } else {
//         product[i].style.display = "none";
//       }
//     }
//   }
// });

// const button = document.querySelector("button");
// button.addEventListener("click", function () {
//   const input = document.querySelector("input");
//   const inputDate = new Date(input.value);
//   var birthDate = inputDate.getDate();
//   var birthMonth = inputDate.getMonth() + 1;
//   var birthYear = inputDate.getFullYear();

//   const date = new Date();
//   var currentDate = date.getDate();
//   var currentMonth = date.getMonth() + 1;
//   var currentYear = date.getFullYear();

//   if (birthDate > currentDate) {
//     currentDate = currentDate + (currentMonth + 1);
//     currentMonth = currentMonth - 1;
//   }
//   if (birthMonth > currentMonth) {
//     currentMonth = currentMonth + 12;
//     currentYear = currentYear - 1;
//   }
//   var cBrith = currentDate - birthDate;
//   var cMonth = currentMonth - birthMonth;
//   var cYear = currentYear - birthYear;
//   document.querySelector(
//     "#result"
//   ).innerHTML = `Your Current Age is = ${cYear} Years ${cMonth} Month ${cBrith}`;
// });

// let btn = document.querySelectorAll("span");
// let value = document.querySelector("#values");

// for (let i = 0; i < btn.length; i++) {
//   btn[i].addEventListener("click", function () {
//     if (this.innerHTML == "=") {
//       value.value = eval(value.value);
//     } else {
//       if (this.innerHTML == "Clear") {
//         value.value = "";
//       } else {
//         value.value += this.innerHTML;
//       }
//     }
//   });
// }

// const btn = document.querySelectorAll("span");
// const values = document.querySelector("input");

// for (let i = 0; i < btn.length; i++) {
//   btn[i].addEventListener("click", function () {
//     if (this.innerHTML == "=") {
//       values.value = eval(values.value).toLocaleString();
//     } else if (this.innerHTML == "D") {
//       values.value = values.value.slice(0, -1);
//     } else {
//       if (this.innerHTML == "c") {
//         values.value = "";
//       } else {
//         values.value += this.innerHTML;
//       }
//     }
//   });
// }

// let btn = document.querySelectorAll("span");

// let value = document.querySelector("#values");

// for (let i = 0; i < btn.length; i++) {
//   btn[i].addEventListener("click", function () {
//     if (this.innerHTML == "=") {
//       this.innerHTML = eval(value.innerHTML);
//     } else {
//       if (this.innerHTML == "C") {
//         value.innerHTML = "";
//       } else {
//         value.innerHTML += this.innerHTML;
//       }
//     }
//   });
// }

// let result = document.getElementById("result");

// function numShow(num) {
//   result.value += num;
// }
// function clrAll() {
//   result.value = "";
// }
// function del() {
//   result.value = result.value.slice(0, -1);
// }
// function calculate() {
//   let x = result.value;
//   let y = eval(x);
//   result.value = y;
// }

// const result = document.querySelector("input");
// const btn = document.querySelectorAll("span");

// for (let i = 0; i < btn.length; i++) {
//   btn[i].addEventListener("click", function () {
//     if (this.innerHTML == "=") {
//       result.value = eval(result.value);
//     } else if (this.innerHTML == "D") {
//       result.value = result.value.slice(0, -1);
//     } else {
//       if (this.innerHTML == "C") {
//         result.value = "";
//       } else {
//         result.value += this.innerHTML;
//       }
//     }
//   });
// }

// const result = document.querySelector("input");
// const btn = document.querySelectorAll("span");

// for (let i = 0; i < btn.length; i++) {
//   btn[i].addEventListener("click", function () {
//     if (this.innerHTML == "=") {
//       result.value = eval(result.value).toLocaleString();
//     } else if (this.innerHTML == "D") {
//       result.value = result.value.slice(0, -1);
//     } else {
//       if (this.innerHTML == "C") {
//         result.value = "";
//       } else {
//         result.value += this.innerHTML;
//       }
//     }
//   });
// }
// const countDownDate = new Date("Jan 01, 2024 00:00:00").getTime();
// const x = setInterval(() => {
//   const now = new Date().getTime();
//   const distance = countDownDate - now;

//   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const hours = Math.floor(
//     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   document.querySelector("#days").innerHTML = days;
//   document.querySelector("#hours").innerHTML = hours;
//   document.querySelector("#minutes").innerHTML = minutes;

//   document.querySelector("#seconds").innerHTML = seconds;
// }, 1000);

// setInterval(() => {
//   const p = document.querySelector("#countDownTime");
//   const eventDate = new Date("01 May 2023 00:00:00");
//   const currentDate = new Date();
//   const differ = eventDate - currentDate;
//   const differSec = Math.floor(differ / 1000);
//   const differMin = Math.floor(differSec / 60);
//   const differHour = Math.floor(differMin / 60);
//   const differDay = Math.floor(differHour / 17);

//   var remDay = differDay;
//   var remSec = differSec % 60;
//   var remMin = differMin % 60;
//   var remHoure = differHour % 24;
//   if (remDay < 10) {
//     remDay = "0" + remDay;
//   }
//   if (remHoure < 10) {
//     remHoure = "0" + remHoure;
//   }
//   if (remMin < 10) {
//     remMin = "0" + remMin;
//   }
//   if (remSec < 10) {
//     remSec = "0" + remSec;
//   }
//   p.innerHTML = `${remDay} Days, ${remHoure} Hour, ${remMin} Minutes, ${remSec} Seconds`;
// }, 1000);

// setInterval(() => {
//   const p = document.querySelector("#countDownTime");
//   const eventTime = new Date("31 Jan 2024 11:59:59 PM");
//   const currentTime = new Date();
//   const differ = eventTime - currentTime;
//   const differSec = Math.floor(differ / 1000);
//   const differMin = Math.floor(differSec / 60);
//   const differHour = Math.floor(differMin / 60);
//   const differDay = Math.floor(differHour / 24);
//   const remDay = differDay;
//   const remSec = differSec % 60;
//   const remMin = differMin % 60;
//   const remHoure = differHour % 24;
//   if (eventTime < currentTime) {
//     p.innerHTML = "";
//     p.style.background = "none";
//   } else {
//     p.innerHTML = `${remDay} Days, ${remHoure} Hour, ${remMin} Minutes, ${remSec} Seconds`;
//   }
// }, 1000);

// const product = [
//   {
//     image: "images/1.jpg",
//     title: "Tablet",
//     price: 60,
//   },
//   {
//     image: "images/2.jpg",
//     title: "Computer",
//     price: 90,
//   },
//   {
//     image: "images/3.jpg",
//     title: "Laptop",
//     price: 30,
//   },
//   {
//     image: "images/4.jpg",
//     title: "Mobile",
//     price: 100,
//   },
// ];

// let i = 0;

// document.getElementById("root").innerHTML = product
//   .map((item) => {
//     const { image, title, price } = item;
//     return `
//       <div class="img-box">
//       <img class = "image" src=${image}>
//       <div class="title">${title}</div>
//       <h2 class="price">$ ${price}.00</h2>
//        <button class='button' onclick='addToCart(${i++})'>Add to Cart</button>
//       </div>
//   `;
//   })
//   .join("");

// const cart = [];

// function addToCart(e) {
//   cart.push({ ...product[e] });
//   shoppingCart();
// }

// function delElement() {
//   cart.splice(cart, 1);
//   shoppingCart();
// }
// function shoppingCart() {
//   let j = 0;
//   let total = 0;
//   document.getElementById("count").innerHTML = cart.length;
//   if (cart.length == 0) {
//     document.getElementById("message").innerHTML = "Your Cart is Empty";
//     document.getElementById("price").innerHTML = `$ ${0}.00`;
//   } else {
//     document.getElementById("message").innerHTML = cart
//       .map((items) => {
//         const { image, title, price } = items;
//         total = total + price;
//         document.getElementById("price").innerHTML = ` $ ${total}.00`;
//         return `
//           <div class="cartsItems">
//           <img class="images" src="${image}">
//           <div style="font-size:12px;">${title}</div>
//            <h2 style='font-size: 15px;'>$ ${price}.00</h2><i class='fa-solid fa-trash' onclick='delElement(${j++})'></i></div>`;
//       })
//       .join("");
//   }
// }

// const product = [
//   {
//     image: "images/1.jpg",
//     title: "Mobile",
//     price: 60,
//   },
//   {
//     image: "images/2.jpg",
//     title: "Laptop",
//     price: 100,
//   },
//   {
//     image: "images/3.jpg",
//     title: "Computer",
//     price: 80,
//   },
//   {
//     image: "images/4.jpg",
//     title: "Tablet",
//     price: 90,
//   },
// ];

// let i = 0;
// document.getElementById("root").innerHTML = product
//   .map((item) => {
//     const { image, title, price } = item;
//     return `
//     <div class="img-box">
//     <img src="${image}" class="pImage">
//     <h4>${title}</h4>
//     <h5>$ ${price}.00</h5>
//     <button class="btn" onclick="addToCart(${i++})">Add Cart</button>
//     </div>
//   `;
//   })
//   .join("");

// const cart = [];

// function addToCart(e) {
//   cart.push({ ...product[e] });
//   shoppingCart();
// }
// function deleteCart() {
//   cart.splice(cart, 1);
//   shoppingCart();
// }
// function shoppingCart() {
//   let j = 0;
//   let total = 0;
//   document.getElementById("count").innerHTML = cart.length;
//   if (cart.length == 0) {
//     document.getElementById("message").innerHTML = "Your Cart is Empty";
//     document.getElementById("total").innerHTML = `$ ${0}.00`;
//   } else {
//     document.getElementById("message").innerHTML = cart
//       .map((items) => {
//         const { image, title, price } = items;
//         total = total + price;
//         document.getElementById("total").innerHTML = `$ ${total}.00`;
//         return `
//           <div class="cart-flex">
//             <img src="${image}" class="img-flex">
//             <h5>${title}</h5>
//             <h6>$ ${price}.00</h6>
//             <i class="fa fa-trash" onclick="deleteCart(${j++})"></i>
//           </div>
//         `;
//       })
//       .join("");
//   }
// }

// const product = [
//   {
//     image: "images/1.jpg",
//     title: "Mobile",
//     price: 60,
//   },
//   {
//     image: "images/2.jpg",
//     title: "Laptop",
//     price: 80,
//   },
//   {
//     image: "images/3.jpg",
//     title: "Computer",
//     price: 100,
//   },
//   {
//     image: "images/4.jpg",
//     title: "Watch",
//     price: 110,
//   },
//   {
//     image: "images/5.jpg",
//     title: "Mobile",
//     price: 70,
//   },
//   {
//     image: "images/6.jpg",
//     title: "Laptop",
//     price: 90,
//   },
//   {
//     image: "images/7.jpg",
//     title: "Computer",
//     price: 40,
//   },
//   {
//     image: "images/8.jpg",
//     title: "Watch",
//     price: 50,
//   },
// ];

// let i = 0;
// document.getElementById("root").innerHTML = product
//   .map((item) => {
//     const { image, title, price } = item;
//     return `
//   <div class="product">
//     <img class="p-img" src="${image}">
//     <h2 class="title">${title}</h2>
//     <h3 class="price">$ ${price}.00</h3>
//     <button class="btn" onclick="addToCart(${i++})">Add Cart</button>
//   </div>
//   `;
//   })
//   .join("");

// const cart = [];
// function addToCart(e) {
//   cart.push({ ...product[e] });
//   sideBarProduct();
// }
// function deleteCart() {
//   cart.splice(cart, 1);
//   sideBarProduct();
// }

// function sideBarProduct() {
//   let j = 0;
//   let total = 0;
//   document.getElementById("count").innerHTML = cart.length;
//   if (cart.length == 0) {
//     document.getElementById("cartItems").innerHTML = "Your Cart is Empty";
//     document.getElementById("price").innerHTML = `$ 0${0}.00`;
//   } else {
//     document.getElementById("cartItems").innerHTML = cart
//       .map((items) => {
//         const { image, title, price } = items;
//         total = total + price;
//         document.getElementById("price").innerHTML = `$ ${total}.00`;
//         return `
//         <div>
//         <div class="cartItems">
//           <img src="${image}">
//           <p>${title}</p>
//           <h5>$ ${price}.00</h5>
//           <i class="fa-solid fa-trash" onclick="deleteCart(${j++})"></i>
//         </div>
//         </div>
//       `;
//       })
//       .join("");
//   }
// }

// setInterval(() => {
//   const p = document.querySelector("#countDownTimer");

//   const eventTime = new Date("15 May 2023 00:00:00");
//   const currentDate = new Date();

//   const differ = eventTime - currentDate;
//   var differSec = Math.floor(differ / 1000);
//   var differMin = Math.floor(differSec / 60);
//   var differHour = Math.floor(differMin / 60);
//   var divverDay = Math.floor(differHour / 24);
//   var remSec = differSec % 60;
//   var remMin = differMin % 60;
//   var remHour = differHour % 24;
//   if (divverDay < 10) {
//     divverDay = "0" + divverDay;
//   }
//   if (remHour < 10) {
//     remHour = "0" + remHour;
//   }
//   if (remMin < 10) {
//     remMin = "0" + remMin;
//   }
//   if (remSec < 10) {
//     remSec = "0" + remSec;
//   }
//   p.innerHTML = `<span>${divverDay} Days</span><span>${remHour} Hours</span><span>${remMin} Minutes</span> <span>${remSec} Seconds</span>`;
// }, 1000);

// const btn = document.querySelectorAll("span");
// const result = document.querySelector("#input");

// for (let i = 0; i < btn.length; i++) {
//   btn[i].addEventListener("click", function () {
//     if (this.innerHTML == "=") {
//       result.value = eval(result.value);
//     } else if (this.innerHTML == "D") {
//       result.value = result.value.slice(0, -1);
//     } else {
//       if (this.innerHTML == "C") {
//         result.value = "";
//       } else {
//         result.value += this.innerHTML;
//       }
//     }
//   });
// }
// let porgressBar = document.querySelector(".circular-progress");
// let valueContainer = document.querySelector(".value-container");

// let progressValue = 0;
// let progressEndValue = 65;
// let speed = 150;

// let porgress = setInterval(() => {
//   progressValue++;
//   valueContainer.textContent = `${progressValue}%`;
/* porgressBar.style.background = `ralial-gradient(
    #fff, ${progressValue * 3.6} deg,
    #eee, ${progressValue * 3.6} deg
  )`; */
//   porgressBar.style.background = `conic-gradient(${progressValue} 45deg, blue, red);`;
//   if (progressValue == progressEndValue) {
//     clearInterval(porgress);
//   }
// }, speed);

// console.clear();
// var p = document.querySelector("#demo");

// লুডু খেলায় আমরা কিভাবে ১ থেকে ৬ রেন্ডমলি প্রিন্ট করতে পারি ===========================================

// function rnadomNumber(limit) {
//   return Math.floor(Math.random() * limit) + 1;
// }
// console.log(rnadomNumber(6));

// function rnadomNumber(max, min) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// console.log(rnadomNumber(6, 1));

// কি ভাবে আমরা আমাদের শ্রেনীকক্ষের সকলের নাম Alphabetically সাজাতে পারি ==========================

// const allNames = [
//   "Tamim",
//   "Ibrahim",
//   "Karim",
//   "Tanzim",
//   "Shamim",
//   "Hamim",
//   "Robiul Islam",
//   "Monir",
//   "Abri",
// ];
// console.log(allNames.sort());

// কি ভাবে আমরা আমাদের শ্রেনীকক্ষের সকলের নাম রোল নম্বর ক্রম অনুযায়ী সাজাতে পারি ======================

// const allRoll = [
//   6, 5, 4, 3, 2, 1, 9, 8, 7, 11, 19, 18, 17, 16, 15, 20, 14, 12, 13,
// ];

// console.log(
//   allRoll.sort(function (a, b) {
//     return a - b;
//   })
// );

// কোন সাল Leap Year কিনা তা বের করব কিভাবে ? ==================================================

// function isLeapYea(year) {
//   if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//     console.log(`${year} is a LeapYear`);
//   } else {
//     console.log(`${year} Year is Not a Leapyear`);
//   }
// }
// isLeapYea(2023);
// isLeapYea(2022);
// isLeapYea(2024);

// function isLeapYea(year) {
//   if (year % 4 === 0) {
//     console.log(`${year} is a Leap Year`);
//   } else {
//     console.log(`${year} is not a Leap Year`);
//   }
// }
// isLeapYea(2026);
// isLeapYea(2028);

// কোন sentence এ কতগুলো vowel আছে তা কিভাবে নির্নয় করব ?

// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// function coutnVowels(sentence) {
//   let count = 0;
//   const letters = Array.from(sentence);
//   letters.forEach((val, indx, arr) => {
//     if (vowels.includes(val)) {
//       count++;
//     }
//   });
//   return count;
// }

// console.log(coutnVowels("This is Robiul Islam Munna"));

// কোন Array থেকে Duplicate নাম্বার গুলোকে কিভাবে বের করে আনতে পারি ? =============================

// const numbers = [3, 6, 4, 8, 9, 5, 7, 1, 2, 3, 6, 4, 5, 6, 1, 5];

// const Duplicate = numbers.filter((val, indx, arr) => {
//   return arr.indexOf(val) !== indx;
// });
// console.log(Duplicate);

// const unique = numbers.filter((val, indx, arr) => {
//   return arr.indexOf(val) === indx;
// });
// console.log(unique);

// const sentence =
//   "Learn with sumit is all about teaching web development skills and technique in an efficient and practical manner. If you are just getting started in web development, Learn whit sumit hal all the tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack developer. Learn with sumit also deep dives into advanced topics using the latest best practices for you seasoned web developers.";

// console.log(sentence.match(/sumit/gi));
// const matches = sentence.match(/sumit/gi);
// const match = matches ? matches : "Null";
// console.log(match);

// const occureances = matches ? matches.length : 0;
// console.log(occureances);

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// console.log(getRandomNumber(1, 6));

// function getRandomNumber(limit) {
//   return Math.floor(Math.random() * limit) + 1;
// }
// console.log(getRandomNumber(6));

// const studentsName = [
//   "Tamim",
//   "Shamim",
//   "Ibrahim",
//   "Hamaim",
//   "Karim",
//   "Abir,",
//   "Nurul",
// ];

// const slNameStudent = studentsName.sort();
// console.log(slNameStudent);

// const numbers = [10, 6, 3, 4, 2, 5, 1, 9, 7, 8];

// const slNumb = numbers.sort(function (a, b) {
//   return a - b;
// });
// console.log(slNumb);

// function isLeapYea(year) {
//   if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//     console.log(`${year} is a Leap Year`);
//   } else {
//     console.log(`${year} is !not a Leap Year`);
//   }
// }
// isLeapYea(2024);
// isLeapYea(2026);
// isLeapYea(2028);
// isLeapYea(2029);

// function isLeapYea(year) {
//   if (year % 4 === 0) {
//     console.log(`${year} is a Leap Year`);
//   } else {
//     console.log(`${year} is !not a leap year`);
//   }
// }
// isLeapYea(2026);
// isLeapYea(2028);
// isLeapYea(2030);

// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// function coutnVowels(sentence) {
//   let count = 0;
//   const letters = Array.from(sentence);
//   letters.forEach((val, indx, arr) => {
//     if (vowels.includes(val)) {
//       count++;
//     }
//   });
//   return count;
// }
// console.log(coutnVowels("I am Robiul Islam Munna"));

// const numbers = [10, 30, 60, 40, 60, , 20, 30, 10, 60, 50, 40];

// const unique = numbers.filter((val, indx, arr) => {
//   return arr.indexOf(val) == indx;
// });
// console.log(unique);
// const duplicate = numbers.filter((val, indx, arr) => {
//   return arr.indexOf(val) !== indx;
// });
// console.log(duplicate);

// const sentence =
//   "Learn with sumit is all about teaching web development skills and technique in an efficient and practical manner. If you are just getting started in web development, Learn whit sumit hal all the tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack developer. Learn with sumit also deep dives into advanced topics using the latest best practices for you seasoned web developers.";

// const matches = sentence.match(/sumit/gi);
// console.log(matches);
// const match = matches ? matches : "null";
// console.log(match);
// const matchNum = matches ? matches.length : "0";
// console.log(matchNum);

// let possition = sentence.search(/sumit/i);
// possition = possition >= 0 ? possition : "Not Found!!!!";
// console.log(possition);

// function linearSearch(arr, val) {
//   const arrlen = arr.length;
//   for (let i = 0; i < arrlen; i++) {
//     if (arr[i] === val) {
//       return arr[i];
//     }
//   }
//   return "Not found!!!";
// }
// console.log(linearSearch(["b", "a", "e", "f"], "f"));

// function longestString(names) {
//   let longestWord = [];
//   for (name of names) {
//     if (name.length > longestWord.length) {
//       longestWord = name;
//     }
//   }
//   return [longestWord, names.indexOf(longestWord)];
// }
// console.log(
//   longestString(["Tamim", "Karim", "Tanvri", "Saifullah", "Ibrahim", "tutul"])
// );

// function numbers(min, max) {
//   for (let i = min; i < max; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log(`${i} is Fizzbuzz---------`);
//     }
//     if (i % 3 === 0) {
//       console.log(`${i} is fizz`);
//     }
//     if (i % 5 === 0) {
//       console.log(`${i} is buzz.........`);
//     }
//   }
// }

// numbers(1, 100);

// const mixedArr = [
//   "Name",
//   undefined,
//   "karim",
//   false,
//   "",
//   "ibramih",
//   0,
//   40,
//   "K",
//   NaN,
//   "Thanks All",
//   null,
// ];

// const trueArray = mixedArr.filter(function (el) {
//   if (el) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(trueArray);

// const trueArray = mixedArr.filter(Boolean);
// console.log(trueArray);

// const obj = {
//   a: "Karim",
//   b: false,
//   c: "Tamim",
//   d: undefined,
//   e: 0,
//   f: "",
//   g: "Names",
//   h: null,
//   i: "Ibrahim",
//   j: NaN,
// };

// const truthyObject = function (obj) {
//   for (let x in obj) {
//     if (!obj[x]) {
//       delete obj[x];
//     }
//   }
//   return obj;
// };
// console.log(truthyObject(obj));

// function getRandomNumber(limit) {
//   return Math.floor(Math.random() * limit) + 1;
// }
// console.log(getRandomNumber(6));

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// console.log(getRandomNumber(1, 6));

// const studentNames = [
//   "Tamim",
//   "Abri",
//   "Shakib",
//   "Babul",
//   "Ibrahim",
//   "Naim",
//   "Karim",
// ];

// const AlphabeticallyStudentNames = studentNames.sort();
// console.log(AlphabeticallyStudentNames);

// const rollNumbers = [3, 6, 2, 5, 4, 1, 9, 7, 8];
// const slWiseRollNumbers = rollNumbers.sort(function (a, b) {
//   return a - b;
// });
// console.log(slWiseRollNumbers);

// function isLeapYea(year) {
//   if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//     console.log(`${year} is a Leap Year`);
//   } else {
//     console.log(`${year} is Not a Leap Year`);
//   }
// }
// isLeapYea(2023);
// isLeapYea(2024);
// isLeapYea(2025);
// isLeapYea(2028);

// function isLeapYea(year) {
//   if (year % 4 === 0) {
//     console.log(`${year} is a Leap Year`);
//   } else {
//     console.log(`${year} is not a Leap Year`);
//   }
// }
// isLeapYea(2026), isLeapYea(2028), isLeapYea(2068);

// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// function coutnVowels(sentence) {
//   let count = 0;
//   const letters = Array.from(sentence);
//   letters.forEach((val, indx, arr) => {
//     if (vowels.includes(val)) {
//       count++;
//     }
//   });
//   return count;
// }
// console.log(coutnVowels("This is Roibul islam Munna"));

// const numbers = [10, 20, 30, 50, 60, 40, 60, 50];
// const duplicate = numbers.filter((val, indx, arr) => {
//   return arr.indexOf(val) !== indx;
// });
// console.log(duplicate);
// const unique = numbers.filter((val, indx, arr) => {
//   return arr.indexOf(val) == indx;
// });
// console.log(unique);

// const sentence =
//   "Learn with sumit is all about teaching web development skills and technique in an efficient and practical manner. If you are just getting started in web development, Learn whit sumit hal all the tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack developer. Learn with sumit also deep dives into advanced topics using the latest best practices for you seasoned web developers.";

// const matches = sentence.match(/sumit/gi);
// const matchesLength = matches ? matches.length : "0";
// console.log(matchesLength);

// const searchs = sentence.search(/sumit/gi);
// const result = searchs >= 0 ? searchs : "Not Found";
// console.log(result);

// function linearSearch(arr, val) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == val) {
//       return arr[i];
//     }
//   }
//   return "Not Found";
// }
// console.log(linearSearch(["a", "e", "i", "o", "u"], "i"));

// function linearSearch(arr, val) {
//   let len = arr.length;
//   for (let i = 0; i < len; i++) {
//     if (arr[i] === val) {
//       return arr[i];
//     }
//   }
//   return "Not found!!!!!";
// }
// console.log(linearSearch(["A", "B", "C", "D", "E"], "D"));

// function largestString(sentence) {
//   let largeNumber = [];
//   for (let name of sentence) {
//     if (name.length > largeNumber.length) {
//       largeNumber = name;
//     }
//   }
//   return [largeNumber, sentence.indexOf(largeNumber)];
// }
// console.log(
//   largestString([
//     "Robiul Islam",
//     "Tamim Iqbal",
//     "Ibrahm Zadran",
//     "Nannu Khan",
//     "Shakib al Hasan",
//   ])
// );

// function largestString(names) {
//   let largeString = [];
//   for (let name of names) {
//     if (name.length > largeString.length) {
//       largeString = name;
//     }
//   }
//   return [largeString, names.indexOf(largeString)];
// }
// console.log(
//   largestString([
//     "Tamim Iqbal",
//     "Shakib Al Hasan",
//     "Tanvir Islam",
//     "Tutul Kahn",
//     "Robiul islam Munna",
//     "Karim Zannat",
//   ])
// );

// function fizzBuzz(number) {
//   for (let i = 1; i < number; i++) {
//     if (i % 15 === 0) {
//       console.log(`${i} is = FizzBuzz`);
//     } else if (i % 3 === 0) {
//       console.log(`${i} is = Fizz........`);
//     } else if (i % 5 === 0) {
//       console.log(`${i} is = Buzz----------------`);
//     } else {
//       console.log(`${i} !!!!!!!`);
//     }
//   }
// }
// fizzBuzz(100);

// const mixedArr = [
//   "Tamim",
//   false,
//   "Fruits",
//   null,
//   "Age",
//   0,
//   "welcome",
//   "",
//   "Good Bye",
//   NaN,
//   "Thanks",
//   undefined,
// ];

// const truthyArr = mixedArr.filter((el) => {
//   if (el) {
//     return el;
//   }
// });
// console.log(truthyArr);
// const trueArray = mixedArr.filter(Boolean);
// console.log(trueArray);
// console.log(mixedArr.filter(Boolean));

// const obj = {
//   a: false,
//   b: "",
//   c: 0,
//   d: NaN,
//   e: undefined,
//   f: null,
//   g: "Welcome",
//   h: "Thanks",
// };

// const truthyObject = function (obj) {
//   for (let x in obj) {
//     if (!obj[x]) {
//       delete obj[x];
//     }
//   }
//   return obj;
// };

// console.log(truthyObject(obj));

// const product = [
//   {
//     image: "images/1.jpg",
//     title: "Computer",
//     price: 60.0,
//   },
//   {
//     image: "images/2.jpg",
//     title: "Mobile",
//     price: 70.0,
//   },
//   {
//     image: "images/3.jpg",
//     title: "Laptop",
//     price: 80.0,
//   },
//   {
//     image: "images/4.jpg",
//     title: "Desktop",
//     price: 90.0,
//   },
//   {
//     image: "images/5.jpg",
//     title: "Desktop",
//     price: 100.0,
//   },
//   {
//     image: "images/6.jpg",
//     title: "Desktop",
//     price: 130.0,
//   },
//   {
//     image: "images/7.jpg",
//     title: "Desktop",
//     price: 110.0,
//   },
//   {
//     image: "images/8.jpg",
//     title: "Desktop",
//     price: 120.0,
//   },
// ];

// let i = 0;

// document.getElementById("root").innerHTML = product
//   .map((item) => {
//     const { image, title, price } = item;
//     return `
//     <div class="product-items">
//       <img class="p-img" src="${image}">
//       <h2>${title}</h2>
//       <h3>$ ${price}.00</h3>
//       <button class="btn" onclick="addToCart(${i++})">Add Cart</button>
//     </div>

//   `;
//   })
//   .join("");

// const cart = [];
// function addToCart(e) {
//   cart.push({ ...product[e] });
//   storeItems();
// }
// function deleteCart() {
//   cart.splice(cart, 1);
//   storeItems();
// }
// function storeItems() {
//   let j = 0;
//   total = 0;
//   document.getElementById("count").innerHTML = cart.length;
//   if (cart.length === 0) {
//     document.getElementById("cart-Items").innerHTML = `Your Cart is Empty`;
//     document.getElementById("price").innerHTML = `$ ${00}.00`;
//   } else {
//     document.getElementById("cart-Items").innerHTML = cart
//       .map((items) => {
//         const { image, title, price } = items;
//         total = total + price;
//         document.getElementById("price").innerHTML = `$ ${total}.00`;
//         return `
//         <div class="s-items">
//           <img src="${image}">
//           <h5>${title}</h5>
//           <h6>$ ${price}.00</h6>
//           <i  class="fa-solid fa-trash" onclick="deleteCart(${j++})"></i>
//         </div>
//       `;
//       })
//       .join("");
//   }
// }

// const todoForm = document.querySelector(".todoForm");
// const todoInput = document.querySelector("input");
// const todoLists = document.querySelector("#lists");
// const messageElement = document.querySelector("#message");

// const showMessage = (text, status) => {
//   messageElement.innerHTML = text;
//   messageElement.classList.add(`bg-${status}`);

//   setTimeout(() => {
//     messageElement.innerHTML = "";
//     messageElement.classList.remove(`bg-${status}`);
//   }, 1000);
// };

// const createTodo = (todoId, todoValue) => {
//   const todoElement = document.createElement("li");
//   todoElement.id = todoId;
//   todoElement.classList.add("li-style");
//   todoElement.innerHTML = `
//     <span>${todoValue}</span>
//     <span><button class="btn" id="deleteTodo"><i class="fa fa-trash"></i></button></span>
//   `;

//   const deleteButton = todoElement.querySelector("#deleteTodo");
//   deleteButton.addEventListener("click", deleteTodos);
//   todoLists.appendChild(todoElement);
// };

// const deleteTodos = (e) => {
//   const selectedTodo = e.target.parentElement.parentElement.parentElement;
//   todoLists.removeChild(selectedTodo);
//   showMessage("Todo is Deleted", "danger");
//   let todos = getTodoFromLocalStorage();
//   todos = todos.filter((todo) => todo.todoId !== selectedTodo.id);
//   localStorage.setItem("mytodos", JSON.stringify(todos));
// };

// const getTodoFromLocalStorage = () => {
//   return localStorage.getItem("mytodos")
//     ? JSON.parse(localStorage.getItem("mytodos"))
//     : [];
// };

// const addTodo = (e) => {
//   e.preventDefault();
//   const todoValue = todoInput.value;

//   const todoId = Date.now().toString();

//   createTodo(todoId, todoValue);

//   showMessage("Todo is Added", "success");

//   const todos = getTodoFromLocalStorage();
//   todos.push({ todoId, todoValue });
//   localStorage.setItem("mytodos", JSON.stringify(todos));
//   todoInput.value = "";
// };

// const loaded = () => {
//   let todos = getTodoFromLocalStorage();
//   todos.map((todo) => createTodo(todo.todoId, todo.todoValue));
// };
// todoForm.addEventListener("submit", addTodo);
// window.addEventListener("DOMContentLoaded", loaded);
// const btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   const input = document.querySelector("input");
//   const p = document.querySelector("p");
//   var inputValue = new Date(input.value);
//   var birthDate = inputValue.getDate();
//   var birthMonth = inputValue.getMonth() + 1;
//   var birthYear = inputValue.getFullYear();

//   var current = new Date();
//   var currentDate = current.getDate();
//   var currentMonth = current.getMonth() + 1;
//   var currentYear = current.getFullYear();
//   var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//   console.log(currentDate + currentMonth);

//   if (birthDate > currentDate) {
//     currentDate = currentDate + month[currentMonth - 1];

//     currentMonth = currentMonth - 1;
//   }
//   console.log(currentDate);

//   if (birthMonth > currentMonth) {
//     currentMonth = currentMonth + 12;
//     currentYear = currentYear - 1;
//   }
//   cDate = currentDate - birthDate;
//   cMonts = currentMonth - birthMonth;
//   cYear = currentYear - birthYear;
//   p.innerHTML = cDate + " " + cMonts + " " + cYear;
// });

// const p = document.querySelector("#demo");
// const input = document.querySelector("#date");

// document.querySelector("button").addEventListener("click", function () {
//   var inputDate = new Date(input.value);
//   var birthDate = inputDate.getDate();
//   var birthMonth = inputDate.getMonth() + 1;
//   var birthYear = inputDate.getFullYear();

//   var date = new Date();

//   var currentDate = date.getDate();
//   var currentMonth = date.getMonth() + 1;

//   var curretnYear = date.getFullYear();
//   console.log(curretnYear);

//   var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//   if (birthDate > currentDate) {
//     currentDate = currentDate + month[currentMonth - 1];

//     currentMonth = currentMonth - 1;
//   }
//   if (birthMonth > currentMonth) {
//     currentMonth = currentMonth + 12;
//     curretnYear = curretnYear - 1;
//   }
//   console.log(currentMonth + 12);
//   var cDate = currentDate - birthDate;
//   var cMonth = currentMonth - birthMonth;

//   var cYear = curretnYear - birthYear;

//   p.innerHTML = `${cDate}${cMonth}${cYear}`;
// });
// const btn = document.querySelector("button");
// const p = document.querySelector("#demo");
// btn.addEventListener("click", function () {
//   const input = document.querySelector("#date");

//   const inputValue = new Date(input.value);

//   var bDate = inputValue.getDate();
//   var bMonth = inputValue.getMonth() + 1;
//   var bYear = inputValue.getFullYear();

//   const date = new Date();
//   var cDate = date.getDate();
//   var cMonth = date.getMonth() + 1;
//   var cYear = date.getFullYear();

//   var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//   if (bDate > cDate) {
//     cDate = cDate + month[cMonth - 1];
//     cMonth = cMonth - 1;
//   }
//   if (bMonth > cMonth) {
//     cMonth = cMonth + 12;
//     cYear = cYear - 1;
//   }
//   console.log(
//     `${cYear - bYear} Years, ${cMonth - bMonth} Months, ${cDate - bDate} Days`
//   );
// });

// setInterval(() => {
//   const eventTime = new Date("16 Feb 2023 00:00:00");
//   const currentTime = new Date();

//   const differTime = eventTime - currentTime;

//   var convertSeconds = Math.floor(differTime / 1000);
//   var convertMinutes = Math.floor(convertSeconds / 60);
//   var convertHours = Math.floor(convertMinutes / 60);
//   var convertDays = Math.floor(convertHours / 24);

//   const p = document.querySelector("#demo");
//   p.innerHTML = `${convertDays} Days, ${convertHours % 24} hours, ${
//     convertMinutes % 60
//   } Minutes, ${convertSeconds % 60} Seconds`;
// }, 1000);

// function oneDAray(scores) {
//   let tSocre = scores[0];

//   for (let i = 0; i < scores.length; i++) {
//     if (tSocre < scores[i]) {
//       tSocre = scores[i];
//     }
//   }
//   return tSocre;
// }
// let scores = [30, 60, 50, 22, 90, 8, 44, 65, 12];

// console.log(oneDAray(scores));

// function twoDArray(scores) {
//   let tScorer = scores[0][0];
//   let tScore = scores[0][1];

//   for (let i = 0; i < scores.length; i++) {
//     if (tScore < scores[i][1]) {
//       tScore = scores[i][1];
//       tScorer = scores[i][0];
//     }
//   }
//   return [tScore, tScorer];
// }

// let scores = [
//   ["Tamim", 45],
//   ["shakib", 96],
//   ["Mushfiqur", 65],
//   ["Nurul Hasan", 63],
//   ["Mahmudullah", 102],
//   ["Miraz", 12],
// ];
// console.log(twoDArray(scores));

// function allText() {
//   const sText = document.querySelector(".sText");
//   setTimeout(() => {
//     sText.innerHTML = "Web Developer";
//   }, 0);
//   setTimeout(() => {
//     sText.innerHTML = "Freelancer";
//   }, 5000);
//   setTimeout(() => {
//     sText.innerHTML = "Blogger";
//   }, 10000);
// }

// setInterval(() => {
//   allText();
// }, 15000);
// allText();

// function workingClock() {
//   setInterval(() => {
//     const p = document.querySelector("#demo");

//     var date = new Date();
//     var hour = date.getHours();
//     var minutes = date.getMinutes();
//     var seconds = date.getSeconds();

//     if (hour < 10) {
//       hour = "0" + hour;
//     }
//     hour = hour >= 12 ? hour - 12 : hour;
//     if (minutes < 10) {
//       minutes = "0" + minutes;
//     }
//     if (seconds < 10) {
//       seconds = "0" + seconds;
//     }
//     let amPm = hour >= 12 ? "AM" : "PM";
//     p.innerHTML = `${hour} : ${minutes} : ${seconds}: ${amPm}`;
//   }, 1000);
// }
// workingClock();

// function myFunc(passId) {
//   const content = document.querySelector(".active");

//   content.classList.remove("active");

//   document.getElementById(passId).classList.add("active");
// }

// function myFunc(passId) {
//   const active = document.querySelector(".active");
//   active.classList.remove("active");
//   document.getElementById(passId).classList.toggle("active");
// }

// const container = document.querySelector(".container");

// window.addEventListener("click", function (e) {
//   const cElement = e.target;
//   const btn = cElement.className.includes("btn");
//   if (!btn) return;
//   const ctext = e.target.parentNode.querySelector(".text");
//   ctext.classList.toggle("active");

//   if (cElement.textContent === "Read More") {
//     cElement.textContent = "Read Less";
//   } else {
//     cElement.textContent = "Read More";
//   }
// });

// const photos = [
//   "images/1.jpg",
//   "images/2.jpg",
//   "images/3.jpg",
//   "images/4.jpg",
//   "images/5.jpg",
//   "images/6.jpg",
//   "images/7.jpg",
//   "images/8.jpg",
//   "images/9.jpg",
// ];

// const next = document.querySelector(".next");
// const previous = document.querySelector(".previous");
// const image = document.querySelector("img");

// let count = 0;

// previous.addEventListener("click", function () {
//   count--;
//   if (count < 0) {
//     count = photos.length - 1;
//     image.src = photos[count];
//   } else {
//     image.src = photos[count];
//   }
// });
// next.addEventListener("click", function () {
//   count++;
//   if (count > photos.length) {
//     count = 1;
//     image.src = photos[count];
//   } else {
//     image.src = photos[count];
//   }
// });
// const slideElements = document.querySelectorAll(".slide");
// let count = 0;
// setInterval(() => {
//   count++;
//   const active = document.querySelector(".active");
//   active.classList.remove("active");
//   if (count >= slideElements.length) {
//     count = 1;
//     slideElements[0].classList.add("active");
//   } else {
//     active.nextElementSibling.classList.add("active");
//   }
// }, 2500);

// function rnadomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// console.log(rnadomNumber(1, 6));

// function getRandomNumber(limit) {
//   return Math.floor(Math.random() * limit) + 1;
// }
// console.log(getRandomNumber(6));

// const studentsName = [
//   "Tamim",
//   "Karim",
//   "Ibrahim",
//   "Tutul",
//   "Abir",
//   "Shamim",
//   "Babul",
//   "Nazmul",
// ];
// console.log(studentsName);
// const Alphabetically = studentsName.sort();
// console.log(Alphabetically);

// const studentRoll = [3, 6, 5, 2, 4, 1, 9, 7, 8];
// const slWiseRollNumbers = studentRoll.sort(function (a, b) {
//   return a - b;
// });
// console.log(slWiseRollNumbers);

// const slWileRevarseRollNumbers = studentRoll.sort(function (a, b) {
//   return b - a;
// });
// console.log(slWileRevarseRollNumbers);

// function isLeapYea(year) {
//   if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//     console.log(`${year} is a Leap Year`);
//   } else {
//     console.log(`${year} is not a Leap Year!!!!!`);
//   }
// }
// isLeapYea(2020);
// isLeapYea(2021);
// isLeapYea(2022);
// isLeapYea(2023);
// isLeapYea(2024);

// function isLeapYea(year) {
//   if (year % 4 === 0) {
//     console.log(`${year} is a Leap Year`);
//   } else {
//     console.log(`${year} is Not a Leap Year!!!!!!!!!`);
//   }
// }
// isLeapYea(2036);
// isLeapYea(2065);
// isLeapYea(2048);
// isLeapYea(2052);

// const vowels = ["a", "e", "i", "o", "u", "A", "E", "O", "I", "U"];

// function coutnVowels(sentence) {
//   let count = 0;
//   const letters = Array.from(sentence);
//   letters.forEach((val, indx, arr) => {
//     if (vowels.includes(val)) {
//       count++;
//     }
//   });
//   return count;
// }
// console.log(coutnVowels("This is Robiul Islam Munna"));

// const sentence =
//   "Learn with sumit is all about teaching web development skills and technique in an efficient and practical manner. If you are just getting started in web development, Learn whit sumit hal all the tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack developer. Learn with sumit also deep dives into advanced topics using the latest best practices for you seasoned web developers.";

// const matches = sentence.match(/sumit/gi);

// const occureances = matches ? matches.length : "Not Found!!!!";

// const firstIndex = sentence.search(/sumit/gi);
// const indexCheck = firstIndex > 0 ? firstIndex : "Not found!!!!!!";

// console.log(indexCheck);

// function linearSearch(arr, val) {
//   let len = arr.length;
//   for (let i = 0; i < len; i++) {
//     if (arr[i]) {
//       arr[i] = val;
//     }
//     return arr[i];
//   }
// }
// console.log(linearSearch(["a", "b", "c", "d", "e"], "e"));

// function largeString(sentence) {
//   let largeSentence = [];
//   for (let name of sentence) {
//     if (name.length > largeSentence.length) {
//       largeSentence = name;
//     }
//   }
//   return [largeSentence, sentence.indexOf(largeSentence)];
// }

// console.log(
//   largeString([
//     "This is Roibul",
//     " I am Robiul islam Munna",
//     "Tanvir Islam",
//     "Kazi Anik",
//   ])
// );
// function Fizzbuzz(number) {
//   for (let i = 1; i <= number; i++) {
//     if (i % 15 === 0) {
//       console.log(`${i} is fizzBuzz`);
//     } else if (i % 3 === 0) {
//       console.log(`${i} is fizz.......`);
//     } else if (i % 5 === 0) {
//       console.log(`${i} is buzz----------`);
//     } else {
//       console.log(i);
//     }
//   }
// }
// console.log(Fizzbuzz(100));

// const numbers = [10, 30, 50, 20, 60, 40, 50, 30, 60];

// const duplicate = numbers.filter((val, indx, arr) => {
//   return arr.indexOf(val) !== indx;
// });
// console.log(duplicate);
// const numbers = [1, 3, 6, 5, 2, 4, 9];

// const duplicate = numbers.filter((val, indx, arr) => {
//   return arr.indexOf(val) == indx;
// });
// console.log(duplicate);
// const mixedArr = ["Welcome", false, NaN, undefined, "", 0, null, "Good Bye"];

// console.log(mixedArr.filter(Boolean));
// const truthyArr = mixedArr.filter((val) => {
//   if (val) {
//     return val;
//   }
// });
// console.log(truthyArr);

// function Student(name, age, cgpa, lang) {
//   this.name = name;
//   this.age = age;
//   this.cgpa = cgpa;
//   this.lang = lang;

//   this.prints = function () {
//     console.log(`Name is = ${this.name}`);
//     console.log(`Age is = ${this.age}`);
//     console.log(`Cgpa is = ${this.cgpa}`);
//     console.log(`Language is = ${this.lang}`);
//   };
// }

// const studentOne = new Student("Robiul Islam", 25, 3.66, "English");
// const studentTwo = new Student("Karim Miah", 36, 3.99, "Bangla");
// const studentThree = new Student("Tamim Mridha", 29, 3.87, "Bangla");
// const studentFour = new Student("Ibrahim Miah", 28, 3.88, "English");

// studentOne.prints();
// studentTwo.prints();
// studentThree.prints();
// studentFour.prints();

// const studentsDetails = [
//   {
//     id: 101,
//     name: "Tamim Iqbal",
//     cgpa: 3.99,
//     lang: "English",
//   },
//   {
//     id: 102,
//     name: "Mahmud Abbas",
//     cgpa: 3.65,
//     lang: "Bangla",
//   },
//   {
//     id: 103,
//     name: "Tanvir Hider",
//     cgpa: 4.99,
//     lang: "Urdu",
//   },
//   {
//     id: 104,
//     name: "Ibrahim Zadran",
//     cgpa: 4.5,
//     lang: "Panjabi",
//   },
//   {
//     id: 105,
//     name: "Asgar Afgan",
//     cgpa: 2.99,
//     lang: "English",
//   },
// ];

// const singleStudent = studentsDetails
//   .filter((student) => {
//     return student.cgpa < 3.99;
//   })
//   .map((stu) => {
//     return stu.id;
//   });
// console.log(singleStudent);

// function studentsName(name = "Tanvir Islam", age = 25) {
//   console.log(name, age);
// }
// studentsName("Karim Miah", 26);
// studentsName("Ibrahim Zadran", 20);
// studentsName("Tutul Miah", 18);
// studentsName();

// const names = [
//   "Tanvir Islam",
//   "Tutul Miah",
//   "Karim Khan",
//   "Robiul Islam ",
//   "Mamun Miah",
// ];
// const [one, two, three, four, five] = names;
// console.log(one);
// console.log(two);
// console.log(three);
// console.log(four);
// console.log(five);

// const names = [
//   {
//     name: "Robiul Islam",
//     age: 25,
//     cgpa: 3.99,
//   },
//   {
//     name: "Karim Miah",
//     age: 31,
//     cgpa: 4.55,
//   },
// ];

// const { name, age, cgpa } = names;

// console.log(age);

// function squareRoot(x) {
//   console.log(`${x} Square is = ${x * x}`);
// }

// function higherOrderFucntion(callback, value) {
//   return callback(value);
// }
// higherOrderFucntion(squareRoot, 10);

// const studentsInfo = {
//   name: "Robiul Islam",
//   age: 25,
//   cgpa: 3.96,
//   lang: "English",
// };

// function objDest({ name, age, cgpa, lang } = studentsInfo) {
//   console.log(name);
//   console.log(age);
//   console.log(cgpa);
//   console.log(lang);
// }
// objDest();

// const promptValue = parseFloat(prompt("Enter Your Number for Result"));
// function studentsResult() {
//   if (promptValue <= 100 && promptValue >= 80) {
//     console.log("Your GPA is = A+");
//   } else if (promptValue <= 79 && promptValue >= 70) {
//     console.log("Your GPA is = A");
//   } else if (promptValue <= 69 && promptValue >= 60) {
//     console.log("Your GPA is = A-");
//   } else if (promptValue <= 59 && promptValue >= 50) {
//     console.log("Your GPA is = B");
//   } else if (promptValue <= 49 && promptValue >= 40) {
//     console.log("Your GPA is = C");
//   } else if (promptValue <= 39 && promptValue >= 33) {
//     console.log("Your GPA is = D");
//   } else if (promptValue <= 32 && promptValue >= 0) {
//     console.log("You are failed");
//   } else {
//     console.log("Your GPA is Invalid, Cause your inputed number was wrong");
//   }
// }
// studentsResult();

// const promptVale = prompt("Enter a Number");

// switch (promptVale) {
//   case "A":
//   case "E":
//   case "I":
//   case "O":
//   case "U":
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     console.log(`${promptVale} is Vowel`);
//     break;

//   default:
//     console.log(`${promptVale} is a Consonent`);
// }

// const numbers = parseFloat(prompt("Enter Any Number"));
// const letterGrade =
//   numbers >= 80 && numbers <= 100
//     ? "A+"
//     : numbers >= 70 && numbers <= 79
//     ? "A"
//     : numbers >= 60 && numbers <= 69
//     ? "A-"
//     : numbers >= 50 && numbers <= 59
//     ? "B"
//     : numbers >= 40 && numbers <= 49
//     ? "C"
//     : numbers >= 33 && numbers <= 39
//     ? "C"
//     : "Failed";
// console.log(letterGrade);

// const numbers = [1, 2, 3, 4, 5, 6];
// const number = [...numbers, 7, 8, 9];
// console.log(number);
// let sum = 0;
// for (let i = 0; i < number.length; i++) {
//   sum = sum + number[i];
// }
// console.log(sum);

// function studentInfo(name = "Robiul Islam Munna", age = 25, cgpa = 3.69) {
//   console.log(name, age, cgpa);
// }

// studentInfo();
// studentInfo("Tamim Mridha", 36, 3.96);
// studentInfo("Ibrahim Miah", 25, 4.6);
// studentInfo("Tanvir Islam", 29, 4.88);
// studentInfo();

// const number1 = [1, 2, 3, 4];
// const number2 = [5, 6, 7, 8];
// const number = [...number1, ...number2];

// var sum = 0;

// for (let i = 0; i < number.length; i++) {
//   var sum = sum + number[i];
// }
// console.log(sum);

// const taskOne = () => {
//   console.log("Task One is Completed");
// };
// const taskTwo = () => {
//   console.log("Task Two is Completed");
// };
// const taskThree = () => {
//   setTimeout(() => {
//     console.log("Task Three is Completed.......");
//   }, 1500);
// };
// const taskFour = () => {
//   setTimeout(() => {
//     console.log("Task Four is Completed----------");
//   }, 2500);
// };
// const taskFive = () => {
//   console.log("Task Five is Completed");
// };

// taskOne();
// taskTwo();
// taskThree();
// taskFour();
// taskFive();

// const taskOne = (callback) => {
//   console.log("Task One is Completed");
//   callback();
// };
// const taskTwo = (callback) => {
//   console.log("Task Two is Completed");
//   callback();
// };
// const taskThree = (callback) => {
//   setTimeout(() => {
//     console.log("Task Three is Completed.......");
//   }, 1500);
//   callback();
// };
// const taskFour = (callback) => {
//   setTimeout(() => {
//     console.log("Task Four is Completed----------");
//   }, 2500);
//   callback();
// };
// const taskFive = () => {
//   console.log("Task Five is Completed");
// };

// taskOne(() => {
//   taskTwo(() => {
//     taskThree(() => {
//       taskFour(() => {
//         taskFive();
//       });
//     });
//   });
// });

// const promise1 = new Promise((resolve, reject) => {
//   let isRestricted = true;
//   setTimeout(() => {
//     if (isRestricted) {
//       resolve("Promise one is Completed");
//     } else {
//       reject("Promise One is Not Completed");
//     }
//   }, 3000);
// });
// // .then((res) => console.log(res))
// // .catch((err) => console.log(err));

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Two is Completed");
//     // reject("Promise Two is Not Completed");
//   }, 2500);
// });

// /* .then((res) => console.log(res))
//   .catch((err) => console.log(err)); */

// // Promise.all([promise1, promise2])
// //   .then((res) => console.log(res))
// //   .catch((err) => console.log(err));

// Promise.race([promise1, promise2])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// localStorage.setItem("name", "Robiul Islam Munna");
// localStorage.setItem("age", 25);
// localStorage.setItem("password", 123456);
// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age");
// const password = localStorage.getItem("password");
// console.log(name);
// console.log(age);
// console.log(password);

// localStorage.clear();

// const country = ["Banlgadesh", "England", "South Africa"];

// localStorage.setItem("country", JSON.stringify(country));
// const countr = JSON.parse(localStorage.getItem("country"));
// console.log(countr);

// const studentInf0 = {
//   name: "Robiul Islam",
//   age: 2.56,
//   cgpa: 3.99,
// };
// localStorage.setItem("students", JSON.stringify(studentInf0));
// const stu = JSON.parse(localStorage.getItem("students"));
// console.log(stu);

// const makeRequest = (method, url, data) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open(method, url);
//   xhr.setRequestHeader("Content-type", "application/json");
//   xhr.onload = () => {
//     let data = xhr.response;
//     console.log(JSON.parse(data));
//   };
//   xhr.send(JSON.stringify(data));
//   xhr.onerror = () => {
//     console.log("Error is Occured");
//   };
// };

// const getData = () => {
//   makeRequest("GET", "https://jsonplaceholder.typicode.com/posts");
// };
// getData();

// const sendData = () => {
//   makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
//     title: "Data is Sending",
//     body: "Data is Sending",
//     userId: 1011,
//     id: 1,
//   });
// };
// sendData();

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "Fetch Data is Sending",
//     body: "Fetch Data is Sending",
//     userId: 101,
//   }),
//   headers: {
//     // "Content-type": "application/json: charset-UTF-8",
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((res) => {
//     if (!res.ok) {
//       let message = `Error : ${res.status}`;
//       throw new Error(message);
//     }
//     return res.json();
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// const makeRequest = (method, url, data) => {
//   const xhr = new XMLHttpRequest();

//   xhr.open(method, url);
//   xhr.setRequestHeader("Content-type", "application/json");
//   xhr.onload = () => {
//     let data = xhr.response;
//     console.log(JSON.parse(data));
//   };
//   xhr.send(JSON.stringify(data));
//   xhr.onerror = () => {
//     console.log("Error is Occured");
//   };
// };

// const getData = () => {
//   makeRequest("GET", "https://jsonplaceholder.typicode.com/posts");
// };
// getData();

// const sendData = () => {
//   makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
//     body: JSON.stringify({
//       title: "Data is Sending",
//       body: "Data Body is Sending",
//       userId: 1011,
//       id: 101,
//     }),
//   });
// };
// sendData();

// const updateData = () => {
//   makeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
//     body: JSON.stringify({
//       title: "Data Title is Update",
//       body: "Data Body is Updating",
//       userId: 1011,
//       id: 1,
//     }),
//   });
// };
// updateData();

// const singleDataUpdate = () => {
//   makeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1", {
//     body: JSON.stringify({
//       title: "Single Data Title is Updating",
//       userId: 1011,
//     }),
//   });
// };
// singleDataUpdate();

// const deleteData = () => {
//   makeRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
// };
// deleteData();

// const getData = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => {
//       if (!res.ok) {
//         let message = `Error : ${res.status}`;
//         throw new Error(message);
//       }
//       return res.json();
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };

// getData();

// const sendData = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//       title: "Data body is Sending",
//       body: "Data body is Sending ",
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((res) => {
//       if (!res.ok) {
//         let message = `Error : ${res.status}`;
//         throw new Error(message);
//       }
//       return res.json();
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// sendData();

// const updateData = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "PUT",
//     body: JSON.stringify({
//       title: "Data Title is Updating",
//       body: "Data Body is Updating",
//       userId: 1011,
//       id: 1,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((res) => {
//       if (!res.ok) {
//         let message = `Error : ${res.status}`;
//         throw new Error(message);
//       }
//       return res.json();
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// updateData();

// const deleteData = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "DELETE",
//     body: JSON.stringify({}),
//   })
//     .then((res) => {
//       if (!res.ok) {
//         let message = `Error : ${res.status}`;
//         throw new Error(message);
//       }
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// deleteData();

// const deleteData = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "DELETE",
//   })
//     .then((res) => res.json())
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// deleteData();

// const makeRequest = async (method, config) => {
//   const res = await fetch(method, config);
//   if (!res.ok) {
//     let message = `Error : ${res.status}`;
//     throw new Error(message);
//   }
//   const data = await res.json();
//   return data;
// };

// const getData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// getData();

// const sendData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//       title: "Data Title is Updateing",
//       body: "Data Body is Updeting",
//       userId: 1011,
//       id: 1,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// sendData();

// const sendData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//       title: "Data Title is Sending",
//       body: "Data Body is Sending",
//       userId: 1011,
//       id: 1,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// sendData();

// const updateData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "PUT",
//     body: JSON.stringify({
//       title: "Data Title is Updeting",
//       body: "Data Body is Updating ",
//       userId: 1011,
//       id: 1,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// updateData();

// const singleDataUpdate = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "PATCH",
//     body: JSON.stringify({
//       title: "Single Data is Updating",
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// singleDataUpdate();

// const deleteData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "DELETE",
//   }).then((res) => console.log(res));
// };
// deleteData();

// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => console.log(res.data));

// axios
//   .post("https://jsonplaceholder.typicode.com/posts", {
//     body: JSON.stringify({
//       title: "Data title is Sending",
//       body: "Data Body is Sending",
//       userId: 1011,
//     }),
//   })
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// axios
//   .put("https://jsonplaceholder.typicode.com/posts/1", {
//     body: JSON.stringify({
//       title: "Data is Updating",
//       body: "Data is Updating",
//       usedId: 1011,
//       id: 1,
//     }),
//   })
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// axios
//   .patch("https://jsonplaceholder.typicode.com/posts/1", {
//     body: JSON.stringify({
//       title: "Single Data title is updating",
//     }),
//   })
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// axios
//   .delete("https://jsonplaceholder.typicode.com/posts/1")
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// axios
//   .get("https://jsonplaceholder.tdypicode.com/posts")
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err.message));

// axios
//   .post("https://jsonplaceholder.typicode.com/posts", {
//     body: JSON.stringify({
//       title: "Data Title is Sending",
//       body: "Data Body is Sending",
//       userId: 1011,
//     }),
//   })
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// axios
//   .put("https://jsonplaceholder.typicode.com/posts/1", {
//     body: JSON.stringify({
//       title: "Data is Updating",
//       body: "Data is Updating",
//       userId: 1011,
//     }),
//   })
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// axios
//   .patch("https://jsonplaceholder.typicode.com/posts/1", {
//     body: JSON.stringify({
//       title: "Single Data is Updeting",
//     }),
//   })
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// axios
//   .delete("https://jsonplaceholder.typicode.com/posts/1")
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// const makeRequest = async (config) => {
//   return await axios(config);
// };
// // const getData = () => {
// //   makeRequest("https://jsonplaceholder.typicode.com/posts")
// //     .then((res) => console.log(res.data))
// //     .catch((err) => console.log(err));
// // };
// // getData();

// const sendData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts",
//     method: "POST",
//     data: JSON.stringify({
//       titel: "Data is Sendign",
//       body: "Data is Sending",
//       userId: 1011,
//     }),
//   })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// };
// sendData();

// const makeRequest = async (config) => {
//   return await axios(config);
// };

// const getData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// };
// getData();

// const sendData = () => {
//   makeRequest({
//     method: "POST",
//     url: "https://jsonplaceholder.typicode.com/posts",

//     data: JSON.stringify({
//       title: "Data is Sending",
//       body: "Data is Sending",
//       userId: 1011,
//     }),
//   })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// };
// sendData();

// const updateData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts/1",
//     method: "put",
//     body: JSON.stringify({
//       id: 1,
//       title: "Data is Updating",
//       body: "Data is Updating",
//       userId: 1011,
//     }),
//   })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// };
// updateData();

// const updateData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts/1",
//     method: "put",
//     data: JSON.stringify({
//       id: 1,
//       title: "Data is Updating",
//       body: "Data body is Updating",
//       userId: 1011,
//     }),
//   })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// };
// updateData();

// const singleDataUpdate = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts/1",
//     method: "PATCH",
//     data: JSON.stringify({
//       title: "Single Data is Updeting",
//     }),
//   })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// };
// singleDataUpdate();

// const deleteData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts/1",
//     method: "DELETE",
//   }).then((res) => console.log(res.data));
// };
// deleteData();
// $.ajax("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// $.ajax("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   data: JSON.stringify({
//     id: 1001,
//     title: "Data is Sending",
//     body: "Data Body is Sending",
//     userId: 1011,
//     id: 2005,
//   }),
// })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// const makeRequest = async (url, method, data) => {
//   try {
//     const res = await $.ajax({
//       url: url,
//       method: method,
//       data: data,
//     });
//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts", "POST", {
//     body: JSON.stringify({
//       title: "Data is Sending",
//       body: "Data Body is Sending",
//       userId: 1011,
//     }),
//   })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// getData();

// const updateData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts/1", "PUT", {
//     body: JSON.stringify({
//       title: "Data is Updating",
//       body: "Data body is Updating",
//       userId: 1011,
//       id: 1011,
//     }),
//   }).then((res) => console.log(res));
// };
// updateData();
// const updateSingleData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts/1", "PATCH", {
//     body: JSON.stringify({
//       title: "Single Data is Updating",
//     }),
//   }).then((res) => console.log(res));
// };
// updateSingleData();

// const deleteData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts/1", "DELETE").then(
//     (res) => console.log(res)
//   );
// };
// deleteData();

// const makeRequest = (method, url, data) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open(method, url);
//   xhr.setRequestHeader("Content-type", "application/json");
//   xhr.onload = () => {
//     let data = xhr.response;
//     console.log(JSON.parse(data));
//   };
//   xhr.send(JSON.stringify(data));
//   xhr.onerror = () => {
//     console.log("Error");
//   };
// };

// const getData = () => {
//   makeRequest("GET", "https://jsonplaceholder.typicode.com/posts");
// };
// getData();

// const sendData = () => {
//   makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
//     body: JSON.stringify({
//       title: "Data is Sendgin",
//       body: "Data body is Sending",
//       userId: 1011,
//     }),
//   });
// };
// sendData();

// const updateData = () => {
//   makeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
//     body: JSON.stringify({
//       title: "Data Title is Updating",
//       body: "Data Body is Updating",
//       userId: 1011,
//     }),
//   });
// };
// updateData();

// const singleDataUpdate = () => {
//   makeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1", {
//     body: JSON.stringify({
//       title: "Single Data is Updating",
//     }),
//   });
// };
// singleDataUpdate();

// const deleteData = () => {
//   makeRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
// };
// deleteData();

// const makeRequest = (method, url, data) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open(method, url);
//   xhr.setRequestHeader("Content-type", "application/json");
//   xhr.onload = () => {
//     let data = xhr.response;
//     console.log(JSON.parse(data));
//   };
//   xhr.send(JSON.stringify(data));
//   xhr.onerror = () => {
//     console.log("Error is Here");
//   };
// };

// const sendData = () => {
//   makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
//     body: JSON.stringify({
//       title: "Data Title is Sending",
//       body: "Data Body is Sending",
//       userId: 1011,
//     }),
//   });
// };
// sendData();

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => {
//     if (!res.ok) {
//       let message = `Error : ${res.status}`;
//       throw new Error(message);
//     }
//     return res.json();
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "Data Title is Sending",
//     body: "Data Body is Updating",
//     userId: 1011,
//   }),
//   headers: {
//     "Content-type": "application/json;charset=UTF-8",
//   },
// })
//   .then((res) => {
//     if (!res.ok) {
//       let message = `Error : ${res.status}`;
//       throw new Error(message);
//     }
//     return res.json();
//   })
//   .then((res) => console.log(res));

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PUT",
//   body: JSON.stringify({
//     title: "Data Title is Updated",
//     body: "Data Body is Updated",
//     userId: 1011,
//   }),
//   headers: {
//     "Content-type": "application/json;charset=UTF-8",
//   },
// })
//   .then((res) => {
//     if (!res.ok) {
//       let message = `Error : ${res.status}`;
//       throw new Error(message);
//     }
//     return res.json();
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PUT",
//   body: JSON.stringify({ title: "Single Data is Updated" }),
//   headers: {
//     "Content-type": "application/json;charset=UTF-8",
//   },
// })
//   .then((res) => {
//     if (!res.ok) {
//       let message = `Error : ${res.status}`;
//       throw new Error(message);
//     }
//     return res.json();
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "DELETE",
// })
//   .then((res) => res.json())
//   .then((res) => console.log(res));

// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// axios
//   .post("https://jsonplaceholder.typicode.com/posts", {
//     body: JSON.stringify({
//       title: "Data is sending",
//       body: "Data Body is Sending",
//       userId: 1011,
//     }),
//   })
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// axios
//   .put("https://jsonplaceholder.typicode.com/posts/1", {
//     body: JSON.stringify({
//       title: "Data is Updated",
//       body: "Data is Updated",
//       userId: 1011,
//     }),
//   })
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// axios
//   .patch("https://jsonplaceholder.typicode.com/posts/1", {
//     body: JSON.stringify({
//       title: "Single Data is Updated",
//     }),
//   })
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// axios
//   .delete("https://jsonplaceholder.typicode.com/posts/1")
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// const makeRequest = async (config) => {
//   return await axios(config);
// };
// const getData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts",
//     method: "GET",
//   })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// };
// getData();

// const sendData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts",
//     method: "POST",
//     data: JSON.stringify({
//       title: " Data is Updated",
//       body: "Data is Update",
//       userId: 1011,
//     }),
//   })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// };
// sendData();

// const singleDataUpdate = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts/1",
//     method: "PUT",
//     data: JSON.stringify({
//       title: "Data is Updated",
//       body: "Data is Updated",
//       userId: 11001,
//     }),
//   })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// };
// singleDataUpdate();

// const deleteData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts/1",
//     method: "DELETE",
//   })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// };
// deleteData();

// const makeRequest = async (config) => {
//   try {
//     const res = await $.ajax(config);
//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts",
//     method: "GET",
//   })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// getData();

// const sendData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts",
//     method: "POST",
//     data: JSON.stringify({
//       title: "Data is Updated",
//       body: "Data is Updated",
//       userId: 1011,
//     }),
//   }).then((res) => console.log(res));
// };
// sendData();

// const updateData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts/1",
//     method: "PUT",
//     data: JSON.stringify({
//       title: "Data is Updated",
//       body: "Data body is Updated",
//       userId: 1011,
//     }),
//   }).then((res) => console.log(res));
// };
// updateData();

// const singleDataUpdate = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts/1",
//     method: "PATCH",
//     data: JSON.stringify({
//       title: "Single Data is Updated",
//     }),
//   }).then((res) => console.log(res));
// };
// singleDataUpdate();
// const deleteData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts/1",
//     method: "DELETE",
//   }).then((res) => console.log(res));
// };
// deleteData();

// const taskOne = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Task One is Completed");
//   });
// };
// const taskTwo = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Task Two is Completed");
//   });
// };
// const taskThree = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Task Three is Completed");
//   });
// };
// const taskFour = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Task Four is Completed");
//   });
// };
// const taskFive = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Task Five is Completed");
//   });
// };

// const allTaskIsCompleted = async () => {
//   const t1 = await taskOne();
//   console.log(t1);
//   const t2 = await taskTwo();
//   console.log(t2);
//   const t3 = await taskThree();
//   console.log(t3);
//   const t4 = await taskFour();
//   console.log(t4);
//   const t5 = await taskFive();
//   console.log(t5);
// };
// allTaskIsCompleted();

// const taskOne = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Task One is Completed");
//   });
// };
// const taskTwo = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Task Two is Completed");
//   });
// };
// const taskThree = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Task Three is Completed");
//   });
// };
// const taskFour = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Task Four is Completed");
//   });
// };
// const taskFive = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Task Five is Completed");
//   });
// };

// taskOne()
//   .then((res) => console.log(res))
//   .then(taskTwo)
//   .then((res) => console.log(res))
//   .then(taskThree)
//   .then((res) => console.log(res))
//   .then(taskFour)
//   .then((res) => console.log(res))
//   .then(taskFive)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// const numbers = [1, 2, 3, 4];
// const number = [...numbers, 5, 6];
// let sum = 0;
// for (let i = 0; i < number.length; i++) {
//   sum = number[i] + sum;
// }
// console.log(`Numbers ${number} Total sum is = ${sum}`);

// const studentInfo = {
//   name: "Robiul islam",
//   age: 25,
//   cgpa: 1011,
// };
// for (let x in studentInfo) {
//   console.log(`${x} = ${studentInfo[x]}`);
// }

// const sutdentsInformations = {
//   name: "Tanvir Islam",
//   age: 25,
//   cgpa: 3.69,
//   id: 1011,
// };

// for (let x in sutdentsInformations) {
//   console.log(`${x} = ${sutdentsInformations[x]}`);
// }

// let numbers = [10, 20, 30, 40, 50];

// for (let x of numbers) {
//   console.log(x);
// }

// const names = ["Tanvir Islam", "Karim Zannat", "Ibrahim Miah", "Shakib"];
// for (let x of names) {
//   console.log(x);
// }

// window.addEventListener("click", function (e) {
//   const cElement = e.target;
//   const cBtn = cElement.className.includes("btn");
//   if (!cBtn) return;
//   const cText = cElement.parentNode.querySelector(".text");
//   cText.classList.toggle("showHide");
//   if (cElement.textContent == "Click Me") {
//     cElement.textContent = "Read Less";
//   } else {
//     cElement.textContent = "Click Me";
//   }
// });
// const btn = document.querySelectorAll(".btn");
// const actives = document.querySelector(".content");
// function MyFunc(passId) {
//   for (let active of actives) {
//     active.classList.remove("active");
//   }
// // }
// const active = document.querySelectorAll(".content");

// function myFunc(passIdName) {
//   for (let activ of active) {
//     activ.classList.remove("active");
//   }
//   document.getElementById(passIdName).classList.add("active");
// }

// setInterval(() => {
//   const eventTime = new Date("01 Jan 2024 00:00:00");
//   const currentTime = new Date();
//   const difffer = eventTime - currentTime;
//   var differSec = Math.floor(difffer / 1000);
//   var differMin = Math.floor(differSec / 60);
//   var differHour = Math.floor(differMin / 60);
//   var days = Math.floor(differHour / 24);
//   var hours = differHour % 60;
//   var minutes = differMin % 60;
//   var seconds = differSec % 60;
//   console.log(`${days}, ${hours},${minutes},${seconds}`);
// }, 1000);

// const input = document.querySelector("input");

// document.querySelector("button").addEventListener("click", function () {
//   var inputDate = new Date(input.value);
//   var birthDate = inputDate.getDate();
//   console.log(birthDate);
//   var birthMonth = inputDate.getMonth() + 1;
//   var birthYear = inputDate.getFullYear();

//   var date = new Date();
//   var currentDate = date.getDate();
//   console.log(currentDate);
//   var currentMonth = date.getMonth() + 1;
//   var currentYear = date.getFullYear();
//   var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//   if (birthDate > currentDate) {
//     currentDate = currentDate + month[currentMonth - 1];
//     console.log(currentDate);
//     currentMonth = currentMonth - 1;
//   }
//   if (birthMonth > currentMonth) {
//     currentMonth = currentMonth + 12;
//     currentYear = currentYear - 1;
//   }
//   console.log(currentDate - birthDate);
//   console.log(
//     `${currentDate - birthDate} Days, ${currentMonth - birthMonth} Month, ${
//       currentYear - birthYear
//     } Years`
//   );
// });

// const makeRequest = (method, url, data) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open(method, url);
//   xhr.setRequestHeader("Content-type", "application/json");
//   xhr.onload = () => {
//     let data = xhr.response;
//     console.log(JSON.parse(data));
//   };
//   xhr.send(JSON.stringify(data));
//   xhr.onerror = () => {
//     console.log("Error is Occured");
//   };
// };

// const getData = () => {
//   makeRequest("GET", "https://jsonplaceholder.typicode.com/posts");
// };
// getData();

// const sendData = () => {
//   makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
//     body: JSON.stringify({
//       title: "Data is Sending",
//       body: "Data Body is Sending",
//       userId: 1011,
//     }),
//   });
// };
// sendData();

// const updateData = () => {
//   makeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
//     body: JSON.stringify({
//       title: "Data is Updated",
//       body: "Data Body is Updated",
//       userId: 1011,
//       id: 1,
//     }),
//   });
// };
// updateData();

// const singleDataUpdate = () => {
//   makeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1", {
//     body: JSON.stringify({
//       title: "Singel Data is Updated",
//     }),
//   });
// };
// singleDataUpdate();

// const deleteData = () => {
//   makeRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
// };
// deleteData();

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => {
//     if (!res.ok) {
//       let message = `Error : ${res.status}`;
//       throw new Error(message);
//     }
//     return res.json();
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// const makeRequest = async (url, method) => {
//   try {
//     const res = await fetch(url, method);
//     if (!res.ok) {
//       let message = `Error : ${res.status}`;
//       throw new Error(message);
//     }
//     const res_1 = await res.json();
//     return console.log(res_1);
//   } catch (err) {
//     return console.log(err);
//   }
// };

// const getData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => {
//       if (!res.ok) {
//         let message = `Error : ${res.status}`;
//         throw new Error(message);
//       }
//       return res.json();
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// getData();

// const sendData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//       title: "Data is Sending",
//       body: "Data Body is Sending",
//       userId: 1011,
//     }),
//     headers: {
//       "Content-type": "application/json;charset=TF-8",
//     },
//   });
// };
// sendData();

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "Data title is Sending",
//     body: "Data Body is Sending",
//     id: 101,
//     userId: 1011,
//   }),
//   headers: {
//     "Content-type": "application/json;charset=UTF-8",
//   },
// })
//   .then((res) => {
//     if (!res.ok) {
//       let message = `Error : ${res.status}`;
//       throw new Error(message);
//     }
//     return res.json();
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PUT",
//   body: JSON.stringify({
//     title: "Data Title is Sending",
//     body: "Data Body is Sending",
//     userId: 1011,
//     id: 1,
//   }),
//   headers: {
//     "Content-type": "application/json;charset=UTF-8",
//   },
// })
//   .then((res) => {
//     if (!res.ok) {
//       let messate = `Error : ${res.status}`;
//       throw new Error(messate);
//     }
//     return res.json();
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PUT",
//   body: JSON.stringify({
//     title: " Data Updated",
//     body: "Data Body is Updated",
//     userId: 1011,
//   }),
//   headers: {
//     "Content-type": "application/json;charser=UTF-8",
//   },
// })
//   .then((res) => {
//     if (!res.ok) {
//       let message = `Error : ${res.status}`;
//       throw new Error(message);
//     }
//     return res.json();
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PATCH",
//   body: JSON.stringify({ title: "Singel Data is Updated" }),
//   headers: {
//     "Content-type": "application/json;charset=UTF-8",
//   },
// })
//   .then((res) => {
//     if (!res.ok) {
//       let message = `Error : ${res.status}`;
//       throw new Error(message);
//     }
//     return res.json();
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "DELETE",
// })
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// const makeRequest = async (method, config) => {
//   const res = await fetch(method, config);
//   if (!res.ok) {
//     let message = `Error : ${res.status}`;
//     throw new Error(message);
//   }
//   let data = await res.json();

//   return data;
// };
// const getData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts").then((res) =>
//     console.log(res)
//   );
// };
// getData();

// const sendData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//       title: " Data is Sendign",
//       body: "Data Body is Sending",
//       id: 101,
//       userId: 10111,
//     }),
//     headers: {
//       "Content-type": "application/json;charset=UTF-8",
//     },
//   })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// sendData();

// const updateData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "PUT",
//     body: JSON.stringify({
//       title: "Data title is Sendign",
//       body: "Data Body is Sending",
//       userId: 1011,
//       id: 1,
//     }),
//     headers: {
//       "Content-type": "application/json;charset=UTF-8",
//     },
//   })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// updateData();

// const updateSingleData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "PATCH",
//     body: JSON.stringify({
//       title: "Single Data is Updated",
//     }),
//     headers: {
//       "Content-type": "application/json;charset=UTF-8",
//     },
//   })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// updateSingleData();

// const deleteData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "DELETE",
//   })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// deleteData();

// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// axios
//   .post("https://jsonplaceholder.typicode.com/posts", {
//     data: JSON.stringify({
//       title: "Data is Sending",
//       body: "Data is Sending",
//       userId: 1011,
//       id: 101,
//     }),
//   })
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// axios
//   .put("https://jsonplaceholder.typicode.com/posts/1", {
//     data: JSON.stringify({
//       title: "Data is Updated",
//       body: "Data is Updated",
//       userId: 1011,
//       id: 101,
//     }),
//   })
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// axios
//   .patch("https://jsonplaceholder.typicode.com/posts/1", {
//     data: JSON.stringify({
//       title: "Single Data is Updated",
//       userId: 1011,
//     }),
//   })
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// axios
//   .delete("https://jsonplaceholder.typicode.com/posts/1")
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// const makeRequest = async (url) => {
//   const data = await axios(url);
//   return data;
// };

// const getData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts",
//     method: "GET",
//   })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// };
// getData();

// const sendData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts",
//     method: "POST",
//     data: JSON.stringify({
//       title: "Data is Sending",
//       body: "Data is Sending",
//       userId: 1011,
//       id: 101,
//     }),
//   })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// };
// sendData();

// const updateData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts/1",
//     method: "PUT",
//     data: JSON.stringify({
//       title: "Data Title is Updated",
//       body: "Data Body is Updated",
//       userId: 1011,
//       id: 1,
//     }),
//   })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// };
// updateData();

// const singleDataUpdate = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts/1",
//     method: "PATCH",
//     data: JSON.stringify({
//       title: "Single Data is Updated",
//     }),
//   })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// };
// singleDataUpdate();

// const deleteData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts/1",
//     method: "DELETE",
//   }).then((res) => console.log(res.data));
// };
// deleteData();

// $.ajax("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// $.ajax("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   data: JSON.stringify({
//     title: "Data is Sending",
//     body: "Data Body is Sending",
//   }),
// })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// $.ajax("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PUT",
//   data: JSON.stringify({
//     title: "Data is Updated",
//     body: "Data Body is Updated",
//     userId: 1011,
//   }),
// })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// $.ajax("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PATCH",
//   data: JSON.stringify({
//     title: " Single Data is Updated",
//   }),
// })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// $.ajax("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "DELETE",
// })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// const makeRequest = async (config) => {
//   try {
//     const res = await $.ajax(config);
//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts",
//     method: "GET",
//   }).then((res) => console.log(res));
// };
// getData();

// const sendData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts",
//     method: "POST",
//     data: JSON.stringify({
//       title: "Data Title is Sendign",
//       body: "data Body is Sendign",
//       userId: 1011,
//     }),
//   }).then((res) => console.log(res));
// };
// sendData();

// const updateData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts/1",
//     method: "PUT",
//     data: JSON.stringify({
//       title: " Data is Updated",
//       body: "Data Body is Updated",
//       userId: 1011,
//     }),
//   })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// updateData();

// const singleDataUpdate = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts/1",
//     method: "PATCH",
//     data: JSON.stringify({
//       title: "Single Data is Updated",
//     }),
//   })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// singleDataUpdate();

// const deleteData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts/1",
//     method: "DELETE",
//   }).then((res) => console.log(res));
// };
// deleteData();
// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min) + 1) + min;
// }
// console.log(getRandomNumber(1, 6));

// function getRandomNumber() {
//   console.log(Math.floor(Math.random() * 6) + 1);
// }
// getRandomNumber();
// function getRandomNumber(num) {
//   return Math.floor(Math.random() * num);
// }
// console.log(getRandomNumber(7));

// function getRandomNumber(max) {
//   return Math.floor(Math.random() * max) + 1;
// }
// console.log(getRandomNumber(6));

// const studentNames = [
//   "Tamim",
//   "karim",
//   "Hamim",
//   "Sujon",
//   "Ibrahim",
//   "Arif",
//   "Monowar",
//   "Jibon",
//   "Babul",
//   "Afjal",
//   "Palash",
// ];
// console.log(studentNames.sort());

// const rollNumbers = [3, 6, 9, 7, 4, 1, 2, 5, 8];
// console.log(
//   rollNumbers.sort(function (a, b) {
//     return b - a;
//   })
// );

// function isLeapYea(year) {
//   if (year % 4 === 0) {
//     console.log(`${year} is a Leap Year..............`);
//   } else {
//     console.log(`${year} is not a Leap Year`);
//   }
// }
// isLeapYea(2025);
// isLeapYea(2027);
// isLeapYea(2028);
// isLeapYea(2029);
// isLeapYea(2030);
// isLeapYea(2032);
// isLeapYea(2033);

// function isLeapYea(year) {
//   if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//     console.log(`${year} is a Leap year..........`);
//   } else {
//     console.log(`${year} is not a Leap Year`);
//   }
// }
// isLeapYea(2025);
// isLeapYea(2028);
// isLeapYea(2030);
// isLeapYea(2031);
// isLeapYea(2032);

// const vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];

// const sentence = "This is Robiul Islam Munna From Bangladesh";

// let count = 0;

// const letters = Array.from(sentence);

// letters.forEach((val, arr, indx) => {
//   if (vowels.includes(val)) {
//     count++;
//   }
//   return count;
// });

// console.log(count);
// // function countVowels() {
// //   letters.forEach();
// // }
// // console.log(countVowels());

// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// function countVowels(sentence) {
//   let count = 0;

//   const letters = Array.from(sentence);
//   letters.forEach(function (value) {
//     if (vowels.includes(value)) {
//       count++;
//     }
//   });
//   return count;
// }
// console.log(countVowels("This is Tamim Mridha from bangladesh"));

// const numbers = [1, 6, 3, 2, 5, 4, 7, 8, 8, 5, 6, 5, 6];
// const duplicate = numbers.filter((value, index, array) => {
//   return array.indexOf(value) !== index;
// });
// console.log(duplicate);

// const sentence = `With reference to the above, we like to inform you that as per request of our client Reza marble Granite Industry Ltd. We have cancelled following Letter and Credit and insurance Cover ntoe and enclosed the same form refund of insurance premium With reference to the above, we like to inform you that as per request of our client Reza marble Granite Industry Ltd. We have cancelled following Letter and Credit and insurance Cover ntoe and enclosed the same form refund of insurance premiumWith reference to the above, we like to inform you that as per request of our client Reza marble Granite Industry Ltd. We have cancelled following Letter and Credit and insurance Cover ntoe and enclosed the same form refund of insurance premiumWith reference to the above, we like to inform you that as per request of our client Reza marble Granite Industry Ltd. We have cancelled following Letter and Credit and insurance Cover ntoe and enclosed the same form refund of insurance premium`;

// const matches = sentence.match(/our/gi);
// const occureances = matches ? matches : "Not Found";
// console.log(occureances);
// const len = matches ? matches.length : "Not matched";
// console.log(len);

// const firtsIndex = sentence.search(/we/gi);
// const indexNumber = firtsIndex > 0 ? firtsIndex : "Not frist Index";
// console.log(indexNumber);

// function linearSearch(arr, value) {
//   for (let x of arr) {
//     if (x == value) {
//       return x;
//     }
//   }
//   return "Not Foudn";
// }
// console.log(linearSearch(["a", "b", "c", "d"], "c", "b"));

// function linearSearch(arr, value) {
//   let len = arr.length;
//   for (let x = 0; x < len; x++) {
//     if (arr[x] === value) {
//       return arr[x];
//     }
//   }
// }
// console.log(linearSearch(["a", "e", "i", "o", "u"], "i"));

// function largestString(sentence) {
//   let largeText = [];
//   for (let x of sentence) {
//     if (x.length > largeText.length) {
//       largeText = x;
//     }
//   }
//   return [largeText, sentence.indexOf(largeText)];
// }
// console.log(
//   largestString([
//     "this is  Munna",
//     "Tamim Mridha",
//     "Ibrahim Miah",
//     "This is Tamim Iqbal",
//     "Sojib Islam",
//     "Tanvir Islam",
//   ])
// );

// function fizzBuzz(number) {
//   for (let i = 1; i <= number; i++) {
//     if (i % 15 === 0) {
//       console.log(`${i} is = fizzbuzz`);
//     } else if (i % 3 === 0) {
//       console.log(`${i} is = Fizz`);
//     } else if (i % 5 === 0) {
//       console.log(`${i} is = Buzz`);
//     } else {
//       console.log(`${i}........`);
//     }
//   }
// }
// fizzBuzz(100);

// const removeFalsyValue = [
//   "",
//   "Welcome",
//   NaN,
//   "Robiul Islam",
//   false,
//   "true",
//   0,
//   "Tanvir Islam",
//   undefined,
//   "Sojib miah",
//   null,
//   "Good Bye",
// ];
// console.log(removeFalsyValue);

// console.log(removeFalsyValue.filter(Boolean));

// const trueArray = removeFalsyValue.filter((val, indx, arr) => {
//   let value = true;
//   if (value) {
//     return val;
//   }
// });
// console.log(trueArray);

// const posts = [
//   {
//     title: "This is Card Title",
//     body: "This is Card Body",
//   },
//   {
//     title: "This is Card Title",
//     body: "This is Card Body",
//   },
//   {
//     title: "This is Card Title",
//     body: "This is Card Body",
//   },
//   {
//     title: "This is Card Title",
//     body: "This is Card Body",
//   },
//   {
//     title: "This is Card Title",
//     body: "This is Card Body",
//   },
//   {
//     title: "This is Card Title",
//     body: "This is Card Body",
//   },
// ];

// const data = async () => {
//   const res = await fetch(config);
//   if(!res.ok){
//     let message =
//   }
// };

// document.querySelector(".posts").innerHTML = posts
//   .map((post) => {
//     const { title, body } = post;

//     return `
//       <div class="post">
//         <h1>${title}</h1>
//         <p>${body}</p>
//       </div>
//     `;
//   })
//   .join("");

// const text = document.querySelector(".secText");

// function allAnimations() {
//   setTimeout(() => {
//     text.textContent = "Programmer";
//   }, 0);
//   setTimeout(() => {
//     text.textContent = "Web Developer";
//   }, 4000);
//   setTimeout(() => {
//     text.textContent = "Freelancer";
//   }, 8000);
// }
// setInterval(() => {
//   allAnimations();
// }, 12000);
// allAnimations();

// const btns = document.querySelectorAll("span");

// for (let x = 0; x < btns.length; x++) {
//   const input = document.querySelector("input");
//   btns[x].addEventListener("click", function (e) {
//     if (this.innerHTML === "=") {
//       input.value = eval(input.value);
//     } else if (this.innerHTML === "C") {
//       input.value = "";
//     } else if (this.innerHTML === "D") {
//       input.value = input.value.slice(1);
//     } else {
//       input.value += this.innerHTML;
//     }
//   });
// }

// const fabars = document.querySelector(".fa-bars");
// const faxmark = document.querySelector(".fa-xmark");
// const nav = document.querySelector("nav");
// const ul = document.querySelector("ul");

// fabars.addEventListener("click", function () {
//   fabars.classList.remove("fa-bars");
//   faxmark.classList.toggle("fa-xmarks");
//   nav.classList.toggle("navs");
// });
// faxmark.addEventListener("click", function () {
//   faxmark.classList.remove("fa-xmarks");
//   fabars.classList.add("fa-bars");
//   nav.classList.remove("navs");
// });

// const bars = document.querySelector(".fa-bars");
// const xmark = document.querySelector(".fa-xmark");
// const nav = document.querySelector("nav");
// bars.addEventListener("click", function () {
//   bars.classList.remove("fa-bars");
//   xmark.classList.add("fa-xmarks");
//   nav.classList.add("navs");
// });
// xmark.addEventListener("click", function () {
//   bars.classList.add("fa-bars");
//   xmark.classList.remove("fa-xmarks");
//   nav.classList.remove("navs");
// });

// const posts = [
//   {
//     title: "This is Title One",
//     body: "This is Body One",
//   },
//   {
//     title: "This is Title Two",
//     body: "This is Body Two",
//   },
//   {
//     title: "This is Title Three",
//     body: "This is Body Three",
//   },
//   {
//     title: "This is Titl Four",
//     body: "This is Body Four",
//   },
//   {
//     title: "This is Title Five",
//     body: "This is Body Five",
//   },
//   {
//     title: "This is Title Six",
//     body: "This is Body Six",
//   },
//   {
//     title: "This is Title Seven",
//     body: "This is Body Seven",
//   },
//   {
//     title: "This is Titl Eight",
//     body: "This is Body Eight",
//   },
//   {
//     title: "This is Title Nine",
//     body: "This is Body Nine",
//   },
//   {
//     title: "This is Title Ten",
//     body: "This is Body Ten",
//   },
// ];

// const fetchData = async (config) => {
//   try {
//     const res = await axios.put(config);
//     return res.data;
//   } catch (error) {
//     throw new Error("Data is Not Fetched");
//   }
// };

// const postElement = document.querySelector(".posts");

// const loadAllData = async () => {
//   const posts = await fetchData(
//     "https://jsonplaceholder.typicode.com/posts/1",
//     {
//       method: "PUT",
//       data: JSON.stringify({
//         title: "This is Data Title  ",
//         body: "This is Body One",
//       }),
//     }
//   );

//   const postData = document.createElement("div");
//   postData.classList.add("post");

//   postData.innerHTML = `
//     <h2>${posts.title}</h2>
//     <p>${posts.body}</p>
//     `;
//   postElement.appendChild(postData);
// };
// loadAllData();

// const posts = [
//   {
//     title: "This is Post Title - 01",
//     body: "This is Post Body - 01",
//   },
//   {
//     title: "This is Post Title - 02",
//     body: "This is Post Body - 02",
//   },
//   {
//     title: "This is Post Title - 03",
//     body: "This is Post Body - 03",
//   },
//   {
//     title: "This is Post Title - 04",
//     body: "This is Post Body - 04",
//   },
//   {
//     title: "This is Post Title - 05",
//     body: "This is Post Body - 05",
//   },
//   {
//     title: "This is Post Title - 06",
//     body: "This is Post Body - 06",
//   },
//   {
//     title: "This is Post Title - 07",
//     body: "This is Post Body - 07",
//   },
//   {
//     title: "This is Post Title - 08",
//     body: "This is Post Body - 08",
//   },
//   {
//     title: "This is Post Title - 09",
//     body: "This is Post Body - 09",
//   },
//   {
//     title: "This is Post Title - 10",
//     body: "This is Post Body - 10",
//   },
// ];

// const fetchData = async (config, data) => {
//   const res = await fetch(config, data);
//   return res.json();
// };

// const postsElement = document.querySelector(".posts");

// const loadAllData = async () => {
//   const posts = await fetchData(
//     "https://jsonplaceholder.typicode.com/posts/1",
//     {
//       method: "POST",
//       body: JSON.stringify([
//         {
//           title: "This is Data Title",
//           body: "This is Body title",
//         },
//         {
//           title: "This is Data Title",
//           body: "This is Body title",
//         },
//         {
//           title: "This is Data Title",
//           body: "This is Body title",
//         },
//         {
//           title: "This is Data Title",
//           body: "This is Body title",
//         },
//       ]),
//       headers: {
//         "Content-type": "application/json;charset=UTF-8",
//       },
//     }
//   );
//   // posts.filter((post) => {
//   const postElement = document.createElement("div");
//   postElement.classList.add("post");
//   postElement.innerHTML = `
//       <h3>${posts.title}</h3>
//       <p>${posts.body}</p>
//     `;
//   postsElement.appendChild(postElement);
//   // });
// };
// loadAllData();

// const dataFetched = async (config) => {
//   const res = await fetch(config);
//   return res.json();
// };

// const postsElement = document.querySelector(".posts");

// const loadAllData = async () => {
//   const posts = await dataFetched("https://jsonplaceholder.typicode.com/posts");

//   posts.map((post) => {
//     const postElement = document.createElement("div");
//     postElement.classList.add("post");
//     postElement.innerHTML = `
//       <h3>${post.title}</h3>
//       <p>${post.body}</p>
//     `;
//     postsElement.appendChild(postElement);
//   });
// };

// loadAllData();

// const contentData = document.querySelectorAll(".content");

// function myFunc(passId) {
//   for (let content of contentData) {
//     content.classList.remove("active");
//   }
//   document.getElementById(passId).classList.toggle("active");
// }

// window.addEventListener("click", function (e) {
//   const cElement = e.target;
//   const btn = cElement.className.includes("btn");

//   if (!btn) return;
//   const cText = e.target.parentNode.querySelector(".text");
//   cText.classList.toggle("showMore");

//   if (cElement.textContent === "Read More") {
//     cElement.textContent = "Read Less";
//   } else {
//     cElement.textContent = "Read More";
//   }
// });

// const vowels = prompt("Enter Any Letters");

// switch (vowels) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//   case "A":
//   case "E":
//   case "I":
//   case "O":
//   case "U":
//     console.log(`${vowels} is = Vowel`);
//     break;

//   default:
//     console.log(`${vowels} is =  Consonent`);
//     break;
// }

// const ul = document.querySelector("ul");
// const liOne = document.querySelectorAll("li")[0];
// console.log(liOne.textContent);
// const ul = liOne.parentNode;
// console.log(ul.textContent);
// const liOne = ul.children[0];
// console.log(liOne.textContent);
// const liTwo = liOne.nextElementSibling;
// console.log(liTwo.textContent);
// const liThree = liTwo.nextElementSibling;
// console.log(liThree.textContent);
// const liThree = ul.children[2];
// console.log(liThree.textContent);
// const liTwo = liThree.previousElementSibling;
// console.log(liTwo.textContent);

// const program = document.querySelector("#program");

// program.addEventListener("change", function (e) {
//   console.log(e.target.value);
// });
// var input = document
//   .querySelector("input")
//   .addEventListener("change", function (e) {
//     e.preventDefault();
//     console.log("chancged");
//     console.log(e.target);
//     console.log(e.target.value);
//     console.log(e.bubbles);
//     console.log(e.isTrusted);
//     console.log(e.currentTarget);
//     console.log(e.cancelBubble);
//     console.log(e.BUBBLING_PHASE);
//     console.log(e.type);
//   });

// var department = document.querySelector("#department");
// department.addEventListener("change", function (e) {
//   e.preventDefault();
//   console.log(e.target.value);
// });

// var programs = document.querySelectorAll("input");

// Array.from(programs).map((program) => {
//   program.addEventListener("change", function (e) {
//     e.preventDefault();
//     if (e.target.checked) {
//       console.log("Checked");
//       console.log(e.target.value);
//     } else {
//       console.log("Unchecked");
//     }
//   });
// });

// const program = document.querySelector("#subject");
// program.addEventListener("change", function (e) {
//   e.preventDefault();
//   console.log(e.target.value);
// });

// const program = document.querySelectorAll("input");
// Array.from(program).map((progra) => {
//   progra.addEventListener("change", function (e) {
//     e.preventDefault();
//     if (e.target.checked) {
//       console.log(e.target.value);
//     }
//   });
// });

// const container = document.querySelector(".container");

// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const btn = document.querySelector(".btn");
// const result = document.querySelector("#result");
// const remainingAttempts = document.querySelector("#remainingAttempts");
// const p = document.createElement("p");

// let won = 0;
// let lost = 0;
// let totalAttempts = 5;
// let attempts = 0;

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   attempts++;
//   const inputValue = input.value;
//   const guessNumber = guessingNumber(5);
//   output(inputValue, guessNumber);
//   if (attempts == 5) {
//     input.disabled = true;
//     btn.disabled = true;
//     btn.innerHTML = "Disabled";
//     btn.style.background = "gray";
//   }
//   remainingAttempts.innerHTML = `Remaingin Attempst = ${
//     totalAttempts - attempts
//   }`;
//   input.value = "";
// });

// const output = (inputValue, guessNumber) => {
//   if (inputValue == guessNumber) {
//     result.innerHTML = `Your Are Won`;
//     won++;
//   } else {
//     result.innerHTML = `Your are Lost, Guessing Number was = ${guessNumber}`;
//     lost++;
//   }
//   p.classList.add("large-text");
//   p.innerHTML = `Total Won = ${won} times, Total Losts = ${lost} times`;
//   container.appendChild(p);
// };

// const guessingNumber = (limit) => {
//   return Math.floor(Math.random() * limit) + 1;
// };

// const slideElements = document.querySelectorAll(".slideElement");
// let count = 1;

// setInterval(() => {
//   count++;
//   const active = document.querySelector(".active");
//   active.classList.remove("active");
//   if (count > slideElements.length) {
//     count = 1;
//     slideElements[0].classList.add("active");
//   } else {
//     active.nextElementSibling.classList.add("active");
//   }
// }, 1500);

// const photos = [
//   "images/1.jpg",
//   "images/2.jpg",
//   "images/3.jpg",
//   "images/4.jpg",
//   "images/5.jpg",
//   "images/6.jpg",
//   "images/7.jpg",
//   "images/8.jpg",
// ];

// const image = document.querySelector("img");
// const rightAngle = document.querySelector(".fa-angle-right");
// const angleLeft = document.querySelector(".fa-angle-left");

// let count = 0;

// rightAngle.addEventListener("click", function () {
//   count++;
//   if (count >= photos.length) {
//     count = 0;
//     image.src = photos[count];
//   } else {
//     image.src = photos[count];
//   }
// });
// angleLeft.addEventListener("click", function () {
//   count--;
//   if (count < 0) {
//     count = photos.length - 1;
//     image.src = photos[count];
//   } else {
//     image.src = photos[count];
//   }
// });

// const container = document.querySelector(".container");
// const card = document.querySelector(".card");
// const todoForm = document.querySelector(".todoForm");
// const todoInput = document.querySelector("#todoInput");
// const todoLists = document.querySelector("#lists");
// const messageElement = document.querySelector("#message");

// // showMessage =====================================

// const showMessage = (text, status) => {
//   messageElement.innerHTML = text;
//   messageElement.classList.add(`bg-${status}`);
//   setTimeout(() => {
//     messageElement.innerHTML = "";
//     messageElement.classList.remove(`bg-${status}`);
//   }, 1000);
// };

// // createTodo=======================================

// const createTodo = (todoId, todoValue) => {
//   const todoElement = document.createElement("li");
//   todoElement.id = todoId;
//   todoElement.classList.add("li-style");
//   todoElement.innerHTML = `

//     <span>${todoValue}</span>
//     <span><button class="btn" id="deleteTodo"><i class="fa-solid fa-trash"></i></button></span>
//   `;
//   todoLists.appendChild(todoElement);

//   const deleteTodo = todoElement.querySelector("#deleteTodo");
//   deleteTodo.addEventListener("click", deleteButton);
// };

// // deleteButton =====================================

// const deleteButton = (e) => {
//   const selectedTodo = e.target.parentElement.parentElement.parentElement;
//   todoLists.removeChild(selectedTodo);
//   let todos = getTodosFromLocalStorage();
//   todos = todos.filter((todo) => todo.todoId !== selectedTodo.id);
//   localStorage.setItem("mytodos", JSON.stringify(todos));
//   showMessage("Todo is Deleted", "danger");
//   todoInput.value = "";
// };

// // getTodosFromLocalStorage=========================

// const getTodosFromLocalStorage = () => {
//   return localStorage.getItem("mytodos")
//     ? JSON.parse(localStorage.getItem("mytodos"))
//     : [];
// };

// // todoadd =========================================

// function addTodo(e) {
//   e.preventDefault();
//   const todoValue = todoInput.value;
//   const todoId = Date.now().toString();
//   createTodo(todoId, todoValue);
//   showMessage("Todo is Added", "success");

//   const todos = getTodosFromLocalStorage();
//   todos.push({ todoId, todoValue });
//   localStorage.setItem("mytodos", JSON.stringify(todos));
// }

// // loadedWindow =====================================

// const loadedWindow = () => {
//   const todos = getTodosFromLocalStorage();
//   todos.map((todo) => createTodo(todo.todoId, todo.todoValue));
// };

// // form submit =====================================

// todoForm.addEventListener("submit", addTodo);

// window.addEventListener("DOMContentLoaded", loadedWindow);

// export const studentInfo = [
//   { name: "Robiul Islam", age: 25, cgpa: 3.96 },
//   { name: "Tamim Mridha", age: 39, cgpa: 3.99 },
// ];

// export const totalData = [
//   "This is Exported Data One",
//   "This is Exported Data Two",
//   "This is Exported Data Three",
// ];

// const posts = [
//   {
//     title: "This is Post title - 01",
//     body: "This is Post Body - 01",
//   },
//   {
//     title: "This is Post title - 02",
//     body: "This is Post Body - 02",
//   },
//   {
//     title: "This is Post title - 03",
//     body: "This is Post Body - 03",
//   },
//   {
//     title: "This is Post title - 04",
//     body: "This is Post Body - 04",
//   },
//   {
//     title: "This is Post title - 05",
//     body: "This is Post Body - 05",
//   },
//   {
//     title: "This is Post title - 06",
//     body: "This is Post Body - 06",
//   },
//   {
//     title: "This is Post title - 07",
//     body: "This is Post Body - 07",
//   },
//   {
//     title: "This is Post title - 08",
//     body: "This is Post Body - 08",
//   },
//   {
//     title: "This is Post title - 09",
//     body: "This is Post Body - 09",
//   },
//   {
//     title: "This is Post title - 10",
//     body: "This is Post Body - 10",
//   },
//   {
//     title: "This is Post title - 11",
//     body: "This is Post Body - 11",
//   },
//   {
//     title: "This is Post title - 12",
//     body: "This is Post Body - 12",
//   },
// ];

// const fetchData = async (config) => {
//   const res = await fetch(config);
//   return res.json();
// };
// console.log(fetchData());

// const postsElement = document.querySelector(".posts");

// const loadAllData = async () => {
//   const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
//   posts.map((post) => {
//     const postElement = document.createElement("div");
//     postElement.classList.add("post");
//     postElement.innerHTML = `
//     <h3>${post.title}</h3>
//     <p>${post.body}</p>
//     `;
//     postsElement.appendChild(postElement);
//   });
// };
// loadAllData();

// const fetchData = (method, url) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open(method, url);
//   xhr.setRequestHeader("Content-type", "application/json");
//   /*  xhr.onload = () => {
//     JSON.parse(xhr.response);
//   }; */
//   xhr.send();
// };

// const posts = fetchData("GET", "https://jsonplaceholder.typicode.com/posts");
// const postsElement = document.querySelector(".posts");

// const loadAllData = () => {
//   posts.map((post) => {
//     const postElement = document.createElement("div");
//     postElement.classList.add("post");
//     postElement.innerHTML = `
//     <h3>${post.title}</h3>
//     <p>${post.body}</p>
//     `;
//     postsElement.appendChild(postElement);
//   });
// };
// loadAllData();

// const dataLoaded = async (config) => {
//   try {
//     const res = await axios(config);
//     return res.data;
//   } catch (error) {
//     throw new Error(error);
//   }
// };

// const postsElement = document.querySelector(".posts");

// const loadAllData = async () => {
//   const posts = await dataLoaded("https://jsonplaceholder.typicode.com/posts");

//   posts.map((post) => {
//     const postElement = document.createElement("div");
//     postElement.classList.add("post");
//     postElement.innerHTML = `
//     <h3>${post.title}</h3>
//     <p>${post.body}</p>
//     `;
//     postsElement.appendChild(postElement);
//   });
// };
// loadAllData();

// const mixedArr = ["Welcome", "", 0, NaN, null, false, undefined, "Good Bye"];

// const removeFalsyValue = mixedArr.filter((falsyValud) => {
//   let ture = falsyValud;
//   if (ture) {
//     return falsyValud;
//   }
// });
// console.log(removeFalsyValue);

// console.log(mixedArr.filter(Boolean));

// console.log(Boolean("Mashrafi"));
// console.log(!!"Mashrafi");

// let numbers = [1, 2, 3];
// console.log(numbers.length);
// numbers[3] = 4;
// console.log(numbers.length);
// console.log(numbers);
// numbers.length = 2;
// console.log(numbers);

// let numbers = [1, 2, [3, 4, 5], [6, 4, [8, 9]]];

// console.log(numbers.flat().flat());
// console.log(numbers.flat(Infinity));
// const captain = "Mashrafi";

// captain === "Mashrafi" && console.log("Love");
// captain === "mashrafi" || console.log(false);

// const quote = `React is a JS framework & this framework is the most popular front-end right now`;

// console.log(quote.replace(/framework/gi, "Library"));

// const library1 = "jQuery";
// const library2 = "React";
// console.log(`library1 - ${library1}`);
// console.log(`library2 - ${library2}`);

// console.log({ library1 });
// console.log({ library2 });

// const startTime = performance.now();

// for (let i = 0; i <= 50; i++) {
//   console.log(i);
// }

// const endTime = performance.now();
// console.log(`${endTime - startTime} miliseconds.....`);

// const mixedArr = ["Welcome", "", false, null, NaN, undefined, 0, "Good Bye"];

// const truthyArr = mixedArr.filter((value) => {
//   return value;
// });
// console.log(truthyArr);

// const truArray = mixedArr.filter((value) => {
//   if (value) {
//     return value;
//   }
// });
// console.log(truArray);
// const trAr = mixedArr.filter(Boolean);
// console.log(trAr);

// const names = "Mashrafi";
// console.log(!!names);
// console.log(!names);
// console.log(Boolean(names));
// console.log(Boolean(!names));
// console.log(Boolean(!!names));

// const fruits = ["Apple", "Orange", "Mango", "Pineapple", "Jack Fruit"];
// fruits.length = 2;
// console.log(fruits);
// fruits[3] = "Banana";

// console.log(fruits);
// fruits[2] = "Kiwi";
// console.log(fruits);

// const arr = [
//   "Tamim",
//   "Karim",
//   ["Ibrahim", ["Hamim", "Shamim", "Zaman"], "Tutul", "Shakib"],
//   "Kabir",
// ];
// const mltDim = arr.flat().flat();
// console.log(mltDim);

// let names = "Mashrafi";

// // names = "Mashrafi" && console.log("Love");

// names = !"Mshrafi" || console.log("False");

// const sentence = `This is Robiul Islam Munna, I'm from bangladesh. I'm a coumpute Operator of a Privet
// Company. The company name is Central Insurance Company Limited`;
// console.log(sentence);

// const replaced = sentence.replace(/the/gi, "Allllll");
// console.log(replaced);

// const library1 = "React";
// const library2 = "jQuery";
// console.log(library1);
// console.log(library2);
// console.log(`Library1 = ${library1}`);
// console.log(`Library2 = ${library1}`);
// console.log({ library1 });
// console.log({ library2 });
// console.dir(library1);
// console.log(library2);

// const startTime = performance.now();

// for (let i = 0; i <= 50; i++) {
//   console.log(i);
// }

// const endTime = performance.now();

// console.log(
//   `Total time is Spend for this Operations ${(endTime - startTime) * 1000} `
// );

// const button = document.querySelector("#button");

// function debounce(func, delay) {
//   let timeoutId;
//   return function () {
//     if (timeoutId) {
//       clearTimeout(timeoutId);
//     }
//     timeoutId = setTimeout(() => {
//       func();
//     }, delay);
//   };
// }

// button.addEventListener(
//   "click",
//   debounce(function () {
//     console.log("Clicked");
//   }, 2000)
// );

// const array = [1, 2, 3, 4, 5];

// const temp = array[0];

// array[0] = array[4];
// array[4] = temp;

// console.log(array);

// [array[0], array[4]] = [array[4], array[0]];
// console.log(array);

// let a = 1;
// let b = 2;
// // [a, b] = [b, a];
// // console.log(a, b);

// b = a + (a = b) - b;
// console.log(a, b);

// function copyToClicpBoard(str) {
//   const element = document.createElement("textarea");
//   element.value = str;
//   document.body.appendChild(element);
//   element.select();
//   document.execCommand("copy");
//   document.body.removeChild(element);
// }

// function handleClick() {
//   let text = document.querySelector("#text");
//   console.log(text);
//   copyToClicpBoard(text.innerText);
// }

// function countDownDate() {
//   setInterval(() => {
//     let eventDate = new Date("16 Mar 2023 00:00:00");
//     let currentDate = new Date();
//     let timeDiffer = eventDate - currentDate;
//     let differSec = Math.floor(timeDiffer / 1000);
//     let differMin = Math.floor(differSec / 60);
//     let differHour = Math.floor(differMin / 60);
//     let day = Math.floor(differHour / 24);
//     let remSec = differSec % 60;
//     let remMin = differMin % 60;
//     let remHour = differHour % 24;
//     console.log(
//       `Days ${day}, Hours ${remHour}, Minutes ${remMin}, Seconds ${remSec}`
//     );
//   }, 1000);
// }
// countDownDate();
// const button = document.querySelector("#button");

// function debounce(fn, delay) {
//   let timeoutId;
//   return function () {
//     if (timeoutId) {
//       clearTimeout(timeoutId);
//     }
//     timeoutId = setTimeout(() => {
//       fn();
//     }, delay);
//   };
// }

// button.addEventListener(
//   "click",
//   debounce(function () {
//     console.log("clicked");
//   }, 2000)
// );

// const button = document.querySelector("#button");

// function debounce(fn, delay) {
//   let timeoutId;
//   return function () {
//     if (timeoutId) {
//       clearTimeout(timeoutId);
//     }
//     timeoutId = setTimeout(() => {
//       fn();
//     }, delay);
//   };
// }

// button.addEventListener(
//   "click",
//   debounce(function () {
//     console.log("Clicked");
//   }, 2000)
// );

// console.log([] + []);
// console.log({} + []);
// console.log({});
// console.log(true + 5);
// console.log(false + 5);

// function myFunc() {
//   return "Bangladesh";
// }
// const string = myFunc`hello`;
// console.log(string);

// function copyToClipBoard(str) {
//   const element = document.createElement("textarea");
//   element.value = str;
//   document.body.appendChild(element);
//   element.select();
//   document.execCommand("copy");
//   document.body.removeChild(element);
// }

// function myFunc() {
//   let text = document.querySelector("#text");
//   copyToClipBoard(text.innerHTML);
// }

// const language = {
//   name: "JavaScript",
//   founded: 1995,
//   founder: "Brendan Eich",
// };

// const { name: n, founded: f, founder: fo } = language;
// console.log(n);
// console.log(f);
// console.log(fo);

// const element = document.querySelector("#number").valueAsNumber;
// console.log(element);
// console.log(typeof element);
// const el = document.querySelector("#number");
// console.log(typeof el);

// const array = [1, 2, 3, 4, 5, 6, 1, 2, 3, 3, 5, 4, 1, 2];
// console.log(...new Set(array));

// const hasSameElements = (a, b) => {
//   return a.length === b.length && a.every((v, i) => v === b[i]);
// };

// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers.sort(() => Math.random() - 0.5));

// console.log(hasSameElements([1, 2], [2, 3]));

// let x = 1;
// x = (x++, x);
// console.log(x);

// let y = (2,3)
// var swiper = new Swiper(".mySwiper", {
//   effect: "flip",
//   grabCursor: true,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// document.querySelector("#input").addEventListener("keyup", function () {
//   const inputValue = document.querySelector("#input").value.toUpperCase();
//   const product = document.querySelectorAll(".item");
//   const pname = document.getElementsByTagName("h2");
//   for (let i = 0; i < pname.length; i++) {
//     const search = product[i].getElementsByTagName("h2")[0];
//     if (search) {
//       if (search.textContent.toUpperCase().indexOf(inputValue) > -1) {
//         product[i].style.display = "";
//       } else {
//         product[i].style.display = "none";
//       }
//     }
//   }
// });

// document.querySelector("#input").addEventListener("keyup", function () {
//   const inputValue = document.querySelector("#input").value.toUpperCase();
//   const product = document.querySelectorAll(".ptoduct");
//   const pname = document.getElementsByTagName("h2");
//   for (let i = 0; i < pname.length; i++) {
//     const matchPname = product[i].getElementsByTagName("h2")[0];
//     if (matchPname) {
//       if (matchPname.innerHTML.toUpperCase().indexOf(inputValue) > -1) {
//         product[i].style.display = "";
//       } else {
//         product[i].style.display = "none";
//       }
//     }
//   }
// });

// const selectBgColor = document.querySelector("#selectBgColor");

// const selectFontSize = document.querySelector("#selectFontSize");
// const main = document.querySelector("main");

// function allTask() {
//   const bColor = localStorage.getItem("bgColors");
//   const fSizes = localStorage.getItem("fSizes");

//   if (bColor && fSizes) {
//     main.style.background = bColor;
//     main.style.fontSize = fSizes;
//   }
//   if (bColor && !fSizes) {
//     main.style.background = bColor;
//     main.style.fontSize = "16px";
//   }
//   if (!bColor && fSizes) {
//     main.style.background = "aqua";
//     main.style.fontSize = fSizes;
//   }
// }

// selectBgColor.addEventListener("change", function (e) {
//   const bgColor = e.target.value;
//   localStorage.setItem("bgColors", bgColor);

//   main.style.background = bgColor;
// });
// selectFontSize.addEventListener("change", function (e) {
//   const fnSize = e.target.value;
//   localStorage.setItem("fSizes", fnSize);
//   main.style.fontSize = fnSize;
// });
// allTask();

// let increase = document.querySelector("#increase");
// const reset = document.querySelector("#reset");
// const decrease = document.querySelector("#decrease");
// const count = document.querySelector("#count");

// let counts = 0;
// reset.addEventListener("click", function () {
//   if (count > 0 || count < 0) {
//     count.innerHTML = 0;
//   } else {
//     count.innerHTML = 0;
//   }
// });

// decrease.addEventListener("click", function () {
//   count.innerHTML = counts--;
// });

// increase.addEventListener("click", function () {
//   count.innerHTML = counts++;
// });
//immediate invoked function expression
// (function () {
//   const quotes = [
//     {
//       quote:
//         "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
//       author: " Life",
//     },
//     {
//       quote:
//         "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
//       author: "John Kenneth Galbraith",
//     },
//     {
//       quote:
//         "God save me from my friends. I can protect myself from my enemies.",
//       author: "Claude Louis Hector de Villars ",
//     },
//     {
//       quote: "The price of anything is the amount of life you exchange for it.",
//       author: "David Thoreau",
//     },
//     {
//       quote:
//         "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
//       author: "Charles Lindbergh",
//     },
//     {
//       quote:
//         "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
//       author: " Tyne Daly",
//     },
//   ];

//   const btn = document.getElementById("generate-btn");

//   btn.addEventListener("click", function () {
//     let random = Math.floor(Math.random() * quotes.length);

//     document.getElementById("quote").textContent = quotes[random].quote;
//     document.querySelector(".author").textContent = quotes[random].author;
//   });
// })();

// const quates = [
//   {
//     quate: "Lorem 1",
//     author: "Author 1",
//   },
//   {
//     quate: "Lorem 2",
//     author: "Author 2",
//   },
//   {
//     quate: "Lorem 3",
//     author: "Author 3",
//   },
//   {
//     quate: "Lorem 4",
//     author: "Author 4",
//   },
// ];

// const btn = document.querySelector("#btn");
// const qut = document.querySelector("#quate");
// const athr = document.querySelector(".author");

// btn.addEventListener("click", function () {
//   let random = Math.floor(Math.random() * quates.length);
//   qut.innerHTML = quates[random].quate;
//   athr.innerHTML = quates[random].author;
// });

// (function () {
//   //Select the input element
//   const form = document.querySelector("#message-form");
//   //Set up Submit Button
//   form.addEventListener("submit", function (e) {
//     // prevent the form's default submission action
//     e.preventDefault();
//     //Get user's input from from
//     const message = document.querySelector("#message");
//     const feedback = document.querySelector(".feedback");
//     const messageContent = document.querySelector(".message-content");

//     if (message.value === "") {
//       feedback.classList.add("show");
//       setTimeout(function () {
//         feedback.classList.remove("show");
//       }, 2000);
//     } else {
//       //Change message content and clear the message input
//       messageContent.textContent = message.value;
//       message.value = "";
//     }
//   });
// })();

// const quates = [
//   {
//     quate:
//       "  One Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis saepe suscipit, velit asperiores iure tempora sint cupiditate culpa fugit et doloremque voluptate! Reiciendis cupiditate, voluptate deleniti saepe ea fuga asperiores.",
//     author: "Mark Wood",
//   },
//   {
//     quate:
//       "  Two Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis saepe suscipit, velit asperiores iure tempora sint cupiditate culpa fugi.",
//     author: "Joe Baiden",
//   },
//   {
//     quate:
//       "  Three Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis saepe suscipit, velit asperiores iure tempora sint cupiditate culpa fugit voluptate deleniti saepe ea fuga asperiores.",
//     author: "Look Ronki and Grand Flower",
//   },
//   {
//     quate:
//       "  Four Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis saepe suscipit, velit asperiores iure tempora sint cupiditate culpa fugit et doloremque voluptate! Reiciendis cupiditate, voluptate deleniti saep",
//     author: "Tamim Sahriar Subin",
//   },
//   {
//     quate:
//       "  Five Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis saepe suscipit, velit asperiores iure tempora sint cupiditate culpa fugit et doloremque voluptate! Reiciendis cupiditate, voluptate deleniti saepe ea fuga asperiores.",
//     author: "Sundor pechai",
//   },
//   {
//     quate:
//       "  Six Lorem, ipsum dolor sit amet consectetur adipisicing elit. voluptate deleniti saepe ea fuga asperiores.",
//     author: "Jos Kuku",
//   },
//   {
//     quate:
//       "  Seven Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis saepe suscipit, velit asperiores iure tempora sint cupiditate culpa fugit et",
//     author: "Donald Cristian Henry Nicholos",
//   },
// ];

// const bgColor = ["cyan", "green", "pink", "purple", "darkcyan", "hotpink"];
// const colors = ["cyan", "green", "pink", "purple", "darkcyan", "hotpink"];
// const authorBg = ["cyan", "green", "pink", "purple", "darkcyan", "hotpink"];

// const btn = document.querySelector("#btn");
// const text = document.querySelector("#text");
// const quat = document.querySelector("#author");
// const sp = document.querySelector(".sp");

// btn.addEventListener("click", function () {
//   let randomValue = Math.floor(Math.random() * quates.length);
//   let clr = Math.floor(Math.random() * colors.length);
//   let bgAthr = Math.floor(Math.random() * authorBg.length);
//   let btnBg = Math.floor(Math.random() * bgColor.length);

//   text.style.color = colors[clr];
//   sp.style.background = authorBg[bgAthr];
//   text.innerHTML = quates[randomValue].quate;
//   quat.innerHTML = quates[randomValue].author;
//   btn.style.background = bgColor[btnBg];
// });

// let input = document.querySelector("#input");
// let btn = document.querySelector("#btn");
// let p = document.querySelector("p");
// btn.addEventListener("click", function () {
//   input = input.value;
//   p.innerHTML = input;
//   input.value = "";
// });

// const nav = document.querySelector(".nav");
// const minus = document.querySelector(".minus");
// const plus = document.querySelector(".plus");
// const lOne = document.querySelector(".listsOne");
// const lTwo = document.querySelector(".listsTwo");
// const ulOne = document.querySelector(".ulsOne");
// const ulTwo = document.querySelector(".ulsTwo");
// const faAngleDowns1 = document.querySelectorAll(".fa-angle-down")[0];
// const faAngleDowns2 = document.querySelectorAll(".fa-angle-down")[1];

// lOne.addEventListener("click", function () {
//   ulOne.classList.toggle("ulsOnes");
//   faAngleDowns1.classList.toggle("fa-angle-downs");
// });
// lTwo.addEventListener("click", function () {
//   ulTwo.classList.toggle("ulsTwos");
//   faAngleDowns2.classList.toggle("fa-angle-downs");
// });

// plus.addEventListener("click", function () {
//   nav.classList.toggle("navs");
//   plus.classList.add("pluss");
//   minus.classList.add("minuss");
// });
// minus.addEventListener("click", function () {
//   nav.classList.remove("navs");
//   plus.classList.remove("pluss");
//   minus.classList.remove("minuss");
// });

// const contents = document.querySelectorAll(".content");

// function myFunc(passId) {
//   contents.forEach((content) => {
//     content.classList.remove("active");
//   });
//   document.getElementById(passId).classList.toggle("active");
// }
// document.addEventListener("click", function (e) {
//   const cElement = e.target;
//   const btn = cElement.className.includes("btns");
//   if (!btn) return;
//   const cText = e.target.parentElement.querySelector(".text");
//   cText.classList.toggle("showHide");
//   if (cElement.textContent === "Read More") {
//     cElement.textContent = "Read Less";
//     cElement.style.background = "black";
//   } else {
//     cElement.textContent = "Read More";
//     cElement.style.background = "darkcyan";
//   }
// });

// const btn = document.querySelector("#btn");
// const input = document.querySelector("input");
// const product = document.querySelectorAll(".product");
// const pName = document.getElementsByTagName("h2");
// const refresh = document.querySelector("#refresh");
// refresh.addEventListener("click", function () {
//   location.reload();
// });
// btn.addEventListener("click", function () {
//   const inputValue = input.value.toUpperCase();
//   for (let i = 0; i < pName.length; i++) {
//     const matches = product[i].getElementsByTagName("h2")[0];
//     if (matches) {
//       if (matches.textContent.toUpperCase().indexOf(inputValue) > -1) {
//         product[i].style.display = "";
//       } else {
//         product[i].style.display = "none";
//       }
//     }
//   }
// });
// const clickBtn = document.querySelector("#btn");
// const content = document.querySelector(".content");
// const yes = document.querySelector("#yes");
// const no = document.querySelector("#no");
// const text = document.querySelector("#text");
// const deleted = document.querySelector("#deleted");

// clickBtn.addEventListener("click", function () {
//   content.classList.toggle("contents");
//   clickBtn.classList.add("btns");
// });
// yes.addEventListener("click", function () {
//   clickBtn.classList.remove("btns");
//   content.classList.remove("contents");
//   deleted.innerHTML = "Your Data is Deleted";
//   setTimeout(() => {
//     deleted.innerHTML = "";
//   }, 1000);
// });
// no.addEventListener("click", function () {
//   clickBtn.classList.remove("btns");
//   content.classList.remove("contents");
//   deleted.innerHTML = "Your Data are not Deleted";
//   setTimeout(() => {
//     deleted.innerHTML = "";
//   }, 1000);
//   deleted.style.color = "green";
// });

// document.querySelector("#btn").addEventListener("click", function () {
//   const result = document.querySelector("#result");

//   let inputAge = new Date(document.querySelector("input").value);

//   let birthDate = inputAge.getDate();
//   let birthMonth = inputAge.getMonth() + 1;
//   let birthYear = inputAge.getFullYear();

//   let date = new Date();
//   let currentDate = date.getDate();
//   let currentMonth = date.getMonth() + 1;
//   let currentYear = date.getFullYear();
//   let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//   if (birthDate > currentDate) {
//     currentDate = currentDate + months[currentMonth - 1];
//     currentMonth = currentMonth - 1;
//   }
//   if (birthMonth > currentMonth) {
//     currentMonth = currentMonth + 12;
//     currentYear = currentYear - 1;
//   }
//   let year = currentYear - birthYear;
//   let month = currentMonth - birthMonth;
//   let day = currentDate - birthDate;
//   result.innerHTML = `${year} years, ${month} Months, ${day} Days`;
// });

// setInterval(() => {
//   const clock = document.querySelector("#Clock");
//   var clocks = new Date();
//   var hour = clocks.getHours();
//   var minutes = clocks.getMinutes();
//   var seconds = clocks.getSeconds();
//   var amPm = "PM";
//   if (hour < 10) {
//     hour = "0" + hour;
//   }
//   if (minutes < 10) {
//     minutes = "0" + minutes;
//   }
//   if (seconds < 10) {
//     seconds = "0" + seconds;
//   }
//   amPm = hour < 12 ? "AM" : "PM";
//   hour = hour > 12 ? hour - 12 : hour;
//   clock.innerHTML = `${hour} : ${minutes} : ${seconds} : ${amPm}`;
// }, 1000);

// function countDownDate() {
//   const countDown = document.querySelector("#countDown");
//   setInterval(() => {
//     const eventTime = new Date("18 Feb 2023 00:00:00");
//     const currentTime = new Date();
//     const differTime = eventTime - currentTime;
//     let differSec = Math.floor(differTime / 1000);
//     let differMin = Math.floor(differSec / 60);
//     let differHour = Math.floor(differMin / 60);
//     let differDay = Math.floor(differHour / 24);
//     let sec = differSec % 60;
//     let min = differMin % 60;
//     let hour = differHour % 24;
//     if (differDay < 10) {
//       differDay = "0" + differDay;
//     }
//     if (hour < 10) {
//       hour = "0" + hour;
//     }
//     if (min < 10) {
//       min = "0" + min;
//     }
//     if (sec < 10) {
//       sec = "0" + sec;
//     }
//     countDown.innerHTML = `${differDay} Days, ${hour} Hours, ${min} Minutes, ${sec} Seconds`;
//   }, 1000);
// }
// countDownDate();

// export const names = [
//   "Robiul Islam Munna",
//   "Tanvir Islam ",
//   "Karim Zannat",
//   "Ibrahim Zadran",
//   "Asgar Afgan",
// ];

// export function myFunc(name) {
//   console.log(name);
// }
// export const myObj = {
//   name: "Tamim Mridha",
//   age: 25,
//   cgpa: 3.99,
//   lang: ["Bangla", "English", "Arabic"],
// };

// function Students(name, age, cgpa, lang) {
//   (this.name = name), (this.age = age), (this.cgpa = cgpa), (this.lang = lang);
//   this.retrunValue = function () {
//     console.log(`Name is = ${this.name}`);
//     console.log(`Age is = ${this.age}`);
//     console.log(`CGPA is = ${this.cgpa}`);
//     console.log(`Language is = ${this.lang}`);
//   };
// }
// export const studentOne = new Students("Tamim Mridha", 25, 3.96, [
//   "English",
//   "Bangla",
// ]);
// export const studentTwo = new Students(
//   "Ibrahim Zadran",
//   31,
//   3.66,
//   "Arabic",
//   "English",
//   "Hindi",
//   "Urdu",
//   "farsi"
// );

// import st from "./data.json" assert { type: "json" };
// console.log(`Name : ${st.studentInformation[0].name}`);
// console.log(`Age : ${st.studentInformation[1].age}`);
// console.log(`Year : ${st.studentInformation[2].year}`);
// console.log(`CGPA : ${st.studentInformation[3].cgpa}`);
// window.onload = function () {
//   var seconds = 00;
//   var tens = 00;
//   var appendTens = document.getElementById("tens");
//   var appendSeconds = document.getElementById("seconds");
//   var buttonStart = document.getElementById("button-start");
//   var buttonStop = document.getElementById("button-stop");
//   var buttonReset = document.getElementById("button-reset");
//   var Interval;

//   buttonStart.onclick = function () {
//     clearInterval(Interval);
//     Interval = setInterval(startTimer, 10);
//   };

//   buttonStop.onclick = function () {
//     clearInterval(Interval);
//   };

//   buttonReset.onclick = function () {
//     clearInterval(Interval);
//     tens = "00";
//     seconds = "00";
//     appendTens.innerHTML = tens;
//     appendSeconds.innerHTML = seconds;
//   };

//   function startTimer() {
//     tens++;

//     if (tens <= 9) {
//       appendTens.innerHTML = "0" + tens;
//     }

//     if (tens > 9) {
//       appendTens.innerHTML = tens;
//     }

//     if (tens > 99) {
//       console.log("seconds");
//       seconds++;
//       appendSeconds.innerHTML = "0" + seconds;
//       tens = 0;
//       appendTens.innerHTML = "0" + 0;
//     }

//     if (seconds > 9) {
//       appendSeconds.innerHTML = seconds;
//     }
//   }
// };

// function Quiz(questions) {
//   this.score = 0;
//   this.questions = questions;
//   this.currentQuestionIndex = 0;
// }

// Quiz.prototype.guess = function (answer) {
//   if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
//     this.score++;
//   }
//   this.currentQuestionIndex++;
// };

// Quiz.prototype.getCurrentQuestion = function () {
//   return this.questions[this.currentQuestionIndex];
// };

// Quiz.prototype.hasEnded = function () {
//   return this.currentQuestionIndex >= this.questions.length;
// };
// function Question(text, choices, answer) {
//   this.text = text;
//   this.choices = choices;
//   this.answer = answer;
// }

// Question.prototype.isCorrectAnswer = function (choice) {
//   return this.answer === choice;
// };
// var QuizUI = {
//   displayNext: function () {
//     if (quiz.hasEnded()) {
//       this.displayScore();
//     } else {
//       this.displayQuestion();
//       this.displayChoices();
//       this.displayProgress();
//     }
//   },
//   displayQuestion: function () {
//     this.populateIdWithHTML("question", quiz.getCurrentQuestion().text);
//   },
//   displayChoices: function () {
//     var choices = quiz.getCurrentQuestion().choices;

//     for (var i = 0; i < choices.length; i++) {
//       this.populateIdWithHTML("choice" + i, choices[i]);
//       this.guessHandler("guess" + i, choices[i]);
//     }
//   },
//   displayScore: function () {
//     var gameOverHTML = "<h1>Game Over</h1>";
//     gameOverHTML += "<h2> Your score is: " + quiz.score + "</h2>";
//     this.populateIdWithHTML("quiz", gameOverHTML);
//   },

//   populateIdWithHTML: function (id, text) {
//     var element = document.getElementById(id);
//     element.innerHTML = text;
//   },
//   guessHandler: function (id, guess) {
//     var button = document.getElementById(id);
//     button.onclick = function () {
//       quiz.guess(guess);
//       QuizUI.displayNext();
//     };
//   },

//   displayProgress: function () {
//     var currentQuestionNumber = quiz.currentQuestionIndex + 1;
//     this.populateIdWithHTML(
//       "progress",
//       "Question " + currentQuestionNumber + " of " + quiz.questions.length
//     );
//   },
// };
// //Create Questions
// var questions = [
//   new Question(
//     "Who was the first President of the United States?",
//     ["George Washington", "Thomas Jefferson", "Thomas Edison", "I don't know"],
//     "George Washington"
//   ),
//   new Question(
//     "What is the answer to the Ultimate Question of Life, the Universe, and Everything?",
//     ["Pi", "42", "Wah?", "I don't know"],
//     "42"
//   ),
//   new Question(
//     "Do you love to code?",
//     ["No", "Yes", "Hell Yeah", "No"],
//     "Hell Yeah"
//   ),
//   new Question(
//     "What's the best programming language?",
//     ["Javascript", "C#", "Php", "Python"],
//     "Javascript"
//   ),
//   new Question(
//     "Is Jason Chan Awesome?",
//     ["Yes", "No", "Maybe", "He's okay"],
//     "Yes"
//   ),
// ];

//Create Quiz
// var quiz = new Quiz(questions);

//Display Quiz
// QuizUI.displayNext();

// function getRandomNumber(number) {
//   return Math.floor(Math.random() * number);
// }
// console.log(getRandomNumber(6));

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max + min - 1) + min);
// }
// console.log(getRandomNumber(1, 6));
// function getRandomNumber() {
//   return Math.floor(Math.random() * 6) + 1;
// }
// console.log(getRandomNumber());

// const studentsInfo = [
//   "Tanvir",
//   "Shamim",
//   "Karim",
//   "Ibrahim",
//   "Hamim",
//   "Sanvir",
//   "Zaman",
//   "Abir",
// ];

// console.log(studentsInfo.sort());

// const rollNumbers = [9, 6, 5, 4, 3, 8, 7, 2, 1];
// console.log(
//   rollNumbers.sort(function (a, b) {
//     return b - a;
//   })
// );

// function isLeapYea(year) {
//   if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//     console.log(`${year} is a Leap Year`);
//   } else {
//     console.log(`${year} is Not a Leap Year`);
//   }
// }
// isLeapYea(2025);
// isLeapYea(2020);
// isLeapYea(2023);
// isLeapYea(2024);
// isLeapYea(2028);
// isLeapYea(2022);
// isLeapYea(2016);
// isLeapYea(2018);
// function isLeapYear(year) {
//   if (year % 4 === 0) {
//     console.log(`${year} is a Leap Year`);
//   } else {
//     console.log(`${year} is not a Leap Year......`);
//   }
// }

// isLeapYear(2025);
// isLeapYear(2028);
// isLeapYear(2032);
// isLeapYear(2034);
// isLeapYear(2027);
// isLeapYear(2024);

// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// const sentence = "This is Robiul Islam Munna From Bangladesh";

// const sentenceLetters = Array.from(sentence);
// let count = 0;
// sentenceLetters.forEach((value) => {
//   if (vowels.includes(value)) {
//     count++;
//   }
//   return count;
// });
// console.log(count);

// const numbers = [1, 2, 3, 1, 5, 1, 2, 3];
// const duplicate = numbers.filter((value, index, array) => {
//   return array.indexOf(value) !== index;
// });
// console.log(duplicate);

// const num = [1, 3, 2, 4, 5, 6, 1, 2, 3];

// console.log(new Set([...num]));

// const numbers = [1, 2, 3, 4, 5, 6, 3, 5, 2, 1];
// const duplicate = numbers.filter((value, index, array) => {
//   return array.indexOf(value) !== index;
// });
// console.log(duplicate);

// const sentene =
//   "Learn with sumit is all about teaching web development skills and technique in an efficient and practical manner. If you are just getting started in web development, Learn whit sumit hal all the tools you need to learn the newest and most popular technologies to convert you from a no stack to full stack developer. Learn with sumit also deep dives into advanced topics using the latest best practices for you seasoned web developers.";

// const matches = sentene.match(/learn/gi);
// const occureances = matches ? matches.length : "!Not Matched";
// console.log(occureances);

// const indexs = sentene.search(/sumdit/gi);
// const firstIndex = indexs > 0 ? indexs : "Not Found";
// console.log(firstIndex);

// function linearSearch(arr, val) {
//   let len = arr.length;
//   for (let i = 0; i < len; i++) {
//     if (arr[i] === val) {
//       return arr[i];
//     }
//   }
//   return "Not Matched";
// }
// console.log(linearSearch(["a", "b", "c", "d"], "c"));

// function fullSentence(sentence) {
//   let largestString = [];
//   for (let x of sentence) {
//     if (x.length > largestString.length) {
//       largestString = x;
//     }
//   }
//   return [largestString, sentence.indexOf(largestString)];
// }
// console.log(
//   fullSentence([
//     "This is Tamim",
//     "This is Karim",
//     "This is Hamim",
//     "This is Ibrahim",
//     "This is Tanvir Islam",
//     " This is Robiul Islam Munna",
//     "This is Karim Zannat",
//   ])
// );

// function fizzbuzz(number) {
//   for (let i = 1; i < number; i++) {
//     if (i % 15 === 0) {
//       console.log(`${i} is = FizzBuzz............`);
//     } else if (i % 3 === 0) {
//       console.log(`${i} is = Fizz-----`);
//     } else if (i % 5 === 0) {
//       console.log(`${i} is = Buzz!!!!!!!!!!!`);
//     } else {
//       console.log(`${i}`);
//     }
//   }
// }
// fizzbuzz(100);

// const mixedArr = ["Welcome", false, NaN, null, undefined, 0, "", "Good Bye"];

// const truArray = mixedArr.filter((value) => {
//   if (value) {
//     return value;
//   }
// });
// console.log(mixedArr);
// console.log(truArray);

// const truArray = mixedArr.filter(Boolean);
// console.log(truArray);

// const getData = () => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", {
//     body: JSON.stringify({
//       title: "Data is Sending",
//       body: "Data Body is Sending",
//     }),
//   });
//   xhr.setRequestHeader("Content-type", "application/json");
//   xhr.onload = () => {
//     let data = xhr.response;
//     console.log(JSON.parse(data));
//   };
//   xhr.send();
// };
// getData();

// const makeRequest = (method, url, data) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open(method, url);
//   xhr.setRequestHeader("Content-type", "application/json");
//   xhr.onload = () => {
//     let data = xhr.response;
//     console.log(JSON.parse(data));
//   };
//   xhr.send(JSON.stringify(data));
// };
// const getData = () => {
//   makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
//     title: "Data Title is Sending",
//     body: "Data Body is Sending",
//   });
// };
// getData();

// const updateData = () => {
//   makeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
//     title: "Data Title is updated",
//     body: "Data Body is Updated",
//     userId: 1011,
//     name: "Tamim Iqbal",
//   });
// };
// updateData();

// const updateSingleData = () => {
//   makeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1", {
//     title: "Single Data is Updated",
//     body: "Single Data Body is Updated",
//     userId: 1011,
//     id: 10000,
//   });
// };
// updateSingleData();

// const deleteData = () => {
//   makeRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
// };
// deleteData();

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res) => res.json())
// .then((res) => console.log(res));

// axios("https://jsonplaceholder.typicode.com/posts").then((res) =>
//   console.log(res.data)
// );

// $.ajax("https://jsonplaceholder.typicode.com/posts").then((res) =>
//   console.log(res)
// );

// const number = parseFloat(prompt("Enter any Number"));
// const result =
//   number > 100 || number < 0
//     ? "Invalid Number"
//     : number >= 80 && number <= 100
//     ? "A+"
//     : number >= 70 && number <= 79
//     ? "A"
//     : number >= 60 && number <= 69
//     ? "A-"
//     : number >= 50 && number <= 59
//     ? "B"
//     : number >= 40 && number <= 49
//     ? "C"
//     : number >= 33 && number <= 39
//     ? "D"
//     : "Fail";
// console.log(result);

// const taskOne = (callback) => {
//   console.log("Task One is Completed");
//   callback();
// };
// const taskTwo = (callback) => {
//   console.log("Task Two is Completed");
//   callback();
// };
// const taskThree = (callback) => {
//   setTimeout(() => {
//     console.log("Task Three is Completed..............");
//   }, 1000);
//   callback();
// };
// const taskFour = (callback) => {
//   console.log("Task Four is Completd");
//   callback();
// };
// const taskFive = () => {
//   console.log("Task Five is Completed");
// };
// taskOne();
// taskTwo();
// taskThree();
// taskFour();
// taskFive();

// taskOne(() => {
//   taskTwo(() => {
//     taskThree(() => {
//       taskFour(() => {
//         taskFive();
//       });
//     });
//   });
// });

// const taskOne = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Task One is Completed");
//   });
// };
// const taskTwo = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Task Two is Completed");
//   });
// };
// const taskThree = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Task Three is Completed.........");
//     }, 1500);
//   });
// };
// const taskFour = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Task Four is Completed");
//   });
// };
// const taskFive = () => {
//   return new Promise((resolve, reject) => {
//     resolve("Task Five is Completed");
//   });
// };

// const allTaskIsCompleted = async () => {
//   const t1 = await taskOne();
//   console.log(t1);
//   const t2 = await taskTwo();
//   console.log(t2);
//   const t3 = await taskThree();
//   console.log(t3);
//   const t4 = await taskFour();
//   console.log(t4);
//   const t5 = await taskFive();
//   console.log(t5);
// };
// allTaskIsCompleted();

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "This is Posted Data Title",
//     body: "This is Posted Data Body",
//     userId: 1011,
//   }),
//   headers: {
//     "Content-type": "application/json;charset=UTF-8",
//   },
// })
//   .then((res) => {
//     if (!res.ok) {
//       let message = `Error : ${res.status}`;
//       throw new Error(message);
//     }
//     return res.json();
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PUT",
//   body: JSON.stringify({
//     title: "This is Updated Data",
//     body: "This is Updated Data Body",
//     userId: 1011,
//   }),
//   headers: {
//     "Content-type": "application/json;charset=UTF-8",
//   },
// })
//   .then((res) => {
//     if (!res.ok) {
//       let message = `Error: ${res.status}`;
//       throw new Error(message);
//     }
//     return res.json();
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PATCH",
//   body: JSON.stringify({
//     title: "Updated Single Data",
//   }),
//   headers: {
//     "Content-type": "application/json;charset=UTF-8",
//   },
// })
//   .then((res) => {
//     if (!res.ok) {
//       let message = `Error  : ${res.status}`;
//       throw new Error(message);
//     }
//     return res.json();
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "DELETE",
// })
//   .then((res) => res.json())
//   .then((res) => console.log(res));

// const makeRequest = async (url, config) => {
//   const res = await fetch(url, config);
//   if (!res.ok) {
//     let message = `Error : ${res.status}`;
//     throw new Error(message);
//   }
//   return res.json();
// };

// const getData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts").then((res) =>
//     console.log(res)
//   );
// };

// getData();

// const sendData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//       title: "This is Data title Posted",
//       body: "This is Data Body Posted",
//       userId: 1011,
//     }),
//     headers: {
//       "Content-type": "application/json;charset=UTF-8",
//     },
//   })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// sendData();

// const updateData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "PUT",
//     body: JSON.stringify({
//       title: "This is Updated Data",
//       body: "this is Updated Body",
//       userId: 1011,
//     }),
//     headers: {
//       "Content-type": "application/json;charser=UTF-8",
//     },
//   })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// updateData();

// const updateSingleData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "PATCH",
//     body: JSON.stringify({
//       title: "This is Updated Single  Data Title",
//     }),
//     headers: {
//       "Content-type": "application/json;charset=UTF-8",
//     },
//   })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// updateSingleData();

// const deleteData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "DELETE",
//   }).then((res) => console.log(res));
// };
// deleteData();

// axios("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   data: JSON.stringify({
//     title: "This Data Title is Posted",
//     body: "This Data Body is Posted",
//     userId: 1011,
//   }),
// })
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// axios("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PUT",
//   data: JSON.stringify({
//     title: "This Data Title is Updated",
//     body: "This Data Body is Updated",
//     userId: 1011,
//   }),
// })
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// axios("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PATCH",
//   data: JSON.stringify({
//     title: "This is single Data Updated",
//     id: 1,
//     userId: 1,
//   }),
// })
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// axios("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "DELETE",
// })
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// const makeRequest = async (config) => {
//   try {
//     const res = await axios(config);
//     return res;
//   } catch (error) {
//     throw new error();
//   }
// };

// const getData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts",
//   }).then((res) => console.log(res.data));
// };
// getData();

// const sendData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts",
//     method: "POST",
//     data: JSON.stringify({
//       title: "this is Posted Data",
//     }),
//   }).then((res) => console.log(res.data));
// };
// sendData();

// const updateData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts/1",
//     method: "PUT",
//     data: JSON.stringify({
//       title: "This is Updated Data Title",
//       body: "This is Updated Data Body",
//       userId: 1011,
//     }),
//   })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// };
// updateData();

// const updateSingleData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts/1",
//     method: "PATCH",
//     data: JSON.stringify({
//       title: "This is Updated Single Data",
//     }),
//   }).then((res) => console.log(res.data));
// };
// updateSingleData();

// const deleteData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts/1",
//     method: "DELETE",
//   }).then((res) => console.log(res.data));
// };
// deleteData();

// $.ajax("https://jsonplaceholder.typicode.com/posts").then((res) =>
//   console.log(res)
// );
// $.ajax("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   data: JSON.stringify({
//     title: "This is Ajax Data Title",
//     body: "This is Ajax Data Body",
//   }),
// }).then((res) => console.log(res));

// $.ajax("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PUT",
//   data: JSON.stringify({
//     title: "This is Ajax Data Updated",
//   }),
// }).then((res) => console.log(res));

// $.ajax("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "PATCH",
//   data: JSON.stringify({
//     title: "Single Data Is Updated",
//     body: "Single Data is Updated",
//   }),
// })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// $.ajax("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "DELETE",
// }).then((res) => console.log(res));

const makeRequest = async (config) => {
  const res = await $.ajax(config);
  return res;
};
// const getData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts",
//   }).then((res) => console.log(res));
// };
// getData();

// const sendData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts",
//     method: "POST",
//     data: JSON.stringify({
//       title: "Data is Sending",
//       body: "Data Body is Sending",
//     }),
//   }).then((res) => console.log(res));
// };
// sendData();

// const updateData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts/1",
//     method: "PUT",
//     data: JSON.stringify({
//       title: "Data is Updated",
//       body: "Data Body is Updated",
//       userId: 1011,
//     }),
//   })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// updateData();

// const updateSingleData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts/1",
//     method: "PATCH",
//     data: JSON.stringify({
//       title: "This is Single Data Title Updated",
//     }),
//   })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };
// updateSingleData();
// const deleteData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts/1",
//     method: "DELETE",
//   }).then((res) => console.log(res));
// };
// deleteData();

// const number1 = [1, 2, 3, 4];
// const number2 = [5, 6, 7, 8];
// const num = [...number1, 5, 6, 7, 8, 9];
// console.log(num);

// function restParameter(x, ...y) {
//   return `${x},${y}`;
// }
// console.log(restParameter(1, 2, 3, 4, 5));

// function studentInfo(name = "Robiul Islam", age = 25, cgpa = 3.99) {
//   console.log(name, age, cgpa);
// }
// studentInfo();
// studentInfo("Tanvir islam", 30, 3.45);
// studentInfo("Ibrahim Miah", 22, 3.99);
// studentInfo("Karim Zannat", 36, 3.55);

// const myObj = {
//   name: "Tanivr Islam",
//   age: 25,
//   CGPA: 3.99,
// };
// const { name: myName, age: myAge, CGPA: myCgpa } = myObj;
// console.log(myName);
// console.log(myAge);
// console.log(myCgpa);

const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("#todoInput");
const todoLists = document.querySelector("#lists");
const messageElement = document.querySelector("#message");

// showMessage =====================================

const showMessage = (text, status) => {
  messageElement.innerHTML = text;
  messageElement.classList.add(`bg-${status}`);
  setTimeout(() => {
    messageElement.innerHTML = "";
    messageElement.classList.remove(`bg-${status}`);
  }, 1000);
};

// createTodo =======================================

const createTodo = (todoId, todoValue) => {
  const todoElement = document.createElement("li");
  todoElement.id = todoId;
  todoElement.classList.add("li-style");
  if (!todoValue) {
    todoElement.innerHTML = alert("Your Input is Empty");
  } else {
    todoElement.innerHTML = `
    <span>${todoValue}</span>
    <span><button class="btn" id="deleteTodo"><i class="fa-solid fa-trash"></i></button></span>
    `;
  }

  const deleteButton = todoElement.querySelector("#deleteTodo");
  deleteButton.addEventListener("click", deleteTodo);

  todoLists.appendChild(todoElement);
};

// deleteTodoButton =================================

const deleteTodo = (e) => {
  const selectedTodo = e.target.parentElement.parentElement.parentElement;
  todoLists.removeChild(selectedTodo);

  showMessage("Todo is Deleted", "danger");

  let todos = getTodoFromLocalStorage();
  todos = todos.filter((todo) => todo.todoId !== selectedTodo.id);
  localStorage.setItem("mytodos", JSON.stringify(todos));
};

// getTodosFromLocalStorage =========================

const getTodoFromLocalStorage = () => {
  return localStorage.getItem("mytodos")
    ? JSON.parse(localStorage.getItem("mytodos"))
    : [];
};

// addTodo =========================================

const addTodo = (e) => {
  e.preventDefault();

  const todoValue = todoInput.value;
  const todoId = Date.now().toString();

  createTodo(todoId, todoValue);

  showMessage("Todo is Added", "success");

  const todos = getTodoFromLocalStorage();
  todos.push({ todoId, todoValue });

  localStorage.setItem("mytodos", JSON.stringify(todos));

  todoInput.value = "";
};

const loadedTodo = () => {
  const todos = getTodoFromLocalStorage();

  todos.map((todo) => createTodo(todo.todoId, todo.todoValue));
};

todoForm.addEventListener("submit", addTodo);
window.addEventListener("DOMContentLoaded", loadedTodo);
