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
            <v-card>
                <v-card-title class="text-h2 mb-2">{{ selectedCampaign.name }}</v-card-title>
                <v-card-text>
                    <v-row class="mx-auto text-subtitle-1">
                        <div>Pending Cases:</div>
                        <div class="ms-1">{{ selectedCampaign.pendingCases }}</div>
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

        campaigns: [
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
                id: 1,
                name: 'Microsoft',
                pendingCases: 4,
                assertedPatents: 20,
                moneySpent: 69.32,
            },
        ],
    }),

    methods: {
        selectCampaign(campaign) {
            this.selectedCampaign = campaign
            this.model = true
        },
    },
}
</script>

<style></style>
