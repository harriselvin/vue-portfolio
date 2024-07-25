<template>
    <div id="contact" data-aos="zoom-in-up">
        <div class="contact-comp">
            <div class="contact-title">
                <h2>Contact</h2>
            </div>
            <div class="contact-sec">
                <div class="contact">
                    <div class="contact-content">
                        <div class="chat">
                            <h3 class="question">Questions?</h3>
                            <h3>Let's chat</h3>
                            <p>Let's create something together</p>
                        </div>
                        <div class="contact-me">
                            <div class="detail-box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                </svg>
                            </div>
                            <p class="mail-me">Mail me at <br><a href="mailto: harriselvin6@gmail.com">harriselvin6@gmail.com</a></p>
                        </div>
                        <div class="contact-mobile">
                            <ul class="contact-links">
                                <li class="list-group-item mobi-item-1"><a href="https://github.com/harriselvin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg></a></li>
                                <li class="list-group-item mobi-item-2"><a href="https://www.linkedin.com/in/elvin-harris-02590a1a6/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                </svg></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="form">
                        <div class="form-heading">
                            <h4 class="message">Send me a message</h4>
                        </div>
                        <!-- The form takes a while to send. Please be patient -->
                        <form @submit="formSubmit()" action="https://formsubmit.co/harriselvin6@gmail.com" method="POST" enctype="multipart/form-data">
                            <p v-if="errors.length">
                                <b>
                                    Please correct the following error(s):
                                </b>
                                <ul>
                                    <li v-for="error in errors" :key="error">
                                        {{ error }}
                                    </li>
                                </ul>
                            </p>
                            <input class="form-control form-control-lg" name="name" type="text" placeholder="Full name*" aria-label=".form-control-lg example" v-model="name">
                            <input class="form-control form-control-lg" type="email" placeholder="Email address*" name="email" aria-label=".form-control-lg example" v-model="email">
                            <input class="form-control form-control-lg" name="subject" type="text" placeholder="Subject" aria-label=".form-control-lg example" v-model="subject">
                            <div class="mb-3 text-area">
                                <label for="exampleFormControlTextarea1" class="form-label">Message*</label>
                                <textarea class="form-control" name="message" id="exampleFormControlTextarea1" rows="3" v-model="message"></textarea>
                            </div>
                            <button class="btn btn-primary" type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            subject: '',
            message: '',
            errors: [],
        }
    },
    methods: {
        formSubmit() {
            this.errors = [];

            if(this.name && this.email && this.message) return true;
            if(!this.name) {
                this.errors.push("Name required.");
            }
            if(!this.email) {
                this.errors.push("Email required.");
            } else if (!this.validEmail(this.email)) {
                this.errors.push("Valid email required")
            }
            if(!this.message) {
                this.errors.push("Message required.");
            }
            // e.preventDefault();

            if (this.errors.length) {
                // No errors, proceed with form submission
                this.$refs.form.submit()

                console.log('Message has been sent');
                this.name = ''
                this.email = ''
                this.subject = ''
                this.message = ''
            }
        },
        validEmail(email) {
            /* eslint-disable */
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,})$/i;
            return re.test(email)
        }
    }
}
</script>
<style>
    #contact {
        min-height: 100svh;
        margin: 0 0 2em;
    }
    .contact-comp {
        padding-top: max(4em, 6em);
    }
    .contact-title {
        margin: 0 0 2em;
    }
    .contact {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .contact .contact-content, .form {
        flex: 1;
    }
    .contact-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .chat {
        text-align: left;
    }
    .question {
        color: #00abf0;
    }
    .contact-me {
        display: flex;
    } 
    .mail-me {
        text-align: left;
    }
    .contact-mobile {
        margin-left: -9em;
    }
    .contact-mobile svg {
        height: 2em;
        width: 2em;
    }
    .contact-links {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        margin-left: -2em;
    }
    .detail-box .bi-envelope {
        height: 3em;
        width: 3em;
    }
    [data-bs-theme='light'] .contact-mobile .bi-github {
        fill: black;
    }
    [data-bs-theme='light'] .contact-mobile .bi-linkedin {
        fill: blue;
    }
    [data-bs-theme='light'] .detail-box .bi-envelope {
        fill: black;
    }
    [data-bs-theme='dark'] .contact-mobile .bi-github {
        fill: #dee2e6;
    }
    [data-bs-theme='dark'] .contact-mobile .bi-linkedin {
        fill: #dee2e6;
    }
    [data-bs-theme='dark'] .detail-box .bi-envelope {
        fill: #dee2e6;
    }
    .form {
        line-height: 2;
        margin-top: 50px;
        width: 90vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .form form {
        display: grid;
        justify-content: center;
    }
    .form .message {
        font-size: 15px;
        line-height: 3;
        text-align: center;
    }
    .form .form-control {
        font-size: 11px;
        width: 250px;
        margin: 10px 0;
        border: 1px solid;
    }
    .form form .text-area label {
        font-size: 11px;
        line-height: 0;
    }
    .form form .btn {
        width: 100%;
        background-color: #00abf0;
        font-size: 11px;
    }
    [data-bs-theme="light"] .form form .btn {
        box-shadow: 1px 1px 5px 1px black;
    }
    [data-bs-theme="dark"] .form form .btn {
        box-shadow: 1px 1px 5px 1px white;
    }
    .form form .btn:hover {
        background-color: #008bf0;
    }
    .form form .btn:active {
        box-shadow: none;
    }
</style>