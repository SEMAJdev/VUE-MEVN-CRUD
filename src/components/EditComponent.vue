<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- edit here -->
            <h1>Edit Data</h1>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" v-model="student.name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" v-model="student.email" required>
                </div>
                <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type="text" class="form-control" v-model="student.phone" required @keypress="isNumber($event)" maxlength="10">
                </div>
                <div class="form-group mt-3">
                    <button class="btn btn-primary btn-block w-100" type="submit">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            student: {}
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-student/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.student = res.data
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-student/${this.$route.params.id}`;

            axios.put(apiURL, this.student).then((res) => {
                console.log(res)
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>