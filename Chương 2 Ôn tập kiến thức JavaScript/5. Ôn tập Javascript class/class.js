// calss không phải là object
// class là template để tạo object

// Định nghĩa một lớp có tên là Car
class Car {
    // Hàm constructor để khởi tạo các thuộc tính name và color
    constructor(name, color) {
        this.name = name; // Gán giá trị của tham số name vào thuộc tính name
        this.color = color; // Gán giá trị của tham số color vào thuộc tính color
    }

    // Phương thức để lấy tên của xe
    getName = () => {
        return this.name;
    }

    // Phương thức để lấy màu sắc của xe
    getColor = () => {
        return this.color;
    }
}

// Định nghĩa một lớp con có tên là SuperCar mở rộng từ lớp Car
class SuperCar extends Car {
    // Hàm constructor để khởi tạo các thuộc tính name, color và signature
    constructor(name, color, signature) {
        super(name, color); // Gọi hàm constructor của lớp cha (Car) với các đối số được cung cấp
        this.signature = signature; // Gán giá trị của tham số signature vào thuộc tính signature
    }
}

// Tạo một thể hiện mới của lớp SuperCar với tên là ferrari
const ferrari = new SuperCar('Ferrari', 'Red', 'Ferrari Signature');
// Tạo các thể hiện của lớp Car với tên là bmw và toyota
const bmw = new Car('BMW', 'BLACK');
const toyota = new Car('Toyota', 'Red');
// console.log(JSON.stringify(toyota))
// console.log(JSON.stringify(bmw))

// In đối tượng ferrari ra console
console.log(ferrari);