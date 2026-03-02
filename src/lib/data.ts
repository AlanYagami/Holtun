export type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  propiedades?: string;
  usos?: string;
  descripcion?: string;
  mezcla?: string;
  chakra_principal?: string;
  aceites_funcion?: string;
  apoya?: string;
  desbloquea?: string;
  presentacion?: string;
};

export const categories: Category[] = [
  {
    id: 'aceites_de_grado_alimenticio',
    name: 'Aceites de Grado Alimenticio',
    description: 'Aceites esenciales puros y seguros para uso culinario y terapéutico interno.',
    image: 'https://cdn.pixabay.com/photo/2019/02/18/17/26/natural-cosmetics-4004908_1280.jpg'
  },
  {
    id: 'aceites_grado_cosmetico',
    name: 'Aceites de Grado Cosmético',
    description: 'Aceites esenciales para el cuidado de la piel, el cabello y el bienestar general.',
    image: 'https://cdn.pixabay.com/photo/2023/11/08/06/22/essential-oils-8373959_1280.jpg'
  },
  {
    id: 'sinergias_aceites',
    name: 'Sinergias de Aceites Esenciales',
    description: 'Mezclas expertamente diseñadas para potenciar beneficios específicos y crear experiencias aromáticas únicas.',
    image: 'https://cdn.pixabay.com/photo/2018/02/19/10/20/cosmetic-oil-3164684_1280.jpg'
  },
  {
    id: 'sinergias_linea_holistica',
    name: 'Sinergias - Línea Holística',
    description: 'Fórmulas que armonizan cuerpo, mente y espíritu, enfocadas en el equilibrio de chakras y energía.',
    image: 'https://cdn.pixabay.com/photo/2019/02/24/13/52/laundry-4017609_1280.jpg'
  },
  {
    id: 'aceites_masajes_relajantes',
    name: 'Aceites para Masajes Relajantes',
    description: 'Aceites preparados para masajes que alivian la tensión, relajan los músculos y nutren la piel.',
    image: 'https://cdn.pixabay.com/photo/2019/01/13/22/31/essential-oils-3931427_1280.jpg'
  },
  {
    id: 'sinergias_masajes',
    name: 'Sinergias para Masajes',
    description: 'Mezclas concentradas de aceites esenciales para masajes con fines terapéuticos y de relajación.',
    image: 'https://cdn.pixabay.com/photo/2017/02/25/11/59/massage-budapest-2097595_1280.jpg'
  },
  {
    id: 'sueros_faciales',
    name: 'Sueros Faciales',
    description: 'Fórmulas concentradas con aceites esenciales para el cuidado avanzado del rostro.',
    image: 'https://cdn.pixabay.com/photo/2026/02/03/06/17/skincare-10102003_1280.jpg'
  },
  {
    id: 'aceites_vehiculares',
    name: 'Aceites Vehiculares',
    description: 'Aceites base de alta calidad para diluir aceites esenciales y para el cuidado directo de la piel.',
    image: 'https://cdn.pixabay.com/photo/2016/06/03/16/03/essential-oils-1433694_1280.jpg'
  }
];

