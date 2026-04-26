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
    <div class="bg-olive-800">
        <p>{contacts[0].name}</p>
        <p>{contacts[0].address}</p>
        <p>{contacts[0].email}</p>
        <p>{contacts[0].phone}</p>
    </div>
    <div class="bg-olive-800">
        +
    </div>
</main>