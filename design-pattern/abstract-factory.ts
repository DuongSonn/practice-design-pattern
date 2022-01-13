/**
 * DEFINITION
 * - Abstract factory là 1 creation design pattern giúp giải quyết vấn đề  
 * tạo cả 1 tập hợp sản phẩm mà ko cần khai báo cụ thể concrete classes. Việc khai báo concrete class sẽ nằm ở server
 * - Abstract factory sẽ là 1 interface định nghĩa tất cả các interface để tạo các tập hợp sản phảm khác nhau.
 * Việc tạo 1 tập hợp sản phẩm sẽ được thực hiện bởi 1 concrete class tương ứng cho sản phẩm đấy.
 */

interface AbstractFactory {
    createProductA(): AbstractProductA;
    createProductB(): AbstractProductB;
}

class ConcreteFactory1 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA;
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB;
    }
}

interface AbstractProductA {
    usefulFunctionA(): string;
}

interface AbstractProductB {
    usefulFunctionB(): string;
}

class ConcreteProductA implements AbstractProductA {
    public usefulFunctionA(): string {
        return 'The result of product A';
    }
}

class ConcreteProductB implements AbstractProductB {
    public usefulFunctionB(): string {
        return 'The result of product B';
    }
}

/**
 * This is the code for client. The client codes work with factories and products 
 * only through abstract types: AbstractFactory ans AbstractProduct 
 */
function clientCode(factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();
}

clientCode(new ConcreteFactory1());