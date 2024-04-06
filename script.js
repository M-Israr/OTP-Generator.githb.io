// OTP generator function
function generateOTP() {
    // Generate a random 6-digit OTP
    return Math.floor(100000 + Math.random() * 900000);
}

// Send OTP button click event
document.querySelector('.btn-send-otp').addEventListener('click', function() {
    // Get the email input value
    var emailInput = document.getElementById('email').value;

    // Check if email is empty
    if (emailInput.trim() === '') {
        alert('Please enter your email!');
        return;
    }

    // Generate OTP
    var otp = generateOTP();

    // Display the generated OTP
    alert('OTP sent to your email: ' + otp);

    // Store the generated OTP in local storage
    localStorage.setItem('otp', otp);

    // Hide email input and send OTP button
    document.querySelector('.email').style.display = 'none';
    document.querySelector('.btn-send-otp').style.display = 'none';

    // Show OTP input and verify button
    document.querySelector('.email-verify').style.display = 'flex';
});

// Verify OTP button click event
document.getElementById('btn-verify-otp').addEventListener('click', function() {
    // Get the entered OTP
    var enteredOTP = document.getElementById('otp-input').value;

    // Get the generated OTP
    var generatedOTP = localStorage.getItem('otp');

    // Check if entered OTP matches the generated OTP
    if (enteredOTP === generatedOTP) {
        // Display email verified message
        alert('Email verified!');
    } else {
        alert('Invalid OTP. Please try again.');
    }
});

// Initially hide OTP input and verify button
document.querySelector('.email-verify').style.display = 'none';
