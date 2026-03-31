class Transport {
    startEngine(): void {
        console.log("Двигун заведено");
    }
}

class Car extends Transport {}

class Bicycle extends Transport {
    startEngine(): void {
        // Помилка! У велосипеда немає двигуна. 
        // Ми змушені ламати логіку базового класу.
        throw new Error("У велосипеда немає двигуна!"); 
    }
}