import React, { useEffect, useState } from "react";
import { Menu, X, Mail, Globe, Instagram, Sparkles, HeartHandshake, ArrowLeft, Quote, Phone } from "lucide-react";
import profileUrl from "container:///mnt/data/src/assets/317a9493b2ff7f13-______1.jpg";

const NAV = [
  { id: "home", label: "الرئيسية" },
  { id: "about", label: "نبذة" },
  { id: "aman", label: "دار أمان" },
  { id: "contact", label: "تواصل" },
];

const ARTICLES = [
  {
    title: "وجاءته البشرى",
    date: "28-10-2026",
    href: "https://www.annaharkw.com/Article.aspx?id=1057666&date=28102026",
    source: "جريدة النهار الكويتية | وجاءته البشرى",
    productName: "جريدة النهار الكويتية | وجاءته البشرى",
    excerpt: "عن بشائر القرآن، وحسن الظن بالله، وكيف يفتح التصوّر الجميل للحياة بابًا للسكينة والأمل مهما طال الانتظار.",
    modal: "good",
  },
  {
    title: "ألوان الكذب",
    date: "13-09-2026",
    href: "https://www.annaharkw.com/Article.aspx?id=1054296&date=13092026",
    source: "جريدة النهار الكويتية | ألوان الكذب",
    productName: "جريدة النهار الكويتية | ألوان الكذب",
    excerpt: "عن أنواع الكذب ودرجاته، وأشكال التلاعب بالكلمات والحقائق، ولماذا يبدأ صدقنا مع أنفسنا قبل صدقنا مع الآخرين.",
    modal: "lies",
  },
  {
    title: "سر دعاء السكينة",
    date: "30-08-2026",
    href: "https://www.annaharkw.com/annahar/Article.aspx?id=1053230&date=30082026",
    source: "سر دعاء السكينة",
    productName: "سر دعاء السكينة",
    excerpt: "عن دعاء السكينة والتقبّل والشجاعة، وكيف يمنحنا التسليم الهادئ قوةً لنغيّر ما نستطيع، ونطمئنّ لما هو خارج أيدينا.",
    modal: "serenity",
  },
];

const COLORS_OF_LIES_PARAGRAPHS = [
  "نعرف أن للكذب ألواناً.. بلى له ألوان.. لون للحماية.. لون للخلاص.. لون للـ«ترقيع».. لون للتجمّل.. لون للهروب.. لون للاستعطاف.. لون للتبرير.. لون للتلاعب.. لون للمصلحة.. لون للانتقام.. لون لإخفاء النقص.. لون لشهادة الزور.. لون لصناعة صورة براقة.. ولون أخطر من كل ما سبق.. عندما يتحول الكذب من وسيلة يستخدمها الإنسان إلى طريقة يعيش بها.",
  "قال لي أحدهم يشكو منها تلك المخادعة.. كم كانت تكذب.. وكنت أضحك وأعلم أنها متلاعبة.. ومع هذا أتجاهل.. أتغابى.. وأستشعر ضعفها فأعطيها ما تريد..!",
  "توقفت عند هذا.. الكذب المرضي كما وصفه.. الضعف في أوْجَه .. التحايل كما نسميه.. المربوط بالانتهازية والوصولية والاستغلال.. كل هذا من أجل ماذا؟ لفكرة غبية في رؤوسهم أنهم يحصدون بذاك شيئا ما.. «واو» بالنسبة لهم! كيف سيأخذونه بثمن بخس هو كل حيلتهم.. وللأسف أن ما لا يدركه الكاذب أن اكتشاف كذبته ليس دائما لحظة سقوطه أحيانا نكتشفه مبكرا جدا ونتركه يكمل فقط لنرى إلى أين يستطيع أن يصل.",
  "وهنا المفارقة.. يظن أنه أذكى لأنه استطاع أن يأخذ بينما الآخر كان أذكى لأنه عرف وسكت وأعطى عن وعي لا عن غفلة. هناك فرق شاسع بين أن تنجح في خداعي وبين أن أكتشف محاولتك وأقرر ألا أحرجك. وبين أن تصدق أنني صدقتك وبين أنني رأيت في كذبتك ضعفا جعلني أترفّع عن كشفك. ليس كل من سكت مخدوعا وليس كل من أعطى مستغَلا وليس كل من مرّر لك كذبتك لم يرها.. نحن نفعل ما نحن نريد لغاية في نفس يعقوب بما لا يخطر على بالك أنت أيضا.. وكما أسرها يوسف في نفسه ولم يبدها لهم.. نسرها ما استطعنا بنية الإصلاح لا إعانة على التمادي.",
  "نرى ونعي الكذبة منذ أول ارتباكة من التناقض الصغير.. من المبالغة غير الضرورية.. من التفاصيل التي تُضاف بلا سؤال.. ومن تلك المحاولات المستميتة لإقناعك بشيء لم تطلب أصلا إثباته.. وأحيانا من فلتات اللسان.. من ذلك الجزء من الثانية الذي تتغيّر معه ملامح الوجه أو تتسابق فيه الرمشات أو تتبدّل نبرة الصوت فجأة أو تأتي الإجابة أسرع مما ينبغي أو من دفاع لم يتهمه أحد به.",
  "لكننا نفضل أن نتغابى نعم.. والتغابي هنا ليس غباء.. هو مساحة لك لتختار.. إما أن تعود إلى صدقك أو تجني على نفسك أكثر. وأظن أن هذا هو أكثر ما لا يفهمه المتلاعبون.. أنهم يعتقدون أن كل مرة مرّت فيها الحيلة بسلام تُحسب لهم نقطة ذكاء.. ولا يعلمون أنها ربما كانت نقطة تُخصم من رصيدهم في عين من أمامهم. مرة بعد مرة.. حتى يأتي يوم لا يعود فيه هناك شيء يستحق المواجهة. فالكذب يسرق قيمة صاحبه بالتقسيط.. وكثرة التجاوز تُسقط عن المستور نعمة الستر.",
  "وأكثر ألوانه إثارة للشفقة ذلك المرتبط بالمصلحة.. حين يتحول الإنسان إلى صياد فرص.. يختلق قصة هنا.. ويستدر عاطفة هناك.. ويتقمص دور الضحية عند هذا والمحتاج عند ذاك والمحب عند ثالث والمخلص عند رابع.. ليس لأنه كل هؤلاء.. هو يحتاج من كل شخص شيئا مختلفا.. إنه لا يبني علاقات.. يبني منافذ. ينظر إلى البشر كوسائط.. من هذا ماذا آخذ؟ ومن ذاك إلى أين أصل؟ ومن الثالث ماذا سيمنحني؟ وأي نسخة مني يجب أن أُظهرها لكل واحد حتى أحصل على مبتغاي؟ والمؤلم أن صاحبه قد يشعر بالنشوة كلما نجحت إحدى حيله.. حتى يموت قلبه حرفيا.. وكأنه يحقق انتصارا عظيما ويأخذ شيئا بثمن بخس ولا يعرف أنه دفع من كرامته.",
  "وهذه تحديدا عقلية الفقر التي لا علاقة لها بالمال.. أن ترى المكسب في الشيء الذي استطعت أخذه ولا ترى الخسارة في الطريقة التي اضطررت أن تنحدر إليها حتى تأخذه. فالإنسان الممتلئ لا يحتاج أن يتحايل ليُعطى.. لا يستجدي مكانته بقصة ولا يسرق اهتماما بكذبة ولا يصنع لنفسه قيمة وهمية ولا يتلون بحسب ما يريد الحصول عليه. أما الجائع.. فحتى لو امتلأت يداه يبقى ينظر إلى ما في أيدي الآخرين.. ويرضيه أن يتصدقوا عليه.",
  "لذلك فإن الكذب هو إعلان غير مباشر لعجز صاحبه عن الوصول إلى ما يريد بشخصيته الحقيقية.. وكأنه يقول لك دون أن يدري أنا كما أنا لا أعتقد أنني كافٍ للحصول على ما أريد لذلك سأختلق نسخة أخرى مني. والصدق يحتاج شجاعة.. لأنك تظهر به كما أنت وتطلب كما أنت وتتحمل احتمال أن يُقال لك: لا. أما التحايل فيبحث عن طريق خلفي لا يمر بمسؤولية المواجهة. وإلى أي حد اضطر أن يصغر من نفسه حتى يعتقد أن هذه الحيلة الصغيرة كانت طريقه الوحيد ليأخذ شيئا متوقعا لو طلبه بصدق.",
  "المضحك حقا أن بعض الأشياء التي يكذب الناس للحصول عليها كنا سنمنحهم إياها بمحبة لو أنهم طلبوها فقط ولهم فيها استحقاق.. لكنهم اختاروا الحيلة.. فأخذوا الشيء وخسروا مكانتهم. وهذه صفقة لا يعقدها إلا من لا يعرف قيمة الأشياء.. أو يتعمد الإيذاء. وأما أخطر ألوان الكذب هي أن يكذب الإنسان حتى يصدق نفسه.. وذاك موضوع آخر.",
  "وأنا لا أكره كل الكذب.. فكلنا يضطر إليه.. وأضع تحت يضطر عشرة خطوط. لِمَ؟ لأن منه التورية.. ومنه ما يُقال دفعا لضرر.. ومنه ما يحفظ معه ماء الوجه.. ومنه ما نلجأ إليه لأن الحقيقة في لحظة ما قد تكون أقسى من أن تُقال كما هي. ومن يقول إنه لم يكذب في حياته فهو كاذب.. ومن منا المنزّه؟ من من الأمهات لم تدافع عن ابنها بكذبة؟ ومن منا لم يُخفِ حزنا وقال: «أنا بخير» حتى لا يقلق من يحب؟ ومن لم يجامل خاطرا حتى لا يكسره؟ ومن لم يتحايل على سؤال لأنه لا يريد كشف سر ليس من حق سائله معرفته؟ ومن لم يقل لطفل شيئا كاملا رحمةً بعمره الصغير؟ ومن لم يبتلع حقيقة في مجلس لأن قولها سيشعل فتنة لا داعي لها؟ نحن لا نعيش في عالم نستطيع فيه أن نكون كما نود أتقياء أنقياء طوال الوقت. حتى الصمت أحيانا نصف حل والتورية نصف نجاة والمجاملة قد تحمل شيئا من الكذب وإخفاء بعض الحقائق لا يعد خيانة لمن أمامك.",
  "فمشكلتنا لا بالكذب مشكلتنا مع الدافع وراءها. هناك من يكذب ليحمي وهناك من يكذب ليؤذي.. من يكذب ليستُر ومن يكذب ليفضح غيره ويستر نفسه.. من يكذب لأنه خائف ومن يكذب لأنه طامع.. من يكذب مرةً للخلاص من مأزق ومن يصنع المآزق أصلا ثم يبني فوقها أكاذيب أخرى.. ومن يتورّى حتى لا يجرحك ومن يتلاعب حتى يستغلك. وهكذا تختلف ألوان الكذب.. ووحدات قياسها.. لماذا قيلت ومن سيدفع ثمنها؟ وليست سواء كذبة أمّ تحاول حماية صغيرها وكذبة انتهازي يريد الوصول إلى جيبك أو مكانتك أو عاطفتك.. وليست كذبة إنسان أخفى وجعه حتى لا يحمّلك إياه ككذبة شخص أخفى حقيقة لأنه يعلم أنك لو عرفتها لما منحته ما يريد. الأولى قد يكون خلفها خوف أو رحمة أو ضعف إنساني نفهمه.. أما الثانية فخلفها حساب.",
  "وهنا تبدأ مشكلة الكذب حين لا يعود مخرجا بل يصبح مدخلا.. مدخلا إليك.. إلى ثقتك.. إلى شيء يعرف صاحبه يقينا أنه لو جاءك بوجهه الأخير ونيته الحقيقية قد يفوته قد يُحرَم منه. عندها لا نعود أمام شخص اضطر إلى الكذب.. نحن أمام شخص اختار الكذب أداةً للوصول. والفرق بينهما عندي شاسع لأن الأول هرب بالكذبة من موقف أما الثاني فقد جاء بالكذبة إليك قاصدا ليوهمك. وأكثر ما يخيفني فيها ألوان الكذب سوادها.. ذلك اللون الذي يبدو بريئا جدا في بدايته حتى تكتشف أن صاحبه لم يكن يستغفلك ليستدرجك فحسب.. كان يخفي نيّته. فهلّا نتوب؟",
];

