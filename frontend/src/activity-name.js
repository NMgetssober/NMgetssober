import React from 'react';

export function ActivityName(props) {
    const {activity} = props;

    return (
        <div>
            <small>
                <p>{activity.activityGroupName}</p>
                <p>{activity.activityCity}, NM, {activity.activityZipCode}</p>
                <p>{activity.activityWebsite}</p>
            </small>
        </div>
    );
}
