// secret-sequence.js - Lógica de desbloqueo y verificación de retos
// Este archivo maneja la secuencia secreta y validación de los retos

class SecretSequence {
    constructor() {
        this.completedChallenges = [];
        this.challenges = {
            1: { completed: false, unlocked: true },
            2: { completed: false, unlocked: false },
            3: { completed: false, unlocked: false }
        };
        this.secretRevealed = false;
    }

    init() {
        console.log('🔐 Sistema de secuencia secreta inicializado');
        this.setupEventListeners();
        this.updateUI();
    }

    setupEventListeners() {
        // Event listeners para cada botón de verificación
        document.getElementById('submit1')?.addEventListener('click', () => this.validateChallenge1());
        document.getElementById('submit2')?.addEventListener('click', () => this.validateChallenge2());
        document.getElementById('submit3')?.addEventListener('click', () => this.validateChallenge3());
    }

    // Validación del Reto 1: Función suma
    validateChallenge1() {
        const code = document.getElementById('code1').value.trim();
        const resultDiv = document.getElementById('result1');
        
        if (!code) {
            this.showError(resultDiv, 'Por favor, escribe tu código antes de verificar.');
            return;
        }

        try {
            // Crear un contexto aislado para evaluar el código
            const testFunction = new Function(code + '; return suma;');
            const suma = testFunction();
            
            if (typeof suma !== 'function') {
                throw new Error('Debes definir una función llamada "suma"');
            }

            // Casos de prueba
            const tests = [
                { a: 2, b: 3, expected: 5 },
                { a: 10, b: 5, expected: 15 },
                { a: -1, b: 1, expected: 0 },
                { a: 0, b: 0, expected: 0 },
                { a: 100, b: 200, expected: 300 }
            ];

            for (const test of tests) {
                const result = suma(test.a, test.b);
                if (result !== test.expected) {
                    throw new Error(`Error: suma(${test.a}, ${test.b}) devolvió ${result}, esperado ${test.expected}`);
                }
            }

            this.completeChallenge(1, resultDiv, '🎉 ¡Excelente! La función suma funciona correctamente.');
            
        } catch (error) {
            this.showError(resultDiv, `❌ ${error.message}`);
        }
    }

    // Validación del Reto 2: Números pares
    validateChallenge2() {
        const code = document.getElementById('code2').value.trim();
        const resultDiv = document.getElementById('result2');
        
        if (!code) {
            this.showError(resultDiv, 'Por favor, escribe tu código antes de verificar.');
            return;
        }

        try {
            // Evaluar el código en un contexto que retorne el resultado
            const testFunction = new Function(`
                ${code}
                // Si no hay return explícito, intentar evaluar la última expresión
                if (typeof result !== 'undefined') return result;
                // Buscar arrays en el código
                const lines = \`${code}\`.split('\\n');
                for (let line of lines) {
                    if (line.includes('[') && line.includes(']')) {
                        try {
                            return eval(line.trim().replace(/;$/, ''));
                        } catch(e) {}
                    }
                }
                throw new Error('No se encontró un array válido en el código');
            `);
            
            const result = testFunction();
            
            if (!Array.isArray(result)) {
                throw new Error('El código debe generar un array');
            }

            const expected = [2, 4, 6, 8, 10];
            if (result.length !== expected.length) {
                throw new Error(`El array debe tener ${expected.length} elementos, pero tiene ${result.length}`);
            }

            for (let i = 0; i < expected.length; i++) {
                if (result[i] !== expected[i]) {
                    throw new Error(`Posición ${i}: esperado ${expected[i]}, obtenido ${result[i]}`);
                }
            }

            this.completeChallenge(2, resultDiv, '🎉 ¡Perfecto! Has generado correctamente los números pares del 1 al 10.');
            
        } catch (error) {
            this.showError(resultDiv, `❌ ${error.message}`);
        }
    }

    // Validación del Reto 3: Palíndromo
    validateChallenge3() {
        const code = document.getElementById('code3').value.trim();
        const resultDiv = document.getElementById('result3');
        
        if (!code) {
            this.showError(resultDiv, 'Por favor, escribe tu código antes de verificar.');
            return;
        }

        try {
            // Crear contexto para evaluar la función
            const testFunction = new Function(code + '; return esPalindromo;');
            const esPalindromo = testFunction();
            
            if (typeof esPalindromo !== 'function') {
                throw new Error('Debes definir una función llamada "esPalindromo"');
            }

            // Casos de prueba exhaustivos
            const tests = [
                { input: 'oso', expected: true, description: 'palabra simple' },
                { input: 'casa', expected: false, description: 'palabra no palíndromo' },
                { input: 'reconocer', expected: true, description: 'palabra larga palíndromo' },
                { input: 'javascript', expected: false, description: 'palabra larga no palíndromo' },
                { input: 'anilina', expected: true, description: 'otro palíndromo' },
                { input: 'a', expected: true, description: 'letra única' },
                { input: 'aa', expected: true, description: 'dos letras iguales' },
                { input: 'ab', expected: false, description: 'dos letras diferentes' }
            ];

            for (const test of tests) {
                const result = esPalindromo(test.input);
                if (result !== test.expected) {
                    throw new Error(`Error con "${test.input}" (${test.description}): esperado ${test.expected}, obtenido ${result}`);
                }
            }

            this.completeChallenge(3, resultDiv, '🎉 ¡Increíble! Tu detector de palíndromos funciona perfectamente.');
            
        } catch (error) {
            this.showError(resultDiv, `❌ ${error.message}`);
        }
    }

