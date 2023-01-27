<template>
   {{student.name}}
   Робота {{isDonePrOfStudent}}
</template>

<script>
import axios from 'axios'
  
export default {
    props: {
        id: '',
    },
    data(){
        return{
            student
        };
    },
    mounted: function(){
         axios.get("http://34.82.81.113:3000/students"+this.id).then((response) =>{
             this.student = response.data;
         }) ;
    },
    computed: {
    isDonePrOfStudent() {
        return this.student.isDonePr ? 'здана' : 'не здана'
    }
    }
}    
</script>

<style scoped>
</style>