const GOOD_NEWS_PARAGRAPHS = [
  "نقف أمام عظمة آيات التبشير في القرآن في لحظة إدراك أن الإنسان رغم كل ما يحدث له يظل يحيا بين الواقع وبين ما ينتظره منه أيضا وهو حسن الظن بمن أمره بين الكاف والنون أن يقلب الموازين لأجله بطرفة عين.. وأن فرج الله حين يحين ولو بعد حين قد يغير معنى الرحلة كلها.",
  "قال تعالى: «فَضَحِكَتْ فَبَشَّرْنَاهَا».. وقال: «وَبَشَّرُوهُ بِغُلَامٍ عَلِيمٍ».. وقال: «يَا زَكَرِيَّا إِنَّا نُبَشِّرُكَ».. وقال: «وَأَبْشِرُوا بِالْجَنَّةِ الَّتِي كُنتُمْ تُوعَدُونَ».. وقال: «وَبَشِّرِ الصَّابِرِينَ».",
  "حتى يعقوب وقد ابيضت عيناه من الحزن جاءه القميص قبل أن يأتيه يوسف. بعض البشائر تصلنا أولا ثم يأتي بعدها تمام الحدث.. واللافت عندي أن البشارة في القرآن كثيرا ما تسبق الشيء.. أي أن الإنسان يُمنح صورة الغد قبل أن يعيشه.. وهنا تحديدا أتساءل: ماذا تفعل الصورة الجميلة في عقل الإنسان قبل أن تصبح واقعا؟",
  "نحن مجبولون على اليسر أكثر مما نظن.. وإن أتعبتنا الحياة لا خيار أمامنا غير توقع اليسر..",
  "يقول الله تعالى: «يُرِيدُ اللَّهُ بِكُمُ الْيُسْرَ وَلَا يُرِيدُ بِكُمُ الْعُسْرَ».. ويقول: «يُرِيدُ اللَّهُ أَن يُخَفِّفَ عَنكُمْ وَخُلِقَ الْإِنسَانُ ضَعِيفًا».. ويقول: «فَإِنَّ مَعَ الْعُسْرِ يُسْرًا.. إِنَّ مَعَ الْعُسْرِ يُسْرًا».",
  "أن يقع عليك شيء قاس أمر وأن تقنع عقلك بعده بأن القادم كله قاس أمر آخر.. وهنا تبدأ مسؤوليتنا عن الصورة التي نسمح لها بالإقامة داخلنا.",
  "أنا أؤمن بأهمية أن يرسم الإنسان في «خياله» وأضع تحتها عشرة خطوط.. ما يحب أن يراه يوما على أرضه.. لأن مجرد «التخيل» يجبر الكون بما فيه من جند خلقوا لخدمتنا على تنفيذ رغباتنا.. والإنسان حين يعيش طويلا داخل صورة ما.. تبدأ تلك الصورة في التأثير في انتباهه ومزاجه واختياراته وطريقة استقباله للفرص.. وكل ذلك مدروس ويقاس ويفَصّل.",
  "العقل والجسد يتأثران بما نستحضره ذهنيا.. ولذلك للإيحاء والتصور الذهني أثر حقيقي في حالتنا النفسية والجسدية.. وحين تكرر على نفسك أنك انتهيت ستبدأ في رؤية العالم من نافذة النهاية وحين تترك في داخلك احتمال النجاة فأنت على الأقل لا تتآكل وكأنك حسمت أمر الهلاك.",
  "التفاؤل كـ(شعور) أو كـ(فكرة) أو كـ(سلوك) لا يُعدّ إنكارا للمشهد القاسي.. التفاؤل أن ترى المشهد كاملا ثم ترفض أن تمنحه سلطة كتابة الفصل الأخير.. ومن هنا أحب أن أبسط فكرة تُعرف باسم (الترانسيرفنغ) للفيزيائي الروسي فاديم زيلاند كأسلوب حياة يمكن أخذ معنى نفسي جميل منه.. وهو ألا تجعل رغبتك تتحول إلى توتر خانق.. وألا تمنح ما تريد «أهمية مفرطة» حتى يصبح خوف فقدانه أكبر من فرحة احتماله.",
  "خطوات التيسير والتصور: تريد الشيء؟ تصوره.. اسع إليه.. افتح له مكانا في حياتك.. ثم لا تخنقه بالخوف ليتيسر لك بأفضل الاحتمالات وأسرعها وأقواها وأسهلها وأكثرها مواءمة لوضعك.",
  "هناك فارق شاسع بين أن تقول «سيكون جميلا لو حدث» وبين أن تقول «إن لم يحدث فسأنتهي».. ففي الأولى أنت تتحرك باتجاه الحياة وتجلب المزيد من الحياة لحياتك.. وفي الثانية أنت تركض هربا من الخوف.. وربما كان بعض التيسير يبدأ لحظة نتوقف فيها عن مقاومة كل شيء.",
  "وهذا يقودني إلى التفكير في تقنية أخرى اشتهرت باسم الهوبونوبونو أو تقنية الغفران.. وهي للمصالحة وإصلاح العلاقات وظهرت منها صيغ مبسطة ارتبطت بعبارات مثل: أنا آسف.. سامحني.. شكرا لك.. أنا أحبك.",
  "وبصرف النظر عن القصص التي ذكرت حول هذه التقنية فإن معناها الإنساني يستحق التأمل.. كم نحمل داخلنا من محاكمات انتهت وقائعها ولم تنته جلساتها؟ حدث ما حدث.. والأمس مهما توقفنا عنده فلن يتغير شيء.. لقد وقع الفقد.. وقعت الخيبة.. وقع الخطأ.. قال الآخر ما قال.. وفعلنا نحن أيضا ما فعلنا.",
  "فماذا بقي بأيدينا؟ بقيت علاقتنا بأنفسنا بعد الحدث.",
  "وهنا يصبح الغفران أحيانا لا لتبرئة من آذانا.. هو تحرير لأنفسنا من استمرار الأذى داخلنا.. والتقبل لا بقبول أن ما وقع كان عادلا أو جميلا.. هو الاعتراف بأن الماضي صار حقيقة لا يمكن تعديلها بينما الحاضر لا يزال مادة قابلة للتشكيل.",
  "رسالة إلى النفس: أنا آسف على كل مرة قسوت عليك فيها.. سامحيني يا نفسي لأنني حملتك ما يفوق طاقتك.. شكرا لأنك بقيت رغم كل شيء.. وأنا أحبك بما يكفي كي لا أجعلك تعيشين الحادثة ذاتها ألف مرة بعد انتهائها.",
  "لعل هذا هو أحد أسرار اليسر.. ألا نحارب ما انتهى وأن نوفر قوتنا لما لا يزال ممكنا وأن نبشر أنفسنا دون أن ندعي معرفة الغيب وأن نحسن الظن دون أن نفاوض الله على صورة واحدة للحياة وأن نتخيل الأجمل ثم نسعى إليه ونترك للقدر مساحة قد يفاجئنا فيها بما لم يخطر لنا أصلا.. فاليسر لا أن تأتينا الأشياء دائما كما نطلبها.. أحيانا يكون اليسر أن تتغير قلوبنا حتى نستطيع استقبال ما جاء.. وأحيانا تأتي البشرى حدثا وأحيانا إنسانا ويبدلنا الله خيرا مما فقدنا وبتعويض مضاعف.",
  "وللشاعر شمس الدين معنى بالغ الجمال في هذا المقام أستشهد به وهو يقول في شعره: «بموافقة ذلك الجمال الأسمر استولى جمالك على الدنيا.. نعم.. فبالموافقة والائتلاف يمكن للمرء أن يأخذ العالم بأسره.. أرادت الشمعة أن تكشف أسرار أهل الخلوة وأرباب السر.. فالحمد لله أن فتيلها الذي هو لسانها اشتعل بما يضمره القلب من رغبة.. أرادت الوردة وهي العارفة أن تتباهى بلون الحبيب وعطره.. فغارت منها نسمة الحب فحبست أنفاسها في فمها.. ومن فرط الزهو.. وضع قبعة الفرح مائلة كزهرة التوليب كل من حمل في قلبه وصمة الحب.. ومن هذه النار العظيمة المستترة في صدري.. نار الأسرار والمعرفة الإلهية.. ليست الشمس العظيمة التي أضاءت السماء إلا شرارة واحدة منها..»",
  "ويُردف قائلا في أجمل بيت لفتني جدا: «كنت معتزلا الدنيا كإبرة الفرجار تدور بعيدا.. حتى أخذني الزمان أخيرا إلى المركز.. فصرت كنقطة في قلب الدائرة».",
  "قلت في نفسي يا الله.. وها أنا فعلا بعد كل ما مر بي ما زلت قادرة على استقبال الحب واستقبال الخيرات والمسرات والفيوضات الإلهية بقلب لم يفقد قدرته على الدهشة ولا إيمانه بأن في الغيب ما يستحق الانتظار.",
  "لم تعد الدائرة تدور بي.. أنا المركز وأنا النقطة في قلب الدائرة.. ومن مركزي هذا لا أستجدي الحياة ولا أطاردها بل أفتح لها ذراعي وأمضي إليها خفيفة مما مضى ممتلئة بما سيأتي.",
  "نعم سأبشر نفسي بنفسي وأحسن الظن بما لم أره بعد وأترك للسماء متسعا كي تفاجئني بما هو أجمل من تصوري.",
  "نعم سأنطلق كأعجوبة.. لأن كل ما مسني أعادني إلى مركزي.. أنني نفحة من الرحمن وسأظل روح في هذا الجسد.",
  "لن أصدق إلا أن الله يتولاني برحمته منذ خلقي إلى مماتي.. وإلى يوم أُبعث.. هو أحنّ عليّ من أمي وأبي.. في كل ما قدّره لي وسيقدّره.. وبين الدعاء والإجابة تدبير بأبشر يا عبدي أنا معك أنا أحميك أنا أحاوطك.. فالحمد لله كما هو أهله ومستحقه.. الحمد لله حمد الشاكرين.",
];

