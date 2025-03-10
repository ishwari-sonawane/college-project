        document.getElementById('myForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
            var name = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            console.log('Email:', name);
            console.log('Password:', password);
        });

        document.getElementById('reset').addEventListener('click', function() {
            console.log('Form has been reset');
            alert("Enter your email and set new password");
        });