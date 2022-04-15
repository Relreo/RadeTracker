<template>
    <v-app dark>
        <v-app-bar :clipped-left="clipped" fixed app> </v-app-bar>
        <v-main>
            <v-container class="pa-8">
                <Nuxt />
            </v-container>
        </v-main>
        <v-footer :absolute="!fixed" app>
            <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>
