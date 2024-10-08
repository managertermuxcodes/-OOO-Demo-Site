// Get all property elements
const propertyList = document.getElementById('property-list');

// Add event listener to search bar
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', searchProperties);

// Add event listener to filter buttons
const filterButtons = document.querySelectorAll('.filter-button');
filterButtons.forEach((button) => {
  button.addEventListener('click', filterProperties);
});

// Function to search properties
function searchProperties() {
  const searchTerm = searchInput.value.toLowerCase();
  const propertyElements = propertyList.children;
  propertyElements.forEach((propertyElement) => {
    const propertyName = propertyElement.children[0].textContent.toLowerCase();
    if (propertyName.includes(searchTerm)) {
      propertyElement.style.display = 'block';
    } else {
      propertyElement.style.display = 'none';
    }
  });
}

// Function to filter properties by location
function filterProperties() {
  const filterValue = this.textContent;
  const propertyElements = propertyList.children;
  propertyElements.forEach((propertyElement) => {
    const propertyLocation = propertyElement.children[1].textContent;
    if (propertyLocation.includes(filterValue)) {
      propertyElement.style.display = 'block';
    } else {
      propertyElement.style.display = 'none';
    }
  });
}

// Function to add event listener to view more details button
const viewMoreDetailsButtons = document.querySelectorAll('.view-more-details');
viewMoreDetailsButtons.forEach((button) => {
  button.addEventListener('click', showMoreDetails);
});

// Function to show more details
function showMoreDetails() {
  const moreDetailsDiv = this.nextElementSibling;
  moreDetailsDiv.classList.toggle('show');
}
