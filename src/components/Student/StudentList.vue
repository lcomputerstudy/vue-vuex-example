<template>
    <div style="width:1000px;margin:0 auto;">
        <h3 style="background-color:#edededed;padding:5px 10px;">▶ 학생목록</h3>
        <!-- <v-layout>
            <v-flex wrap row>
                <v-text-field label="Regular"></v-text-field>
                <v-text-field label="Regular"></v-text-field>
                <v-text-field label="Regular"></v-text-field>
            </v-flex>
        </v-layout> -->
       <table style="width:800px;margin:10px auto;text-align:center;background-color:#fafafa;border-collapse: collapse;">
           <tr style="font-weight:900">
               <td style="border-bottom:1px solid #818181;padding:5px;">이름</td>
               <td style="border-bottom:1px solid #818181;padding:5px;">번호</td>
               <td style="border-bottom:1px solid #818181;padding:5px;">나이</td>
           </tr>
            <tr v-for="(item, i) in studentList" :key="i">
                <td style="border-bottom:1px solid #818181;padding:5px;">{{item.s_name}}</td>
                <td style="border-bottom:1px solid #818181;padding:5px;">{{item.s_phone}}</td>
                <td style="border-bottom:1px solid #818181;padding:5px;">{{item.s_age}}</td>
             </tr>
       </table>
    </div>
</template>
<script>
import {mapState} from "vuex"
export default {
    computed: {
        ...mapState(["studentList"])
    }
}
</script>