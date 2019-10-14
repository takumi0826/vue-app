<template>
    <v-container grid-list-lg>
        <div class="text-center mt-4">
            <h2>検索結果</h2>
            <p>検索キーワード : {{ $route.params.keyword }}</p>
        </div>
        <v-layout row wrap>
            <v-flex sm6 my-3 v-for="(album,i) in albums" :key="i">
                <v-card
                    class="mx-auto"
                    max-width="400"
                    outlined
                    :href="album.collectionViewUrl"
                >
                    <v-list-item>
                        <v-list-item-content>
                            <div class="overline mb-4">{{ album.artistName }}</div>
                            <v-list-item-title class="headline mb-1">{{ album.collectionName }}</v-list-item-title>
                            <v-list-item-subtitle>{{ album.releaseDate }}</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-content>
                            <v-img
                                height="100"
                                width="100"
                                :src="album.artworkUrl100"
                            ></v-img>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Axios from "axios";

export default {
    data() {
        return {
            albums: [],
            show: false
        }
    },
    created() {
        Axios.get(`https://itunes.apple.com/search?term=${this.$route.params.keyword}&entity=album`)
        .then(response => {
            this.albums = response.data.results;
        })
    }
}
</script>