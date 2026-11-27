function checkAge(age) {
  if (age < 0) {
    return "Некорректный возраст";
  }

  if (age < 18) {
    return "Доступ запрещён";
  }

  return "Доступ разрешён";
}

console.log(checkAge(15));
console.log(checkAge(18));
console.log(checkAge(25));
console.log(checkAge(-5));