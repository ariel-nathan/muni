// Get DOM elements
const searchInput = document.getElementById("searchInput");
const tableBody = document.getElementById("municipalityTable");
const countyFilter = document.getElementById("countyFilter");
const clearSearchButton = document.getElementById("clearSearch");

// Import municipalities data
import { municipalities } from "./municipalities.js";

// Initialize data
function initializeData() {
  try {
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

      if (resultCount === 0) {
        tableBody.innerHTML = `
          <tr role="row">
            <td colspan="3" class="px-6 py-4 text-center text-gray-500">
              No municipalities found matching your search criteria.
            </td>
          </tr>
        `;
      } else {
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
      }

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

    // Add download CSV functionality
    function downloadCsv() {
      // Convert data to CSV
      const headers = ["Code", "Name", "County"];
      const csvContent = [
        headers.join(","),
        ...municipalities.map(
          (m) =>
            `${m.code},"${m.name.replace(/"/g, '""')}","${m.county.replace(
              /"/g,
              '""'
            )}"`
        ),
      ].join("\n");

      // Create download link
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "nj-municipalities.csv");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    // Add event listeners
    searchInput.addEventListener("input", () => {
      filterData();
      // Show/hide clear button based on search input
      clearSearchButton.classList.toggle("hidden", !searchInput.value);
    });
    countyFilter.addEventListener("change", filterData);
    document
      .getElementById("downloadCsv")
      .addEventListener("click", downloadCsv);

    // Clear search functionality
    clearSearchButton.addEventListener("click", () => {
      searchInput.value = "";
      filterData();
      clearSearchButton.classList.add("hidden");
      searchInput.focus();
    });

    // Initial render
    renderTable(municipalities);
  } catch (error) {
    console.error("Error initializing municipality data:", error);
    tableBody.innerHTML =
      '<tr><td colspan="3" class="px-6 py-4 text-center text-red-500">Error initializing municipality data</td></tr>';
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
