<script lang="ts">
    let name: String;
    let address: String;
    let email: String;
    let phone: String;

    function save_contact() {
        console.log(`${name}, ${address}, ${email}, ${phone}`);
    }
</script>

<main>
    <div class="bg-mist-500">
        <input class="text-input" autocomplete="off" autocorrect="off" spellcheck="false" required bind:value={name} placeholder="Name">
        <input class="text-input" autocomplete="off" autocorrect="off" spellcheck="false" required bind:value={address} placeholder="Address">
        <input class="text-input" autocomplete="off" autocorrect="off" spellcheck="false" required bind:value={email} placeholder="Email">
        <input class="text-input" autocomplete="off" autocorrect="off" spellcheck="false" required bind:value={phone} placeholder="Phone Number">
        <button onclick={save_contact}>Save</button>
    </div>
</main>