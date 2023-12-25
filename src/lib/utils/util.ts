
export const isEqual = (value1: any, value2: any,value3:any) => {
    if (value1 === value2 && value2 === value3) {
        return true;
    } else {
        return false;
    }
}

export const hashCode=(str)=> {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
    }
    return hash;
}