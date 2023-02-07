var longestPalindrome = function (s) {
    let maxLen = 0
    let res = '';
    const extendCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxLen) {
                maxLen = right - left + 1
                res = s.slice(left, right + 1)
            }
            right++
            left--
        }
    }
    for (let i = 0; i < s.length; i++) {
        extendCenter(i, i)
        extendCenter(i, i + 1)
    }
    return res
};

longestPalindrome('babad')