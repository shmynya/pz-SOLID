abstract class BaseTransport {
    abstract move(): void;
}

class MotorizedTransport extends BaseTransport {
    startEngine(): void {
        console.log("Двигун заведено");
    }
    move(): void {
        this.startEngine();
        console.log("Машина їде");
    }
}

class ManualTransport extends BaseTransport {
    move(): void {
        console.log("Крутимо педалі. Велосипед їде");
    }
}