<script>
    import UpdateForm from "../../components/updateForm.svelte";
    import Sidebar from "../../components/sidebar.svelte";

    function handleKreacija() {
	}
</script>

<body>
    <Sidebar/>
    <UpdateForm>
        <h2 class="title">Nova narudzba</h2>
        <div>
            <div class="input_group">
                <label for="">ID Korisnika:</label>
                <input type="text" id="">
            </div>
			<div class="input_group">
                <label for="">Ime i Prezime kupca:</label>
                <input type="text" id="">
            </div>
			<div class="input_group">
                <label for="">Količina maslina:</label>
                <input type="text" id="">
            </div>
			<div class="input_group">
                <label for="">Boksevi:</label>
                <input type="text" id="">
            </div>
			<div class="input_group">
                <label for="">Ima li kupac svoje kante:</label>
                <input type="checkbox" id="">
            </div>
			<button class="button" on:click={handleKreacija}>Kreiraj</button>
        </div>
    </UpdateForm>
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
		.title{
        text-align: center;
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
</style>