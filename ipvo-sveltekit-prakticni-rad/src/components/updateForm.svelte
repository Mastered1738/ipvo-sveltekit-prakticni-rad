<script>
    import { onMount, afterUpdate, onDestroy } from 'svelte';
  
    let contentWidth = 0;
    let contentHeight = 0;
  
    // Function to update dimensions based on content
    function updateDimensions() {
      // You can replace this logic with your own to calculate content width and height
      contentWidth = 200; // Example content width
      contentHeight = 150; // Example content height
    }
  
    // Call updateDimensions after component mounts
    onMount(updateDimensions);
  
    // Call updateDimensions after component updates
    afterUpdate(updateDimensions);
  
    // Clean up any listeners when component is destroyed
    onDestroy(() => {
      // Clean up code here if necessary
    });
</script>
  
<div class="container">
    <div class="box" style="width: {contentWidth}px; height: {contentHeight}px;">
    </div>
</div>

<style>
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    .box{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: auto;
        padding: 20px;
        border: 2px solid #ccc;
        border-radius: 15px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
</style>
  
  