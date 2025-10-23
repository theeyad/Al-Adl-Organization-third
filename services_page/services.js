// Service descriptions data
const serviceDescriptions = {
  "full-representation": {
    title: "التمثيل القانوني الكامل",
    description:
      "نؤمن أن الدفاع عن حقوقك لا يقتصر على تقديم الاستشارات فقط، بل يمتد إلى تمثيلك القانوني الكامل.",
    subServices: [
      {
        id: "egypt-court-representation",
        title: "التمثيل أمام المحاكم المصرية",
        description:
          "نقوم بالدفاع عنك في جميع القضايا مع إعداد المذكرات القانونية وحضور الجلسات في جميع درجات التقاضي.",
      },
      {
        id: "pre-litigation-procedures",
        title: "إجراءات ما قبل التقاضي",
        description:
          "نعمل على تسوية النزاعات، ونجهز الملفات القانونية الكاملة لضمان قوة الموقف القانوني.",
      },
      {
        id: "execution-procedures",
        title: "إجراءات التنفيذ",
        description:
          "نُباشر تنفيذ الأحكام القضائية ومتابعة التحصيل القانوني وحماية حقوق الموكل حتى استيفائها كاملة.",
      },
      {
        id: "company-representation",
        title: "تمثيل الشركات والمؤسسات",
        description:
          "نقدّم خدمات متخصصة في القضايا التجارية والعمالية والضريبية، وصياغة العقود ومراجعتها وحل النزاعات التعاقدية.",
      },
      {
        id: "government-agencies",
        title: "الجهات الحكومية والرقابية",
        description:
          "نقوم بتمثيل عملائنا أمام مصلحة الضرائب، هيئة الاستثمار، التأمينات الاجتماعية وغيرها من الجهات الرسمية.",
      },
      {
        id: "saudi-court-representation",
        title: "التمثيل أمام المحاكم السعودية",
        description:
          "نقوم بإعداد وتقديم الدعاوى والمذكرات القانونية، وحضور الجلسات أمام المحاكم العامة، التجارية والجزائية.",
      },
      {
        id: "commercial-investment-cases",
        title: "القضايا التجارية والاستثمارية",
        description:
          "نقدّم الدعم القانوني للمستثمرين والشركات في كافة المعاملات والعقود والنزاعات التجارية.",
      },
      {
        id: "labor-family-cases",
        title: "القضايا العمالية والأسرية",
        description:
          "نمثّل الأفراد في القضايا المتعلقة بالعمل والإقامة والأسرة، مع متابعة جميع الإجراءات النظامية.",
      },
      {
        id: "arbitration-dispute-resolution",
        title: "التحكيم وتسوية النزاعات",
        description:
          "نعمل على حل النزاعات عبر الوساطة والتحكيم التجاري بما يضمن السرعة والحفاظ على العلاقات التعاقدية.",
      },
      {
        id: "judgment-execution-followup",
        title: "متابعة تنفيذ الأحكام",
        description:
          "نحرص على متابعة تنفيذ الأحكام القضائية والإدارية لحين استرداد الحقوق كاملة.",
      },
    ],
  },
  investors: {
    title: "خدمات المستثمرين والأجانب",
    description: "خدمات قانونية شاملة للمستثمرين والأجانب في مصر والسعودية",
    subServices: [
      {
        id: "investor-residence",
        title: "إقامة المستثمرين",
        description:
          "خدمات استخراج وتجديد إقامة المستثمر الأجنبي في مصر مع ضمان سرعة الإجراءات.",
      },
      {
        id: "company-establishment",
        title: "تأسيس الشركات",
        description:
          "المساعدة في تأسيس وتسجيل الشركات للمستثمرين الأجانب مع تقديم الاستشارات القانونية اللازمة.",
      },
      {
        id: "security-approvals",
        title: "الموافقات الأمنية",
        description:
          "المساعدة في الحصول على الموافقات الأمنية اللازمة للمستثمرين والأجانب.",
      },
      {
        id: "residence-renewal",
        title: "تجديد الإقامات",
        description:
          "خدمات تجديد إقامات المستثمرين والعاملين الأجانب بسهولة وسرعة.",
      },
      {
        id: "foreign-marriage",
        title: "إثبات زواج الأجانب",
        description:
          "خدمات توثيق وإثبات زواج الأجانب في مصر وفقاً للقوانين المصرية.",
      },
      {
        id: "document-authentication",
        title: "توثيق الأوراق من القنصليات والسفارات",
        description:
          "خدمات توثيق المستندات والأوراق الرسمية من القنصليات والسفارات.",
      },
      {
        id: "work-permit",
        title: "تصاريح العمل",
        description: "المساعدة في استخراج تصاريح العمل للأجانب في مصر.",
      },
      {
        id: "company-followup",
        title: "متابعة الشركات",
        description:
          "خدمات متابعة وإدارة الشؤون القانونية للشركات الأجنبية في مصر.",
      },
      {
        id: "new-branches",
        title: "تسجيل فروع الشركات الجديدة",
        description: "المساعدة في تسجيل وتأسيس فروع جديدة للشركات القائمة.",
      },
      {
        id: "foreign-branches",
        title: "تسجيل فروع الشركات الأجنبية",
        description:
          "خدمات تسجيل فروع الشركات الأجنبية في مصر مع تقديم كافة الاستشارات القانونية.",
      },
    ],
  },
  "new-cities": {
    title: "خدمات المدن الجديدة وهيئة المجتمعات العمرانية",
    description:
      "خدمات قانونية شاملة للأفراد والمستثمرين والمطورين العقاريين في المدن الجديدة",
    subServices: [
      {
        id: "city-authorities",
        title: "التعامل مع أجهزة المدن وهيئة المجتمعات العمرانية",
        description:
          "تمثيل العملاء أمام الأجهزة التنفيذية في مدن: السادات، 6 أكتوبر، العاصمة الإدارية، الشيخ زايد، العبور، بدر، العاشر من رمضان",
      },
      {
        id: "land-allocation",
        title: "إجراءات تخصيص واستلام الأراضي",
        description:
          "متابعة جميع مراحل تخصيص الأراضي الصناعية أو السكنية أو الاستثمارية حتى استلام الموقع فعليًا",
      },
      {
        id: "contracts-documents",
        title: "عقود البيع والتنازل وإثبات الجدية",
        description:
          "إعداد ومراجعة عقود البيع والتنازل، ومتابعة سداد دفعات الأراضي، وإثبات الجدية للمشروعات الاستثمارية",
      },
      {
        id: "licenses-permits",
        title: "إصدار التراخيص والبناء والتشغيل",
        description:
          "إتمام إجراءات تراخيص البناء والتوسعة والتشغيل طبقًا لاشتراطات الهيئة وأجهزة المدن",
      },
      {
        id: "violations-legalization",
        title: "التصالح في مخالفات البناء وتقنين الأوضاع",
        description:
          "تقديم الطلبات ومتابعة تقنين الأوضاع للمباني والمنشآت المخالفة وفق القوانين المنظمة",
      },
      {
        id: "disputes-litigation",
        title: "التقاضي والمنازعات مع الهيئة",
        description:
          "تمثيل العملاء في القضايا ضد هيئة المجتمعات العمرانية أو أجهزة المدن، سواء في قضايا السحب، أو الإلغاء، أو فسخ التخصيص، أو التعويض",
      },
    ],
  },
  corporate: {
    title: "خدمات الشركات والنزاعات التجارية",
    description:
      "منظومة متكاملة من الخدمات القانونية للشركات المحلية والأجنبية",
    subServices: [
      {
        id: "company-formation",
        title: "تأسيس وتسجيل الشركات",
        description:
          "تأسيس جميع أنواع الشركات (مساهمة – ذات مسؤولية محدودة – فردية – فروع أجنبية)، مع استخراج السجل التجاري والبطاقة الضريبية",
      },
      {
        id: "contracts-review",
        title: "صياغة ومراجعة العقود التجارية",
        description:
          "إعداد ومراجعة كافة أنواع العقود التجارية (بيع – توزيع – وكالة – توريد – شراكة – مقاولات) لضمان حماية حقوق الشركة",
      },
      {
        id: "company-modifications",
        title: "تعديلات الشركات وتحديث بياناتها",
        description:
          "متابعة إجراءات تغيير الشركاء، زيادة أو تخفيض رأس المال، تعديل النشاط، أو نقل المقر القانوني",
      },
      {
        id: "commercial-disputes",
        title: "النزاعات التجارية والتحكيم",
        description:
          "تمثيل الشركات في القضايا التجارية أمام المحاكم الاقتصادية وهيئات التحكيم المحلية والدولية",
      },
      {
        id: "debt-collection",
        title: "تحصيل الديون والمستحقات",
        description:
          "اتخاذ الإجراءات القانونية اللازمة لتحصيل الديون التجارية بالطرق القانونية أو القضائية",
      },
      {
        id: "legal-consultation",
        title: "الاستشارات القانونية الدورية للشركات",
        description:
          "خدمة المستشار القانوني الدائم لمتابعة المعاملات والعقود اليومية وضمان التزام الشركة بالقوانين",
      },
    ],
  },
  "egypt-saudi": {
    title: "خدمات الشركات في مصر والسعودية",
    description: "خدمات متكاملة لتأسيس ودعم الشركات في مصر والسعودية",
    subServices: [
      {
        id: "egypt-companies",
        title: "خدمات الشركات في مصر",
        description:
          "تأسيس وتسجيل الشركات بجميع أنواعها، استخراج الأوراق الرسمية، إعداد ومراجعة العقود واللوائح، تعديلات الشركات، الاستشارات القانونية المستمرة",
      },
      {
        id: "saudi-companies",
        title: "خدمات الشركات في المملكة العربية السعودية",
        description:
          "تأسيس الشركات المحلية والأجنبية، تسجيل الفروع والوكالات التجارية، الاستشارات القانونية للشركات والمستثمرين، صياغة ومراجعة العقود التجارية",
      },
    ],
  },
  industrial: {
    title: "خدمات القطاع الصناعي",
    description: "خدمات قانونية متكاملة للمصانع والمستثمرين الصناعيين",
    subServices: [
      {
        id: "factory-establishment",
        title: "تأسيس وتسجيل المصانع والمنشآت الصناعية",
        description:
          "إعداد وتأسيس الكيانات الصناعية وفق قوانين الاستثمار والتنمية الصناعية، والحصول على السجل الصناعي ورخص التشغيل",
      },
      {
        id: "industrial-licenses",
        title: "التراخيص والموافقات الصناعية",
        description:
          "متابعة جميع إجراءات التراخيص من هيئة التنمية الصناعية والجهات الرقابية المختصة",
      },
      {
        id: "government-relations",
        title: "التعامل مع الجهات الحكومية",
        description:
          "تمثيل المصانع أمام وزارة التجارة والصناعة، جهاز حماية البيئة، وهيئة التنمية الصناعية، ومصلحة الجمارك",
      },
      {
        id: "industrial-contracts",
        title: "العقود الصناعية والتوريد",
        description:
          "صياغة ومراجعة عقود التوريد، التصنيع، المقاولات، الصيانة، وعقود الوكالات الفنية والتمثيل التجاري",
      },
      {
        id: "industrial-litigation",
        title: "التقاضي والمنازعات الصناعية",
        description:
          "تمثيل المنشآت الصناعية في النزاعات التجارية والعمالية والإدارية، والتحكيم في العقود الصناعية",
      },
      {
        id: "industrial-consultation",
        title: "الاستشارات القانونية الصناعية",
        description:
          "تقديم الاستشارات المتخصصة في قوانين البيئة، السلامة الصناعية، العقوبات، والالتزامات القانونية للمصانع",
      },
    ],
  },
  "real-estate": {
    title: "قانون العقارات",
    description: "خدمات عقارية شاملة تغطي مصر والسعودية",
    subServices: [
      {
        id: "property-registration",
        title: "تسجيل العقارات والأراضي",
        description:
          "إتمام كافة إجراءات التسجيل بالشهر العقاري، وتوثيق العقود، وتحويل الملكية بصورة قانونية مضمونة",
      },
      {
        id: "real-estate-contracts",
        title: "صياغة ومراجعة العقود العقارية",
        description:
          "إعداد ومراجعة عقود البيع، الإيجار، التمليك، الانتفاع، والاستثمار، لحماية حقوق الأطراف",
      },
      {
        id: "legalization",
        title: "تقنين أوضاع الأراضي والمباني",
        description:
          "مراجعة ملفات التقنين والتصالح مع الجهات الحكومية وهيئة المجتمعات العمرانية الجديدة",
      },
      {
        id: "real-estate-disputes",
        title: "النزاعات العقارية والتحكيم",
        description:
          "تمثيل العملاء أمام المحاكم وهيئات التحكيم في قضايا الملكية، الإيجار، الميراث، والعقود العقارية",
      },
      {
        id: "old-law-disputes",
        title: "النزاعات العقارية المرتبطة بالقانون القديم",
        description:
          "التعامل مع قضايا الإيجار القديم، والعقود الممتدة أو الموروثة، وإعادة تنظيم العلاقات الإيجارية",
      },
      {
        id: "real-estate-consultation",
        title: "الاستشارات القانونية العقارية",
        description:
          "تقديم استشارات قانونية دقيقة قبل أي صفقة أو مشروع استثماري عقاري لتجنب المخاطر",
      },
    ],
  },
  litigation: {
    title: "الخدمات القانونية والتقاضي",
    description:
      "منظومة متكاملة من الخدمات القانونية وأعمال التقاضي في مصر والسعودية",
    subServices: [
      {
        id: "court-representation",
        title: "التمثيل القانوني أمام جميع المحاكم",
        description:
          "تمثيل الأفراد والشركات في القضايا المدنية، الجنائية، الإدارية، والتجارية أمام جميع درجات التقاضي",
      },
      {
        id: "legal-memoranda",
        title: "إعداد وصياغة المذكرات القانونية",
        description:
          "كتابة المذكرات والدفاعات القانونية الدقيقة، وتقديم الطعون والنقوض في مختلف أنواع القضايا",
      },
      {
        id: "execution-followup",
        title: "التنفيذ ومتابعة الأحكام القضائية",
        description:
          "إدارة ومتابعة تنفيذ الأحكام المدنية والتجارية والعقارية وضمان استرداد الحقوق",
      },
      {
        id: "compensation-cases",
        title: "قضايا التعويضات والمسؤولية المدنية",
        description:
          "رفع ومتابعة دعاوى التعويض عن الأضرار المادية والمعنوية وفق أحكام القانون المدني",
      },
      {
        id: "administrative-cases",
        title: "القضايا الإدارية ومجلس الدولة",
        description:
          "تمثيل العملاء في الطعون على القرارات الإدارية والدعاوى ضد الجهات الحكومية أمام مجلس الدولة",
      },
      {
        id: "criminal-cases",
        title: "القضايا الجنائية",
        description:
          "الدفاع في قضايا الجنايات والجنح بكافة مراحلها، وصياغة مذكرات الدفاع القانونية أمام النيابات والمحاكم",
      },
    ],
  },
  family: {
    title: "قضايا الأسرة والأحوال الشخصية",
    description: "دعم قانوني متكامل في كل ما يتعلق بالأحوال الشخصية",
    subServices: [
      {
        id: "divorce-cases",
        title: "الطلاق والخلع والرجعة",
        description:
          "تمثيل الزوج أو الزوجة في قضايا الطلاق والخلع، وصياغة اتفاقات التسوية الودية",
      },
      {
        id: "alimony-cases",
        title: "النفقة بكافة أنواعها",
        description:
          "رفع ومتابعة دعاوى النفقة الزوجية ونفقة الأطفال والتعليم والمسكن والعدة، وتنفيذ الأحكام الصادرة",
      },
      {
        id: "custody-visitation",
        title: "الحضانة والرؤية والسفر",
        description:
          "تمثيل الأطراف في قضايا الحضانة وتنظيم الرؤية ومنع السفر أو الإذن به، مع مراعاة مصلحة الأطفال",
      },
      {
        id: "inheritance-cases",
        title: "الإرث والمواريث",
        description:
          "إدارة قضايا تقسيم الميراث الشرعي وتوزيع التركات، وتسوية النزاعات العائلية بالطرق القانونية",
      },
      {
        id: "marriage-proof",
        title: "إثبات الزواج أو النسب",
        description:
          "إجراءات إثبات الزواج أو النسب أمام الجهات القضائية المختصة، وضمان حفظ الحقوق الشرعية للأسرة",
      },
      {
        id: "family-consultation",
        title: "الاستشارات الأسرية والقانونية",
        description:
          "تقديم استشارات دقيقة وسرية لتسوية النزاعات الأسرية قبل الوصول إلى ساحات القضاء",
      },
    ],
  },
  civil: {
    title: "القضايا المدنية",
    description: "خدمات قانونية متكاملة في القضايا المدنية داخل مصر والسعودية",
    subServices: [
      {
        id: "civil-lawsuits",
        title: "رفع ومتابعة الدعاوى المدنية",
        description:
          "تمثيل الأفراد والشركات أمام المحاكم المدنية في جميع أنواع القضايا (الالتزامات – التعويضات – الملكية – العقود)",
      },
      {
        id: "legal-appeals",
        title: "إعداد المذكرات والطعون القانونية",
        description:
          "صياغة المذكرات القانونية بدقة، وتقديم الطعون أمام محاكم الاستئناف والنقض لضمان أفضل دفاع ممكن",
      },
      {
        id: "compensation-damages",
        title: "قضايا التعويض والمسؤولية المدنية",
        description:
          "رفع الدعاوى للمطالبة بالتعويض عن الأضرار المادية أو المعنوية الناتجة عن الإهمال أو الإخلال بالعقود",
      },
      {
        id: "civil-contracts",
        title: "قضايا العقود المدنية",
        description:
          "صياغة ومراجعة العقود المدنية مثل البيع، الإيجار، القرض، المقاولة، والتوريد، وتمثيل العملاء في المنازعات",
      },
      {
        id: "property-possession",
        title: "قضايا الملكية والحيازة",
        description:
          "رفع الدعاوى المتعلقة بنقل الملكية أو منع التعرض أو استرداد الحيازة أو الفصل في النزاعات العقارية",
      },
      {
        id: "civil-execution",
        title: "تنفيذ الأحكام المدنية",
        description:
          "إتمام إجراءات التنفيذ الجبري للأحكام الصادرة لصالح العملاء أمام دوائر التنفيذ المختصة",
      },
    ],
  },
  criminal: {
    title: "قضايا الجنح والجنايات",
    description:
      "تمثيل قانوني متكامل للدفاع عن عملائنا أمام جهات التحقيق والمحاكم",
    subServices: [
      {
        id: "prosecution-defense",
        title: "التمثيل أمام النيابات والمحاكم الجنائية",
        description:
          "حضور التحقيقات والدفاع عن المتهمين في جميع مراحل الدعوى من التحقيق إلى النقض",
      },
      {
        id: "misdemeanor-cases",
        title: "قضايا الجنح",
        description:
          "الدفاع في قضايا الضرب، والسرقة البسيطة، وخيانة الأمانة، وإيصالات الأمانة، والشيكات بدون رصيد، وحوادث المرور",
      },
      {
        id: "felony-cases",
        title: "قضايا الجنايات",
        description:
          "الدفاع في القضايا الكبرى مثل القتل، والمخدرات، وغسل الأموال، والرشوة، والتزوير، والاتجار بالبشر",
      },
      {
        id: "appeals-memoranda",
        title: "إعداد المذكرات والطعن بالنقض",
        description:
          "صياغة مذكرات الدفاع والطعن في الأحكام أمام محكمة النقض لضمان تحقيق العدالة الكاملة",
      },
      {
        id: "victim-representation",
        title: "تمثيل المجني عليهم والمدعين بالحق المدني",
        description:
          "اتخاذ الإجراءات القانونية للمطالبة بالحق المدني والتعويض المناسب أمام القضاء الجنائي",
      },
      {
        id: "detention-release",
        title: "متابعة أوامر الحبس والإفراج",
        description:
          "تقديم طلبات إخلاء السبيل، والاستئناف على أوامر الحبس الاحتياطي، ومتابعة تنفيذ الأحكام",
      },
    ],
  },
  contracts: {
    title: "العقود والمذكرات القانونية",
    description: "خدمات متكاملة في إعداد وصياغة العقود والمذكرات القانونية",
    subServices: [
      {
        id: "contract-drafting",
        title: "صياغة العقود المدنية والتجارية",
        description:
          "صياغة العقود المدنية والتجارية بما يتوافق مع القوانين المحلية والدولية",
      },
      {
        id: "company-contracts",
        title: "عقود تأسيس الشركات والشراكة",
        description:
          "إعداد عقود تأسيس الشركات، وعقود الشراكة، والتمويل، والوكالة، والمقاولات",
      },
      {
        id: "contract-review",
        title: "مراجعة العقود قبل التوقيع",
        description:
          "مراجعة العقود قبل التوقيع لضمان حماية مصالح العميل وكشف أي بنود مجحفة",
      },
      {
        id: "memorandum-drafting",
        title: "صياغة مذكرات التفاهم والاتفاقيات",
        description: "صياغة مذكرات التفاهم والاتفاقيات المبدئية بين الأطراف",
      },
      {
        id: "contract-analysis",
        title: "تحليل وتدقيق العقود القانونية",
        description:
          "تحليل وتدقيق العقود القانونية القائمة وتعديلها بما يواكب المتغيرات",
      },
      {
        id: "legal-documentation",
        title: "توثيق العقود رسميًا",
        description: "توثيق العقود رسميًا لدى الجهات الحكومية والسفارات",
      },
    ],
  },
  "intellectual-property": {
    title: "الملكية الفكرية",
    description:
      "مجموعة شاملة من خدمات الملكية الفكرية لحماية الابتكارات والأعمال التجارية",
    subServices: [
      {
        id: "trademark-registration",
        title: "تسجيل العلامات التجارية",
        description: "تسجيل العلامات التجارية محليًا ودوليًا",
      },
      {
        id: "patent-registration",
        title: "تسجيل براءات الاختراع والنماذج الصناعية",
        description: "تسجيل براءات الاختراع والنماذج الصناعية وحقوق التصميم",
      },
      {
        id: "copyright-protection",
        title: "حماية حقوق المؤلف والمصنفات الفنية",
        description: "حماية حقوق المؤلف والمصنفات الفنية والأدبية",
      },
      {
        id: "franchise-contracts",
        title: "عقود الترخيص التجاري والفرنشايز",
        description:
          "إعداد ومراجعة عقود الترخيص التجاري والفرنشايز (Franchise)",
      },
      {
        id: "ip-enforcement",
        title: "ملاحقة المعتدين على العلامات",
        description: "ملاحقة المعتدين على العلامات أو المحتوى القانوني قضائيًا",
      },
      {
        id: "ip-disputes",
        title: "الدفاع في نزاعات التعدي أو التقليد",
        description:
          "الدفاع في نزاعات التعدي أو التقليد أمام مكاتب وبراءات الملكية الفكرية",
      },
    ],
  },
  traffic: {
    title: "خدمات المرور والتراخيص",
    description: "باقة متكاملة من الخدمات القانونية والإجرائية في قطاع المرور",
    subServices: [
      {
        id: "license-renewal",
        title: "تجديد وتوثيق التراخيص",
        description: "إجراءات تجديد وتوثيق التراخيص للمركبات الخاصة والتجارية",
      },
      {
        id: "driving-license",
        title: "تجديد رخص القيادة",
        description: "تجديد رخص القيادة للأفراد والمقيمين والمستثمرين الأجانب",
      },
      {
        id: "vehicle-transfer",
        title: "نقل ملكية المركبات",
        description: "نقل ملكية المركبات وتوثيق عقود البيع والشراء",
      },
      {
        id: "accident-representation",
        title: "تمثيل العملاء في قضايا الحوادث",
        description: "تمثيل العملاء في قضايا الحوادث والمخالفات المرورية",
      },
      {
        id: "compensation-followup",
        title: "متابعة قضايا التعويضات",
        description: "متابعة قضايا التعويضات الناتجة عن الحوادث",
      },
      {
        id: "violation-cancellation",
        title: "إلغاء أو تقنين مخالفات المرور",
        description:
          "إلغاء أو تقنين مخالفات المرور وفق الإجراءات القانونية الصحيحة",
      },
    ],
  },
};

