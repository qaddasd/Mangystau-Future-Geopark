'use client';

import React from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import Image from 'next/image';

interface Props {
    id: string;
}

export default function LocationDetails({ id }: Props) {
    const { language } = useLanguage();

    // Content definitions based on user texts
    const content = {
        torysh: {
            kz: {
                title: 'Торыш — Шарлар алқабы',
                desc: 'Торыш — Маңғыстау облысында орналасқан табиғи ескерткіш, халық арасында «Шарлар алқабы» деп аталады. Ол Ақтау қаласынан шамамен 120–130 км қашықтықта, Үстірт пен Қаратау жоталарына жақын аймақта орналасқан.',
                sections: [
                    { subtitle: 'Несімен ерекше?', text: 'Торыш даласында диаметрі бірнеше сантиметрден 3–4 метрге дейін жететін жүздеген домалақ тас шарлар шашылып жатыр. Кейбірі жеке тұрса, кейбірі топталып орналасқан.' },
                    { subtitle: 'Қалай пайда болған?', text: 'Ғалымдардың пікірінше, бұл тастар миллиондаған жыл бұрын теңіз түбінде шөгінді жыныстардың қабаттасуы мен минералдардың жиналуы нәтижесінде пайда болған. Уақыт өте келе жел мен су эрозиясы жұмсақ жыныстарды шайып, қатты шар тәрізді түзілістерді сыртқа шығарған.' },
                    { subtitle: 'Қызықты деректер:', text: 'Тастардың жасы шамамен 100–180 миллион жыл деп есептеледі.\n\nКейбір шарлар екіге жарылып, ішкі қабаттарының құрылымын көруге болады.\n\nБұл аймақ туристер мен фотографтар үшін ерекше тартымды орын.' }
                ]
            },
            ru: {
                title: 'Торыш — Долина шаров',
                desc: 'Памятник природы в Мангистауской области, известный в народе как «Долина шаров». Расположен примерно в 120-130 км от города Актау.',
                sections: [
                    { subtitle: 'В чем особенность?', text: 'В степи Торыш разбросаны сотни круглых каменных шаров диаметром от нескольких сантиметров до 3-4 метров.' },
                    { subtitle: 'Как образовались?', text: 'По мнению ученых, эти камни образовались миллионы лет назад на дне моря в результате слоения осадочных пород и скопления минералов.' },
                    { subtitle: 'Интересные факты:', text: 'Возраст камней оценивается примерно в 100-180 миллионов лет.\n\nНекоторые шары расколоты надвое, что позволяет увидеть их внутреннюю структуру.' }
                ]
            },
            en: {
                title: 'Torysh — Valley of Balls',
                desc: 'A natural monument in the Mangystau region, popularly known as the "Valley of Balls". Located about 120-130 km from Aktau.',
                sections: [
                    { subtitle: 'What makes it special?', text: 'Hundreds of round stone balls ranging from a few centimeters to 3-4 meters in diameter are scattered across the Torysh steppe.' },
                    { subtitle: 'How was it formed?', text: 'According to scientists, these stones were formed millions of years ago on the seabed as a result of sedimentary rock layering and mineral accumulation.' }
                ]
            },
            images: [
                'https://images.unsplash.com/photo-1518331647614-7a1f04cd34cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                '/tours/torysh.jpg'
            ]
        },
        sherkala: {
            kz: {
                title: 'Шерқала — Арыстан тау',
                desc: 'Шерқала — Маңғыстау облысындағы ең танымал табиғи-тарихи ескерткіштердің бірі. Ол Ақтау қаласынан шамамен 170 км қашықтықта, Таушық ауылы маңында орналасқан.',
                sections: [
                    { subtitle: 'Несімен ерекше?', text: 'Шерқала алыстан қарағанда киіз үйге немесе алып арыстанға ұқсайды. Атауы да «арыстан қала» деген мағынаны білдіреді. Таудың биіктігі шамамен 300 метрге жуық.' },
                    { subtitle: 'Тарихы мен аңыздары', text: 'Орта ғасырларда бұл жерде бекініс болған деген деректер бар. Таудың ішінде үңгірлер мен көне соқпақ жолдардың іздері кездеседі. Аңыз бойынша, жаугершілік заманда жергілікті халық осы тауды қорғаныс ретінде пайдаланған.' },
                    { subtitle: 'Туристік маңызы', text: 'Шыңына шығуға болады (сақтық қажет). Күн батар сәттегі көрінісі ерекше әдемі. Фототуризм мен экотуризм үшін тартымды орын.' }
                ]
            },
            ru: {
                title: 'Шеркала — Гора-лев',
                desc: 'Шеркала — один из самых известных природно-исторических памятников Мангистауской области.',
                sections: [
                    { subtitle: 'В чем особенность?', text: 'Издали Шеркала напоминает юрту или гигантского льва. Само название означает «львиный город». Высота горы около 300 метров.' },
                    { subtitle: 'История и легенды', text: 'Считается, что в средние века здесь была крепость. Внутри горы есть пещеры и следы древних троп.' }
                ]
            },
            en: {
                title: 'Sherkala — Lion Mountain',
                desc: 'One of the most famous natural and historical monuments of the Mangystau region.',
                sections: [
                    { subtitle: 'What makes it special?', text: 'From afar, Sherkala looks like a yurt or a giant lion. The name itself means "lion city". The mountain is about 300 meters high.' }
                ]
            },
            images: [
                'https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            ]
        },
        tuzbair: {
            kz: {
                title: 'Тұзбайыр — Тұзды сор',
                desc: 'Тұзбайыр — Маңғыстау облысындағы Үстірт қыраты аумағында орналасқан ерекше табиғи нысан. Ол Ақтау қаласынан шамамен 250–300 км қашықтықта жатыр.',
                sections: [
                    { subtitle: 'Ерекшелігі', text: 'Тұзбайыр — кең аумақты тұзды сор алқабы. Ақ түсті тұз жамылған жазық пен биік әктасты жартастар бұл жерге ерекше көрініс береді. Кей жерлерінде тұз қабаты жарылып, геометриялық өрнектер түзеді.' },
                    { subtitle: 'Қалай пайда болған?', text: 'Миллиондаған жыл бұрын бұл аумақ ежелгі теңіздің түбі болған. Су тартылғаннан кейін минералдар шөгіп, тұзды қабаттар қалыптасқан. Жел мен уақыт әсерінен қазіргі ландшафт пайда болған.' },
                    { subtitle: 'Қызықты деректер', text: 'Жаңбырдан кейін сор бетінде айнадай су жиналып, аспанмен астасқан әсем көрініс жасайды. Ақ жартастардың биіктігі 200 метрге дейін жетеді. Фототуризм мен экотуризм үшін өте танымал орын.' }
                ]
            },
            ru: {
                title: 'Тузбаир — Солончак',
                desc: 'Уникальный природный объект, расположенный на плато Устюрт в Мангистауской области.',
                sections: [
                    { subtitle: 'Особенности', text: 'Тузбаир — это огромная территория солончака. Белоснежная соленая равнина и высокие известняковые скалы придают этому месту неповторимый вид.' },
                    { subtitle: 'Интересные факты', text: 'После дождя на поверхности собирается вода, создавая зеркальное отражение неба. Идеальное место для фототуризма.' }
                ]
            },
            en: {
                title: 'Tuzbair — Salt Marsh',
                desc: 'A unique natural site located on the Ustyurt Plateau in the Mangystau region.',
                sections: [
                    { subtitle: 'Features', text: 'Tuzbair is a vast expanse of salt marsh. The snow-white salt plain and high limestone cliffs give this place a unique appearance.' }
                ]
            },
            images: [
                'https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            ]
        },
        ayrakty: {
            kz: {
                title: 'Айрақты — Қамалдар аңғары',
                desc: 'Айрақты — Маңғыстау облысындағы ерекше тау жоталарының бірі. Ол Шоманай аңғары маңында, Ақтау қаласынан шамамен 180–200 км қашықтықта орналасқан.',
                sections: [
                    { subtitle: 'Несімен ерекше?', text: 'Айрақты алыстан қарағанда қамал қабырғалары мен мұнараларға ұқсайды. Сондықтан кейде оны «Қамалдар аңғары» деп те атайды. Жел мен су эрозиясының әсерінен тау жыныстары ғажайып пішіндерге айналған.' },
                    { subtitle: 'Геологиялық ерекшелігі', text: 'Негізінен әктасты және шөгінді жыныстардан құралған. Миллиондаған жылдар бойы табиғи процестердің нәтижесінде қалыптасқан. Биіктігі шамамен 150–200 метрге дейін жетеді.' },
                    { subtitle: 'Туристік маңызы', text: 'Фото және бейнетүсірілім үшін тартымды орын. Табиғи ландшафты өте әсерлі, әсіресе күн батар сәтте. Айрақты — Маңғыстаудың тылсым табиғатын көрсететін көрікті жерлердің бірі.' }
                ]
            },
            ru: {
                title: 'Айракты — Долина замков',
                desc: 'Один из уникальных горных хребтов Мангистауской области.',
                sections: [
                    { subtitle: 'В чем особенность?', text: 'Издали Айракты напоминает крепостные стены и башни, из-за чего его часто называют «Долиной замков». Ветер и водная эрозия превратили скалы в удивительные формы.' }
                ]
            },
            en: {
                title: 'Ayrakty — Valley of Castles',
                desc: 'One of the unique mountain ranges in the Mangystau region.',
                sections: [
                    { subtitle: 'What makes it special?', text: 'From afar, Ayrakty resembles castle walls and towers, which is why it is often called the "Valley of Castles". Wind and water erosion have shaped the rocks into amazing forms.' }
                ]
            },
            images: []
        },
        aktau: {
            kz: {
                title: 'Ақтау қаласы — Каспий жауһары',
                desc: 'Ақтау қаласы — Қазақстандағы теңіз жағасында орналасқан жалғыз қала. Ол Каспий теңізі жағалауында, Маңғыстау облысының орталығы болып табылады.',
                sections: [
                    { subtitle: 'Ерекшелігі', text: 'Ақтау — теңіз порты бар, мұнай-газ өнеркәсібі дамыған заманауи қала. Қаланың басты көрікті орны — Каспий жағалауы. Мұнда серуендеуге арналған жағалау аймағы, демалыс орындары, жағажайлар бар.' },
                    { subtitle: 'Каспий жағалауы туралы', text: 'Таза жағажайлар мен құмды аймақтар бар. Жаз мезгілінде шомылуға қолайлы. Кешкі серуенге арналған әсем жағалау жолы. Теңіз үстіндегі күн батуы ерекше көркем.' },
                    { subtitle: 'Туристік маңызы', text: 'Ақтау жағалауы — демалыс пен туризмнің басты нүктесі. Жаз айларында қалаға Қазақстанның әр өңірінен және шетелден туристер келеді.' }
                ]
            },
            ru: {
                title: 'Город Актау — Жемчужина Каспия',
                desc: 'Единственный город в Казахстане, расположенный на берегу моря.',
                sections: [
                    { subtitle: 'Особенности', text: 'Современный город с морским портом и развитой нефтегазовой промышленностью. Главная достопримечательность — побережье Каспийского моря.' },
                    { subtitle: 'О побережье', text: 'Чистые пляжи и набережные для вечерних прогулок. Закаты над морем здесь особенно живописны.' }
                ]
            },
            en: {
                title: 'Aktau City — Jewel of the Caspian',
                desc: 'The only city in Kazakhstan located on the seashore.',
                sections: [
                    { subtitle: 'Features', text: 'A modern city with a seaport and developed oil and gas industry. The main attraction is the Caspian Sea coast with beautiful beaches and promenades.' }
                ]
            },
            images: [
                '/images/aktau-1.jpg',
                '/images/aktau-2.jpg',
                '/images/aktau-3.jpg'
            ]
        },
        aktolagay: {
            kz: {
                title: 'Ақтолағай үстірті',
                desc: 'Ақтолағай үстірті — Маңғыстау облысындағы Үстірт қыраты аумағында орналасқан ерекше табиғи аймақ. Ол Ақтау қаласынан шамамен 250–300 км қашықтықта орналасқан.',
                sections: [
                    { subtitle: 'Ерекшелігі', text: 'Ақтолағай ақ түсті борлы жартастарымен және кең жазықтарымен танымал. Ландшафты Ай бетін еске түсіретін ерекше көрініс береді. Жартастар мен шоқылардың биіктігі кей жерлерде 100–200 метрге дейін жетеді.' },
                    { subtitle: 'Геологиялық сипаты', text: 'Негізінен борлы және әктасты жыныстардан құралған. Миллиондаған жыл бұрын ежелгі теңіз түбінде қалыптасқан. Қазба қалдықтары мен ежелгі теңіз организмдерінің іздері кездеседі.' },
                    { subtitle: 'Туристік маңызы', text: 'Фото және бейнетүсірілім үшін ерекше орын. Экотуризм бағытында қызығушылық артып келеді. Табиғи тыныштық пен кеңістікті сезінуге мүмкіндік береді.' }
                ]
            },
            ru: {
                title: 'Плато Актолагай',
                desc: 'Уникальная природная зона, расположенная на плато Устюрт.',
                sections: [
                    { subtitle: 'Особенности', text: 'Известно своими белоснежными меловыми скалами и обширными равнинами. Ландшафт напоминает лунную поверхность.' },
                    { subtitle: 'Геология', text: 'Состоит в основном из меловых и известняковых пород, сформировавшихся миллионы лет назад на дне древнего моря.' }
                ]
            },
            en: {
                title: 'Aktolagay Plateau',
                desc: 'A unique natural area located on the Ustyurt Plateau.',
                sections: [
                    { subtitle: 'Features', text: 'Known for its snow-white chalk cliffs and vast plains. The landscape resembles the lunar surface, formed millions of years ago on the bottom of an ancient sea.' }
                ]
            },
            images: [
            ]
        },
        bozjyra: {
            kz: {
                title: 'Бозжыра шатқалы',
                desc: 'Маңғыстаудың визит картасына айналған Бозжыра шатқалы - ұзындығы жүздеген шақырымға созылатын Үстірттің таңғажайып бөлігі.',
                sections: [
                    { subtitle: 'Ерекшелігі', text: 'Шатқалдың басты символы - азу тіске ұқсайтын екі үлкен ақ жартас.' }
                ]
            },
            ru: {
                title: 'Урочище Бозжыра',
                desc: 'Визитная карточка Мангистау, потрясающая часть Устюрта.',
                sections: [
                    { subtitle: 'Особенности', text: 'Главный символ урочища - две гигантские белые скалы, похожие на клыки.' }
                ]
            },
            en: {
                title: 'Bozjyra Tract',
                desc: 'The visiting card of Mangystau, a stunning part of Ustyurt.',
                sections: [
                    { subtitle: 'Features', text: 'The main symbol of the tract are two giant white rocks resembling fangs.' }
                ]
            },
            images: [
                'https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            ]
        },
        caspian: {
            kz: {
                title: 'Каспий теңізі',
                desc: 'Каспий теңізі — Жер шарындағы ең ірі тұйық су қоймасы. Ол Еуропа мен Азияның түйіскен жерінде орналасқан.',
                sections: [
                    { subtitle: 'Ақтау жағалауы', text: 'Ақтау қаласы тікелей Каспий теңізінің жағасында орналасқан, сондықтан туристер үшін ең қолайлы демалыс орындарының бірі.' }
                ]
            },
            ru: {
                title: 'Каспийское море',
                desc: 'Крупнейший на Земле замкнутый водоем, расположенный на стыке Европы и Азии.',
                sections: [
                    { subtitle: 'Побережье Актау', text: 'Город Актау расположен прямо на берегу Каспийского моря, что делает его отличным местом для пляжного отдыха.' }
                ]
            },
            en: {
                title: 'Caspian Sea',
                desc: 'The largest enclosed body of water on Earth, located at the crossroads of Europe and Asia.',
                sections: [
                    { subtitle: 'Aktau Coast', text: 'The city of Aktau is located directly on the coast of the Caspian Sea, making it a great destination for beach holidays.' }
                ]
            },
            images: [
                '/tours/caspian.png'
            ]
        }
    };

    // Resolve ID mapping (if id is dunes or unknown, fallback generically)
    let resolvedId = id;
    if (!content[id as keyof typeof content]) {
        // Attempt fallback
        if (id === 'caspian' || id === 'caspian') resolvedId = 'caspian';
        else resolvedId = 'bozjyra'; // generic fallback
    }

    const data = content[resolvedId as keyof typeof content];
    const localeData = (data as any)[language] || (data as any)['kz'];

    return (
        <div className="w-full flex flex-col gap-8 bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
            <div className="max-w-3xl">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{localeData.title}</h1>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">{localeData.desc}</p>

                <div className="space-y-8">
                    {localeData.sections.map((sec: any, idx: number) => (
                        <div key={idx} className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100/80">
                            <h3 className="text-xl font-semibold text-emerald-800 mb-3">{sec.subtitle}</h3>
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{sec.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {data.images && data.images.length > 0 && (
                <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                        {language === 'kz' ? 'Фотогалерея' : language === 'ru' ? 'Фотогалерея' : 'Photo Gallery'}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {data.images.map((imgUrl, i) => (
                            <div key={i} className="relative w-full h-[250px] rounded-2xl overflow-hidden shadow-sm group">
                                <Image src={imgUrl} alt={`Gallery image ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
