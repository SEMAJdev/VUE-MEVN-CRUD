<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Content goes here -->
            <h1>Create Students</h1>
            <form @submit.prevent="handleSubmitForm">
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
                    <button class="btn btn-success btn-block w-100" type="submit">Create</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            student: {
                name: '',
                email: '',
                phone: ''
            }
        }
    },
    methods: {
        handleSubmitForm() {
            let apiURL = 'http://localhost:4000/api/create-student';

            axios.post(apiURL, this.student).then(() => {
                this.$router.push('/view');
                this.student = {
                    name: '',
                    email: '',
                    phone: ''
                }
            }).catch(error => {
                console.log(error);
            })
        },
        isNumber: function(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57))) {
                evt.preventDefault();
            } else {
                return true;
            }
        }
    }
}
</script>