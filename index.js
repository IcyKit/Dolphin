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
      allInputs.forEach((input) => {
        input.value = "";
      });
      allInputBoxes.forEach((box) => {
        box.classList.remove("error-input");
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
      const getTimeOfMessage = (time) => {
        const timeElapsed = new Date() - new Date(time);
        const minutes = Math.floor(timeElapsed / 1000 / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const minutesArr = ["минуту", "минуты", "минут"];
        const hoursArr = ["час", "часа", "часов"];
        const daysArr = ["день", "дня", "дней"];
        const makeSentence = (number, words) => {
          number = Math.abs(number) % 100;
          let n1 = number % 10;
          if (number > 10 && number < 20) {
            return `${number} ${words[2]} назад`;
          }
          if (n1 > 1 && n1 < 5) {
            return `${number} ${words[1]} назад`;
          }
          if (n1 == 1) {
            return `${number} ${words[0]} назад`;
          }
          return `${number} ${words[2]} назад`;
        };
        if (minutes > 60) {
          if (hours > 24) {
            if (days > 365) {
              return "Больше года назад";
            }
            return makeSentence(days, daysArr);
          }
          return makeSentence(hours, hoursArr);
        }
        return makeSentence(minutes, minutesArr);
      };
      messagesList.innerHTML = "";
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
                           <p class="last-messages__box-nickname">${
                             item.nickname
                           }</p>
                         </div>
                         <p class="last-messages__box-time">${getTimeOfMessage(
                           item.date
                         )}</p>
                       </div>
                       <div class="last-messages__box-message">
                         <p>
                           ${item.content}
                         </p>
                       </div>
                       <div class="last-messages__box-statistics">
                         <div class="last-messages__box-statistic">
                           <img src="/resources/reply.png" alt="Reply" />
                           <p class="last-messages__box-statistic-title">${
                             item.replies
                           }</p>
                         </div>
                         <div class="last-messages__box-statistic">
                           <img src="/resources/like.png" alt="Like" />
                           <p class="last-messages__box-statistic-title">${
                             item.likes
                           }</p>
                         </div>
                         <div class="last-messages__box-statistic">
                           <img src="/resources/forward.png" alt="Forward" />
                           <p class="last-messages__box-statistic-title">${
                             item.reposts
                           }</p>
                         </div>
                       </div>
                     </div>
         </div>
         <div class="divider"></div>
        `;
      });
      messagesList.append(messageItem);
    };
    makeMessage();
    setInterval(makeMessage, 60000);
  };
  createFeed();

  // Создание блока актуальные темы
  const createActual = async () => {
    const getActual = async () => {
      const messagesResponse = await fetch("./data.json");
      const messagesData = await messagesResponse.json();
      return messagesData.topics;
    };
    const topics = await getActual();

    const makeMessageWord = (number, words) => {
      number = Math.abs(number) % 100;
      let n1 = number % 10;
      if (number > 10 && number < 20) {
        return `${words[2]}`;
      }
      if (n1 > 1 && n1 < 5) {
        return `${words[1]}`;
      }
      if (n1 == 1) {
        return `${words[0]}`;
      }
      return `${words[2]} `;
    };
    const makeDividedNumbers = (number) => {
      number = number.toString();
      switch (number.length) {
        case 4:
          return `${number.slice(0, 1)} ${number.slice(1)}`;
        case 5:
          return `${number.slice(0, 2)} ${number.slice(2)}`;
        case 6:
          return `${number.slice(0, 3)} ${number.slice(3)}`;
        case 7:
          return `${number.slice(0, 1)} ${number.slice(1, 4)} ${number.slice(
            4
          )}`;
      }
      return `${number}`;
    };
    const makeActual = () => {
      const topicsList = document.querySelector("#actual__themes");
      const topicItem = document.createElement("div");
      const messagesWords = ["сообщение", "сообщения", "сообщений"];
      topics.forEach((item) => {
        topicItem.innerHTML += `
        <div class="actual__theme">
                  <h4>${item.topic}</h4>
                  <div class="actual__theme-description">
                    <div class="actual__theme-destination">
                      <img src="/resources/mark.png" alt="mark" />
                      <h5>${item.location}</h5>
                    </div>
                    <p>${makeDividedNumbers(item.messages)} ${makeMessageWord(
          item.messages,
          messagesWords
        )}</p>
                  </div>
                </div>
        `;
      });
      topicsList.append(topicItem);
    };
    makeActual();
  };
  createActual();

  // Создание Интересные блогеры
  const createBlogs = async () => {
    const getBlogs = async () => {
      const messagesResponse = await fetch("./data.json");
      const messagesData = await messagesResponse.json();
      return messagesData.blogs;
    };
    const blogs = await getBlogs();
    const makeBlogs = () => {
      const blogsList = document.querySelector("#bloggers__content");
      const blogItem = document.createElement("div");
      blogs.forEach((item) => {
        blogItem.innerHTML += `
        <div class="blogger">
                  <div class="blogger__left">
                    <img src=${item.avatar} alt="avatar" />
                    <div class="blogger__title">
                      <h4>${item.name}</h4>
                      <p>${item.nickname}</p>
                    </div>
                  </div>
                  <div class="btn">Читать</div>
                </div>
        `;
      });
      blogsList.append(blogItem);
    };
    makeBlogs();
  };
  createBlogs();
});
