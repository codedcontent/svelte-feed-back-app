<script>
    import { FeedbackStore } from "../stores";

    // Reactive values
    $: count = $FeedbackStore.length
    $: average = $FeedbackStore.reduce((accumulator, {rating}) => accumulator + rating, 0) / count
</script>

<div class="feedback-stats">
    <h4>{count} Reviews</h4>
    <h4>Ratings Average: {average}</h4>
</div>

<style>
    .feedback-stats {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>