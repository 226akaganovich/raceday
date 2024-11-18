document.getElementById("raceForm").addEventListener("submit", function(event) {
    event.preventDefault();  

    let age = parseInt(document.getElementById("age").value);
    let registeredEarly = document.getElementById("registrationStatus").value === "true";

    
    let raceNumber = Math.floor(Math.random() * 1000);

    let resultText = ''; 

    
    if (age > 18 && registeredEarly) {
        raceNumber += 1000;
        resultText = `Your race number is ${raceNumber}. You will race at 9:30 am. Good Luck!`;
    }
    else if (age > 18 && !registeredEarly) {
        resultText = `Your race number is ${raceNumber}. You will race at 11:00 am. Good Luck!`;
    }
    
    else if (age < 18) {
        resultText = `Your race number is ${raceNumber}. You will race at 12:30 pm. Good Luck!`;
    }
    
    else {
        resultText = "Please see the registration desk for further assistance.";
    }

  
    document.getElementById("result").textContent = resultText;
});
