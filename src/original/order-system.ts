class OrderManager {
    processOrder(order: any) {
        // Порушення SRP: логіка обчислення + логіка збереження + сповіщення
        const total = order.price * order.quantity;
        console.log(`Saving to MySQL database: ${order.id}`);
        console.log(`Sending SMS notification to customer...`);
    }
}

// Порушення LSP: Спадкоємець ламає логіку базового класу
class Bird {
    fly() { console.log("Я лечу!"); }
}
class Penguin extends Bird {
    fly() { throw new Error("Я не літаю!"); }
}

// Порушення ISP: Інтерфейс занадто великий
interface ISmartDevice {
    print(): void;
    fax(): void;
}
class SimplePrinter implements ISmartDevice {
    print() { console.log("Друкую..."); }
    fax() { throw new Error("У мене немає факсу!"); }
}