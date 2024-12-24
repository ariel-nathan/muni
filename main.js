// Get DOM elements
const searchInput = document.getElementById("searchInput");
const tableBody = document.getElementById("municipalityTable");
const countyFilter = document.getElementById("countyFilter");

// Load and initialize data
async function initializeData() {
  try {
    const response = await fetch("./municipalities.json");
    const municipalities = await response.json();

    // Get unique counties for the filter dropdown
    const counties = [...new Set(municipalities.map((m) => m.county))].sort();

    // Populate county filter
    counties.forEach((county) => {
      const option = document.createElement("option");
      option.value = county;
      option.textContent = county;
      countyFilter.appendChild(option);
    });

    // Render table function
    function renderTable(data) {
      const resultCount = data.length;
      const announcement = `Showing ${resultCount} ${
        resultCount === 1 ? "municipality" : "municipalities"
      }`;

      tableBody.innerHTML = data
        .map(
          (municipality) => `
        <tr role="row">
          <td role="cell">${municipality.code}</td>
          <td role="cell">${municipality.name}</td>
          <td role="cell">${municipality.county}</td>
        </tr>
      `
        )
        .join("");

      // Update the aria-live region with the result count
      document.getElementById("resultsTitle").textContent = announcement;
    }

    // Filter data function
    function filterData() {
      const searchTerm = searchInput.value.toLowerCase();
      const selectedCounty = countyFilter.value;

      const filteredData = municipalities.filter((municipality) => {
        const matchesSearch =
          municipality.name.toLowerCase().includes(searchTerm) ||
          municipality.code.includes(searchTerm);
        const matchesCounty =
          !selectedCounty || municipality.county === selectedCounty;
        return matchesSearch && matchesCounty;
      });

      renderTable(filteredData);
    }

    // Add event listeners
    searchInput.addEventListener("input", filterData);
    countyFilter.addEventListener("change", filterData);

    // Initial render
    renderTable(municipalities);
  } catch (error) {
    console.error("Error loading municipality data:", error);
    tableBody.innerHTML =
      '<tr><td colspan="3" class="px-6 py-4 text-center text-red-500">Error loading municipality data</td></tr>';
  }
}

// Initialize the application
initializeData();

// Back to Top button functionality
const backToTopButton = document.getElementById("backToTop");

// Show button when scrolling down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.remove("opacity-0", "invisible");
  } else {
    backToTopButton.classList.add("opacity-0", "invisible");
  }
});

// Scroll to top when clicked
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
