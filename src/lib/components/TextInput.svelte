<script lang="ts">
    // TODO lets build a TextInput component that can have a placeholder, to be disabled, can have a label, 
    // supports custom style, and exports the input's value.

    export let label = "";
    export let text = "";
    export let placeholder = "some text";

</script>

<div id="inputHolder">
    <span>
        {label}
    </span>
    <input type="text" {placeholder} bind:value={text}>
</div>



<style>
    input {
        border: var(--focus) 2px solid;
        border-radius: 5px;
        background-color: var(--fg0);
        padding: 0.5rem;
        margin: 0.25rem;

        outline: 0;

        flex:1;
    }

    #inputHolder {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
</style>
