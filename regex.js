
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nom = document.querySelector('input[name="nom"]');
    const prenom = document.querySelector('input[name="prenom"]');
    const telephone = document.querySelector('input[name="telephone"]');
    const email = document.querySelector('input[name="email"]');
    const sujet = document.querySelector('input[name="sujet"]');
    const message = document.querySelector('textarea[name="message"]');

    const regexNom = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{2,}$/;
    const regexPrenom = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{2,}$/;
    const regexTelephone = /^(0[1-9]\d{8}|(\+33|0033)[1-9]\d{8})$/;
    const regexEmail = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    const regexSujet = /^.{3,}$/;
    const regexMessage = /^.{10,}$/;

    let isValid = true;

    function showError(input, message) {
      input.classList.add('is-invalid');
      if (!input.nextElementSibling || !input.nextElementSibling.classList.contains('invalid-feedback')) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'invalid-feedback';
        errorDiv.innerText = message;
        input.parentNode.appendChild(errorDiv);
      }
    }

    function clearError(input) {
      input.classList.remove('is-invalid');
      const error = input.parentNode.querySelector('.invalid-feedback');
      if (error) error.remove();
    }

    // Validation
    if (!regexNom.test(nom.value.trim())) {
      isValid = false;
      showError(nom, "Nom invalide.");
    } else {
      clearError(nom);
    }

    if (!regexPrenom.test(prenom.value.trim())) {
      isValid = false;
      showError(prenom, "Prénom invalide.");
    } else {
      clearError(prenom);
    }

    if (!regexTelephone.test(telephone.value.trim())) {
      isValid = false;
      showError(telephone, "Téléphone invalide.");
    } else {
      clearError(telephone);
    }

    if (!regexEmail.test(email.value.trim())) {
      isValid = false;
      showError(email, "Email invalide.");
    } else {
      clearError(email);
    }

    if (!regexSujet.test(sujet.value.trim())) {
      isValid = false;
      showError(sujet, "Sujet trop court.");
    } else {
      clearError(sujet);
    }

    if (!regexMessage.test(message.value.trim())) {
      isValid = false;
      showError(message, "Message trop court (minimum 10 caractères).");
    } else {
      clearError(message);
    }

    if (isValid) {
      alert('Formulaire validé ! (Ici tu pourrais envoyer les données)');
      // this.submit(); // Décommente si tu veux envoyer le formulaire
    }
  });

