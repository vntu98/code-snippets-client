<template>
    <div>
        <div class="bg-white mb-16">
            <div class="container py-10 pb-16">
                <div class="w-10/12">
                    <input
                        type="text"
                        class="text-4xl text-gray-700 font-medium font-header leading-tight mb-4 w-full block p-2 border-2 rounded border-dashed border-gray-400 outline-none"
                        value=""
                        placeholder="Untitled snippet"
                    >

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
            <div class="flex items-center mb-6">
                <div class="text-xl text-gray-600 font-medium mr-3">
                    1/5.
                </div>

                <input
                    type="text"
                    class="text-xl text-gray-600 font-medium bg-transparent p-2 border-2 rounded border-dashed border-gray-400 outline-none w-full"
                    value="Untitled step"
                >
            </div>

            <div class="flex flex-wrap lg:flex-nowrap">
                <div class="w-full lg:w-8/12 lg:mr-16 flex flex-wrap lg:flex-nowrap justify-between items-start mb-8">
                    <div class="flex flex-row lg:flex-col mr-2 order-first">
                        <nuxt-link to="{}" class="block mb-2 p-3 bg-blue-500 rounded-lg mr-2 lg:mr-0" title="Previous step">
                            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </nuxt-link>

                        <nuxt-link to="{}" class="block mb-2 p-3 bg-blue-500 rounded-lg" title="Add step before">
                            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-white h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                            </svg>
                        </nuxt-link>
                    </div>

                    <div class="w-full lg:mr-2">
                        <textarea class="w-full mb-6 border-dashed border-2 border-gray-400 rounded-lg outline-none"></textarea>
                        <div class="bg-white p-8 rounded-lg text-gray-600 w-full mr-2">
                            Markdown content
                        </div>
                    </div>

                    <div class="flex flex-row-reverse lg:flex-col order-first lg:order-last">
                        <nuxt-link to="{}" class="block mb-2 p-3 bg-blue-500 rounded-lg mr-2 lg:mr-0" title="Next step">
                            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </nuxt-link>

                        <nuxt-link to="{}" class="block mb-2 p-3 bg-blue-500 rounded-lg mr-2 lg:mr-0" title="Add step after">
                            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-white h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                            </svg>
                        </nuxt-link>

                        <nuxt-link to="{}" class="block mb-2 p-3 bg-blue-500 rounded-lg order-first lg:order-last" title="Delete step">
                            <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-white h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
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