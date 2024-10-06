<template>
    <div class="min-h-screen bg-gray-100">
        <div class="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div class="bg-white shadow rounded-lg mb-8">
                <div class="h-48 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-t-lg"></div>
                <div class="px-4 py-5 sm:p-6 -mt-20">
                    <div class="flex items-end">
                        <img class="h-32 w-32 rounded-full ring-4 ring-white" :src="user.avatar" :alt="user.name">
                        <div class="ml-6">
                            <h1 class="text-3xl font-bold text-gray-900">{{ user.name }}</h1>
                            <p class="text-sm text-gray-500">{{ user.bio }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white shadow rounded-lg mb-8">
                <div class="px-4 py-5 sm:p-6">
                    <h2 class="text-lg font-medium text-gray-900 mb-4">Create a New Publication</h2>
                    <form @submit.prevent="createPublication">
                        <textarea v-model="newPublication" rows="3"
                            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder="What's on your mind?"></textarea>
                        <div class="mt-3 flex justify-end">
                            <button type="submit"
                                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Publish
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div class="bg-white shadow rounded-lg">
                <div class="px-4 py-5 sm:p-6">
                    <h2 class="text-lg font-medium text-gray-900 mb-4">Publications</h2>
                    <ul class="space-y-4">
                        <li v-for="pub in publications" :key="pub.id" class="bg-gray-50 rounded-lg p-4">
                            <div class="flex space-x-3">
                                <img class="h-10 w-10 rounded-full" :src="user.avatar" :alt="user.name">
                                <div class="flex-1 space-y-1">
                                    <div class="flex items-center justify-between">
                                        <h3 class="text-sm font-medium">{{ user.name }}</h3>
                                        <p class="text-sm text-gray-500">{{ formatDate(pub.date) }}</p>
                                    </div>
                                    <p class="text-sm text-gray-700">{{ pub.content }}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { CalendarIcon } from 'lucide-vue-next'

const user = ref({
    name: 'Jane Doe',
    avatar: '/placeholder.svg?height=128&width=128',
    bio: 'Software Developer | Vue.js Enthusiast'
})

const publications = ref([
    { id: 1, content: 'Just launched my new Vue.js project!', date: new Date('2023-05-01T12:00:00') },
    { id: 2, content: 'Learning about the Composition API. It\'s amazing!', date: new Date('2023-05-03T15:30:00') }
])

const newPublication = ref('')

const createPublication = () => {
    if (newPublication.value.trim()) {
        publications.value.unshift({
            id: Date.now(),
            content: newPublication.value,
            date: new Date()
        })
        newPublication.value = ''
    }
}

const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    }).format(date)
}
</script>