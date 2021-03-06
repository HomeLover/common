/**
 * @method 将日期时间转换为指定格式，如：YYYY-mm-dd HH:MM表示2019-06-06 19:45
 * @date 2021-10-22 13:49
 * @param fmt 需要传入的格式化的形式 如:("YYYY-mm-dd HH:MM:SS")
 * @param date 传入需要格式话的 参数 如:new Date()
 */
function dateFormat(fmt,date) {
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),            //年
        "m+": (date.getMonth() + 1).toString(),         //月
        "d+": date.getDate().toString(),                //日
        "H+": date.getHours().toString(),               //时
        "M+": date.getMinutes().toString(),             //分
        "S+": date.getSeconds().toString(),             //秒
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        }
    }
    return fmt;
}
