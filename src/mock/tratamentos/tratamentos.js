import { Footer } from "../../components";


export const treatments = (language) =>  [
  {
    id: 1,
    title: language === "es" ? "Enfermedades Metabólicas" : "Doenças Metabólicas",
    textColor: "#000000",
    description: language === "es" ? "Enfoque integrativo para la resistencia a la insulina y dislipidemias." : "Abordagem integrativa para resistência à insulina e dislipidemias.",
    image: "https://cdn-icons-png.flaticon.com/256/3009/3009498.png",
    contentImage: "https://img.freepik.com/fotos-gratis/mao-segurando-um-medidor-de-glicose-no-sangue-medindo-acucar-no-sangue-o-fundo-e-um-estetoscopio-e-um-arquivo-de-grafico_1387-942.jpg?t=st=1745540047~exp=1745543647~hmac=50ad19fd365e7da57f6bbe5ac77074b4e64de07b747a9760f969e5cead833d77&w=996",
    contentTitle: language === "es" ? "Tratamiento Integrativo" : "Tratamento Integrativo",
    textDescription: language === "es" ? "Las enfermedades metabólicas como diabetes tipo 2, resistencia a la insulina, dislipidemias, esteatosis hepática, hipertensión, SOP y hipotiroidismo están entre los principales desequilibrios que comprometen el funcionamiento global del cuerpo. Tratamos no solo los síntomas, sino las causas profundas." : "As doenças metabólicas, como diabetes tipo 2, resistência à insulina, dislipidemias, esteatose hepática, hipertensão, SOP e hipotireoidismo, estão entre os principais desequilíbrios que silenciosamente comprometem o funcionamento global do corpo. Tratamos não apenas os sintomas, mas as causas profundas.",
    content: language === "es" ? "El tratamiento integrativo aborda la raíz de estos desequilibrios mediante la restauración del metabolismo, el equilibrio hormonal, la desinflamación y la reconstrucción de pilares de estilo de vida: alimentación, sueño, movimiento, emociones y conexiones." : "O tratamento integrativo aborda a raiz desses desequilíbrios por meio do resgate do metabolismo, equilíbrio hormonal, desinflamação e reconstrução dos pilares do estilo de vida: alimentação, sono, movimento, emoções e conexões.",
    doencas: [
      {
        name: language === "es" ? "Diabetes Tipo 2" : "Diabetes Tipo 2",
        description: language === "es" ? "La diabetes tipo 2 es una afección crónica que afecta la forma en que el cuerpo procesa el azúcar en sangre. A menudo está relacionada con la obesidad, la resistencia a la insulina y el envejecimiento." : "A diabetes tipo 2 é uma condição crônica que afeta a forma como o corpo processa o açúcar no sangue. Frequentemente está relacionada à obesidade, resistência à insulina e envelhecimento."
      },
      {
        name: language === "es" ? "Resistencia a la Insulina" : "Resistência à Insulina",
        description: language === "es" ? "La resistencia a la insulina ocurre cuando las células del cuerpo no responden correctamente a la insulina, lo que provoca niveles altos de glucosa en sangre." : "A resistência à insulina ocorre quando as células do corpo não respondem adequadamente à insulina, o que causa níveis elevados de glicose no sangue."
      },
      {
        name: language === "es" ? "Dislipidemias" : "Dislipidemias",
        description: language === "es" ? "Las dislipidemias son trastornos en los niveles de lípidos en la sangre, como el colesterol y los triglicéridos, que aumentan el riesgo de enfermedades cardiovasculares." : "As dislipidemias são distúrbios nos níveis de lipídios no sangue, como colesterol e triglicerídeos, que aumentam o risco de doenças cardiovasculares."
      },
      {
        name: language === "es" ? "Esteatosis Hepática" : "Esteatose Hepática",
        description: language === "es" ? "La esteatosis hepática, o hígado graso, es una acumulación de grasa en las células del hígado, que puede estar relacionada con la obesidad, diabetes y consumo excesivo de alcohol." : "A esteatose hepática, ou fígado gordo, é o acúmulo de gordura nas células do fígado, podendo estar relacionada à obesidade, diabetes e consumo excessivo de álcool."
      },
      {
        name: language === "es" ? "Hipertensión" : "Hipertensão",
        description: language === "es" ? "La hipertensión es una afección en la cual la presión arterial está constantemente elevada, aumentando el riesgo de enfermedades cardíacas y accidentes cerebrovasculares." : "A hipertensão é uma condição em que a pressão arterial está constantemente elevada, aumentando o risco de doenças cardíacas e derrames."
      },
      {
        name: language === "es" ? "Síndrome de Ovario Poliquístico (SOP)" : "Síndrome do Ovário Policístico (SOP)",
        description: language === "es" ? "El síndrome de ovario poliquístico es un trastorno hormonal común entre las mujeres en edad fértil, que puede causar ciclos menstruales irregulares, ovarios agrandados y niveles elevados de andrógenos." : "A síndrome do ovário policístico é um distúrbio hormonal comum entre mulheres em idade fértil, que pode causar ciclos menstruais irregulares, ovários aumentados e níveis elevados de andrógenos."
      },
      {
        name: language === "es" ? "Hipotiroidismo" : "Hipotireoidismo",
        description: language === "es" ? "El hipotiroidismo es una afección en la cual la glándula tiroides no produce suficientes hormonas tiroideas, lo que puede ralentizar el metabolismo y causar síntomas como fatiga, aumento de peso y depresión." : "O hipotireoidismo é uma condição em que a glândula tireoide não produz hormônios tireoidianos suficientes, o que pode retardar o metabolismo e causar sintomas como fadiga, ganho de peso e depressão."
      }
    ],
    footer:language === "es" ? " En el enfoque integrativo y funcional, investigamos profundamente la raíz de estos desequilibrios, tratando no sólo los síntomas, sino las causas. Esto incluye restaurar el metabolismo, el equilibrio hormonal, reducir la inflamación en el cuerpo y reconstruir los pilares del estilo de vida: la alimentación, el sueño, el movimiento, las emociones y las conexione   Vivir con síntomas como fatiga, dificultad para perder peso, confusión mental, colesterol alto o aumento de peso abdominal afecta directamente la calidad de vida y puede derivar en cuadros más graves. Tratarlo a tiempo evita que la bola de nieve crezca. Nuestro trabajo es restaurar la armonía de tu metabolismo de forma individualizada y profunda, para que recuperes vitalidad, claridad y ligereza en tu cuerpo y mente " : " Na abordagem integrativa e funcional, investigamos profundamente a raiz desses desequilíbrios, tratando não apenas os sintomas, mas as causas. Isso inclui o resgate do metabolismo, equilíbrio hormonal, desinflamação do corpo e reconstrução dos pilares do estilo de vida: alimentação, sono, movimento, emoções e conexões.Conviver com sintomas como fadiga, dificuldade de emagrecimento, nevoeiro mental, colesterol alterado ou ganho de peso abdominal afeta diretamente a qualidade de vida e pode evoluir para quadros mais graves. Tratar cedo é evitar que a bola de neve cresça. Nosso trabalho é restaurar a harmonia do seu metabolismo de forma individualizada e profunda — para que você recupere vitalidade, clareza e leveza no seu corpo e mente."
   
  },
  
  {
    id: 2,
    title: language === "es" ? "Salud Gastrointestinal" : "Saúde Gastrointestinal",
    textColor: "#000000",
    description: language === "es" ? "Equilibrio digestivo para salud integral: desde molestias estomacales hasta disbiosis intestinal." : "Equilíbrio digestivo para saúde integral: desde desconfortos gástricos até disbiose intestinal.",
    image: "https://cdn-icons-png.flaticon.com/256/3009/3009498.png",
    contentImage: "https://img.freepik.com/fotos-gratis/mulher-com-dor-de-estomago-curvando-se-e-com-as-maos-na-barriga-desconforto-de-colicas-menstruais_1258-19063.jpg?t=st=1745673077~exp=1745676677~hmac=62a48664c1e6743fc794bd5760fafd71758a6def958ecf92a9847892951cb162&w=996",
    contentTitle: language === "es" ? "Tratamiento Integrativo" : "Tratamento Integrativo",
    textDescription: language === "es" ? "Enfoque integrativo para tratar el sistema gastrointestinal a través de una combinación de cambios alimenticios, modulación de la microbiota, apoyo a la mucosa gástrica y intestinal, y manejo del estrés." : "Abordagem integrativa para tratar o sistema gastrointestinal por meio de uma combinação de mudanças alimentares, modulação da microbiota, suporte à mucosa gástrica e intestinal e manejo do estresse.",
    content: language === "es" ? "El tratamiento se centra en investigar los desencadenantes inflamatorios, alimenticios, emocionales y microbiológicos que afectan el estómago e intestinos, estructurando un plan personalizado para restaurar el equilibrio." : "O tratamento se concentra em investigar os gatilhos inflamatórios, alimentares, emocionais e microbiológicos que afetam o estômago e intestinos, estruturando um plano personalizado para restaurar o equilíbrio.",
    doencas: [
      {
        name: language === "es" ? "Gastritis" : "Gastrite",
        description: language === "es" ? "La gastritis es la inflamación de la mucosa gástrica que causa dolor, acidez y malestar." : "A gastrite é a inflamação da mucosa gástrica que causa dor, acidez e mal-estar."
      },
      {
        name: language === "es" ? "Reflujo" : "Refluxo",
        description: language === "es" ? "El reflujo es el ascenso de los jugos gástricos hacia el esófago, provocando acidez, ardor y malestar." : "O refluxo é o retorno dos sucos gástricos para o esôfago, causando acidez, ardor e mal-estar."
      },
      {
        name: language === "es" ? "Síndromes Disabsortivas" : "Síndromes Disabsortivas",
        description: language === "es" ? "Las síndromes disabsortivas son trastornos que afectan la capacidad del cuerpo para absorber los nutrientes correctamente." : "As síndromes disabsortivas são distúrbios que afetam a capacidade do corpo de absorver os nutrientes corretamente."
      },
      {
        name: language === "es" ? "Síndrome del Intestino Irritable" : "Síndrome do Intestino Irritável",
        description: language === "es" ? "La síndrome del intestino irritable causa dolor abdominal, diarrea y estreñimiento, afectando el bienestar digestivo." : "A síndrome do intestino irritável causa dor abdominal, diarreia e constipação, afetando o bem-estar digestivo."
      },
      {
        name: language === "es" ? "Intolerancias Alimentarias" : "Intolerâncias Alimentares",
        description: language === "es" ? "Las intolerancias alimentarias son reacciones adversas a ciertos alimentos que afectan el sistema digestivo." : "As intolerâncias alimentares são reações adversas a certos alimentos que afetam o sistema digestivo."
      },
      {
        name: language === "es" ? "Distensión Abdominal" : "Distensão Abdominal",
        description: language === "es" ? "La distensión abdominal es la sensación de hinchazón o plenitud en el abdomen." : "A distensão abdominal é a sensação de inchaço ou plenitude no abdômen."
      },
      {
        name: language === "es" ? "Permeabilidad Intestinal" : "Permeabilidade Intestinal",
        description: language === "es" ? "La permeabilidad intestinal aumentada puede provocar fugas de toxinas y sustancias no digeridas en el cuerpo." : "A permeabilidade intestinal elevada pode causar vazamento de toxinas e substâncias não digeridas para o corpo."
      },
      {
        name: language === "es" ? "Disbiosis" : "Disbiose",
        description: language === "es" ? "La disbiosis es un desequilibrio en la microbiota intestinal que afecta la digestión y la salud inmune." : "A disbiose é um desequilíbrio na microbiota in  testinal que afeta a digestão e a saúde imunológica."
      },
      {
        name: language === "es" ? "SIBO" : "SIBO",
        description: language === "es" ? "El SIBO (Sobrecrecimiento Bacteriano del Intestino Delgado) ocurre cuando hay un exceso de bacterias en el intestino delgado." : "O SIBO (Supercrescimento Bacteriano no Intestino Delgado) ocorre quando há um excesso de bactérias no intestino delgado."
      }
    ],
     footer:language === "es" ? " Vivir con acidez de estómago, hinchazón, malestar abdominal o movimientos intestinales irregulares afecta directamente tu calidad de vida. Y lo peor: si no se trata, esta condición puede propagarse a otros sistemas, causando desequilibrios hormonales, inmunológicos y emocionales. Cuanto antes tratemos la raíz, mayores serán las posibilidades de restaurar por completo tu bienestar. ¿La buena noticia? El sistema gastrointestinal tiene una enorme capacidad de regeneración y esto puede cambiarlo todo." : " Viver com azia, estufamento, desconforto abdominal ou intestino irregular afeta diretamente sua qualidade de vida. E o pior: se não tratado, esse quadro pode se expandir para outros sistemas, gerando desequilíbrios hormonais, imunológicos e emocionais. Quanto antes cuidamos da raiz, maiores são as chances de restauração completa do seu bem-estar. A boa notícia? O sistema gastrointestinal tem enorme capacidade de regeneração e isso pode mudar tudo "
  },
  
  {
    id: 3,
    title: language === "es" ? "Obesidad e Inflamación Crónica" : "Obesidade e Inflamação Crônica",
    textColor: "#000000",
    description: language === "es" ? "Abordaje integral para desinflamar el cuerpo y restaurar el equilibrio metabólico." : "Abordagem integrativa para desinflamar o corpo e restaurar o equilíbrio metabólico.",
    image: "https://cdn-icons-png.flaticon.com/256/3009/3009498.png",
    contentImage: "https://img.freepik.com/fotos-gratis/mulher-de-tamanho-grande-vista-lateral-em-escala_23-2150172298.jpg?t=st=1745673559~exp=1745677159~hmac=119e8d8a2244cf4844b6c3ea2c2539da5bf1daf37280941a3bacd8a0b746099d&w=996",
    contentTitle: language === "es" ? "Inflamación Silenciosa" : "Inflamação Silenciosa",
    textDescription: language === "es" ? "La obesidad y la inflamación crónica son procesos interconectados que afectan todo el organismo: metabolismo, hormonas, intestino, cerebro, articulaciones y estado de ánimo. No se trata solo de kilos en la balanza, sino de un cuerpo en constante estado de alerta." : "A obesidade e a inflamação crônica são processos interligados que afetam todo o organismo: metabolismo, hormônios, intestino, cérebro, articulações e humor. Mais que números na balança, falamos de um corpo em constante estado de alerta.",
    content: language === "es" ? "Nuestro enfoque identifica los desencadenantes inflamatorios, reequilibra el metabolismo, regula hormonas y restaura la salud intestinal y emocional. Vivir con dolor, fatiga, alteraciones del sueño o ansiedad alimentaria impacta profundamente la calidad de vida." : "Nossa abordagem identifica gatilhos inflamatórios, reequilibra o metabolismo, regula hormônios e restaura a saúde intestinal e emocional. Conviver com dores, cansaço, alterações no sono ou ansiedade alimentar impacta profundamente a qualidade de vida.",
    doencas: [
    
    ],
    footer: language === "es" ? 
      "En medicina integrativa, entendemos que el exceso de peso es solo la punta del iceberg. Cuidar la inflamación a tiempo previene enfermedades graves y permite al cuerpo recuperar vitalidad y equilibrio. No se trata solo de perder peso, sino de desinflamar y renacer." : 
      "Na medicina integrativa, entendemos que o excesso de peso é apenas a ponta do iceberg. Cuidar da inflamação precocemente evita doenças graves e permite ao corpo recuperar vitalidade e equilíbrio. Não se trata apenas de emagrecer, mas de desinflamar e renascer."
  },
  {
    id: 4,
    title: language === "es" ? "Fatiga Mental y Física" : "Fadiga Mental e Física",
    textColor: "#000000",
    description: language === "es" ? "Recupera tu energía: del agotamiento crónico a la vitalidad integral." : "Recupere sua energia: do esgotamento crônico à vitalidade plena.",
    image: "https://cdn-icons-png.flaticon.com/256/3009/3009498.png",
    contentImage: "https://img.freepik.com/fotos-gratis/economista-feminina-de-tiro-medio-trabalhando-no-escritorio_23-2150167272.jpg?t=st=1745540691~exp=1745544291~hmac=e3184a90169042c8f503d1ca6cd709d053def0cdc1ffba8066cdf5e269e12332&w=996",
    contentTitle: language === "es" ? "Restauración Energética" : "Restauração Energética",
    textDescription: language === "es" ? "La fatiga persistente es una señal de alerta del cuerpo. Investigamos causas profundas como desequilibrios hormonales, estrés crónico, inflamación silenciosa o disfunción mitocondrial." : "A fadiga persistente é um sinal de alerta do corpo. Investigamos causas profundas como desequilíbrios hormonais, estresse crônico, inflamação silenciosa ou disfunção mitocondrial.",
    content: language === "es" ? "Abordamos la fatiga desde sus múltiples raíces: optimización nutricional, regulación del eje HPA (estrés), mejora de la producción energética celular y manejo de factores emocionales y ambientales." : "Abordamos a fadiga em suas múltiplas raízes: otimização nutricional, regulação do eixo HPA (estresse), melhoria da produção energética celular e manejo de fatores emocionais e ambientais.",
    doencas: [
   
    ],
    footer: language === "es" ? 
      "Vivir con niebla mental, agotamiento constante y cero motivación no es normal. La fatiga crónica es reversible cuando se tratan sus causas profundas. Recuperar tu energía significa reconectar con tu vitalidad, concentración y alegría de vivir." : 
      "Conviver com névoa mental, cansaço constante e zero motivação não é normal. A fadiga crônica é reversível quando tratamos suas causas profundas. Recuperar sua energia é reconectar com vitalidade, foco e alegria de viver."
  },
  {
    id: 5,
    title: language === "es" ? "Dolor Crónico e Inflamatorio" : "Dores Crônicas e Inflamatórias",
    textColor: "#000000",
    description: language === "es" ? "Alivio profundo: de la inflamación persistente a la movilidad recuperada" : "Alívio profundo: da inflamação persistente à mobilidade recuperada",
    image: "https://cdn-icons-png.flaticon.com/256/3009/3009498.png",
    contentImage: "https://img.freepik.com/fotos-gratis/mulher-jovem-com-dor-no-pescoco_329181-20066.jpg?t=st=1745540896~exp=1745544496~hmac=242295548fde7162217e06fbfc07a74233c5d80ad3465becb3a48ccf531a7c3b&w=996",
    contentTitle: language === "es" ? "Tratamiento Multidimensional" : "Tratamento Multidimensional",
    textDescription: language === "es" ? 
      "El dolor crónico es la señal de un cuerpo en desequilibrio. Nuestro enfoque identifica los factores inflamatorios ocultos y restaura la armonía entre intestino, sistema nervioso y equilibrio hormonal." : 
      "A dor crônica é o sinal de um corpo em desequilíbrio. Nossa abordagem identifica os fatores inflamatórios ocultos e restaura a harmonia entre intestino, sistema nervoso e equilíbrio hormonal.",
    content: language === "es" ? 
      "Combinamos estrategias para reducir la inflamación sistémica, modular el microbioma intestinal y regular los neurotransmisores del dolor, abordando las causas en lugar de enmascarar los síntomas." : 
      "Combinamos estratégias para reduzir a inflamação sistêmica, modular o microbioma intestinal e regular os neurotransmissores da dor, atuando nas causas em vez de mascarar sintomas.",
    doencas: [
     
    ],
    footer: language === "es" ? 
      "La vida con dolor crónico limita tu potencial. Nuestro objetivo es identificar los desencadenantes únicos de tu inflamación para devolverte el movimiento sin dolor y la vitalidad perdida." : 
      "Viver com dor crônica limita seu potencial. Nosso objetivo é identificar os gatilhos únicos da sua inflamação para devolver seu movimento sem dor e a vitalidade perdida."
  },
  {
    id: 6,
    title: language === "es" ? "Ansiedad y Compulsividad" : "Ansiedade e Compulsividade",
    textColor: "#000000",
    description: language === "es" ? "Calma profunda: del desequilibrio emocional al equilibrio cuerpo-mente" : "Calma profunda: do desequilíbrio emocional ao equilíbrio corpo-mente",
    image: "https://cdn-icons-png.flaticon.com/256/3009/3009498.png",
    contentImage: "https://img.freepik.com/fotos-gratis/full-shot-mulher-sentada-no-sofa_23-2149071929.jpg?t=st=1745540780~exp=1745544380~hmac=7ee1bbc74cb986fa6dbc27bfc9751129152131ebbda4ea6f1e48e39a40719054&w=996",
    contentTitle: language === "es" ? "Abordaje Integrador" : "Abordagem Integrativa",
    textDescription: language === "es" ? 
      "La ansiedad es una señal de alarma del sistema cuerpo-mente. Investigamos sus raíces: microbiota intestinal, desregulación de neurotransmisores, estrés crónico y desequilibrios hormonales." : 
      "A ansiedade é um sinal de alerta do sistema corpo-mente. Investigamos suas raízes: microbiota intestinal, desregulação de neurotransmissores, estresse crônico e desequilíbrios hormonais.",
    content: language === "es" ? 
      "Trabajamos en 4 pilares: regulación del sistema nervioso, equilibrio intestinal, modulación de la respuesta al estrés y reconstrucción de patrones emocionales saludables." : 
      "Trabalhamos em 4 pilares: regulação do sistema nervoso, equilíbrio intestinal, modulação da resposta ao estresse e reconstrução de padrões emocionais saudáveis.",
    doencas: [
     
    ],
    footer: language === "es" ? 
      "La ansiedad no es tu esencia, es un estado de desequilibrio. Recuperar la calma interior es posible cuando tratamos las causas profundas con respeto y paciencia, reconectándote con tu ritmo natural." : 
      "A ansiedade não é sua essência, é um estado de desequilíbrio. Reconquistar a calma interior é possível quando tratamos as causas profundas com respeito e paciência, reconectando você com seu ritmo natural."
  },
  {
    id: 7,
    title: language === "es" ? "Trastornos del Sueño" : "Distúrbios do Sono",
    textColor: "#000000",
    description: language === "es" ? "Recupere el descanso profundo: del sueño fragmentado a la regeneración nocturna" : "Recupere o descanso profundo: do sono fragmentado à regeneração noturna",
    image: "https://cdn-icons-png.flaticon.com/256/3009/3009498.png",
    contentImage: "https://img.freepik.com/fotos-gratis/close-up-mulher-cobrindo-a-cabeca_23-2149071926.jpg?t=st=1745540970~exp=1745544570~hmac=3618b54c3760eb33cb17d353671f654c5fc4a48c6f973e5f340576a30bceb9ac&w=996  ",
    contentTitle: language === "es" ? "Medicina del Sueño Integrativa" : "Medicina do Sono Integrativa",
    textDescription: language === "es" ? 
      "El sueño no reparador es una alerta de desequilibrio. Investigamos causas multifactoriales: ritmo circadiano alterado, inflamación silenciosa, desregulación hormonal y desequilibrios neurológicos." : 
      "O sono não reparador é um alerta de desequilíbrio. Investigamos causas multifatoriais: ritmo circadiano alterado, inflamação silenciosa, desregulação hormonal e desequilíbrios neurológicos.",
    content: language === "es" ? 
      "Nuestro abordaje actúa en 5 frentes: regulación del ciclo sueño-vigilia, equilibrio del sistema nervioso autónomo, soporte nutricional específico, higiene del sueño personalizada y manejo de comorbidades asociadas." : 
      "Nossa abordagem atua em 5 frentes: regulação do ciclo vigília-sono, equilíbrio do sistema nervoso autônomo, suporte nutricional específico, higiene do sono personalizada e manejo de comorbidades associadas.",
    doencas: [
     
    ],
    footer: language === "es" ? 
      "Dormir mal no es normal. Recuperar el sueño reparador transforma tu salud física, mental y emocional. Trabajamos para que tu noche sea de verdad descanso, no otra fuente de estrés." : 
      "Dormir mal não é normal. Recuperar o sono reparador transforma sua saúde física, mental e emocional. Trabalhamos para que sua noite seja realmente descanso, não mais uma fonte de estresse."
  } 
];
  