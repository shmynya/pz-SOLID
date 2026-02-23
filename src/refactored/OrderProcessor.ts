import { INotification } from "../interfaces/Notification";

export class OrderProcessor {
    // Ми не створюємо сервіс сповіщень всередині, а передаємо його (Dependency Injection)
    constructor(private notificationService: INotification) {}

    process(orderId: string): void {
        console.log(`Обробка замовлення №${orderId}...`);
        
        // Використовуємо інтерфейс, не знаючи, що це саме SMS (DIP)
        this.notificationService.send(`Замовлення №${orderId} успішно оброблено!`);
    }
}