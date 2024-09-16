<template>
  <div class="home">
    <form class="inicioSesion">
    <h1>Iniciar<span> Sesion</span></h1>
    <img src="../assets/pictures/logousuario.png" alt="logo">
    <div class = "usuario">
      <img src="../assets/pictures/usuario.png" alt="usuario">
      <input type="text" placeholder="Numero de control" id="noControl" class="cajaTexto">
      <p></p>
    </div>
    <div class = "contra">
      <img src="../assets/pictures/llave.png" alt="contrasena">
      <input type="password" placeholder="Contraseña" id = "contra" class="cajaTexto">
      <p></p>
    </div>
    <!--El @click.prevent es de axios-->
    <button @click.prevent="login()" class="boton">Iniciar Sesion</button>
  </form>
  </div>
</template>

<script>
      import axios from 'axios';// importamos axios para hacer peticiones http
    //Se usa corchetes para importar una constante, si hubiera mas constantes se separan por comas
      import {URL_DATOS} from '../utils/constantes';
      export default {
        name: 'HomeView',
        components: {},
        data() {
          return {
          };
        },
        created(){

        },
        methods:{
          login: async function(){
            let noControl = document.getElementById('noControl').value;
            let contra = document.getElementById('contra').value;
            let alumno;
            alert(URL_DATOS + '/login/' + noControl + '/' + contra);
            await axios.get(URL_DATOS + '/login/' + noControl + '/' + contra)
                        .then((response)=>{
                          //console.log(response.data);
                          alumno = response.data;
                        })
                        .catch(error => {
                          console.log(error);
                        });
            this.alumno = alumno;
            if (alumno.length !=0) {
              this.$router.push({name: 'about', params: {alumno: alumno}});
            } else {
              alert('Usuario o contraseña incorrectos');
              
            }
          }
        }
      }
</script>

<style lang="css">
  @import url(../assets/css/loginStyles.css);
</style>
