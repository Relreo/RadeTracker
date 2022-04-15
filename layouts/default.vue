<template>
    <v-app dark>
        <v-main>
            <v-container fluid class="pa-8 fill-height">
                <Nuxt />
            </v-container>
        </v-main>
        <v-footer :absolute="!fixed" app>
            <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>
