"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_subscriptions_1 = require("graphql-subscriptions");
const gapi_1 = require("gapi");
const kafka_interface_1 = require("./kafka.interface");
const graphql_kafka_subscriptions_1 = require("graphql-kafka-subscriptions");
let GapiKafkaPubSubService = class GapiKafkaPubSubService {
    constructor(config, pubSub) {
        this.config = config;
        this.pubSub = pubSub;
        if (pubSub) {
            return this.sub = pubSub;
        }
        else if (process.env.NODE_ENV === 'production') {
            this.sub = new graphql_kafka_subscriptions_1.KafkaPubSub({
                topic: 'anything',
                host: 'INSERT_KAFKA_IP',
                port: 'INSERT_KAFKA_PORT',
            });
        }
        else {
            this.sub = new graphql_subscriptions_1.PubSub();
        }
    }
    asyncIterator(event) {
        return this.sub.asyncIterator(event);
    }
    publish(triggerName, payload) {
        return this.sub.publish(triggerName, payload);
    }
};
GapiKafkaPubSubService = __decorate([
    gapi_1.Service(),
    __metadata("design:paramtypes", [kafka_interface_1.KafkaConfig, Object])
], GapiKafkaPubSubService);
exports.GapiKafkaPubSubService = GapiKafkaPubSubService;
