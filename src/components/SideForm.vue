<script setup>
  import { ref } from 'vue';
  import { stateData } from '../states/DataForm';

  const formData = ref({
    type: '',
    label:'',
    fieldName: '',
    options:[],
  });

  const types = [
    'text',
    'date',
    'email',
    'checkbox',
    'select'
  ]

  // Handle the action of adding another option
  const handleAddOption = () => {
    formData.value.options.push('');
  }
  
   // Handle the action of removing one option
  const handleRemoveOption = (index) => {
    formData.value.options.splice(index, 1);
  }

  // Get the form and send it to reactive state
  const handleSubmit = () => {
    const form = formData.value;
    stateData.setForm(form);
    formData.value = {
      type: '',
      label: '',
      fieldName: '',
      options: [],
    };
  }  

</script>

<template>

  <form @submit.prevent="handleSubmit" class="form"> 

    <div class="form_input">
      <label for="input_selector">Select type of field</label>
      <select name="input_selector" v-model="formData.type" required>
        <option v-for="type in types">{{ type }}</option>
      </select>
    </div>

    <div class="form_input">
      <label for="input_label">Label</label>
      <input type="text" name="input_label" placeholder="Label" v-model="formData.label" required/>
    </div>

    <div class="form_input">
      <label for="input_fieldname">Field Name</label>
      <input type="text" name="input_fieldname" placeholder="Field Name" v-model="formData.fieldName" required/>
    </div>

    <div class="form_input" v-show="formData.type == 'select'">
      <label for="input_options">Options</label>
      <div v-for="(option, index) in formData.options" :key="index">
        <input type="text" :name="`input_options[${index}]`" v-model="formData.options[index]" required/>
        <button type="reset" @click="handleRemoveOption(index)">Remove</button>
      </div>
      <button type="button" @click="handleAddOption"> add more options </button>
    </div>

    <button type="submit">Submit</button>
  </form>

</template>