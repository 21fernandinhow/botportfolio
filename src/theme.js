const root = document.querySelector(":root");
const body = document.querySelector("body");

function changeTheme(){
    if (body.dataset.theme === "dark") {
        root.style.setProperty("--bg-color", "#edeef7");
        root.style.setProperty("--bg-radical-color", "#ffffff");
        root.style.setProperty("--contrast-color", "#121212");
        root.style.setProperty("--primary-color", "#7868e6");
        root.style.setProperty("--secondary-color", "#b8b5ff");
        body.dataset.theme = "light"
      } else {
        root.style.setProperty("--bg-color", "#18122b"); // alternative color #2c2f33
        root.style.setProperty("--bg-radical-color", "#000015"); // alternative color #23272a
        root.style.setProperty("--contrast-color", "#f5f5f5"); 
        root.style.setProperty("--primary-color", "#635985"); // alternative color #4b4079
        root.style.setProperty("--secondary-color", "#393053"); // alternative-color #7868e6
        body.dataset.theme = "dark"
      }
}

export default changeTheme;