<template>
    <div>
        <PageTitle title="Campaigns" class="mb-12" />
        <v-row>
            <v-col v-for="(campaign, i) in campaigns" :key="i" cols="12" sm="6" md="3" lg="2">
                <v-btn block outlined color="blue" height="150" @click="selectCampaign(campaign)">
                    {{ campaign.name }}
                </v-btn>
            </v-col>
        </v-row>
        <v-dialog v-model="model" width="800">
            <v-card flat outlined width="100%" max-width="800" class="mx-auto">
                <v-card-text>
                    <div class="text-overline mb-4 text-center">Campaign</div>
                    <p class="text-h1 text-center">{{ selectedCampaign.name }}</p>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <v-card outlined height="100%" class="pa-4">
                                <p class="overline text-right">Pending Cases</p>
                                <p class="text-h5 text-right">{{ selectedCampaign.pendingCases }}</p>
                            </v-card>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-card outlined height="100%" class="pa-4">
                                <p class="overline">Asserted Patents</p>
                                <p class="text-h5">{{ selectedCampaign.assertedPatents }}</p>
                            </v-card>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-card outlined height="100%" class="pa-4">
                                <p class="overline text-right">Patents Subject To IPR</p>
                                <p class="text-h5 text-right">TO BE IMPLEMENTED</p>
                            </v-card>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-card outlined height="100%" class="pa-4">
                                <p class="overline">Money Spent</p>
                                <p class="text-h5">$ {{ selectedCampaign.moneySpent }}</p>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions class="justify-center">
                    <v-btn depressed outlined :to="'campaigns/' + selectedCampaign.id">Go to Campaign</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
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
        selectedCampaign: {},
        campaigns: [],
        dummyData: [
            {
                id: 1,
                name: 'Microsoft',
                pendingCases: 4,
                assertedPatents: 20,
                moneySpent: 69.32,
            },
            {
                id: 2,
                name: 'Apple',
                pendingCases: 3,
                assertedPatents: 50,
                moneySpent: 10.4,
            },
            {
                id: 3,
                name: 'Jagex',
                pendingCases: 2,
                assertedPatents: 123,
                moneySpent: 123.5,
            },
            {
                id: 4,
                name: 'Sony',
                pendingCases: 1,
                assertedPatents: 3,
                moneySpent: 100000.69,
            },
        ],
    }),

    fetch() {
        for (const c of this.dummyData) this.campaigns.push(c)
    },

    methods: {
        selectCampaign(campaign) {
            this.selectedCampaign = campaign
            this.model = true
        },
    },
}
</script>

<style></style>
