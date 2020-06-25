var modalOpen = document.querySelector(".address-container__button");
var modalWindow = document.querySelector(".feedback-modal"); 
var modalClose = modalWindow.querySelector(".feedback_form__close-button");
var modalName = modalWindow.querySelector(".feedback_form__name-input");
var modalForm = modalWindow.querySelector(".feedback_form");
var modalEmail = modalWindow.querySelector(".feedback_form__email-input");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

// Opening feedback submitting modal. Setting opening animation class
// Setting focus to first unfilled input
modalOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWindow.classList.add("feedback-modal--show");

    if (storage) {
        modalName.value = storage;
        modalEmail.focus();
    } else {
        modalName.focus();
    }

    modalName.focus();
});


// Closing feedback submitting modal. Removing animation classes
modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWindow.classList.remove("feedback-modal--show");
    modalForm.classList.remove("feedback-modal--error");
});

// Canseling submit and setting animation on invalid input filling.
// Saving inputs value to local storage
modalForm.addEventListener("submit", function (evt) {
    if (!modalName.value || !modalEmail.value) {
        evt.preventDefault();
        modalForm.classList.remove("feedback-modal--error");
        modalWindow.offsetWidth = modalWindow.offsetWidth;
        modalForm.classList.add("feedback-modal--error");
        // Removing before adding class allows animation for every submit attempt 
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", modalName.value);
        }
    }
});

// Allowing closing modal with esc button on keyboard. 
// Removeing animations after closing
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (modalWindow.classList.contains("feedback-modal--show")) {
            evt.preventDefault();
            modalWindow.classList.remove("feedback-modal--show");
            modalForm.classList.remove("feedback-modal--error");
        }
    }
  });


//   MAP 