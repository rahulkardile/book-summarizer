'use client'

import { useRouter } from 'next/navigation';
import React, { FormEvent } from 'react'
import { toast } from 'sonner';

const page = () => {
    const router = useRouter();

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')

        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        })

        if (response.ok) {
            toast.success("Welcome " + email);
            router.push('/chat')
        } else {
            toast.error("Something went wrong!")
        }
    }
    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder='enter your email . . .' required />
            <input type="text" name="password" placeholder='enter your password . . . ' required />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default page