// Guía Interactiva Completa - JavaScript Principal
class InteractiveGuide {
    constructor() {
        this.completedChallenges = [];
        this.challenges = {
            1: { completed: false, unlocked: true },
            2: { completed: false, unlocked: false },
            3: { completed: false, unlocked: false }
        };
        this.init();
    }

    init() {
        // Inicializar event listeners para cada reto
        document.getElementById('submit1').addEventListener('click', () => this.checkChallenge1());
        document.getElementById('submit2').addEventListener('click', () => this.checkChallenge2());
        document.getElementById('submit3').addEventListener('click', () => this.checkChallenge3());
        
        // Configurar estado inicial
        this.updateUI();
    }

    // Reto 1: Función suma
    checkChallenge1() {
        const code = document.getElementById('code1').value.trim();
        const resultDiv = document.getElementById('result1');
        
        try {
            // Verificar que contiene una función suma
            if (!code.includes('function suma') && !code.includes('suma =') && !code.includes('const suma') && !code.includes('let suma')) {
                throw new Error('Debes crear una función llamada "suma"');
            }

            // Crear un contexto para evaluar el código del usuario
            let suma;
            eval(`${code}; if (typeof suma !== 'undefined') { this.userSuma = suma; }`);
            
            // Verificar que la función existe
            if (typeof this.userSuma !== 'function') {
                throw new Error('La función "suma" no está definida correctamente');
            }

            // Probar la función con diferentes valores
            const test1 = this.userSuma(2, 3);
            const test2 = this.userSuma(10, 5);
            const test3 = this.userSuma(-1, 1);
            
            if (test1 !== 5 || test2 !== 15 || test3 !== 0) {
                throw new Error('La función no suma correctamente los números');
            }

            // Reto completado
            this.completeChallenge(1, resultDiv, '¡Excelente! La función suma funciona correctamente.');
            
        } catch (error) {
            this.showError(resultDiv, `Error: ${error.message}`);
        }
    }

    // Reto 2: Números pares
    checkChallenge2() {
        const code = document.getElementById('code2').value.trim();
        const resultDiv = document.getElementById('result2');
        
        try {
            // Evaluar el código del usuario
            let result;
            eval(`result = (function() { ${code} })()`);
            
            // Verificar que el resultado es un array
            if (!Array.isArray(result)) {
                throw new Error('El código debe retornar un array');
            }

            // Verificar que contiene los números pares correctos
            const expectedArray = [2, 4, 6, 8, 10];
            if (result.length !== expectedArray.length) {
                throw new Error(`El array debe tener ${expectedArray.length} elementos`);
            }

            for (let i = 0; i < expectedArray.length; i++) {
                if (result[i] !== expectedArray[i]) {
                    throw new Error(`Elemento incorrecto en posición ${i}. Esperado: ${expectedArray[i]}, Obtenido: ${result[i]}`);
                }
            }

            // Reto completado
            this.completeChallenge(2, resultDiv, '¡Perfecto! Has generado correctamente los números pares del 1 al 10.');
            
        } catch (error) {
            this.showError(resultDiv, `Error: ${error.message}`);
        }
    }

    // Reto 3: Palíndromo
    checkChallenge3() {
        const code = document.getElementById('code3').value.trim();
        const resultDiv = document.getElementById('result3');
        
        try {
            // Verificar que contiene una función esPalindromo
            if (!code.includes('function esPalindromo') && !code.includes('esPalindromo =') && 
                !code.includes('const esPalindromo') && !code.includes('let esPalindromo')) {
                throw new Error('Debes crear una función llamada "esPalindromo"');
            }

            // Crear un contexto para evaluar el código del usuario
            let esPalindromo;
            eval(`${code}; if (typeof esPalindromo !== 'undefined') { this.userEsPalindromo = esPalindromo; }`);
            
            // Verificar que la función existe
            if (typeof this.userEsPalindromo !== 'function') {
                throw new Error('La función "esPalindromo" no está definida correctamente');
            }

            // Probar la función con diferentes casos
            const tests = [
                { input: 'oso', expected: true },
                { input: 'casa', expected: false },
                { input: 'reconocer', expected: true },
                { input: 'javascript', expected: false },
                { input: 'anilina', expected: true }
            ];

            for (const test of tests) {
                const result = this.userEsPalindromo(test.input);
                if (result !== test.expected) {
                    throw new Error(`Error con "${test.input}": esperado ${test.expected}, obtenido ${result}`);
                }
            }

            // Reto completado
            this.completeChallenge(3, resultDiv, '¡Increíble! Tu detector de palíndromos funciona perfectamente.');
            
        } catch (error) {
            this.showError(resultDiv, `Error: ${error.message}`);
        }
    }