const SERENITY_PARAGRAPHS = [
  "كثيرا ما طُرِحَت عليَّ تساؤلات مثل.. ماذا أفعل؟ كيف أواجه الدنيا وهمومها؟ كيف أتعامل مع ضيق الأحوال وتقلبات الأيام والأشخاص الذين يستنزفون أعصابنا دون أن نشعر؟ وكنت أقول في نفسي كل شخص فُصّل ابتلاؤه على قدر تحمله وكل شخص يُمتحن في موضعه الأشد حساسية، وفي الشيء الذي يعني له أكثر وكأن الحياة تعرف تماما من أين تدخل إليه، وأي باب إذا طرقته أعادت ترتيب داخله كله.",
  "ولهذا لا يصح أن نقيس أوجاع الناس بمقاييسنا ولا أن نقول لمن يتألم لو كنت مكانك لفعلت، أو لو كنت أقوى لتجاوزت، فنحن لا نعرف بأي قلب واجه ما واجهه، ولا كم مرة حاول أن يبدو بخير، قبل أن يعترف بأنه لم يعد كذلك.. فياليت قومي يعلمون ما الذي شهدناه ولا نزال نبتسم بروح راضية.. ولذا يكون جوابي ولا يزال يبدأ دائما من هنا.. «واظب على دعاء السكينة».",
  "قد يظنه البعض مجرد دعاء جميل خفيف لكنه في الحقيقة منهاج حياة كامل واختصار لرحلة طويلة من النضج النفسي والروحي.",
  "«اللهم امنحني السكينة لأتقبل الأشياء التي لا أستطيع تغييرها».. من هنا تبدأ الراحة.",
  "إذ ليس كل ما يحدث لنا يحتاج إلى مقاومة، ولا كل باب أُغلق يجب أن نكسره، ولا كل إنسان ابتعد ينبغي أن نُعيده، ولا كل خسارة تستحق أن نهدر أعمارنا في ملاحقتها.",
  "هناك أمور لا يغيّرها إلا الزمن، وأخرى لا يغيّرها إلا الله وثالثة لن تتغير مهما استنزفنا أنفسنا في محاولات لا تنتهي.",
  "والسكينة ليست استسلاما بل هي أن تتوقف عن محاربة ما خرج أصلا عن دائرة سيطرتك.",
  "ثم تأتي الجملة الثانية في هذا الدعاء وهي.. «وامنحني الشجاعة لتغيير الأشياء التي أستطيع تغييرها».. وهنا يقع كثيرون في الخطأ.",
  "فبعض الناس يختبئون خلف الرضا وهم في الحقيقة يخافون المواجهة ولا شيء يتغير.. يرضى بالظلم لأنه لا يجرؤ على المطالبة بحقه.. ويرضى بالفشل لأنه يخشى المحاولة.. ويرضى بعلاقة تؤذيه لأنه يخاف الوحدة.",
  "وهذا لا يعد على الرضا بل على العجز.. فالله لم يطلب منا الاستسلام بل طلب منا السعي والأخذ بالأسباب والعمل ثم التوكل.",
  "أما الجزء الذي أراه أعظم أجزاء هذا الدعاء فهو قوله.. «والحكمة لمعرفة الفرق بينهما».",
  "لأن المشكلة ليست في قلة القوة ولا في قلة الصبر، بل في الخلط بينهما.. فنقاتل معارك خاسرة كان الأولى أن نغادرها وننسحب من معارك كان ينبغي أن نقاتل فيها.. نحاول تغيير أشخاص لا يريدون التغيير، ونغفل عن تغيير أنفسنا.",
  "ونبذل سنوات في طرق أبواب مغلقة، بينما الباب الذي كُتب لنا مفتوح في مكان آخر.",
  "والحكمة لا أن تغيّر كل شيء ولا أن تتقبل كل شيء، بل أن تعرف أين تبذل جهدك وأين تحفظ طاقتك.",
  "ومن أجمل ما تعلمته في الحياة أن السلام الداخلي لا يأتي عندما تصبح حياتك مثالية، بل عندما تعرف حدود مسؤوليتك، فتعمل فيما تستطيع وتسلّم بما لا تستطيع وتترك لله ما لا يعلمه إلا الله.. حينها فقط لن تختفي هموم الدنيا، لكنها لن تستطيع أن تسلب منك سكينتك.",
  "ولعل هذا هو سر هذا الدعاء العظيم.. أنه لا يعدك بحياة بلا ابتلاء وإنما يعدك بقلب يعرف كيف يعبر الابتلاء بسلام.",
  "وقد سمعتها مرارا أن علينا أن نتقبل الحياة بشروطها.. لكنني كنت أتوقف عند هذه العبارة أيضا لأتساءل كيف للحياة أن تسير وفق سنن لا تعبأ بما خططنا له ولا بما تمنيناه ولا بما رأيناه حقا لنا؟ وماذا لو جاءت الحياة بكل علّاتها خارج إطار ما رسمناه لها، وما علاقة ذلك إذاً بمشيئتنا الحرة في الاختيار، إن كان ذلك هو المكتوب في الأقدار؟ حسنا ماذا لو تأخر ما استعجلناه، وضاع ما تعلّقنا به وأُغلقت الأبواب التي لم نتوقع يوما أنها ستغلق، ولكن لربما ستفتح أخرى لم نكن نفكر في طرقها؟",
  "هنا لا يصبح السؤال لماذا حدث هذا إذن؟ بل يصبح السؤال الأهم كيف سأفسر أنا ما يحدث!",
  "لأن الحدث في كثير من الأحيان لا نستطيع تغييره.. أما تفسيرنا له فهو الذي سيحدد ما إذا كنا سنخرج منه كضحية أم متعلمين أم أقوى مما كنا.",
  "ثم يأتي السؤال الذي يليه مباشرة وماذا سأختار بعد ذلك؟ فالاختيار الذي يلي الألم أهم من الألم نفسه.. والقرار الذي يلي الخسارة أهم من الخسارة ذاتها.. وردة فعلنا بعد السقوط هي التي تحدد إن كان السقوط نهاية الطريق أم بداية طريق جديد.",
  "ولهذا أؤمن أن دعاء السكينة لا يعلمنا كيف نهرب من الحياة بل كيف ننظر إليها بالمجمل بكل ما تحمل لنا من مفاجآت.",
  "أن نُسلم بما لا نملك وأن نعمل فيما نملك.. وأن الأحداث لا تصنع الإنسان فيما يصنعه المعنى الذي يمنحه لتلك الأحداث.. وقد يعيش اثنان التجربة نفسها.. أحدهما يخرج منها مكسورا، والآخر يخرج منها حكيما.. ولم يكن الفرق بينهما في الحياة بل في التفسير، ثم في الاختيار نعم.. اللهم امنحني السكينة لأتقبل الأشياء التي لا أستطيع تغييرها، والشجاعة لتغيير الأشياء التي أستطيع تغييرها، والحكمة لمعرفة الفرق بينهما.",
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [selectedSocial, setSelectedSocial] = useState<string | null>(null);
  const [articleOpen, setArticleOpen] = useState(false);
  const [goodNewsOpen, setGoodNewsOpen] = useState(false);
  const [serenityOpen, setSerenityOpen] = useState(false);

  useEffect(() => {
    document.title = "حوراء دشتي | كاتبة واختصاصية اجتماعية ومستشارة تربوية - 7ouradashti.com";
    const description = "حوراء دشتي كاتبة كويتية واختصاصية اجتماعية ومستشارة تربوية ومرشدة نفسية، رئيسة ومؤسسة دار أمان للاستشارات والتدريب، تكتب في جريدة النهار.";
    const upsertMeta = (key: string, value: string, attr: "name" | "property" = "name") => {
      let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };
    upsertMeta("description", description);
    upsertMeta("og:title", document.title, "property");
    upsertMeta("og:description", description, "property");
    upsertMeta("og:type", "website", "property");
    upsertMeta("og:locale", "ar_KW", "property");
    upsertMeta("og:url", "https://7ouradashti.com/", "property");
    upsertMeta("og:site_name", "7ouradashti.com", "property");
    upsertMeta("twitter:card", "summary");
    upsertMeta("twitter:title", document.title);
    upsertMeta("twitter:description", description);
    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://7ouradashti.com/");
    document.documentElement.setAttribute("lang", "ar");

    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "حوراء دشتي",
        alternateName: "7oura_dashti",
        jobTitle: "كاتبة واختصاصية اجتماعية ومستشارة تربوية ومرشدة نفسية",
        url: "https://7ouradashti.com/",
        sameAs: [
          "https://www.instagram.com/7oura_dashti",
          "https://x.com/7oura_dashti",
          "https://www.annaharkw.com/AuthorArticles.aspx?id=5018&date=11012024",
        ],
        worksFor: { "@type": "Organization", name: "دار أمان للاستشارات والتدريب" },
        knowsAbout: ["التنمية الذاتية", "العلاقات الإنسانية", "التأهيل السلوكي", "الدعم النفسي"],
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "7ouradashti.com",
        url: "https://7ouradashti.com/",
        inLanguage: "ar",
        publisher: { "@type": "Person", name: "حوراء دشتي", url: "https://7ouradashti.com/" },
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "دار أمان للاستشارات والتدريب",
        founder: { "@type": "Person", name: "حوراء دشتي", url: "https://7ouradashti.com/" },
      },
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "ألوان الكذب",
        datePublished: "2026-09-13",
        inLanguage: "ar",
        author: { "@type": "Person", name: "حوراء دشتي", url: "https://7ouradashti.com/" },
        publisher: { "@type": "Organization", name: "جريدة النهار" },
        url: "https://www.annaharkw.com/Article.aspx?id=1054296&date=13092026",
      },
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "وجاءته البشرى",
        datePublished: "2026-10-28",
        inLanguage: "ar",
        author: { "@type": "Person", name: "حوراء دشتي", url: "https://7ouradashti.com/" },
        publisher: { "@type": "Organization", name: "جريدة النهار" },
        url: "https://www.annaharkw.com/Article.aspx?id=1057666&date=28102026",
      },
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "سر دعاء السكينة",
        datePublished: "2026-08-30",
        inLanguage: "ar",
        author: { "@type": "Person", name: "حوراء دشتي", url: "https://7ouradashti.com/" },
        publisher: { "@type": "Organization", name: "جريدة النهار" },
        url: "https://www.annaharkw.com/annahar/Article.aspx?id=1053230&date=30082026",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://7ouradashti.com/#home" },
          { "@type": "ListItem", position: 2, name: "نبذة", item: "https://7ouradashti.com/#about" },
          { "@type": "ListItem", position: 3, name: "مقالات", item: "https://7ouradashti.com/#articles" },
          { "@type": "ListItem", position: 4, name: "تواصل", item: "https://7ouradashti.com/#contact" },
        ],
      },
    ];
    schemas.forEach((schema, i) => {
      const id = `seo-jsonld-${i}`;
      let script = document.head.querySelector(`script[data-seo="${id}"]`) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        script.setAttribute("data-seo", id);
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    });
  }, []);

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace("#", "");
      if (h) setActive(h);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    if (!articleOpen && !goodNewsOpen && !serenityOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setArticleOpen(false);
        setGoodNewsOpen(false);
        setSerenityOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [articleOpen, goodNewsOpen, serenityOpen]);

  const openArticleModal = (modal?: string) => {
    if (modal === "good") setGoodNewsOpen(true);
    else if (modal === "serenity") setSerenityOpen(true);
    else setArticleOpen(true);
  };

  const go = (id: string) => {
    setActive(id);
    setMenuOpen(false);
    window.location.hash = id;
    scrollTo(id);
  };

  const socialPill = "inline-flex h-8 items-center gap-1.5 rounded-full border border-[#EDE6D6] bg-[#FAF6F0] px-3 text-[11px] font-bold text-[#2B2B2B] hover:bg-white transition active:scale-[.98] whitespace-nowrap";
  const socialPillActive = "inline-flex h-8 items-center gap-1.5 rounded-full border border-[#2B2B2B] bg-[#2B2B2B] px-3 text-[11px] font-bold text-white transition active:scale-[.98] whitespace-nowrap";

  return (
    <div
      data-safe-area-inset-root
      dir="rtl"
      lang="ar"
      style={{ boxSizing: "border-box", paddingTop: "var(--safe-area-inset-top)", minHeight: "100vh" }}
      className="bg-[#FAF6F0] text-[#2B2B2B] overflow-x-clip"
    >
      <header
        data-safe-area-sticky-top
        style={{ top: "var(--safe-area-inset-top)" }}
        className="sticky z-40 bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[#EDE6D6]"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-[64px] flex items-center justify-between gap-3">
          <button onClick={() => setMenuOpen(true)} aria-label="فتح القائمة" className="w-11 h-11 rounded-full border border-[#EDE6D6] bg-white grid place-items-center hover:bg-[#FAF6F0] transition active:scale-95">
            <Menu size={20} />
          </button>
          <button onClick={() => go("home")} className="font-black tracking-tight text-[22px] sm:text-[25px] text-[#2B2B2B] leading-none" aria-label="العودة إلى الرئيسية" dir="ltr">7ouradashti.com</button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="قائمة الموقع">
          <button aria-label="إغلاق القائمة" onClick={() => setMenuOpen(false)} className="absolute inset-0 bg-[#2B2B2B]/30 backdrop-blur-[2px]" />
          <div className="absolute top-0 right-0 h-full w-[86%] max-w-[360px] bg-[#FAF6F0] shadow-2xl p-6 flex flex-col border-l border-[#EDE6D6]">
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-[#2B2B2B]">7ouradashti.com</span>
              <button onClick={() => setMenuOpen(false)} aria-label="إغلاق" className="w-10 h-10 rounded-full border border-[#EDE6D6] grid place-items-center bg-white"><X size={19} /></button>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <img src={profileUrl} alt="حوراء دشتي" className="w-14 h-14 rounded-full object-cover border border-[#EDE6D6] shadow-sm shrink-0" />
              <div><p className="font-extrabold text-[#2B2B2B]">حوراء دشتي</p><p className="text-[12px] text-[#6E6A61] leading-5">كاتبة واختصاصية اجتماعية<br />ومستشارة تربوية</p></div>
            </div>
            <nav className="mt-8 space-y-1">
              {NAV.map((item, i) => (
                <button key={item.id} onClick={() => go(item.id)} className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-right font-bold ${active === item.id ? "bg-white border border-[#EDE6D6]" : "hover:bg-white border border-transparent hover:border-[#EDE6D6]"}`}>
                  <span>{item.label}</span><span className="text-[12px] text-[#6E6A61]">0{i + 1} ←</span>
                </button>
              ))}
            </nav>
            <div className="mt-auto rounded-2xl bg-white border border-[#EDE6D6] p-4">
              <p className="text-[12px] font-bold text-[#6E6A61]">للتواصل المباشر</p>
              <a href="mailto:info@7ouradashti.com" className="block mt-1 font-bold text-[14px] break-all text-[#2B2B2B]">info@7ouradashti.com</a>
              <p className="text-[12px] text-[#6E6A61] mt-1">Instagram • @7oura_dashti</p>
            </div>
          </div>
        </div>
      )}

      <main className="max-w-6xl mx-auto px-5 sm:px-8 pb-32 sm:pb-28">
        {/* HERO — centered, soft light beige */}
        <section id="home" className="pt-7 sm:pt-10">
          <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] bg-white soft-line card-shadow px-5 py-8 sm:p-10 lg:p-12 text-center">
            <div className="relative mx-auto max-w-[720px]">
              <div className="rise-2 relative mx-auto w-fit">
                <div className="mx-auto w-[188px] h-[188px] sm:w-[220px] sm:h-[220px] rounded-full p-2 bg-white border border-[#EDE6D6] shadow-[0_14px_30px_rgba(43,43,43,.07)]">
                  <img src={profileUrl} alt="حوراء دشتي" className="w-full h-full rounded-full object-cover border border-[#EDE6D6]" />
                </div>
              </div>
              <div className="rise mt-5">
                <h1 className="font-display text-[52px] leading-[1.05] sm:text-[72px] lg:text-[82px] font-bold mt-4 text-[#2B2B2B]">حوراء دشتي</h1>
                <div className="soft-divider mt-4 mx-auto" aria-hidden />
                <p className="text-[17px] sm:text-[20px] leading-8 sm:leading-9 font-semibold text-[#6E6A61] mt-3 mx-auto max-w-[640px]">كاتبة واختصاصية اجتماعية ومستشارة تربوية ومرشدة نفسية</p>
                <p className="text-[12px] text-[#6E6A61] leading-5 mt-3">رئيسة ومؤسسة دار أمان للاستشارات والتدريب</p>
                <p dir="ltr" className="mt-3 text-[15px] sm:text-[16px] font-extrabold tracking-wide text-[#2B2B2B]">www.7ouradashti.com</p>

                {/* Small social pills — AFTER name and subtitle */}
                <div aria-label="حسابات التواصل الاجتماعي" className="mt-4 flex flex-wrap items-center justify-center gap-2">
                  <button type="button" onClick={() => setSelectedSocial("instagram")} aria-pressed={selectedSocial === "instagram"} className={selectedSocial === "instagram" ? socialPillActive : socialPill}>
                    <Instagram size={13} />
                    <span>إنستغرام</span>
                    <span dir="ltr">@7oura_dashti</span>
                  </button>
                  <button type="button" onClick={() => setSelectedSocial("x")} aria-pressed={selectedSocial === "x"} className={selectedSocial === "x" ? socialPillActive : socialPill}>
                    <span className="font-black text-[12px] leading-none">X</span>
                    <span dir="ltr">@7oura_dashti</span>
                  </button>
                  <a href="mailto:info@7ouradashti.com" className={socialPill}>
                    <Mail size={13} />
                    <span>البريد</span>
                    <span dir="ltr">info@7ouradashti.com</span>
                  </a>
                </div>
                {selectedSocial && (
                  <p className="mx-auto mt-3 w-fit rounded-full bg-[#FAF6F0] border border-[#EDE6D6] px-4 py-1.5 text-[12px] font-bold text-[#2B2B2B]" role="status">
                    المعرّف المحدد: <span dir="ltr" className="inline-block">@7oura_dashti</span> — {selectedSocial === "instagram" ? "إنستغرام" : "X (تويتر)"}
                  </p>
                )}

                {/* Navigation pills — AFTER social buttons */}
                <nav aria-label="التنقل الرئيسي" className="mt-5 flex flex-wrap items-center justify-center gap-2">
                  {NAV.map((item) => (
                    <button key={item.id} type="button" onClick={() => go(item.id)} aria-current={active === item.id ? "page" : undefined} className={`rounded-full px-4 py-2 text-[13px] font-bold border transition active:scale-[.98] ${active === item.id ? "bg-[#2B2B2B] text-white border-[#2B2B2B]" : "bg-white border-[#EDE6D6] text-[#2B2B2B] hover:bg-[#FAF6F0]"}`}>{item.label}</button>
                  ))}
                </nav>

                <a href="https://www.annaharkw.com/Article.aspx?id=1057666&date=28102026" target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-2 rounded-full bg-white border border-[#EDE6D6] px-4 py-2.5 text-[13px] font-bold hover:bg-[#FAF6F0] transition">جريدة النهار الكويتية | وجاءته البشرى <span>اقرئي المقال ←</span></a>

                <p className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#FAF6F0] border border-[#EDE6D6] px-3 py-1.5 text-[12px] font-bold"><span className="w-2 h-2 rounded-full bg-emerald-500" /> متاحة للتواصل والتعاون</p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF6F0] border border-[#EDE6D6] px-3 py-1.5 text-[12px] font-bold"><Sparkles size={14} /> الكويت • دار أمان للاستشارات والتدريب</span>
                  <span className="inline-flex rounded-full bg-[#FAF6F0] border border-[#EDE6D6] px-3 py-1.5 text-[12px] font-bold text-[#6E6A61]">مقالات رأي في النهار</span>
                </div>
                <p className="text-[14px] sm:text-[15px] leading-7 text-[#6E6A61] mt-4 mx-auto max-w-[620px]">مسيرة تجمع بين الكلمة والإنسان؛ بين التأليف والتدريب، وبين العمل الميداني والدعم النفسي للأفراد والأسر.</p>
                <div className="flex flex-wrap justify-center gap-3 mt-7">
                  <button onClick={() => go("articles")} className="inline-flex items-center gap-2 rounded-full bg-[#2B2B2B] text-white px-6 py-3 text-[14px] font-bold hover:bg-[#3D3D3D] transition active:scale-[.98]">اقرئي أحدث المقالات <ArrowLeft size={16} /></button>
                  <button onClick={() => go("about")} className="inline-flex items-center gap-2 rounded-full bg-white border border-[#EDE6D6] px-6 py-3 text-[14px] font-bold text-[#2B2B2B] hover:bg-[#FAF6F0] transition">اقرئي نبذتي <ArrowLeft size={16} /></button>
                </div>
                <button type="button" onClick={() => setGoodNewsOpen(true)} className="mt-6 inline-flex items-center gap-2 rounded-full bg-white border border-[#EDE6D6] px-4 py-2.5 text-[13px] font-bold hover:bg-[#FAF6F0] transition">جديد في النهار: وجاءته البشرى <span>اقرئي المقال ←</span></button>
                <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 mt-7 text-[12px] font-bold text-[#6E6A61]">
                  <span>✦ مدربة دولية معتمدة</span><span>✦ لايف كوتش</span><span>✦ مؤسِّسة دار أمان</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2 text-center max-w-[520px] mx-auto">
                <div className="rounded-xl bg-[#FAF6F0] border border-[#EDE6D6] py-2"><p className="font-extrabold text-[#2B2B2B]">النهار</p><p className="text-[10px] text-[#6E6A61]">مقالات رأي</p></div>
                <div className="rounded-xl bg-[#FAF6F0] border border-[#EDE6D6] py-2"><p className="font-extrabold text-[#2B2B2B]">أمان</p><p className="text-[10px] text-[#6E6A61]">مبادرة وطنية</p></div>
                <div className="rounded-xl bg-[#FAF6F0] border border-[#EDE6D6] py-2"><p className="font-extrabold text-[#2B2B2B]">كويت</p><p className="text-[10px] text-[#6E6A61]">وطنٌ وإنسان</p></div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="pt-10 sm:pt-14">
          <div className="flex items-end justify-between gap-4 mb-5">
            <div>
              <p className="text-[12px] font-extrabold tracking-widest text-[#6E6A61]">٠١ — من أنا</p>
              <h2 className="font-display text-[34px] sm:text-[44px] font-bold leading-tight mt-1 text-[#2B2B2B]">نبذة تعريفية</h2>
              <div className="soft-divider mt-3" aria-hidden />
            </div>
            <span className="hidden sm:block text-[12px] text-[#6E6A61]">سيرةٌ تُكتب بالعمل والكلمة معًا</span>
          </div>
          <article className="rounded-[28px] bg-white soft-line card-shadow p-6 sm:p-9 lg:p-11 relative overflow-hidden">
            <Quote className="absolute top-6 left-6 text-[#EDE6D6]" size={72} aria-hidden />
            <div className="relative max-w-[860px]">
              <p className="text-[16px] sm:text-[18px] leading-[2.05] sm:leading-[2.1] font-medium text-[#2B2B2B]">
                حوراء دشتي هي كاتبة واختصاصية اجتماعية ومستشارة تربوية ومرشدة نفسية كويتية، تشغل منصب رئيسة ومؤسسة دار أمان للاستشارات والتدريب، وهي مدربة دولية معتمدة (لايف كوتش) متخصصة في التأهيل السلوكي والدعم النفسي.
              </p>
              <p className="text-[16px] sm:text-[18px] leading-[2.05] sm:leading-[2.1] font-medium mt-5 text-[#2B2B2B]">
                تمتلك مسيرة حافلة في العمل الإنساني والمجتمعي، حيث أطلقت مبادرات وطنية بارزة من أهمها مبادرة «أمان من الإدمان» الموجهة لدعم المتعافين وأسرهم وإعادة دمجهم في المجتمع.
              </p>
              <p className="text-[16px] sm:text-[18px] leading-[2.05] sm:leading-[2.1] font-medium mt-5 text-[#2B2B2B]">
                إلى جانب نشاطها الميداني والتدريبي، تكتب حوراء دشتي مقالات رأي دورية في الصحافة الكويتية تسلط الضوء فيها على القضايا الأسرية، والتربية الحديثة، والوعي النفسي والمجتمعي.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-[#EDE6D6] flex flex-wrap gap-2">
              {["اختصاصية اجتماعية", "مستشارة تربوية", "مرشدة نفسية", "مدربة دولية معتمدة", "كاتبة مقالات رأي", "لايف كوتش"].map(t => (
                <span key={t} className="rounded-full bg-[#FAF6F0] border border-[#EDE6D6] px-3.5 py-2 text-[12px] font-bold text-[#2B2B2B]">{t}</span>
              ))}
            </div>
          </article>
        </section>

        {/* ARTICLES */}
        <section id="articles" className="pt-12 sm:pt-16">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-5">
            <div>
              <p className="text-[12px] font-extrabold tracking-widest text-[#6E6A61]">من جريدة النهار</p>
              <h2 className="font-display text-[34px] sm:text-[44px] font-bold leading-tight mt-1 text-[#2B2B2B]">أحدث مقالات النهار</h2>
              <div className="soft-divider mt-3" aria-hidden />
              <p className="text-[#6E6A61] text-[14px] mt-2">مقالات رأي في النفس والأسرة والمجتمع — من جريدة النهار الكويتية.</p>
            </div>
            <span className="rounded-full bg-white border border-[#EDE6D6] px-4 py-2 text-[12px] font-bold text-[#2B2B2B]">جريدة النهار الكويتية</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {ARTICLES.map((a) => (
              <article key={a.title} className="rounded-[26px] bg-white soft-line card-shadow overflow-hidden flex flex-col p-6 sm:p-7 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex rounded-full bg-[#FAF6F0] border border-[#EDE6D6] px-3 py-1.5 text-[11px] font-extrabold text-[#2B2B2B]">جريدة النهار</span>
                  <time className="text-[12px] font-bold text-[#6E6A61]">{a.date}</time>
                </div>
                <h3 className="font-display text-[26px] sm:text-[28px] font-bold leading-[1.35] mt-4 text-[#2B2B2B]">
                  <button type="button" onClick={() => openArticleModal(a.modal)} className="hover:underline text-right">{a.title}</button>
                </h3>
                <a href={a.href} target="_blank" rel="noopener" className="block text-[12px] font-bold text-[#2B2B2B] mt-2 hover:underline">{a.productName}</a>
                <p className="text-[14px] leading-7 text-[#6E6A61] mt-3 flex-1">{a.excerpt}</p>
                <div className="mt-5 pt-4 border-t border-dashed border-[#EDE6D6] flex flex-wrap items-center gap-3">
                  <button type="button" onClick={() => openArticleModal(a.modal)} className="inline-flex items-center gap-2 text-[13px] font-bold text-[#2B2B2B] hover:underline">اقرئي المقال داخل الموقع <span aria-hidden>←</span></button>
                  <a href={a.href} target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-[13px] font-bold text-[#6E6A61] hover:text-[#2B2B2B]">المصدر في النهار <span aria-hidden>←</span></a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 rounded-[24px] bg-white soft-line card-shadow p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="font-extrabold text-[#2B2B2B]">تابعي كل ما تكتبه حوراء دشتي</p>
              <a href="https://www.annaharkw.com/AuthorArticles.aspx?id=5018&date=11012024" target="_blank" rel="noopener" className="block text-[13px] font-bold text-[#2B2B2B] leading-6 mt-0.5 hover:underline">جريدة النهار :: :: مقالات أخرى للكاتب أ. حوراء دشتي</a>
            </div>
            <a href="https://www.annaharkw.com/AuthorArticles.aspx?id=5018&date=11012024" target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2B2B2B] text-white px-6 py-3 text-[13px] font-bold hover:bg-[#3D3D3D] transition active:scale-[.98]">جميع مقالات الكاتبة في النهار <span aria-hidden>←</span></a>
          </div>
        </section>

        {/* DAR AMAN */}
        <section id="aman" className="pt-12 sm:pt-16">
          <div className="rounded-[28px] sm:rounded-[32px] bg-white soft-line card-shadow overflow-hidden grid lg:grid-cols-[1.15fr_.85fr]">
            <div className="p-6 sm:p-9 lg:p-11">
              <p className="text-[12px] font-extrabold tracking-widest text-[#6E6A61]">٠٣ — رسالة ومسؤولية</p>
              <h2 className="font-display text-[32px] sm:text-[42px] font-bold leading-[1.2] mt-2 text-[#2B2B2B]">دار أمان للاستشارات والتدريب</h2>
              <div className="soft-divider mt-3" aria-hidden />
              <p className="mt-4 text-[15px] leading-8 text-[#6E6A61]">مساحة آمنة للإنسان أولًا. هنا يُسمَع الألم دون أحكام، وتُبنى الخطوات الصغيرة نحو التعافي والنمو والتوازن.</p>
              <div className="mt-6 space-y-3">
                {[
                  { t: "مبادرة أمان من الإدمان", d: "لدعم المتعافين وأسرهم وإعادة دمجهم في المجتمع." },
                  { t: "تدريب وتأهيل سلوكي", d: "برامج عملية تعيد بناء العادات والثقة والعلاقات." },
                  { t: "دعم نفسي", d: "مرافقة هادئة ومهنية للأفراد والأسر في مراحل التحول." },
                ].map(item => (
                  <div key={item.t} className="flex gap-3 rounded-2xl bg-[#FAF6F0] border border-[#EDE6D6] p-4">
                    <span className="w-9 h-9 shrink-0 rounded-full bg-white border border-[#EDE6D6] grid place-items-center"><HeartHandshake size={17} className="text-[#2B2B2B]" /></span>
                    <div><p className="font-extrabold text-[14px] text-[#2B2B2B]">{item.t}</p><p className="text-[13px] text-[#6E6A61] leading-6 mt-0.5">{item.d}</p></div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {["دار أمان", "مبادرة أمان", "تدريب وتأهيل"].map(p => <span key={p} className="rounded-full bg-[#FAF6F0] text-[#2B2B2B] border border-[#EDE6D6] px-4 py-2 text-[12px] font-bold">{p}</span>)}
              </div>
            </div>
            <div className="bg-[#FAF6F0] border-t lg:border-t-0 lg:border-r border-[#EDE6D6] p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <p className="font-display text-[26px] leading-[1.6] font-bold text-[#2B2B2B]">«أمان ليست مكانًا،<br />بل شعورٌ يعود إليه<br />الإنسان حين يتعب.»</p>
                <div className="soft-divider mt-4" aria-hidden />
                <p className="text-[12px] text-[#6E6A61] mt-3">— من فلسفة دار أمان</p>
              </div>
              <div className="mt-8 rounded-2xl bg-white border border-[#EDE6D6] p-4">
                <p className="text-[12px] font-bold text-[#6E6A61]">هل تحتاجين دعمًا أو استشارة؟</p>
                <p className="text-[13px] leading-6 text-[#6E6A61] mt-1">راسلينا بثقة، وستجدين من يُصغي إليكِ.</p>
                <button onClick={() => go("contact")} className="mt-3 w-full rounded-full bg-[#2B2B2B] text-white py-3 text-[13px] font-bold hover:bg-[#3D3D3D] transition">تواصلي مع دار أمان</button>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="pt-12 sm:pt-16">
          <p className="text-[12px] font-extrabold tracking-widest text-[#6E6A61]">٠٤ — أهلًا بكِ</p>
          <h2 className="font-display text-[34px] sm:text-[44px] font-bold leading-tight mt-1 text-[#2B2B2B]">تواصل وإعلام</h2>
          <div className="soft-divider mt-3" aria-hidden />
          <p className="text-[#6E6A61] text-[14px] leading-7 mt-2 max-w-[620px]">للتعاون الإعلامي، والدعوات، والاستشارات، والتدريب — يسعدني أن أقرأ رسالتك.</p>

          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            <a href="mailto:info@7ouradashti.com" className="rounded-[24px] bg-white soft-line card-shadow p-6 block hover:-translate-y-1 transition-transform">
              <span className="w-12 h-12 rounded-full bg-[#FAF6F0] border border-[#EDE6D6] grid place-items-center"><Mail size={20} className="text-[#2B2B2B]" /></span>
              <p className="font-bold mt-4 text-[#2B2B2B]">البريد الإلكتروني</p>
              <p className="text-[13px] font-bold mt-1 break-all text-[#2B2B2B]">info@7ouradashti.com</p>
              <p className="text-[12px] text-[#6E6A61] mt-2">راسلينا في أي وقت ←</p>
            </a>
            <button type="button" onClick={() => setSelectedSocial("instagram")} aria-pressed={selectedSocial === "instagram"} className={`rounded-[24px] soft-line card-shadow p-6 block text-right w-full transition-transform hover:-translate-y-1 active:scale-[.98] ${selectedSocial === "instagram" ? "bg-[#2B2B2B] text-white" : "bg-white"}`}>
              <span className="w-12 h-12 rounded-full bg-[#FAF6F0] border border-[#EDE6D6] grid place-items-center"><Instagram size={20} className="text-[#2B2B2B]" /></span>
              <p className="font-bold mt-4">إنستغرام</p>
              <p className="text-[13px] font-bold mt-1" dir="ltr" style={{ textAlign: "right" }}>@7oura_dashti</p>
              <p className={`text-[12px] mt-2 ${selectedSocial === "instagram" ? "text-white/90" : "text-[#6E6A61]"}`}>تابعي يوميات الكتابة والتدريب ←</p>
            </button>
            <a href="https://7ouradashti.com" target="_blank" rel="noopener" className="rounded-[24px] bg-white soft-line card-shadow p-6 block hover:-translate-y-1 transition-transform">
              <span className="w-12 h-12 rounded-full bg-[#FAF6F0] border border-[#EDE6D6] grid place-items-center"><Globe size={20} className="text-[#2B2B2B]" /></span>
              <p className="font-bold mt-4 text-[#2B2B2B]">الموقع الرسمي</p>
              <p className="text-[13px] font-bold mt-1 text-[#2B2B2B]">7ouradashti.com</p>
              <p className="text-[12px] text-[#6E6A61] mt-2">أنتِ هنا الآن ←</p>
            </a>
          </div>

          <div className="mt-5 rounded-[26px] bg-white soft-line card-shadow p-5 sm:p-6">
            <p className="font-extrabold text-[#2B2B2B]">تابعيني على مواقع التواصل</p>
            <p className="text-[13px] text-[#6E6A61] leading-6 mt-1">اضغطي على أي زر لعرض المعرّف — المعرفات مكتوبة هنا فقط، من دون روابط خارجية.</p>
            <div className="grid sm:grid-cols-2 gap-3 mt-4">
              <button type="button" onClick={() => setSelectedSocial("instagram")} aria-pressed={selectedSocial === "instagram"} className={`flex items-center justify-between gap-3 rounded-full px-5 py-4 text-right font-bold transition active:scale-[.98] border ${selectedSocial === "instagram" ? "bg-[#2B2B2B] text-white border-[#2B2B2B]" : "bg-white border-[#EDE6D6] hover:bg-[#FAF6F0]"}`}>
                <span className="flex items-center gap-3"><span className="w-11 h-11 rounded-full grid place-items-center shrink-0 bg-[#FAF6F0] border border-[#EDE6D6]"><Instagram size={20} className="text-[#2B2B2B]" /></span><span>إنستغرام @7oura_dashti</span></span>
                <span aria-hidden className="text-[18px]">←</span>
              </button>
              <button type="button" onClick={() => setSelectedSocial("x")} aria-pressed={selectedSocial === "x"} className={`flex items-center justify-between gap-3 rounded-full px-5 py-4 text-right font-bold transition active:scale-[.98] border ${selectedSocial === "x" ? "bg-[#2B2B2B] text-white border-[#2B2B2B]" : "bg-white border-[#EDE6D6] hover:bg-[#FAF6F0]"}`}>
                <span className="flex items-center gap-3"><span className="w-11 h-11 rounded-full grid place-items-center shrink-0 font-black text-[20px] bg-[#FAF6F0] border border-[#EDE6D6]">X</span><span>X (تويتر) @7oura_dashti</span></span>
                <span aria-hidden className="text-[18px]">←</span>
              </button>
            </div>
            {selectedSocial && (
              <p className="mt-4 rounded-2xl bg-[#FAF6F0] border border-[#EDE6D6] px-4 py-3 text-[14px] font-bold text-[#2B2B2B]" role="status">
                المعرّف المحدد: <span dir="ltr" className="inline-block">@7oura_dashti</span> — {selectedSocial === "instagram" ? "إنستغرام" : "X (تويتر)"}
              </p>
            )}
          </div>

          <div className="mt-5 rounded-[24px] bg-white soft-line card-shadow p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-full bg-[#FAF6F0] border border-[#EDE6D6] grid place-items-center shrink-0"><Phone size={18} className="text-[#2B2B2B]" /></span>
              <div><p className="font-extrabold text-[#2B2B2B]">للاستفسارات الإعلامية</p><p className="text-[13px] text-[#6E6A61]">يُفضَّل التواصل عبر البريد الإلكتروني لضمان وصول رسالتك.</p></div>
            </div>
            <a href="mailto:info@7ouradashti.com" className="rounded-full bg-[#2B2B2B] text-white px-6 py-3 text-[13px] font-bold text-center hover:bg-[#3D3D3D] transition">أرسلي رسالة الآن</a>
          </div>
        </section>

        <footer className="mt-12 text-center">
          <div className="h-px bg-[#EDE6D6] mb-6" />
          <p className="font-display text-[22px] font-bold text-[#2B2B2B]">حوراء دشتي</p>
          <p className="text-[12px] text-[#6E6A61] mt-1">كاتبة • اختصاصية اجتماعية • مستشارة تربوية • مرشدة نفسية</p>
          <p className="text-[13px] font-bold text-[#2B2B2B] mt-4 text-center"><span dir="ltr">www.7ouradashti.com</span> <span dir="rtl">- جميع الحقوق محفوظة © 2026</span></p>
        </footer>
      </main>

      {articleOpen && (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="colors-of-lies-title">
          <button aria-label="إغلاق المقال" onClick={() => setArticleOpen(false)} className="absolute inset-0 bg-[#2B2B2B]/40 backdrop-blur-[2px]" />
          <div dir="rtl" lang="ar" className="relative w-full max-w-3xl max-h-[92vh] sm:max-h-[88vh] bg-white rounded-t-[28px] sm:rounded-[28px] shadow-2xl overflow-hidden flex flex-col border border-[#EDE6D6]">
            <div className="shrink-0 border-b border-[#EDE6D6] px-5 sm:px-8 pt-5 pb-4 sm:pt-6 sm:pb-5 bg-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[12px] font-extrabold tracking-widest text-[#6E6A61]">جريدة النهار — مقالات رأي</p>
                  <h2 id="colors-of-lies-title" className="font-display text-[34px] sm:text-[42px] font-bold leading-tight mt-1 text-[#2B2B2B]">ألوان الكذب</h2>
                  <div className="soft-divider mt-3" aria-hidden />
                </div>
                <button type="button" onClick={() => setArticleOpen(false)} aria-label="إغلاق" className="w-11 h-11 shrink-0 rounded-full border border-[#EDE6D6] bg-white grid place-items-center hover:bg-[#FAF6F0] transition active:scale-95">
                  <X size={20} />
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-3 text-[13px]">
                <span className="font-bold text-[#2B2B2B]">أ. حوراء دشتي</span>
                <span className="text-[#6E6A61]">الأحد 13 سبتمبر 2026</span>
              </div>
              <p className="text-[12px] font-bold text-[#6E6A61] mt-2">جريدة النهار - مقالات أخرى للكاتب</p>
            </div>
            <div className="overflow-y-auto px-5 sm:px-8 py-6 sm:py-7 grow bg-white">
              <div className="space-y-5">
                {COLORS_OF_LIES_PARAGRAPHS.map((p, i) => (
                  <p key={i} className="text-[16px] sm:text-[17px] leading-[2.05] sm:leading-[2.1] font-medium text-[#2B2B2B]">{p}</p>
                ))}
              </div>
              <div className="mt-8 pt-5 border-t border-[#EDE6D6] flex flex-col sm:flex-row gap-3">
                <a href="https://www.annaharkw.com/Article.aspx?id=1054296&date=13092026" target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2B2B2B] text-white px-6 py-3.5 text-[14px] font-bold hover:bg-[#3D3D3D] transition active:scale-[.98]">المصدر الأصلي في النهار <span aria-hidden>←</span></a>
                <button type="button" onClick={() => setArticleOpen(false)} className="inline-flex items-center justify-center rounded-full bg-white border border-[#EDE6D6] px-6 py-3.5 text-[14px] font-bold hover:bg-[#FAF6F0] transition active:scale-[.98]">إغلاق</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {goodNewsOpen && (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="good-news-title">
          <button aria-label="إغلاق المقال" onClick={() => setGoodNewsOpen(false)} className="absolute inset-0 bg-[#2B2B2B]/40 backdrop-blur-[2px]" />
          <div dir="rtl" lang="ar" className="relative w-full max-w-3xl max-h-[92vh] sm:max-h-[88vh] bg-white rounded-t-[28px] sm:rounded-[28px] shadow-2xl overflow-hidden flex flex-col border border-[#EDE6D6]">
            <div className="shrink-0 border-b border-[#EDE6D6] px-5 sm:px-8 pt-5 pb-4 sm:pt-6 sm:pb-5 bg-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[12px] font-extrabold tracking-widest text-[#6E6A61]">جريدة النهار — مقالات رأي</p>
                  <h2 id="good-news-title" className="font-display text-[34px] sm:text-[42px] font-bold leading-tight mt-1 text-[#2B2B2B]">وجاءته البشرى</h2>
                  <div className="soft-divider mt-3" aria-hidden />
                </div>
                <button type="button" onClick={() => setGoodNewsOpen(false)} aria-label="إغلاق" className="w-11 h-11 shrink-0 rounded-full border border-[#EDE6D6] bg-white grid place-items-center hover:bg-[#FAF6F0] transition active:scale-95">
                  <X size={20} />
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-3 text-[13px]">
                <span className="font-bold text-[#2B2B2B]">أ. حوراء دشتي</span>
                <span className="text-[#6E6A61]">الأربعاء 28 أكتوبر 2026</span>
              </div>
              <p className="text-[12px] font-bold text-[#6E6A61] mt-2">جريدة النهار - مقالات أخرى للكاتب</p>
            </div>
            <div className="overflow-y-auto px-5 sm:px-8 py-6 sm:py-7 grow bg-white">
              <div className="space-y-5">
                {GOOD_NEWS_PARAGRAPHS.map((p, i) => (
                  <p key={i} className="text-[16px] sm:text-[17px] leading-[2.05] sm:leading-[2.1] font-medium text-[#2B2B2B]">{p}</p>
                ))}
              </div>
              <div className="mt-8 pt-5 border-t border-[#EDE6D6] flex flex-col sm:flex-row gap-3">
                <a href="https://www.annaharkw.com/Article.aspx?id=1057666&date=28102026" target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2B2B2B] text-white px-6 py-3.5 text-[14px] font-bold hover:bg-[#3D3D3D] transition active:scale-[.98]">المصدر الأصلي في النهار <span aria-hidden>←</span></a>
                <button type="button" onClick={() => setGoodNewsOpen(false)} className="inline-flex items-center justify-center rounded-full bg-white border border-[#EDE6D6] px-6 py-3.5 text-[14px] font-bold hover:bg-[#FAF6F0] transition active:scale-[.98]">إغلاق</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {serenityOpen && (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="serenity-title">
          <button aria-label="إغلاق المقال" onClick={() => setSerenityOpen(false)} className="absolute inset-0 bg-[#2B2B2B]/40 backdrop-blur-[2px]" />
          <div dir="rtl" lang="ar" className="relative w-full max-w-3xl max-h-[92vh] sm:max-h-[88vh] bg-white rounded-t-[28px] sm:rounded-[28px] shadow-2xl overflow-hidden flex flex-col border border-[#EDE6D6]">
            <div className="shrink-0 border-b border-[#EDE6D6] px-5 sm:px-8 pt-5 pb-4 sm:pt-6 sm:pb-5 bg-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[12px] font-extrabold tracking-widest text-[#6E6A61]">جريدة النهار — مقالات رأي</p>
                  <h2 id="serenity-title" className="font-display text-[34px] sm:text-[42px] font-bold leading-tight mt-1 text-[#2B2B2B]">سر دعاء السكينة</h2>
                  <div className="soft-divider mt-3" aria-hidden />
                </div>
                <button type="button" onClick={() => setSerenityOpen(false)} aria-label="إغلاق" className="w-11 h-11 shrink-0 rounded-full border border-[#EDE6D6] bg-white grid place-items-center hover:bg-[#FAF6F0] transition active:scale-95">
                  <X size={20} />
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-3 text-[13px]">
                <span className="font-bold text-[#2B2B2B]">أ. حوراء دشتي</span>
                <span className="text-[#6E6A61]">الأحد 30 أغسطس 2026</span>
              </div>
              <p className="text-[12px] font-bold text-[#6E6A61] mt-2">جريدة النهار - مقالات أخرى للكاتب</p>
            </div>
            <div className="overflow-y-auto px-5 sm:px-8 py-6 sm:py-7 grow bg-white">
              <div className="space-y-5">
                {SERENITY_PARAGRAPHS.map((p, i) => (
                  <p key={i} className="text-[16px] sm:text-[17px] leading-[2.05] sm:leading-[2.1] font-medium text-[#2B2B2B]">{p}</p>
                ))}
              </div>
              <div className="mt-8 pt-5 border-t border-[#EDE6D6] flex flex-col sm:flex-row gap-3">
                <a href="https://www.annaharkw.com/annahar/Article.aspx?id=1053230&date=30082026" target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2B2B2B] text-white px-6 py-3.5 text-[14px] font-bold hover:bg-[#3D3D3D] transition active:scale-[.98]">المصدر الأصلي في النهار <span aria-hidden>←</span></a>
                <button type="button" onClick={() => setSerenityOpen(false)} className="inline-flex items-center justify-center rounded-full bg-white border border-[#EDE6D6] px-6 py-3.5 text-[14px] font-bold hover:bg-[#FAF6F0] transition active:scale-[.98]">إغلاق</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <nav aria-label="التنقل السفلي" className="fixed bottom-0 inset-x-0 z-40 px-4 pb-3 pt-1 bg-gradient-to-t from-[#FAF6F0] via-[#FAF6F0]/95 to-transparent">
        <div className="max-w-[520px] mx-auto bg-white border border-[#EDE6D6] shadow-[0_12px_30px_rgba(43,43,43,.08)] rounded-full p-1.5 grid grid-cols-4">
          {NAV.slice(0, 4).map(item => (
            <button key={item.id} onClick={() => go(item.id)} className={`rounded-full py-2.5 px-1 text-[12px] sm:text-[13px] font-bold transition ${active === item.id ? "bg-[#2B2B2B] text-white" : "text-[#6E6A61] hover:bg-[#FAF6F0]"}`}>{item.label}</button>
          ))}
        </div>
      </nav>
    </div>
  );
}
