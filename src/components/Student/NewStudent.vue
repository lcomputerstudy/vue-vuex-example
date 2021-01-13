<template>
    <div style="width:1000px;margin:0 auto;">
        <h3 style="background-color:#edededed;padding:5px 10px;">▶ 새로운 학생 등록</h3>
        <!-- <v-layout>
            <v-flex wrap row>
                <v-text-field label="Regular"></v-text-field>
                <v-text-field label="Regular"></v-text-field>
                <v-text-field label="Regular"></v-text-field>
            </v-flex>
        </v-layout> -->
        <div style="display:flex;justify-content:space-between;width:800px;margin:0 auto;align-items:center">
            <div style="width:250px"><v-text-field label="이름" v-model="s_name"></v-text-field></div>
            <div style="width:350px"><v-text-field label="폰번호" placeholder="000-0000-0000" v-model="s_phone"></v-text-field></div>
            <div style="width:100px"><v-text-field label="나이" v-model="s_age" ></v-text-field></div>
            <div style="width:80px"> <v-btn text color="primary" @click="NewStudent({s_name,s_phone,s_age})"> 학생등록 </v-btn></div>
        </div>
    </div>
</template>
<script>
import {mapMutations,mapActions} from "vuex"
export default {
    data() {
       return {
            s_name:null,
            s_phone:null,
            s_age:null
       }
    },
    methods: {
        // ...mapMutations(['NewStudent'])
        ...mapActions(["NewStudent"])
    }
}
</script>