<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
</script>

<div class="min-h-screen max-w-screen-xl mx-auto">
	<Navbar></Navbar>
	<slot></slot>
</div>
