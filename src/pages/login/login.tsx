import tw from 'tailwind-styled-components'
import { HiOutlineMail, HiOutlineKey } from 'react-icons/hi'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import { getGoogleUrl } from '../../utils/getGoogleUrl'

const Login = () => {
    const location = useLocation();
    let from = ((location.state as any)?.from?.pathname as string) || '/';

    return (
        <div className='flex justify-between bg-erieblack h-screen overflow-hidden'>
            <div className="flex flex-col text-white px-44 lt-md:px-8 w-2/4 lt-xl:w-3/4 lt-lg:w-full justify-center">
                <div className="text-[32px] font-bold mb-12">Sign in</div>

                <div className='flex flex-col'>
                    <label htmlFor="email" className="text-brightgray mb-2">Email</label>
                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <HiOutlineMail size={20} />
                        </div>
                        <Input id="email" type="text" placeholder="name@flowbite.com" />
                    </div>
                </div>

                <div className='flex flex-col '>
                    <label htmlFor="password" className='text-brightgray mb-2'>Password</label>
                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <HiOutlineKey size={20} />
                        </div>
                        <Input id="password" type="password" />
                    </div>
                </div>

                <div className='flex justify-between mb-4'>
                    <span className='flex justify-center'>
                        <input id='checkbox' type="checkbox" />
                        <label htmlFor="checkbox" className='ml-1 cursor-pointer font-light text-sm'>Remember for 30 days</label>
                    </span>

                    <span className="underline underline-offset-1 cursor-pointer font-light text-sm">Forgot password</span>
                </div>

                <SignInBtn>Sign In</SignInBtn>

                <div className='w-full text-center mt-[10px] mb-[20px] border-b leading-[.1em] text-sm'>
                    <span className='bg-erieblack px-3'>
                        Or continue with
                    </span>
                </div>

                <div className='flex justify-center gap-12 mt-2'>
                    <a className='cursor-pointer' href={getGoogleUrl(from)}>
                        <FcGoogle size={30} />
                    </a>
                    <div className='cursor-pointer'>
                        <FaGithub size={30} />
                    </div>
                    <div className='cursor-pointer'>
                        <FaLinkedin size={30} />
                    </div>
                </div>
            </div>

            <div className="">
            </div>
        </div>
    )
}

const Input = tw.input`bg-raisinblack p-3 rounded-lg font-medium outline-0 pl-12 text-brightgray w-full`

const SignInBtn = tw.button`bg-toolbox p-3 rounded-lg font-medium mb-6`

export default Login