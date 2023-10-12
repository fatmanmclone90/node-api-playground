const body = {
    "Hdr": {
        "messageType": "KX_Foo",
        "messageVersion": "v1",
        "created": "2022-02-04T15:09:15.123",
        "uniqueKey": "9306e531-8caa-4eca-8336-ae3c75aa65de",
        "senderID": "K3",
        "destinationID": "N3",
        "resendCounter": 0
    },
    "Request": {
        "userEvents": []
    }
};

const userEvent = {
    "userID": "George123",
    "station": "PIE1RET11",
    "timestamp": "2022-02-04T15:09:15.123",
    "activityCode": "DOLO",
    "reasonCode": "1",
    "bonusActivity": "HEAVY010"
};

export function Build(numberOfItems) {
    let cloneBody = { ...body };

    for (let i = 0; i < numberOfItems; i++) {
        cloneBody.Request.userEvents.push(userEvent)
    }

    return cloneBody;
}