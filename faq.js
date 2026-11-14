(() => {
  'use strict';
  // FAQ translations. Existing SEO questions remain first, followed by additions.
  const FAQ_TEXT = {
  "ru": {
    "title": "Вопросы и ответы",
    "items": {
      "calculationScope": {
        "question": "Что рассчитывает программа по ГОСТ 9142-2014?",
        "answer": [
          "Программа рассчитывает усилие сопротивления сжатию гофроящика, испытательную массу при штабелировании, характеристики гофрокартона и рекомендуемую марку картона."
        ]
      },
      "calculationFlags": {
        "question": "Как учитываются высеченные элементы и нагрузка штабеля?",
        "answer": [
          "В интерфейсе используются флажки: высеченные элементы по высоте, продукция воспринимает нагрузку штабеля, хранение при влажности 75-80%. По ним выбирается расчетный сценарий и коэффициенты."
        ]
      },
      "pdfReport": {
        "question": "Формирует ли программа PDF-отчет?",
        "answer": [
          "Да, после расчета программа формирует PDF-отчет с исходными данными, выбранным сценарием, формулой и результатами подбора гофрокартона."
        ]
      },
      "methodDifference": {
        "question": "Почему результат расчёта в программе «ГОСТ 9142-2014» может отличаться от результата программы «Предельная нагрузка»?",
        "answer": [
          "Программы решают разные задачи.",
          "«ГОСТ 9142-2014» выполняет нормативный расчёт требуемого сопротивления сжатию гофроящика по методике ГОСТ 9142-2014.",
          "«Предельная нагрузка» использует отдельную инженерную модель оценки прочности ящика и дополнительно содержит расчётный показатель по методике ГОСТ 9142-90.",
          "Поэтому даже при одинаковых размерах ящика, массе продукции и параметрах штабеля результаты двух программ не обязаны совпадать.",
          "Различие результатов не означает ошибку: сравниваются разные методики расчёта."
        ]
      },
      "requiredCompression": {
        "question": "Что показывает рассчитанное усилие сопротивления сжатию?",
        "answer": [
          "Рассчитанное усилие сопротивления сжатию показывает минимальную прочность, которую должен обеспечивать гофроящик при заданной массе продукции и условиях штабелирования в соответствии с ГОСТ 9142-2014.",
          "Это нормативное требование к ящику, а не прогноз фактической прочности конкретного изготовленного образца.",
          "Иными словами, программа отвечает на вопрос:",
          "«Какое сопротивление вертикальному сжатию должен иметь ящик, чтобы соответствовать заданным условиям по ГОСТ?»"
        ]
      },
      "stackSize": {
        "question": "Почему при увеличении количества ящиков в штабеле требуемое сопротивление сжатию увеличивается?",
        "answer": [
          "Нижний ящик штабеля воспринимает нагрузку от расположенных над ним ящиков.",
          "Чем больше ящиков находится выше него, тем больше вертикальная сила, которую он должен выдерживать.",
          "Поэтому при увеличении количества ящиков в штабеле возрастает и нормативное требование к сопротивлению сжатию упаковки."
        ]
      },
      "productSupport": {
        "question": "Как влияет способность продукта воспринимать нагрузку штабеля?",
        "answer": [
          "Если упакованный продукт способен воспринимать часть вертикальной нагрузки, часть нагрузки штабеля передаётся через сам продукт.",
          "В этом случае требования к прочности гофроящика могут быть ниже.",
          "Если продукт не способен воспринимать нагрузку, вся нагрузка штабеля должна восприниматься конструкцией ящика.",
          "Поэтому нормативное требование к сопротивлению сжатию упаковки возрастает."
        ]
      },
      "applicationComparison": {
        "question": "Чем программа «ГОСТ 9142-2014» отличается от программы «Предельная нагрузка»?",
        "answer": [
          "«ГОСТ 9142-2014» отвечает прежде всего на вопрос:",
          "«Какую минимальную прочность должен иметь ящик по требованиям стандарта?»",
          "Программа «Предельная нагрузка» решает более широкую инженерную задачу:",
          "«Какую нагрузку способен выдержать конкретный ящик и как на его несущую способность влияют конструкция, материал и условия эксплуатации?»",
          "Поэтому программы дополняют друг друга, а не дублируют один и тот же расчёт."
        ]
      },
      "demoResults": {
        "question": "Меняются ли результаты расчёта в демонстрационной версии случайным образом?",
        "answer": [
          "Нет. Марка гофрокартона и остальные результаты не выбираются случайно сами по себе.",
          "В демонстрационной версии изменяются размеры ящика. Поскольку размеры являются исходными данными расчёта, их изменение может косвенно повлиять на итоговое требуемое сопротивление сжатию и рекомендуемую марку картона.",
          "Поэтому результаты демо-версии предназначены для знакомства с интерфейсом и логикой работы программы, а не для выполнения производственного расчёта по фактическим размерам."
        ]
      },
      "stackCount": {
        "question": "Почему важно правильно указывать количество ящиков в штабеле?",
        "answer": [
          "Количество ящиков в штабеле — это общее число ящиков по высоте, включая нижний ящик.",
          "Например, если над нижним ящиком расположены ещё четыре ящика, общее количество ящиков в штабеле равно пяти, а не четырём.",
          "Это важно, поскольку именно нижний ящик воспринимает нагрузку всех расположенных над ним ящиков.",
          "Ошибка даже на один ярус может изменить требуемое сопротивление сжатию и привести к выбору другой марки гофрокартона."
        ]
      },
      "stackGrade": {
        "question": "Почему программа может рекомендовать другую марку картона при изменении числа ярусов?",
        "answer": [
          "Рекомендуемая марка зависит от рассчитанных требований к прочности упаковки.",
          "При увеличении количества ящиков в штабеле возрастает нагрузка на нижний ящик. Следовательно, увеличивается требуемое сопротивление сжатию.",
          "Если новое расчётное требование выходит за допустимый диапазон текущей марки, программа выбирает более прочную марку гофрокартона.",
          "Поэтому близкие по исходным данным варианты, например штабель из четырёх и пяти ящиков, могут приводить к различным рекомендациям по марке."
        ]
      },
      "dieCutRules": {
        "question": "Как влияют высеченные элементы или отверстия на расчёт?",
        "answer": [
          "Программа учитывает наличие высеченных элементов в соответствии с зависимостями и ограничениями, заданными ГОСТ 9142-2014.",
          "Важно понимать, что программа не моделирует ослабление конкретного отверстия методом конечных элементов и не рассчитывает локальные напряжения конструкции.",
          "Она применяет нормативные правила стандарта.",
          "Поэтому результат при включённом признаке «Имеются высеченные элементы по высоте» может отличаться от интуитивного ожидания пользователя.",
          "Если результат кажется неожиданным, его следует трактовать как следствие конкретной нормативной зависимости ГОСТ, а не как самостоятельную физическую модель программы."
        ]
      },
      "dieCutGrade": {
        "question": "Почему наличие высеченных элементов иногда приводит к неожиданной рекомендуемой марке картона?",
        "answer": [
          "ГОСТ задаёт отдельные нормативные условия для различных конструктивных признаков ящика.",
          "Программа следует этим условиям буквально.",
          "Поэтому наличие высеченных элементов может изменить применяемые нормативные требования таким образом, который не всегда очевиден без обращения к соответствующей таблице или пункту ГОСТ.",
          "В таких случаях рекомендуется рассматривать не только итоговую марку картона, но и рассчитанное требуемое сопротивление сжатию, а также исходные параметры расчёта."
        ]
      },
      "grossNetWeight": {
        "question": "В чём разница между массой брутто и массой нетто в расчёте?",
        "answer": [
          "Масса брутто — это масса упаковки вместе с продукцией.",
          "Она используется при определении фактической нагрузки, создаваемой ящиками в штабеле.",
          "Масса нетто — это масса самой продукции без упаковки.",
          "Для отдельных нормативных характеристик и выбора значений из таблиц ГОСТ может требоваться именно масса продукции.",
          "Поэтому эти два параметра нельзя автоматически считать взаимозаменяемыми."
        ]
      },
      "missingNetWeight": {
        "question": "Почему отсутствие массы нетто может повлиять на отдельные нормативные характеристики?",
        "answer": [
          "Некоторые нормативные показатели выбираются по таблицам ГОСТ в зависимости от массы продукции.",
          "Если масса нетто не задана непосредственно, программа может использовать расчётное или оценочное значение, например через оценку массы самого ящика.",
          "В результате основной расчёт нагрузки по массе брутто может быть корректным, а отдельные характеристики, выбираемые по таблицам, могут отличаться от ожидаемых пользователем.",
          "Поэтому для наиболее точного расчёта желательно вводить все исходные данные, предусмотренные программой, включая массу нетто продукции, если соответствующее поле доступно."
        ]
      },
      "standardVsStaticLoad": {
        "question": "Почему рассчитанная нагрузка может не совпадать с простым умножением массы ящиков, стоящих сверху?",
        "answer": [
          "Простое произведение массы одного ящика на количество расположенных сверху ящиков показывает только статическую массу груза.",
          "Нормативный расчёт по ГОСТ дополнительно использует коэффициенты и условия, предусмотренные стандартом.",
          "Поэтому рассчитанное требуемое сопротивление сжатию нельзя напрямую сравнивать только с величиной:",
          "масса одного ящика × количество ящиков сверху.",
          "Программа рассчитывает именно нормативное требование к прочности упаковки, а не только вес находящегося сверху груза."
        ]
      },
      "gradeBoundaries": {
        "question": "Почему программа может показать марку Т-21, Т-22 или другую марку при очень близких исходных данных?",
        "answer": [
          "Каждой марке гофрокартона соответствует определённый диапазон нормативных прочностных характеристик.",
          "Программа сначала рассчитывает требуемые характеристики упаковки, а затем сопоставляет полученный результат с нормативными диапазонами марок.",
          "Если расчётное значение находится рядом с границей диапазонов, небольшое изменение количества ярусов, размеров, массы или других исходных параметров может привести к переходу на следующую марку.",
          "Это нормальное следствие дискретного выбора марки по нормативным диапазонам."
        ]
      }
    },
    "intro": "Программа следует алгоритмам и таблицам ГОСТ 9142-2014 и не заменяет их собственной физической моделью. Рассчитанное нормативное требование следует отличать от фактической прочности конкретного ящика."
  },
  "en": {
    "title": "Frequently asked questions",
    "items": {
      "calculationScope": {
        "question": "What does the GOST 9142-2014 application calculate?",
        "answer": [
          "The application calculates the compression resistance of a corrugated box, the test mass for stacking, corrugated board characteristics and the recommended board grade."
        ]
      },
      "calculationFlags": {
        "question": "How are die-cut features and the stacking load taken into account?",
        "answer": [
          "The interface provides checkboxes for die-cut features along the box height, whether the packaged product supports the stacking load, and storage at 75–80% relative humidity. These settings determine the calculation scenario and coefficients."
        ]
      },
      "pdfReport": {
        "question": "Does the application generate a PDF report?",
        "answer": [
          "Yes. After calculation, the application generates a PDF report containing the input data, selected scenario, formula and board grade selection results."
        ]
      },
      "methodDifference": {
        "question": "Why can results from GOST 9142-2014 differ from results from Limit Load?",
        "answer": [
          "The applications address different tasks.",
          "GOST 9142-2014 performs a standard-compliant calculation of the required compression resistance of a corrugated box using the GOST 9142-2014 method.",
          "Limit Load uses a separate engineering model to assess box strength and also includes a calculated value based on the GOST 9142-90 method.",
          "Even with identical box dimensions, product weight and stacking parameters, the two applications are therefore not expected to produce identical results.",
          "Different results do not indicate an error: different calculation methods are being compared."
        ]
      },
      "requiredCompression": {
        "question": "What does the calculated compression resistance indicate?",
        "answer": [
          "The calculated compression resistance indicates the minimum strength that a corrugated box must provide for the specified product weight and stacking conditions in accordance with GOST 9142-2014.",
          "This is a standard-based requirement for the box, rather than a prediction of the actual strength of a particular manufactured sample.",
          "In other words, the application answers the question:",
          "“What vertical compression resistance must the box provide to comply with the specified conditions under GOST?”"
        ]
      },
      "stackSize": {
        "question": "Why does required compression strength increase as the number of boxes in a stack increases?",
        "answer": [
          "The bottom box in a stack supports the load from the boxes above it.",
          "The more boxes there are above it, the greater the vertical force it must withstand.",
          "Increasing the number of boxes in a stack therefore increases the standard-based requirement for the packaging’s compression resistance."
        ]
      },
      "productSupport": {
        "question": "How does the product’s ability to support the stacking load affect the calculation?",
        "answer": [
          "If the packaged product can support part of the vertical load, part of the stacking load is transmitted through the product itself.",
          "With a load-bearing product, the required compression strength of the corrugated box may therefore be lower.",
          "If the product cannot support the load, the box structure must support the entire stacking load.",
          "The standard-based requirement for the packaging’s compression resistance therefore increases."
        ]
      },
      "applicationComparison": {
        "question": "How does GOST 9142-2014 differ from Limit Load?",
        "answer": [
          "GOST 9142-2014 primarily answers the question:",
          "“What minimum strength must the box provide to meet the standard’s requirements?”",
          "Limit Load addresses a broader engineering question:",
          "“What load can a particular box withstand, and how do its design, material and service conditions affect its load-bearing capacity?”",
          "The applications therefore complement each other rather than duplicate the same calculation."
        ]
      },
      "demoResults": {
        "question": "Are calculation results in the demo version changed at random?",
        "answer": [
          "No. The corrugated board grade and other results are not independently selected at random.",
          "The demo version changes the box dimensions. Since dimensions are calculation inputs, changing them may indirectly affect the resulting required compression strength and recommended board grade.",
          "Demo results are therefore intended to demonstrate the interface and calculation workflow, rather than to provide a production calculation based on actual dimensions."
        ]
      },
      "stackCount": {
        "question": "Why is it important to enter the number of boxes in a stack correctly?",
        "answer": [
          "The number of boxes in a stack is the total number of boxes stacked vertically, including the bottom box.",
          "For example, if there are four boxes above the bottom box, the total number of boxes in the stack is five, not four.",
          "This matters because the bottom box supports the load from all the boxes above it.",
          "An error of even one layer can change the required compression strength and lead to a different recommended corrugated board grade."
        ]
      },
      "stackGrade": {
        "question": "Why can changing the number of layers lead to a different recommended board grade?",
        "answer": [
          "The recommended board grade depends on the calculated packaging strength requirements.",
          "Increasing the number of boxes in a stack increases the load on the bottom box. The required compression strength therefore increases.",
          "If the new calculated requirement exceeds the allowable range for the current grade, the application selects a stronger corrugated board grade.",
          "Similar input configurations, such as stacks of four and five boxes, can therefore result in different recommended board grades."
        ]
      },
      "dieCutRules": {
        "question": "How do die-cut elements or cut-outs affect the calculation?",
        "answer": [
          "The application accounts for die-cut elements in accordance with the relationships and limitations specified in GOST 9142-2014.",
          "It does not use finite element analysis to model the weakening caused by a particular cut-out or calculate local structural stresses.",
          "It applies the rules prescribed by the standard.",
          "The result with “Die-cut elements along the box height” selected may therefore differ from the user’s intuitive expectations.",
          "An unexpected result should be interpreted as a consequence of a specific GOST relationship, rather than as the application’s own physical model."
        ]
      },
      "dieCutGrade": {
        "question": "Why can die-cut elements sometimes result in an unexpected recommended board grade?",
        "answer": [
          "GOST specifies separate requirements for different structural features of a box.",
          "The application follows these requirements exactly.",
          "Die-cut elements may therefore change the applicable standard-based requirements in a way that is not always apparent without consulting the relevant GOST table or clause.",
          "In these cases, review the calculated required compression strength and calculation inputs as well as the final recommended board grade."
        ]
      },
      "grossNetWeight": {
        "question": "What is the difference between gross weight and net weight in the calculation?",
        "answer": [
          "Gross weight is the combined weight of the packaging and its contents.",
          "It is used to determine the actual load imposed by the boxes in a stack.",
          "Net weight is the weight of the product alone, excluding packaging.",
          "Certain standard-based characteristics and values selected from GOST tables may specifically require the product weight.",
          "These two parameters must therefore not automatically be treated as interchangeable."
        ]
      },
      "missingNetWeight": {
        "question": "Why can a missing net weight affect individual standard-based characteristics?",
        "answer": [
          "Some standard-based values are selected from GOST tables according to the product weight.",
          "If net weight is not entered directly, the application may use a calculated or estimated value, for example by estimating the weight of the box itself.",
          "As a result, the main load calculation based on gross weight may be correct, while individual characteristics selected from tables may differ from the user’s expectations.",
          "For the most accurate calculation, enter all inputs provided for by the application, including the product’s net weight if the corresponding field is available."
        ]
      },
      "standardVsStaticLoad": {
        "question": "Why can the calculated load differ from simply multiplying the weight of the boxes above?",
        "answer": [
          "Multiplying the weight of one box by the number of boxes above gives only the static mass of the load.",
          "A standard-compliant calculation under GOST also uses the coefficients and conditions prescribed by the standard.",
          "The calculated required compression strength therefore cannot be directly compared solely with:",
          "weight of one box × number of boxes above.",
          "The application calculates the standard-based packaging strength requirement, rather than just the weight of the load above."
        ]
      },
      "gradeBoundaries": {
        "question": "Why can very similar inputs result in grade Т-21, Т-22 or another board grade?",
        "answer": [
          "Each corrugated board grade corresponds to a particular range of strength characteristics specified by the standard.",
          "The application first calculates the required packaging characteristics, then compares the result with the standard-based ranges for the board grades.",
          "If the calculated value is close to a range boundary, a small change in the number of layers, dimensions, weight or other inputs may lead to selection of the next grade.",
          "This is a normal consequence of selecting a discrete board grade using standard-based ranges."
        ]
      }
    },
    "intro": "The application follows the algorithms and tables of GOST 9142-2014 rather than replacing them with its own physical model. The calculated standard-based requirement must be distinguished from the actual strength of a particular box."
  }
};
  const section = document.createElement('section');
  section.id = 'faq';
  section.setAttribute('aria-labelledby', 'faq-title');
  function setLanguage(language) {
    const lang = language === 'en' ? 'en' : 'ru';
    const copy = FAQ_TEXT[lang];
    const openItems = new Set(Array.from(section.querySelectorAll('details[open]'), item => item.dataset.faqKey));
    const container = document.createElement('div');
    container.className = 'container';
    const title = document.createElement('h2');
    title.id = 'faq-title';
    title.textContent = copy.title;
    const intro = document.createElement('p');
    intro.textContent = copy.intro;
    container.append(title, intro);
    const list = document.createElement('div');
    list.className = 'faq-list';
    for (const [key, item] of Object.entries(copy.items)) {
      const details = document.createElement('details');
      details.className = 'card faq-item';
      details.dataset.faqKey = key;
      details.open = openItems.has(key);
      const summary = document.createElement('summary');
      const heading = document.createElement('h3');
      heading.textContent = item.question;
      summary.append(heading);
      const answer = document.createElement('div');
      answer.className = 'faq-answer';
      item.answer.forEach(text => {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        answer.append(paragraph);
      });
      details.append(summary, answer);
      list.append(details);
    }
    container.append(list);
    section.replaceChildren(container);
    section.lang = lang;
    document.getElementById(lang + '-work').after(section);
    // Keep the existing FAQPage in sync with the visible language and all questions.
    const schemaElement = document.querySelector('script[type="application/ld+json"]');
    const schema = JSON.parse(schemaElement.textContent);
    const faq = schema['@graph'].find(node => node['@type'] === 'FAQPage');
    faq.inLanguage = lang;
    faq.mainEntity = Object.values(copy.items).map(item => ({
      '@type': 'Question', name: item.question,
      acceptedAnswer: {'@type': 'Answer', text: item.answer.join('\n\n')}
    }));
    schemaElement.textContent = JSON.stringify(schema);
  }
  window.PackTuningFaq = {setLanguage};
})();
