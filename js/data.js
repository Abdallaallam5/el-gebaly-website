/* =====================================================================
   El-Gebaly Engineering Development — site content (AR / EN)
   Everything the visitor reads lives in this file, so it is easy to edit.
   NOTE: project details and the numbers in the "stats" block are
   placeholders written from the photos — replace with real data.
   ===================================================================== */

const SITE = {
  phone: '01505994910',
  phoneIntl: '+201505994910',
  whatsapp: '201505994910',
  email: 'osamaelgebaly94@gmail.com'
};

const I18N = {
  ar: {
    'meta.title': 'الجبالي للتطوير الهندسي | حلول متكاملة للمواسير والأعمال الميكانيكية الصناعية',
    'meta.desc': 'الجبالي للتطوير الهندسي: تنفيذ وتركيب شبكات مكافحة الحريق والبخار والغاز ومواسير الاستانلس ستيل والأعمال الميكانيكية للمشروعات الصناعية في جميع أنحاء مصر.',

    'brand.name': 'الجبالي للتطوير الهندسي',
    'brand.sub': 'EL-GEBALY ENGINEERING DEVELOPMENT',

    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'الخدمات',
    'nav.projects': 'المشروعات',
    'nav.sectors': 'القطاعات',
    'nav.partners': 'الشركاء',
    'nav.contact': 'تواصل معنا',
    'lang.switch': 'English',
    'lang.aria': 'Switch language to English',
    'nav.menu': 'القائمة',

    'hero.eyebrow': 'شركة هندسية متخصصة في الأعمال الميكانيكية الصناعية',
    'hero.title': 'الجبالي للتطوير الهندسي',
    'hero.sub': 'حلول متكاملة للمواسير والأعمال الميكانيكية الصناعية',
    'hero.text': 'نقدّم حلولًا هندسية متكاملة لتنفيذ وتركيب شبكات المواسير والأعمال الميكانيكية للمشروعات الصناعية في جميع أنحاء مصر، وفقًا لمتطلبات المشروع وأعلى معايير الجودة والسلامة والتنفيذ — من الدراسة والتوريد وحتى الاختبار والتشغيل والتسليم.',
    'hero.tags': ['مكافحة الحريق', 'البخار', 'الغاز', 'خطوط الإنتاج', 'مواسير الاستانلس ستيل'],
    'hero.cta1': 'اطلب عرض سعر',
    'hero.cta2': 'شاهد مشروعاتنا',
    'hero.scroll': 'اكتشف المزيد',

    'stats.1.v': '15', 'stats.1.l': 'سنة من الخبرة الميدانية',
    'stats.2.v': '150', 'stats.2.l': 'مشروع صناعي منفّذ',
    'stats.3.v': '40', 'stats.3.l': 'مهندس وفنّي متخصص',
    'stats.4.v': '100', 'stats.4.l': 'تغطية لجميع محافظات مصر', 'stats.4.s': '%',

    'about.eyebrow': 'من نحن',
    'about.title': 'شريك هندسي تعتمد عليه المصانع في تنفيذ أدق الأعمال',
    'about.p1': 'الجبالي للتطوير الهندسي شركة مصرية متخصصة في تنفيذ شبكات المواسير والأعمال الميكانيكية للمنشآت الصناعية والتجارية. نجمع بين الخبرة الميدانية والفكر الهندسي الدقيق لنقدّم أنظمة تعمل بكفاءة وأمان لسنوات طويلة.',
    'about.p2': 'يعمل لدينا فريق من المهندسين والفنيين واللحّامين المعتمدين، بإشراف مباشر على كل مرحلة من مراحل المشروع: التصميم التنفيذي، التوريد، التركيب، اختبارات الضغط والتشغيل، ثم التسليم والدعم بعد التنفيذ.',
    'about.badge.v': '+15',
    'about.badge.l': 'سنة من التميّز',
    'about.vision.t': 'رؤيتنا',
    'about.vision.d': 'أن نكون الاسم الأول في مصر للحلول الميكانيكية والمواسير الصناعية، بمعيار جودة وسلامة لا نتنازل عنه.',
    'about.mission.t': 'رسالتنا',
    'about.mission.d': 'تنفيذ مشروعات متكاملة في الموعد المحدد وبأعلى دقة، بما يحمي أرواح العاملين واستثمارات عملائنا.',
    'about.values.t': 'قيمنا',
    'about.values.d': 'السلامة أولًا، الالتزام بالمواعيد، الشفافية مع العميل، والتطوير المستمر لفرق العمل.',
    'about.points': [
      'فريق هندسي وفني متخصص ولحّامون معتمدون',
      'التزام صارم بمعايير الصحة والسلامة والبيئة (HSE)',
      'اختبارات ضغط وتشغيل موثّقة قبل كل تسليم',
      'تنفيذ متكامل: تصميم تنفيذي، توريد، تركيب، تشغيل',
      'التزام بالجداول الزمنية وميزانيات المشروع',
      'دعم فني وصيانة بعد التسليم'
    ],

    'services.eyebrow': 'الخدمات',
    'services.title': 'خدمات هندسية متكاملة تحت سقف واحد',
    'services.lead': 'نغطي دورة المشروع بالكامل — من التصميم التنفيذي وحتى التشغيل — في أنظمة المواسير والأعمال الميكانيكية الصناعية.',
    'services.list': [
      { icon: 'fire', t: 'أنظمة مكافحة الحريق', d: 'شبكات رشاشات وصناديق حريق وغرف طلمبات ولوحات تحكم، وفق الأكواد والمعايير المعتمدة.' },
      { icon: 'steel', t: 'مواسير الاستانلس ستيل', d: 'لحام TIG وتشطيب صحي لخطوط الأدوية والأغذية والمياه النقية ومناطق الإنتاج النظيفة.' },
      { icon: 'steam', t: 'شبكات البخار والمكثفات', d: 'خطوط توزيع البخار عالي الضغط مع العزل الحراري والمصائد والتجهيزات المساندة.' },
      { icon: 'gas', t: 'شبكات الغاز', d: 'تنفيذ شبكات الغاز الطبيعي والغازات الصناعية مع اختبارات الضغط والتسريب.' },
      { icon: 'pump', t: 'محطات الطلمبات والمياه المثلجة', d: 'تركيب وتشغيل محطات الضخ والشيلرات وشبكات المياه المثلجة والتبريد.' },
      { icon: 'line', t: 'خطوط الإنتاج الصناعية', d: 'توصيل الماكينات وخطوط العمليات (Process Piping) والهياكل المعدنية المساندة.' }
    ],
    'projects.eyebrow': 'أعمالنا',
    'projects.title': 'مشروعات منفّذة بأيدي مهندسينا',
    'projects.lead': 'نماذج من مشروعاتنا الصناعية. اضغط على أي مشروع لعرض التفاصيل والصور.',
    'projects.view': 'تفاصيل المشروع',

    'sectors.eyebrow': 'القطاعات',
    'sectors.title': 'نخدم أهم القطاعات الصناعية في مصر',
    'sectors.lead': 'خبرتنا المتراكمة تمنحنا فهمًا دقيقًا لاحتياجات كل صناعة واشتراطاتها الفنية.',
    'sectors.list': [
      { icon: 'flask', t: 'الأدوية والأغذية', d: 'غرف نظيفة وخطوط استانلس ستيل بمواصفات صحية عالية.' },
      { icon: 'oil', t: 'البترول والغاز والبتروكيماويات', d: 'شبكات عالية الضغط وأنظمة حماية من الحريق للمواقع الحرجة.' },
      { icon: 'factory', t: 'المصانع والصناعات التحويلية', d: 'خطوط إنتاج وخدمات مساندة من بخار وهواء مضغوط ومياه.' },
      { icon: 'bolt', t: 'الطاقة والمرافق', d: 'محطات ضخ وتبريد وأنظمة مياه لمحطات الكهرباء والمرافق.' },
      { icon: 'building', t: 'المباني التجارية والمشروعات العقارية', d: 'مكافحة حريق ومياه مثلجة وشبكات ميكانيكية للأبراج والمولات.' },
      { icon: 'box', t: 'المخازن والخدمات اللوجستية', d: 'شبكات رشاشات للمخازن الكبيرة ومراكز التوزيع.' }
    ],

    'partners.eyebrow': 'الشركاء',
    'partners.title': 'أكبر الشركات العقارية والسياحية في مصر',
    'partners.lead': 'اخترنا شركاء عمل من كبرى شركات التطوير العقاري والسياحي في مصر، ونفذنا لهم مشروعات مكافحة الحريق والأعمال الميكانيكية بثقة تامة.',
    'partners.list': [
      { logo: 'noor-tmg.png', t: 'نور – مجموعة طلعت مصطفى' },
      { logo: 'palm-hills.svg', t: 'بالم هيلز للتعمير' },
      { logo: 'sodic.svg', t: 'SODIC' },
      { logo: 'hyde-park.png', t: 'هايد بارك ديفلوبمنتس' },
      { logo: 'mountain-view.png', t: 'ماونتن فيو' },
      { logo: 'ora.png', t: 'Ora Developers' },
      { logo: 'orascom-dh.png', t: 'أوراسكوم للتطوير' },
      { logo: 'hap.svg', t: 'حسن علام العقارية' },
      { logo: 'madinet-masr.png', t: 'مدينة مصر' },
      { logo: 'al-marasem.png', t: 'المراسم الدولية للتعمير' },
      { logo: 'emaar-misr.svg', t: 'إعمار مصر' },
      { logo: 'pyramisa.png', t: 'بيراميزا للفنادق والمنتجعات' }
    ],

    'contact.eyebrow': 'تواصل معنا',
    'contact.title': 'لديك مشروع؟ فريقنا الهندسي جاهز للرد عليك',
    'contact.lead': 'أرسل تفاصيل مشروعك وسيتواصل معك مهندس مختص لتقديم المعاينة وعرض السعر.',
    'contact.phone': 'اتصل بنا',
    'contact.email': 'البريد الإلكتروني',
    'contact.whatsapp': 'واتساب',
    'contact.whatsapp.v': 'راسلنا مباشرة',
    'contact.area': 'نطاق العمل',
    'contact.area.v': 'جميع أنحاء جمهورية مصر العربية',
    'form.name': 'الاسم',
    'form.phone': 'رقم الهاتف',
    'form.email': 'البريد الإلكتروني',
    'form.service': 'نوع الخدمة',
    'form.service.ph': 'اختر الخدمة المطلوبة',
    'form.message': 'تفاصيل المشروع',
    'form.send': 'إرسال الطلب',
    'form.note': 'سيتم فتح تطبيق البريد لديك لإرسال الرسالة.',
    'form.subject': 'طلب عرض سعر',

    'footer.about': 'حلول متكاملة للمواسير والأعمال الميكانيكية الصناعية في جميع أنحاء مصر.',
    'footer.links': 'روابط سريعة',
    'footer.contact': 'بيانات التواصل',
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.top': 'العودة للأعلى',

    'proj.back': 'العودة إلى المشروعات',
    'proj.overview': 'نظرة عامة على المشروع',
    'proj.scope': 'نطاق الأعمال',
    'proj.specs': 'المواصفات الفنية',
    'proj.gallery': 'صور المشروع',
    'proj.info': 'بيانات المشروع',
    'proj.sector': 'القطاع',
    'proj.location': 'الموقع',
    'proj.year': 'سنة التنفيذ',
    'proj.duration': 'مدة التنفيذ',
    'proj.status': 'الحالة',
    'proj.status.v': 'تم التسليم',
    'proj.more': 'مشروعات أخرى',
    'proj.cta.t': 'هل لديك مشروع مشابه؟',
    'proj.cta.d': 'تواصل معنا الآن للحصول على معاينة ودراسة فنية مجانية.',
    'proj.cta.b': 'اطلب عرض سعر',
    'proj.notfound': 'المشروع غير موجود'
  },

  en: {
    'meta.title': 'El-Gebaly Engineering Development | Integrated Piping & Industrial Mechanical Solutions',
    'meta.desc': 'El-Gebaly Engineering Development delivers fire fighting, steam, gas and stainless steel piping networks and industrial mechanical works for projects across Egypt.',

    'brand.name': 'El-Gebaly Engineering',
    'brand.sub': 'ENGINEERING DEVELOPMENT',

    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.sectors': 'Sectors',
    'nav.partners': 'Partners',
    'nav.contact': 'Contact',
    'lang.switch': 'العربية',
    'lang.aria': 'التبديل إلى اللغة العربية',
    'nav.menu': 'Menu',

    'hero.eyebrow': 'Specialised industrial mechanical engineering',
    'hero.title': 'El-Gebaly Engineering Development',
    'hero.sub': 'Integrated Piping & Industrial Mechanical Solutions',
    'hero.text': 'We deliver end-to-end engineering solutions for the execution and installation of piping networks and mechanical works for industrial projects across Egypt — built to project requirements and the highest standards of quality, safety and workmanship, from supply and installation through testing, commissioning and handover.',
    'hero.tags': ['Fire Fighting', 'Steam', 'Gas', 'Production Lines', 'Stainless Steel Piping'],
    'hero.cta1': 'Request a Quote',
    'hero.cta2': 'View Our Projects',
    'hero.scroll': 'Discover more',

    'stats.1.v': '15', 'stats.1.l': 'Years of field experience',
    'stats.2.v': '150', 'stats.2.l': 'Industrial projects delivered',
    'stats.3.v': '40', 'stats.3.l': 'Engineers & specialist technicians',
    'stats.4.v': '100', 'stats.4.l': 'Coverage across all of Egypt', 'stats.4.s': '%',

    'about.eyebrow': 'About Us',
    'about.title': 'The engineering partner factories rely on for their most demanding work',
    'about.p1': 'El-Gebaly Engineering Development is an Egyptian company specialised in executing piping networks and mechanical works for industrial and commercial facilities. We combine hands-on field experience with precise engineering to deliver systems that run efficiently and safely for years.',
    'about.p2': 'Our team of engineers, technicians and certified welders supervises every stage of the project — detailed design, procurement, installation, pressure and commissioning tests, followed by handover and after-delivery support.',
    'about.badge.v': '+15',
    'about.badge.l': 'Years of excellence',
    'about.vision.t': 'Our Vision',
    'about.vision.d': 'To be Egypt’s first name in industrial piping and mechanical solutions, with a quality and safety standard we never compromise.',
    'about.mission.t': 'Our Mission',
    'about.mission.d': 'To deliver complete projects on schedule and with the highest precision, protecting both people and our clients’ investments.',
    'about.values.t': 'Our Values',
    'about.values.d': 'Safety first, commitment to deadlines, transparency with clients, and continuous development of our teams.',
    'about.points': [
      'Specialised engineering team and certified welders',
      'Strict adherence to Health, Safety & Environment (HSE)',
      'Documented pressure and commissioning tests before every handover',
      'Turnkey delivery: detailed design, supply, installation, commissioning',
      'Commitment to schedules and project budgets',
      'Technical support and maintenance after handover'
    ],

    'services.eyebrow': 'Services',
    'services.title': 'Integrated engineering services under one roof',
    'services.lead': 'We cover the entire project cycle — from detailed design to commissioning — across piping systems and industrial mechanical works.',
    'services.list': [
      { icon: 'fire', t: 'Fire Fighting Systems', d: 'Sprinkler networks, hose cabinets, pump rooms and control panels, built to approved codes and standards.' },
      { icon: 'steel', t: 'Stainless Steel Piping', d: 'TIG welding and hygienic finishing for pharmaceutical, food and pure-water lines and clean production areas.' },
      { icon: 'steam', t: 'Steam & Condensate Networks', d: 'High-pressure steam distribution with thermal insulation, steam traps and supporting equipment.' },
      { icon: 'gas', t: 'Gas Networks', d: 'Natural gas and industrial gas networks, with full pressure and leak testing.' },
      { icon: 'pump', t: 'Pump Stations & Chilled Water', d: 'Installation and commissioning of pump stations, chillers and chilled-water cooling networks.' },
      { icon: 'line', t: 'Industrial Production Lines', d: 'Machine hook-ups, process piping and supporting steel structures.' }
    ],
    'projects.eyebrow': 'Our Work',
    'projects.title': 'Projects delivered by our engineers',
    'projects.lead': 'A selection of our industrial projects. Click any project for details and photos.',
    'projects.view': 'Project details',

    'sectors.eyebrow': 'Sectors',
    'sectors.title': 'Serving Egypt’s key industrial sectors',
    'sectors.lead': 'Our accumulated experience gives us a precise understanding of each industry and its technical requirements.',
    'sectors.list': [
      { icon: 'flask', t: 'Pharmaceutical & Food', d: 'Clean rooms and stainless steel lines to high hygienic specifications.' },
      { icon: 'oil', t: 'Oil, Gas & Petrochemicals', d: 'High-pressure networks and fire protection for critical sites.' },
      { icon: 'factory', t: 'Factories & Manufacturing', d: 'Production lines and utilities — steam, compressed air and water.' },
      { icon: 'bolt', t: 'Power & Utilities', d: 'Pumping, cooling and water systems for power plants and utilities.' },
      { icon: 'building', t: 'Commercial & Real Estate', d: 'Fire fighting, chilled water and mechanical networks for towers and malls.' },
      { icon: 'box', t: 'Warehousing & Logistics', d: 'Sprinkler networks for large warehouses and distribution centres.' }
    ],

    'partners.eyebrow': 'Partners',
    'partners.title': 'The largest real estate & hospitality names in Egypt',
    'partners.lead': 'We are the trusted delivery partner for fire fighting and mechanical works to some of the largest real estate and hospitality developers in the Egyptian market.',
    'partners.list': [
      { logo: 'noor-tmg.png', t: 'Noor – Talaat Moustafa Group' },
      { logo: 'palm-hills.svg', t: 'Palm Hills Developments' },
      { logo: 'sodic.svg', t: 'SODIC' },
      { logo: 'hyde-park.png', t: 'Hyde Park Developments' },
      { logo: 'mountain-view.png', t: 'Mountain View' },
      { logo: 'ora.png', t: 'Ora Developers' },
      { logo: 'orascom-dh.png', t: 'Orascom Development' },
      { logo: 'hap.svg', t: 'Hassan Allam Properties' },
      { logo: 'madinet-masr.png', t: 'Madinet Masr' },
      { logo: 'al-marasem.png', t: 'Al Marasem International' },
      { logo: 'emaar-misr.svg', t: 'Emaar Misr' },
      { logo: 'pyramisa.png', t: 'Pyramisa Hotels & Resorts' }
    ],

    'contact.eyebrow': 'Contact Us',
    'contact.title': 'Have a project? Our engineering team is ready to respond',
    'contact.lead': 'Send us your project details and a specialist engineer will contact you to arrange a site visit and quotation.',
    'contact.phone': 'Call us',
    'contact.email': 'Email',
    'contact.whatsapp': 'WhatsApp',
    'contact.whatsapp.v': 'Message us directly',
    'contact.area': 'Coverage',
    'contact.area.v': 'All across the Arab Republic of Egypt',
    'form.name': 'Name',
    'form.phone': 'Phone number',
    'form.email': 'Email',
    'form.service': 'Service type',
    'form.service.ph': 'Select the required service',
    'form.message': 'Project details',
    'form.send': 'Send Request',
    'form.note': 'Your email app will open to send the message.',
    'form.subject': 'Quotation request',

    'footer.about': 'Integrated piping and industrial mechanical solutions across Egypt.',
    'footer.links': 'Quick links',
    'footer.contact': 'Contact details',
    'footer.rights': 'All rights reserved',
    'footer.top': 'Back to top',

    'proj.back': 'Back to projects',
    'proj.overview': 'Project overview',
    'proj.scope': 'Scope of work',
    'proj.specs': 'Technical specifications',
    'proj.gallery': 'Project gallery',
    'proj.info': 'Project information',
    'proj.sector': 'Sector',
    'proj.location': 'Location',
    'proj.year': 'Year',
    'proj.duration': 'Duration',
    'proj.status': 'Status',
    'proj.status.v': 'Completed & handed over',
    'proj.more': 'More projects',
    'proj.cta.t': 'Have a similar project?',
    'proj.cta.d': 'Contact us now for a site visit and a free technical study.',
    'proj.cta.b': 'Request a Quote',
    'proj.notfound': 'Project not found'
  }
};

