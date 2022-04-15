<template>
    <div>
        <v-container class="mt-2">
            <v-row class="pa-4">
                <v-card flat outlined width="100%" max-width="800" class="mx-auto">
                    <v-card-text>
                        <div class="text-overline mb-4 text-center">Campaign</div>
                        <p class="text-h1 text-center">Microsoft</p>
                        <v-row>
                            <v-col cols="12" sm="6">
                                <v-card outlined height="100%" class="pa-4">
                                    <p class="overline text-right">Pending Cases</p>
                                    <p class="text-h5 text-right">117</p>
                                </v-card>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-card outlined height="100%" class="pa-4">
                                    <p class="overline">Assorted Patents</p>
                                    <p class="text-h5">117</p>
                                </v-card>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-card outlined height="100%" class="pa-4">
                                    <p class="overline text-right">Patents Subject To IPR</p>
                                    <p class="text-h5 text-right">117</p>
                                </v-card>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-card outlined height="100%" class="pa-4">
                                    <p class="overline">Money Spent</p>
                                    <p class="text-h5">117</p>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-row>
            <v-row>
                <v-col v-for="i in 100" :key="i" cols="12" sm="6" md="3" lg="2">
                    <v-btn block floating height="100">Button {{ i }}</v-btn>
                </v-col>
            </v-row>
        </v-container>
        <v-btn fab large dark bottom right fixed class="v-btn--example"> + </v-btn>
    </div>
</template>
