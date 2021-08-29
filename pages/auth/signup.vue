<template>
    <div class="container mt-16">
        <div class="flex flex-col items-center">
            <h1 class="text-3xl text-gray-700 font-medium mb-10">
                Get snippeting.
            </h1>

            <form
                action=""
                class="bg-white p-8 rounded w-full md:w-8/12 lg:w-7/12 mb-6"
                @submit.prevent="submit"    
            >
                <div class="mb-6">
                    <label for="email" class="block text-gray-600 font-medium mb-2" :class="{ 'text-red-500': validation.email }">Email address</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        class="border-2 border-gray-400 rounded block w-full p-3"
                        v-model="form.email"
                        :class="{ 'text-red-500': validation.email }"
                    >
                    <div class="text-red-500 mb-4 text-sm mt-1" v-if="validation.email">
                        {{ validation.email[0] }}
                    </div>
                </div>

                <div class="flex flex-wrap lg:flex-nowrap">
                    <div class="lg:mr-6 w-full lg:w-6/12 mb-6">
                        <label for="name" class="block text-gray-600 font-medium mb-2" :class="{ 'text-red-500': validation.name }">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            class="border-2 border-gray-400 rounded block w-full p-3"
                            v-model="form.name"
                            :class="{ 'text-red-500': validation.name }"
                        >
                        <div class="text-red-500 mb-4 text-sm mt-1" v-if="validation.name">
                            {{ validation.name[0] }}
                        </div>
                    </div>
                    <div class="w-full lg:w-6/12 mb-6">
                        <label for="username" class="block text-gray-600 font-medium mb-2" :class="{ 'text-red-500': validation.username }">Username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            class="border-2 border-gray-400 rounded block w-full p-3"
                            v-model="form.username"
                            :class="{ 'text-red-500': validation.username }"
                        >
                        <div class="text-red-500 mb-4 text-sm mt-1" v-if="validation.username">
                            {{ validation.username[0] }}
                        </div>
                    </div>
                </div>

                <div class="flex flex-wrap lg:flex-nowrap">
                    <div class="lg:mr-6 w-full lg:w-6/12 mb-6">
                        <label for="password" class="block text-gray-600 font-medium mb-2" :class="{ 'text-red-500': validation.password }">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            class="border-2 border-gray-400 rounded block w-full p-3"
                            v-model="form.password"
                            :class="{ 'text-red-500': validation.password }"
                        >
                        <div class="text-red-500 mb-4 text-sm mt-1" v-if="validation.password">
                            {{ validation.password[0] }}
                        </div>
                    </div>
                    <div class="w-full lg:w-6/12 mb-6">
                        <label for="password_confirmation" class="block text-gray-600 font-medium mb-2" :class="{ 'text-red-500': validation.password_confirmation }">Password Confirmation</label>
                        <input
                            type="password"
                            name="password_confirmation"
                            id="password_confirmation"
                            class="border-2 border-gray-400 rounded block w-full p-3"
                            v-model="form.password_confirmation"
                            :class="{ 'text-red-500': validation.password_confirmation }"
                        >
                        <div class="text-red-500 mb-4 text-sm mt-1" v-if="validation.password_confirmation">
                            {{ validation.password_confirmation[0] }}
                        </div>
                    </div>
                </div>

                <div class="mb-6">
                    <button type="submit" class="bg-blue-500 text-white p-4 rounded text-center font-medium block w-full">Sign up</button>
                </div>
            </form>

            <div class="text-center text-gray-600">
                No account?
                <nuxt-link :to="{ name: 'index' }">Create one here</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: '',
                name: '',
                username: '',
                password_confirmation: '',
                password: ''
            },
            
            validation: {}
        }
    },

    head() {
        return {
            title: 'Sign in'
        }
    },

    methods: {
        async submit() {
            try {
                await this.$axios.$post('auth/signup', this.form)

                await this.$auth.loginWith('local', {
                    data: {
                        email: this.form.email,
                        password: this.form.password
                    }
                })
            } catch (e) {
                if (e.response.status === 422) {
                    this.validation = e.response.data.errors
                }
            }
        }
    },
}
</script>