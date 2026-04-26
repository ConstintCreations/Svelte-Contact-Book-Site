import { json } from '@sveltejs/kit';
import db from '$lib/server/db';

export async function POST({ request }) {
    const { name, address, email, phone } = await request.json();

    const statement = db.prepare(
        `INSERT INTO contacts (name, address, email, phone) VALUES (@name, @address, @email, @phone)`
    );
    statement.run({ name, address, email, phone });

    return json({ success: true }, { status: 201 });
}