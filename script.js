function generateColor() {
    var characters = '0123456789ABCDEF';
    var color = '#';
    
    for (var i = 0; i < 6; i++) {
      color += characters[Math.floor(Math.random() * 16)];
    }
    
    return color;
  }
  
  function updateColor() {
    var colorBox = document.getElementById('color');
    colorBox.textContent = generateColor();
  }
  
  var generateBtn = document.getElementById('generate-btn');
  generateBtn.addEventListener('click', updateColor);
  
  updateColor();
  