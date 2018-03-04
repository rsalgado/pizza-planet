<template>
    <div class="row">
        <div>
            <div>
                <p v-if="currentUser">
                    Logged in as: <br/>
                    <pre>{{ currentUser }}</pre>
                </p>
                <p v-else>Please login to continue</p>
            </div>
            <form>
                <div class="form-group">
                    <label>Email address</label>
                    <input type="text" class="form-control" id="email" placeholder="Enter email"/>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter password"/>
                </div>

                <button type="button" class="btn btn-primary" @click.prevent="signIn">Sign In</button>
                <button type="button" class="btn btn-danger" @click.prevent="signOut">Sign Out</button>
            </form>
        </div>
    </div>
</template>


<script type="text/javascript">
    import Firebase from 'firebase';
    import { store } from '../store/store.js';

    Firebase.auth()
            .onAuthStateChanged((user) => {
                if (user) {
                    store.dispatch("setUser", user);
                }
                else {
                    store.dispatch("setUser", null);
                }
            });

    export default {
        methods: {
            signIn() {
                let email = document.getElementById("email").value;
                let password = document.getElementById("password").value;

                Firebase.auth()
                    .signInWithEmailAndPassword(email, password)
                    .catch(error => {
                        let errorCode = error.code;
                        let errorMessage = error.message;

                        if (errorCode === 'auth/wrong-password') {
                            alert("Wrong Password");
                        }
                        else {
                            alert(errorMessage);
                        }
                    });
            },

            signOut() {
                Firebase.auth()
                    .signOut()
                    .then(() => {
                        alert("Logged out");
                    })
                    .catch(error => {
                        alert("Error");
                    });
            }
        },

        computed: {
            currentUser() {
                return this.$store.getters.currentUser;
            }
        }
    }
</script>

<style type="text/css">
    form {
        margin: 20px 0;
    }
</style>