const productsData: Omit<Product, 'image'>[] = [
    {
      "id": "mandarina",
      "name": "Mandarina",
      "category": "aceites_de_grado_alimenticio",
      "propiedades": "Calmante y purificante, buen agente de desinfección atmosférico, equilibrar estados de ánimo, alivia los estados nerviosos, antiinflamatorio y antioxidante, tonificante, antiséptico aéreo, relajante, sedante, antiséptico, digestivo, regenerador celular.",
      "usos": "Problemas digestivos, retención de líquidos, ansiedad, producción excesiva de sebo en piel, ayuda a producir endorfinas."
    },
    {
      "id": "toronja",
      "name": "Toronja",
      "category": "aceites_de_grado_alimenticio",
      "propiedades": "Antiséptico, antitóxico, astringente, bactericida, diurético, depurativo, desinfectante, estimulante, iónico y linfático.",
      "usos": "Problemas digestivos, retención de líquidos, insomnio, ansiedad, problemas intestinales, problemas en la piel, producción excesiva de sebo en piel, ayuda a producir endorfinas"
    },
    {
      "id": "naranja",
      "name": "Naranja",
      "category": "aceites_de_grado_alimenticio",
      "propiedades": "Antiséptico, calmante, antidepresivo, antiinflamatorio, astringente, digestivo, tónico, sedante y nervioso.",
      "usos": "Para aromaterapia y para apoyar en condiciones como cólicos, dolores y espasmos digestivos y musculares, apoya al drenaje linfático y retención de líquidos, alteraciones dérmicas, pieles, grasas y maltratadas, arrugas."
    },
    {
      "id": "limon",
      "name": "Limón",
      "category": "aceites_de_grado_alimenticio",
      "propiedades": "Antiácido, antibacterial, antiséptico, astringente, antiviral, diurético, desintoxicante, cicatrizante, fungicida, estimulante, tónico, antitóxico, inmunoestimulante.",
      "usos": "Para problemas circulatorios, venas varicosas, obesidad, alivia las náuseas y vómitos, parásitos, infecciones en las vías urinarias, nutre el cabello, refuerza el sistema inmunológico"
    },
    {
      "id": "clavo",
      "name": "Clavo",
      "category": "aceites_de_grado_alimenticio",
      "propiedades": "Antimicrobianas, Antimicóticas, Antivirales, Estimulante, analgésico, digestivo, actúa como un afrodisíaco, calma el estrés, antiséptico y anestésico local, antiinflamatoria",
      "usos": "Estimular el sistema digestivo, para combatir infecciones bacterianas y de las vías respiratorias (bronquitis, sinusitis, tuberculosis), ayuda a luchar contra el herpes, infecciones urinarias, bucales (dolor de muelas, sobre todo), micosis cutáneas y parasitosis."
    },
    {
      "id": "bergamota",
      "name": "Bergamota",
      "category": "aceites_de_grado_alimenticio",
      "propiedades": "Antisépticas, antibacterianas, analgésicas, digestivas, expectorantes, antiespasmódicas y sedantes, relajantes, ansiolíticas y antidepresivas, antiinflamatoria, útil en el tratamiento del acné, aliviar la depresión, la ansiedad y otros trastornos del estado anímico.",
      "usos": "Agitacion, depresion, ansiedad, parásitos intestinales, insomnio, infecciones virales"
    },
    {
      "id": "albahaca",
      "name": "Albahaca",
      "category": "aceites_de_grado_alimenticio",
      "propiedades": "Antihelmínticas e insecticidas. Es potente antiespasmódico y neuro-regulador. Se normaliza la flora intestinal. Es un antiinflamatorio y analgésico. Es un antioxidante y descongestionante venoso prostático y anti-infecciosos (antiviral).",
      "usos": "Gastritis, insuficiencia pancreática, náuseas, espasmos digestivos, gastroenteritis, la ansiedad, la depresión, astenia postinfecciosa, insomnio y trastornos circulatorios venosos."
    },
    {
      "id": "anis_estrella",
      "name": "Anís estrella",
      "category": "aceites_de_grado_alimenticio",
      "propiedades": "Relajante muscular, aliado antiarrugas, estimulante, eupéptico, carminativo, galactógeno, diurético y un expectorante suave, antiinflamatoria, antimicrobiana, antibacteriana, antiespasmódico, carminativo y expectorante",
      "usos": "Artritis, antioxidante celular, reumatismo, cáncer, mejorar la apariencia de la piel, digestivo, problemas de concentración, malestar estomacal. dolores musculares y reumáticos"
    },
    {
      "id": "romero",
      "name": "Romero",
      "category": "aceites_de_grado_alimenticio",
      "propiedades": "Antirreumático, analgésico, insecticida, antioxidante, antiséptico, antimicrobial, carminativo, cicatrizante, fungicida, vulnerario, antiespasmódico, antiviral, astringente.",
      "usos": "Ayuda a superar la fatiga mental y mejorar la concentración, aumenta el estado de alerta, disminuye la ansiedad y amplifica la capacidad analítica y mental."
    },
    {
      "id": "hierbabuena",
      "name": "Hierbabuena",
      "category": "aceites_de_grado_alimenticio",
      "propiedades": "Antibacteriana, antiespasmódica, antiinflamatoria, antiséptica, mucolítica, estimulante biliar, digestiva, antitumoral, antisépticas, calmantes y carminativas.",
      "usos": "Promueve la digestión ayuda a promover un estado de ánimo positivo. Limpia las vías respiratorias. Refresca el aliento, Inhibe síntomas de náuseas, relaja los músculos. disminuye la sensación de hambre y antojo, alivia el dolor de cabeza."
    },
    {
      "id": "menta",
      "name": "Menta",
      "category": "aceites_de_grado_alimenticio",
      "propiedades": "Antiespasmódico, antiséptico, antiviral, astringente, carminativo, cefálico, descongestionante, tónico digestivo, expectorante, febrífugo, mucolítico, antigripal y purificante.",
      "usos": "Artritis, infecciones respiratorias, neumonía, tuberculosis, obesidad, infecciones virales, herpes simple, herpes labial, virus del papiloma humano, infecciones por hongos y cándida, problemas digestivos, dolores de cabeza y náuseas."
    },
    {
      "id": "canela",
      "name": "Canela",
      "category": "aceites_de_grado_alimenticio",
      "propiedades": "Antiespasmódico, antiséptico, antiviral, astringente, carminativo, cefálico, descongestionante, tónico digestivo, expectorante, febrífugo, mucolítico, antigripal y purificante",
      "usos": "Para enfermedades virales e infecciosas, malestares digestivos, eficaz para prevenir infecciones, acelerar la curación de heridas, aliviar la inflamación, cuidar la piel, combatir problemas cutáneos y fortalecer el sistema inmunitario"
    },
    {
      "id": "lima",
      "name": "Lima",
      "category": "aceites_de_grado_alimenticio",
      "propiedades": "Alivia el estrés, el cansancio, y la ansiedad o calma la mente mediante la difusión. Ayuda a estimular el sistema inmunológico, antibacterial analgésico, antiinfeccioso y descongestionante.",
      "usos": "Condiciones en la piel, picaduras de insectos, problemas respiratorios, descongestión del sistema linfático y pérdida de peso."
    },
    {
      "id": "lemongrass",
      "name": "Lemongrass",
      "category": "aceites_de_grado_alimenticio",
      "propiedades": "Antimicótico, antibacteriano, antiparasitario, antiinflamatorio, regenera los tejidos conectivo, dilata los vasos sanguíneos, mejora la circulación, promueve el flujo linfático, anticancerígeno.",
      "usos": "Infección respiratoria y de los senos nasales, problemas digestivos, parásitos, retención de líquidos, ligamentos y músculos, venas varicosas y salmonela."
    },
    {
      "id": "jengibre",
      "name": "Jengibre",
      "category": "aceites_de_grado_alimenticio",
      "propiedades": "Antiinflamatorio, anticoagulante, auxiliar digestivo, anestésico, expectorante, antimicótico y antimicrobiano.",
      "usos": "Reumatismo, trastornos digestivos, infecciones respiratorias, dolores musculares, congestión, náuseas, dolor de cabeza."
    },
    {
      "id": "oregano",
      "name": "Orégano",
      "category": "aceites_de_grado_alimenticio",
      "propiedades": "Analgésico, antiespasmódico, antiparasitario, fungicida, antioxidante, digestivo, antiinfeccioso y antiviral.",
      "usos": "Artritis, reumatismo, enfermedades infecciosas, enfermedades inflamatorias, tuberculosis, problemas digestivos"
    },
    {
      "id": "salvia",
      "name": "Salvia",
      "category": "aceites_de_grado_alimenticio",
      "propiedades": "Propiedades calmantes y estimulantes, antisépticas antiinflamatorias y antimicrobianas, virtudes relajantes, limpia la piel, refresca el aire y elimina los olores molestos.",
      "usos": "Problemas menstruales, síndrome premenstrual, deficiencias de estrógeno , progesterona y testosterona, problemas del hígado , ayuda a calmar la piel"
    },
    {
      "id": "tomillo",
      "name": "Tomillo",
      "category": "aceites_de_grado_alimenticio",
      "propiedades": "Antirreumático, antiséptico, antiespasmódico, bactericida, cicatrizante, diurético, hipertensivo, estimulante tónico y vermífugo.",
      "usos": "Estimula la producción de glóbulos blancos y refuerza el sistema inmunológico, Se recomienda para los dolores fijos por contractura y calambres Eficaz en personas fatigadas, deprimidas o letárgicas. Muy útil durante la convalecencia, estimula el apetito, ayuda a revivir y fortalecer el cuerpo y la mente, activa el cerebro y la memoria."
    },
    {
      "id": "geranio",
      "name": "Geranio",
      "category": "aceites_de_grado_alimenticio",
      "propiedades": "Analgésico, antidepresivo, antiinflamatorio, antiséptico cicatrizante, tónico, desodorante, sedante y regenerador.",
      "usos": "Hepatitis, hígado graso, dermatitis, eczema, psoriasis, acné, vitíligo, infecciones por hongos, infecciones virales, herpes labial, desequilibrios hormonales, problemas circulatorios, problemas menstruales y premenstruales"
    },
    {
      "id": "lavanda",
      "name": "Lavanda",
      "category": "aceites_de_grado_alimenticio",
      "propiedades": "Calmante, sedante, tónico nervioso, antibacterial, antidepresivo, antibiótico, antifúngico, cicatrizante y purificante.",
      "usos": "En infecciones respiratorias, hipertensión, problemas menstruales, síndrome premenstrual, acné, eczema, cicatrices, estrías,quemaduras, pérdida de cabello, insomnio, tensión nerviosa y ansiedad"
    },
    {
      "id": "ylang_ylang",
      "name": "Ylang ylang",
      "category": "aceites_de_grado_alimenticio",
      "propiedades": "Antirreumático, antiséptico, antiespasmódico, bactericida, cicatrizante, diurético, hipertensivo, estimulante tónico y vermífugo.",
      "usos": "Sensación general de bienestar , cuidado de la piel, dolor de cabeza, calma el estrés , la ansiedad y el insomnio."
    },
    {
      "id": "rosa",
      "name": "Rosa",
      "category": "aceites_de_grado_alimenticio",
      "propiedades": "Antidepresivo, ansiolítico, antiséptico, astringente, cicatrizante, afrodisíaco, tónico uterino, emenagogo, regenerador celular, hidratante, armonizante, antiinflamatorio, sedante.",
      "usos": "Depresión, ansiedad, estrés, desequilibrios hormonales, irregularidades menstruales, síntomas de la menopausia, piel seca, envejecimiento cutáneo, arrugas, cicatrices, acné, piel sensible, baja autoestima, duelo emocional."
    },
    {
      "id": "incienso",
      "name": "Incienso",
      "category": "aceites_de_grado_alimenticio",
      "propiedades": "Anticancerígeno, antiinflamatorio, calmante, meditativo, antioxidante, inmunoestimulante",
      "usos": "Ayuda a la salud de la piel, trata trastornos estomacales, úlceras, cáncer, enfermedades de las encías, infecciones, trastornos mentales, picaduras de insectos."
    },
    {
      "id": "sandalo",
      "name": "Sándalo",
      "category": "aceites_grado_cosmetico",
      "propiedades": "Anti tumoral, anti bacteriano, anti viral ,estimulante inmunológico, fungicida, parasiticidas, cicatrizantes, hidratantes de la piel , sedantes, astringentes suaves, reafirmantes y relajantes de la musculatura.",
      "usos": "Trastornos circulatorios, estabilizador, relajante , para enfermedades respiratorios, ansiedad,trastorno de déficit de atención, inquietud, alivia lesiones cutáneas, ayuda a cicatrizar, fungicida natural y regulador emocional."
    },
    {
      "id": "cedro",
      "name": "Cedro",
      "category": "aceites_grado_cosmetico",
      "propiedades": "Antifúngica, antiséptica, diurética, astringente y sedante, antiséptico, diurético, fungicida, expectorante, reduce la tos, Insecticida , sedante, desodorante, vasoconstrictor, favorece la circulación de la sangre , antiinflamatorio, regula la menstruación, desinfectante y aromatizante.",
      "usos": "Para alopecia, arteriosclerosis, trastorno déficit de atención e hiperactividad, problemas en la piel como acné y eczema"
    },
    {
      "id": "cypress",
      "name": "Cypress",
      "category": "aceites_grado_cosmetico",
      "propiedades": "Propiedades activadoras de la circulación y anticelulíticas, sebo reguladoras y desodorantes, antimicrobiano, antibacteriano, mucolítico, antiviral, tratamiento para enfermedades de la piel y relajante",
      "usos": "Trastornos circulatorios, estabilizador, para enfermedades respiratorios, ansiedad, trastorno de déficit de atención, inquietud, sudoración excesiva, antiespasmódico y piel grasa."
    },
    {
      "id": "pino_siberiano",
      "name": "Pino siberiano",
      "category": "aceites_grado_cosmetico",
      "propiedades": "Propiedades activadoras de la circulación y anticelulíticas, reguladores y desodorantes, antimicrobiano, antibacteriano, antiviral, tratamiento para enfermedades de la piel y relajante.",
      "usos": "Trastornos circulatorios, estabilizador, para enfermedades respiratorios, ansiedad, trastorno de déficit de atención, inquietud, relajante, hemorragia nasal, sudoración excesiva, antiespasmódico y piel grasa"
    },
    {
      "id": "ylang",
      "name": "Ylang",
      "category": "aceites_grado_cosmetico",
      "propiedades": "Antifuginico, vulnerario, cicatrizante, antibiótico, antiséptico, inmunoestimulante, antiinfeccioso, antibacteriano, antiviral y elimina parásitos",
      "usos": "Para apoyar en condiciones como infecciones (cándida y tiña), enfermedades de las encías y dientes, afecciones en la piel: eccemas, psoriasis, hongos, cicatrización, manchas, verrugas, picaduras de insectos y reduce la pérdida de cabello."
    },
    {
      "id": "patchouli",
      "name": "Patchouli",
      "category": "aceites_grado_cosmetico",
      "propiedades": "Es antiséptico, desinfectante, antiinflamatorio, regenerador celular, diurético, cicatrizante, sedante para el sistema nervioso. Combate la inseguridad, el miedo o los celos. Alivia el estrés, la tensión nerviosa y la fatiga emocional",
      "usos": "Hipertensión, enfermedad inflamatoria del intestino, enfermedades de la piel, retención de líquidos, infección por listeria, repelente de insecto"
    },
    {
      "id": "eucalipto",
      "name": "Eucalipto",
      "category": "aceites_grado_cosmetico",
      "propiedades": "Antigripal, expectorante, antibacterial, analgésicos, antifúngico, antiinfeccioso, antirreumático, antiviral, descongestionante, febrífugo, repelente de insectos, rubefaciente",
      "usos": "Descongestionante, sinusitis, reumatismo, alivio muscular, repelente de insectos, desinfectante, promueve la salud, la purificación del ambiente, y la sanación, brinda sensación de bienestar."
    },
    {
      "id": "citronela",
      "name": "Citronela",
      "category": "aceites_grado_cosmetico",
      "propiedades": "Antisépticas, antibacterianas, antifúngicas, digestivas, diuréticas, antioxidantes, cicatrizantes y anti microbianas, repelente de insectos, purificador de aire ecológico",
      "usos": "Infecciones respiratorias, dolores musculares y nerviosos, problemas digestivos e intestinales , ansiedad, alivia problemas en la piel como eczema ,piel grasosa y acné"
    },
    {
      "id": "mirra",
      "name": "Mirra",
      "category": "aceites_grado_cosmetico",
      "propiedades": "Antimicrobianas, antibacterianas, antivirales, estimulante, analgésico, antiséptico y anestésico local y antiinflamatoria.",
      "usos": "Estimular el sistema digestivo, para combatir infecciones bacterianas y de las vías respiratorias (bronquitis, sinusitis),infecciones bucales y cutáneas"
    },
    {
      "id": "melissa",
      "name": "Melissa",
      "category": "aceites_grado_cosmetico",
      "propiedades": "Antidepresivo, calmante, antiviral, antiespasmódico, carminativo, digestivo, hipotensor, sedante, inmunoestimulante, antiinflamatorio, tónico nervioso, relajante.",
      "usos": "Ansiedad, insomnio, palpitaciones, hipertensión, migrañas, indigestión, cólicos, herpes labial, infecciones virales, depresión, síndrome premenstrual, desequilibrios emocionales, fatiga nerviosa, trastornos digestivos de origen nervioso."
    },
    {
      "id": "sinergia_respiracion",
      "name": "Respiración",
      "category": "sinergias_aceites",
      "descripcion": "Esta sinergia fue diseñada para ofrecer alivio ante los síntomas de resfriado e infecciones respiratorias con la toronja y el limón actuando en el sistema inmune con sus propiedades antiinflamatorias, purificando también el ambiente, combinados con el eucalipto y el tea tree ayudan a limpiar los bronquios,y a reducir los síntomas de la sinusitis. Esta mezcla equilibrada de aceites esenciales es un excelente aliado para reforzar el sistema inmune por sus propiedades antivirales.",
      "mezcla": "Eucalipto, menta, tea tree, limón y toronja",
      "usos": "Difusor, inhalación directa, ducha, aplicación tópica"
    },
    {
      "id": "sinergia_dulces_suenos",
      "name": "Dulces sueños",
      "category": "sinergias_aceites",
      "descripcion": "En esta sinergia encuentras el perfecto equilibrio para tranquilizar la mente y descansa el cuerpo. Procura estabilizar la presión sanguínea, su aroma cítrico y sutil promueve la calma y disipa la mente de confusiones y dudas. Tiene efecto calmante que relaja la respiración, restaura el equilibrio físico y mental tras largos viajes, cansancio o agotamiento excesivo. Gran ayuda para aquietar la mente, relajar y revitalizar.",
      "mezcla": "Lavanda, naranja, mandarina",
      "usos": "Difusor, inhalación directa, ducha, aplicación tópica, uso alimenticio"
    },
    {
      "id": "sinergia_vitalidad",
      "name": "Vitalidad",
      "category": "sinergias_aceites",
      "descripcion": "Descubre en esta sinergia una mezcla increíble de aromas y sensaciones que despertaran tus sentidos y te llenaran de vitalidad para comenzar el dia de la mejor manera. Obtén todos los beneficios de las propiedades estimulantes de los cítricos liberando serotonina como un antidepresivo natural, ayuda a disminuir la ansiedad y la fatiga mental, ayudando a mejorar la agilidad de pensamiento y la creatividad.",
      "mezcla": "Bergamota, naranja, toronja, cedro",
      "usos": "Difusor, inhalación directa, ducha, aplicación tópica"
    },
    {
      "id": "sinergia_inhala_mas",
      "name": "Inhala más",
      "category": "sinergias_aceites",
      "descripcion": "Esta sinergia contiene menta que al tener mentol conocido por relajar los músculos lisos del tracto respiratorio promueve la respiración libre, Es ideal para combatir la sinusitis o bronquitis junto con el limón Especialmente indicado para tratar las infecciones de las vías respiratorias y el asma, ayudando a eliminar las secreciones con mayor facilidad.",
      "mezcla": "Menta, lavanda, limón",
      "usos": "Difusor, inhalación directa, ducha, aplicación tópica, uso alimenticio"
    },
    {
      "id": "sinergia_articulaciones",
      "name": "Articulaciones",
      "category": "sinergias_aceites",
      "descripcion": "Esta sinergia está diseñada para dar alivio a dolores articulares, las propiedades relajantes de la lavanda combinada con los agentes desinflamatorios y antioxidantes del clavo ofrecen un efecto sedante en el dolor que produce la inflamación de las articulaciones inhibiendo la síntesis de prostaglandinas y las transmisiones nerviosas en diversas partes del cuerpo así como el eucalipto Por su acción antiinflamatoria es un buen aliado de las personas con artritis reumatoide, artrosis o dolor muscular",
      "mezcla": "Clavo, eucalipto, lavanda",
      "usos": "Difusor, inhalación directa, ducha, aplicación tópica, uso alimenticio"
    },
    {
      "id": "sinergia_inmune",
      "name": "Inmune",
      "category": "sinergias_aceites",
      "descripcion": "Esta sinergia contiene menta que al tener mentol conocido por relajar los músculos lisos del tracto respiratorio promueve la respiración libre, Es ideal para combatir la sinusitis o bronquitis junto con el limón Especialmente indicado para tratar las infecciones de las vías respiratorias y el asma, ayudando a eliminar las secreciones con mayor facilidad.",
      "mezcla": "Romero, eucalipto y menta",
      "usos": "Difusor, inhalación directa, ducha, aplicación tópica, uso alimenticio"
    },
    {
      "id": "sinergia_despierta",
      "name": "Despierta",
      "category": "sinergias_aceites",
      "descripcion": "La mejor opción para sentirse despierto y de buen humor por las mañanas ya que activa la liberación de serotonina, con aroma penetrante y fuerte que tiene la capacidad de reordenar la mente, mejorar la memoria y aumentar el nivel de concentración, también es antidepresivo natural que ayuda a evitar los trastornos nerviosos y el agotamiento.",
      "mezcla": "Limón y eucalipto",
      "usos": "Difusor, inhalación directa, ducha, aplicación tópica, uso alimenticio"
    },
    {
      "id": "sinergia_dolor_cabeza",
      "name": "Dolor de cabeza",
      "category": "sinergias_aceites",
      "descripcion": "Esta sinergia tiene una fórmula oxigenante, insuperable para dolores de cabeza y migrañas. Acelera la circulación, despierta y reanima la mente cansada. también regula la presión arterial, por tanto es favorable para las personas que padecen de presión baja y alta.",
      "mezcla": "Menta, eucalipto, anís y limón",
      "usos": "Difusor, inhalación directa, ducha, aplicación tópica, uso alimenticio"
    },
    {
      "id": "sinergia_concentracion",
      "name": "Concentración",
      "category": "sinergias_aceites",
      "descripcion": "Esta sinergia ayuda a promover un estado de ánimo positivo y un sentido alto de concentración. La naturaleza vigorizante de esta sinergia puede aumentar el estado de alerta, aumentar la función cognitiva y estimular el cerebro aumentando su capacidad para concentrarse también puede ayudar a relajarte después de días intensos y sentirse equilibrado",
      "mezcla": "Anís, cedro, lavanda",
      "usos": "Difusor, inhalación directa, ducha, aplicación tópica"
    },
    {
      "id": "sinergia_cabello",
      "name": "+ Cabello",
      "category": "sinergias_aceites",
      "descripcion": "Esta sinergia, gracias a sus aceites esenciales reactiva la circulación sanguínea y estimula la raíz del cabello, lo cual ayuda a abrir los poros y hacer que el pelo crezca más bello y saludable. Fortalece los folículos pilosos previniendo la caída de cabello",
      "mezcla": "Bergamota, romero, cedro, lavanda",
      "usos": "Difusor, aplicación en pelo, ducha, inhalación directa"
    },
    {
      "id": "sinergia_fem",
      "name": "Fem",
      "category": "sinergias_aceites",
      "descripcion": "Esta sinergia está diseñada especialmente para equilibrar el sistema hormonal femenino, disminuir, los síntomas del síndrome premenstrual y la menopausia, disminuir los dolores menstruales, regula los altibajos emocionales por los cambios hormonales así como los dolores de cabeza",
      "mezcla": "Salvia, geranio, lavanda y bergamota",
      "usos": "Difusor, inhalación directa, ducha, aplicación tópica, uso alimenticio"
    },
    {
      "id": "sinergia_antioxidante",
      "name": "Antioxidante",
      "category": "sinergias_aceites",
      "descripcion": "Con propiedades antivirales, antimicóticas, antiparasitarias y antibacterianas recupera tu estado óptimo de salud, con la mezcla perfecta de estos aceites esenciales desinflama tu cuerpo a nivel celular, aumenta y fortalece tus defensas mientras blindas tu sistema de resfriados, alergias, creación de tumores y más patologías.",
      "mezcla": "Naranja, toronja, clavo, canela,lavanda y menta",
      "usos": "Difusor, inhalación directa, ducha, aplicación tópica, uso alimenticio"
    },
    {
      "id": "sinergia_super_boost",
      "name": "Super boost",
      "category": "sinergias_aceites",
      "descripcion": "Con propiedades antivirales, antimicóticas, antiparasitarias y antibacterianas recupera tu estado óptimo de salud, con la mezcla perfecta de estos aceites esenciales desinflama tu cuerpo a nivel celular, aumenta y fortalece tus defensas mientras blindas tu sistema de resfriados, alergias, creación de tumores y más patologías.",
      "mezcla": "Naranja, toronja, clavo y canela",
      "usos": "Difusor, inhalación directa, ducha, aplicación tópica, uso alimenticio"
    },
    {
      "id": "sinergia_serenidad",
      "name": "Serenidad",
      "category": "sinergias_aceites",
      "descripcion": "Su fórmula actúa directo en el sistema límbico, afectando directamente las emociones de manera positiva ayudando al descanso mental y emocional. Los aceites contenidos en esta sinergia tienen propiedades específicas que actúan a favor de la tranquilidad y serenidad emocional. Es ideal para tratar cuestiones de ansiedad, estrés, depresión y TDAH",
      "mezcla": "Lavanda, mandarina, albahaca, cedro",
      "usos": "Difusor, inhalación directa, ducha, aplicación tópica"
    },
    {
      "id": "sinergia_abundancia",
      "name": "Abundancia",
      "category": "sinergias_aceites",
      "descripcion": "Desbloquea tu chakra Muladhara para trabajar tu prosperidad, abundancia, vida confortable, estabilidad económica. Esta sinergia está diseñada con los aceites esenciales indicados para este chakra. Puedes ayudarte de la energía que despiden estos aceites esenciales para dejar fluir la energía y sentirte más óptimo y abundante",
      "mezcla": "Lavanda, canela, cedro",
      "usos": "Difusor, inhalación directa, ducha, aplicación tópica"
    },
    {
      "id": "sinergia_redu_c",
      "name": "Redu-c",
      "category": "sinergias_aceites",
      "descripcion": "Esta sinergia está diseñada para mejorar la circulación y activar el desalojo de grasas que forman la celulitis, ayudar a reducir la inflamación y aumentar el flujo sanguíneo facilitando el procesamiento de los nutrientes y los efectos de los radicales libres y promueven la renovación de las células sanas",
      "mezcla": "Toronja, ciprés, limón",
      "usos": "Ducha, aplicación tópica"
    },
    {
      "id": "sinergia_varices",
      "name": "Varices",
      "category": "sinergias_aceites",
      "descripcion": "Esta sinergia, aplicadas en masaje es excelente para favorecer la circulación sanguínea, aliviar la pesadez de piernas y mejorar problemas tan comunes como la retención de líquidos, celulitis, varices o la aparición de arañitas vasculares gracias a los beneficios de sus aceites esenciales",
      "mezcla": "Ciprés, menta, romero y limón",
      "usos": "Ducha, aplicación tópica"
    },
    {
      "id": "sinergia_barba",
      "name": "+ Barba",
      "category": "sinergias_aceites",
      "descripcion": "Esta sinergia, aplicadas en masaje es excelente para favorecer la circulación sanguínea, mejorando así la irrigación de la zona, fortaleciendo los folículos pilosos y la raíz del vello facial, ayudando al crecimiento y engrosamiento de la barba. Ayuda también como soporte del sistema hormonal masculino, equilibrando y ayudando a la producción de testosterona, lo que propicia el crecimiento del vello facial.",
      "mezcla": "Bergamota, eucalipto, menta y aceite de almendras dulces",
      "usos": "Aplicación en pelo, aplicación tópica"
    },
    {
      "id": "sinergia_digest",
      "name": "Digest",
      "category": "sinergias_aceites",
      "descripcion": "Una combinación especializada de aceites esenciales diseñada para apoyar de forma natural el sistema digestivo. Digest alivia malestares estomacales comunes como indigestión, inflamación, náuseas y cólicos, promoviendo una digestión más ligera y confortable. Alivia la hinchazón, gases y cólicos. También ayuda a relajar los músculos del tracto gastrointestinal. Estimula la producción de jugos gástricos y ayuda a depurar el sistema digestivo.",
      "mezcla": "Menta, jengibre, albahaca y limón",
      "usos": "Difusor, inhalación directa, ducha, aplicación tópica, uso alimenticio"
    },
    {
      "id": "sinergia_enfoque",
      "name": "Enfoque",
      "category": "sinergias_aceites",
      "descripcion": "Esta poderosa combinación de aceites esenciales ha sido formulada para potenciar la estabilidad mental, mejorar el enfoque y aumentar la concentración. aporta frescura y claridad mental, revitaliza los sentidos y combate la fatiga mental. favorece la memoria y la atención, promovemos la estabilidad emocional y la serenidad. Ideal para momentos de estudio, trabajo o cualquier actividad que requiera un estado de alerta y concentración óptima.",
      "mezcla": "Limón, hierbabuena, romero y cedro",
      "usos": "Difusor, inhalación directa, ducha, aplicación tópica"
    },
    {
      "id": "sinergia_pasion",
      "name": "Pasión",
      "category": "sinergias_linea_holistica",
      "descripcion": "Una sinergia diseñada para despertar la energía vital, encender la creatividad y liberar bloqueos del segundo chakra (sacro). El sándalo y el incienso elevan la conciencia y abren la conexión con el yo superior, mientras que los cítricos y la menta activan el flujo energético. Ideal para quienes desean reconectar con su fuerza creadora, abrirse a la sensualidad consciente y liberar emociones estancadas desde el placer y la presencia.",
      "mezcla": "Naranja, sándalo, lima, ylang ylang, menta e incienso",
      "chakra_principal": "Segundo Chakra (Sacro - Svadhisthana)",
      "aceites_funcion": "Naranja / Lima: Estimulan la alegría de vivir, la creatividad y la expresión emocional fluida. Sándalo / Incienso: Activan la conexión espiritual y el enraizamiento consciente desde los centros superiores. Ylang Ylang: Abre a la sensualidad consciente y fomenta la autoestima afectiva. Menta: Libera bloqueos energéticos y aporta frescura mental y emocional.",
      "apoya": "Flujo creativo, expresión sensual, conexión cuerpo-espíritu, liberación de emociones reprimidas.",
      "desbloquea": "Miedo al placer, represión emocional, falta de deseo o inspiración."
    },
    {
      "id": "sinergia_motivacion",
      "name": "Motivación",
      "category": "sinergias_linea_holistica",
      "descripcion": "Esta mezcla activa el centro del corazón y la voluntad, reconectándote con tu propósito desde la alegría interna. La lavanda y la melissa armonizan el campo áurico, mientras que el ylang ylang eleva el amor propio y la hierbabuena disuelve la apatía y la confusión mental. Perfecta para sesiones de visualización, afirmaciones o para comenzar nuevos proyectos con intención y alineación energética.",
      "mezcla": "Ylang ylang, lavanda, melissa y hierbabuena",
      "chakra_principal": "Cuarto (Corazón) y Tercer Chakra (Plexo Solar)",
      "aceites_funcion": "Ylang Ylang: Fomenta el amor propio y la apertura del corazón. Lavanda: Calma y equilibra el sistema nervioso y el campo emocional. Melissa (Toronjil): Eleva el ánimo, conecta con la luz interior y refuerza la vibración del corazón. Hierbabuena: Despeja la mente, disuelve la apatía y potencia la claridad mental y la voluntad.",
      "apoya": "Inspiración interna, claridad de propósito, equilibrio emocional.",
      "desbloquea": "Desmotivación, falta de dirección, confusión emocional."
    },
    {
      "id": "sinergia_transformacion",
      "name": "Transformación",
      "category": "sinergias_linea_holistica",
      "descripcion": "Una fórmula poderosa para procesos de despertar espiritual y transmutación interior. La salvia y el incienso purifican y abren la conexión con planos superiores, mientras que el sándalo sostiene la introspección y la menta estimula el tercer ojo y la mente intuitiva. El romero refuerza el foco y la claridad para avanzar en nuevos caminos. Ideal para rituales de renacimiento, limpiezas energéticas profundas o meditaciones de reconexión con el alma.",
      "mezcla": "Menta, sándalo, salvia, incienso, romero",
      "chakra_principal": "Sexto (Tercer Ojo) y Séptimo Chakra (Corona)",
      "aceites_funcion": "Menta: Activa la mente superior, estimula la percepción intuitiva. Sándalo / Incienso: Facilitan estados meditativos profundos y conexión con planos espirituales. Salvia: Purificadora, catalizadora de cambios profundos. Romero: Refuerza el enfoque, protege el campo mental durante procesos intensos.",
      "apoya": "Despertar espiritual, claridad de visión, renovación interna.",
      "desbloquea": "Confusión existencial, falta de conexión espiritual, patrones limitantes."
    },
    {
      "id": "sinergia_paz",
      "name": "Paz",
      "category": "sinergias_linea_holistica",
      "descripcion": "Una fórmula que invita al enraizamiento y la expansión del corazón. El patchouli ancla tu energía al momento presente, mientras que los cítricos disuelven la ansiedad y promueven la apertura emocional. El ylang ylang equilibra las emociones intensas y facilita estados meditativos profundos. Ideal para cerrar círculos, acompañar procesos de sanación o simplemente sostener tu campo en calma y seguridad.",
      "mezcla": "Mandarina, naranja, patchouli, ylang ylang",
      "chakra_principal": "Cuarto (Corazón) y Primer Chakra (Raíz)",
      "aceites_funcion": "Mandarina / Naranja: Relajan y elevan el estado de ánimo, disuelven la tensión. Patchouli: Conecta con la tierra, otorga estabilidad y presencia. Ylang Ylang: Calma el corazón y equilibra emociones intensas.",
      "apoya": "Armonía emocional, calma interior, estabilidad energética.",
      "desbloquea": "Ansiedad, desequilibrio emocional, desconexión del presente."
    },
    {
      "id": "sinergia_alegria",
      "name": "Alegría",
      "category": "sinergias_linea_holistica",
      "descripcion": "Una sinergia radiante para elevar la frecuencia vibratoria del corazón y expandir el aura. Las rosas abren el chakra corazón al amor universal, el geranio armoniza las emociones, y los cítricos despiertan el niño interior. Ideal para acompañar rituales de gratitud, compartir en círculos de luz o elevar espacios a través de una vibración luminosa y amorosa.",
      "mezcla": "Rosas, bergamotа, mandarina, ylang ylang, limón, geranio",
      "chakra_principal": "Cuarto Chakra (Corazón)",
      "aceites_funcion": "Rosas: Apertura del corazón, amor universal y compasión. Bergamota / Mandarina / Limón: Elevan la vibración emocional, disipan tristeza o melancolía. Ylang Ylang: Armoniza la autoimagen y el amor propio. Geranio: Estabiliza los altibajos emocionales, fomenta la alegría y equilibrio hormonal.",
      "apoya": "Apertura del corazón, vibración elevada, expresión emocional positiva.",
      "desbloquea": "Tristeza, falta de entusiasmo, bloqueo afectivo."
    },
    {
      "id": "sinergia_proteccion",
      "name": "Protección",
      "category": "sinergias_linea_holistica",
      "descripcion": "Más que una mezcla de protección física, esta sinergia actúa como escudo energético ante bajas vibraciones. El romero y el eucalipto limpian campos energéticos densos, el clavo y la canela elevan la temperatura vibratoria del aura, y el limón clarifica la intención. Úsala para limpiar ambientes, preparar espacios sagrados o antes de encuentros energéticamente exigentes.",
      "mezcla": "Clavo, canela, eucalipto, romero, limón",
      "chakra_principal": "Tercer Chakra (Plexo Solar) y Campo Áurico",
      "aceites_funcion": "Clavo / Canela: Elevan la energía vibratoria, activan el campo de defensa energética. Eucalipto: Limpia y despeja bloqueos en el aura y vías respiratorias. Romero: Claridad mental y protección psíquica. Limón: Aclara la mente, purifica energías estancadas.",
      "apoya": "Fortaleza energética, protección del campo áurico, limpieza de influencias externas.",
      "desbloquea": "Vulnerabilidad psíquica, fatiga energética, ambientes cargados."
    },
    {
      "id": "sinergia_aura",
      "name": "Aura",
      "category": "sinergias_linea_holistica",
      "descripcion": "Una sinergia sutil y celestial que facilita el contacto con guías espirituales, ángeles y la voz interior. Las rosas y la melissa abren el canal del corazón y la intuición, el sándalo eleva la vibración y prepara el campo para recibir mensajes, mientras que el geranio y el ylang ylang armonizan y protegen el cuerpo energético. Perfecta para momentos de oración, canalización o para rodearte de energía amorosa y divina.",
      "mezcla": "Ylang ylang, rosas, melissa, sándalo, geranio",
      "chakra_principal": "Cuarto (Corazón), Sexto (Tercer Ojo) y Séptimo (Corona)",
      "aceites_funcion": "Ylang Ylang / Geranio: Armonizan el campo emocional y el cuerpo energético. Rosas: Abren el corazón a la vibración del amor incondicional. Melissa: Conecta con la luz interna y la guía espiritual. Sándalo: Eleva la frecuencia vibratoria, potencia la meditación y canalización.",
      "apoya": "Conexión con planos sutiles, protección energética, canalización intuitiva.",
      "desbloquea": "Falta de fe, interferencias energéticas, bloqueo en la intuición o guía espiritual."
    },
    {
      "id": "sinergia_abundancia_holistica",
      "name": "Abundancia",
      "category": "sinergias_linea_holistica",
      "descripcion": "Desbloquea tu chakra Muladhara para trabajar tu prosperidad, abundancia, vida confortable, estabilidad económica. Esta sinergia está diseñada con los aceites esenciales indicados para este chakra. Puedes ayudarte de la energía que despiden estos aceites esenciales para dejar fluir la energía y sentirte más óptimo y abundante",
      "mezcla": "Lavanda, canela, cedro",
      "chakra_principal": "Raíz (Muladhara), Plexo Solar (Manipura), Tercer Ojo (Ajna)",
      "aceites_funcion": "Lavanda: Equilibra mente y emociones, facilita la introspección y la claridad interior (Chakra Tercer Ojo). Canela: Estimula la vitalidad, la seguridad y el empoderamiento personal (Chakra Raíz y Plexo Solar). Cedro: Fortalece el enraizamiento, la confianza y la conexión con la estabilidad interna (Chakra Raíz).",
      "apoya": "Enraizamiento energético, enfoque y claridad, seguridad interna, descanso profundo.",
      "desbloquea": "Ansiedad, inseguridad, fatiga emocional, desconexión con la realidad presente."
    },
    {
      "id": "sinergia_zen",
      "name": "Zen",
      "category": "sinergias_linea_holistica",
      "descripcion": "Diseñada para promover el equilibrio emocional y elevar el estado de ánimo, esta sinergia combina aceites esenciales que inspiran bienestar ayudando a disipar el estrés y la tensión, estimula la producción de endorfinas, promoviendo sensaciones de alegría y optimismo, ayuda a equilibrar las emociones y fomentar la calma, mientras que el incienso aporta profundidad y conexión espiritual, brindando una sensación de paz interior. Perfecta para momentos de relajación, meditación o simplemente para llenar el ambiente de energía positiva.",
      "mezcla": "Lemongrass, geranio, incienso y mandarina",
      "chakra_principal": "Corona (Sahasrara), Tercer Ojo (Ajna), Corazón (Anahata), Plexo Solar (Manipura)",
      "aceites_funcion": "Incienso: Eleva la conciencia, apoya la meditación profunda y fortalece la conexión espiritual (Chakra Corona y Tercer Ojo). Geranio: Armoniza las emociones y fomenta la apertura amor propio y a la compasión (Chakra Corazón). Lemongrass: Limpia energías densas, estimula la claridad emocional y refuerza el poder personal (Chakra Plexo Solar). Mandarina: Aporta alegría y ligereza emocional, despertando la espontaneidad y la creatividad (Chakra Sacro).",
      "apoya": "Calma interior, conexión espiritual, armonía emocional, estados meditativos.",
      "desbloquea": "Estrés mental, emociones reprimidas, desconexión espiritual, confusión interior."
    },
    {
      "id": "masaje_analgesia",
      "name": "Analgesia. Descontracturante y relajación muscular",
      "category": "aceites_masajes_relajantes",
      "descripcion": "Disfruta de una experiencia de masaje única con nuestro Aceite para Masaje Relajante y Revitalizante, una fórmula equilibrada que combina los beneficios de los aceites esenciales de lavanda, romero, eucalipto y menta. Lavanda: Relaja la mente y reduce la tensión. Romero: Estimula la circulación y alivia la fatiga muscular. Eucalipto: Refresca y aporta una sensación de bienestar. Menta: Proporciona un efecto refrescante y revitalizante. Ideal para masajes terapéuticos o después de un día agotador, este aceite ayuda a relajar el cuerpo y despejar la mente. Su textura ligera y de rápida absorción deja la piel suave, hidratada y con una fragancia herbal envolvente. Rinde de 15 a 20 servicios aproximadamente"
    },
    {
      "id": "masaje_despierta",
      "name": "Despierta. Refrescante y revitalizante",
      "category": "aceites_masajes_relajantes",
      "descripcion": "Renueva tu energía con nuestro Aceite para Masaje Refrescante y Revitalizante, una combinación única de aceites esenciales de limón y eucalipto que estimula los sentidos y aporta una sensación de frescura inmediata. Limón: Tonifica la piel y brinda un aroma cítrico revitalizante. Eucalipto: Despeja la mente y relaja los músculos con su efecto refrescante. Ideal para masajes energizantes o después de una jornada intensa, este aceite ayuda a aliviar la fatiga, dejando la piel suave y con una fragancia fresca y estimulante. Rinde de 15 a 20 servicios aproximadamente"
    },
    {
      "id": "masaje_dulces_suenos",
      "name": "Dulces sueños. Relajación y Armonía",
      "category": "aceites_masajes_relajantes",
      "descripcion": "Déjate envolver por la suavidad y el equilibrio de nuestro Aceite para Masaje Relajante y Armonizante, una mezcla perfecta de lavanda, naranja y mandarina diseñada para aliviar la tensión y brindar una sensación de bienestar total. Lavanda: Relaja la mente y el cuerpo, reduciendo el estrés. Naranja: Aporta energía y una sensación de felicidad. Mandarina: Promueve la tranquilidad y el equilibrio emocional. Ideal para masajes relajantes, este aceite nutre la piel y deja una fragancia dulce y cítrica que envuelve los sentidos, convirtiendo cada aplicación en un momento de serenidad y renovación. Rinde de 15 a 20 servicios aproximadamente"
    },
    {
      "id": "sinergia_varices_masaje",
      "name": "Varices",
      "category": "sinergias_masajes",
      "descripcion": "Esta sinergia, aplicadas en masaje es excelente para favorecer la circulación sanguínea, aliviar la pesadez de piernas y mejorar problemas tan comunes como la retención de líquidos, celulitis, varices o la aparición de arañitas vasculares gracias a los beneficios de sus aceites esenciales",
      "mezcla": "Ciprés, menta, romero, limón",
      "usos": "Hidroterapia y Masaje local"
    },
    {
      "id": "sinergia_redu_c_masaje",
      "name": "Redu-C",
      "category": "sinergias_masajes",
      "descripcion": "Esta sinergia está diseñada para mejorar la circulación y activar el desalojo de grasas que forman la celulitis, ayudar a reducir la inflamación y aumentar el flujo sanguíneo facilitando el procesamiento de los nutrientes y los efectos de los radicales libres y promueven la renovación de las células sanas",
      "mezcla": "Ciprés, menta, romero, limón",
      "usos": "Hidroterapia y Masaje local"
    },
    {
      "id": "serum_facial",
      "name": "Sérum Facial",
      "category": "sueros_faciales",
      "descripcion": "Este suero facial, aplicado en masaje suave en la cara es excelente para favorecer la circulación, ayuda a mantener la hidratación de la piel, disminuye las líneas de expresión, ayuda con la PRODUCCIÓN de COLÁGENO, mantiene la firmeza de la piel da luminosidad a la piel y ayuda a eliminar los radicales libres de la piel gracias a los beneficios de sus aceites esenciales",
      "mezcla": "Rosa mosqueta, anís, incienso y geranio",
      "usos": "Hidroterapia y Masaje local"
    },
    {
      "id": "almendras_dulces",
      "name": "Almendras dulces",
      "category": "aceites_vehiculares",
      "presentacion": "100 ml",
      "propiedades": "Al ser considerado uno de los aceites más suaves e hidratantes y gracias a su alto contenido en vitaminas, alivia el picor y las molestias de las pieles más sensibles. Además, es de fácil absorción, por lo que penetra fácilmente en tu piel, hidratándola en profundidad y protegiéndola de las inclemencias del tiempo. Rico en omega 6 y 9, vitaminas A, B, D, E, antioxidantes y minerales."
    },
    {
      "id": "rosa_mosqueta",
      "name": "Rosa mosqueta",
      "category": "aceites_vehiculares",
      "presentacion": "50 ml",
      "propiedades": "El aceite de rosa mosqueta es considerado uno de los aceites más suaves e hidratantes y gracias a su alto contenido en vitaminas, alivia el picor y las molestias de las pieles más sensibles. Además, es de fácil absorción, por lo que penetra fácilmente en tu piel, hidratándola en profundidad y protegiéndola de las inclemencias del tiempo. Rico en omega 6 y 9, vitaminas A, B, D, E, antioxidantes y minerales."
    },
    {
      "id": "jojoba",
      "name": "Jojoba",
      "category": "aceites_vehiculares",
      "presentacion": "100 ml",
      "propiedades": "El aceite de jojoba tiene propiedades antiinflamatorias, antisépticas y antimicrobianas, por lo que se utiliza como coadyuvante de problemas dermatológicos como el acné, la seborrea y la caspa. Y si bien tiene una textura oleosa, ayuda a controlar el exceso de grasa por lo que no contribuye con el problema de acné, sino que calma la piel, la hidrata y ayuda a combatir microorganismos como bacterias."
    },
    {
      "id": "argan",
      "name": "Argán",
      "category": "aceites_vehiculares",
      "presentacion": "50 ml",
      "propiedades": "A día de hoy este aceite es muy apreciado en el mundo gracias a los grandes beneficios que puede aportarnos para el cuidado de la piel y del cabello, y hacerlo de manera natural. Está indicado para todos los tipos de piel, incluso grasas o acneicas, ya que es no comedogénico. Tiene un alto porcentaje de ácidos grasos esenciales, ácidos grasos Omega-3 y tocoferoles (Vitamina E). Vitaminas con un alto poder antioxidante que son perfectas para retardar el envejecimiento de la piel. También contiene beta-carotenoides, escualeno, fitosteroles y es rico en gamma-tocoferol."
    },
    {
      "id": "pepita_uva",
      "name": "Pepita de uva",
      "category": "aceites_vehiculares",
      "presentacion": "100 ml",
      "propiedades": "El aceite de pepita de uva es ideal para pieles sensibles, grasas o mixtas ya que es considerado no comedogénico. No obstante, suele ser muy útil en pieles secas. Este aceite se adentra cada vez más en el mundo de la cosmética natural por no concentrar grasa. La semilla de uva contiene muchos beneficios. Uno de los principales es que tiene gran cantidad de vitaminas y antioxidantes, como polifenoles y taninos."
    }
  ];

