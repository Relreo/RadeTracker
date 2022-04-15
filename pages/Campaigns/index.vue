/* eslint-disable vue/no-parsing-error */
<template>
    <div>
        <PageTitle title="Campaigns" class="mb-12" />
        <v-row>
            <v-col v-for="(campaign, i) in campaigns" :key="i" cols="12" sm="6" md="3" lg="2">
                <v-btn block outlined color="blue" height="150" @click="selectCampaign(campaign)">
                    {{ campaign.campaignName }}
                </v-btn>
            </v-col>
        </v-row>
        <v-dialog v-model="campaignOpened" width="800">
            <v-card flat outlined width="100%" max-width="800" class="mx-auto">
                <v-card-text>
                    <div class="text-overline mb-4 text-center">Campaign</div>
                    <p class="text-h1 text-center">{{ selectedCampaign.campaignName }}</p>
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
                                <p class="text-h5 text-right">{{ selectedCampaign.IPR }}</p>
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
                    <v-btn depressed outlined :to="'campaigns/' + selectedCampaign.campaignID">Go to Campaign</v-btn>
                    <v-btn depressed outlined color="red" @click="deleteConfirm = true">Delete Campaign</v-btn>
                </v-card-actions>
            </v-card>
            <v-dialog v-model="deleteConfirm" width="500">
                <v-card flat outlined width="100%" class="mx-auto">
                    <v-card-text>
                        <div class="text-h3 mt-4 text-center">Are you sure?</div>
                        <p class="text-h5 mt-8 text-center">
                            This will also delete all cases associated with this campaign.
                        </p>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn depressed outlined color="red" @click="deleteCampaign(selectedCampaign)"
                            >Confirm Deletion</v-btn
                        >
                        <v-btn depressed outlined @click="deleteConfirm = false"> Cancel </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-dialog>
        <v-dialog v-model="createActive" width="500">
            <v-form ref="createForm" v-model="valid" class="mx-auto pa-8">
                <v-text-field
                    v-model="createCampaignName"
                    :counter="30"
                    :rules="campaignNameRules"
                    label="Enter Campaign Name"
                    required
                >
                </v-text-field>
                <v-btn block :disabled="!valid" color="success" class="mt-8" @click="createNewCampaign()">
                    Create campaign
                </v-btn>
            </v-form>
        </v-dialog>
        <v-btn fab large dark bottom right fixed color="blue" class="mb-12 mr-8" @click="openCreateMenu()">
            <v-icon dark> mdi-plus </v-icon>
        </v-btn>
    </div>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'

const randomstring = require('randomstring')
class Campaign {
    constructor(campaignName, campaignID) {
        this.campaignName = campaignName
        this.campaignID = campaignID
        this.pendingCases = 0
        this.assertedPatents = 0
        this.moneySpent = 0.0
        this.IPR = 0
    }
}
export default {
    components: {
        PageTitle,
    },
    layout: 'data',
    data: () => ({
        campaignOpened: false,
        deleteConfirm: false,
        createActive: false,

        selectedCampaign: {},
        campaigns: [],
        dummyData: [
            new Campaign('Microsoft', 'eb0a882b0231'),
            new Campaign('Apple', 'deffdf884d93'),
            new Campaign('Jagex', '89c7fb6999eb'),
            new Campaign('Valve', 'ecd48ac43c9c'),
        ],

        // INSERT OBJECTS AND RULES FOR CREATE FORM HERE
        valid: true,
        createCampaignName: '',

        campaignNameRules: [
            (v) => !!v || 'Name is required',
            (v) => (v && v.length <= 30) || 'Name must be less than 30 characters',
        ],
    }),

    fetch() {
        // Get List of all Campaigns from Firebase and push them to a campaigns object
        // Get all data for each campaign, such as
        // Number of Asserted Patents
        // Number of Patents Subject to IPR
        // Total cost of the campaign, (add up all the costs of each case)

        // get dummy data for front end testing
        for (const c of this.dummyData) this.campaigns.push(c)
    },

    methods: {
        selectCampaign(campaign) {
            this.selectedCampaign = campaign
            this.campaignOpened = true
        },
        openCreateMenu() {
            this.createActive = true
        },
        generateCampaignID() {
            return randomstring.generate({
                length: 12,
                charset: 'hex',
            })
        },
        createNewCampaign() {
            // GRAB FORM DATA AND ADD TO THE ARRAY AND EVENTUALLY THE DATABASE
            if (this.$refs.createForm.validate()) {
                this.valid = true
                let conflictFound = false
                let newCampaignID = ''
                do {
                    newCampaignID = this.generateCampaignID()
                    this.campaigns.forEach((element) => {
                        if (element.campaignID === newCampaignID) conflictFound = true
                    })
                } while (conflictFound)

                const newCampaign = new Campaign(this.createCampaignName, newCampaignID)
                this.campaigns.push(newCampaign)
                this.createActive = false
            }
        },
        deleteCampaign(campaign) {
            const index = this.campaigns.indexOf(campaign)
            if (index !== -1) this.campaigns.splice(index, 1)
            if (this.campaignOpened) this.campaignOpened = false
            if (this.deleteConfirm) this.deleteConfirm = false
        },
    },
}
</script>

<style></style>
