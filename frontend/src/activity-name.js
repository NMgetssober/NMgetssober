import React from 'react';

export function ActivityName(props) {
    const {activity} = props;
console.log(activity)
        return (
        <div>
            <small>

                <p className="my-1 font-weight-bold">{activity.activityGroupName}</p>
                <p className="mt-1 mb-0">{activity.activityCity}, NM, {activity.activityZipCode}</p>
                <a href={activity.activityWebsite}>{activity.activityWebsite}</a>


                <p>{activity.activityGroupName ?? activity.treatmentCenterName}</p>
                <p>{activity.activityCity ?? activity.treatmentCenterCity}, NM, {activity.activityZipCode ?? activity.treatmentCenterZipCode}</p>
                <p>{activity.activityWebsite ?? activity.treatmentCenterWebsite}</p>

            </small>
        </div>
    );
}
