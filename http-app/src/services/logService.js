import * as Sentry from '@sentry/browser';

function init () {
    Sentry.init({ dsn: "https://1e0601be8b374c6dbd4fc93ea835a4cc@sentry.io/1519079" });
}

function log (error) {
Sentry.captureException(error);
}

export default {
init,
log
};