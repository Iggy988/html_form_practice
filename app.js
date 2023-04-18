const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

const form = document.getElementById("form");
const username = document.getElementById("username");
const phonenum = document.getElementById("phonenum");
const homeaddress = document.getElementById("homeaddress");
const homenum = document.getElementById("homenum");
const postnum = document.getElementById("postnum");
const town = document.getElementById("town");
const mail = document.getElementById("mail");
const notes = document.getElementById("notes");
const errorMessage = document.getElementById("errorMessage");

function phonenumber(inputtxt) {
  var phoneno = /^\d{9}$/;
  if (inputtxt.value.match(phoneno)) {
    return true;
  } else {
    alert("Polje 'Telefon' treba imati minimalno 9 cifri");
    return false;
  }
}

form.addEventListener("submit", (e) => {
  const errors = [];

  if (username.value === "" || username === null) {
    alert("Popunite polje 'Ime i prezime'");
    errors.push("1");
  }

  if (!phonenumber(phonenum)) {
    errors.push("2");
  }

  if (homeaddress.value === "" || homeaddress === null) {
    alert("Popunite polje 'Adresa stanovanja'");
    errors.push("3");
  }

  if (homenum.value === "" || homenum === null) {
    alert("Popunite polje 'Kućni broj'");
    errors.push("4");
  }

  if (postnum.value === "" || postnum === null) {
    alert("Popunite polje 'Poštanski broj'");
    errors.push("5");
  }

  if (town.value === "" || town === null) {
    alert("Popunite polje 'Mjesto'");
    errors.push("6");
  }

  if (mail.value === "" || mail === null) {
    alert("Popunite polje 'Email adresa'");
    errors.push("7");
  }

  if (errors.length > 0) {
    e.preventDefault();
  } else {
    console.log(username.value);
    console.log(phonenum.value);
    console.log(homeaddress.value);
    console.log(homenum.value);
    console.log(postnum.value);
    console.log(town.value);
    console.log(mail.value);
    console.log(notes.value);
  }
});
