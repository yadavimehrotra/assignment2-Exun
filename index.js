const name = document.getElementById("name");
const email = document.getElementById("email");
const grade = document.getElementById("grade");

const birthday = document.getElementById("birthDay");
const birthyear = document.getElementById("BirthYear");
const birthmonth = document.getElementById("BirthMonth");
const form = document.getElementById("form");
const aboutyou = document.getElementById("about");
const achievements = document.getElementById("achievements");

// const errorElement = document.getElementById("error");

// form.addEventListener("submit", (e) => {
//   let messages = [];
//   if (name.value === "" || name.value === null) {
//     alert.push("Name is required");
//   }
//   if (alert.length > 0) {
//     e.preventDefault();
//     errorElement.innerText = alert.join(", ");
//   }
// });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (name.value === "" || name.value === null) {
    alert("Name is required");
  } else {
    console.log(name.value);
  }
  if (email.value === "" || email.value === null) {
    alert("Email is required");
  } else {
    console.log(email.value);
  }
  // grade
  var invalidg = grade.value == "null";
  if (invalidg) {
    alert("Grade is required");
  } else {
    console.log(grade.value);
  }

  // birthday

  var invalidbd = birthday.value == "null";
  if (invalidbd) {
    alert("Birthday is required");
  } else {
    console.log(birthday.value);
  }

  var invalidbm = birthmonth.value == "null";
  if (invalidbm) {
    alert("Birth Month is required");
  } else {
    console.log(birthmonth.value);
  }

  var invalidby = birthyear.value == "null";
  if (invalidby) {
    alert("Birth Year is required");
  } else {
    console.log(birthyear.value);
  }

  if (aboutyou.value === "" || aboutyou.value === null) {
    alert("Please tell us about yourself in the field given");
  } else {
    console.log(aboutyou.value);
  }

  if (achievements.value === "" || achievements.value === null) {
    alert(
      "Please tell us about your achievements in the field given. If you don't have any please write N.A"
    );
  } else {
    console.log(aboutyou.value);
  }

  if (
    (name.value === "" || name.value === null) &&
    (email.value === "" || email.value === null) &&
    (grade.value === "" || grade.value == "null") &&
    (birthday.value === "" || birthday.value == "null") &&
    (birthmonth.value === "" || birthmonth.value == "null") &&
    (birthyear.value === "" || birthyear.value == "null") &&
    (aboutyou.value === "" || aboutyou.value === null) &&
    (achievements.value === "" || achievements.value === null)
  ) {
    alert("Please fill the fields");
  } else {
    alert(
      `Hello, ${name.value} <${email.value}> from grade ${grade.value} born on ${birthday.value}/ ${birthmonth.value} /${birthyear.value}.`
    );
    e.currentTarget.submit();
  }
  // alert(
  //   `Hello, ${name.value} <${email.value}> from grade ${grade.value} born on ${birthday.value}/ ${birthmonth.value} /${birthyear.value}.`
  // );
});

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (email.value === "" || email.value === null) {
//     alert("Email is required");
//   } else {
//     console.log(email.value);
//   }
// });

// form.addEventListener("submit", (a) => {
//   let messages = [];
//   if (email.value === "" || email.value === null) {
//     messages.push("Email is required");
//   }
//   if (messages.length > 0) {
//     a.preventDefault();
//     errorElement.innerText = messages.join(", ");
//   }
// });
