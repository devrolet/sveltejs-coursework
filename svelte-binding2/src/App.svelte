<script>
    let val = 'Malichi';

    let setValue = event => val = event.target.setValue;
</script>

<h1>Bindings & Forms</h1>
<input type="text" value={val} on:input={setValue}>