/* ---------------------------------------------------------------------
   Projects. `gallery` = extra photos (file names inside assets/img/).
   When you send more photos, just add them to the project's gallery.
   --------------------------------------------------------------------- */
const PROJECTS = [
  {
    id: 'ministry-fire-fighting',
    image: 'projects/ministry-fire-fighting/hero.jpg',
    gallery: ['projects/ministry-fire-fighting/1.jpg', 'projects/ministry-fire-fighting/2.jpg', 'projects/ministry-fire-fighting/3.jpg', 'projects/ministry-fire-fighting/4.jpg', 'projects/ministry-fire-fighting/5.jpg'],
    year: '',
    ar: {
      category: 'مكافحة الحريق',
      title: 'شبكة مكافحة الحريق – وزارة التجارة والصناعة ووزارة التموين',
      summary: 'تنفيذ شبكة مكافحة الحريق بالكامل داخل مباني الوزارة، بما في ذلك جناح الوزير، بالتعاون مع شركة UNI-TEC.',
      sector: 'مبانٍ حكومية ومؤسسية',
      location: 'مجمع الوزارات، القاهرة',
      duration: '',
      overview: [
        'تم تنفيذ أعمال شبكة مكافحة الحريق بالكامل داخل مباني الوزارة، بما في ذلك جناح الوزير، وذلك من خلال تنفيذ الأعمال من الباطن بالتعاون مع شركة UNI-TEC.',
        'تم تنفيذ أعمال الشبكة وفقًا لأصول التنفيذ الهندسية ومتطلبات المشروع، بما يضمن تغطية كاملة لكل مبنى من مباني المجمع الوزاري وحماية العاملين والمرتادين.'
      ],
      scope: [
        'تنفيذ شبكة مكافحة الحريق بالكامل داخل جميع مباني الوزارة',
        'تغطية جناح الوزير بأنظمة الحماية من الحريق',
        'تركيب صناديق الحريق وشبكات الرشاشات والإنذار وفق المعايير الهندسية',
        'تنفيذ الأعمال بصفة مقاول من الباطن بالتعاون مع شركة UNI-TEC'
      ],
      specs: [
        ['طبيعة العمل', 'مقاول من الباطن'],
        ['الشريك التنفيذي', 'UNI-TEC'],
        ['نطاق التغطية', 'كافة مباني الوزارة وجناح الوزير'],
        ['المعايير', 'أصول التنفيذ الهندسية ومتطلبات المشروع']
      ]
    },
    en: {
      category: 'Fire Fighting',
      title: 'Fire Fighting Network – Ministry of Trade & Industry and Ministry of Supply',
      summary: 'Complete execution of the fire fighting network throughout the ministry facilities, including the Minister’s Wing, in cooperation with UNI-TEC.',
      sector: 'Government & Institutional Buildings',
      location: 'Ministries Complex, Cairo',
      duration: '',
      overview: [
        'Complete execution of the fire fighting network throughout the ministry facilities, including the Minister’s Wing. The works were carried out as a subcontractor in cooperation with UNI-TEC.',
        'The installation and execution of the fire protection network across the buildings followed professional engineering practices and project requirements, protecting staff and visitors across the complex.'
      ],
      scope: [
        'Complete fire fighting network across all ministry buildings',
        'Fire protection coverage for the Minister’s Wing',
        'Installation of hose cabinets, sprinkler networks and alarm devices to engineering standards',
        'Works executed as subcontractor in cooperation with UNI-TEC'
      ],
      specs: [
        ['Role', 'Subcontractor'],
        ['Delivery partner', 'UNI-TEC'],
        ['Coverage', 'All ministry buildings + Minister’s Wing'],
        ['Standards', 'Professional engineering practice & project requirements']
      ]
    }
  },
  {
    id: 'flow-paradise-steam-network',
    image: 'projects/flow-paradise/hero.jpg',
    gallery: ['projects/flow-paradise/1.jpg', 'projects/flow-paradise/2.jpg', 'projects/flow-paradise/3.jpg', 'projects/flow-paradise/4.jpg', 'projects/flow-paradise/5.jpg'],
    year: '',
    ar: {
      category: 'شبكات البخار والمكثفات',
      title: 'فندق Flow Paradise سهل حشيش – أعمال شبكة البخار',
      summary: 'توريد وتركيب شبكة البخار داخل غرفة الغلايات وغرفة المغسلة، بالتعاون مع شركة براميدا للمنتجعات السياحية.',
      sector: 'الفنادق والقطاع السياحي',
      location: 'سهل حشيش، الغردقة',
      duration: '',
      overview: [
        'تم تنفيذ أعمال توريد وتركيب شبكة البخار داخل غرفة الغلايات وغرفة المغسلة بفندق Flow Paradise سهل حشيش – الغردقة.',
        'تم تنفيذ الأعمال بالتعاون مع شركة براميدا للمنتجعات السياحية كمقاول عام، وشملت الأعمال تنفيذ وتركيب شبكة البخار وربطها بالخدمات الخاصة بغرفة الغلايات والمغسلة وفقًا لأصول التنفيذ الهندسية.'
      ],
      scope: [
        'توريد وتركيب شبكة مواسير البخار الرئيسية',
        'ربط الشبكة بغرفة الغلايات (Boiler Room)',
        'تغذية غرفة المغسلة (Laundry) بخطوط البخار والمكثفات',
        'تنفيذ الأعمال بالتعاون مع المقاول العام "براميدا للمنتجعات السياحية"'
      ],
      specs: [
        ['النظام', 'شبكة بخار ومكثفات'],
        ['يخدم', 'غرفة الغلايات وغرفة المغسلة'],
        ['المقاول العام', 'براميدا للمنتجعات السياحية'],
        ['العزل', 'عزل حراري كامل لخطوط التغذية']
      ]
    },
    en: {
      category: 'Steam & Condensate Networks',
      title: 'Flow Paradise Sahl Hasheesh Hotel – Steam Network',
      summary: 'Supply and installation of the steam piping network serving the boiler room and laundry facilities, in cooperation with Pramida for Tourist Resorts.',
      sector: 'Hospitality & Tourism',
      location: 'Sahl Hasheesh, Hurghada',
      duration: '',
      overview: [
        'Supply and installation of the steam piping network serving the boiler room and laundry facilities at Flow Paradise Sahl Hasheesh Hotel, Hurghada.',
        'The works were executed in cooperation with Pramida for Tourist Resorts as general contractor, covering the professional installation and integration of the steam piping system within the hotel’s operational facilities.'
      ],
      scope: [
        'Supply and installation of the main steam piping network',
        'Connection of the network to the boiler room',
        'Feeding the laundry facility with steam and condensate lines',
        'Works executed in cooperation with general contractor Pramida for Tourist Resorts'
      ],
      specs: [
        ['System', 'Steam & condensate network'],
        ['Serves', 'Boiler room and laundry facility'],
        ['General contractor', 'Pramida for Tourist Resorts'],
        ['Insulation', 'Full thermal insulation of feed lines']
      ]
    }
  },
  {
    id: 'owest-fire-fighting',
    image: 'projects/owest/hero.jpg',
    gallery: ['projects/owest/1.jpg', 'projects/owest/2.jpg', 'projects/owest/3.jpg', 'projects/owest/4.jpg', 'projects/owest/5.jpg'],
    year: '',
    ar: {
      category: 'مكافحة الحريق',
      title: 'O West – أعمال شبكة مكافحة الحريق',
      summary: 'تنفيذ شبكة مكافحة الحريق بمستويات الـ Basement وخطوط تغذية صناديق الحريق للبلوكات 4 و6 و8 والمنطقة التجارية.',
      sector: 'التطوير العقاري السكني',
      location: 'O West، السادس من أكتوبر',
      duration: '',
      overview: [
        'تم تنفيذ أعمال شبكة مكافحة الحريق بمشروع O West – السادس من أكتوبر، وتشمل أعمال شبكة الحريق بمستويات الـ Basement، وخطوط التغذية الخاصة بصناديق الحريق، بالإضافة إلى تنفيذ وتركيب صناديق الحريق لخدمة البلوكات 4 و6 و8 والمنطقة التجارية.',
        'تم تنفيذ الأعمال كمقاول عام لصالح شركة Red Sea، بالإضافة إلى تنفيذ أعمال كمقاول عام بالتعاون مع شركة النظم الهندسية، والشركة العربية الدولية، وشركة End Fire.'
      ],
      scope: [
        'تنفيذ شبكة مكافحة الحريق بمستويات الـ Basement',
        'خطوط التغذية الرئيسية لصناديق الحريق',
        'تركيب وتوصيل صناديق الحريق للبلوكات 4 و6 و8',
        'تغطية المنطقة التجارية بالمشروع بأنظمة الحماية من الحريق'
      ],
      specs: [
        ['الدور', 'مقاول عام لصالح Red Sea'],
        ['شركاء التنفيذ', 'النظم الهندسية، الشركة العربية الدولية، End Fire'],
        ['نطاق التغطية', 'البلوكات 4، 6، 8 + المنطقة التجارية'],
        ['المستويات', 'أدوار الـ Basement']
      ]
    },
    en: {
      category: 'Fire Fighting',
      title: 'O West – Fire Fighting Network',
      summary: 'Execution of fire fighting network works at basement level with feed lines to fire hose cabinets serving Blocks 4, 6 and 8 and the commercial area.',
      sector: 'Residential Real Estate',
      location: 'O West, 6th of October City',
      duration: '',
      overview: [
        'Execution of fire fighting network works at O West, 6th of October, including basement-level fire fighting installations, supply lines feeding fire hose cabinets, and installation of fire hose cabinets serving Blocks 4, 6 and 8, as well as the commercial area.',
        'The works were executed as General Contractor for Red Sea, in addition to general contracting works carried out in cooperation with El-Nosourm El-Handaseya, El-Arabia International, and End Fire.'
      ],
      scope: [
        'Fire fighting network installation at basement levels',
        'Main feed lines for fire hose cabinets',
        'Installation and connection of fire hose cabinets for Blocks 4, 6 and 8',
        'Fire protection coverage for the project’s commercial area'
      ],
      specs: [
        ['Role', 'General Contractor for Red Sea'],
        ['Delivery partners', 'El-Nosourm El-Handaseya, El-Arabia International, End Fire'],
        ['Coverage', 'Blocks 4, 6, 8 + commercial area'],
        ['Levels', 'Basement levels']
      ]
    }
  },
  {
    id: 'r5-gardenia-city',
    image: 'projects/r5-gardenia/hero.jpg',
    gallery: ['projects/r5-gardenia/1.jpg', 'projects/r5-gardenia/2.jpg', 'projects/r5-gardenia/3.jpg', 'projects/r5-gardenia/4.jpg'],
    year: '',
    ar: {
      category: 'مكافحة الحريق',
      title: 'جاردينيا سيتي – R5 كلاستر 11 | العاصمة الإدارية الجديدة',
      summary: 'تنفيذ شبكة مكافحة الحريق بالكامل على ثلاثة مستويات Basement، بالتعاون مع شركة أوراسكوم.',
      sector: 'التطوير العقاري السكني',
      location: 'العاصمة الإدارية الجديدة',
      duration: '',
      overview: [
        'مشروع سكني تم تنفيذه بالتعاون مع شركة أوراسكوم من خلال تنفيذ الأعمال من الباطن. شملت نطاقات العمل تنفيذ شبكة مكافحة الحريق بالكامل على ثلاثة مستويات من الـ Basement، بالإضافة إلى تنفيذ خطوط تغذية صناديق الحريق، وغرف المحابس، ومناطق التحكم Control Zones.',
        'تم تنفيذ الأعمال وفقًا لأصول التنفيذ الهندسية، مع الاهتمام بجودة أعمال التركيب والتنسيق بين مكونات نظام مكافحة الحريق والبنية التحتية للمشروع.'
      ],
      scope: [
        'تنفيذ شبكة مكافحة الحريق الكاملة على 3 مستويات Basement',
        'تركيب خطوط تغذية صناديق الحريق',
        'تنفيذ غرف المحابس (Valve Rooms)',
        'تجهيز مناطق التحكم (Control Zones) وتنسيقها مع البنية التحتية للمشروع'
      ],
      specs: [
        ['الدور', 'مقاول من الباطن لصالح أوراسكوم'],
        ['المستويات', '3 أدوار Basement'],
        ['المكونات', 'غرف محابس + مناطق تحكم'],
        ['نوع المشروع', 'سكني']
      ]
    },
    en: {
      category: 'Fire Fighting',
      title: 'Gardenia City – R5 Cluster 11 | New Administrative Capital',
      summary: 'Execution of the complete fire fighting network across three basement levels, in cooperation with Orascom.',
      sector: 'Residential Real Estate',
      location: 'New Administrative Capital',
      duration: '',
      overview: [
        'A residential project executed in cooperation with Orascom as a subcontractor. The scope of work included the execution of the complete fire fighting network across three basement levels, in addition to the installation of fire hose cabinet supply lines, valve rooms, and control zone assemblies.',
        'The works were carried out with a focus on professional installation, proper system coordination, and high-quality execution of the fire protection infrastructure throughout the project.'
      ],
      scope: [
        'Complete fire fighting network across 3 basement levels',
        'Installation of fire hose cabinet supply lines',
        'Execution of valve rooms',
        'Control zone assemblies coordinated with project infrastructure'
      ],
      specs: [
        ['Role', 'Subcontractor for Orascom'],
        ['Levels', '3 basement levels'],
        ['Components', 'Valve rooms + control zones'],
        ['Project type', 'Residential']
      ]
    }
  },
  {
    id: 'v-cloud9-hotel',
    image: 'projects/v-cloud9/hero.jpg',
    gallery: ['projects/v-cloud9/1.jpg', 'projects/v-cloud9/2.jpg'],
    year: '',
    ar: {
      category: 'مكافحة الحريق',
      title: 'V Cloud 9 Hotel – سهل حشيش، الغردقة',
      summary: 'تنفيذ الشبكة الرئيسية لمكافحة الحريق وخطوط التغذية بطول مبنى الفندق (نحو 400 متر)، مع غرف طلمبات الحريق ومناطق التحكم.',
      sector: 'الفنادق والقطاع السياحي',
      location: 'سهل حشيش، الغردقة',
      duration: '',
      overview: [
        'تم تنفيذ أعمال توريد وتركيب شبكة مكافحة الحريق بفندق V Cloud 9 Hotel في سهل حشيش – الغردقة، حيث شمل نطاق الأعمال تنفيذ الشبكة الرئيسية لمكافحة الحريق وخطوط التغذية الممتدة بطول المبنى، بالإضافة إلى تنفيذ الفروع المغذية للغرف والشاليهات وغرف الخدمات.',
        'يتكون الفندق من مبنى طولي يمتد لمسافة تقارب 400 متر، وتخدم الشبكة الرئيسية نقاط مكافحة الحريق من خلال خطوط التغذية الرئيسية الممتدة داخل الممرات، مع تنفيذ توصيلات فرعية لتغذية الغرف والشاليهات وغرف الخدمات على جانبي الممر، بحيث يتم تغذية كل غرفة بنقطتين لمكافحة الحريق.',
        'شملت الأعمال كذلك تنفيذ وتجهيز غرف مضخات الحريق (Fire Pump Rooms) ومناطق التحكم بالشبكة (Control Zones)، إلى جانب تنفيذ شبكة مياه الإطفاء وخطوط تغذية صناديق الحريق، مع مراعاة جودة التركيب ودقة مسارات المواسير والتنسيق الكامل مع الأعمال الكهروميكانيكية والمعمارية بالمشروع.'
      ],
      scope: [
        'الشبكة الرئيسية لمكافحة الحريق وخطوط التغذية بطول المبنى (نحو 400 متر)',
        'توصيلات فرعية لتغذية الغرف والشاليهات وغرف الخدمات (نقطتان لكل غرفة)',
        'تنفيذ غرف مضخات الحريق (Fire Pump Rooms)',
        'تجهيز مناطق التحكم بالشبكة (Control Zones) وشبكة مياه الإطفاء'
      ],
      specs: [
        ['طول المبنى', 'نحو 400 متر'],
        ['التغذية', 'نقطتا حريق لكل غرفة'],
        ['المكونات', 'غرف طلمبات حريق + مناطق تحكم'],
        ['النطاق', 'غرف وشاليهات وغرف خدمات']
      ]
    },
    en: {
      category: 'Fire Fighting',
      title: 'V Cloud 9 Hotel – Sahl Hasheesh, Hurghada',
      summary: 'Execution of the main fire fighting network and feed lines along the ~400m hotel building, with fire pump rooms and control zones.',
      sector: 'Hospitality & Tourism',
      location: 'Sahl Hasheesh, Hurghada',
      duration: '',
      overview: [
        'Supply and installation of the fire fighting network at V Cloud 9 Hotel in Sahl Hasheesh, Hurghada, covering the main fire fighting network and feed lines running the length of the building, plus branch connections feeding the rooms, chalets and service rooms.',
        'The hotel is a linear building roughly 400 metres long. The main network feeds fire points through main lines running along the corridors, with branch connections feeding the rooms, chalets and service rooms on both sides, so that each room is served by two fire points.',
        'The works also included the execution of Fire Pump Rooms and network Control Zones, together with the fire water (shield) network and fire hose cabinet feed lines — with close attention to installation quality, accurate pipe routing, and full coordination with the project’s electromechanical and architectural works.'
      ],
      scope: [
        'Main fire fighting network and feed lines along the ~400m building',
        'Branch connections feeding rooms, chalets and service rooms (two fire points per room)',
        'Execution of Fire Pump Rooms',
        'Network Control Zones and the fire water network'
      ],
      specs: [
        ['Building length', '~400 metres'],
        ['Feed', 'Two fire points per room'],
        ['Components', 'Fire pump rooms + control zones'],
        ['Coverage', 'Rooms, chalets & service rooms']
      ]
    }
  }
];

