<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fa fa-plus" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newTodoItem: ''
      }
    },
    methods: {
      addTodo() {
        if (this.newTodoItem !== '') {
          var value = this.newTodoItem && this.newTodoItem.trim();
          this.$store.commit('addOneItem', value);
          this.clearInput();
        } 
      },
      clearInput() {
        this.newTodoItem = '';
      }
    }
  }
</script>

<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, rgb(251, 185, 100), rgb(163, 12, 156));
    display: inline-block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn {
    color: white;
    vertical-align: middle;
  }
</style>