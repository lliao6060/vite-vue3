<script name="Row" setup>
	const props = defineProps(["row"])
</script>

<template>
	<tr>
		<td>{{row.name}}</td>
		<td>{{row.phone}}</td>
		<td>{{row.activity}}</td>
		<td>{{row.city}}</td>
	</tr>
</template>

<style scoped>

</style>