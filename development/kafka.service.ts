import { PubSub } from 'graphql-subscriptions';
import { AmqpPubSub } from 'graphql-rabbitmq-subscriptions';
import { Service, Container, Injector, ConfigService } from 'gapi';
import { KafkaConfigService } from './kafka-config.service';
import { KafkaConfig } from './kafka.interface';
import { KafkaPubSub } from 'graphql-kafka-subscriptions'

@Service()
export class GapiKafkaPubSubService {
    sub: KafkaPubSub | PubSub;
    constructor(
        private config: KafkaConfig,
        private pubSub?: KafkaPubSub | PubSub | any
    ) {
        if (pubSub) {
            return this.sub = pubSub;
        } else if (process.env.NODE_ENV === 'production') {
            this.sub = new KafkaPubSub({
                topic: 'anything',
                host: 'INSERT_KAFKA_IP',
                port: 'INSERT_KAFKA_PORT',
              });
        } else {
            this.sub = new PubSub();
        }
    }
    asyncIterator<T>(event): AsyncIterator<T> {
        return this.sub.asyncIterator<T>(event);
    }
    publish(triggerName: string, payload: any): boolean {
        return this.sub.publish(triggerName, payload);
    }
}



