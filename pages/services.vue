<template>
    <div>
        <v-container fluid id="service-page-header">
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <div id="main-title-holder">
                            <p>Empowering Smart<br> Learning!</p>
                        </div>
                    </v-col>

                </v-row>
            </v-container>
        </v-container>
        <v-container id="service-ai-unleashing">
            <v-row>
                <v-col cols="12">
                    <h2 class="h4">Unleashing the Power of AI in Education</h2>
                    <p>Your Pathway to Smart Education Solutions.</p>
                    <p>Unlock the Future of Education with GamaTrain.</p>
                    <h3 class="h5">Personalized Learning Powered by AI</h3>
                    <p>At GamaTrain, we believe in tailoring education to fit each student's unique needs. Our AI-powered
                        platform analyzes individual learning styles, strengths, and areas for improvement to provide
                        personalized learning paths. Say goodbye to one-size-fits-all education - welcome to a smart,
                        adaptive learning experience.</p>
                </v-col>
            </v-row>
        </v-container>

        <v-container fluid id="service-comprehensive-curriculum">
            <v-container>
                <v-row>
                    <v-col md="6">
                        <h2 class="title">Empowering Smart Learning!</h2>
                        <p class="describe">
                            GamaTrain's extensive library of educational materials covers a wide range of subjects and
                            levels. From first grade to 12th grade advanced courses, we have meticulously crafted content to
                            ensure students receive the highest quality of education. Our team of experts, educators, and AI
                            specialists work together to bring you engaging and enriching study materials.
                        </p>
                    </v-col>
                    <v-col md="6">
                        <v-img src="/images/comprehensive-curriculum.png" alt="Empowering Smart Learning!" />
                    </v-col>

                </v-row>
            </v-container>
        </v-container>

        <v-container id="service-smart-assistance">
            <v-row>
                <v-col md="6">
                    <v-img src="images/smart-assistance.svg" alt="24/7 Smart Assistance" />
                </v-col>
                <v-col md="6">
                    <h2>
                        24/7 Smart Assistance
                    </h2>
                    <p>
                        GamaTrain's extensive library of educational materials covers a wide range of subjects and levels.
                        From first grade to 12th grade advanced courses, we have meticulously crafted content to ensure
                        students receive the highest quality of education. Our team of experts, educators, and AI
                        specialists work together to bring you engaging and enriching study materials.
                    </p>
                </v-col>
            </v-row>
        </v-container>


        <v-container fluid id="service-progress-tracking">
            <v-container>
                <v-row>
                    <v-col md="6">
                        <h2>Real-Time Progress Tracking</h2>
                        <p>
                            Stay on top of your academic growth with GamaTrain's real-time progress tracking. Our AI
                            algorithms analyze your performance, identify areas for improvement, and celebrate your
                            achievements. Be informed, stay motivated, and excel in your studies.
                        </p>
                    </v-col>
                    <v-col md="6">
                        <v-img src="/images/progress-tracking.png" alt="Real-Time Progress Tracking" />
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
#service-page-header {
    height: 51.2rem;
    background: url("/images/services-bg1.svg");
    position: relative;

    #main-title-holder {
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        bottom: 10rem;
        border-radius: 0.625rem;
        background: rgba(0, 0, 0, 0.50);
        backdrop-filter: blur(7.5px);
        width: 73rem;
        height: 14rem;
        padding: 2.2rem 4.8rem 1.7rem 4.8rem;

        >p {
            color: #FFF;
            text-align: center;
            font-family: "Helvetica Neue LT Std Bold";
            font-size: 4rem;
            font-style: normal;
            font-weight: 750;
            line-height: 4.4rem;
        }
    }


}


#service-ai-unleashing {
    height: 46rem;
    padding-top: 10rem;

}

#service-comprehensive-curriculum {
    background: #24292F;
    height: 46rem;
    padding-top: 10rem;
    padding-bottom: 10rem;

    .title {
        color: #FFF;
        font-size: 2.8rem !important;
        font-style: normal;
        font-weight: 750;
        line-height: normal;
        margin-bottom: 2.4rem;
    }

    .describe {
        color: #FFF;
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 500;
        line-height: 3rem;
    }

    .v-image {
        margin: auto;
        width: 40.56rem;
        height: 26rem;
        border-radius: 1rem;
    }
}


#service-smart-assistance {
    height: 46rem;
    padding-top: 10rem;
    padding-bottom: 10rem;

    .v-image {
        margin: auto auto;
        width: 31.2rem;
        height: 26rem;
    }
}

#service-progress-tracking {
    height: 46rem;
    background: #F4F4F4;
    padding-top: 10rem;
    padding-bottom: 10rem;

    .v-image {
        margin: auto;
        width: 40.56rem;
        height: 26rem;
        border-radius: 1rem;
    }

}
</style>