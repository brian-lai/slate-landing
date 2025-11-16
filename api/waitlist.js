import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
    // This will show up in Vercel logs if you forget env vars
    console.error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { email } = req.body || {};

        if (
            !email ||
            typeof email !== 'string' ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ) {
            return res.status(400).json({ error: 'Invalid email' });
        }

        const source =
            (req.headers['x-slate-source'] ||
                req.headers['user-agent'] ||
                'unknown')?.toString().slice(0, 255);

        const { error } = await supabase
            .from('waitlist')
            .insert({ email: email.toLowerCase(), source });

        if (error) {
            // 23505 = unique_violation on Postgres
            if (error.code === '23505') {
                return res.status(200).json({
                    ok: true,
                    message: 'Already on the waitlist – thanks!'
                });
            }
            console.error('Supabase insert error:', error);
            return res.status(500).json({ error: 'Something went wrong' });
        }

        return res.status(200).json({
            ok: true,
            message: 'Added to waitlist. Thank you!'
        });
    } catch (err) {
        console.error('Handler error:', err);
        return res.status(500).json({ error: 'Unexpected error' });
    }
}