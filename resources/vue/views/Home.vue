<script setup>
import icons from 'devicon/devicon.json'
</script>

<template>
	<div>lecTurwik</div>
	<div>概念から理解するプログラミング学習サイト</div>
	<div>コードの書き方ならいくらでも学べるこの時代。</div>
	<div>そのコードの意味、本当にわかっていますか？</div>
	<div v-for="icon in icons" :key="icon.name">
		<i :class="`devicon-${icon.name}-plain colored`"></i>
	</div>
</template>