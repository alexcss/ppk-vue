<template>
  <header class="ba-header">
    <v-nav />
  </header>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  name: "Header",
  components: {
    "v-nav": Nav
  }
};
</script>

<style>
	.ba-header{
		display: flex;
		justify-content: space-between;
		
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		z-index: 1;
		padding: 17px 47px;
	}
</style>