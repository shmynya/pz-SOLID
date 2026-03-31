interface IPhone {
    makeCall(): void;
}

interface ICamera {
    takePhoto(): void;
}

interface IPrinter {
    printDocument(): void;
}

// Тепер Nokia бере лише те, що їй треба
class Nokia3310 implements IPhone {
    makeCall() { console.log("Дзвоню..."); }
}

class iPhone implements IPhone, ICamera {
    makeCall() { console.log("Дзвоню через FaceTime..."); }
    takePhoto() { console.log("Робимо селфі..."); }
}