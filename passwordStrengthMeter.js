// this line calls an imaginary class strength meter which will contain all styles for frontend.
const strengthMeter = document.getElementById('strength-meter');
const passwordInput = document.getElementById('password-input');
const reasonsContainer = document.getElementById('reasons');

// this will call the function whenever we change our passsword in real time
// and also will display all the outcomes. 
passwordInput.addEventListener('input', updateStrengthMeter)
updateStrengthMeter()
function updateStrengthMeter() {
    const weakness = calculatePassswordStrength(passwordInput.value)
    let strength = 100
    reasonsContainer.innerHTML = ''
    weaknesses.forEach(weakness => {
        if (weakness == null) return
        strength -= weakness.deduction;
        const messageElement = document.createElement('div')
        messageElement.innerText = weakness.message;
        reasonsContainer.appendChild()
    })
    strengthMeter.style.setProperty('--strength', strength);
}

// Main function which will calculate the strength of the passwords.
function calculatePassswordStrength(password){
    const weaknesses = [];
    weaknesses.push(lengthWeakness(password));
    weaknesses.push(lowercaseWeakness(password));
    weaknesses.push(uppercaseWeakness(password));
    weaknesses.push(numberWeakness(password));
    weaknesses.push(specialCharacterWeakness(password));
    weaknesses.push(repeatCharacterWeakness(password));
    return weaknesses;
}
// For length weakness issues.
function lengthWeakness(password){
    // length of your entered password gets stored here!
    const length = password.length;

    // if your entered password is too short, it will return the error message.
    if (length <= 5) {
        return {
            message: 'Your password is too short',
            deduction: 40
        }
    }

    if (length <= 10) {
        return {
            message: 'Your password could be longer',
            deduction: 15
        }

    }

}

function lowercaseWeakness(password){
    return characterTypeWeakness(password, /[a-z]/g, 'lowercase characters')    
}

function uppercaseWeakness(password){
    return characterTypeWeakness(password, /[A-Z]/g, 'uppercase characters') 
}
function numberWeakness(password){
    return characterTypeWeakness(password, /[0-9]/g, 'numbers') 
}
function specialCharacterWeakness(password){
    return characterTypeWeakness(password, /[^0-9a-zA-Z\s]/g, 'special characters') 
}

function characterTypeWeakness(password, regex, type) {
    const matches = password.match(regex) || [];
    if (matches.length === 0) {
        return {
            message: `Your message has no ${type}`,
            deduction: 20
        }
    }

    if (matches.length <= 2) {
        return {
            message: `Your password could use more ${type}`,
            deduction: 5
        }
    }

}
function repeatCharacterWeakness(password){
    const matches = password.match(/(.)\1/g) || [];
    if(matches.length > 0) {
        return {
            message: 'Your password has repeat characters',
            deduction: matches.length * 10
        }
    }
}
