<template>
    <div
        class="h-[72px] z-10 sticky top-0 backdrop-opacity bg-white/80 backdrop-blur-[5px] px-10 grid grid-cols-5 border-b border-b-gray-300"
    >
        <div class="font-medium my-auto mx-auto" >
            Marcos M. López
        </div>
        <div class=" col-span-3 my-auto">
            <ul class="grid grid-cols-6">
                <li></li>
                <li 
                    v-for="(item,i) in items"
                    :key="i"
                    class="hover:text-blue-700 py-3 px-2 cursor-pointer"
                >
                    {{ item.title }}
                </li>
                <li></li>
            </ul>
        </div>
        <div class=" my-auto mx-auto">
            <button
                class="bg-blue-500 px-8 py-3 text-white font-bold rounded-full"
            >
                Descargar CV
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const items: Item[] = [
    {
        title: 'Inicio',
        to: '/'
    },
    {
        title: 'Conóceme',
        to: '/'
    },
    {
        title: 'Servicios',
        to: '/'
    },
    {
        title: 'Precios',
        to: '/'
    },
]

interface Item {
    title:string
    to: string
}
</script>

<style scoped></style>
