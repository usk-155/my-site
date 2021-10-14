<template>
    <div id="profile" class="border-end border-dark">
        <div class="box border-start border-dark">
            <a>profile</a>
        </div>
        <b-container fluid class="contents">
            <b-row>
                <b-col cols="12" lg="6" class="box border-top border-start border-dark">
                    <b-img :src="require('../assets/icon.jpg')" fluid-grow alt="Responsive image" class="iconImage"></b-img>
                </b-col>
                <b-col cols="12" lg="6" class="box border-top border-start border-dark py-4">
                    <table>
                        <tr v-for="list in lists" v-bind:key='list.item'>
                            <td class="item align-top">{{ list.item }}</td>
                            <td class="align-top">：</td>
                            <td class="content align-top">{{ list.content }}</td>
                        </tr>
                    </table>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            lists: [
                { item: '名前', content: 'なかじま ゆうすけ' },
                { item: '住まい', content: '埼玉' },
                { item: '生年月日', content: '1990 / 08 / 10' },
                { item: '趣味', content: 'スノーボード，ロードバイク' },
                { item: '経歴', content: '某理系大学建築学科卒業。\n卒業後、不動産会社にて土地仕入れ業務に従事し、不動産所有者へ営業。\nその後まちづくりプロデュース会社へ転職し、アシスタントディレクターとして、全国各地を担当。\n退職後現在に至る。' },
            ]
        }
    }
};

</script>


<style scoped>

#profile {
    outline: 1px solid;
}

.box {
    outline: 1px solid;
}

.iconImage {
    margin: 10px 0;
}

.homeImage {
    max-width: 50%;
    height: 400px;
}

.item {
    min-width: 70px;
}

.content {
    white-space: pre-wrap;
}

a {
    color: #2c3e50;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8rem;
    text-decoration:none;
    font-size: 60px;
}

</style>


<style>

</style>