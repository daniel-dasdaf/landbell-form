<script setup>
    import { ref } from 'vue'
    import { stateData } from '../states/DataForm';

    const form = ref(Object.fromEntries(
        stateData.form.map(input => {
            return input.type === 'checkbox' ? [input.fieldName, false ] : [input.fieldName, ''];
        })
    ));

    const handleSubmit = () => {
        console.log(JSON.stringify(form.value))
    }
</script>

<template>
    <div v-if="stateData.form.length >= 1">
        <form class="form" @submit.prevent="handleSubmit">
            <div class="form_input" v-for="input in stateData.form">
                <label :for="input.fieldName">{{ input.label }}</label>
                <select v-if="input.type == 'select'" :name="input.fieldName" v-model="form[input.fieldName]"  :key="input.fieldName" required>
                    <option v-for="option in input.options" :key="option">{{ option }}</option>
                </select>
                <input v-else :type="input.type" :name="input.fieldName" v-model="form[input.fieldName]" required>
            </div>
            <button type="button" @click="stateData.clearForm">Clear</button>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<style scoped>

</style>