<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>  
    <TodoFooter></TodoFooter>        
  </div>  
</template>

<script>
  import Firebase from 'firebase'

  let config = {
    apiKey: "AIzaSyD5Jo1TpVr4MfE2rOMdteig9M85rahgmHQ",
    authDomain: "todoapp-2f9c9.firebaseapp.com",
    databaseURL: "https://todoapp-2f9c9.firebaseio.com",
    projectId: "todoapp-2f9c9",
    storageBucket: "todoapp-2f9c9.appspot.com",
    messagingSenderId: "201137854947"
  };

  let app = Firebase.initializeApp(config);

  import TodoHeader from './components/TodoHeader.vue';
  import TodoInput from './components/TodoInput.vue';
  import TodoList from './components/TodoList.vue';
  import TodoFooter from './components/TodoFooter.vue';  

  export default {
    components: {
      TodoHeader,
      TodoInput,
      TodoList,
      TodoFooter
    }
  }
</script>

<style>
  body {
    text-align: center;
    background-color: rgb(246, 246, 248);
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
  }
</style>