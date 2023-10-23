document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const sidebar = document.getElementById("sidebar");
  const moreFilters = document.querySelector(".more-filter-text");
  const dropdownContainer = document.querySelector(".dropdown-container");

  moreFilters.addEventListener("click", function () {
    console.log("MoreFilter text clicked");

    // Toggle the visibility of the dropdown container
    if (getComputedStyle(dropdownContainer).display === "none") {
      dropdownContainer.style.display = "block";
    } else {
      dropdownContainer.style.display = "none";
    }
  });

  menuIcon.addEventListener("click", function () {
    console.log("Menu icon clicked"); // Log the click event

    // Toggle the visibility of the sidebar
    if (getComputedStyle(sidebar).display === "none") {
      console.log("Sidebar was hidden, showing it now");
      sidebar.style.display = "block";
    } else {
      console.log("Sidebar was visible, hiding it now");
      sidebar.style.display = "none";
    }
  });
});
