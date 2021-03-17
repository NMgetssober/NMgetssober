import React from 'react';

export function ActivityName(props) {
    const {activity} = props;
console.log(activity)
        return (
        <div>
            <small>
                <p>{activity.activityGroupName ?? activity.treatmentCenterName}</p>
                <p>{activity.activityCity ?? activity.treatmentCenterCity}, NM, {activity.activityZipCode ?? activity.treatmentCenterZipCode}</p>
                <p>{activity.activityWebsite ?? activity.treatmentCenterWebsite}</p>
            </small>
        </div>
    );
}
