<script>
    // Stores
    import { FeedbackStore } from '../stores';

    // Components
    import Card from './Card.svelte'

    // Props
    export let item

    const handleClose = (itemId) => {
        FeedbackStore.update((currentFeedback) => {
            return currentFeedback.filter((feedback) => feedback.id !== itemId)
        })
    }
</script>

    
<Card>
    <div class="num-display">
        {item.rating}
    </div>

    <button class="close" on:click={() => handleClose(item.id)}>X</button>

    <div class="text-display">
        {item.text}
    </div>
</Card>

<style>
    .num-display {
        position: absolute;
        top: -10px;
        left: -10px;
        width: 50px;
        height: 50px;
        color: #fff;
        background-color: #ff6a95;
        border: 1px #eee solid;
        border-radius: 50%;
        padding: 10px;
        font-size: 19px;
        text-align: center;
    }

    .close {
        position: absolute;
        top: 10px;
        right: 20px;
        cursor: pointer;
        border: none;
        background: none;
    }
</style>
