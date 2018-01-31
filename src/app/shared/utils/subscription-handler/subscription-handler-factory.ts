import * as _ from 'lodash';
import { Subscription } from 'rxjs/Subscription';
import { Subscribable } from 'rxjs/Observable';
import { subscribeOn } from 'rxjs/operator/subscribeOn';

export class SubscriptionHandlerFactory {
    static create(): SubscriptionHandler {
        return new SubscriptionHandlerImpl();
    }
}

export interface SubscriptionHandler {
    registerSubscription(subscription: Subscription);
    clearSubscriptions();
}

class SubscriptionHandlerImpl implements SubscriptionHandler {
    private subscriptions: Subscription[];

    constructor() {
        this.subscriptions = [];
    }

    registerSubscription(subscription: Subscription) {
        this.subscriptions.push(subscription);
    }

    clearSubscriptions() {
        _(this.subscriptions).remove().forEach(x => x.unsubscribe());
    }
}
