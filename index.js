document.addEventListener("DOMContentLoaded", function () {
  let registrationBtn = document.querySelector("#register_btn");
  let registrationPopup = document.querySelector("#register_popup");
  let registrationCloseBtn = document.querySelector("#register_close_btn");
  let authBtn = document.querySelector("#auth_btn");
  let authPopup = document.querySelector("#auth_popup");
  let authCloseBtn = document.querySelector("#auth_close_btn");

  // Открытие окна регистрации
  registrationBtn.addEventListener("click", (e) => {
    registrationPopup.classList.remove("hide");
    document.body.style.overflow = "hidden";
  });

  // Открытие окна авторизации
  authBtn.addEventListener("click", (e) => {
    authPopup.classList.remove("hide");
    document.body.style.overflow = "hidden";
  });

  // Закрытие окна регистрации на десктопе
  registrationCloseBtn.addEventListener("click", (e) => {
    registrationPopup.classList.add("hide");
    document.body.style.overflow = "visible";
  });

  // Закрытие окна авторизации на десктопе
  authCloseBtn.addEventListener("click", (e) => {
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
    alert(
      `${registerNicknameForm.value} ${registerEmailForm.value} ${registerPasswordForm.value} ${registerPasswordRepeatForm.value}`
    );
  });

  // Форма авторизации
  let authNicknameOrEmailForm = document.querySelector("#auth_nickname_email");
  let authPasswordForm = document.querySelector("#auth_password");
  let submitAuthBtn = document.querySelector("#submit_auth_btn");

  submitAuthBtn.addEventListener("click", () => {
    alert(`${authNicknameOrEmailForm.value} ${authPasswordForm.value}`);
  });

  // Синий экран со статистикой
  let usersRegistered = 481;
  let messagesSent = "140K";
  let messagesToday = 389;

  document.querySelector("#usersRegistered").innerHTML = usersRegistered;
  document.querySelector("#messagesSent").innerHTML = messagesSent;
  document.querySelector("#messagesToday").innerHTML = messagesToday;
});
