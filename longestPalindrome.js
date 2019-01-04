const longestPalindrome = s => {
  if (s.length < 2) return s;
  if (s === null) return '';
  let longest = s.slice(0, 1);
  for (let i = 0; i < s.length; i++) {
    let temp = expand(s, i, i);
    if (temp.length > longest.length) longest = temp;
    temp = expand(s, i, i + 1);
    if (temp.length > longest.length) longest = temp;
  }
  return longest;
};

const expand = (s, start, end) => {
  while (start > -1 && end < s.length && s[start] === s[end]) {
    start--;
    end++;
  }
  return s.slice(start + 1, end);
};
