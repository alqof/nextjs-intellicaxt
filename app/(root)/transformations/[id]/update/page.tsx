import Header from '@/components/shared/Header';
import TransformationForm from '@/components/shared/TransformationForm';
import { transformationTypes } from '@/constants';
import { getImageById } from '@/lib/actions/image.actions';
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs/server';
import React from 'react'

const TransformationUpdatePage = async ({params:{id}}: SearchParamProps) => {
    const { userId, redirectToSignIn } = await auth()
    if (!userId) return redirectToSignIn()

    const user = await getUserById(userId);
    const image = await getImageById(id);
    const transformation = transformationTypes[image.transformationType as TransformationTypeKey];

    return (
        <>
            <Header title={transformation.title} subtitle={transformation.subTitle} />

            <section className="mt-10">
                <TransformationForm
                    action="Update"
                    userId={user._id}
                    type={image.transformationType as TransformationTypeKey}
                    creditBalance={user.creditBalance}
                    config={image.config}
                    data={image}
                />
            </section>
        </>
    );
}
export default TransformationUpdatePage