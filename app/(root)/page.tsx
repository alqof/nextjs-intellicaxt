import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'
import { connectToDatabase } from '@/lib/database/mongoose';


const Home = async ()=>{
    const user = await currentUser()
    
    return (
        <>
            <div>
                {user && <p className='mb-3'> Hello, <span className='font-bold'>{user?.username}</span></p>}
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque temporibus quis quisquam similique ipsam pariatur tempora rerum veniam reprehenderit, consequatur error earum velit quos placeat ab commodi sint perspiciatis est, sequi dolores. Dolor, ducimus! Ipsam, nihil a harum ea non consequatur beatae voluptatem ullam? Veniam minima expedita natus. Laboriosam ex, enim aut quo, sequi expedita et cum ipsam dolores dolor, quos omnis iusto repellendus. Quos sit doloribus explicabo quibusdam quasi incidunt cumque quod aperiam, eaque corporis laboriosam ut sunt eos pariatur rerum minus quae nemo aut culpa odit. Animi, eos provident dolores harum commodi id? Illo nihil quia temporibus labore. </p>
            </div>
        </>
    )
}
export default Home