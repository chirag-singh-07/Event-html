function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
  
    const name = document.getElementById("event-name").value;
    const date = document.getElementById("event-date").value;
    const time = document.getElementById("event-time").value;
    const members = document.getElementById("event-members").value;
    const foods = document.getElementById("event-foods").value;
  
    if (!name || !date || !time || !members || !foods) {
      alert("Please fill all fields before downloading the PDF.");
      return;
    }
  
    doc.setFont("helvetica", "bold");
    doc.text("Event Details", 90, 10);
    doc.setFont("helvetica", "normal");
    
    doc.text(`Event Name: ${name}`, 20, 30);
    doc.text(`Date: ${date}`, 20, 40);
    doc.text(`Time: ${time}`, 20, 50);
    doc.text(`Members: ${members}`, 20, 60);
    doc.text("Food Items:", 20, 70);
  
    let foodList = foods.split(",").map(item => `- ${item.trim()}`).join("\n");
    doc.text(foodList, 30, 80);
  
    doc.save("event-details.pdf");
  }
  