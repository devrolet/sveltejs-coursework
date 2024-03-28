<script>
    import Product from './Product.svelte';
    import CartItems from './CartItems.svelte';
    import FamilyNode from './FamilyNode.svelte';

    // SVELTE unable to go further than one level in a nested array, must use self
    let familyStructure = [
        {
            isParent: true,
            name: "Chris",
            children: [
                {
                    isParent: true,
                    name: "Amber",
                    children: [
                        {
                            isParent: false, name: "Angel"
                        }
                    ]
                }
                    
            ]
        },
        { isParent: false, name: "Hannah"}
    ]

    let renderedComponent = {cmp: Product, title: "Test Product", id: "p1"}

    let toggle = () => {
        if(renderedComponent.cmp === Product) {
            renderedComponent = {cmp: CartItems, title: "Cart Test Product", id: "p2"}
        } else {
            renderedComponent = {cmp: Product, title: "Test Product", id: "p1"}
        }
    }
</script>

<button on:click={toggle}>Toggle Display</button>
<svelte:component 
    this={renderedComponent.cmp}  
    title={renderedComponent.title} 
    id={renderedComponent.id} 
/>

{#each familyStructure as familyMember}
    <FamilyNode member={familyMember} />
{/each}