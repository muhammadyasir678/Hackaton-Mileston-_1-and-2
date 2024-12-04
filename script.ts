const Button = document.getElementById('toggle-skill') as HTMLButtonElement;
const skills = document.getElementById('skills') as HTMLUListElement;

Button.addEventListener('click', () => {
 if (skills.style.display === 'none') {
    skills.style.display = 'block'
 } else {
    skills.style.display = 'none'
 }
});