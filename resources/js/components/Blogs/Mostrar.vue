<template>
    <div>
        <div class="row mt-3 mb-3">
            <div class="col-md-3">
                <router-link class="btn btn-dark" :to='{name:"crear"}'>Crear Libro</router-link>
            </div>
        </div>
        <div class="row mt-3 mb-3">
            <div class="col-md-12">
                <table class="table">
                    <thead class="bg-info text-white">
                        <tr>
                            <th>Id</th>
                            <th>Titulo</th>
                            <th width="50%">Descripción</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="blog in blogs" :key="blog.id">
                            <td>{{blog.id}}</td>
                            <td>{{blog.titulo}}</td>
                            <td>{{blog.contenido}}</td>
                            <td>
                                <router-link :to="{name:'editar', params:{id:blog.id}}" class="btn btn-primary">Editar</router-link>
                                <a type="button" class="btn btn-danger" @click="destroy(blog.id)">Eliminar</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Mostrar",
        data(){
            return{
                blogs:[]
            }
        },
        mounted() {
            this.show();
        },
        methods:{
            async show(){
                await this.axios.get('/api/blog').then(rs=>{
                    this.blogs = rs.data
                }).catch(er=>{
                    this.blogs = [];
                    console.log(er)
                })
            },
            async destroy(id){
               if(confirm("¿Desea borrarlo?")) {
                 await this.axios.delete(`/api/blog/${id}`).then(rs=>{
                       this.show();
                   }).catch(er=>{
                       console.log(er)
                   })
               }
            }
        }
    }
</script>

<style scoped>

</style>
