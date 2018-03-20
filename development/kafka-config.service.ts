import { Service } from "gapi";
import { KafkaConfig } from "./kafka.interface";

@Service()
export class KafkaConfigService extends KafkaConfig {
    constructor() {
        super();
    }
}