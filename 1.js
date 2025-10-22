function greeting(msg) {
  return function who(name) {
    console.log(`${name}님, ${msg}!`);
  };
}

var hello = greeting("안녕하세요");
var howdy = greeting("잘 지내시나요");
hello("카일"); // 카일 님, 안녕하세요!
hello("보라"); // 보라 님, 안녕하세요!
howdy("호진"); // 호진 님, 잘 지내시니요!

function counter(step = 1) {
  var count = 0;
  return function increaseCount() {
    count = count + step;
    return count;
  };
}

var incBy1 = counter(1);
var incBy3 = counter(3);

incBy1(); // 1
incBy1(); // 2

incBy3(); // 3
incBy3(); // 6
incBy3(); // 9

function getSomeData(url) {
  ajax(url, function onResponse(resp) {
    console.log(`${url}에서 온 응답: ${resp}`);
  });
}
getSomeData("https://some.url/wherever");   // https://some.url/wherever에서 온 응답: ...

for (let [idx, btn] of buttons.entries()) {
    btn.addEventListener("click", function onClick() {
    console.log(`${idx}번째 버튼을 클릭했습니다!`)
})
}