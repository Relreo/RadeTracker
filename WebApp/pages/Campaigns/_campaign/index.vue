<template>
    <div>
        <PageTitle :title="$route.params.campaign" />
    </div>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
export default {
    components: {
        PageTitle,
    },
}
</script>

<style></style>
