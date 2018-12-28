let func = {};

class Socket {
    constructor(url) {
        console.log(url);
        this.ws = new WebSocket(url);
        this.ws.addEventListener("open", (evt) => {
            console.log("connect......");
        });

        this.ws.onmessage = (evt) => {
            const params = this._decode(evt.data);
            if (func[`${params.class}-${params.action}`]) {
                func[`${params.class}-${params.action}`](params.content);
            }
        };

        this.ws.addEventListener("close", (evt) => {
            console.log("close....");
        });
    }

    on = (type, callback = () => {}, action = "index") => {
        func[`${type}-${action}`] = callback;
    }

    emit = (type, params = {}, action = 'index') => {
        const data = this._encode(type, params, action);
        this.ws.send(data);
    }

    _encode = (type, params = {}, action = 'index') => {
        const data = {
            class: type,
            content: JSON.stringify(params),
            action
        };
        return JSON.stringify(data);
    }

    _decode = (data) => {
        const params = JSON.parse(data);
        return {
            ...params,
            content: JSON.parse(params.content)
        };
    }
}

export default Socket;