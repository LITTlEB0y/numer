const AlgebraLatex = require('algebra-latex')
 
// Parse from LaTeX ...
const latexInput = '\\frac{1}{\\sqrt{2}}\\cdot x=10'
const algebraObj = new AlgebraLatex().parseLatex(latexInput)
 


 
console.log(algebraObj.toMath()) // output: 1/sqrt(2)*x=10
console.log(algebraObj.toLatex()) // output: \frac{1}{\sqrt{2}}\cdot x=10