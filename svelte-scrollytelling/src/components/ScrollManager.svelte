<script>
    import { Scroller, Section } from '@sveltejs/svelte-scroller';
    import CanvasComponent from './CanvasComponent.svelte';

    let currentSection = 0;

    // Function to update canvas to current section
    function updateCanvas(section) {
        currentSection = section;
    }
</script>

<Scroller>
    <Section>
        <div>
            <h2>Section 1 Content</h2>
        </div>
    </Section>
    <div class="section">
        <div>
            <h2>Section 2 Content</h2>
        </div>
    </div>
    <div class="section">
        <div>
            <h2>Section 3 Content</h2>
        </div>
    </div>
    <div class="section">
        <div>
            <h2>Section 4 Content</h2>
        </div>
    </div>
    <div>
        <div>
            <h2>Section 5 Content</h2>
        </div>
    </div>
</Scroller>

<CanvasComponent {currentSection} />

<style>
    /* Styles for sections and scroller here */
</style>