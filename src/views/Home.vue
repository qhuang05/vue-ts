<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Test :msg="testMsg" @add="addHandler" />
    <!-- <Test2 /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Test from '@/components/Test.vue';
import Test2 from '@/components/Test2.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld, Test, Test2
  },
  data(){
    return {
      testMsg: 'msg-1'
    }
  },
  methods: {
    addHandler(val){
      console.log('addHandler', val);
      this.testMsg = 'msg-' + parseInt(Math.random()*100);
    }
  }
};
</script>
