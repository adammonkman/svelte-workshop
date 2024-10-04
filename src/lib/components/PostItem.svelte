<script lang="ts">
    import type { Post } from "$lib/types";
    import { createEventDispatcher } from "svelte";
    import Button from "./Button.svelte";

    

    // TODO emit custom event that fires when the like button is clicked.

    // TODO declare variables to track the contained posts and if the like button is highlighted.

    export let post : Post;
    export let liked = false;
    const dispatch = createEventDispatcher();
</script>

<!-- TODO apply transition to this parent container -->
<div class="messageParent" >
    <p id="userName">
        {post.userName}
    </p>

    <p>
        {post.content}
    </p>
    <!-- TODO use the post object to render -->
    <!-- 👍 -->
     <Button highlighted={liked}
     on:click={()=>{
        dispatch("liked", {
            state:liked
        })
     }}> <span class="thumb">👍 {post.likes}</span></Button>

    <!-- TODO Make a button here that contain 👍, number of likes, highlights if liked, and emits custom event on click. -->
</div>

<style>
    .messageParent {
        padding: 1rem;
        border: 2px solid var(--focus);
        background-color: var(--bg1);

        min-width: 400px;
        max-width: 400px;
    }

    #userName {
        margin-top: 0.25rem;
        font-weight: bold;
    }

    #votes {
        display: flex;
        gap: 0.5rem;
    }

    .thumb {
        font-size: large;
        transition: transform 400s ease-out;
    }
</style>
