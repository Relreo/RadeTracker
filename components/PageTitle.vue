<template>
    <v-card tile class="transparent elevation-0 text-center">
        <span class="text-h1">
            {{ title }}
        </span>
    </v-card>
</template>

<script>
export default {
    props: ['title'],
}
</script>
