<template>
  <div class="container">
    <div class="div1">
      <input v-model="inputNumber" @keypress="isNumber($event)">
    </div>
    <div class="div2">
      <select v-model="selected">
        <option v-bind:value="'prime'">是否質數</option>
        <option v-bind:value="'fb'">是否費氏數列</option>
      </select>
    </div>
    <div class="div3">
      {{result}}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
  },
  data(){
    return {
      selected: 'prime',
      inputNumber: null,
      result: null
    }
  },
  mounted(){
    this.checkNumber(this.selected, this.inputNumber)
  },
  methods:{
    isNumber(e){
      const keysAllowed= ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      const keyPressed = e.key;
    if (!keysAllowed.includes(keyPressed)) {
           e.preventDefault()
    }
    },
    isPrime(n){
      if(n < 2) return false;
      for(let i = 2; i < n; i++){
        if(n % i === 0) return false;
      }
      return true;
    },
    isFb(n){
      const arr = [0, 1];
      let ans = false
      for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
        if(arr[i] > n && n != arr[i]) {
          break;
        }else if(arr[i] == n){
          ans = true;
          break;
        }
      }
      return ans;
    },
    checkNumber(type, number){
      if(Number(number) || number === 0) {
        if(type === 'prime'){
          this.result = this.isPrime(number)
        }else if(type === 'fb'){
          this.result = this.isFb(number)
        }
      }else{
        this.result = '不是數字'
      }
    }
  },
  watch:{
    inputNumber:{
      handler(val){
        this.checkNumber(this.selected, val)
      },
    },
    selected:{
      handler(val){
        this.checkNumber(val, this.inputNumber)
      },
    }
  }
}
</script>
<style scoped>
.container {
  display: flex;
  width: 100%;
  min-width: 600px;
  height: 80vh;
  padding: 0;
  margin: 0;
}
.div1 {
  min-width: 200px;
  width: 200px;
  height:100%;
}
.div2 {
  width: 100%;
  min-width: 100px;
  height:100%;
}
.div3 {
  min-width: 300px;
  width: 300px;
  height:100%;
}
</style>
