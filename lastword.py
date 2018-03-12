def lengthOfLastWord(self, s):
    arr = []
    s = s.rstrip();
    for i in reversed(s):
        if i != ' ':
            arr.append(i)
        else:
            break
    return len(arr)


# return the length of the last word in a string. Another leetcode question. Trying to get used to python syntax by doing simpler algorithms with it.