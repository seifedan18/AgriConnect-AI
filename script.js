document.getElementById('farmForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get input values
  const soil = document.getElementById('soil').value;
  const rainfall = parseInt(document.getElementById('rainfall').value);
  const temperature = parseInt(document.getElementById('temperature').value);

  // Simple AI logic (demo)
  let recommendation = "";

  if(soil === "loamy" && rainfall > 700 && temperature >= 20 && temperature <= 30) {
    recommendation = "Ideal crops: Maize, Wheat, Tomatoes";
  } else if(soil === "clay" && rainfall > 600) {
    recommendation = "Ideal crops: Rice, Sugarcane";
  } else if(soil === "sandy" && temperature > 25) {
    recommendation = "Ideal crops: Groundnut, Millet, Sorghum";
  } else {
    recommendation = "Try adjusting soil type, rainfall, or temperature for better recommendations.";
  }

  // Show result
  document.getElementById('recommendation').innerText = recommendation;
});