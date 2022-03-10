<script setup>
  import { computed, onMounted, reactive, ref } from 'vue';

  //data
  const userInput = ref('')
  let todos = reactive([
    {
      todo: 'Feed a Maju',
      isDone: false,
    },
    {
      todo: 'Play mapleStory',
      isDone: true
    },
  ])
  let filterTodos = reactive([])
  let showErrorText = ref(false)
  let filterBtnActiveIs = ref('all')
  const trashcan = reactive([])

  //handle todos methods
  const clearUserInput = () => {
    userInput.value = ''
  }

  const addTodo = (todo) => {
    if(todo.length) {
      showErrorText.value = false
      todos.push({
        todo: todo,
        isDone: false
      })
      clearUserInput()
    } else {
      showErrorText.value = true
    }
  }

  const editTodo = (todo) => {
    todo.isDone = !todo.isDone
  }

  const deleteTodo = (todo, index) => {
    todos.splice(index, 1)
    trashcan.push(todo)
  }

  const restoreTodo = (todo, index) => {
    todos.push(todo)
    trashcan.splice(index, 1)
  }

  //handle filter
  const isDoneTodos = computed(() => {
    return todos.filter((item) => item.isDone === true)
  })

  const filterBtn = (val) => {
    filterTodos.length = 0
    if(val === 'all') {
      filterTodos.push(todos)
      filterBtnActiveIs.value = 'all'
    } else {
      filterTodos.push(isDoneTodos.value)
      filterBtnActiveIs.value = 'is-done'
    }
  }

  onMounted(() => {
    filterBtn('all')
  })

</script>

<template>
    <div class="todo-list">
      <div class="todo-list__filter-bar">
        <p 
          @click="filterBtn('all')"
          :class="{ 'active': filterBtnActiveIs === 'all' }"
        >全部</p>
        <p 
          @click="filterBtn('is-done')"
          :class="{ 'active': filterBtnActiveIs === 'is-done' }"
        >已完成</p>
      </div>
    <div class="todo-list__add-new-todo">
      <input 
        v-model="userInput"
        placeholder="add some todos..."
        @keyup.enter="addTodo(userInput)"
      >
        <span 
          v-if="userInput.length > 0"
          @click="clearUserInput"
          class="clear-input-btn"
        >&times;</span>
        <span 
          v-if="showErrorText"
          class="error-txt"
        >內文不可為空!</span>
    </div>
    <div class="todo-list__todos-panel">
      <template v-if="!filterTodos.length">加點什麼吧OwO</template>
      <template v-else>
        <ul>
          <li 
            v-for="(todos, i) in filterTodos[0]"
            :key="`todos-${i}`"
            @click="editTodo(todos)"
            :class="{ 'isDone' : !!todos.isDone }"
          >
            <input 
              type="checkbox" 
              :checked="todos.isDone"
            />
            {{ todos.todo }}
            <span 
              @click="deleteTodo(todos, i)"
              class="delete-btn"
            >&times;</span>
          </li>
        </ul>
      </template>
    </div>
  </div>
  <div class="trashcan">
    <p>垃圾桶</p>
    <template v-if="!trashcan.length">目前是空滴</template>
    <template v-else>
      <ul class="trashcan__items">
        <li 
          v-for="(trashItem, i) in trashcan"
          :key="`trashItem-${i}`"
        >
          {{ trashItem.todo }}
          <span 
            @click="restoreTodo(trashItem, i)"
            class="restore-btn"
          >復原</span>
        </li>
      </ul>
    </template>
  </div>
</template>

<style lang="scss">
.todo-list {
  position: relative;
  max-width: 850px;
  margin: auto;
  padding: 10px;
  border: 1px solid;
  &__filter-bar {
    width: 100px;
    position: absolute;
    top: -35px;
    left: 0;
    display: flex;
    justify-content: space-between;
    >p {
      margin: 0;
      padding: 5px;
      border: 1px solid;
      border-radius: 5px;
      font-size: 0.8rem;
      transition: all 0.4s;
      cursor: pointer;
      &.active,
      &:hover {
        background: tomato;
        color: #fff;
      }
    }
  }
  &__add-new-todo {
    position: relative;
    width: 100%;
    text-align: left;
    >input {
      width: 100%;
      padding: 10px;
    }
    .clear-input-btn {
      position: absolute;
      top: 50%;
      right: 5px;
      transform: translate(-50%, -50%);
      font-size: 1.2rem;
      cursor: pointer;
    }
    .error-txt {
      width: 100%;
      font-size: 0.8rem;
      color: red;
    }
  }
  &__todos-panel {
    margin-top: 10px;
    border: 1px solid;
    text-align: left;
    >ul {
      list-style: none;
      margin: 0;
      padding: 0;
      >li {
        position: relative;
        padding: 10px;
        cursor: pointer;
        .delete-btn {
          position: absolute;
          top: 50%;
          right: 0;
          transform: translate(-50%, -50%);
          font-size: 1.2rem;
        }
        &:not(:last-child) {
          border-bottom: 1px solid;
        }
        &.isDone {
          text-decoration: line-through;
          color: gray;
        }
      }
    }
  }
}
.trashcan {
  width: 150px;
  position: absolute;
  bottom: 20px;
  right: 10px;
  border: 1px solid;
  >p {
    border-bottom: 1px solid;
    margin: 0;
    padding: 5px;
  }
  &__items {
    list-style: none;
    margin: 0;
    padding: 0;
    >li {
      padding: 5px;
      .restore-btn {
        font-size: 0.8rem;
        cursor: pointer;
      }
      &:not(:last-child) {
        border-bottom: 1px solid;
      }
    }
  }
}
</style>