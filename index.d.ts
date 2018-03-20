import { KafkaConfig } from "./kafka.interface";
export declare class GapiKafkaModule {
    static forRoot(config: KafkaConfig): typeof GapiKafkaModule;
}
export * from './kafka.service';
export * from './kafka.interface';
export * from './kafka-config.service';
