<template>
    <div class="footer-contain">
        <div class="container footer1">
        <div class="mr-md-auto text-center">
            <div class="copyright">
            &copy; Copyright <strong><span>Seller</span></strong>. All Rights Reserved
            </div>
        </div>
        </div>
        <div class="social-links text-center text-md-right pt-3 q-a">
            <img src="assets/img/icons/quz.png" id="q_a" alt="questions">
        </div>
    </div>
</template>
<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style>
.footer1 {
    height: 60px;
    line-height: 60px;
}
.q-a {
    margin-right: auto;
}
.footer-contain {
    display: flex;
}
#q_a {
    max-width: 30px;
    width: 100%;
}
</style>
