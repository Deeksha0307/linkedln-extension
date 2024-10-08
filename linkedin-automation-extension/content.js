function connectAll() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((btn) => {
        if (buttons.length === 0){
            alert('No connectable profiles available');
        }
        if (btn.textContent === "Connect") {
            setTimeout(() => {
            btn.click();
        }, Math.random() * 3000); // Adds a delay between clicks
      }
    });
  }
  
  // Expose function to popup.js
  window.connectAll = connectAll;