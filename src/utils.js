export const extractIdFromUrl = (url) => {
    let id = url.slice(0, -1);
    const lastSeparator = id.lastIndexOf('/');
    return {id: id.substr(lastSeparator + 1), selfUrl: id.substr(0, lastSeparator)};
}

export default extractIdFromUrl;
