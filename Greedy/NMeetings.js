
function nMeetings(start,end,i,ans,last){
    if(i===start.length){
        return
    }
    if(start[i]>last[1]){
        last = [start[i],end[i]]
        ans++
    }
    
    console.log(ans)
    nMeetings(start,end,i+1,ans,last)
    nMeetings(start,end,i+1,ans,last)
}

nMeetings([1,3,0,5,8,5],[2,4,6,7,9,9],1,0,[1,2])