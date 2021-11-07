/* eslint-disable vue/no-parsing-error */
<template>
    <div>
        <PageTitle :title="$route.params.campaign" class="mb-6" />
        <v-row>
            <v-col v-for="(c, i) in cases" :key="i" cols="12" sm="6" md="3" lg="2">
                <v-btn block outlined color="blue" height="150">
                    {{ c.name }}
                </v-btn>
            </v-col>
        </v-row>
        <v-btn fab large dark bottom right fixed color="blue" class="mb-12 mr-8">
            <v-icon dark> mdi-plus </v-icon>
        </v-btn>
    </div>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
export default {
    components: {
        PageTitle,
    },
    layout: 'data',
    data: () => ({
        model: false,
        selectedCase: {},
        cases: [],

        dummyData: [
            {
                id: 1,
                campaignID: 1,
                name: 'Bluetooth',
                patentNumber: 'US9876543',
                moneySpent: 69.32,
            },
            {
                id: 2,
                campaignID: 1,
                name: 'Wifi',
                patentNumber: 'US1234567',
                moneySpent: 10.4,
            },
            {
                id: 3,
                campaignID: 3,
                name: 'Product Activation',
                patentNumber: 'US5555555',
                moneySpent: 123.5,
            },
            {
                id: 4,
                campaignID: 4,
                name: 'License Keys',
                patentNumber: 'US9999999',
                moneySpent: 100000.69,
            },
        ],
    }),

    fetch() {
        for (const c of this.dummyData) {
            if (c.campaignID.toString() === this.$route.params.campaign) {
                this.cases.push(c)
            }
        }
    },

    methods: {
        selectCase(theCase) {
            this.selectedCase = theCase
            this.model = true
        },
    },
}
</script>

<style></style>
