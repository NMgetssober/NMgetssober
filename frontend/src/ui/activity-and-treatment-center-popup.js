import React from 'react';

export function ActivityAndTreatmentCenterPopup(props) {
    const {popupInfo} = props;
console.log(popupInfo)
        return (
        <div>
            <small>

                <p className="my-1 font-weight-bold">{popupInfo.activityGroupName ?? popupInfo.treatmentCenterName}</p>
                <p className="mt-1 mb-0">{popupInfo.activityCity ?? popupInfo.treatmentCenterCity}, NM, {popupInfo.activityZipCode ?? popupInfo.treatmentCenterZipCode}</p>
                <a href={popupInfo.activityWebsite ?? popupInfo.treatmentCenterWebsite}>{popupInfo.activityWebsite ?? popupInfo.treatmentCenterWebsite}</a>




            </small>
        </div>
    );
}
