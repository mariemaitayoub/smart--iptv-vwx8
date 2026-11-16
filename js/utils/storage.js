export function saveSelectId(id){
    const key ='seleChannelId'
    localStorage.setItem(key,id);
}
export function loadSelectId(){
    const key ='seleChannelId'
    return localStorage.getItem(key);
}
