import { Collection } from "@/components/shared/Collection"
import { navLinks } from "@/constants"
import { getAllImages, getAllImagesByUserId } from "@/lib/actions/image.actions"
import Image from "next/image"
import Link from "next/link"
import { auth } from '@clerk/nextjs/server'
import { getUserById } from "@/lib/actions/user.actions"


const Home = async (props: { searchParams?: Promise<{page?:string; query?:string;}> }) => {
    const searchParams = await props.searchParams;
    const page = Number(searchParams?.page) || 1;
    const searchQuery = (searchParams?.query as string) || '';
    // const images = await getAllImages({ page, searchQuery });
    
    const { userId } = await auth()
    const currentUser = userId ? await getUserById(userId) : null
    const currentUserId = currentUser ? (currentUser._id) : null

    const images = await getAllImagesByUserId({currentUserId, page, searchQuery});
    // console.log(currentUserId)
    // console.log(searchQuery)
    // console.log(images)

    return (
        <>
            <section className="home">
                <h1 className="home-heading"> Unleash Your Creative Vision with Intellicaxt </h1>
                {/* <ul className="w-full flex justify-center justify-items-center gap-20 "> */}
                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6">
                    {navLinks.slice(1, 5).map((link) => (
                        <Link key={link.route} href={link.route} className="flex-col flex-center gap-2" >
                            <div className="w-fit flex-center rounded-full bg-white p-4">
                                <Image src={link.icon} alt="image" width={24} height={24} />
                            </div>
                            <p className="p-14-medium text-center text-white"> {link.label} </p>
                        </Link>
                    ))}
                </div>
            </section>

            {userId ? (
                <section className="mt-12">
                    <Collection 
                        hasSearch={true}
                        images={images?.data}
                        totalPages={images?.totalPage}
                        page={page}
                    />
                </section>
            ) : null}
        </>
    );
};

export default Home