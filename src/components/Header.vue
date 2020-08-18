<template>
    <header>
        <input
                type="text"
                placeholder="Tap new task..."
                v-model="inputValue">
        <button
                class="submit"
                @click="createNewToDo"
        >+
        </button>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        data: () => {
            return {
                inputValue: ''
            }
        },
        methods: {
            createNewToDo: function () {
                this.$emit('createToDo', this.inputValue)
                this.inputValue = ''
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    header {
        display: flex;
        box-shadow: 0 3px 2px #969592;
    }

    input {
        flex: 1;
        box-sizing: border-box;
        height: 50px;
        text-indent: 15px;
        font-size: 20px;
    }

    .submit {
        height: 50px;
        width: 50px;
        color: #fff;
        border: 0;
        outline: 0;
        cursor: pointer;
        background: #32c950;
        font-size: 30px;
    }

    .submit:hover {
        background: #2aa056;
    }

    .submit:active {
        background: #000;
    }
</style>
