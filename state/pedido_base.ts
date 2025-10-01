// pedido_base.ts

// Estos son los posibles estados que puede tener un pedido.
type EstadoPedido = 'PENDIENTE' | 'ENVIADO' | 'ENTREGADO';

export class Pedido {
    private estado: EstadoPedido;

    constructor() {
        this.estado = 'PENDIENTE';
        console.log('Nuevo pedido creado en estado PENDIENTE.');
    }

    public getEstado(): EstadoPedido {
        return this.estado;
    }

    // Este método avanza el pedido al siguiente estado en su ciclo de vida.
    public avanzar(): void {
        if (this.estado === 'PENDIENTE') {
            this.estado = 'ENVIADO';
            console.log('El pedido ha sido ENVIADO.');
        } else if (this.estado === 'ENVIADO') {
            this.estado = 'ENTREGADO';
            console.log('El pedido ha sido ENTREGADO.');
        } else if (this.estado === 'ENTREGADO') {
            console.log('El pedido ya está en su estado final (ENTREGADO).');
        }
    }

    // Este método permite cancelar el pedido, pero solo si está PENDIENTE.
    public cancelar(): void {
        if (this.estado === 'PENDIENTE') {
            console.log('El pedido ha sido cancelado.');
            // Aquí podríamos cambiar a un estado "CANCELADO", pero para simplificar,
            // solo mostraremos un mensaje.
        } else if (this.estado === 'ENVIADO') {
            console.log('No se puede cancelar un pedido que ya fue enviado.');
        } else if (this.estado === 'ENTREGADO') {
            console.log('No se puede cancelar un pedido que ya fue entregado.');
        }
    }
}

// --- Ejemplo de uso ---
const miPedido = new Pedido();
console.log(`Estado actual: ${miPedido.getEstado()}`); // PENDIENTE

miPedido.cancelar(); // Debería permitir la cancelación.
console.log('---');

miPedido.avanzar();
console.log(`Estado actual: ${miPedido.getEstado()}`); // ENVIADO

miPedido.cancelar(); // No debería permitirlo.
console.log('---');

miPedido.avanzar();
console.log(`Estado actual: ${miPedido.getEstado()}`); // ENTREGADO

miPedido.avanzar(); // No debería hacer nada más.
