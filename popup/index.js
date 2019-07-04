document.getElementById("myform").addEventListener("submit", e => {
  // 画面遷移をブロック
  e.preventDefault();
  const mytxt = document.getElementById("mytext").textContent;
  browser.tabs.executeScript({
    code: `console.log(${mytxt})`
  });
});
