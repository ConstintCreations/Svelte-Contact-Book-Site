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

    function goToContacts() {
        goto('/');
    }
</script>

<main>
    <button onclick={goToContacts} class="z-1 font-bold fixed top-[30px] left-[30px] cursor-pointer outline-none transtion-all duration-300 hover:scale-105 hover:text-mist-300 focus:scale-105 focus:text-mist-300 text-mist-400">Back to Contacts</button>
    <div class="grid h-[100vh] w-full place-items-center fixed">
        <div class="bg-mist-500 flex flex-col gap-5 p-[40px] rounded-[30px] border-5 border-mist-400 w-[50vw]">
            <h1 class="underline font-bold text-mist-100 text-center text-4xl mb-8">Add Contact</h1>
            <input class="text-input" autocomplete="off" autocorrect="off" spellcheck="false" required bind:value={name} placeholder="Name">
            <input class="text-input" autocomplete="off" autocorrect="off" spellcheck="false" bind:value={address} placeholder="Address">
            <input class="text-input" autocomplete="off" autocorrect="off" spellcheck="false" bind:value={email} placeholder="Email">
            <input class="text-input" autocomplete="off" autocorrect="off" spellcheck="false" bind:value={phone} placeholder="Phone Number">
            <button class="mt-8 w-full text-mist-200 p-2 text-[18px] bg-mist-700 font-bold rounded-2xl cursor-pointer transiton-all duration-300 hover:scale-105 hover:bg-mist-600 hover:text-mist-100 focus:scale-105 focus:bg-mist-600 focus:text-mist-100 border-none outline-none" onclick={save_contact}>Save</button>
        </div>
    </div>
</main>