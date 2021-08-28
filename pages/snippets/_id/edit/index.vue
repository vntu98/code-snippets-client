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
                        v-model="snippet.title"
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
                <div class="text-xl text-gray-600 font-header font-medium mr-3">
                    {{ currentStepIndex + 1 }}/{{ steps.length }}.
                </div>

                <input
                    type="text"
                    class="text-xl text-gray-600 font-medium bg-transparent font-header p-2 border-2 rounded border-dashed border-gray-400 outline-none w-full"
                    value="Untitled step"
                    v-model="currentStep.title"
                >
            </div>

            <div class="flex flex-wrap lg:flex-nowrap">
                <div class="w-full lg:w-8/12 lg:mr-16 flex flex-wrap lg:flex-nowrap justify-between items-start mb-8">
                    <div class="flex flex-row lg:flex-col mr-2 order-first">
                        <step-navigation-button :step="previousStep">
                            <template>
                                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                            </template>
                        </step-navigation-button>

                        <add-step-button
                            position="before"
                            :snippet="snippet"
                            :currentStep="currentStep"
                            @added="handleStepAdded"
                        />
                    </div>

                    <div class="w-full lg:mr-2">
                        <textarea
                            class="w-full mb-6 border-dashed border-2 border-gray-400 rounded-lg outline-none"
                            v-model="currentStep.body"
                        ></textarea>

                        <div class="bg-white p-8 rounded-lg text-gray-600 w-full mr-2">
                            Markdown content
                        </div>
                    </div>

                    <div class="flex flex-row-reverse lg:flex-col order-first lg:order-last">
                        <step-navigation-button :step="nextStep">
                            <template>
                                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </template>
                        </step-navigation-button>

                        <add-step-button 
                            position="after"
                            :snippet="snippet"
                            :currentStep="currentStep"
                            @added="handleStepAdded"
                        />

                        <delete-step-button
                            :snippet="snippet"
                            :step="currentStep"
                            v-if="steps.length > 1"
                            @deleted="handleStepDeleted"
                        />
                    </div>
                </div>

                <div class="w-full lg:w-4/12">
                    <div class="mb-8">
                        <h1 class="text-xl text-gray-600 font-medium mb-6">
                            Steps
                        </h1>

                        <step-list :steps="orderdStepAsc" :currentStep="currentStep" />
                    </div>

                    <div class="border-t-2 border-gray-300 py-6">
                        <h1 class="text-xl text-gray-600 font-medium mb-6">
                            Publishing
                        </h1>

                        <div class="text-gray-500 text-sm mb-6">
                            <template v-if="!lastSaved">
                            No changes saved in this session yet
                            </template>

                            <template v-else>
                                Last saved at {{ lastSavedFormatted }}
                            </template>
                        </div>

                        <div class="flex items-baseline">
                            <input
                                type="checkbox"
                                name="public"
                                id="public"
                                class="mr-2"
                                v-model="snippet.is_public"
                            >
                            <div>
                                <label for="public" class="text-gray-600 font-medium">
                                    Make this snippet public
                                </label>

                                <div class="text-gray-500 text-sm">
                                    Don't worry, you can change this later.
                                </div>
                            </div>
                        </div>
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

<script>
import { debounce as _debounce } from 'lodash'
import StepList from '../components/StepList.vue'
import StepNavigationButton from '../components/StepNavigationButton.vue'
import browseSnippet from '@/mixins/snippets/browseSnippet'
import AddStepButton from './components/AddStepButton.vue'
import DeleteStepButton from './components/DeleteStepButton.vue'
import moment from 'moment'

export default {
    components: {
        StepList,
        StepNavigationButton,
        AddStepButton,
        DeleteStepButton
    },

    data() {
        return {
            snippet: null,
            steps: [],
            lastSaved: null
        }
    },

    mixins: [
        browseSnippet
    ],

    head() {
        return {
            title: `Editing ${this.snippet.title || 'Untitled snippet'}`
        }
    },

    watch: {
        'snippet.title': {
            handler: _debounce(async function (title) {
                await this.$axios.$patch(`snippets/${this.snippet.uuid}`, { title })

                this.touchLastSaved()
            }, 500)
        },

        'snippet.is_public': {
            handler: _debounce(async function (isPublic) {
                await this.$axios.$patch(`snippets/${this.snippet.uuid}`, {
                    is_public: isPublic
                })

                this.touchLastSaved()
            }, 500)
        },

        currentStep: {
            deep: true,

            handler: _debounce(async function (step) {
                await this.$axios.$patch(`snippets/${this.snippet.uuid}/steps/${step.uuid}`, {
                    title: step.title,
                    body: step.body
                })

                this.touchLastSaved()
            }, 500)
        }
    },

    computed: {
        lastSavedFormatted() {
            return moment(this.lastSaved).format('hh:mm:ss')
        }
    },

    methods: {
        touchLastSaved() {
            this.lastSaved = moment.now()
        },

        goToStep(step) {
            this.$router.push({
                query: {
                    step: step.uuid
                }
            })
        },

        handleStepAdded(step) {
            this.steps.push(step)
            this.goToStep(step)
        },

        handleStepDeleted(step) {
            let previousStep = this.previousStep

            this.steps = this.steps.filter(s => s.uuid !== step.uuid)

            this.goToStep(previousStep || this.firstStep)
        }
    },

    async asyncData({ app, params }) {
        let snippet = await app.$axios.$get(`snippets/${params.id}`)

        return {
            snippet: snippet.data,
            steps: snippet.data.steps.data
        }
    }
}
</script>