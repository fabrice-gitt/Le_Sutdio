/* --- Fichier script.js FINAL --- */

// On s'assure que le script s'exécute uniquement quand le HTML est complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // =========================================================================
    // ▼▼▼ GESTION DU FORMULAIRE DE CONTACT (Logique de la maquette INTÉGRÉE) ▼▼▼
    // =========================================================================

    const form = document.getElementById('contactForm');
    // On s'assure que le formulaire existe sur la page avant de continuer
    if (form) {
        // --- Sélection des éléments du formulaire ---
        const nom = document.getElementById('nom');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        // --- Expressions Régulières (Regex) pour la validation ---
        const regexNomPrenom = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-']+$/; // Lettres, espaces, tirets, apostrophes
        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        // --- Fonction de validation générique pour les champs avec Regex ---
        function validateField(input, regex, errorMessageElement) {
            if (regex.test(input.value.trim())) {
                input.classList.remove('invalid');
                input.classList.add('valid');
                errorMessageElement.classList.remove('show');
                return true;
            } else {
                input.classList.remove('valid');
                input.classList.add('invalid');
                errorMessageElement.classList.add('show');
                return false;
            }
        }
        
        // --- Fonction pour les champs obligatoires simples (sujet, message) ---
        function validateRequired(input, errorMessageElement) {
            if (input.value.trim() !== '') {
                input.classList.remove('invalid');
                input.classList.add('valid');
                errorMessageElement.classList.remove('show');
                return true;
            } else {
                input.classList.remove('valid');
                input.classList.add('invalid');
                errorMessageElement.classList.add('show');
                return false;
            }
        }

        // --- Ajout des écouteurs d'événements pour la validation en temps réel ---
        nom.addEventListener('input', () => validateField(nom, regexNomPrenom, document.getElementById('nomError')));
        email.addEventListener('input', () => validateField(email, regexEmail, document.getElementById('emailError')));
        message.addEventListener('input', () => validateRequired(message, document.getElementById('messageError')));

        // --- Validation finale lors de la soumission du formulaire ---
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // On empêche l'envoi du formulaire

            // On lance la validation de tous les champs une dernière fois
            const isNomValid = validateField(nom, regexNomPrenom, document.getElementById('nomError'));
            const isEmailValid = validateField(email, regexEmail, document.getElementById('emailError'));
            const isMessageValid = validateRequired(message, document.getElementById('messageError'));

            // Si tous les champs sont valides, on peut "envoyer" le formulaire
            if (isNomValid && isEmailValid && isMessageValid) {
                alert('Formulaire valide ! Prêt à être envoyé.');
                
                // Pour un vrai site, ici on enverrait les données au serveur avec fetch()
                // fetch('votre_script_backend.php', { method: 'POST', body: new FormData(form) })
                // .then(...)

                form.reset(); // On vide le formulaire
                // On enlève toutes les classes de validation (vert/rouge)
                document.querySelectorAll('.valid, .invalid').forEach(el => {
                    el.classList.remove('valid', 'invalid');
                });
            } else {
                alert('Veuillez corriger les erreurs dans le formulaire.');
            }
        });
    }


    // --- MISE À JOUR DE L'ANNÉE (Fonctionnalité de votre script original CONSERVÉE) ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

});
