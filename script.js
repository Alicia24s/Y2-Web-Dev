document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const responseMessage = document.getElementById('responseMessage');
  
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
  
      // Simple validation
      if (!name || !email) {
        responseMessage.textContent = 'Please fill in both fields.';
        responseMessage.style.color = 'red';
        return;
      }
  
      if (!email.includes('@') || !email.includes('.')) {
        responseMessage.textContent = 'Please enter a valid email.';
        responseMessage.style.color = 'red';
        return;
      }
  
      try {
        const res = await fetch('https://mudfoot.doc.stu.mmu.ac.uk/ash/api/mailinglist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email }),
        });
  
        // Parse response JSON
        const result = await res.json();
  
        if (res.ok) {
          // ✅ 200 OK - Show success message
          responseMessage.textContent = result.message + ` (${result.data.name}, ${result.data.email})`;
          responseMessage.style.color = 'green';
          form.reset();
        } else {
          // ❌ Server sent an error (but with a message)
          responseMessage.textContent = 'Error: ' + (result.message || 'Something went wrong');
          responseMessage.style.color = 'red';
        }
      } catch (err) {
        // ❌ Network or unexpected error
        responseMessage.textContent = 'Error: ' + err.message;
        responseMessage.style.color = 'red';
      }
    });
  });
  