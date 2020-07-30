const foo = 'xxx';
const bar: string = 'xxx';


// 函数
function greeting(name: string, age?: number, gender= '男'): string {
    console.log(`greeting=> `, `${name}, ${age}, ${gender}`);
    return `Hello, ${name},${age},${gender}`;
}
greeting('Tom', 18);
greeting('Tom', 18, '女');


// class类
class MyComp {
    public m1: string;
    private _m2: string;
    protected m3: string;
    readonly m4 = 'm4';
    static m5 = 'm5';
    constructor(private n1 = 'n1') {  // private n1='n1',等同于private _m2并初始化的操作
        this.m1 = 'm1';
        this._m2 = 'm2';
        this.m3 = 'm3';
    }
    get m2() {
        return this._m2;
    }
    set m2(val) {
        this._m2 = val;
    }
}
class SubComp extends MyComp {
    constructor() {
        super();
        // 可以访问this.m1, this.m3, this.m4, this.m2
    }
}
const mycomp = new MyComp(); // 可以访问mycomp.m1, mycomp.m4, mycomp.m2
const subcomp = new SubComp(); // 可以访问subcomp.m1, subcomp.m4, subcomp.m2


// interface接口
interface Person {
    firstname: string;
    lastname: string;
    // run: ()=>string; //约束方法
}
function greeting2(person: Person){
    return 'Hello,' + person.firstname + ' ' + person.lastname;
}
// 使用1: 
// greeting2({firstname:'Harry', lastname: 'Poter'});
// 使用2:
// class Human implements Person {
//     firstname: string = '';
//     lastname: string = '';
// }
// const human = new Human();
// greeting2(human);
// 使用3:
class Human {
    private users: Person[];
    constructor(){
        this.users= [{firstname: 'Sandy', lastname: 'Zhang'}, {firstname: 'Mary', lastname: 'Wang'}]
    }
}



export default foo;
