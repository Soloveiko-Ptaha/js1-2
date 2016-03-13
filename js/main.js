function pow(){
  var num = prompt('Введите число');
  var exponenta = prompt('Введите степень');
  var result = num;
  for (var i = 1; i < exponenta; i++) {
    result *= num;
  }
  return result;
}
alert(pow());

function searchName(){
  var arrName = ['', '', '', '', ''];
  var userName;
  for(var i = 0; i < 5; i++){
    arrName[i] = prompt("Введите имя: ");
  }
  userName = prompt("Введите имя пользователя: ");
  for(i = 0; i < 5; i++)
  {
    if(arrName[i] == userName) {
      alert(userName + ', вы успешно вошли!');
      return 0;
    }
  }
    alert("Данный пользователь не зарегистрирован");
}
searchName();