const imageNameMap: { [key: string]: string } = {
    'mandarina': 'IMG_MANDARINA',
    'toronja': 'IMG_TORONJA',
    'naranja': 'IMG_NARANJA',
    'limon': 'GENERIC',
    'clavo': 'IMG_CLAVO',
    'bergamota': 'GENERIC',
    'albahaca': 'GENERIC',
    'anis_estrella': 'GENERIC',
    'romero': 'GENERIC',
    'hierbabuena': 'IMG_HIERBABUENA',
    'menta': 'GENERIC',
    'canela': 'IMG_CANELA',
    'lima': 'IMG_LIMA',
    'lemongrass': 'IMG_LEMON_GRASS',
    'jengibre': 'IMG_JENGIBRE',
    'oregano': 'IMG_OREGANO',
    'salvia': 'IMG_SALVIA',
    'tomillo': 'GENERIC',
    'geranio': 'IMG_GERANIO',
    'lavanda': 'IMG_LAVANDA',
    'ylang_ylang': 'IMG_YLANG_YLANG',
    'rosa': 'IMG_ROSA',
    'incienso': 'IMG_INCIENSO',
    'sandalo': 'IMG_SANDALO',
    'cedro': 'IMG_CEDRO',
    'cypress': 'IMG_CIPRES',
    'pino_siberiano': 'IMG_PINO_SIBERIANO',
    'ylang': 'IMG_YLANG_YLANG',
    'patchouli': 'IMG_PATCHOULI',
    'eucalipto': 'IMG_LUZ_DE_EUCALIPTO',
    'citronela': 'IMG_CITRONELA',
    'mirra': 'IMG_MIRRA',
    'melissa': 'IMG_MELISSA',
    'sinergia_respiracion': 'IMG_RESPIRACION',
    'sinergia_dulces_suenos': 'IMG_DULCES_SUEÑOS',
    'sinergia_vitalidad': 'IMG_VITALIDAD',
    'sinergia_inhala_mas': 'IMG_INHALA+',
    'sinergia_articulaciones': 'IMG_ARTICULACIONES',
    'sinergia_inmune': 'IMG_DEFENSA_EN_ESENCIA',
    'sinergia_despierta': 'IMG_DESPIERTA_CON_ENERGIA',
    'sinergia_dolor_cabeza': 'IMG_DOLOR_DE_CABEZA',
    'sinergia_concentracion': 'IMG_CONCENTRACION',
    'sinergia_cabello': 'IMG_+CABELLO',
    'sinergia_fem': 'IMG_FEM',
    'sinergia_antioxidante': 'IMG_ANTIOXIDANTE',
    'sinergia_super_boost': 'GENERIC',
    'sinergia_serenidad': 'GENERIC',
    'sinergia_abundancia': 'GENERIC',
    'sinergia_redu_c': 'IMG_REDU-C',
    'sinergia_varices': 'IMG_VARICES',
    'sinergia_barba': 'GENERIC',
    'sinergia_digest': 'IMG_DIGEST',
    'sinergia_enfoque': 'IMG_ENFOQUE',
    'sinergia_pasion': 'IMG_PASION',
    'sinergia_motivacion': 'IMG_MOTIVACION',
    'sinergia_transformacion': 'IMG_TRANSFORMACION',
    'sinergia_paz': 'IMG_PAZ',
    'sinergia_alegria': 'IMG_ALEGRIA',
    'sinergia_proteccion': 'IMG_PROTECCION',
    'sinergia_aura': 'IMG_AURA',
    'sinergia_abundancia_holistica': 'GENERIC',
    'sinergia_zen': 'IMG_ZEN',
    'masaje_analgesia': 'IMG_ANALGESIA',
    'masaje_despierta': 'IMG_DESPIERTA',
    'masaje_dulces_suenos': 'IMG_DULCES_SUEÑOS_MASAJE',
    'sinergia_varices_masaje': 'IMG_VARICES',
    'sinergia_redu_c_masaje': 'IMG_REDU-C',
    'serum_facial': 'GENERIC',
    'almendras_dulces': 'GENERIC',
    'rosa_mosqueta': 'GENERIC',
    'jojoba': 'GENERIC',
    'argan': 'GENERIC',
    'pepita_uva': 'GENERIC',
};

export const products: Product[] = productsData.map(p => {
    const imageName = imageNameMap[p.id];
    if (!imageName) {
        console.error(`El producto con id "${p.id}" no tiene una imagen asignada en imageNameMap.`);
        return {
            ...p,
            image: '/images/placeholder.jpg',
        };
    }
    return {
        ...p,
        image: `/images/${imageName}.jpg`,
    };
});
