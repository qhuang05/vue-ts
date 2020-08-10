<template>
    <div>
        <div style="background:#efefef;padding:15px;">
            typescript在vuex中的使用：(模块化)
            {{count}}、{{filterCount}}、{{type}}
            <button @click="add">add</button>
            <button @click="asyncAdd">asyncAdd</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from 'vue-property-decorator';
import { State, Getter, Mutation, Action } from 'vuex-class';

@Component
export default class Test2 extends Vue {
    @State('count', {namespace: "count"})
    private count!: Number
    @State('countType', {namespace: "count"})
    private type!: String
    @Getter('filterCount', {namespace: "count"})
    private filterCount!: Number
    @Mutation('countAdd', {namespace: 'count'}) countAdd!: Function
    public add() {
        this.countAdd();
    }
    @Action('countAddAsync', {namespace: 'count'}) countAddAsync!: Function
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