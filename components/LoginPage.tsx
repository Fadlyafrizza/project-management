import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import Logo from '@/assets/svg/logo'
import AuthBackgroundShape from '@/assets/svg/auth-background-shape'
import LoginForm from '@/components/LoginForm'

const Login = () => {
    return (
        <div className='relative flex h-auto min-h-screen items-center justify-center overflow-x-hidden px-4 py-10 sm:px-6 lg:px-8'>
            <div className='absolute'>
                <AuthBackgroundShape />
            </div>

            <Card className='z-1 w-full border-none shadow-md sm:max-w-lg'>
                <CardHeader className='gap-6'>
                    <Logo className='gap-3' />

                    <div>
                        <CardTitle className='mb-1.5 text-2xl'>Sign in to Shadcn Studio</CardTitle>
                        <CardDescription className='text-base'>Ship Faster and Focus on Growth.</CardDescription>
                    </div>
                </CardHeader>

                <CardContent>
                    {/* Quick Login Buttons */}

                    {/* <div className='mb-6 flex flex-wrap gap-4 sm:gap-6'>
                        <Button variant='outline' className='grow'>
                            Login as User
                        </Button>
                        <Button variant='outline' className='grow'>
                            Login as Admin
                        </Button>
                    </div> */}

                    {/* Login Form */}
                    <div className='space-y-4'>
                        <LoginForm />

                        <p className='text-muted-foreground text-center'>
                            New on our platform?{' '}
                            <a href='/register' className='text-card-foreground hover:underline'>
                                Create an account
                            </a>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Login
