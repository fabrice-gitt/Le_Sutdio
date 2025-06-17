document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  fetch(form.action, {
      method: 'POST',
      body: data,
      headers: {
          'Accept': 'application/json'
      }
  }).then(response => {
      if (response.ok) {
          alert('Votre message a été envoyé avec succès !');
          form.reset();
      } else {
          alert('Une erreur est survenue. Veuillez réessayer plus tard.');
      }
  }).catch(error => {
      console.error('Erreur:', error);
      alert('Une erreur est survenue. Veuillez réessayer plus tard.');
  });
});
