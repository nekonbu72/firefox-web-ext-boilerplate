browser.browserAction.onClicked.addListener(() => {
  browser.tabs.query({ active: true, currentWindow: true }).then(t => {
    window.id = t[0].id;
  });

  const createData = {
    type: "detached_panel",
    url: "../popup/index.html"
  };
  browser.windows.create(createData);
});
