<script lang="ts">
	import '../app.css';
	import Footer from '../components/footer.svelte';
	import Navbar from '../components/navbar.svelte';
</script>

<div class="min-h-screen">
	<Navbar></Navbar>
	<slot></slot>
</div>
<Footer></Footer>
