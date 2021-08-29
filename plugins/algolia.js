import algoliasearch from 'algoliasearch/lite'
import Vue from 'vue'
import InstantSearch from 'vue-instantsearch'

Vue.use(InstantSearch)

export default ({ app }, inject) => {
    const searchClient = algoliasearch(
        'U435G27SO4',
        'f8e605f8559358f07db057feb0849a7e'
    )

    inject('searchClient', searchClient)
}