import { reactive } from 'vue';

export const stateData = reactive({
    form: JSON.parse(localStorage.getItem('landbell_form')) || [],
    setForm(data){
        this.form.push(data);
        localStorage.setItem('landbell_form', JSON.stringify(this.form));
    },
    clearForm(){
        this.form = [];
        localStorage.removeItem('landbell_form');
    }
})