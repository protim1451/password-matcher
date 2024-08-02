document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const generatedPasswordDisplay = document.getElementById('generatedPassword');
    const inputDisplay = document.getElementById('inputDisplay');
    const message = document.getElementById('message');
    const keypadButtons = document.querySelectorAll('.keypad-btn');
    const submitBtn = document.getElementById('submitBtn');
    const clearBtn = document.getElementById('clearBtn');
    const backspaceBtn = document.getElementById('backspaceBtn');

    let generatedPassword = '';
    let inputPassword = '';

    function generatePassword() {
        generatedPassword = Math.floor(100000 + Math.random() * 900000).toString();
        generatedPasswordDisplay.textContent = generatedPassword;
        inputPassword = '';
        inputDisplay.textContent = inputPassword;
        message.textContent = '';
    }

    function handleKeypadClick(event) {
        if (inputPassword.length < 6) {
            inputPassword += event.target.textContent;
            inputDisplay.textContent = inputPassword;
        }
    }

    function handleBackspace() {
        inputPassword = inputPassword.slice(0, -1);
        inputDisplay.textContent = inputPassword;
    }

    function handleClear() {
        inputPassword = '';
        inputDisplay.textContent = inputPassword;
    }

    function handleSubmit() {
        if (inputPassword === generatedPassword) {
            message.textContent = 'Password Match Success! 🎉';
            message.style.color = 'green';
        } else {
            message.textContent = 'Password Match failed ❌';
            message.style.color = 'red';
        }
    }

    generateBtn.addEventListener('click', generatePassword);
    keypadButtons.forEach(button => {
        if (button.id !== 'backspaceBtn' && button.id !== 'clearBtn') {
            button.addEventListener('click', handleKeypadClick);
        }
    });
    backspaceBtn.addEventListener('click', handleBackspace);
    clearBtn.addEventListener('click', handleClear);
    submitBtn.addEventListener('click', handleSubmit);
});
