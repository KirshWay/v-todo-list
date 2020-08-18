<template>
    <section class="d-flex flex-column">
        <div id="todo" class="card" v-for="todo in todos" :key="todo.id">
            <div class="d-flex align-items-center">
                <input type="checkbox" class="ml-3 checkbox" name="todo" v-if="todo.done" checked>
                <input type="checkbox" class="ml-3 checkbox" name="todo" v-else>
                <label for="name" class="ml-2 p-3">
                    {{todo.name}}
                </label>
            </div>
            <button class="remove" @click="() => removeToDo(todo.id)">Remove task</button>
        </div>
    </section>
</template>

<script>
    export default {
        name: "ToDoS",
        props: ['todos'],
        methods: {
            removeToDo: function (id) {
                this.$emit('removeToDo', id)
            }
        }
    }
</script>

<style scoped>
    .checkbox {
        transform:scale(1.6);
        opacity:0.9;
    }
    label {
        margin: 0;
        font-size: 23px;
    }

    .remove {
        color: #fff;
        border: 0;
        outline: 0;
        cursor: pointer;
        background: #32c950;
        font-size: 30px;
    }

    .remove:hover {
        background: #2aa056;
    }

    .remove:active {
        background: #000;
    }
</style>