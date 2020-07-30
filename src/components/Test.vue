<template>
    <ul>
        <li v-for="item in list" :key="item">{{item}}</li>
    </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Test extends Vue {
    // private list: string[];
    // constructor() {
    //     super();
    //     this.list = ['hello', 'typescript'];
    // }
    private list = ['hello', 'typescript2'];
}
</script>

<style>

</style>