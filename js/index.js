let template = `
<div class="card text-bg-light mb-3 align-self-end">
  <div class="card-header">
    Автор
  </div>
  <div class="card-body">
    <p class="card-text">
      Сообщение
    </p>
  </div>
</div>
`;


let usernameInput = document.querySelector(`#username`);
let messageInput = document.querySelector(`#message`);
let messagesNode = document.querySelector(`#messages`);
let sendButton = document.querySelector(`#send`);
let errorNode = document.querySelector(`#error`);

sendButton.addEventListener(`click`, function(){
  let username = usernameInput.value;
  let text = messageInput.value;

  if (username.length == 0 || text.length == 0) {
    errorNode.innerHTML = `Поля не могут быть пустыми!`;
  
  }
  else if ((!username.includes(`*`))){
    if (username == `Модератор`){
      text = text.replaceAll(`ё`, `е`);
    text = text.replaceAll(`\n`, `<br>`);
    text = text.replaceAll(`:)`, `😊`);
    text = text.replaceAll(`:(`, `☹`);
    text = text.replaceAll(`:|`, `😐`);
    text = text.replaceAll(`:/`, `🤬`);  


    let newMessage = `
      <div class="card text-bg-light mb-3 align-self-start">
        <div class="card-header">
          ${usernameInput.value}
        </div>
        <div class="card-body">
          <p class="card-text">
            ${text}
          </p>
        </div>
      </div>
    `;

  messagesNode.innerHTML += newMessage;
  errorNode.innerHTML = ``;
    } else {
    errorNode.innerHTML = `Имя пользователя должно содержать особые символы!`
    }


  }
  else {
    text = text.replaceAll(`ё`, `е`);
    text = text.replaceAll(`\n`, `<br>`);
    text = text.replaceAll(`:)`, `😊`);
    text = text.replaceAll(`:(`, `☹`);
    text = text.replaceAll(`:|`, `😐`);
    text = text.replaceAll(`:/`, `🤬`);


    let newMessage = `
      <div class="card text-bg-light mb-3 align-self-end">
        <div class="card-header">
          ${usernameInput.value}
        </div>
        <div class="card-body">
          <p class="card-text">
            ${text}
          </p>
        </div>
      </div>
    `;

  messagesNode.innerHTML += newMessage;
  errorNode.innerHTML = ``;
  }
  
  messageInput.value = ``;
});

let node = document.querySelector(`#node`)
if (node.classList.contains(`circle`) == true ){
  console.log(`Привет`)
}