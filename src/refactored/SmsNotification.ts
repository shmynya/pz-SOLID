import { INotification } from "../interfaces/Notification";

export class SmsNotification implements INotification {
    send(message: string): void {
        console.log(`Sending SMS: ${message}`);
    }
}