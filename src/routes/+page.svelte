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
    <h1 class="text-center font-bold text-5xl m-8 text-mist-100 underline">Contacts</h1>
    <div class="flex flex-row flex-wrap">

    <button class="bg-mist-500 text-mist-200 border-mist-400 contact-item text-[120px] w-[200px] grid place-items-center cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-mist-400 hover:border-mist-300 hover:text-mist-100 focus:scale-105 focus:bg-mist-400 focus:border-mist-300 focus:text-mist-100 outline-none" onclick={goToAddContactPage}>
        +
    </button>
    
    {#each contacts as contact} 
        <div class="bg-mist-500 text-mist-200 border-mist-400 contact-item min-w-[200px] w-fit py-[15px] px-[30px]">
            <div class="flex flex-row justify-between mt-[10px] gap-[30px]">
                <p class="font-bold text-[18px]">{contact.name}</p>
                <button class="cursor-pointer text-red-400 size-[24px] hover:text-red-300 hover:scale-110 focus:text-red-300 focus:scale-110 outline-none transition-all duration-300 ease-in-out" onclick={() => {{ remove_contact(contact.id) }}}><svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="24" height="24" fill="currentColor"> <path id="Background" fill-rule="evenodd" class="s0" d="m262.61 45.74l24.58 36.83h46.74c8.9 0 16.07 7.17 16.07 16.07 0 8.91-7.17 16.07-16.07 16.07h-5.36v203.58c0 29.59-23.97 53.57-53.57 53.57h-150c-29.6 0-53.57-23.98-53.57-53.57v-203.58h-5.36c-8.9 0-16.07-7.16-16.07-16.07 0-8.9 7.17-16.07 16.07-16.07h46.74l24.58-36.9c6.96-10.38 18.68-16.67 31.2-16.67h62.75c12.52 0 24.24 6.29 31.27 16.74zm-98.44 17.81l-12.72 19.02h97.1l-12.72-19.02c-1.01-1.47-2.68-2.41-4.49-2.41h-62.75c-1.8 0-3.48 0.87-4.42 2.41zm-60.6 51.16v203.58c0 11.85 9.58 21.42 21.43 21.42h150c11.85 0 21.43-9.57 21.43-21.42v-203.58zm53.57 42.86v139.29c0 5.89-4.82 10.71-10.71 10.71-5.9 0-10.72-4.82-10.72-10.71v-139.29c0-5.89 4.82-10.71 10.72-10.71 5.89 0 10.71 4.82 10.71 10.71zm53.57 0v139.29c0 5.89-4.82 10.71-10.71 10.71-5.9 0-10.72-4.82-10.72-10.71v-139.29c0-5.89 4.82-10.71 10.72-10.71 5.89 0 10.71 4.82 10.71 10.71zm53.57 0v139.29c0 5.89-4.82 10.71-10.71 10.71-5.89 0-10.72-4.82-10.72-10.71v-139.29c0-5.89 4.83-10.71 10.72-10.71 5.89 0 10.71 4.82 10.71 10.71z"/></svg></button>
            </div>
            <hr class="border-mist-400 border-[2px] my-[4px]">
            <p class="text-mist-300 text-[18px] mt-[10px] mb-[2px]">{contact.address}</p>
            <p class="text-mist-300 text-[18px] my-[2px]">{contact.email}</p>
            <p class="text-mist-300 text-[18px] my-[2px]">{contact.phone}</p>
        </div>
    {/each}
    </div>
</main>