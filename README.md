[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12075974&assignment_repo_type=AssignmentRepo)
# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make qicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

Going through the code and piecing it out (see comments on code), I have come to the conclusion
that a $\Theta$ bound for its worst-case runtime is O(n^2), with the average being nlogn. This is
because there is a function with a time complexity of n and a logorithmic loop within the primary
function, however, if that logorithmic loop reaches its worst case it has a complexity of n
resulting in n*n complexity.