(function() {

    // ESSA FUNÇÃO ESTÁ  RESPONSAVEL POR PEGAR OS DADOS FAZER A SOMA E REALIZAR A MEDIA

    const IncrementacaoDasNotas = function() {

        let arr = [...arguments]

        const SomaTotal = arr.reduce(function(acc, i) {

            return acc + i
        })
        const media = (SomaTotal / arr.length).toFixed(1)

        return media
    }


    const pegarindice = function(indice) {

        const SelectAtributeAluni = document.querySelector('thead tr')

        const thsdosHEad = SelectAtributeAluni.querySelectorAll('th')

        const AlunoNota = SelectAtributeAluni.querySelector(`[nota-aluno="${indice}"]`)

        const arrNode = [...thsdosHEad]

        const IndiceDosAtributo = arrNode.indexOf(AlunoNota)

        return IndiceDosAtributo

    }


    const IndiceNotas = {

        numero1: pegarindice('1'),
        numero2: pegarindice('2'),
        numero3: pegarindice('3'),
        numero4: pegarindice('4'),
        media: pegarindice('media')
    }

    console.log(IndiceNotas)

    const trs = document.querySelectorAll('tbody tr')



    trs.forEach((el) => {

        const tds = el.querySelectorAll('td')

        let mediaSort = IncrementacaoDasNotas(

            parseFloat(tds[IndiceNotas.numero1].textContent),
            parseFloat(tds[IndiceNotas.numero2].textContent),
            parseFloat(tds[IndiceNotas.numero3].textContent),
            parseFloat(tds[IndiceNotas.numero4].textContent)
        )

        parseFloat(tds[IndiceNotas.media].textContent = mediaSort)


    })


})()