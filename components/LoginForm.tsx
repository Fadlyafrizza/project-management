'use client'

import { useState } from 'react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

import { EyeIcon, EyeOffIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import axios from 'axios'

import { Input } from '@/components/ui/input'

import { useRouter } from 'next/navigation'

export default function LoginForm() {
    const [isVisible, setIsVisible] = useState(false)

    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        axios({
            method: 'POST',
            url: 'https://pm-tools-api.kehosting.in/api/auth/login',
            data: {
                email,
                password
            }
        }).then(res => {
            localStorage.setItem("token", res.data.token)
            router.push('/')
        }).catch(err => {
            setError(err.response.data.error)
        }).finally(() => {
            setLoading(false)
        })

    }

    return (

        <form className='space-y-4' onSubmit={handleSubmit}>
            {error &&
                <Alert variant='destructive'>
                    <AlertDescription>
                        {error}
                    </AlertDescription>
                </Alert>
            }
            {/* Email */}
            <div className='space-y-1'>
                <Label htmlFor='userEmail' className='leading-5'>
                    Email address*
                </Label>
                <Input onChange={(e) => setEmail(e.target.value)} type='email' id='userEmail' placeholder='Enter your email address' />
            </div>

            {/* Password */}
            <div className='w-full space-y-1'>
                <Label htmlFor='password' className='leading-5'>
                    Password*
                </Label>
                <div className='relative'>
                    <Input onChange={(e) => setPassword(e.target.value)} id='password' type={isVisible ? 'text' : 'password'} placeholder='Enter your password' className='pr-9' />
                    <Button
                        variant='ghost'
                        size='icon'
                        onClick={() => setIsVisible(prevState => !prevState)}
                        className='text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent'
                    >
                        {isVisible ? <EyeOffIcon /> : <EyeIcon />}
                        <span className='sr-only'>{isVisible ? 'Hide password' : 'Show password'}</span>
                    </Button>
                </div>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className='flex items-center justify-between gap-y-2'>
                <div className='flex items-center gap-3'>
                    <Checkbox id='rememberMe' className='size-6' />
                    <Label htmlFor='rememberMe' className='text-muted-foreground'>
                        {' '}
                        Remember Me
                    </Label>
                </div>

                <a onClick={() => router.push('/reset-password')} className='hover:underline cursor-pointer'>
                    Forgot Password?
                </a>
            </div>

            <Button className='w-full' disabled={loading} type='submit'>
                Sign in to Shadcn Studio
            </Button>
        </form>
    )
}