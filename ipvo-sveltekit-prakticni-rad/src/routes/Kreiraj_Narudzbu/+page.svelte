<script>
    import UpdateForm from "../../components/updateForm.svelte";
    import Sidebar from "../../components/sidebar.svelte";
    import { loggedUserStore } from "../../stores/logged_user.store";
	import { get } from "svelte/store";
	import { goto } from "$app/navigation";


    let customer_name = "";
    let customer_id = 0;

    let olive_weight_kg = 0;
    let boxes = "";

    let customer_has_bottles = false;

    let order_cost = 0;

    async function getCustomerIDbyName() {
        const response = await fetch('http://localhost:3000/customer/get-customers-by-name', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                    name_surname: customer_name,
            }),
        })
        .then((data) => { return data.json()})
        .then((data) => {
            if (data !== null) {
                customer_id = data.customer_id;
            }
        });
    }

    async function handleKreacija() {
        await getCustomerIDbyName();

        if (olive_weight_kg <= 100) {
            order_cost = olive_weight_kg * 0.40;
        }
        else if (olive_weight_kg > 100 && olive_weight_kg <= 350) {
            order_cost = olive_weight_kg * 0.35;
        }
        else {
            order_cost = olive_weight_kg * 0.31
        }

        const response = await fetch('http://localhost:3000/orders/create-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                olive_weight_kg: olive_weight_kg,
                boxes: boxes,
                user_made_order: $loggedUserStore.user_id,
                customer: customer_id,
                order_cost: order_cost,
                customer_has_bottles: customer_has_bottles,
            }),
        })
        .then((data) => { return data.json(); })
        .then((data) => {
            if (data !== null) {
                console.log('====================================');
                console.log(data);
                console.log('====================================');
                goto('../Pregled_Narudzbi');
            }
        });
	}
</script>

<body>
    <Sidebar/>
    <UpdateForm>
        <h2 class="title">Nova narudzba</h2>
        <div>
            <div class="input_group">
                <label for="">ID Korisnika:</label>
                <input type="text" id="" bind:value={$loggedUserStore.user_id}>
            </div>
			<div class="input_group">
                <label for="">Ime i Prezime kupca:</label>
                <input type="text" id="" bind:value={customer_name}>
            </div>
			<div class="input_group">
                <label for="">Količina maslina:</label>
                <input type="text" id="" bind:value={olive_weight_kg}>
            </div>
			<div class="input_group">
                <label for="">Boksevi:</label>
                <input type="text" id="" bind:value={boxes}>
            </div>
			<div class="input_group">
                <label for="">Ima li kupac svoje kante:</label>
                <input type="checkbox" id="" bind:value={customer_has_bottles}>
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
</style>