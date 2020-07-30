const foo = 'xxx';
const bar: string = 'xxx';

function greeting(name: string, age?: number, gender= '男'): string {
    console.log(`greeting=> `, `${name}, ${age}, ${gender}`);
    return `Hello, ${name},${age},${gender}`;
}
greeting('Tom', 18);
greeting('Tom', 18, '女');


class MyComp {
    public m1: string;
    private m2: string;
    protected m3: string;
    readonly m4 = 'm4';
    static m5 = 'm5';
    constructor(private n1 = 'n1') {
        this.m1 = 'm1';
        this.m2 = 'm2';
        this.m3 = 'm3';
    }
}
class SubComp extends MyComp {
    constructor() {
        super();
        // 可以访问this.m1, this.m3, this.m4
    }
}
const mycomp = new MyComp(); // 可以访问mycomp.m1, mycomp.m4
const subcomp = new SubComp(); // 可以访问subcomp.m1, subcomp.m4

export default foo;
