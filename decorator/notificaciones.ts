// El sistema actual tiene una clase rígida para notificar.
// Si quisiéramos añadir notificaciones por SMS, tendríamos que crear otra clase
// y si quisiéramos una notificación que sea Correo + SMS, la lógica se complicaría.

class Notificador {
    private destinatarios: string[];

    constructor(destinatarios: string[]) {
        this.destinatarios = destinatarios;
    }

    // El único método de notificación actual
    enviarCorreo(mensaje: string): void {
        this.destinatarios.forEach((destinatario) => {
            console.log(`Enviando Correo a ${destinatario}: ${mensaje}`);
        });
    }

    // ¿Qué pasaría si quisiéramos añadir SMS? ¿Y Slack?
    // ¿Y si un usuario quiere recibir notificaciones por Correo y por SMS?
}

// --- Código Cliente ---
console.log('--- Escenario 1: Notificación simple por Correo ---');
const usuarios_escenario1 = ['usuario1@email.com', 'usuario2@email.com'];
const notificadorCorreo = new Notificador(usuarios_escenario1);
notificadorCorreo.enviarCorreo('¡Oferta especial solo por hoy!');

// Este es el problema. ¿Cómo manejamos esto de forma elegante?
console.log('\n--- Escenario 2: Se necesita Correo y SMS (no implementado) ---');
console.log('Actualmente, no podemos combinar notificadores fácilmente.');

export {};