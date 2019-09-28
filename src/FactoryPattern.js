const divToRender = document.getElementById('factory-patterns');

const ElectricCar = function (companyName) {
    this.companyName = companyName;
    this.type = 'Electric Car';
    this.display = () => {
        return 'Company: ' + this.companyName + '<br />Type: ' + this.type;
    }
}

const PetrolCar = function (companyName) {
    this.companyName = companyName;
    this.type = 'Petrol Car';
    this.display = () => {
        return 'Company: ' + this.companyName + '<br />Type: ' + this.type;
    }
}

const CarFactory = function () {
    this.create = (companyName, type) => {
        switch (type) {
            case 1:
                return new ElectricCar(companyName);
            case 2:
                return new PetrolCar(companyName);
            default:
                return new PetrolCar(companyName);
        }
    }
}

const carFactory = new CarFactory();
const cars = [];
cars.push(carFactory.create('Tesla', 1));
cars.push(carFactory.create('Porsche', 1));
cars.push(carFactory.create('BMW', 2));
cars.push(carFactory.create('Audi', 2));
cars.push(carFactory.create('Porsche', 2));

let carDiv;
let carDescriptionParagraph;
let carHeading;
cars.forEach((car, index) => {
    carDiv = document.createElement('div');
    carDiv.className = "factory-pattern";
    carHeading = document.createElement('h2');
    carHeading.innerHTML = 'Car ' + (index + 1);
    carDescriptionParagraph = document.createElement('p');
    carDescriptionParagraph.innerHTML = car.display();
    carDiv.appendChild(carHeading);
    carDiv.appendChild(carDescriptionParagraph);
    divToRender.appendChild(carDiv);
});

export { cars };