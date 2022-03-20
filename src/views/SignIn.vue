<template>
    <div>
        <h1>Sign in</h1>
        <form class="d-flex justify-content-center" @submit.prevent="signin()">
            <div class="col-md-6">
                <div class="mb-3">
                    <label class="form-label">Email:</label>
                    <input type="email" class="form-control" v-model="user.email">
                </div>
                <div class="mb-3">
                    <label class="form-label">Contraseña:</label>
                    <input type="password" minlength="8" maxlength="16" class="form-control" v-model="user.password">
                </div>
                
                <button type="submit" class="btn btn-primary">Registrar</button>
            </div>
        </form>
    </div>
</template>
<script>
import {createUserWithEmailAndPassword} from "firebase/auth";
import auth from '../main'
export default {
    data() {
        return {
            user:{
                email: "",
                password: ""
            }
        }
    },
    methods:{
        async signin(){
            const email = this.user.email
            const password = this.user.password
            await createUserWithEmailAndPassword(auth, email, password)
            alert(`Usuario '${email}', ha sido creado`)
            this.$router.push("/")
        }
    }, 
}
</script>