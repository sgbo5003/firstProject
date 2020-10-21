var btn = document.querySelectorAll(".btn_01");
btn.addEventListener("click", signUpBtn);

function signUpBtn() {
  alert("회원가입이 완료되었습니다.");
  location.href = "./login.html";
}
