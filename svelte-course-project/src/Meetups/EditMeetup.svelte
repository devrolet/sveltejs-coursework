<script>
    import { createEventDispatcher } from 'svelte'
    import TextInput from '../UI/TextInput.svelte';
    import Button from '../UI/Button.svelte';
    import Modal from '../UI/Modal.svelte';
    import { isEmpty, isValidEmail } from '../helpers/validation.js';

    let title = '';
    let titleValid = false
    let subtitle = '';
    let subtitleValid = false;
    let address = '';
    let addressValid = false;
    let email = '';
    let emailValid = false;
    let description = '';
    let descriptionValid = false;
    let imageUrl = '';
    let imageURLValid = false;
    let formIsValid = false;

    const dispatch = createEventDispatcher();

    $: titleValid = !isEmpty(title);
    $: subtitleValid = !isEmpty(subtitle);
    $: addressValid = !isEmpty(address);
    $: emailValid = isValidEmail(email);
    $: descriptionValid = !isEmpty(description);
    $: imageURLValid = !isEmpty(imageUrl);
    $: formIsValid = 
        titleValid && 
        subtitleValid && 
        addressValid && 
        descriptionValid &&
        emailValid &&
        imageURLValid;

    function submitForm() {
        dispatch('save', {
            title: title,
            subtitle: subtitle,
            address: address,
            email: email,
            description: description,
            imageUrl: imageUrl
        });
    }
    
    let cancel = () => dispatch('cancel');


</script>

<style>
    form {
        width: 100%;
    }
</style>
<Modal title="Edit Meetup Information" on:cancel>
    <form on:submit|preventDefault="{submitForm}">
        <TextInput 
            id="title" 
            label="Title" 
            value={title}
            valid={titleValid}
            validityMessage="Please enter a valid title"
            on:input={event => (title = event.target.value) } />
        <TextInput 
            id="subtitle" 
            label="Subtitle"
            value={subtitle} 
            valid={subtitleValid}
            validityMessage="Please enter a valid subtitle"
            on:input={event => (subtitle = event.target.value)} />
        <TextInput 
            id="imageUrl" 
            label="Image URL" 
            value={imageUrl} 
            valid={imageURLValid}
            validityMessage="Please enter a valid image URL"
            on:input={event => (imageUrl = event.target.value)} />
        <TextInput 
            id="address" 
            label="Address" 
            value={address} 
            valid={addressValid}
            validityMessage="Please enter a valid address"
            on:input={event => (address = event.target.value)} />
        <TextInput 
            id="email" 
            label="Email"
            type="email"
            value={email} 
            valid={emailValid}
            validityMessage="Please enter a valid email"
            on:input={event => (email = event.target.value)} />
        <TextInput 
            id="description" 
            label="Description"
            controlType="textarea"
            value={description} 
            valid={descriptionValid}
            validityMessage="Please enter a valid description"
            on:input={event => (description = event.target.value)} />
    </form>
    <div slot="footer">
        <Button type="button" mode="outline" on:click={cancel}>Cancel</Button>
        <Button type="button" on:click={submitForm} disabled={!formIsValid}>Save</Button>
    </div>
</Modal>