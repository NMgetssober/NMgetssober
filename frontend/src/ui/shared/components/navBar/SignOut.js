import React from 'react'
import {useDispatch} from 'react-redux'
import { httpConfig} from "../../utils/httpConfig";
import { getAuth } from '../../../../store/auth'

export const SignOutComponent = () => {
    const dispatch = useDispatch()
    const signOut = () => {
        httpConfig.get('/apis/sign-out/').then(reply => {

            if (reply.status === 200) {
                window.localStorage.removeItem('authorization')
                dispatch(getAuth(null))
                window.location = '/'

            }
        })
    }

    return(
        <>
            <div>
                <button className="btn btn-outline-none" onClick={signOut}>
                    Sign Out
                </button>
            </div>
        </>
    )
}