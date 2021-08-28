<template>
    <div>
         <textarea
            class="w-full mb-6 border-dashed border-2 border-gray-400 rounded-lg outline-none"
            ref="textarea"
        ></textarea>

        <div class="bg-white p-8 rounded-lg text-gray-600 w-full mr-2">
            <step-markdown :value="step.body" />
        </div>
    </div>
</template>

<script>
import StepMarkdown from '../../../../../components/snippets/StepMarkdown.vue'

export default {
    props: {
        step: {
            required: true,
            type: Object
        }
    },
 
    components: {
        StepMarkdown
    }
}
</script>