// Function to generate a random color
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Function to update the color every 1 millisecond
  function updateColor() {
    var colorBox = document.getElementById("color-box");
    colorBox.style.backgroundColor = getRandomColor();
  }
  
  // Update the color every 1 millisecond
  setInterval(updateColor, 1);
  