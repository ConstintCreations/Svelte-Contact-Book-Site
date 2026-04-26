<script lang="ts">
    import { onMount } from "svelte";
    import { goto } from '$app/navigation';

    type Contact = {
        id: string;
        name: string;
        address: string;
        email: string;
        phone: string;
    };

    let contacts = $state<Contact[]>([]);

    function goToAddContactPage() {
        goto('/add-contact');
    }

    async function read_contacts() {
        const response = await fetch('/api/read-contacts', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        const result = await response.json();

        return result.contacts;
    }

    async function remove_contact(id: string) {
        const response = await fetch('/api/remove-contact', {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id})
        });
        const result = await response.json();

        contacts = await read_contacts();
    }

    onMount(async () => {
        contacts = await read_contacts();
    });
</script>
<main>
    <button class="bg-mist-500" onclick={goToAddContactPage}>
        +
    </button>
    {#each contacts as contact} 
        <div class="bg-mist-500 mb-4">
            <button onclick={() => {{ remove_contact(contact.id) }}}>Delete</button>
            <p>{contact.name}</p>
            <p>{contact.address}</p>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
        </div>
    {/each}
</main>