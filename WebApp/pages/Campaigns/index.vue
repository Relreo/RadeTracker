<template>
    <div>
        <PageTitle title="Campaigns" />
        <v-row dense>
            <v-col v-for="(campaign, i) in campaigns" :key="i" cols="12" sm="6" md="4" lg="2" class="pa-4">
                <v-btn outlined block class="pa-4" height="200" @click="selectCampaign(campaign)">
                    {{ campaign.name }}
                </v-btn>
            </v-col>
        </v-row>
        <v-dialog v-model="model" width="800">
            <v-card>
                <v-card-title>{{ selectedCampaign.name }}</v-card-title>
                <v-card-text>
                    <v-row align="center" class="mx-0">
                        <div>Pending Cases:</div>
                        <div class="ms-1">{{ selectedCampaign.pendingCases }}</div>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-btn outlined :to="'campaigns/' + selectedCampaign.id">Go to Campaign</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'

export default {
    components: {
        PageTitle,
    },
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