    completeChallenge(challengeNumber, resultDiv, message) {
        // Marcar como completado
        this.challenges[challengeNumber].completed = true;
        this.completedChallenges.push(challengeNumber);
        
        // Mostrar mensaje de éxito
        this.showSuccess(resultDiv, message);
        
        // Actualizar estado visual
        this.updateChallengeStatus(challengeNumber, 'completed');
        
        // Desbloquear siguiente reto
        this.unlockNextChallenge(challengeNumber);
        
        // Verificar si todos están completos
        this.checkSequenceComplete();
        
        // Notificar al controlador principal si existe
        if (window.mainController) {
            window.mainController.onChallengeCompleted(challengeNumber);
        }
    }

    unlockNextChallenge(currentChallenge) {
        const nextChallenge = currentChallenge + 1;
        
        if (nextChallenge <= 3 && !this.challenges[nextChallenge].unlocked) {
            this.challenges[nextChallenge].unlocked = true;
            
            // Actualizar UI del siguiente reto
            const nextCard = document.getElementById(`challenge${nextChallenge}`);
            const nextTextarea = document.getElementById(`code${nextChallenge}`);
            const nextButton = document.getElementById(`submit${nextChallenge}`);
            
            if (nextCard && nextTextarea && nextButton) {
                nextCard.classList.remove('locked');
                nextTextarea.disabled = false;
                nextButton.disabled = false;
                
                this.updateChallengeStatus(nextChallenge, 'unlocked');
                
                // Efecto de desbloqueo
                nextCard.style.animation = 'slideIn 0.6s ease-out';
                
                // Scroll suave al siguiente reto
                setTimeout(() => {
                    nextCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 300);
            }
        }
    }

    updateChallengeStatus(challengeNumber, status) {
        const statusElement = document.querySelector(`#challenge${challengeNumber} .challenge-status`);
        const card = document.getElementById(`challenge${challengeNumber}`);
        
        if (!statusElement || !card) return;
        
        statusElement.className = `challenge-status ${status}`;
        
        switch (status) {
            case 'unlocked':
                statusElement.textContent = '🔓';
                break;
            case 'completed':
                statusElement.textContent = '✅';
                card.classList.add('completed');
                break;
            case 'locked':
                statusElement.textContent = '🔒';
                break;
        }
    }

    checkSequenceComplete() {
        const allCompleted = Object.values(this.challenges).every(challenge => challenge.completed);
        
        if (allCompleted && !this.secretRevealed) {
            this.revealSecretMessage();
        }
    }

    revealSecretMessage() {
        this.secretRevealed = true;
        const secretMessage = document.getElementById('secretMessage');
        
        if (secretMessage) {
            // Delay dramático
            setTimeout(() => {
                secretMessage.classList.remove('hidden');
                secretMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Efectos especiales
                this.triggerCelebration();
                
                // Notificar al controlador principal
                if (window.mainController) {
                    window.mainController.onSecretRevealed();
                }
                
                console.log('🎊 ¡SECUENCIA COMPLETA! Mensaje secreto revelado.');
                
            }, 1500);
        }
    }

    triggerCelebration() {
        // Crear partículas de celebración
        this.createConfetti();
        
        // Cambiar colores de fondo temporalmente
        this.celebrationColorEffect();
    }

    createConfetti() {
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#e056fd', '#686de0'];
        
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.cssText = `
                    position: fixed;
                    width: ${Math.random() * 10 + 5}px;
                    height: ${Math.random() * 10 + 5}px;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    left: ${Math.random() * window.innerWidth}px;
                    top: -10px;
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 10000;
                `;
                
                document.body.appendChild(confetti);
                
                // Animación de caída
                const animation = confetti.animate([
                    { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
                    { transform: `translateY(${window.innerHeight + 50}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
                ], {
                    duration: Math.random() * 2000 + 3000,
                    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                });
                
                animation.onfinish = () => confetti.remove();
                
            }, i * 100);
        }
    }

    celebrationColorEffect() {
        const body = document.body;
        const originalBackground = body.style.background;
        
        const colors = [
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
        ];
        
        let colorIndex = 0;
        const interval = setInterval(() => {
            body.style.background = colors[colorIndex % colors.length];
            colorIndex++;
            
            if (colorIndex >= 8) { // 2 ciclos
                clearInterval(interval);
                body.style.background = originalBackground;
            }
        }, 500);
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
        // Configurar estado inicial de todos los retos
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

    // Método para resetear el progreso (útil para testing)
    reset() {
        this.completedChallenges = [];
        this.challenges = {
            1: { completed: false, unlocked: true },
            2: { completed: false, unlocked: false },
            3: { completed: false, unlocked: false }
        };
        this.secretRevealed = false;
        
        // Resetear UI
        document.getElementById('secretMessage')?.classList.add('hidden');
        
        // Resetear todos los retos
        for (let i = 1; i <= 3; i++) {
            const card = document.getElementById(`challenge${i}`);
            const textarea = document.getElementById(`code${i}`);
            const button = document.getElementById(`submit${i}`);
            const result = document.getElementById(`result${i}`);
            
            if (i > 1) {
                card?.classList.add('locked');
                if (textarea) textarea.disabled = true;
                if (button) button.disabled = true;
            }
            
            card?.classList.remove('completed');
            if (result) result.style.display = 'none';
            if (textarea) textarea.value = '';
        }
        
        this.updateUI();
        console.log('🔄 Progreso reseteado');
    }
}

// Exportar para uso en otros módulos
export { SecretSequence };
