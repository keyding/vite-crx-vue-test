<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import './assets/common.css'
import logo from './assets/logo.png'

const imgSrc = chrome.runtime.getURL(logo)
</script>

<template>
  <img alt="Vue logo" :src="imgSrc" />
  <HelloWorld msg="Hello Vue 3 + Vite + RPCE" />
</template>

