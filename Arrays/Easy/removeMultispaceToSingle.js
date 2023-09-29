var replacAllMultiSpaceWithSingleSpace = function (str) {
    str = str.trim();
    const n = str.length;
    let i = 0;
    while (i < str.length - 1) {
        if (str.charAt(i) === " " && str.charAt(i + 1) === " ") {
            str = str.substring(0, i) + str.substring(i + 1, n)
        } else {
            i++;
        }

    }

    return str;
}