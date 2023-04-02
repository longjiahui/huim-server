export enum WSMessageType{
    Message = 'message',
    Config = 'config',
}

export class MessageData {
    constructor(
        public id: string,
        public content: string,
        public type: WSMessageType,
    ){}
}
export class ConfigData {
    constructor(
        public id: string,
        public content: string,
        public type: WSMessageType,
    ){}
}

export type WSMessageData = MessageData | ConfigData

export class WSMessage {
    constructor(
        public id: string,
        public content: string,
        public type: WSMessageType,
        public data: WSMessageData,
    ) {
        
    }
}