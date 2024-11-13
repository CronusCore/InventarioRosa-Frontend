


export const endpointHost= 'http://localhost:1234';

export function setFirstScreenSize(pixelWidth){
    if(window.innerWidth <= pixelWidth ){
        return true;
    }else{
        return false;
    }
}

export async function getData({url="",method="GET", headers = {"accept": "application/json",
    "content-type": "application/json"}})
{
    const res = await fetch(url, {
        method,
        headers
    });
    const data = await res.json();

    return data;
}

