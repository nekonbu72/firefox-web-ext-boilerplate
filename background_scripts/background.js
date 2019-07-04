browser.browserAction.onClicked.addListener(() => {
  const createData = {
    type: "detached_panel",
    url: "../popup/index.html"
  };
  browser.windows.create(createData);
});
