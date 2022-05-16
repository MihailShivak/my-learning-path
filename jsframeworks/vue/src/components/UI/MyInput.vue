<template>
   <input :value="modelValue" @input="updateInput" type="text">
</template>

<script>
export default{
   name: 'my-input',
   props: {
      modelValue: [String, Number]
   },
   methods:{
      updateInput(event){
         this.$emit('update:modelValue', event.target.value)
      }
   }
}
</script>

<style>
input{
   text-align: center;
   padding: 5px;
   margin: 0 5px 0 5px;
}
</style>