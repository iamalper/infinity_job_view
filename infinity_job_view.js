browser.cookies.onChanged.addListener((changeInfo) => {
  if (changeInfo.cookie.name=="jobviewcount") {
    browser.cookies.set({
      url: "https://www.kariyer.net",
      name: "jobviewcount",
      value: "0",
    });
  }
})
