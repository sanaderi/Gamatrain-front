<template>
    <v-row justify="center" class="d-block d-sm-none filter-btn">
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <template v-slot:activator="{ on, attrs }">
                <v-btn dark v-bind="attrs" v-on="on" class="filter-mobile-btn">
                    filter
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="ml-4">
                        <path
                            d="M0.755061 1.61C2.77506 4.2 6.50506 9 6.50506 9V15C6.50506 15.55 6.95506 16 7.50506 16H9.50506C10.0551 16 10.5051 15.55 10.5051 15V9C10.5051 9 14.2251 4.2 16.2451 1.61C16.7551 0.95 16.2851 0 15.4551 0H1.54506C0.715061 0 0.245061 0.95 0.755061 1.61Z"
                            fill="white" />
                    </svg>
                </v-btn>
            </template>
            <v-card>
                <v-toolbar class="filter-btn-header">
                    <v-toolbar-items>
                        <v-btn text @click="dialog = false">
                            Search in samples
                        </v-btn>
                    </v-toolbar-items>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-toolbar>
                <div class="filter-btn-content">
                    <div class="filter-btn-result my-4">
                        <p class="text-right mx-4">result : {{ result }}</p>
                    </div>
                    <div class="sample-filter pa-8">
                        <v-expansion-panels v-for="item in sampleFilters" :key="item.value" class="my-5">
                            <v-expansion-panel>
                                <v-expansion-panel-header class="filter-title">
                                    {{ item.filterTitle }}
                                </v-expansion-panel-header>
                                <v-expansion-panel-content class="filter-content ">
                                    {{ item.filterContent }}
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-divider class="filter-divider my-2"></v-divider>
                        </v-expansion-panels>
                        <div v-for="item in switchs" :key="item.value"
                            class="filter-switchs d-flex justify-space-between w-100 ">
                            <p class="switch-title mb-0">{{ item.switchTitle }}</p>
                            <v-switch class="mt-0 pt-0"></v-switch>
                        </div>
                    </div>
                    <div class="show-result d-flex justify-end">
                        <v-btn medium class="filter-show-result mr-4">
                            <nuxt-link to="">show result</nuxt-link>
                        </v-btn>
                    </div>
                </div>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script>
export default {
    data() {
        return {
            dialog: false,
            notifications: false,
            sound: true,
            widgets: false,
            result: "56215",
            sampleFilters: [
                {
                    filterTitle: "grade",
                    filterContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                },
                {
                    filterTitle: "Book",
                    filterContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                },
                {
                    filterTitle: "Title",
                    filterContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                },
                {
                    filterTitle: "Sample question type",
                    filterContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                },
            ],
            switchs: [
                {
                    switchTitle: "Word",
                },
                {
                    switchTitle: "PDF",
                },
                {
                    switchTitle: "With Answer",
                },
                {
                    switchTitle: "Free",
                },
            ],
        }
    },
}
</script>