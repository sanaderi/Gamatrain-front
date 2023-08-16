<template>
    <div id="about-us">
        <v-container id="header">
            <v-row>
                <v-col cols="12">
                    <h1 class="gama-text-h4">About us</h1>
                    <v-img src="/images/about-us-header.png" alt="About us" />
                    <p class="gama-text-h6">To Gamatrain</p>
                    <p class="text-left">
                        The leading ed-tech platform for effortless and secure file sharing and collaboration. Our goal is
                        to make learning and working together easier and more efficient for everyone.
                    </p>
                </v-col>
            </v-row>
        </v-container>

        <v-container fluid id="share-files">
            <v-container>
                <v-row>
                    <v-col col="12" sm="12" md="8" class="order-last order-md-first">
                        <h2 class="gama-text-h6">Share files</h2>
                        <p class="gama-text-body1">
                            At Gamatrain, we believe that technology has the power to transform education and empower
                            learners and educators. That's why we have developed a cutting-edge platform that makes it easy
                            for you to share files and collaborate with your peers, whether you're a student, educator, or
                            professional.
                            With Gamatrain, you can upload files of any type and size, organize them into folders, and share
                            them with specific individuals or groups. Our platform is designed to make file sharing
                            intuitive and effortless, so you can focus on what really matters - learning and collaborating.
                        </p>
                    </v-col>
                    <v-col cols="12" sm="12" md="4">
                        <v-img src="/images/about-us-share-files.png" />
                    </v-col>
                </v-row>
            </v-container>
        </v-container>


    </div>
</template>


<script>
export default {
    auth: false
}
</script>


<style scoped>
#about-us {
    #header {
        margin-top: 10rem;
        text-align: center;
        padding-bottom: 6.4rem;

        .gama-text-h4 {
            margin-bottom: 1.6rem;
        }


        .gama-text-h6 {
            margin-bottom: 4.8rem;
        }

        .v-image {
            margin: auto;
            width: 56rem;
            height: 40rem;
        }
    }
}

#share-files {
    background: #F4F4F4;

    .v-image {
        width: 13.9442rem;
        height: 12rem;
    }
}

@media only screen and (min-width: 600px) {}



@media only screen and (min-width: 960px) {}
</style>