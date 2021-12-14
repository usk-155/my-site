<template>
    <div id="contact" class="border-end border-dark">
        <div class="box border-start border-dark">
            <h1>Contact</h1>
        </div>
        <div class="box border-start border-dark p-3">
            <form class="contact-form" @submit.prevent="sendMail">
                <div class="form-group py-2">
                    <b-container fluid> <!-- fluid -->
                        <b-row>
                            <b-col cols="12" lg="2" class="subject ">
                                <label for="msg-name">お名前</label>
                            </b-col>
                            <b-col cols="12" lg="10" class="">
                                <input type="text" id="msg-name" class="form-control" v-model="contactFormData.name">
                            </b-col>
                        </b-row>
                    </b-container>
                </div>

                <div class="form-group py-2">
                    <b-container fluid> <!-- fluid -->
                        <b-row>
                            <b-col cols="12" lg="2" class="subject">
                                <label for="msg-email">メールアドレス</label>
                            </b-col>
                            <b-col cols="12" lg="10" class="">
                                <input type="text" id="msg-email" class="form-control" v-model="contactFormData.email">
                            </b-col>
                        </b-row>
                    </b-container>
                </div>

                <div class="form-group py-2">
                    <b-container fluid> <!-- fluid -->
                        <b-row>
                            <b-col cols="12" lg="2" class="subject">
                                <label for="msg-message">お問合せ内容</label>
                            </b-col>
                            <b-col cols="12" lg="10" class="">
                                <textarea rows="10" id="msg-message" class="form-control" v-model="contactFormData.message"></textarea>
                            </b-col>
                        </b-row>
                    </b-container>
                </div>
                <div class="form-group py-2">
                    <b-container fluid> <!-- fluid -->
                        <b-row>
                            <b-col cols="12" lg="2" class="subject">
                            </b-col>
                            <b-col cols="12" lg="10" class="">
                                <b-button class="btn btn-border" type="submit">送信</b-button>
                            </b-col>
                        </b-row>
                    </b-container>
                </div>
                <div class="form-group py-2">
                    <b-container fluid> <!-- fluid -->
                        <b-row>
                            <b-col cols="12" lg="2" class="subject">
                            </b-col>
                            <b-col cols="12" lg="10" class="">
                                <div class="form-result">
                                    <p class="alert alert-success" v-if="success && !error">送信完了</p>
                                    <p class="alert alert-error" v-if="!success && error">送信失敗</p>
                                </div>
                            </b-col>
                        </b-row>
                    </b-container>
                </div>
            </form>
        </div>

        <b-container fluid>
            <b-row>
                <b-col class="box border-top border-start border-dark">
                    <img src="../assets/logo.png">
                    <p>contact1</p>
                </b-col>
                <b-col class="box border-top border-start border-dark">
                    <img src="../assets/logo.png">
                    <p>contact2</p>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'ContactForm',
    data: function () {
        return {
            contactFormData: {
                name: '',
                email: '',
                message: '',
            },
            success: false,
            error: false,
        }
    },
    methods: {
        sendMail: function () {
            const url = 'https://us-central1-usk-portfolio.cloudfunctions.net/sendEmailCF';
            const {name, email, message} = this.contactFormData;
            const payload = {name, email, message};
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            })
            .then(() => {
                this.success = true;
                this.resetForm();
            })
            .catch(() => {
                this.error = true;
            })
            .finally(() => {
                this.setTimeout(() => {
                    console.log("2秒")
                    this.success = false;
                    this.error = false;
                }, 2000);
            })
        },
        resetForm: function () {
            this.contactFormData = {
                name: '',
                email: '',
                message: '',
            };
        },
    }
}
</script>

<style scoped>
#contact {
    outline: 1px solid;
}

.box {
    outline: 1px solid;
}

h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8rem;
    font-size: 60px;
    margin-bottom: 0;
}

@media (min-width: 992px) {
    .subject {
        text-align: right;
    }
    .form-group {
        text-align: center;
        width: 91.7%;
    }
}

.btn-border {
    border: 1px solid #ced4da;
    background: #ced4da;
    width: 100%;
}
.btn-border:hover {
    color: #fff;
    background: #202f55;
}

</style>