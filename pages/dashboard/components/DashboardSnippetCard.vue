<template>
    <snippet-card
        :snippet="snippet"
    >
        <ul class="flex items-end text-gray-600">
            <li class="mr-6">
                <nuxt-link 
                    :to="{
                        name: 'snippets-id-edit',
                        params: {
                            id: snippet.uuid
                        }
                    }"
                >
                    Edit
                </nuxt-link>
            </li>

            <li>
                <a href="#" @click.prevent="deleteSnippet">
                    Delete
                </a>
            </li>
        </ul>
    </snippet-card>
</template>

<script>
import SnippetCard from '@/components/snippets/SnippetCard.vue'

export default {
    components: {
        SnippetCard
    },
    
    props: {
        snippet: {
            required: true,
            type: Object
        }
    },

    methods: {
        async deleteSnippet() {
            if (!window.confirm('Are u sure u want to delete this snippet?')) {
                return
            }

            await this.$axios.$delete(`snippets/${this.snippet.uuid}`)

            this.$emit('deleted', this.snippet)
        }
    },
}
</script>