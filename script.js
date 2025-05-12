window.onload = () => {
    //Do your getters and setters here
    //code here
    let header{
        
    }
    document.getElementById("signupForm").addEventListener("submit", function (e) {
        e.preventDefault();
      
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const responseMsg = document.getElementById("responseMessage");
      
        // Clear previous message
        responseMsg.textContent = "";
        responseMsg.style.color = "white";
      
        // Client-side validation
        if (!name || !email || !email.includes("@") || !email.includes(".")) {
          responseMsg.textContent = "Please enter a valid name and email address.";
          responseMsg.style.color = "red";
          return;
        }
      
        // Send POST request
        fetch("https://mudfoot.doc.stu.mmu.ac.uk/ash/api/mailinglist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email }),
        })
    Msg.style.color = "red";
            console.error("Error:", err);
          });
      });            .then((res) => {
            if (!res.ok) {
              throw new Error("Server returned an error");
            }
            return res.json();
          })
          .then((data) => {
            responseMsg.textContent = "Successfully subscribed! 🎉";
            responseMsg.style.color = "lightgreen";
          })
          .catch((err) => {
            responseMsg.textContent =
              "There was a problem subscribing. Please check your details and try again.";
            response
    }