// Function to generate main service cards dynamically
function generateServiceCards() {
  const servicesGrid = document.querySelector(".services-grid");
  if (!servicesGrid) return;

  // Clear existing content
  servicesGrid.innerHTML = "";

  // Generate service cards for each service in serviceDescriptions
  Object.keys(serviceDescriptions).forEach((serviceId) => {
    const serviceInfo = serviceDescriptions[serviceId];
    if (!serviceInfo.title) return;

    // Define icons for each service
    const serviceIcons = {
      investors: "supervisor_account",
      "new-cities": "location_city",
      corporate: "corporate_fare",
      traffic: "directions_car",
      "egypt-saudi": "business",
      industrial: "factory",
      "real-estate": "real_estate_agent",
      litigation: "gavel",
      family: "family_restroom",
      civil: "account_balance",
      criminal: "security",
      contracts: "description",
      "intellectual-property": "lightbulb",
      "full-representation": "balance",
    };

    const icon = serviceIcons[serviceId] || "stars";

    const serviceCard = document.createElement("div");
    serviceCard.className = "service-card";
    serviceCard.id = `service-${serviceId}`;
    serviceCard.innerHTML = `
      <div class="service-content">
        <div class="service-icon-container">
          <span class="material-symbols-outlined service-icon">${icon}</span>
        </div>
        <h3 class="service-title">${serviceInfo.title}</h3>
        <p class="service-description">${
          serviceInfo.description || "خدمات قانونية متخصصة في هذا المجال"
        }</p>
        <a href="#" class="learn-more-link" data-service="${serviceId}">
          اعرف المزيد
          <span class="material-symbols-outlined arrow-icon">arrow_back</span>
        </a>
      </div>
    `;

    servicesGrid.appendChild(serviceCard);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Generate main service cards dynamically
  generateServiceCards();

  // Handle showing sub-services
  const servicesGrid = document.querySelector(".services-grid");
  const subServicesGrid = document.querySelector(".sub-services-grid");
  const servicesContainer = document.querySelector(".services-container");

  function showSubServices(serviceId) {
    const serviceInfo = serviceDescriptions[serviceId];
    if (!serviceInfo || !serviceInfo.subServices) return;

    // Get the icon for the parent service
    const serviceIcons = {
      investors: "supervisor_account",
      "new-cities": "location_city",
      corporate: "corporate_fare",
      traffic: "directions_car",
      "egypt-saudi": "business",
      industrial: "factory",
      "real-estate": "real_estate_agent",
      litigation: "gavel",
      family: "family_restroom",
      civil: "account_balance",
      criminal: "security",
      contracts: "description",
      "intellectual-property": "lightbulb",
      "full-representation": "balance",
    };
    const parentIcon = serviceIcons[serviceId] || "stars";

    // Create back button
    const backButton = document.createElement("button");
    backButton.className = "back-button";
    backButton.setAttribute(
      "onclick",
      "window.location.href='./services.html'"
    );
    backButton.innerHTML =
      '<span class="material-symbols-outlined">arrow_forward</span> رجوع';
    backButton.addEventListener("click", () => {
      subServicesGrid.classList.add("fade-out");
      setTimeout(() => {
        subServicesGrid.innerHTML = "";
        subServicesGrid.classList.add("hidden");
        servicesGrid.classList.remove("hidden");
        setTimeout(() => servicesGrid.classList.remove("fade-out"), 50);
      }, 300);
    });

    // Create sub-services cards
    const subServicesHTML = serviceInfo.subServices
      .map(
        (subService) => `
      <div class="service-card">
        <div class="service-content">
          <div class="service-icon-container">
            <span class="material-symbols-outlined service-icon">${parentIcon}</span>
          </div>
          <h3 class="service-title">${subService.title}</h3>
          <p class="service-description">${subService.description}</p>
          <a href="#" class="learn-more-link" data-subservice-id="${subService.id}" data-parent-service="${serviceId}">
            احجز استشارة
            <span class="material-symbols-outlined arrow-icon">arrow_back</span>
          </a>
        </div>
      </div>
    `
      )
      .join("");

    // Show sub-services
    servicesGrid.classList.add("fade-out");
    setTimeout(() => {
      servicesGrid.classList.add("hidden");
      subServicesGrid.innerHTML = backButton.outerHTML + subServicesHTML;
      subServicesGrid.classList.remove("hidden");
      setTimeout(() => subServicesGrid.classList.remove("fade-out"), 50);

      // Add event listeners for sub-service cards
      subServicesGrid.querySelectorAll(".learn-more-link").forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const subServiceId = link.getAttribute("data-subservice-id");
          const parentServiceId = link.getAttribute("data-parent-service");
          const parentService = serviceDescriptions[parentServiceId];
          const subService = parentService.subServices.find(
            (s) => s.id === subServiceId
          );

          if (subService) {
            // Redirect to contact page for consultation booking
            window.location.href = "../contact_page/contact.html#contact-form";
          }
        });
      });
    }, 300);
  }

  // Open sub-services view when clicking "Learn More"
  document.querySelectorAll(".learn-more-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const serviceId = this.getAttribute("data-service");
      if (serviceId) {
        showSubServices(serviceId);
      }
    });
  });

  // Service card hover animations
  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-0.25rem)";
      this.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
    });
  });

  // Learn more links hover effect
  const learnMoreLinks = document.querySelectorAll(".learn-more-link");
  learnMoreLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      const arrow = this.querySelector(".arrow-icon");
      if (document.dir === "rtl") {
        arrow.style.transform = "translateX(-0.25rem)";
      } else {
        arrow.style.transform = "translateX(0.25rem)";
      }
    });

    link.addEventListener("mouseleave", function () {
      const arrow = this.querySelector(".arrow-icon");
      arrow.style.transform = "translateX(0)";
    });
  });
});
