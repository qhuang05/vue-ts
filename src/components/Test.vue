<template>
    <div>
        <h3>{{msg}}</h3>
        <p>{{msg2}}</p>
        <input type="text" v-model="keyword" @keydown.enter="addToList" />
        <ul class="list-wrap">
            <li v-for="item in list" :key="item">{{item}}</li>
        </ul>
        <div style="background:#efefef;padding:15px;">
            typescript在vuex中的使用：
            {{count}}、{{filterCount}}、{{type}}
            <button @click="add">add</button>
            <button @click="asyncAdd">asyncAdd</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator';
import { State, Getter, Mutation, Action } from 'vuex-class';

@Component({
    // vue的所有配置都可以写在这里。
    // 通常建议放置跟组件数据无关的配置项, 如components等; 跟组件数据相关的可以放在class里面，如props,data等;
    components: {},
    // props: {
    //     msg: {
    //         type: String,
    //         default: ''
    //     }
    // }
})
export default class Test extends Vue {
    @Prop({type:String, default:''})
    private msg!: string;
    // private list: string[];
    // constructor() {
    //     super();
    //     this.list = ['hello', 'typescript'];
    // }
    private list: string[] = ['hello', 'typescript'];
    private keyword: string = '';
    get msg2(){
        return this.msg.replace(/msg-/, '');
    }
    get list2(){
        return JSON.stringify(this.list);
    }
    @Emit('add')
    private addToList(){
        let ret = {
            id: this.list.length+1,
            name: this.keyword
        }
        this.list.push(this.keyword);
        this.keyword = '';
        return ret
    }
    @Watch('list2', {immediate: false, deep: true})
    private listChange(newVal, oldVal) {
        console.log('list changed => ', JSON.parse(oldVal), JSON.parse(newVal));
    }
    @Watch('msg')
    private msgChange(newVal, oldVal) {
        console.log('msg changed => ', oldVal, newVal);
    }
    private async created(){
        console.log('Test created.');
    }

    // 以下是vuex相关(不使用模块)
    @State 
    private count!: Number
    @Getter
    private filterCount!: Number
    // @State(state=>state.countType)
    @State('countType')
    private type!: String
    @Mutation countAdd: any;
    private add() {
        this.countAdd()
    }
    @Action countAddAsync: any;
    private async asyncAdd() {
        await this.countAddAsync(2);
    }
}
</script>

<style scoped>
    .list-wrap li{
        list-style: none;
    }
</style>