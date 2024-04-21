import { EventSubscriber, EntitySubscriberInterface } from "typeorm"

@EventSubscriber()
export class Subscriber implements EntitySubscriberInterface {

}
