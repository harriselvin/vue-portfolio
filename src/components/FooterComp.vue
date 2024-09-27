<template>
    <div id="footer">
        <footer class="footer">
            <div class="footer-container">
                <div class="logo">
                <img src="https://harriselvin.github.io/hostedImages/Images/Elvin_logo.png" alt="Logo" loading="lazy">
                </div>
                <div class="copyrights">
                &copy; <span class="date">{{ new Date().getFullYear() }}</span> Elvin Harris Portfolio | All rights reserved
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {

}
</script>
<style>
    [data-bs-theme="light"] .footer {
        background: linear-gradient(to right, black 10%,#D9D9D9 38%, #D9D9D9 67%, black);
    }
    [data-bs-theme="dark"] .footer {
        background-color: gray;
    }
    .footer {
        border-top: 2px solid;
        padding: 10px;
        box-shadow: -1px -1px 5px;
    }

    .footer .logo {
        height: 65px;
        padding: 15px;
        margin: -10px;
    }

    .footer .logo img {
        width: 50px;
    }

    .footer-container {
        display: flex;
    }

    .footer-container .copyrights {
        margin: auto;
        font-size: 15px;
        font-weight: 300;
    }
</style>