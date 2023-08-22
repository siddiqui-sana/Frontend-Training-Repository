// //class
// class Demo {
//     private demoData: string;
//     constructor() {}
//     public func1(a: number): void {}
// }

// const d = new Demo();
// d.func1(2);

//class
class Demo {
    //readonly can be initialized during the declaration or in the constructor
    private readonly demoData: string;
    static count: number=0;
    constructor() {
        this.demoData = "Demo Data"; 
    }
    public func1(a: number): void {
        this.demoData = "hello";
        Demo.count = 10;
    }
}

const d = new Demo();
d.func1(2);
console.log(Demo.count);