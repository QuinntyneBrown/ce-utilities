﻿import { Store  } from "./store";
import { STORE_KEY, TOKEN_KEY } from "./constants";

export var fetch = (options: { url: string, method?: string, data?: any, headers?: any, authRequired?: boolean }) => {
    return new Promise(resolve => {
        var xhr = new XMLHttpRequest();
        xhr.open(options.method || "GET", options.url, true);

        options.headers = options.headers || { "Content-Type": "application/json;charset=UTF-8" };
        
        if (options.authRequired)
            options.headers["Authorization"] = `Bearer ${Store.Instance.get({ name: TOKEN_KEY })}`;       
        

        for (var prop in options.headers) {
            xhr.setRequestHeader(prop, options.headers[prop]);
        }
        
        xhr.onload = (e) => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                }
                else {
                    console.error(xhr.statusText);
                }
            }
        };

        if (typeof options.data != "string") {
            options.data = JSON.stringify(options.data);
        }
        
        xhr.send(options.data);
    });
}

