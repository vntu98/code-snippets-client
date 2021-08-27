import { orderBy as _orderBy } from 'lodash'

export default {
    computed: {
        orderdStepAsc() {
            return _orderBy(this.steps, 'order', 'asc')
        },

        orderdStepDesc() {
            return _orderBy(this.steps, 'order', 'desc')
        },

        firstStep() {
            return this.orderdStepAsc[0]
        },

        currentStep() {
            return this.orderdStepAsc.find(s => s.uuid === this.$route.query.step)
                || this.firstStep
        },

        nextStep() {
            return this.orderdStepAsc.find(s => s.order > this.currentStep.order)
                || null
        },

        previousStep() {
            return this.orderdStepDesc.find(s => s.order < this.currentStep.order)
                || null
        },

        currentStepIndex() {
            return this.orderdStepAsc.map(s => s.uuid)
                .indexOf(this.currentStep.uuid)
        },
    }
}