import "regenerator-runtime"; 
import "../styles/main.css";
import "../styles/responsive.css";
import restaurantData from "../DATA.json"; 

const navbarElement = document.querySelector("#nav"); 
const navLink = document.querySelector(".nav-item");
const hamburgerIcon = document.querySelector(".hamburger"); 
const bars = document.querySelectorAll(".bar");

window.onscroll = () => {
  if (window.scrollY > 70) {
    navbarElement.classList.add("navbar-active");
  } else {
    navbarElement.classList.remove("navbar-active");
  }
};

hamburgerIcon.addEventListener("click", () => {
  navLink.classList.toggle("nav-item-open");
  bars.forEach((barElement) => {
    barElement.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const restaurantListElement = document.querySelector(".resto-list"); 
  const restaurantDataArray = restaurantData.restaurants; 
  let tabIndex = 6;

  restaurantDataArray.forEach((restaurant) => {
    restaurantListElement.innerHTML += `
      <div class="resto-item" tabindex="${tabIndex}">
        <div class="card">
          <img
            src="${restaurant.pictureId}"
            alt="restaurant image"
            class="resto-thumb"
          />
          <div class="card-text">
            <h1 class="card-title">${restaurant.name}</h1>
            <div class="resto-rate">
              Rating: <span class="rate">${restaurant.rating}</span>
            </div>
            ${restaurant.description}
          </div>
          <div class="resto-place">${restaurant.city}</div>
        </div>
      </div>
    `;
    tabIndex++;
  });
});

