const foo = 'xxx';
const bar: string = 'xxx';


// 函数
function greeting(name: string, age?: number, gender= '男'): string {
    return `${name},${age},${gender}`;
}
console.log(greeting('Tom', 18));
console.log(greeting('Tom', 18, '女'));


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


// 泛型
// 泛型函数
function funny<T>(args: T): T {
    return args;
}
function funny2<T>(args: T[]): T[] {
    return args;
}
console.log('funny', funny('aaa'));
console.log('funny', funny([{id: 1, name: 'aaa'}]));
console.log('funny2',funny2(['a', 'b', 'c']));
// 泛型接口
interface R1<T> {
    ok: 0|1,
    data: T[]
}
function getData<T>(): R1<T> {
    const data: any[] = [{id:1, name: 'x'}, {id:2, name: 'y'}];
    return {ok: 1, data};
}
console.log('getData', getData())
function getData2<T>(): Promise<R1<T>> {
    const data: any[] = [{id:1, name: 'x'}, {id:2, name: 'y'}];
    return new Promise(resolve => resolve({ok: 1, data}));
}
console.log('getData2', getData2());
// 泛型类
class GenericNumber<T> {
    public list: T[] = [];
    add(value: T): void {
        this.list.push(value);
    }
}
const g1 = new GenericNumber<number>();
g1.add(10);
console.log('list', g1.list);


// 装饰器

export default foo;
