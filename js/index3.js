// ! Статична та динамічна типізація

// let a = "abc";
// a = 10;

// let b = 10;
// b = true;
// b = "Yurii";
// b = underfined;

function a() {
  console.log("Hey there");
}

a();
a = 10;
console.log(a);
a();

// По можливості завжди пишемо змінні через (const).
