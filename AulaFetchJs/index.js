function factoryAluno(nomeAluno,idadeAluno,telefoneAluno){
    const aluno = {
        nome: nomeAluno,
        idade: idadeAluno,
        telefone: telefoneAluno,
        imprimirNomeIdade: function(){
            return this.nome + " - " + this.idade;
        }
    }

    return aluno;
}

function factoryTurma(nomeTurma,alunosTurma){
    const turma = {
        nome: nomeTurma,
        alunos: alunosTurma,
        totalAlunos: function(){
            console.log("Total de alunos: "+this.alunos.length);
        },
        imprimirAlunos: function(){
            for (let i = 0; i < this.alunos.length; i++) {
                console.log(this.alunos[i].nome);      
            }
        }
    }

    return turma;
}

const alunoObjeto1 = factoryAluno("Nome Obj 1",23,"16 1234");
const alunoObjeto2 = factoryAluno("Nome Obj 2",25,"16 7283");
const turmaObjeto = factoryTurma("Turma 1",[alunoObjeto1,alunoObjeto2]);
turmaObjeto.imprimirAlunos();
const alunoObjeto3 = factoryAluno("Nome Obj 3",29,"11 1234");
turmaObjeto.alunos.push(alunoObjeto3);