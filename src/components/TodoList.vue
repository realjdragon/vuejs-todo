<template>
  <section>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in this.getTodoItems" :key="todoItem" class="shadow">
        <i class="checkBtn fa fa-check" aria-hidden="true"></i>  
        {{ todoItem }}
        <span class="removeBtn" type="button" @click="removeTodo({name: todoItem, index: index})">
          <i class="fa fa-trash-o" aria-hidden="true"></i>
        </span>
      </li>
    </transition-group>
  </section>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  export default {
    methods: {
      ...mapMutations({
        'removeTodo': 'removeOneItem'
      })
    },
    computed: {
      ...mapGetters(['getTodoItems'])
    }
  }
</script>

<style>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }
  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-move {
    transition: transform 1s;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translate(30px);
  }
</style>