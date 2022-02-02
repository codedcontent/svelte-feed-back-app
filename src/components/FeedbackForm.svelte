<script>
    // High order impoorts
    import { v4 as uuidv4 } from 'uuid';

    // Stores
    import { FeedbackStore } from "../stores";

    // Components
    import Button from "../Button.svelte";
    import Card from "./Card.svelte";
    import FeedbackRating from './FeedbackRating.svelte'

    // File variables
    let btnDisabled = false
    let text = ''
    let message
    let min = 10
    $: rating = 10

    const handleInput = () => {
        if (text.trim().length <= min) {
            message = `Text must be at least ${min} characters`
            btnDisabled = true
            return
        }
        message = null
        btnDisabled = false
    }

    const handleRating = (e) => {
        rating = +e.detail
    }

    const handleSubmit = () => {
        const newFeedback = {
            id: uuidv4(),
            text,
            rating
        }

        // Update the FeedbackStore by adding new feedback
        FeedbackStore.update((currentFeedback) => {
            return [...currentFeedback, newFeedback]
        });

        // Reset text and rating values
        text = ''
        rating = 10
    }

</script>

<Card>
    <form on:submit|preventDefault={handleSubmit}>
        <header>
            <h2>How would you rate us?</h2>
        </header>
        <!-- Ratings Select -->
        <FeedbackRating on:rating-click={handleRating} {rating} />
        
        <div class="input-group">
            <input type="text" class='input' bind:value = {text} on:input={handleInput} placeholder="Tell us something that keeps you coming back">
            
            <Button type="submit" disabled={btnDisabled}>Send</Button>
        </div>

        {#if message}

        <div class="message">
            {message}
        </div>

        {/if}
    </form>
</Card>
    
    <style>
        header {
            max-width: 400px;
            margin: auto;
        }

        .input-group {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            border: 1px solid grey;
            padding: 10px;
            margin-top: 40px;
            border-radius: 10px;
        }

        .input {
            flex: 1;
            height: 30px;
            border: none;
            outline: none;
        }
    </style>