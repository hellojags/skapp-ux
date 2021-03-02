import React, { Fragment } from 'react'
import AppComment from './AppComment'
import CommentForm from './CommentForm'

const AppComments = () => {
    return (
        <Fragment>
            <AppComment />
            <AppComment />

            <AppComment />

            <AppComment />

            <AppComment />
            <CommentForm />
        </Fragment>
    )
}

export default AppComments
