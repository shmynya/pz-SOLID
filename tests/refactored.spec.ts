import { OrderProcessor } from "../src/refactored/OrderProcessor";
import { INotification } from "../src/interfaces/Notification";

describe("OrderProcessor SOLID Test", () => {
    test("повинен викликати метод send у сервісі сповіщень", () => {
        // Створюємо мок-об'єкт, який імітує інтерфейс INotification
        const mockNotificationService: INotification = {
            send: jest.fn() // Спеціальна функція Jest для відстеження викликів
        };

        const processor = new OrderProcessor(mockNotificationService);
        const orderId = "12345";

        processor.process(orderId);

        // Перевіряємо, чи був викликаний метод send
        expect(mockNotificationService.send).toHaveBeenCalledWith(
            expect.stringContaining(orderId)
        );
    });
});