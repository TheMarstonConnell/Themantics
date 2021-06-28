const light_theme = {back1: '#eeeeee', back2: '#ffffff', content1: '#586e75', content2: '#657b83', content3: '#839496', content4: '#002b36'};
const dark_theme = {};
const solar_light = {back1: '#eee8d5', back2: '#fdf6e3', content1: '#586e75', content2: '#657b83', content3: '#839496', content4: '#002b36', yellow: '#b58900', orange: '#cb4b16', red: '#dc322f', magenta: '#d33682', violet: '#6c71c4', blue: '#268bd2', cyan: '#2aa198', green: '#859900'};
const solar_dark = {back1: '#002b36', back2: '#073642', content1: '#586e75', content2: '#657b83', content3: '#839496', content4: '#93a1a1', yellow: '#b58900', orange: '#cb4b16', red: '#dc322f', magenta: '#d33682', violet: '#6c71c4', blue: '#268bd2', cyan: '#2aa198', green: '#859900'};

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
    let drop = document.getElementById('color_picker_drop');
    drop.value = themeName;
}

function change_theme(){
    let drop = document.getElementById('color_picker_drop');
    setTheme(drop.value);
}


window.addEventListener('load', (event) => {

    let theme = localStorage.getItem('theme');
    if(theme == null){
        theme = 'theme-light';
    }
    setTheme(theme);
});