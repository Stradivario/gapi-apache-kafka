import { PubSub } from 'graphql-subscriptions';
import { KafkaConfig } from './kafka.interface';
import { KafkaPubSub } from 'graphql-kafka-subscriptions';
export declare class GapiKafkaPubSubService {
    private config;
    private pubSub;
    sub: KafkaPubSub | PubSub;
    constructor(config: KafkaConfig, pubSub?: KafkaPubSub | PubSub | any);
    asyncIterator<T>(event: any): AsyncIterator<T>;
    publish(triggerName: string, payload: any): boolean;
}
