<script>
    import { get } from "svelte/store";

    let name = "jonkler";
    let sigmalevel = 100;

    function getSigma(){
        sigmalevel = sigmalevel + 100;
    }
</script>

<hi class="title">erm what the sigma</hi>

Im the {name} baby! and im sigma level {sigmalevel};

{#if sigmalevel > 500}
<span> Youre sigma </span>
{:else}
<span>youre not sigma nor goated</span>
{/if}

<button on:click={getSigma}>Get sigma</button>


<style>
   .title{
    color:blue;
   }
</style>
