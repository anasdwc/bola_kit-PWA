const webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BALBSXyXHf1QKmC3hRjMV5ht31WZu1oJfF9WCpnvqi_vE8Tas4CZkI7VPkAvOUW_8Rb0yPXJG49gLtfsJsfVT6Y",
    "privateKey": "xcfKJts5Wx2WD6dd9oAQgP1lP2qCTGsxitE7MHkmEMc"
};

webPush.setVapidDetails(
    "mailto:example@yourdomain.org",
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

const pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/ebvqNyt5G8U:APA91bF-SifQOlq38vjeCKBsKESUjxdOcm5frmE9_y8tPiDfXS_JBm9Y7RSL8L-kx9LEfAjBwWo5-h7OeNXvhUjX1D7EoxjzLGAzuN4qxYV-Z4qhRMAn3cckelRF5puxcvDTQZL5zW84",
    "keys": {
        "p256dh": "BN5Q1Zq7op4sgcbopyWxWv6zShKAbbDyn/BLEEdiZvJ3hL8OlvlFUroAOHcrnkdsXp8I7ANgGOawyFjifNQmFnE=",
        "auth": "oesAMBxRfK+2dEqS+wwXrg=="
    }
};

const payload = "Anda telah berlangganan Bola Kita";

const options = {
    gcmAPIKey: '596627362524',
    TTL: 60
};

webPush.sendNotification(
    pushSubscription,
    payload,
    options
);