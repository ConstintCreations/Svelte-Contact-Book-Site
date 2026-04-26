<script lang="ts">
    import { onMount } from "svelte";
    import { goto } from '$app/navigation';

    type Contact = {
        name: string;
        address: string;
        email: string;
        phone: string;
    };

    let contacts = $state<Contact[]>([]);

    async function read_contacts() {
        const response = await fetch('/api/read-contacts', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
        const result = await response.json();

        return result.contacts;
    }

    function goToAddContactPage() {
        goto('/add-contact');
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
            <p>{contact.name}</p>
            <p>{contact.address}</p>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
        </div>
    {/each}
</main>