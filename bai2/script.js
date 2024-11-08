document.addEventListener("DOMContentLoaded", function () {
  let tabItems = document.getElementsByClassName("tab-item")

  for (let tabItem of tabItems) {

    tabItem.addEventListener("click", function () {

      for (let tab of tabItems) {

        tab.classList.remove("active")

      }

      tabItem.classList.add("active")

    })

  }
})