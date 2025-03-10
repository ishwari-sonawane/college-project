document.addEventListener('DOMContentLoaded', function() {

    var submitButton = document.getElementById('Submit');


    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); 

    
        var name = document.getElementById('name').value;
        var phoneNumber = document.getElementById('pnumber').value;
        var vehicleNumber = document.getElementById('vnumber').value;
        var vehicleName = document.getElementById('vname').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        
        console.log('Name:', name);
        console.log('Phone Number:', phoneNumber);
        console.log('Vehicle Number:', vehicleNumber);
        console.log('Vehicle Name:', vehicleName);
        console.log('Email:', email);
        console.log('Password:', password);

    
    });
});