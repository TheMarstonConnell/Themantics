// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
    let drop = document.getElementById('color_picker_drop');
    if(drop){
        drop.value = themeName;

    }
}



function change_theme(){
    let drop = document.getElementById('color_picker_drop');
    console.log("Switching theme!");
    setTheme(drop.value);
}


window.addEventListener('load', (event) => {

    let drop = document.getElementById('color_picker_drop');
    if(drop){

    }

    let theme = localStorage.getItem('theme');
    if(theme == null){
        theme = 'theme-light';
    }
    setTheme(theme);
});