<template>
    <div class="text-center sample-q-pagination">
        <v-pagination v-model="page" :length="2700" :total-visible="6"></v-pagination>
    </div>
</template>
<script>
export default {
    data() {
        return {
            page:1,
        }
    }
}
</script>