    completeChallenge(challengeNumber, resultDiv, message) {
        // Marcar como completado
        this.challenges[challengeNumber].completed = true;
        this.completedChallenges.push(challengeNumber);
        
        // Mostrar mensaje de éxito
        this.showSuccess(resultDiv, message);
        
        // Actualizar UI
        this.updateChallengeStatus(challengeNumber, 'completed');
        
        // Desbloquear siguiente reto
        this.unlockNextChallenge(challengeNumber);
        
        // Verificar si todos los retos están completos
        this.checkAllChallengesComplete();
    }

    unlockNextChallenge(currentChallenge) {
        const nextChallenge = currentChallenge + 1;
        if (nextChallenge <= 3 && !this.challenges[nextChallenge].unlocked) {
            this.challenges[nextChallenge].unlocked = true;
            
            // Habilitar el siguiente reto
            const nextCard = document.getElementById(`challenge${nextChallenge}`);
            const nextTextarea = document.getElementById(`code${nextChallenge}`);
            const nextButton = document.getElementById(`submit${nextChallenge}`);
            
            nextCard.classList.remove('locked');
            nextTextarea.disabled = false;
            nextButton.disabled = false;
            
            this.updateChallengeStatus(nextChallenge, 'unlocked');
            
            // Animación de desbloqueo
            nextCard.style.animation = 'slideIn 0.5s ease-out';
        }
    }

    updateChallengeStatus(challengeNumber, status) {
        const statusElement = document.querySelector(`#challenge${challengeNumber} .challenge-status`);
        const card = document.getElementById(`challenge${challengeNumber}`);
        
        statusElement.className = `challenge-status ${status}`;
        
        switch (status) {
            case 'unlocked':
                statusElement.textContent = '🔓';
                statusElement.classList.add('unlocked');
                break;
            case 'completed':
                statusElement.textContent = '✅';
                statusElement.classList.add('completed');
                card.classList.add('completed');
                break;
            case 'locked':
                statusElement.textContent = '🔒';
                statusElement.classList.add('locked');
                break;
        }
    }

    checkAllChallengesComplete() {
        const allCompleted = Object.values(this.challenges).every(challenge => challenge.completed);
        
        if (allCompleted) {
            this.revealSecretMessage();
        }
    }

    revealSecretMessage() {
        const secretMessage = document.getElementById('secretMessage');
        
        // Pequeño delay para efecto dramático
        setTimeout(() => {
            secretMessage.classList.remove('hidden');
            secretMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Efecto de confeti (simulado con partículas)
            this.createCelebrationEffect();
        }, 1000);
    }

    createCelebrationEffect() {
        // Crear elementos de celebración
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = '10px';
            particle.style.height = '10px';
            particle.style.backgroundColor = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b'][Math.floor(Math.random() * 5)];
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = '-10px';
            
            document.body.appendChild(particle);
            
            // Animación de caída
            const fallDuration = Math.random() * 3 + 2;
            particle.animate([
                { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
                { transform: `translateY(${window.innerHeight + 20}px) rotate(360deg)`, opacity: 0 }
            ], {
                duration: fallDuration * 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }).onfinish = () => {
                particle.remove();
            };
        }
    }

    showSuccess(element, message) {
        element.className = 'result success';
        element.textContent = message;
        element.style.display = 'block';
    }

    showError(element, message) {
        element.className = 'result error';
        element.textContent = message;
        element.style.display = 'block';
    }

    updateUI() {
        // Actualizar estado inicial de todos los retos
        for (let i = 1; i <= 3; i++) {
            const challenge = this.challenges[i];
            if (challenge.completed) {
                this.updateChallengeStatus(i, 'completed');
            } else if (challenge.unlocked) {
                this.updateChallengeStatus(i, 'unlocked');
            } else {
                this.updateChallengeStatus(i, 'locked');
            }
        }
    }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new InteractiveGuide();
    
    // Mensaje de bienvenida en consola
    console.log('%c🚀 Guía Interactiva Completa cargada correctamente!', 
                'color: #667eea; font-size: 16px; font-weight: bold;');
    console.log('%cCompleta los 3 retos para desbloquear el mensaje secreto.', 
                'color: #764ba2; font-size: 12px;');
});