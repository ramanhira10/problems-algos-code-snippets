class Range {

    constructor (start, end) {
        this.start = start;
        this.end = end;
    }
}

const ranges = [new Range(1, 2), new Range(9, 10), new Range(4, 5)];

const sortedRanges = ranges.sort((r1, r2) => r1.start - r2.start);

const missingRanges = [];

sortedRanges.forEach((rangeObj, index) => {
    
    if (sortedRanges[index + 1]) {
        const firstEnd = rangeObj.end;
        const nextStart = sortedRanges[index + 1]['start'];
        const difference = nextStart - firstEnd;

        if (difference > 1) {
            missingRanges.push({
                start: (firstEnd + 1),
                end: (nextStart - 1)}
            );
        }
    }
});


console.log(missingRanges);