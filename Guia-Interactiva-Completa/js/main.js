// main.js - Control general de interacciones
// Este archivo maneja las interacciones generales y conecta con secret-sequence.js

import { SecretSequence } from './secret-sequence.js';

class MainController {
    constructor() {
        this.secretSequence = new SecretSequence();
        this.init();
    }

    init() {
        console.log('🎮 Controlador principal inicializado');
        
        // Inicializar la secuencia secreta
        this.secretSequence.init();
        
        // Configurar eventos globales
        this.setupGlobalEvents();
        
        // Mostrar instrucciones iniciales
        this.showWelcomeMessage();
    }

    setupGlobalEvents() {
        // Evento para mostrar ayuda con tecla H
        document.addEventListener('keydown', (e) => {
            if (e.key.toLowerCase() === 'h' && e.ctrlKey) {
                e.preventDefault();
                this.showHelp();
            }
        });

        // Evento para resetear progreso con Ctrl+R
        document.addEventListener('keydown', (e) => {
            if (e.key.toLowerCase() === 'r' && e.ctrlKey && e.shiftKey) {
                e.preventDefault();
                this.resetProgress();
            }
        });
    }

    showWelcomeMessage() {
        console.log('%c🌟 ¡Bienvenido a la Guía Interactiva Completa!', 
                    'color: #667eea; font-size: 18px; font-weight: bold;');
        console.log('%c📝 Completa los retos en orden para desbloquear el mensaje secreto', 
                    'color: #764ba2; font-size: 14px;');
        console.log('%c💡 Presiona Ctrl+H para ver ayuda adicional', 
                    'color: #28a745; font-size: 12px;');
    }

    showHelp() {
        const helpMessage = `
🆘 AYUDA - Guía Interactiva Completa

📋 RETOS:
1️⃣ Reto 1: Crear función suma(a, b) que retorne a + b
2️⃣ Reto 2: Generar array [2, 4, 6, 8, 10] (números pares 1-10)
3️⃣ Reto 3: Función esPalindromo(palabra) que retorne true/false

💡 CONSEJOS:
• Los retos se desbloquean secuencialmente
• Usa JavaScript estándar
• Revisa la consola para errores
• El mensaje secreto aparece al completar todos

⌨️ ATAJOS:
• Ctrl+H: Mostrar esta ayuda
• Ctrl+Shift+R: Resetear progreso
        `;
        
        alert(helpMessage);
    }

    resetProgress() {
        if (confirm('¿Estás seguro de que quieres resetear todo el progreso?')) {
            location.reload();
        }
    }

    // Método para ser llamado desde secret-sequence.js
    onChallengeCompleted(challengeNumber) {
        console.log(`✅ Reto ${challengeNumber} completado desde MainController`);
        
        // Aquí se pueden agregar efectos adicionales
        this.addCompletionEffect(challengeNumber);
    }

    addCompletionEffect(challengeNumber) {
        // Efecto visual adicional cuando se completa un reto
        const card = document.getElementById(`challenge${challengeNumber}`);
        if (card) {
            card.style.transform = 'scale(1.02)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 200);
        }
    }

    // Método para ser llamado cuando se revela el mensaje secreto
    onSecretRevealed() {
        console.log('🎉 ¡Mensaje secreto revelado!');
        
        // Cambiar el título de la página
        document.title = '🎉 ¡Completado! - Guía Interactiva';
        
        // Efecto en el favicon (si existiera)
        this.updateFavicon();
    }

    updateFavicon() {
        // Crear un favicon dinámico con emoji
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext('2d');
        
        ctx.font = '24px Arial';
        ctx.fillText('🎉', 4, 24);
        
        const link = document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = canvas.toDataURL('image/x-icon');
        
        // Remover favicon anterior si existe
        const existingFavicon = document.querySelector('link[rel="shortcut icon"]');
        if (existingFavicon) {
            existingFavicon.remove();
        }
        
        document.head.appendChild(link);
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.mainController = new MainController();
});

// Exportar para uso en otros módulos
export { MainController };
