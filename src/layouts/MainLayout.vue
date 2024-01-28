<script setup>
    import MainForm from '../components/MainForm.vue';
    import SideForm from '../components/SideForm.vue';
</script>

<template>
    <div class="wrapper">
        <MainForm/>
        <SideForm/>
    </div>
</template>

<style scoped>
.wrapper{
    display:flex;
    flex-direction: row;
    gap: 30px;
}
</style>