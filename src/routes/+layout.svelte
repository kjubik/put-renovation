<script>
	import '../app.css';
	import Footer from '../components/footer.svelte';
</script>

<div class="min-h-screen flex flex-col justify-between">
	<div>
		<slot></slot>
	</div>
	<Footer></Footer>
</div>
