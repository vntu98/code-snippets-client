<template>
    <div>
        <div class="bg-white mb-16">
            <div class="container py-10 pb-16">
                <div class="w-10/12">
                    <h1 class="text-4xl text-gray-700 font-medium leading-tight">
                        Snippet title
                    </h1>

                    <div class="text-gray-600">
                        Created by
                        <nuxt-link to="{}">
                            Laravel - Nuxt
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <h1 class="text-xl text-gray-600 font-medium mb-6">
                1/1. Step title
            </h1>

            <div class="flex flex-wrap lg:flex-nowrap">
                <div class="w-full lg:w-8/12 lg:mr-16 flex flex-wrap lg:flex-nowrap justify-between items-start mb-8">
                    <div class="order-first">
                        <nuxt-link to="{}" class="block mb-2 p-3 bg-blue-500 rounded-lg mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </nuxt-link>
                    </div>

                    <div class="bg-white p-8 rounded-lg text-gray-600 w-full mr-2">
                        Markdown content
                    </div>

                    <div class="flex flex-row lg:flex-col order-first lg:order-last">
                        <nuxt-link to="{}" class="block mb-2 p-3 bg-blue-500 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </nuxt-link>

                        <nuxt-link to="{}" class="block mb-2 p-3 bg-blue-500 rounded-lg order-first lg:order-last mr-2 lg:mr-0" title="Edit step">
                            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-white h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                            </svg>
                        </nuxt-link>
                    </div>
                </div>

                <div class="w-full lg:w-4/12">
                    <div class="mb-8">
                        <h1 class="text-xl text-gray-600 font-medium mb-6">
                            Steps
                        </h1>

                        <ul>
                            <li class="mb-1" v-for="(step, index) in 5" :key="index">
                                <nuxt-link to="{}" :class="{ 'font-bold': index === 0 }">
                                    {{ index + 1 }}. Step title
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>

                    <div class="text-gray-500 text-sm">
                        Use <div class="inline-block px-2 leading-relaxed text-gray-600 rounded bg-gray-400 text-sm">ctrl</div> +
                        <div class="inline-block px-2 leading-relaxed text-gray-600 rounded bg-gray-400 text-sm">shift</div> +
                        <div class="inline-block px-2 leading-relaxed text-gray-600 rounded bg-gray-400 text-sm">left</div> or
                        <div class="inline-block px-2 leading-relaxed text-gray-600 rounded bg-gray-400 text-sm">right</div> 
                        on your keyboard to navigation between steps
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>