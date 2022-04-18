<template>
    <div>
        <div class="row mt-3 mb-3">
            <div class="col">
                <div class="card mt-3">
                    <div class="card-header bg-success text-white"><h2>Actualizar Libro</h2></div>
                    <form class="mx-2 my-2" @submit.prevent="update">
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
                            <button type="submit" class="btn btn-success mx-2">Actualizar</button>
                            <router-link class="btn btn-secondary" :to='{name:"mostrar"}'>Cancelar</router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Editar",
        data(){
            return{
                blog:{
                    titulo:'',
                    contenido:''
                }
            }
        },
        mounted() {
            this.show();
        },
        methods:{
            async show(){
            await this.axios.get(`/api/blog/${this.$route.params.id}`).then(rs=>{
                    this.blog = rs.data
                }).catch(er=>{
                    this.blogs = [];
                    console.log(er)
                })
            },
            async update(){
                await this.axios.put(`/api/blog/${this.$route.params.id}`, this.blog).then(rs=>{
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
