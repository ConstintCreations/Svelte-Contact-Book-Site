<script lang="ts">
    type Contact = {
        name: string;
        address: string;
        email: string;
        phone: string;
    };

    let contacts: Contact[] = [{name: 'Test', address: '123 Test St.', email: 'test@test.com', phone: '123-456-7890'}];
</script>
<main>
    <div class="bg-mist-500">
        +
    </div>
    {#each contacts as contact} 
        <div class="bg-mist-500">
            <p>{contact.name}</p>
            <p>{contact.address}</p>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
        </div>
    {/each}
</main>