/**
* Template Name: Seller - v1.0.0
* Author: Lovely
*/

<template>
    <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">
      <h1 class="logo mr-auto"><a href="#">Seller</a></h1>
      <a href="#about" class="get-started-btn scrollto">Contents</a>
      <img class="my_page_icon_button" src="assets/img/icons/man.png" alt="my page">
    </div>
  </header>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
<style>
    .my_page_icon_button {
        max-width: 30px;
        width: 100%;
        margin-left: 15px;
    }
</style>


