<script>
    import Sidebar from "../../components/sidebar.svelte";
	import { onMount } from 'svelte';
  
  let data = []; // Initialize data
  
  onMount(async () => {
    // Fetch data from backend
    const response = await fetch('your-backend-endpoint');
    data = await response.json();
  });

  let filterText = '';

  function applyFilter() {
    // Filter data based on filterText
    // Example: filtering by name
    return data.filter(item => item.name.toLowerCase().includes(filterText.toLowerCase()));
  }
	async function Pretrazi() {
    }
</script>

<body>
    <Sidebar/>
    <div class="search">
        <div class="input_group">
            <label for="">Pretrazi po kupcu:</label>
            <input type="text" id="" bind:value={filterText} placeholder="Filter po imenu">
        </div>
			<div class="input_group">
            <label for="">Adresa:</label>
            <input type="text" id="" placeholder="Filter po adresi">
        </div>
        <button class="button" on:click={Pretrazi}>Pretrazi</button>
    </div>
    <div class="Filters">
		<div class="input_group">
            <label for="">Ime i Prezime kupca:</label>
            <input type="text" id="">
        </div>
        <div class="input_group">
            <label for="">ID korisnika koji je kreirao kupca:</label>
            <input type="text" id="">
        </div>
		<div class="input_group">
            <label for="">Adresa kupca:</label>
            <input type="text" id="">
        </div>
		<div class="input_group">
            <label for="">Grad:</label>
            <input type="text" id="">
        </div>
		<div class="input_group">
            <label for="">Broj telefona:</label>
            <input type="tel" id="">
        </div>
		<button class="button" on:click>Azuriraj</button>
	</div>
    <div class="table">
		<table>
		    <thead>
	    	    <tr>
			        <th>Name</th>
				    <th>Email</th>
				</tr>
			</thead>
		    <tbody>
				{#each applyFilter() as item}
			    <tr>
		            <td>{item.name}</td>
		            <td>{item.email}</td>
			    </tr>
				{/each}
			</tbody>
		</table>
	</div>
</body>

<style>
    body {
        margin: -20px;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #b2ff7ea9;
    }
	.button {
        width: 100px;
        padding: 10px;
        margin: 0 auto;
        margin-top: 20px;
        display: block;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
    .button:active {
        background-color: #0056b3;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        transform: translateY(1px);
    }
    .input_group {
        margin-bottom: 15px;
    }
    .input_group label {
        display: block;
        margin-bottom: 5px;
    }
    .input_group input {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
	.search {
		position: absolute;
		top: 45px;
		left: 20px;
        width: auto;
        padding: 20px;
        border: 2px solid #ccc;
        border-radius: 15px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
	.Filters {
		max-height: 20vh;
		overflow-y: auto;
		position: absolute;
		top: 45px;
		left: 300px;
        width: auto;
        padding: 20px;
        border: 2px solid #ccc;
        border-radius: 15px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}
	.table{
		position: absolute;
		    bottom: 25px;
		    left: 20px;
        width: 92%;
				height: 50%;
        padding: 20px;
        border: 2px solid #ccc;
        border-radius: 15px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}
	table {
        border-collapse: collapse;
        width: 100%;
    }
    th, td {
        border: 1px solid #dddddd;
        padding: 8px;
        text-align: left;
    }
    th {
        background-color: #f2f2f2;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
</style>