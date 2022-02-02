<script>
    // Top level imports
    import {createEventDispatcher} from 'svelte'

    export let rating = 10

    const dispatch = createEventDispatcher()

    const handleClick = (e) => {

        const rating = e.target.innerText

        dispatch('rating-click', rating)
    }

</script>

<div class="rating-wrapper">
    {
        #each [1,2,3,4,5,6,7,8,9,10] as i
    }
    <!-- {console.log(i, rating)} -->

        <div class={rating === i ? "rate-selected" : "rate-not-selected"} on:click={handleClick}>
            <span class="rate">
                {i}
            </span>
        </div>

    {/each}
</div>

<style>
    .rating-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .rate-not-selected {
        background-color: whitesmoke;
        height: 40px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        cursor: pointer;
    }

    .rate-not-selected:hover {
        color: white;
        background-color: pink;
    }

    .rate-selected {
        background-color: #FF6A95;
        height: 40px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        cursor: pointer;
    }

    .rate {
        font-weight: bold;
    }

</style>