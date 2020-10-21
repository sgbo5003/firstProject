var btn = document.querySelectorAll(".btn_01");
var btn2 = document.querySelectorAll(".btn_02");
btn.addEventListener("click", backBtn);
btn2.addEventListener("click", enrollmentBtn);

function backBtn() {
  var yes = confirm("정말 돌아가시겠습니까?");
  if (yes) {
    location.href = "./sub2.html";
  } else {
    location.href = "./sub3.html";
  }
}

function enrollmentBtn() {
  alert("게시글이 등록 되었습니다.");
  location.href = "./sub2.html";
}
