const mediaAluno = (n1 = 0, n2 = 0, rep= 0) => {
    let media = (n1 + n2 + rep)/3;
    return media
};

console.log(`A média do aluno após a reposição de notas é: ${mediaAluno(1,5,10).toFixed(1)}`);

