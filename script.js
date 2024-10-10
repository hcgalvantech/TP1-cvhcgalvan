function openTab(tabName) {
    var i, tabContent;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

// Mostrar la pestaña de información personal por defecto
document.addEventListener('DOMContentLoaded', (event) => {
    openTab('personal');
});
