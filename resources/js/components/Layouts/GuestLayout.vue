<script setup>
 import Header from './Header.vue';
import Footer from './Footer.vue';
</script>
<template>
    <div class="w-full h-screen scroll-smooth">
        <header>
            <Header/>
        </header>
        <main>
            <slot />
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
</template>