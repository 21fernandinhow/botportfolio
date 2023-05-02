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
        root.style.setProperty("--bg-color", "#242424"); 
        root.style.setProperty("--bg-radical-color", "#1a1a1a"); 
        root.style.setProperty("--contrast-color", "#f5f5f5"); 
        root.style.setProperty("--primary-color", "#309F89"); // alternative color #7868e6
        root.style.setProperty("--secondary-color", "#508B7A"); //alternative color #0e0e0e
        body.dataset.theme = "dark"
      }
}

export default changeTheme;