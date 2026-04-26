<script lang="ts">
    import { goto } from '$app/navigation';

    let name: String = "";
    let address: String = "";
    let email: String = "";
    let phone: String = "";

    async function save_contact() {
        const request = await fetch('/api/add-contact', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, address, email, phone})
        });
        const result = await request.json();

        goto('/');
        
    }
</script>

<main>
    <div class="bg-mist-500">
        <input class="text-input" autocomplete="off" autocorrect="off" spellcheck="false" required bind:value={name} placeholder="Name">
        <input class="text-input" autocomplete="off" autocorrect="off" spellcheck="false" bind:value={address} placeholder="Address">
        <input class="text-input" autocomplete="off" autocorrect="off" spellcheck="false" bind:value={email} placeholder="Email">
        <input class="text-input" autocomplete="off" autocorrect="off" spellcheck="false" bind:value={phone} placeholder="Phone Number">
        <button onclick={save_contact}>Save</button>
    </div>
</main>