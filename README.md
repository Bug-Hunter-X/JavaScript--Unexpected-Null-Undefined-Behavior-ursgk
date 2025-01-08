# JavaScript Null/Undefined Bug

This repository demonstrates a common yet subtle bug in JavaScript related to the handling of null and undefined values. The original code attempts to check for null, but it overlooks the case where a variable might be undefined. This can lead to unexpected errors or incorrect results.

The `bug.js` file shows the buggy code, while `bugSolution.js` provides a corrected version.  The bug is that the function improperly handles undefined inputs, only checking for null inputs.  This illustrates the difference between null and undefined in JavaScript.