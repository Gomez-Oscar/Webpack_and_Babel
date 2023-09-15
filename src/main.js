import './style.css';

const btnHome = document.getElementById('nav_home');
const btnContact = document.getElementById('nav_contact');
const btnAboutUs = document.getElementById('nav_about_us');
const containerMain = document.getElementById('container_main');

btnHome.addEventListener('click', e => {
  containerMain.innerHTML = /*html*/ `
      <h2>Index</h2>
      <p>Hi I'm Index</p>
  `;
});
btnContact.addEventListener('click', e => {
  containerMain.innerHTML = /*html*/ `
  <h2>Contact</h2>
  <p>Hi I'm Contact</p>
`;
});
btnAboutUs.addEventListener('click', e => {
  containerMain.innerHTML = /*html*/ `
  <h2>About Us</h2>
  <p>Hi I'm About Us</p>
`;
});
