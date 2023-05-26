const root = document.querySelector(":root");
const body = document.querySelector("body");

function changeTheme(){
    if (body.dataset.theme === "dark") {
        root.style.setProperty("--bg-color", "#edeef7");
        root.style.setProperty("--bg-radical-color", "#fff");
        root.style.setProperty("--contrast-color", "#121212");
        root.style.setProperty("--primary-color", "#7868e6");
        root.style.setProperty("--secondary-color", "#b8b5ff");
        body.dataset.theme = "light"
      } else {
        root.style.setProperty("--bg-color", "#2c2c2c"); 
        root.style.setProperty("--bg-radical-color", "#111111"); 
        root.style.setProperty("--contrast-color", "#f5f5f5"); 
        root.style.setProperty("--primary-color", "#7868e6"); //alternative color #1db954
        root.style.setProperty("--secondary-color", "#1c1c1c"); 
        body.dataset.theme = "dark"
      }
}

export default changeTheme;