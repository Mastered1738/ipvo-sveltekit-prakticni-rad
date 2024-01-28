<script>
</script>

<div class="box">
  <slot></slot>
</div>

<style>
    .box {
        position: fixed;
		max-height: 80vh;
        overflow-y: auto;
        width: auto;
        padding: 20px;
        border: 2px solid #ccc;
        border-radius: 15px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
</style>