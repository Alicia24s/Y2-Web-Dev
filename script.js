document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');
  const responseMessage = document.getElementById('responseMessage');

  signupForm.addEventListener('submit', async (e) => {

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    //This if statement checks if the name and email are empty
    if (!name || !email || !email.includes('@')) {
      responseMessage.textContent = 'Please enter a valid name and or email.';
      responseMessage.style.color = 'red';
      return;
    }

    const res = await fetch('https://mudfoot.doc.stu.mmu.ac.uk/ash/api/mailinglist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    });

    const result = await res.json();
  // Checks if the response is ok then says error if anything is wrong with it)
    if (res.ok) {
      responseMessage.textContent = result.message + ` (${result.data.name}, ${result.data.email})`;
      responseMessage.style.color = 'green';
      signupForm.reset();
    } else {
      responseMessage.textContent = 'Error: ' + (result.message || 'Something went wrong');
      responseMessage.style.color = 'red';
    }
  });
});