/* Hero background rotation (image file names) */
const HERO_IMAGES = ['projects/v-cloud9/hero.jpg', 'projects/owest/hero.jpg', 'projects/r5-gardenia/hero.jpg', 'projects/ministry-fire-fighting/hero.jpg'];

/* Inline SVG icons (24x24 stroke icons) */
const ICONS = {
  fire: '<path d="M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5 0 1.5.7 2.5 1.7 3C10.5 8.5 11 5.5 12 3Z"/>',
  steel: '<path d="M3 8h18M3 16h18"/><path d="M3 5v14M21 5v14"/><path d="M8 8v8M16 8v8"/>',
  steam: '<path d="M8 20c-2-1.5-2-3 0-4.5s2-3 0-4.5"/><path d="M13 20c-2-1.5-2-3 0-4.5s2-3 0-4.5"/><path d="M18 20c-2-1.5-2-3 0-4.5s2-3 0-4.5"/><path d="M4 4h16"/>',
  gas: '<path d="M12 3c3 4 6 6 6 10a6 6 0 0 1-12 0c0-4 3-6 6-10Z"/><path d="M12 21v-4"/>',
  pump: '<circle cx="9" cy="14" r="5"/><circle cx="9" cy="14" r="1.5"/><path d="M14 14h6M20 10v8M9 9V5h5"/>',
  line: '<rect x="3" y="14" width="18" height="6" rx="1"/><path d="M6 14V9l4-3v8M14 14v-4l4-2v6"/>',
  flask: '<path d="M9 3h6M10 3v6l-5.5 9.5A1.5 1.5 0 0 0 5.8 21h12.4a1.5 1.5 0 0 0 1.3-2.5L14 9V3"/><path d="M7.5 15h9"/>',
  oil: '<path d="M4 21h16M6 21V9l6-5 6 5v12"/><path d="M10 21v-6h4v6"/><path d="M9 11h6"/>',
  factory: '<path d="M3 21V10l6 3V10l6 3V6h3v15Z"/><path d="M8 17h2M13 17h2"/>',
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>',
  building: '<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/>',
  box: '<path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5v-9Z"/><path d="m3 7.5 9 4.5 9-4.5M12 12v9"/>',
  valve: '<path d="M3 15h18M6 15V9h12v6"/><path d="M12 9V5M9 5h6"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  whatsapp: '<path d="M3 21l1.6-4.7A8.5 8.5 0 1 1 8 19.5L3 21Z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .5c-.8-.4-1.6-1.2-2-2l.5-1-1-2L9 9.5Z"/>',
  pin: '<path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  up: '<path d="M12 19V5M6 11l6-6 6 6"/>',
  eye: '<path d="M1.5 12S5.5 5 12 5s10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12Z"/><circle cx="12" cy="12" r="3"/>',
  shield: '<path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z"/><path d="m9 12 2 2 4-4"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z"/>'
};

function icon(name, cls) {
  return '<svg class="' + (cls || 'ic') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || '') + '</svg>';
}
