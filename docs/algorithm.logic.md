
# Algorithm Logic Documentation

## Overview

The flow distribution algorithm is designed to connect users with astrologers in a fair and balanced manner. The algorithm considers the current number of connections each astrologer has, as well as an adjustable flow multiplier for top astrologers.

## Key Components

1. **User Allocation:**
   - When a user requests an astrologer, the algorithm finds the astrologer with the fewest effective connections, calculated as

2. **Top Astrologers:**
- Top astrologers can receive more connections based on a defined "flowMultiplier". If the flow multiplier is set to 2 for a top astrologer, they will effectively count as half a connection for allocation purposes.

3. **Fair Distribution Logic:**
- The algorithm iterates through the list of astrologers to determine the one with the least effective connections.
- If all astrologers have the same multiplier, the one with the least current connections is selected.

## Algorithm Steps

1. Fetch the list of astrologers.
2. Filter astrologers into top and regular categories based on the `topAstrologer` flag.
3. When a user requests an astrologer:
- Iterate through the astrologers to find the one with the lowest effective connections.
- Assign the user to the selected astrologer and increment their connection count.

## Scalability Considerations

- The algorithm is designed to efficiently handle daily flows of 2000-3000 users and a pool of up to 500 astrologers by maintaining a low complexity of O(n) for user assignments.
- As the user load increases, we may consider implementing caching mechanisms or database indexing to further optimize performance.
