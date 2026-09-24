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
    'partners.title': 'منظومة شركاء نثق بها',
    'partners.lead': 'نعمل مع نخبة من المصنّعين والموردين والاستشاريين لضمان جودة المواد ودقة التنفيذ.',
    'partners.list': [
      { icon: 'pump', t: 'مصنّعو الطلمبات', d: 'طلمبات ومحركات صناعية' },
      { icon: 'valve', t: 'موردو المحابس والوصلات', d: 'محابس وفلانشات وتجهيزات' },
      { icon: 'steel', t: 'مصانع الاستانلس ستيل', d: 'مواسير وأكسسوارات معتمدة' },
      { icon: 'fire', t: 'موردو أنظمة الإطفاء', d: 'رشاشات ولوحات إنذار وتحكم' },
      { icon: 'compass', t: 'المكاتب الاستشارية', d: 'استشاريون ومصممون معتمدون' },
      { icon: 'factory', t: 'المقاولون العموميون', d: 'شراكات تنفيذية للمشروعات الكبرى' }
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
    'partners.title': 'An ecosystem of partners we trust',
    'partners.lead': 'We work with leading manufacturers, suppliers and consultants to ensure material quality and precise execution.',
    'partners.list': [
      { icon: 'pump', t: 'Pump Manufacturers', d: 'Industrial pumps & motors' },
      { icon: 'valve', t: 'Valve & Fitting Suppliers', d: 'Valves, flanges & fittings' },
      { icon: 'steel', t: 'Stainless Steel Mills', d: 'Certified pipes & accessories' },
      { icon: 'fire', t: 'Fire System Vendors', d: 'Sprinklers, alarm & control panels' },
      { icon: 'compass', t: 'Consulting Offices', d: 'Approved consultants & designers' },
      { icon: 'factory', t: 'General Contractors', d: 'Delivery partnerships on major projects' }
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
    id: 'pharma-cleanroom-piping',
    image: 'project-1.jpg',
    gallery: [],
    year: '2025',
    ar: {
      category: 'مواسير الاستانلس ستيل',
      title: 'شبكات استانلس ستيل صحية لغرف الإنتاج النظيفة',
      summary: 'تنفيذ وتركيب خطوط استانلس ستيل صحية لمصنع أدوية، بلحام TIG وتجهيزات قياس وتحكم.',
      sector: 'الأدوية والأغذية',
      location: 'العاشر من رمضان، الشرقية',
      duration: '7 أشهر',
      overview: [
        'نفّذ فريقنا شبكة مواسير استانلس ستيل صحية متكاملة لمصنع أدوية، تخدم منطقة إنتاج نظيفة (Clean Room) وتربط خزانات التحضير بخطوط التعبئة، مع الالتزام بأعلى اشتراطات النظافة والتتبّع.',
        'شملت الأعمال تصنيع المواسير وتركيبها بلحام TIG مدارّ بالغاز الخامل، وتركيب محابس هوائية ومقاييس ضغط وعدادات تدفق، واختبارات الضغط والتنظيف والتخميل قبل التسليم.'
      ],
      scope: [
        'تصنيع وتركيب مواسير استانلس ستيل بتشطيب صحي',
        'لحام TIG مع تنقية داخلية بالغاز الخامل',
        'محابس هوائية وعدادات تدفق ومقاييس ضغط',
        'اختبارات الضغط والتسريب والتنظيف والتخميل',
        'تجهيز الدعامات والتعليق وفق الاشتراطات الصحية'
      ],
      specs: [
        ['نوع المواسير', 'استانلس ستيل صحي'],
        ['طريقة اللحام', 'TIG بتنقية داخلية'],
        ['الوصلات', 'Tri-Clamp وفلانشات'],
        ['الاختبارات', 'ضغط + تخميل']
      ]
    },
    en: {
      category: 'Stainless Steel Piping',
      title: 'Hygienic stainless steel networks for clean production rooms',
      summary: 'Fabrication and installation of hygienic stainless steel lines for a pharmaceutical plant, with TIG welding and instrumentation.',
      sector: 'Pharmaceutical & Food',
      location: '10th of Ramadan City, Sharqia',
      duration: '7 months',
      overview: [
        'Our team executed a complete hygienic stainless steel piping network for a pharmaceutical plant, serving a clean production area and connecting preparation tanks to the filling lines, in line with the strictest cleanliness and traceability requirements.',
        'The works included pipe fabrication and installation using TIG welding with inert-gas purging, pneumatic valves, pressure gauges and flow meters, followed by pressure testing, cleaning and passivation before handover.'
      ],
      scope: [
        'Fabrication and installation of hygienic-finish stainless steel pipework',
        'TIG welding with internal inert-gas purging',
        'Pneumatic valves, flow meters and pressure gauges',
        'Pressure and leak testing, cleaning and passivation',
        'Supports and hangers to hygienic requirements'
      ],
      specs: [
        ['Pipe type', 'Hygienic stainless steel'],
        ['Welding', 'TIG with internal purge'],
        ['Connections', 'Tri-Clamp & flanges'],
        ['Testing', 'Pressure + passivation']
      ]
    }
  },
  {
    id: 'factory-fire-fighting-network',
    image: 'project-2.jpg',
    gallery: [],
    year: '2024',
    ar: {
      category: 'مكافحة الحريق',
      title: 'شبكة رشاشات مكافحة الحريق وغرفة الطلمبات لمنشأة صناعية',
      summary: 'تنفيذ شبكة رشاشات آلية ومحطة ضخ متكاملة لمبنى إنتاجي متعدد الأدوار.',
      sector: 'المصانع والصناعات التحويلية',
      location: 'السادس من أكتوبر، الجيزة',
      duration: '5 أشهر',
      overview: [
        'تنفيذ شبكة مكافحة حريق كاملة لمبنى صناعي متعدد الأدوار، تشمل الرايزرات الرئيسية وشبكات الرشاشات الآلية وغرفة الطلمبات ولوحات التحكم، لتأمين المبنى وحماية العاملين والمعدات.',
        'تم دهان المواسير باللون الأحمر المعتمد وتركيب صمامات التحكم (Alarm Valves) ومقاييس الضغط عند كل رايزر، مع اختبارات هيدروستاتيكية وتشغيل تجريبي للطلمبات قبل التسليم.'
      ],
      scope: [
        'توريد وتركيب مواسير الحريق ورايزرات التغذية',
        'شبكة الرشاشات الآلية بالأدوار',
        'محطة الطلمبات ولوحات التحكم',
        'صمامات الإنذار ومقاييس الضغط عند كل رايزر',
        'الاختبار الهيدروستاتيكي والتشغيل التجريبي'
      ],
      specs: [
        ['نظام الحماية', 'رشاشات آلية (Wet System)'],
        ['المواسير', 'حديد أسود مدهون'],
        ['التغذية', 'طلمبات كهربائية + جوكي'],
        ['الاختبار', 'هيدروستاتيكي']
      ]
    },
    en: {
      category: 'Fire Fighting',
      title: 'Sprinkler network and fire pump room for an industrial facility',
      summary: 'A complete automatic sprinkler network and pump station for a multi-storey production building.',
      sector: 'Factories & Manufacturing',
      location: '6th of October City, Giza',
      duration: '5 months',
      overview: [
        'A complete fire fighting network for a multi-storey industrial building, covering main risers, automatic sprinkler networks, the pump room and control panels — protecting the building, its people and equipment.',
        'Pipework was painted in the approved red finish, with alarm valves and pressure gauges installed at every riser, followed by hydrostatic testing and trial pump runs before handover.'
      ],
      scope: [
        'Supply and installation of fire pipework and feed risers',
        'Automatic sprinkler network on every floor',
        'Pump station and control panels',
        'Alarm valves and pressure gauges at each riser',
        'Hydrostatic testing and trial commissioning'
      ],
      specs: [
        ['Protection system', 'Automatic sprinklers (wet)'],
        ['Pipework', 'Painted black steel'],
        ['Supply', 'Electric + jockey pumps'],
        ['Testing', 'Hydrostatic']
      ]
    }
  },
  {
    id: 'industrial-pump-station',
    image: 'project-3.jpg',
    gallery: [],
    year: '2024',
    ar: {
      category: 'محطات الطلمبات',
      title: 'محطة طلمبات صناعية بخطوط استانلس ستيل معزولة',
      summary: 'تركيب مجموعة طلمبات طرد مركزي وخطوط تغذية استانلس ستيل ضمن محطة خدمات رئيسية.',
      sector: 'المصانع والصناعات التحويلية',
      location: 'برج العرب، الإسكندرية',
      duration: '6 أشهر',
      overview: [
        'تنفيذ محطة طلمبات صناعية رئيسية تضم مجموعة طلمبات طرد مركزي على قواعد خرسانية، مع خطوط شفط وطرد من الاستانلس ستيل المعزول ومحابس التحكم وعدادات الضغط.',
        'راعى التصميم سهولة الصيانة والتشغيل، مع تخصيص مسارات أمان وعلامات أرضية، وتركيب دعامات فولاذية للحد من الاهتزازات ونقل الأحمال بأمان.'
      ],
      scope: [
        'تركيب وتحميل الطلمبات على القواعد الخرسانية',
        'خطوط شفط وطرد استانلس ستيل بعزل حراري',
        'محابس تحكم وعدم رجوع ومقاييس ضغط',
        'دعامات وهياكل فولاذية مضادة للاهتزاز',
        'محاذاة المحركات والتشغيل التجريبي'
      ],
      specs: [
        ['نوع الطلمبات', 'طرد مركزي'],
        ['المواسير', 'استانلس ستيل معزول'],
        ['الوصلات', 'فلانشات'],
        ['التشغيل', 'محاذاة + اختبار أداء']
      ]
    },
    en: {
      category: 'Pump Stations',
      title: 'Industrial pump station with insulated stainless steel lines',
      summary: 'Installation of centrifugal pump sets and stainless steel feed lines in a main utilities station.',
      sector: 'Factories & Manufacturing',
      location: 'Borg El Arab, Alexandria',
      duration: '6 months',
      overview: [
        'A main industrial pump station comprising centrifugal pump sets on concrete plinths, with insulated stainless steel suction and discharge lines, control valves and pressure gauges.',
        'The design prioritised ease of maintenance and operation, with marked safety walkways and floor markings, and steel supports that damp vibration and transfer loads safely.'
      ],
      scope: [
        'Placement and installation of pumps on concrete plinths',
        'Insulated stainless steel suction and discharge lines',
        'Control, check valves and pressure gauges',
        'Anti-vibration steel supports and frames',
        'Motor alignment and trial commissioning'
      ],
      specs: [
        ['Pump type', 'Centrifugal'],
        ['Pipework', 'Insulated stainless steel'],
        ['Connections', 'Flanged'],
        ['Commissioning', 'Alignment + performance test']
      ]
    }
  },
  {
    id: 'chilled-water-plant-room',
    image: 'project-4.jpg',
    gallery: [],
    year: '2023',
    ar: {
      category: 'المياه المثلجة والتبريد',
      title: 'غرفة ميكانيكا المياه المثلجة لمبنى تجاري',
      summary: 'تنفيذ شبكات المياه المثلجة وطلمبات التغذية والتجميع مع لوحات التحكم.',
      sector: 'المباني التجارية والعقارية',
      location: 'القاهرة الجديدة',
      duration: '8 أشهر',
      overview: [
        'تنفيذ غرفة ميكانيكا متكاملة للمياه المثلجة تخدم مبنى تجاريًا كبيرًا، وتشمل مجمّعات التغذية والراجع وطلمبات التدوير ولوحات التحكم والتوصيلات الكهروميكانيكية.',
        'تم عزل كافة الخطوط حراريًا وترقيمها بعلامات اتجاه السريان (Supply / Return / Discharge) لتسهيل التشغيل والصيانة، مع تنفيذ الدعامات المجلفنة ومسارات الحركة الآمنة.'
      ],
      scope: [
        'مجمّعات التغذية والراجع (Headers) بفلانشات عمياء',
        'طلمبات تدوير وخطوط طرد استانلس ستيل',
        'عزل حراري وعلامات اتجاه السريان',
        'دعامات فولاذية مجلفنة',
        'لوحات تحكم وتشغيل تجريبي'
      ],
      specs: [
        ['النظام', 'مياه مثلجة (Chilled Water)'],
        ['العزل', 'عزل حراري بغلاف معدني'],
        ['الدعامات', 'فولاذ مجلفن'],
        ['التحكم', 'لوحات تشغيل محلية']
      ]
    },
    en: {
      category: 'Chilled Water & Cooling',
      title: 'Chilled-water plant room for a commercial building',
      summary: 'Chilled-water networks, circulation pumps and headers with control panels.',
      sector: 'Commercial & Real Estate',
      location: 'New Cairo',
      duration: '8 months',
      overview: [
        'A complete chilled-water plant room serving a large commercial building, including supply and return headers, circulation pumps, control panels and electro-mechanical connections.',
        'All lines were thermally insulated and labelled with flow-direction markers (Supply / Return / Discharge) to ease operation and maintenance, supported on galvanised steel frames with safe walkways.'
      ],
      scope: [
        'Supply and return headers with blind flanges',
        'Circulation pumps and stainless steel discharge lines',
        'Thermal insulation and flow-direction labelling',
        'Galvanised steel supports',
        'Control panels and trial commissioning'
      ],
      specs: [
        ['System', 'Chilled water'],
        ['Insulation', 'Thermal, metal-clad'],
        ['Supports', 'Galvanised steel'],
        ['Control', 'Local operation panels']
      ]
    }
  },
  {
    id: 'fire-pump-room',
    image: 'project-5.jpg',
    gallery: [],
    year: '2025',
    ar: {
      category: 'مكافحة الحريق',
      title: 'غرفة طلمبات الحريق بمحرك ديزل واحتياطي كهربائي',
      summary: 'محطة ضخ حريق متكاملة (كهرباء + ديزل + جوكي) مع لوحات الإنذار والتحكم.',
      sector: 'المخازن والخدمات اللوجستية',
      location: 'العين السخنة، السويس',
      duration: '4 أشهر',
      overview: [
        'تنفيذ غرفة طلمبات حريق متكاملة لمركز لوجستي، تضم طلمبة كهربائية رئيسية وطلمبة ديزل احتياطية وطلمبة جوكي عمودية للحفاظ على ضغط الشبكة، مع لوحات تحكم وإنذار.',
        'صُمّمت المنظومة لتعمل ذاتيًا عند انقطاع التيار الكهربائي، مع خطوط مواسير كبيرة القطر وصمامات بوابة ومقاييس ضغط وتوصيلات مرنة للحد من الاهتزاز.'
      ],
      scope: [
        'طلمبة حريق كهربائية رئيسية',
        'طلمبة حريق ديزل احتياطية',
        'طلمبة جوكي عمودية لتثبيت الضغط',
        'لوحات التحكم والإنذار',
        'مواسير كبيرة القطر وصمامات بوابة ومقاييس ضغط'
      ],
      specs: [
        ['المضخات', 'كهرباء + ديزل + جوكي'],
        ['التحكم', 'لوحات تشغيل أوتوماتيكية'],
        ['الصمامات', 'بوابة بمؤشر'],
        ['الحماية', 'تشغيل عند انقطاع الكهرباء']
      ]
    },
    en: {
      category: 'Fire Fighting',
      title: 'Fire pump room with diesel driver and electric duty pump',
      summary: 'A complete fire pump station (electric + diesel + jockey) with alarm and control panels.',
      sector: 'Warehousing & Logistics',
      location: 'Ain Sokhna, Suez',
      duration: '4 months',
      overview: [
        'A complete fire pump room for a logistics hub, featuring a main electric pump, a standby diesel pump and a vertical jockey pump to maintain network pressure, with control and alarm panels.',
        'The system starts automatically on power failure, with large-diameter pipework, gate valves, pressure gauges and flexible connections to reduce vibration.'
      ],
      scope: [
        'Main electric fire pump',
        'Standby diesel fire pump',
        'Vertical jockey pump for pressure maintenance',
        'Control and alarm panels',
        'Large-diameter pipework, gate valves and gauges'
      ],
      specs: [
        ['Pumps', 'Electric + diesel + jockey'],
        ['Control', 'Automatic operation panels'],
        ['Valves', 'Indicating gate valves'],
        ['Protection', 'Auto-start on power failure']
      ]
    }
  },
  {
    id: 'high-rise-sprinkler-main',
    image: 'project-6.jpg',
    gallery: [],
    year: '2025',
    ar: {
      category: 'مكافحة الحريق',
      title: 'رايزرات الرشاشات الرئيسية ومحطة الحريق لمبنى متعدد الأدوار',
      summary: 'شبكة رشاشات رئيسية وفروع تغذية بأقطار كبيرة مع محطة ضخ ولوحة تحكم مركزية.',
      sector: 'المباني التجارية والعقارية',
      location: 'العاصمة الإدارية الجديدة',
      duration: '9 أشهر',
      overview: [
        'تنفيذ الشبكة الرئيسية للرشاشات (Sprinkler Main) لمبنى إداري متعدد الأدوار، تضم رايزرات رأسية وفروعًا أفقية بأقطار كبيرة، وتغذّيها محطة ضخ حريق ولوحة تحكم مركزية.',
        'تم تركيب مقاييس ضغط على كل رايزر، ووضع ملصقات اتجاه السريان وضغط التشغيل، وتنفيذ تسليك كهربائي منظم للوحة التحكم، مع اختبار الضغط عند 175 PSI قبل التسليم.'
      ],
      scope: [
        'رايزرات رأسية وفروع تغذية أفقية بأقطار كبيرة',
        'شبكة الرشاشات الفرعية بالأدوار',
        'محطة الضخ ولوحة التحكم المركزية',
        'مقاييس الضغط وملصقات اتجاه السريان',
        'اختبار ضغط عند 175 PSI'
      ],
      specs: [
        ['ضغط الاختبار', '175 PSI'],
        ['الشبكة', 'رايزرات وفروع بأقطار كبيرة'],
        ['المضخات', 'طلمبة انشطارية (Split Case)'],
        ['التحكم', 'لوحة تحكم مركزية']
      ]
    },
    en: {
      category: 'Fire Fighting',
      title: 'Main sprinkler risers and fire pump station for a multi-storey building',
      summary: 'Main sprinkler network with large-diameter feeders, a pump station and a central control panel.',
      sector: 'Commercial & Real Estate',
      location: 'New Administrative Capital',
      duration: '9 months',
      overview: [
        'Execution of the main sprinkler network for a multi-storey office building — vertical risers and large-diameter horizontal feeders — supplied by a fire pump station and central control panel.',
        'Pressure gauges were fitted to every riser, flow-direction and operating-pressure labels applied, and the panel wiring neatly organised, with a pressure test at 175 PSI before handover.'
      ],
      scope: [
        'Vertical risers and large-diameter horizontal feeders',
        'Branch sprinkler network on each floor',
        'Pump station and central control panel',
        'Pressure gauges and flow-direction labelling',
        'Pressure test at 175 PSI'
      ],
      specs: [
        ['Test pressure', '175 PSI'],
        ['Network', 'Large-diameter risers & feeders'],
        ['Pumps', 'Split-case pump'],
        ['Control', 'Central control panel']
      ]
    }
  }
];

/* Hero background rotation (image file names) */
const HERO_IMAGES = ['project-5.jpg', 'project-1.jpg', 'project-3.jpg', 'project-2.jpg'];

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
