<script>
    export let isOpen = false;

    function toggleSidebar() {
      isOpen = !isOpen;
    }
</script>

<div class="content {isOpen ? 'open' : ''}">
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="toggle-button" on:click={toggleSidebar}>
      {isOpen ? 'Close' : 'Open'}
    </div>
</div>
<div class="sidebar {isOpen ? 'open' : ''}">
    <div>
      <ul>
        <li>Pregled narudzbi</li>
				<hr>
        <li>Kreiraj narudzbu</li>
				<hr>
        <li>Ažuriraj narudzbu</li>
				<hr>
				<li>Kreiraj kupca</li>
				<hr>
        <li>Pregled kupca</li>
				<hr>
        <li>Kreiraj radnika</li>
				<hr>
				<li>Pregled radnika</li>
				<hr>
      </ul>
			<div class="logout">Logout</div>
    </div>
</div>

<style>
    .sidebar {
			margin-top: 45px;
      width:  250px;
      height: 100vh;
			border: none;
      border-radius: 20px;
      background-color: #73c04f60;
      color: #fff;
      position: fixed;
      top: 0;
      left: -250px; /* Initially hidden */
      transition: left 0.3s ease;
      z-index: 1000;
    }
  
    .sidebar.open {
      left: 0; /* Display when isOpen is true */
    }
  
    .toggle-button {
      position: absolute;
      top: 3px;
      left: 3px;
			width: auto;
			height: auto;
      padding: 5px;
			display: block;
			border: none;
        border-radius: 5px;
			transition: all 0.3s ease;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      background-color: #007bff;
      cursor: pointer;
      color: #fff;
      font-size: 20px;
    }
		.toggle-button:active{
			background-color: #0056b3;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        transform: translateY(1px);
		}
  
    .content {
      margin-left: 250px; /* Adjust content area when sidebar is open */
      transition: margin-left 0.3s ease;
    }
  
    .content.open {
      margin-left: 0; /* Adjust content area when sidebar is closed */
    }
		.logout{
      margin: 0 auto;
			width: 65px;
			height: auto;
      padding: 5px;
			display: block;
			border: none;
        border-radius: 5px;
			transition: all 0.3s ease;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      background-color: #007bff;
      cursor: pointer;
      color: #fff;
      font-size: 20px;
		}
		.logout:active{
			background-color: #0056b3;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
      transform: translateY(1px);
		}
  </style>