document.addEventListener("DOMContentLoaded", () => {
  let registrationBtn = document.querySelector("#register_btn");
  let registrationPopup = document.querySelector("#register_popup");
  let registrationCloseBtn = document.querySelector("#register_close_btn");
  let authBtn = document.querySelector("#auth_btn");
  let authPopup = document.querySelector("#auth_popup");
  let authCloseBtn = document.querySelector("#auth_close_btn");
  let registrationBtnDown = document.querySelector("#register_btn_down");
  let authBtnDown = document.querySelector("#auth_btn_down");

  // Открытие окна регистрации
  registrationBtn.addEventListener("click", () => {
    registrationPopup.classList.remove("hide");
    document.body.style.overflow = "hidden";
  });

  registrationBtnDown.addEventListener("click", () => {
    registrationPopup.classList.remove("hide");
    document.body.style.overflow = "hidden";
  });

  // Открытие окна авторизации
  authBtn.addEventListener("click", () => {
    authPopup.classList.remove("hide");
    document.body.style.overflow = "hidden";
  });

  authBtnDown.addEventListener("click", () => {
    authPopup.classList.remove("hide");
    document.body.style.overflow = "hidden";
  });

  // Закрытие окна регистрации на десктопе
  registrationCloseBtn.addEventListener("click", () => {
    registrationPopup.classList.add("hide");
    document.body.style.overflow = "visible";
  });

  // Закрытие окна авторизации на десктопе
  authCloseBtn.addEventListener("click", () => {
    authPopup.classList.add("hide");
    document.body.style.overflow = "visible";
  });

  // Закрытие окна регистрации по свайпу вниз
  let startRegisterPopupPositionY;
  let finishRegisterPopupPositionY;
  registrationPopup.addEventListener("touchstart", (e) => {
    startRegisterPopupPositionY = e.touches[0].clientY;
  });
  registrationPopup.addEventListener("touchend", (e) => {
    finishRegisterPopupPositionY = e.changedTouches[0].clientY;
    let result = startRegisterPopupPositionY - finishRegisterPopupPositionY;
    if (result < -100) {
      registrationPopup.classList.add("hide");
      document.body.style.overflow = "visible";
    }
  });

  // Закрытие окна авторизации по свайпу вниз
  let startAuthPopupPositionY;
  let finishAuthPopupPositionY;
  authPopup.addEventListener("touchstart", (e) => {
    startAuthPopupPositionY = e.touches[0].clientY;
  });
  authPopup.addEventListener("touchend", (e) => {
    finishAuthPopupPositionY = e.changedTouches[0].clientY;
    let result = startAuthPopupPositionY - finishAuthPopupPositionY;
    if (result < -100) {
      authPopup.classList.add("hide");
      document.body.style.overflow = "visible";
    }
  });

  // Форма регистрации
  let registerNicknameForm = document.querySelector("#register_nickname");
  let registerEmailForm = document.querySelector("#register_email");
  let registerPasswordForm = document.querySelector("#register_password");
  let registerPasswordRepeatForm = document.querySelector(
    "#register_repeat-password"
  );
  let submitRegistrationBtn = document.querySelector("#submit_register_btn");

  submitRegistrationBtn.addEventListener("click", () => {
    validateRegisterModal();
  });

  // Форма авторизации
  let authNicknameOrEmailForm = document.querySelector("#auth_nickname_email");
  let authPasswordForm = document.querySelector("#auth_password");
  let submitAuthBtn = document.querySelector("#submit_auth_btn");

  submitAuthBtn.addEventListener("click", () => {
    alert(`${authNicknameOrEmailForm.value} ${authPasswordForm.value}`);
  });

  // Валидация окна регистрации
  const validateRegisterModal = () => {
    let allInputs = document.querySelectorAll("input");
    let allInputBoxes = document.querySelectorAll(".input-box");
    let nicknameInputBox = document.querySelector("#nickname-input-box");
    let emailInputBox = document.querySelector("#email-input-box");
    let passwordInputBox = document.querySelector("#password-input-box");
    let repeatPasswordInputBox = document.querySelector(
      "#repeat-password-input-box"
    );
    let validationError = false;

    const removeAllParagraphs = () => {
      let allParagraphs = registrationPopup.querySelectorAll("p");
      allParagraphs.forEach((p) => {
        p.remove();
      });
    };

    const validatePassword = () => {
      let errorText = document.createElement("p");
      errorText.innerHTML = "Пароли должны совпадать";

      if (registerPasswordForm.value !== registerPasswordRepeatForm.value) {
        passwordInputBox.classList.add("error-input");
        repeatPasswordInputBox.classList.add("error-input");
        repeatPasswordInputBox.append(errorText);
        validationError = true;
      }
    };
    const validateAllInputValue = () => {
      let errorText = document.createElement("p");
      errorText.innerHTML = "Все поля должны быть заполнены";
      if (
        !registerNicknameForm.value ||
        !registerEmailForm.value ||
        !registerPasswordForm.value ||
        !registerPasswordRepeatForm.value
      ) {
        nicknameInputBox.classList.add("error-input");
        emailInputBox.classList.add("error-input");
        passwordInputBox.classList.add("error-input");
        repeatPasswordInputBox.classList.add("error-input");
        repeatPasswordInputBox.append(errorText);
        validationError = true;
      }
    };
    const validateEmail = () => {
      let value = registerEmailForm.value;
      let indexOfAt = value.indexOf("@");
      let indexOfDot = value.indexOf(".");
      let strBeforeAt = value.slice(0, indexOfAt);
      let strAfterAt = value.slice(indexOfAt + 1, indexOfDot);
      let strAfterDot = value.slice(indexOfDot + 1);
      let errorText = document.createElement("p");
      errorText.innerHTML = "Введите корректный Email";
      if (
        indexOfAt === -1 ||
        indexOfDot === -1 ||
        strBeforeAt.length < 1 ||
        strAfterAt.length < 1 ||
        strAfterDot < 1
      ) {
        validationError = true;
        emailInputBox.classList.add("error-input");
        emailInputBox.append(errorText);
      }
    };
    removeAllParagraphs();
    validatePassword();
    validateAllInputValue();
    validateEmail();
    if (!validationError) {
      alert(
        `${registerNicknameForm.value} ${registerEmailForm.value} ${registerPasswordForm.value} ${registerPasswordRepeatForm.value}`
      );
      // registerNicknameForm.value = "";
      // registerEmailForm.value = "";
      // registerPasswordForm.value = "";
      // registerPasswordRepeatForm.value = "";
      allInputs.forEach((input) => {
        input.value = "";
      });
      allInputBoxes.forEach((box) => {
        box.classList.remove("error-inputj");
      });
    }
  };
  // Синий экран со статистикой
  let usersRegistered = 481;
  let messagesSent = "140K";
  let messagesToday = 389;

  document.querySelector("#usersRegistered").innerHTML = usersRegistered;
  document.querySelector("#messagesSent").innerHTML = messagesSent;
  document.querySelector("#messagesToday").innerHTML = messagesToday;

  // Запрос к JSON
  // const getMessages = () => {
  //   fetch("./data.json")
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  // };
  // getMessages();

  // Формирование ленты
  const createFeed = async () => {
    const getMessages = async () => {
      const messagesResponse = await fetch("./data.json");
      const messagesData = await messagesResponse.json();
      return messagesData.lastMessages;
    };
    const getPhotos = async () => {
      const photosResponse = await fetch("./pictures.json");
      const photosData = await photosResponse.json();
      return photosData.pictures;
    };

    const messages = await getMessages();
    const photos = await getPhotos();
    const messagesAndPhoto = [[...messages], [...photos]];

    const makeMessage = () => {
      const messagesList = document.querySelector("#messagesList");
      const messageItem = document.createElement("div");
      messagesAndPhoto[0].forEach((item, index) => {
        messageItem.innerHTML += `
       <div class="last-messages__box">
                     <img
                       class="last-messages__box-avatar"
                       src=${messagesAndPhoto[1][index]["url"]}
                       alt="Avatar"
                     />
                     <div class="last-messages__box-right">
                       <div class="last-messages__box-title">
                         <div class="last-messages__box-title_left">
                           <h3>${item.name}</h3>
                           <p class="last-messages__box-nickname">${item.nickname}</p>
                         </div>
                         <p class="last-messages__box-time">${item.date}</p>
                       </div>
                       <div class="last-messages__box-message">
                         <p>
                           ${item.content}
                         </p>
                       </div>
                       <div class="last-messages__box-statistics">
                         <div class="last-messages__box-statistic">
                           <img src="/resources/reply.png" alt="Reply" />
                           <p class="last-messages__box-statistic-title">${item.replies}</p>
                         </div>
                         <div class="last-messages__box-statistic">
                           <img src="/resources/like.png" alt="Like" />
                           <p class="last-messages__box-statistic-title">${item.likes}</p>
                         </div>
                         <div class="last-messages__box-statistic">
                           <img src="/resources/forward.png" alt="Forward" />
                           <p class="last-messages__box-statistic-title">${item.reposts}</p>
                         </div>
                       </div>
                     </div>
         </div>
        `;
      });
      messagesList.append(messageItem);
    };
    makeMessage();
  };

  createFeed();
});
