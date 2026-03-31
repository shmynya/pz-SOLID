interface IVerySmartDevice {
    makeCall(): void;
    takePhoto(): void;
    printDocument(): void; // Зайвий метод для звичайного телефона
}

class OldNokia implements IVerySmartDevice {
    makeCall() { console.log("Дзвоню..."); }
    takePhoto() { throw new Error("Немає камери"); }
    printDocument() { throw new Error("Не вмію друкувати"); }
}