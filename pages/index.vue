<script setup>

const client = useSupabaseAuthClient()
const user = useSupabaseUser()

</script>

<template>
    <Panel header="Header State">

        <div class="card">
            <div class="flex card-container blue-container overflow-hidden">
                <div
                    class="flex-none flex align-items-center justify-content-center bg-blue-500 font-bold text-white m-2 px-5 py-3 border-round">
                    flex1
                </div>
                <div
                    class="flex-grow-1 flex align-items-center justify-content-center bg-blue-500 font-bold text-white m-2 px-5 py-3 border-round">
                </div>
                <div class="flex-none flex align-items-center justify-content-center font-bold text-white m-2 px-5 py-3">
                    <LoginDialog v-if="!user"></LoginDialog>
                    <p v-else>{{ user.email }} <Button @click="client.auth.signOut()">Logout</Button>
                    </p>

                </div>
            </div>

        </div>
    </Panel>
</template>