import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {httpConfig} from "./shared/utils/httpConfig";
import {fetchActivityFavoritesByProfileId, getActivityFavoritesByProfileId} from "../store/activityFavorite";
import {Container} from "react-bootstrap";


export const Results = ({popupInfo}) => {
    const activityFavorites = useSelector((state) => state.activityFavorite ? state.activityFavorite : [])
    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchActivityFavoritesByProfileId())
    }

    React.useEffect(initialEffects, [dispatch])
    const authorization = window.localStorage.authorization

    const clickFavorite = () => {
        httpConfig.post("/apis/activity-favorite/", {activityFavoriteActivityId: popupInfo.activityId})
            .then(reply => {
                if (reply.status === 200){

                    dispatch(fetchActivityFavoritesByProfileId())
                }
                console.log(reply)
            })

    }

    return (

        <>

            <Container>

                <p className="my-2 font-weight-bold">{popupInfo.activityGroupName ?? popupInfo.treatmentCenterName}</p>

                {authorization && (popupInfo.activityGroupName && (activityFavorites.find(activityFavorite => activityFavorite?.activityFavoriteActivityId == popupInfo.activityId) ? <button onClick={clickFavorite}>Unfavorite</button> : <button onClick={clickFavorite}>Favorite</button>))}
                {popupInfo.activityDescription ?
                    <>
                        <p className="my-0 font-weight-bold">Description:</p>
                        <p>{popupInfo.activityDescription}</p>
                    </>
                    :""}
                <p className="my-0 font-weight-bold">Address:</p>
                <p className="my-0">{popupInfo.activityStreet1 ?? popupInfo.treatmentCenterStreet1}</p>
                <p>{popupInfo.activityStreet2 ?? popupInfo.treatmentCenterStreet2}</p>
                <p className="my-0 font-weight-bold">City:</p>
                <p>{popupInfo.activityCity ?? popupInfo.treatmentCenterCity}</p>
                <p className="my-0 font-weight-bold">Zip code:</p>
                <p>{popupInfo.activityZipCode ?? popupInfo.treatmentCenterZipCode}</p>
                {popupInfo.treatmentCenterPhone ?
                    <>
                        <p className="my-0 font-weight-bold">Phone Number:</p>
                        <p>{popupInfo.treatmentCenterPhone}</p>
                    </>
                    :""}
                {popupInfo.activityTime ?
                    <>
                        <p className="my-0 font-weight-bold">When they meet:</p>
                        <p>{popupInfo.activityTime}</p>
                    </>
                    : ""}
                <p className="my-0 font-weight-bold">Website:</p>
                <a href={popupInfo.activityWebsite ?? popupInfo.treatmentCenterWebsite}>{popupInfo.activityWebsite ?? popupInfo.treatmentCenterWebsite}</a>
            </Container>


        </>
    )


}