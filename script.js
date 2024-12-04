var toggleButton = document.getElementById("toggle-skill");
var skillslist = document.getElementById("skills");
toggleButton.addEventListener("click", function () {
    if (skillslist.style.display === 'none') {
        skillslist.style.display = "block";
    }
    else {
        skillslist.style.display = "none";
    }
});
