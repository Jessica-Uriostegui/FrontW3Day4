document.addEventListener('DOMContentLoaded', function() {
    const userForm = document.getElementById('userForm');
    const resultDiv = document.getElementById('result');

    userForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        
        if (name.value.trim() === '') {
            alert('First Name is required');
            name.focus();
            return;
        }

        if (email.value.trim() === '') {
            alert('Email is required');
            email.focus();
            return;
        }

        if (!validateEmail(email.value.trim())) {
            alert('Please enter a valid email ');
            email.focus();
            return;
        }

        if (message.value.trim() === '') {
            alert('Message is required');
            message.focus();
            return;
        }

        const userData = {
           name: name.value.trim(),
           email: email.value.trim(),
           message:message.value.trim()
        };
        
        resultDiv.innerHTML = `
            <h4>Submitted Data</h4>
            <p><Strong>Name:</strong> ${userData.name}</p>
            <p><Strong>Email:</strong> ${userData.email}</p>
            <p><Strong>Message:</strong> ${userData.message}</p>
        `;

        userForm.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

});


        

