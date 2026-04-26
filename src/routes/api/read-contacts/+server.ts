import { json } from '@sveltejs/kit';
import db from '$lib/server/db';

export async function GET() {
    const statement = db.prepare(
        `SELECT * FROM contacts`
    );
    const contacts = statement.all();
    return json(contacts);
}