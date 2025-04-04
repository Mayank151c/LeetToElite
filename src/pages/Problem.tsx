import { useState } from 'react';
import '../styles/Problem.css';
import { Solution } from '../types';
import Dropdown from '../components/Dropdown';
import Header from '../components/Header';

const prblm = {
  id: 1,
  title: "Set Matrix Zero",
  desc: "Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0 and then return the matrix.",
  solutions: [
    {
      title: 'Brute Force',
      approach: "The steps are the following:\n\n1. First, we will use two loops(nested loops) to traverse all the cells of the matrix.\n2. If any cell (i,j) contains the value 0, we will mark all cells in row i and column j with -1 except those which contain 0.\n3. We will perform step 2 for every cell containing 0.\n4. Finally, we will mark all the cells containing -1 with 0.\n5. Thus the given matrix will be modified according to the question.",
      code: "#include <bits/stdc++.h>\nusing namespace std;\n\nvoid markRow(vector<vector<int>> &matrix, int n, int m, int i) {\n    // set all non-zero elements as -1 in the row i:\n    for (int j = 0; j < m; j++) {\n        if (matrix[i][j] != 0) {\n            matrix[i][j] = -1;\n        }\n    }\n}\n\n\nvoid markCol(vector<vector<int>> &matrix, int n, int m, int j) {\n    // set all non-zero elements as -1 in the col j:\n    for (int i = 0; i < n; i++) {\n        if (matrix[i][j] != 0) {\n            matrix[i][j] = -1;\n        }\n    }\n}\n\nvector<vector<int>> zeroMatrix(vector<vector<int>> &matrix, int n, int m) {\n\n    // Set -1 for rows and cols\n    // that contains 0. Don't mark any 0 as -1:\n\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < m; j++) {\n            if (matrix[i][j] == 0) {\n                markRow(matrix, n, m, i);\n                markCol(matrix, n, m, j);\n            }\n        }\n    }\n\n    // Finally, mark all -1 as 0:\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < m; j++) {\n            if (matrix[i][j] == -1) {\n                matrix[i][j] = 0;\n            }\n        }\n    }\n\n    return matrix;\n}\n\nint main()\n{\n    vector<vector<int>> matrix = {{1, 1, 1}, {1, 0, 1}, {1, 1, 1}};\n    int n = matrix.size();\n    int m = matrix[0].size();\n    vector<vector<int>> ans = zeroMatrix(matrix, n, m);\n\n    cout << \"The Final matrix is: n\";\n    for (auto it : ans) {\n        for (auto ele : it) {\n            cout << ele << \" \";\n        }\n        cout << \"n\";\n    }\n    return 0;\n}"
    },
    {
      title: 'Optimized',
      approach: "The steps are the following:\n\n1. First, we will use two loops(nested loops) to traverse all the cells of the matrix.\n2. If any cell (i,j) contains the value 0, we will mark all cells in row i and column j with -1 except those which contain 0.\n3. We will perform step 2 for every cell containing 0.\n4. Finally, we will mark all the cells containing -1 with 0.\n5. Thus the given matrix will be modified according to the question.",
      code: "#include <bits/stdc++.h>\nusing namespace std;\n\nvoid markRow(vector<vector<int>> &matrix, int n, int m, int i) {\n    // set all non-zero elements as -1 in the row i:\n    for (int j = 0; j < m; j++) {\n        if (matrix[i][j] != 0) {\n            matrix[i][j] = -1;\n        }\n    }\n}\n\n\nvoid markCol(vector<vector<int>> &matrix, int n, int m, int j) {\n    // set all non-zero elements as -1 in the col j:\n    for (int i = 0; i < n; i++) {\n        if (matrix[i][j] != 0) {\n            matrix[i][j] = -1;\n        }\n    }\n}\n\nvector<vector<int>> zeroMatrix(vector<vector<int>> &matrix, int n, int m) {\n\n    // Set -1 for rows and cols\n    // that contains 0. Don't mark any 0 as -1:\n\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < m; j++) {\n            if (matrix[i][j] == 0) {\n                markRow(matrix, n, m, i);\n                markCol(matrix, n, m, j);\n            }\n        }\n    }\n\n    // Finally, mark all -1 as 0:\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < m; j++) {\n            if (matrix[i][j] == -1) {\n                matrix[i][j] = 0;\n            }\n        }\n    }\n\n    return matrix;\n}\n\nint main()\n{\n    vector<vector<int>> matrix = {{1, 1, 1}, {1, 0, 1}, {1, 1, 1}};\n    int n = matrix.size();\n    int m = matrix[0].size();\n    vector<vector<int>> ans = zeroMatrix(matrix, n, m);\n\n    cout << \"The Final matrix is: n\";\n    for (auto it : ans) {\n        for (auto ele : it) {\n            cout << ele << \" \";\n        }\n        cout << \"n\";\n    }\n    return 0;\n}"
    },
  ]
}

export default function Problem() {
  const [problem, setProblem] = useState(prblm);
  setProblem(prblm);
  return <>
    <Header path={problem.title}/>
    <div className='problem' key={problem.id}>
      <div className='problem-content'>
        <b>Problem Statement</b>
        <pre>{problem.desc}</pre>
        {
          problem.solutions.map((solution: Solution, index: number) => (
            <Dropdown title={`Solution ${index+1} ${solution.title ? ': ' + solution.title : ''}`} key={index}>
              <pre className='sol-head'>Approach</pre>
              <pre>{solution.approach}</pre>
              <hr/>
              <pre className='sol-head'>Code</pre>
              <pre>{solution.code}</pre>
            </Dropdown>
          ))
        }
      </div>
    </div>
  </>
}