<template>
  <div>
    <div class="bg-white mb-16">
      <div class="container flex py-16 lg:py-32">
        <div class="w-full lg:w-6/12">
          <h1 class="text-5xl font-medium text-gray-700 leading-tight mb-6"> 
            Browse and create mini step-by-step tutorials.
          </h1>

          <p class="text-xl text-gray-600 mb-12">
            Snippets are small collections of steps for things you don;t need to remember.
          </p>

          <nuxt-link 
            :to="{}"
            class="inline-block text-lg py-3 px-5 bg-blue-500 text-white rounded-lg"
          >
            Check out an example &rarr;  
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="container">
      <h1 class="text-4xl text-gray-700 font-medium leading-tight mb-4">
        Latest snippets
      </h1>

      <latest-snippet-card
        v-for="snippet in snippets"
        :key="snippet.uuid"
        :snippet="snippet"
      />
    </div>
  </div>
</template>

<script>
import LatestSnippetCard from './home/components/LatestSnippetCard.vue'
export default {
  components: { LatestSnippetCard },
  head() {
    return {
      title: 'Snippets',
      titleTemplate: null,
    }
  },

  data() {
    return {
      snippets: []
    }
  },

  async asyncData({ app }) {
    let snippets = await app.$axios.$get('snippets?limit=10')

    return {
      snippets: snippets.data
    }
  }
}
</script>

<style>

</style>
