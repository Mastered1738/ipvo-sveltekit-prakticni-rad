<script>
    let username = '';
    let password = '';
  
    function handleLogin() {
      // Perform login logic here
      console.log('Username:', username);
      console.log('Password:', password);
    }
  </script>
<body>
</body>
<div class="container">
    <div class="box">
        <h2 class="title">Torač</h2>
        <div class="input_group">
            <label for="Username">Korisničko ime:</label>
            <input type="text" id="Username" bind:value={username}>
        </div>
        <div class="input_group">
            <label for="Password">Lozinka:</label>
            <input type="text" id="Password" bind:value={password}>
        </div>
        <button class="login" on:click={handleLogin}>Login</button>
    </div>
</div>

<style>
    body {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #b2ff7ea9;
    }
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    .box{
        width: auto;
        padding: 20px;
        border: 2px solid #ccc;
        border-radius: 15px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .input-group {
        margin-bottom: 15px;
    }
    .input-group label {
        display: block;
        margin-bottom: 5px;
    }
    .input-group input {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    .login {
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
    .login:active {
        background-color: #0056b3;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        transform: translateY(1px);
    }
    .title{
        text-align: center;
    }
</style>