
export const baseLink = 'http://localhost:5105/'
let status = "pending";
let result;


export const authenticate = async (response) => {
    // console.log("in Auth")
    try {

        console.log("auth response", response)
        if (response.ok) {
            status = true;
            result = response;
        }
        else {
            console.log(response, "failed");
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    } catch (err) {
        console.log(err);
        status = false;
        result = err;
    }
    finally {
        return {
            read() {
                if (status === "pending") {
                    throw response;
                } else if (status === false) {
                    throw result;
                } else if (status === true) {
                    return result;
                }
            }
        };
    }


}

const fetchToken = () => {
    const token = localStorage.getItem('token');
    return fetch(baseLink + 'auth', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        credentials: 'same-origin'
    });
}
export const auth = () => {
    let confirmToken = fetchToken();
    return {
        confirm: authenticate(confirmToken)
    };

}

export const afetch = {
    postf: async (url, body) => {
        // let formData = JSON.stringify(body);
        // let formData = new FormData();
        // // console.log(body)
        // for (const key in body) {
        //     if (body.hasOwnProperty(key)) {
        //         const element = body[key];
        //         console.log(element)
        //         formData.append(key, element)
        //     }
        // };
        // console.log(formData)
        try {
            const resp = await fetch(baseLink + url , {
                method: "POST",
                body: body,
                headers: {
                    'Authorization':"Bearer " + localStorage.getItem("token"),
                    
                }
                //credentials: 'same-origin'
                // redirect: "follow"
            });
            // console.log("hy", resp.url)
            const resp_1 = await resp.json();
            // console.log("hy", resp_1.url)
            return resp_1;
        } catch (err) {
            // console.log(err.url);
            return {
                success: false,
                message: err.message
            };
        }
    },
    post: async (url, body) => {
        let formData = JSON.stringify(body);
        // let formData = new FormData();
        // // console.log(body)
        // for (const key in body) {
        //     if (body.hasOwnProperty(key)) {
        //         const element = body[key];
        //         console.log(element)
        //         formData.append(key, element)
        //     }
        // };
        // console.log(formData)
        try {
            const resp = await fetch(baseLink + url , {
                method: "POST",
                body: formData,
                headers: {
                    'Content-Type':'application/json',
                    'Authorization':"Bearer " + localStorage.getItem("token")
                }
                //credentials: 'same-origin'
                // redirect: "follow"
            });
            // console.log("hy", resp.url)
            const resp_1 = await resp.json();
            // console.log("hy", resp_1.url)
            return resp_1;
        } catch (err) {
            // console.log(err.url);
            return {
                success: false,
                message: err.message
            };
        }
    },
    put: async (url, body) => {
        try {
            const resp = await fetch(baseLink + url , {
                method: "PUT",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const resp_1 = await resp.json();
            return resp_1;
        } catch (err) {
            return err;
        }
    },
    delete: async (url, body) => {
        try {
            const resp = await fetch(baseLink + url , {
                method: "DELETE",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const resp_1 = await resp.json();
            return resp_1;
        } catch (err) {
            return err;
        }
    },
    // Loader: <Spinner animation="grow" />,
    Auth: function () {
        const token = localStorage.getItem("token");

        let loggedIn = true;
        if (token == null) {
            loggedIn = false;
        }

        return loggedIn;
    }()

}