let accountButton = document.querySelector(".account-actions");
let modalWrapper = document.querySelector(".wrapper");
let modalCloseButtons = document.querySelectorAll(".close-button");
let signinSwitch = document.querySelector(".signin-switch");
let signupSwitch = document.querySelector(".signup-switch");
let signupModal = document.querySelector(".signup-modal");
let signinModal = document.querySelector(".signin-modal");
let formButtons = document.querySelectorAll(".form-buttons");
let accountActionsButton = document.querySelector(".account-actions-button");
let accountUser = document.querySelector(".account-user");
let recommendation = document.querySelector(".recommendation");
let posts = document.querySelectorAll(".post");

accountButton.addEventListener("click", () => {
  modalWrapper.style.display = "flex";
});
accountActionsButton.addEventListener("click", () => {
  modalWrapper.style.display = "flex";
});

modalCloseButtons.forEach((modalCloseButton) =>
  modalCloseButton.addEventListener("click", () => {
    modalWrapper.style.display = "none";
  })
);

signinSwitch.addEventListener("click", () => {
  signupModal.style.display = "none";
  signinModal.style.display = "block";
});

signupSwitch.addEventListener("click", () => {
  signupModal.style.display = "block";
  signinModal.style.display = "none";
});

formButtons.forEach((formButton) =>
  formButton.addEventListener("click", () => {
    modalWrapper.style.display = "none";
    accountButton.style.display = "none";
    accountActionsButton.style.display = "none";
    accountUser.style.display = "flex";
    recommendation.style.display = "flex";
  })
);

posts.forEach((post, index) => {
  let dottedIcon = post.querySelector(".dotted-icon");
  dottedIcon.addEventListener("click", () => {
    let detail = document.querySelector(`.detail${index + 1}`);
    if (detail.style.display === "block") detail.style.display = "none";
    else detail.style.display = "block";
  });
});
