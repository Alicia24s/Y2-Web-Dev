document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signupForm');
  const responseMessage = document.getElementById('responseMessage');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    //Checks if everything the user enters is valid
    if (!name || !email || !email.includes('@')) {
      responseMessage.textContent = 'Please enter a valid name and email.';
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

    if (res.ok) {
      //Prints all info that you get back from API
      responseMessage.textContent = result.message + ` (${result.data.name}, ${result.data.email})`;
      responseMessage.style.color = 'green';
      form.reset();
    } else {
      responseMessage.textContent = 'Error: ' + (result.message || 'Something went wrong');
      responseMessage.style.color = 'red';
    }
  });
});
