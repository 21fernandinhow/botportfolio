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
        root.style.setProperty("--bg-color", "#18122b"); // alternative color #022E37
        root.style.setProperty("--bg-radical-color", "#000015"); // alternative color #01212D
        root.style.setProperty("--contrast-color", "#f5f5f5"); 
        root.style.setProperty("--primary-color", "#635985"); // alternative color #309F89
        root.style.setProperty("--secondary-color", "#393053"); // alternative-color #075F56
        body.dataset.theme = "dark"
      }
}

export default changeTheme;