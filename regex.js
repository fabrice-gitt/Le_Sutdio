// Bootstrap validation regex
function validateInput(type, value) {
    switch (type) {
        case 'prenom':
        case 'nom':
            // Lettres, espaces, apostrophes, tirets
            return /^[a-zA-ZÀ-ÿ '-]+$/.test(value);
        case 'email':
            // Email simple
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        case 'phone':
            // 10 chiffres
            return /^\d{10}$/.test(value);
        default:
            return false;
    }
  }
  
  // Sélection des inputs
  const prenomInput = document.querySelector('input[placeholder="Prénom"]');
  const nomInput = document.querySelector('input[placeholder="Nom"]');
  const emailInput = document.querySelector('input[placeholder="Email"]');
  const phoneInput = document.querySelector('input[placeholder="Téléphone"]');
  
  // Validation au submit
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let errorMessage = '';
    let successMessage = '';
  
    if (!validateInput('prenom', prenomInput.value)) {
        errorMessage += 'Le prénom est invalide. ';
    }
    if (!validateInput('nom', nomInput.value)) {
        errorMessage += 'Le nom est invalide. ';
    }
    if (!validateInput('email', emailInput.value)) {
        errorMessage += 'L\'email est invalide. ';
    }
    if (!validateInput('phone', phoneInput.value)) {
        errorMessage += 'Le téléphone est invalide. ';
    }
  
    if (errorMessage) {
        document.getElementById('error-message').textContent = errorMessage;
        document.getElementById('success-message').textContent = '';
    } else {
        successMessage = 'Formulaire soumis avec succès !';
        document.getElementById('success-message').textContent = successMessage;
        document.getElementById('error-message').textContent = '';
    }
  });
  
  // Validation en temps réel
  prenomInput.addEventListener('input', function() {
    prenomInput.style.borderColor = validateInput('prenom', prenomInput.value) ? 'green' : 'red';
  });
  nomInput.addEventListener('input', function() {
    nomInput.style.borderColor = validateInput('nom', nomInput.value) ? 'green' : 'red';
  });
  emailInput.addEventListener('input', function() {
    emailInput.style.borderColor = validateInput('email', emailInput.value) ? 'green' : 'red';
  });
  phoneInput.addEventListener('input', function() {
    phoneInput.style.borderColor = validateInput('phone', phoneInput.value) ? 'green' : 'red';
  });