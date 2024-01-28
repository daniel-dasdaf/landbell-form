import { reactive } from 'vue';

export const stateData = reactive({
    form: JSON.parse(localStorage.getItem('test_form')) || [],
    setForm(data){
        this.form.push(data);
        localStorage.setItem('test_form', JSON.stringify(this.form));
    },
    clearForm(){
        this.form = [];
        localStorage.removeItem('test_form');
    }
})