<template>
    <div class="mt-24 mb-12">
        <div class="container flex flex-wrap lg:flex-nowrap justify-between">
            <ul class="flex items-center mb-6 lg:mb-0">
                <li class="mr-16">
                    <nuxt-link 
                        class="text-sm text-gray-500"
                        :to="{ name: 'index' }"
                    >
                        Home
                    </nuxt-link>

                    <div class="text-gray-500 text-sm">
                        &copy; Laravel-Nuxt Ltd 2021. All rights reserved.
                    </div>
                </li>
            </ul>

            <ul class="flex flex-wrap lg:flex-nowrap items-end">
                <li class="mr-8 w-full lg:w-auto">
                    <a class="text-gray-500 text-sm" target="_blank" rel="noopener" href="https://laravel.com">
                        Laravel
                    </a>
                </li>

                <li class="mr-8 w-full lg:w-auto">
                    <a class="text-gray-500 text-sm" target="_blank" rel="noopener" href="https://laravel.com">
                        Terms
                    </a>
                </li>

                <li class="mr-8 w-full lg:w-auto">
                    <a class="text-gray-500 text-sm" target="_blank" rel="noopener" href="https://laravel.com">
                        Privacy policy
                    </a>
                </li>

                <li class="mr-8 w-full lg:w-auto">
                    <a class="text-gray-500 text-sm" target="_blank" rel="noopener" href="https://laravel.com">
                        Hotline: (+84)123.234.123
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>