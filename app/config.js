const MOCHI_DDNS = "http://mochi.ddns.net";
// const MOCHI_DDNS = "http://192.168.1.20";

const configuration = {
    MOCHI_API_URL: MOCHI_DDNS + ":80/mochi",
    MOCHI_STREAM_URL: MOCHI_DDNS + ":8081"
};

export { configuration as default };
