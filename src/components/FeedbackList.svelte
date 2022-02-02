<script>
    import {scale, fade} from 'svelte/transition'

    import {FeedbackStore} from '../stores'
    import FeedbackItem from './FeedbackItem.svelte'


</script>

{
    #each $FeedbackStore as fb (fb.id)
}
    <div in:scale out:fade={{duration: 350}}>
        <FeedbackItem item={fb} on:delete-feedback />
    </div>

{/each}