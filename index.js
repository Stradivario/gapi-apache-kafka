"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const gapi_1 = require("gapi");
const kafka_service_1 = require("./kafka.service");
const kafka_config_service_1 = require("./kafka-config.service");
let GapiKafkaModule = GapiKafkaModule_1 = class GapiKafkaModule {
    static forRoot(config) {
        gapi_1.Container.set(kafka_service_1.GapiKafkaPubSubService, new kafka_service_1.GapiKafkaPubSubService(config));
        return GapiKafkaModule_1;
    }
};
GapiKafkaModule = GapiKafkaModule_1 = __decorate([
    gapi_1.GapiModule({
        services: [
            kafka_config_service_1.KafkaConfigService
        ]
    })
], GapiKafkaModule);
exports.GapiKafkaModule = GapiKafkaModule;
__export(require("./kafka.service"));
__export(require("./kafka.interface"));
__export(require("./kafka-config.service"));
var GapiKafkaModule_1;
