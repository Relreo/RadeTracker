<template>
    <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
            <v-card class="transparent elevation-0 logo mb-15 d-flex justify-center">
                <RadeLogo />
            </v-card>
            <v-card class="transparent elevation-0">
                <v-card-title class="headline justify-center"> Welcome to the Rade Campaign Tracker </v-card-title>
                <v-card-text class="text-center"> Keep track of all your active legal cases. </v-card-text>
                <v-card-actions class="justify-center">
                    <v-btn depressed color="primary" nuxt to="/Campaigns"> Get Started </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>
