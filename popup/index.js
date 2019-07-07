document.getElementById("myform").addEventListener("submit", e => {
  // 画面遷移をブロック
  e.preventDefault();
  const myid = browser.extension.getBackgroundPage().id;
  const mytxt = document.getElementById("mytext").value;
  browser.tabs.executeScript(myid, {
    code: `console.log("${mytxt}")`
    // code: mytxt
  });
});
