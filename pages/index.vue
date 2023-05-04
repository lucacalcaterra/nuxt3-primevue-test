<script setup>

const supaAuth = useSupabaseAuthClient()
const supaUser = useSupabaseUser()
const supaClient = useSupabaseClient()


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
                    <LoginDialog v-if="!supaUser"></LoginDialog>
                    <div v-else>
                        <div>{{ supaUser.email }}</div>
                        <div><Button @click="supaAuth.auth.signOut()">Logout</Button></div>
                    </div>

                </div>
            </div>

        </div>
    </Panel>
</template>