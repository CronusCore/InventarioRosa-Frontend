

export function setFirstScreenSize(pixelWidth){
    if(window.innerWidth <= pixelWidth ){
        return true;
    }else{
        return false;
    }
}

