const display = document.getElementById('display');

        function appendToDisplay(value) {
            display.value += value;
        }

        function clearDisplay() {
            display.value = '';
        }

        function backspace() {
            display.value = display.value.slice(0, -1);
        }

        function calculate() {
            try {
                // Replace × with * for proper evaluation
                let expression = display.value.replace(/×/g, '*');
                display.value = eval(expression);
            } catch (error) {
                display.value = 'Error';
                setTimeout(clearDisplay, 1000);
            }
        }

        // Keyboard support
        document.addEventListener('keydown', function(event) {
            const key = event.key;
            
            if (/[0-9+\-*/.]/.test(key)) {
                appendToDisplay(key);
                event.preventDefault();
            } else if (key === 'Enter' || key === '=') {
                calculate();
                event.preventDefault();
            } else if (key === 'Escape' || key === 'Delete') {
                clearDisplay();
                event.preventDefault();
            } else if (key === 'Backspace') {
                backspace();
                event.preventDefault();
            } else if (key === '/') {
                appendToDisplay('/');
                event.preventDefault();
            }
        });