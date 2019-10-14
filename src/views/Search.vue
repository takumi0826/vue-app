<template>
    <v-container>
        <v-text-field
            :rules="[rule]"
            label="アーティスト名を入力してください"
            v-model="keyword"
            :counter="30"
            required
            class="my-4"
        >
        </v-text-field>
        <v-btn @click="search" dark color="primary" class="d-block mx-auto">検索</v-btn>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            keyword: ""
        }
    },
    computed: {
        rule() {
            return value => !!value || "必須です"
        },
    },
    methods: {
        search() {
            if(this.keyword.length >= 1) {
                this.$router.push(`/result/${this.keyword}`)
            }
        }
    }
}
</script>