<script setup>
import { useToast } from 'primevue/usetoast'

const toast = useToast();

const supabaseAuthClient = useSupabaseAuthClient()

const loading = ref(false)
const visible = ref(false)

const email = ref('')
const password = ref('')

const errorMessage = ref('')



const handleLogin = async () => {
    try {
        loading.value = true
        const { data, error } = await supabaseAuthClient.auth.signInWithPassword({ email: email.value, password: password.value })
        if (error) throw error
        toast.add({ severity: "info", summary: "Authenticated!", life: 3000 });
    } catch (error) {
        alert(error.error_description || error.message)
    } finally {
        loading.value = false
        visible.value = false
    }
}


</script>

<template>
    <Button label="Login" icon="" @click="visible = true" />

    <Toast></Toast>
    <Dialog v-model:visible="visible" modal header="Login Dialog" :style="{ width: '50vw' }">
        <div class="flex flex-column gap-2">
            <form @submit.prevent="handleLogin" class="flex flex-column gap-2">
                <label for="email">email</label>
                <InputText id="email" type="email" v-model="email" aria-describedby="username-help" />
                <small id="username-help">Enter your username to reset your password.</small>
                <Password id="value" :feedback="false" v-model="password" type="text" :class="{ 'p-invalid': errorMessage }"
                    aria-describedby="text-error" />
                <small id="password-help">Enter your your password.</small>
                <Button type="submit" label="Submit" :loading="loading" />

            </form>
        </div>
    </Dialog>
</template>