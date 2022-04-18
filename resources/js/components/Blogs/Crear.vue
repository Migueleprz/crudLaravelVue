<template>
    <div>
        <div class="row mt-3 mb-3">
           <div class="col">
               <div class="card mt-3">
                   <div class="card-header bg-primary text-white"><h2>Crear Libros</h2></div>
                   <form class="mx-2 my-2" @submit.prevent="save">
                       <div class="mb-3">
                           <label for="exampleFormControlInput1" class="form-label">Titulo</label>
                           <input
                               type="text"
                               class="form-control"
                               id="exampleFormControlInput1"
                               placeholder=""
                               v-model="blog.titulo"
                           >
                       </div>
                       <div class="mb-3">
                           <label for="exampleFormControlTextarea1" class="form-label">Descripción</label>
                           <textarea
                               class="form-control"
                               id="exampleFormControlTextarea1"
                               rows="3"
                               v-model="blog.contenido"
                           ></textarea>
                       </div>
                       <div class="mb-2">
                           <button type="submit" class="btn btn-primary mx-2">Guardar</button>
                           <button type="reset" class="btn btn-secondary">Cancelar</button>
                       </div>
                   </form>
               </div>
           </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Crear",
        data(){
            return{
                blog:{
                    titulo:'',
                    contenido:''
                }
            }
        },
        methods:{
           async save(){
               await this.axios.post('/api/blog', this.blog).then(rs=>{
                   this.$router.push({name:"mostrar"})
               }).catch(er=>{
                   console.log(er);
               })
            }
        }
    }
</script>

<style scoped>

</style>
