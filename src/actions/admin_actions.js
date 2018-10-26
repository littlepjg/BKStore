import { ALERT_MSG } from './types';

export function alertMsg(alertMsg) {
    return {
        type: ALERT_MSG,
        alertMsg
    }
}