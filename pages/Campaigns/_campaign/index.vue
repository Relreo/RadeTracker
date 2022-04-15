/* eslint-disable no-unused-vars */ /* eslint-disable vue/no-parsing-error */
<template>
    <div>
        <PageTitle :title="pageTitle" class="mb-6" />
        <v-row>
            <v-col v-for="c in cases" :key="c.id" cols="12" sm="6" md="3" lg="2">
                <v-btn block outlined color="blue" height="150" @click="selectCase(c)">
                    {{ c.name }}
                </v-btn>
            </v-col>
        </v-row>
        <v-dialog v-model="model" width="800">
            <v-card flat outlined width="100%" max-width="800" class="mx-auto">
                <v-card-text>
                    <div class="text-overline ma-4 text-center">Case</div>
                    <p class="text-h1 text-center">{{ selectedCase.name }}</p>
                    <v-col align="center">
                        <v-card outlined height="100%" width="75%" class="ma-4">
                            <p class="pa-1 overline text-center">Patents</p>
                            <v-row align="center" class="pa-1"> </v-row>
                            <p
                                v-for="[patentNum, IPRStatus] in selectedCase.listOfPatents"
                                :key="[patentNum, IPRStatus]"
                                class="text-h5 text-center"
                            >
                                Number : {{ patentNum }} <br />
                                Under IPR? {{ IPRStatus ? 'Yes' : 'No' }}
                            </p>
                        </v-card>
                        <v-card outlined height="100%" width="75%" class="ma-4">
                            <p class="overline text-center">Trial Date</p>
                            <p class="text-h5 text-center">{{ selectedCase.trialDate }}</p>
                            <p class="text-h6 text-center">{{ selectedCase.trialTime }}</p>
                        </v-card>
                        <v-card outlined height="100%" width="75%" class="ma-4">
                            <p class="overline text-center">Money Spent on Case</p>
                            <p class="text-h5 text-center">$ {{ selectedCase.moneySpent }}</p>
                        </v-card>
                    </v-col>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-btn fab large dark bottom right fixed color="blue" class="mb-12 mr-8">
            <v-icon dark> mdi-plus </v-icon>
        </v-btn>
    </div>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
let idCounter = 1
class Case {
    constructor(name, campaignID, listOfPatents, moneySpent, trialDateTime) {
        this.name = name
        this.id = idCounter++
        this.campaignID = campaignID
        this.listOfPatents = listOfPatents
        this.moneySpent = moneySpent
        this.trialDate = trialDateTime.toDateString()
        this.trialTime = trialDateTime.toTimeString()
    }
}
export default {
    components: {
        PageTitle,
    },
    layout: 'data',
    data: () => ({
        model: false,
        pageTitle: 'Active Cases',
        selectedCase: {},
        cases: [],

        dummyData: [
            new Case(
                'Bluetooth',
                'eb0a882b0231',
                new Map([
                    ['US9876543', true],
                    ['US9876544', false],
                ]),
                69.32,
                new Date(2022, 11, 22, 9, 30)
            ),
            new Case('Wifi', 'eb0a882b0231', new Map([['US1234567', false]]), 10.4, new Date(2022, 11, 23, 9, 30)),
            new Case(
                'Product Activation',
                '89c7fb6999eb',
                new Map([['US5555555', false]]),
                123.5,
                new Date(2022, 11, 24, 9, 30)
            ),
            new Case(
                'License Keys',
                'ecd48ac43c9c',
                new Map([['US9999999', true]]),
                100000.69,
                new Date(2022, 11, 25, 9, 30)
            ),
        ],
    }),

    fetch() {
        // get list of cases from firebase
        // for each case, if the case's campaign id matches this.$route.params.campaign, add it to the cases list

        // get dummy data for front end testing
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
