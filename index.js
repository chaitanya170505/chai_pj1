
document.addEventListener('DOMContentLoaded', function() {
        const display = document.querySelector('.display');
        const buttons = document.querySelectorAll('.grid-item');

        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const buttonText = this.textContent;
                buttons.forEach(btn => {
                    btn.classList.remove('button-click-animation');
                });

                
                this.classList.add('button-click-animation');

                if (this.classList.contains('number')) {
                    var audio = new Audio('./audio/button-click.mp3');
                    audio.play();
                  
                    display.textContent += buttonText;
                } else if (this.classList.contains('operation')) {
                    var audio = new Audio('./audio/button-click.mp3');
                    audio.play();
                   
                    const currentExpression = display.textContent;
                    const lastChar = currentExpression[currentExpression.length - 1];

                    
                    if (!isNaN(lastChar)) {
                        display.textContent += buttonText;
                    }
                } else if (this.classList.contains('clear')) {
                    var audio = new Audio('./audio/button-click.mp3');
                    audio.play();

                    display.textContent = '';
                } else if (this.classList.contains('delete')) {
                   var audio = new Audio('./audio/button-click.mp3');
                    audio.play();

                    display.textContent = display.textContent.slice(0, -1);
                } else if (this.classList.contains('equal')) {
                    var audio = new Audio('./audio/button-pressed.mp3');
                    audio.play();

                    const expression = display.textContent;
                    if (expression) {
                        try {
                            const result = eval(expression); 
                            display.textContent = result;
                        } catch (error) {
                            display.textContent = 'Error';
                        }
                    }
                }
            });
        });
    });


    

