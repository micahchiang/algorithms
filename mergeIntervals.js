// from interview cake. A merge intervals variation that achieves O(n log n). If 
// the meetings were sorted, then this would have been O(n).

function mergeRanges(meetings) {
    let sortedMeetings = meetings.sort((a,b) => {
        return a.startTime - b.startTime;
    });
    
    let mergedRanges = [sortedMeetings[0]];
    let mergedMeeting = mergedRanges[mergedRanges.length-1];
    
    for(let i = 1; i < sortedMeetings.length; i++) {
        if(sortedMeetings[i].startTime <= mergedMeeting.endTime) {
            mergedRanges[mergedRanges.length-1].endTime = Math.max(
                mergedMeeting.endTime, sortedMeetings[i].endTime
                );
        } else {
            mergedRanges.push(sortedMeetings[i]);
            mergedMeeting = sortedMeetings[i];
        }
    }
    return mergedRanges;
}