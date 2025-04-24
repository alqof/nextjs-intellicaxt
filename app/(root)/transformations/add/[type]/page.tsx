import Header from '@/components/shared/Header'
import TransformationForm from '@/components/shared/TransformationForm';
import { transformationTypes } from '@/constants'
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs/server';


const TransformationAddTypePage = async (props: {params?: Promise<{type?: "restore" | "fill" | "remove" | "recolor" | "removeBackground"}>}) => {
    const { userId, redirectToSignIn } = await auth()
    if (!userId) return redirectToSignIn()
    const user = await getUserById(userId);

    const params = await props.params;
    const type = params?.type;
    const transformation = type ? transformationTypes[type] : null;


    return (
        <>
            {type ? (
                <>
                    <Header title={transformation?.title} subtitle={transformation?.subTitle}/>
                
                    <section className="mt-10">
                        <TransformationForm 
                            action="Add"
                            userId={user._id}
                            type={transformation?.type as TransformationTypeKey}
                            creditBalance={user.creditBalance}
                        />
                    </section>
                </>
            ) : null}
        </>
    )
}
export default TransformationAddTypePage