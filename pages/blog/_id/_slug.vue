<template>
    <v-container id="blog">
        <v-row>
            <v-col cols="12">
                <h1 class="gama-text-h2">
                    {{ contentData.title }}
                </h1>
            </v-col>
        </v-row>

        <v-img id="blog-img" :src="contentData.pic" />
    </v-container>
</template>

<script>
export default {
    auth: false,
    name: 'blog',
    head() {
        return {
            title: this.contentData.title
        }
    },

    async asyncData({ params, $axios }) {
        const content = await $axios.$get(`/api/v1/blogs/${params.id}`);
        var contentData = [];

        if (content.status == 1)
            contentData = content.data;

        return { contentData };
    }
}
</script>


<style>
#blog {

    #blog-img {
        height: 40rem;
        border-radius: 1rem;
    }
}
</style>