/* eslint-disable vue/valid-template-root */
// eslint-disable-next-line vue/valid-template-root
<template>
  <div class="container">
    <input v-model="inputWrods">
    <div></div>
    <div  style="border:1px black solid; padding:2px; margin:4px; display: inline-block;" v-for="(word) in showData" :key="word">{{word}}</div>
  </div>
</template>

<script>
  export default{
  name: 'testTwo',
  components: {
  },
  data(){
    return {
      apiData: [],
      inputWrods: '',
      showData: []
    }
  },
  mounted(){
  fetch('https://api.publicapis.org/categories')
  .then((response)=> {
    return response.json()
  }).then((response)=> {
    this.apiData = response.categories
    this.showData = this.apiData.filter(item=>{
      if(this.fuzzyMatch(this.inputWrods, item.toLowerCase())){
        return item
      }
    })
  })
  },
  methods:{
    fuzzyMatch(pattern, str) {
      pattern = '.*' + pattern.split('').join('.*') + '.*';
      const re = new RegExp(pattern);
      return re.test(str);
    }
  },
  watch:{
    inputWrods:{
      handler(val){
        this.showData = this.apiData.filter(item=>{
          if(this.fuzzyMatch(val, item.toLowerCase())){
            return item
          }
        })
      },
    }
  }
}
</script>

<style scoped>
.container{
  
}
</style>