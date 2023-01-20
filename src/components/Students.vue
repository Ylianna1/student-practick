<template>
    <div>
      <input  type="text" placeholder="знайти студента" v-model="inputStydent">     
             <br>
             <table border="1"  сlass="studen" v-for="(qt, index) in filteredStydent" cellpadding="5">
                 <router-link v-bind:to="'/student-info/'+qt.index"><td>{{qt.name}}</td></router-link>
                 <td>{{qt.group}}</td>
                 <td>{{qt.photo}}</td>
                 <td><input type="checkbox" v-model="qt.isDonePr">  </td>
                 <td><img @click="updateStudent(index)" src="" alt="pen"> </td>
                 <td> <a @click="RemoveStudent(index)" >Видалити</a></td>
             </table>
             <form>
                 <input v-model="addst.name" type="text" placeholder="ПІО">
                 <select v-model="addst.group" name="user_profile_color_1">
                     <option >RPZ19 2/9</option>
                     <option >RPZ18 2/9</option>
                 </select>
                 <input v-model="addst.photo" type="text" placeholder="photo">
                 <input v-model="addst.isDonePr" type="checkbox">                
             </form>
             <button @click="AddStudent()">Ok</button>             
    </div>
 </template>
  
 <script>
 import axios from 'axios'
  
 export default {
    props: {
                id: '',
            },
     data() {
        return {
            student: [],
            inputStydent: "",
            addst:{},                      
        }
     },
    mounted: function(){
         axios.get("http://34.82.81.113:3000/students").then((response) =>{
             console.log(response.data);
             this.student = response.data;
         })     
 
     },
     methods: {
         RemoveStudent(studentId) {
             axios.delete("http://34.82.81.113:3000/students/:_id").then(response => {
                 this.student.splice(studentId, 1)
                 alert("Delet student");               
                 return this.student
             })
         },
         AddStudent(){
             axios.post("http://34.82.81.113:3000/students", this.addst)
            .then(data => {
                console.log(data); 
                alert("Add student!"); 
                return this.student             
            })
         },       
     },
     computed:{
         filteredStydent() {
             if (this.inputStydent) {                       
                 return this.student.filter(qt => {
                     return qt.name.includes(this.inputStydent);
                 });
             }
             return this.student
         },
     }
 }
  </script>