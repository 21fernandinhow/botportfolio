const root = document.querySelector(":root");
const body = document.querySelector("body");

function changeTheme(){
    if (body.dataset.theme === "dark") {
        root.style.setProperty("--bg-color", "#EDEEF7")
        root.style.setProperty("--bg-radical-color", "#ffffff")
        root.style.setProperty("--contrast-color", "#121212");
        root.style.setProperty("--primary-color", "#7868E6");
        root.style.setProperty("--secondary-color", "#B8B5FF");
        body.dataset.theme = "light"
      } else {
        root.style.setProperty("--bg-color", "#18122B")
        root.style.setProperty("--bg-radical-color", "#000015")
        root.style.setProperty("--contrast-color", "#f5f5f5")
        root.style.setProperty("--primary-color", "#443C68");
        root.style.setProperty("--secondary-color", "#393053");
        body.dataset.theme = "dark"
      }
}

export default changeTheme;