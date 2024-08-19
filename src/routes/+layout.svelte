<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
</script>

<div class="min-h-screen max-w-screen-xl mx-auto">
	<Navbar></Navbar>
	<slot></slot>
</div>
<Footer></Footer>