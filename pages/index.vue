<script setup>
const logged = useState('logged')
</script>

<template>
    <Panel header="Header State">

        <div class="card">
            <div class="flex card-container blue-container overflow-hidden">
                <div
                    class="flex-none flex align-items-center justify-content-center bg-blue-500 font-bold text-white m-2 px-5 py-3 border-round">
                </div>
                <div
                    class="flex-grow-1 flex align-items-center justify-content-center bg-blue-500 font-bold text-white m-2 px-5 py-3 border-round">
                    PrimeFlex</div>
                <div class="flex-none flex align-items-center justify-content-center font-bold text-white m-2 px-5 py-3">
                    <LoginDialog></LoginDialog>

                </div>
                <Button type="button" label="Search" icon="pi pi-search" @click="" />

            </div>

        </div>
    </Panel>
</template>