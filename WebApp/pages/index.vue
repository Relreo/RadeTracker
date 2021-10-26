<template>
    <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
            <v-card class="logo py-2 d-flex justify-center">
                <RadeLogo />
            </v-card>
            <v-card>
                <v-card-title class="headline justify-center"> Welcome to the Rade Campaign Tracker </v-card-title>
                <v-card-text> </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn color="primary" nuxt to="/Campaigns"> Continue </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>
