const apiURL = "http://localhost:8080/api/v1";

export const apiService = { apiCall }

function createDefaultHeader() {
    let header: any = {}
    header["Content-Tpye"] = "application/json"
    return header
}

function createRequestOptions(props: any) {
    let defaultHeader = createDefaultHeader()
    const finalHeaders = Object.assign({}, defaultHeader, props.header)
    return {
        method: props.method,
        headers: finalHeaders,
        body: props.body
    }
}

function apiCall(path: string, requestOptions: any) {
    const url = apiURL + path
    const props = {
        method: requestOptions.method,
        body: requestOptions.body
    }
    requestOptions = createRequestOptions(props)

    return fetch(`${url}`, requestOptions)
        .then(handleResponse)
        .then(
            (response: any) => {
                return response.data
            },
            (error: any) => {
                console.log('Error connecting service', error)
                return Promise.reject(error)
            }
        )
}

function handleResponse(response: any) {
    return response.text().then((text: string) => {
        const data = text && JSON.parse(text)
        if (!response.ok) {
            if (response.status === 401) {
                console.log(response)
            }

            const error = (data && data.message) || response.status;
            return Promise.reject(error);
        } else if (response !== null && response.status === 200) {
            if (data.status !== 'OK') {
                const error = (data && data.reason) || (response && response.status)
                return Promise.reject(error)
            }
        }
        return data
    })
}