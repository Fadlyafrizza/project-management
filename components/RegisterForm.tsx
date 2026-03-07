'use client'

import { useState } from 'react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { useRouter } from 'next/navigation'

import { EyeIcon, EyeOffIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import axios from 'axios'

import { Input } from '@/components/ui/input'

export default function RegisterForm() {
    const [isVisible, setIsVisible] = useState(false)
    const [isConfirmVisible, setIsConfirmVisible] = useState(false)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setError("Passwords do not match")
            return
        }

        setLoading(true)

        axios({
            method: 'POST',
            url: 'https://pm-tools-api.kehosting.in/api/auth/register',
            data: {
                name,
                email,
                password
            }
        }).then(res => {
            setSuccess(res.data.message)
        }).catch(err => {
            console.log(err)
            setError(err.response.data.error)

            console.dir(err)
        }).finally(() => {
            setLoading(false)
            router.push('/login')
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

            {success &&
                <Alert variant='default'>
                    <AlertDescription>
                        {success}
                    </AlertDescription>
                </Alert>
            }
            {/* Email */}
            <div className='space-y-1'>
                <Label htmlFor='userName' className='leading-5'>
                    name
                </Label>
                <Input onChange={(e) => setName(e.target.value)} type='text' id='userName' placeholder='Enter your name' />
            </div>

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
                        type='button'
                        onClick={() => setIsVisible(prevState => !prevState)}
                        className='text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent'
                    >
                        {isVisible ? <EyeOffIcon /> : <EyeIcon />}
                        <span className='sr-only'>{isVisible ? 'Hide password' : 'Show password'}</span>
                    </Button>
                </div>
            </div>

            {/* Confirm Password */}
            <div className='w-full space-y-1'>
                <Label htmlFor='confirmPassword' className='leading-5'>
                    Confirm Password*
                </Label>
                <div className='relative'>
                    <Input onChange={(e) => setConfirmPassword(e.target.value)} id='confirmPassword' type={isConfirmVisible ? 'text' : 'password'} placeholder='Confirm your password' className='pr-9' />
                    <Button
                        variant='ghost'
                        size='icon'
                        type='button'
                        onClick={() => setIsConfirmVisible(prevState => !prevState)}
                        className='text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent'
                    >
                        {isConfirmVisible ? <EyeOffIcon /> : <EyeIcon />}
                        <span className='sr-only'>{isConfirmVisible ? 'Hide confirm password' : 'Show confirm password'}</span>
                    </Button>
                </div>
            </div>

            <Button className='w-full' disabled={loading} type='submit'>
                Sign up to KanbanBoard
            </Button>



        </form>
    )
}