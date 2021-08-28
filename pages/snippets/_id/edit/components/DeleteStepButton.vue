<template>
    <a
        href="#"
        class="block mb-2 p-3 bg-blue-500 rounded-lg order-first lg:order-last"
        title="Delete step"
        @click.prevent="deleteStep"
    >
        <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-white h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
    </a>
</template>

<script>
export default {
    props: {
        snippet: {
            required: true,
            type: Object
        },

        step: {
            required: true,
            type: Object
        }
    },

    methods: {
        async deleteStep() {
            await this.$axios.$delete(`snippets/${this.snippet.uuid}/steps/${this.step.uuid}`)

            this.$emit('deleted', this.step)
        }
    },
}
</script>