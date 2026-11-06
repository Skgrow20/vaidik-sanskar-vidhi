// 16 Vedic Sanskars (सोलह / સોળ સંસ્કાર) Trilingual Data

const commonRituals = {
  en: [
    "Ishwar Stuti and Sankalpa (Divine prayer and sacred vow)",
    "Havan with sacred Vedic Mantras",
    "Mental and physical purification",
    "Prarthana and blessings of elders"
  ],
  hi: [
    "ईश्वर स्तुति एवं संकल्प",
    "वैदिक मन्त्रोच्चार के साथ हवन",
    "मानसिक एवं शारीरिक पवित्रता",
    "प्रार्थना एवं बड़ों/गुरुजनों का आशीर्वाद"
  ],
  gu: [
    "ઈશ્વર સ્તુતિ અને સંકલ્પ",
    "વૈદિક મંત્રોચ્ચાર સાથે હવન",
    "માનસિક તેમજ શારીરિક પવિત્રતા",
    "પ્રાર્થના અને વડીલોના આશીર્વાદ"
  ]
};

const sanskarData = [
  {
    id: 1,
    name: {
      en: "Garbhadhana Sanskar",
      hi: "गर्भाधान संस्कार",
      gu: "ગર્ભાધાન સંસ્કાર"
    },
    meaning: {
      en: "Conception Ceremony / Sacred Conception",
      hi: "पवित्र गर्भाधान एवं संतति कामना संस्कार",
      gu: "પવિત્ર ગર્ભાધાન અને શ્રેષ્ઠ સંતાન પ્રાપ્તિ સંસ્કાર"
    },
    timing: {
      en: "Prior to conception, on auspicious astrological conjunctions after marriage.",
      hi: "विवाह उपरांत गर्भाधान से पूर्व शुभ मुहूर्त में।",
      gu: "લગ્ન પછી ગર્ભધારણ પૂર્વે શુભ મુહૂર્તમાં."
    },
    significance: {
      en: "The first of the sixteen sacraments, Garbhadhana invokes divine blessings to invite a noble, healthy, and spiritually inclined soul into the family.",
      hi: "सोलह संस्कारों में प्रथम संस्कार। इसका उद्देश्य उत्तम, धर्मपरायण, बुद्धिमान और सुसंस्कृत संतान को जन्म देने हेतु मानसिक व आध्यात्मिक शुद्धि करना है।",
      gu: "સોળ સંસ્કારોમાં પ્રથમ સંસ્કાર. ઉત્તમ, ધાર્મિક અને નીરોગી સંતાનની પ્રાપ્તિ માટે ઈશ્વરીય આશીર્વાદ અને માનસિક શુદ્ધિ માટે આ સંસ્કાર થાય છે."
    },
    rituals: commonRituals,
    mantra: "ॐ विष्णुर्योनिं कल्पयतु त्वष्टा रूपाणि पिंशतु। आ सिञ्चतु प्रजापतिर्धाता गर्भं दधातु ते॥"
  },
  {
    id: 2,
    name: {
      en: "Pumsavana Sanskar",
      hi: "पुंसवन संस्कार",
      gu: "પુંસવન સંસ્કાર"
    },
    meaning: {
      en: "Fetus Protection & Vitality Rite",
      hi: "गर्भस्थ शिशु के संवर्धन एवं स्वास्थ्य का संस्कार",
      gu: "ગર્ભસ્થ શિશુના સંવર્ધન અને રક્ષણનો સંસ્કાર"
    },
    timing: {
      en: "During the 2nd or 3rd month of pregnancy when signs of conception are clearly established.",
      hi: "गर्भावस्था के दूसरे या तीसरे महीने में।",
      gu: "ગર્ભાવસ્થાના બીજા અથવા ત્રીજા મહિનામાં."
    },
    significance: {
      en: "Aimed at the physical and psychological well-being of both the mother and developing fetus, fostering vigor, courage, and vitality.",
      hi: "गर्भ में पल रहे शिशु के शारीरिक और मानसिक स्वास्थ्य को सुदृढ़ बनाने और गर्भपात के निवारण हेतु यह संस्कार किया जाता है।",
      gu: "ગર્ભમાં રહેલા બાળકના શારીરિક અને માનસિક વિકાસ તથા માતાના ઉત્સાહ અને સ્વાસ્થ્ય માટે આ સંસ્કાર કરવામાં આવે છે."
    },
    rituals: commonRituals,
    mantra: "ॐ पुमानग्निः पुमानिन्द्रः पुमान् देवो बृहस्पतिः। पुमांसं पुत्रं विन्दस्व तं पुमाननु जायताम्॥"
  },
  {
    id: 3,
    name: {
      en: "Simantonnayana Sanskar",
      hi: "सीमन्तोन्नयन संस्कार",
      gu: "સીમંતોન્નયન સંસ્કાર (શ્રીમંત / ખોળો ભરવો)"
    },
    meaning: {
      en: "Parting of the Hair / Mother Blessing Ceremony",
      hi: "गर्भवती के केश सज्जा एवं मानसिक प्रसन्नता का संस्कार",
      gu: "સગર્ભા સ્ત્રીની કેશ સજ્જા, રક્ષા અને આનંદનો સંસ્કાર"
    },
    timing: {
      en: "Usually performed in the 4th, 6th, or 8th month of pregnancy.",
      hi: "गर्भावस्था के चौथे, छठे या आठवें महीने में।",
      gu: "ગર્ભાવસ્થાના ચોથા, છઠ્ઠા કે આઠમા મહિનામાં (ખોળો ભરતી વખતે)."
    },
    significance: {
      en: "Ensures the emotional peace, joy, and positive mindset of the expectant mother, which directly influences the subconscious mind of the fetus.",
      hi: "गर्भवती माता के मन को शांत, प्रसन्न और चिंतामुक्त रखने के लिए यह संस्कार होता है, ताकि शिशु पर उत्कृष्ट संस्कार पड़ें।",
      gu: "માતાનું મન આનંદિત અને પ્રફુલ્લિત રહે જેથી આવનાર બાળક શાંત અને સદ્ગુણી બને. આ લોકપ્રિય રીતે 'ખોળો ભરવો' તરીકે ઓળખાય છે."
    },
    rituals: commonRituals,
    mantra: "ॐ येनेन्द्रो बृहस्पतिना सीमन्तमकरोत्ततः। तेनाहं सीमन्तं करोमि यशसे वर्चसे श्रिये॥"
  },
  {
    id: 4,
    name: {
      en: "Jatakarma Sanskar",
      hi: "जातकर्म संस्कार",
      gu: "જાતકર્મ સંસ્કાર"
    },
    meaning: {
      en: "Birth Rite & First Feeding of Honey/Ghee",
      hi: "नवजात शिशु के जन्मोपरांत प्रथम स्वागत एवं मेधावर्धन संस्कार",
      gu: "નવજાત બાળકના જન્મોત્સવ અને આયુષ્ય-બુદ્ધિ વૃદ્ધિ સંસ્કાર"
    },
    timing: {
      en: "Immediately after childbirth before the umbilical cord is severed or before the first breastfeed.",
      hi: "शिशु के जन्म के तुरंत पश्चात नाभि-नाल काटने से पूर्व।",
      gu: "બાળકના જન્મ પછી તુરંત નાળ છેદન પૂર્વે."
    },
    significance: {
      en: "Welcoming the child into the world, stimulating immunity and intellect with consecrated honey and ghee, whispering sacred mantras into the ear.",
      hi: "नवजात शिशु का प्रथम अन्न प्राशन स्वर्ण शलाका से घी व शहद चटाकर किया जाता है। पिता कान में मेधा और दीर्घायु का मंत्र बोलते हैं।",
      gu: "સોનાની સળીથી મધ અને ઘી ચટાડીને બાળકના આયુષ્ય, તેજ અને બુદ્ધિ માટે પિતા મંત્રોચ્ચાર કરે છે."
    },
    rituals: commonRituals,
    mantra: "ॐ मेधां ते मित्रवरुणौ मेधामग्निरिधातु ते। मेधां त इन्द्रश्च वायुश्च धाता दधातु ते स्वाहा॥"
  },
  {
    id: 5,
    name: {
      en: "Namakarana Sanskar",
      hi: "नामकरण संस्कार",
      gu: "નામકરણ સંસ્કાર"
    },
    meaning: {
      en: "Naming Ceremony",
      hi: "शिशु के नामकरण का पावन संस्कार",
      gu: "બાળકના નામ પાડવાનો પવિત્ર સંસ્કાર"
    },
    timing: {
      en: "On the 10th, 11th, 12th, or 101st day after birth.",
      hi: "जन्म के 10वें, 11वें या 12वें दिन शुभ नक्षत्र में।",
      gu: "જન્મના ૧૦મા, ૧૧મા કે ૧૨મા દિવસે શુભ નક્ષત્રમાં."
    },
    significance: {
      en: "Bestows identity, self-worth, and spiritual aspiration upon the child through a meaningful and astrologically harmonious name.",
      hi: "नाम केवल पुकारने का साधन नहीं बल्कि बालक के व्यक्तित्व और भाग्य का दर्पण है। नक्षत्र, कुलदेवता और गुणानुरूप नाम रखा जाता है।",
      gu: "નામ વ્યક્તિના ચરિત્ર અને જીવનનું પ્રતીક છે. નક્ષત્ર, રાશિ અને ગુણ આધારિત અર્થપૂર્ણ નામ રાખવામાં આવે છે."
    },
    rituals: commonRituals,
    mantra: "ॐ शर्म वर्म च नाम तेऽस्तु भद्रं यशो वर्चः। आयुष्यं वर्चस उच्चैर्नाम धारयामि॥"
  },
  {
    id: 6,
    name: {
      en: "Nishkramana Sanskar",
      hi: "निष्क्रमण संस्कार",
      gu: "નિષ્ક્રમણ સંસ્કાર"
    },
    meaning: {
      en: "First Outing & Exposure to Nature",
      hi: "शिशु का प्रथम बार घर से बाहर प्रकृति दर्शन",
      gu: "બાળકનું પ્રથમ વાર ઘરની બહાર સૂર્ય-ચંદ્ર દર્શન"
    },
    timing: {
      en: "In the 4th month after birth.",
      hi: "जन्म के चौथे महीने में।",
      gu: "જન્મના ચોથા મહિનામાં."
    },
    significance: {
      en: "Connects the child with the cosmic elements—Sun (Surya), Moon (Chandra), Sky, and Earth, building resilience and open awareness.",
      hi: "शिशु को प्रथम बार सूर्य, चंद्र और खुली वायु के संपर्क में लाया जाता है ताकि उसका स्वास्थ्य प्राकृतिक तत्वों से पुष्ट हो।",
      gu: "બાળકને પ્રથમવાર ઘરની બહાર લાવી સૂર્યનારાયણ અને ચંદ્રદેવના દર્શન કરાવી પ્રકૃતિ સાથે તેનો સંબંધ સ્થાપિત કરાય છે."
    },
    rituals: commonRituals,
    mantra: "ॐ चित्रं देवानामुदगादनीकं चक्षुर्मित्रस्य वरुणस्याग्नेः। आप्रा द्यावापृथिवी अन्तरिक्षं सूर्य आत्मा जगतस्तस्थुषश्च॥"
  },
  {
    id: 7,
    name: {
      en: "Annaprashana Sanskar",
      hi: "अन्नप्राशन संस्कार",
      gu: "અન્નપ્રાશન સંસ્કાર"
    },
    meaning: {
      en: "First Solid Food Ceremony",
      hi: "शिशु का प्रथम अन्न भक्षण संस्कार",
      gu: "બાળકને પ્રથમ વખત અન્ન જમાડવાનો સંસ્કાર"
    },
    timing: {
      en: "In the 6th month for baby boys, and 5th or 7th month for baby girls.",
      hi: "शिशु के छठे महीने में (पुत्र के लिए सम मास, पुत्री के लिए विषम मास)।",
      gu: "સામાન્ય રીતે છઠ્ઠા મહિને (દીકરા માટે બેકી મહિને, દીકરી માટે એકી મહિને)."
    },
    significance: {
      en: "Transition from purely mother's milk to wholesome solid food (Kheer/Rice), blessing digestive fire (Agni) and physical growth.",
      hi: "दूध के अतिरिक्त बालक को सुपाच्य ठोस अन्न (खीर) खिलाना। यह जठराग्नि को जाग्रत कर शारीरिक पुष्टि प्रदान करता है।",
      gu: "માતાના દૂધ ઉપરાંત બાળકને પૌષ્ટિક ઘન આહાર (ખીર) આપવાની શરૂઆત. પાચન શક્તિ અને તંદુરસ્તી માટે અગત્યનો સંસ્કાર."
    },
    rituals: commonRituals,
    mantra: "ॐ अन्नपतेऽन्नस्य नो देह्यनमीवस्य शुष्मिणः। प्र प्र दातारं तारिष ऊर्जं नो धेहि द्विपदे चतुष्पदे॥"
  },
  {
    id: 8,
    name: {
      en: "Chudakarana (Mundan) Sanskar",
      hi: "चूड़ाकरण (मुंडन) संस्कार",
      gu: "ચૂડાકરણ (મુંડન / બાબરી) સંસ્કાર"
    },
    meaning: {
      en: "Tonsure Ceremony / First Haircut",
      hi: "शिशु का प्रथम केश कर्तन एवं मस्तिष्क शुद्धि संस्कार",
      gu: "બાળકના પ્રથમ વાળ ઉતારવાનો પવિત્ર સંસ્કાર"
    },
    timing: {
      en: "At the end of the 1st year or during the 3rd year.",
      hi: "प्रथम वर्ष के अंत में अथवा तीसरे वर्ष में।",
      gu: "પહેલા વર્ષના અંતે અથવા ત્રીજા વર્ષમાં."
    },
    significance: {
      en: "Removes impure prenatal hairs, stimulates scalp nerves and brain centers, promotes hair thickness, longevity, and hygiene.",
      hi: "गर्भ के बालों को हटाकर बौद्धिक तेज, आरोग्य और दीर्घायु की वृद्धि करना। चोटी (शिखा) रखने की परंपरा इसी संस्कार से आरंभ होती है।",
      gu: "ગર્ભકાળના વાળ દૂર કરી બાળકના મગજ અને ખોપરીને સૂર્યપ્રકાશ મળે તે માટે. બુદ્ધિ, તેજ અને આયુષ્યની વૃદ્ધિ થાય છે."
    },
    rituals: commonRituals,
    mantra: "ॐ निवर्तयाम्यायुषेऽन्नाद्याय प्रजननाय। रायस्पोषाय सुप्रजास्त्वाय सुवीर्याय॥"
  },
  {
    id: 9,
    name: {
      en: "Karnavedha Sanskar",
      hi: "कर्णवेध संस्कार",
      gu: "કર્ણવેધ સંસ્કાર (કાન વિંધવાનો સંસ્કાર)"
    },
    meaning: {
      en: "Ear Piercing Ceremony",
      hi: "कर्ण भेदन एवं एक्यूप्रेशर द्वारा स्वास्थ्य रक्षा संस्कार",
      gu: "કાન વીંધવાનો અને સ્વાસ્થ્ય રક્ષણનો સંસ્કાર"
    },
    timing: {
      en: "Between the 6th and 8th month or in the 3rd or 5th year.",
      hi: "छठे, सातवें, आठवें महीने में या तीसरे/पांचवें वर्ष में।",
      gu: "છઠ્ઠાથી આઠમા મહિને અથવા ત્રીજા કે પાંચમા વર્ષમાં."
    },
    significance: {
      en: "Ancient acupressure therapy to activate brain faculties, prevent hydrocele and hernia, and refine listening skills for Vedic education.",
      hi: "कान के विशेष बिंदु को भेदने से स्मरण शक्ति बढ़ती है, दृष्टि तीव्र होती है तथा कई रोगों से सुरक्षा मिलती है।",
      gu: "કાન વીંધવાથી એક્યુપ્રેશરના કારણે સ્મરણશક્તિ, આંખોનું તેજ અને આરોગ્ય વધે છે. વિદ્યા ગ્રહણ માટે શ્રવણ શક્તિ સુધરે છે."
    },
    rituals: commonRituals,
    mantra: "ॐ भद्रं कर्णेभिः शृणुयाम देवा भद्रं पश्येमाक्षभिर्यजत्राः। स्थिरैरङ्गैस्तुष्टुवांसस्तनूभिर्व्यशेम देवहितं यदायुः॥"
  },
  {
    id: 10,
    name: {
      en: "Vidyarambha Sanskar",
      hi: "विद्यारम्भ संस्कार",
      gu: "વિદ્યારંભ સંસ્કાર"
    },
    meaning: {
      en: "Initiation into Alphabets & Learning",
      hi: "अक्षर ज्ञान एवं प्राथमिक शिक्षा आरंभ संस्कार",
      gu: "અક્ષર જ્ઞાન અને પ્રાથમિક અભ્યાસનો શુભારંભ"
    },
    timing: {
      en: "At age 5, traditionally on auspicious days like Vasant Panchami.",
      hi: "पांच वर्ष की आयु में, प्रायः वसंत पंचमी या विजयदशमी पर।",
      gu: "પાંચ વર્ષની ઉંમરે, ખાસ કરીને વસંત પંચમી કે વિજયાદશમીના દિવસે."
    },
    significance: {
      en: "The initiation into the world of letters, numerals, and sacred syllables, awakening Goddess Saraswati and Lord Ganesha's blessings.",
      hi: "बालक को प्रथम बार अक्षर और वर्णमाला का ज्ञान कराना। वाणी, बुद्धि और विद्या की देवी सरस्वती का वंदन कर ज्ञान मार्ग पर चलना।",
      gu: "બાળકને પહેલી વાર અક્ષર લખાવવા અને વાંચવાની શરૂઆત. મા સરસ્વતી અને ગણેશજીના આશીર્વાદથી વિદ્યાની યાત્રા શરૂ થાય છે."
    },
    rituals: commonRituals,
    mantra: "ॐ सरस्वति नमस्तुभ्यं वरदे कामरूपिणि। विद्यारम्भं करिष्यामि सिद्धिर्भवतु मे सदा॥"
  },
  {
    id: 11,
    name: {
      en: "Upanayana (Yajnopavita) Sanskar",
      hi: "उपनयन (जनेऊ) संस्कार",
      gu: "ઉપનયન (જનોઈ) સંસ્કાર"
    },
    meaning: {
      en: "Sacred Thread Ceremony / Spiritual Rebirth",
      hi: "यज्ञोपवीत धारण एवं द्वितीय (आध्यात्मिक) जन्म संस्कार",
      gu: "યજ્ઞોપવીત (જનોઈ) ધારણ અને દ્વિજ સંસ્કાર"
    },
    timing: {
      en: "Around 8 years for Brahmins, 11 for Kshatriyas, 12 for Vaishyas.",
      hi: "8 से 12 वर्ष की अवस्था में ब्रह्मचर्य आश्रम प्रवेश पर।",
      gu: "૮ થી ૧૨ વર્ષની ઉંમરે બ્રહ્મચર્યાશ્રમ પ્રવેશ વખતે."
    },
    significance: {
      en: "Marks the entrance into formal spiritual discipline and student life (Brahmacharya). Bestows the status of 'Dvija' (twice-born) and initiation into Gayatri Mantra.",
      hi: "यह जीवन का अत्यंत महत्वपूर्ण संस्कार है। तीन धागों वाला जनेऊ तीन ऋणों (देव, ऋषि, पितृ) की याद दिलाता है। बालक को गायत्री मंत्र की दीक्षा मिलती है।",
      gu: "જીવનનો અતિ મહત્ત્વનો સંસ્કાર. બાળક 'દ્વિજ' (બીજો જન્મ) બને છે. ત્રણ દોરા દેવઋણ, ઋષિઋણ અને પિતૃઋણની યાદ અપાવે છે. ગાયત્રી દીક્ષા મળે છે."
    },
    rituals: commonRituals,
    mantra: "ॐ यज्ञोपवीतं परमं पवित्रं प्रजापतेर्यत्सहजं पुरस्तात्। आयुष्यमग्र्यं प्रतिमुञ्च शुभ्रं यज्ञोपवीतं बलमस्तु तेजः॥"
  },
  {
    id: 12,
    name: {
      en: "Vedarambha Sanskar",
      hi: "वेदारम्भ संस्कार",
      gu: "વેદારંભ સંસ્કાર"
    },
    meaning: {
      en: "Commencement of Vedic Studies",
      hi: "चारों वेदों एवं उपनिषदों के विधिवत अध्ययन का आरंभ",
      gu: "વેદો અને શાસ્ત્રોના અભ્યાસનો પ્રારંભ"
    },
    timing: {
      en: "Immediately following Upanayana or within one year of entering the Gurukul.",
      hi: "उपनयन के ठीक पश्चात अथवा गुरुकुल प्रवेश के समय।",
      gu: "જનોઈ પછી અથવા ગુરુકુળમાં પ્રવેશ સાથે."
    },
    significance: {
      en: "Formal initiation into the study of the four Vedas, Upanishads, sciences, and ethics under the guidance of the Guru.",
      hi: "ब्रह्मचारी वेदों, शास्त्रों, गणित, खगोल और दर्शन के गंभीर अध्ययन का संकल्प लेता है ताकि वह समाज के लिए प्रबुद्ध नागरिक बने।",
      gu: "વિદ્યાર્થી વેદ, ઉપનિષદ, ધર્મ અને વિજ્ઞાનનો ગહન અભ્યાસ શરૂ કરે છે. બૌદ્ધિક અને ચારિત્ર્ય નિર્માણનો આ આધાર છે."
    },
    rituals: commonRituals,
    mantra: "ॐ अग्ने व्रतपते व्रतं चरिष्यामि तच्छकेयं तन्मे राध्यताम्। इदमहमनृतात्सत्यमुपैमि॥"
  },
  {
    id: 13,
    name: {
      en: "Keshanta (Godana) Sanskar",
      hi: "केशान्त (गोदान) संस्कार",
      gu: "કેશાંત (ગોદાન) સંસ્કાર"
    },
    meaning: {
      en: "First Shaving of Beard & Cow Donation",
      hi: "युवावस्था में प्रथम दाढ़ी-मूंछ कर्तन एवं गोदान संस्कार",
      gu: "યુવાવસ્થામાં પ્રથમ દાઢી-મૂછ ઉતારવી અને ગોદાન સંસ્કાર"
    },
    timing: {
      en: "At the age of 16, marking entry into adulthood.",
      hi: "16 वर्ष की आयु में युवावस्था के आगमन पर।",
      gu: "૧૬ વર્ષની ઉંમરે યુવાવસ્થામાં પ્રવેશ સમયે."
    },
    significance: {
      en: "Celebrates physical maturity and reinforces self-control, celibacy, and gratitude to the Guru through gifting a cow (Godana).",
      hi: "यह संस्कार बताता है कि शिष्य अब शारीरिक रूप से वयस्क हो गया है। वह गुरु को गाय दान करके अपनी कृतज्ञता व्यक्त करता है।",
      gu: "શારીરિક પુખ્તતાની સ્વીકૃતિ અને ઈન્દ્રિય સંયમની પ્રેરણા. ગુરુ પ્રત્યે કૃતજ્ઞતા દર્શાવી ગાયનું દાન કરવામાં આવે છે."
    },
    rituals: commonRituals,
    mantra: "ॐ येनावपत्सविता क्षुरेण सोमस्य राज्ञो वरुणस्य विद्वान्। तेन ब्रह्माणो वपतेदमस्य गोमदश्वमदयमस्तु वीरः॥"
  },
  {
    id: 14,
    name: {
      en: "Samavartana (Snana) Sanskar",
      hi: "समावर्तन (स्नान) संस्कार",
      gu: "સમાવર્તન (સ્નાતક / દીક્ષાંત) સંસ્કાર"
    },
    meaning: {
      en: "Convocation / Graduation & Return from Gurukul",
      hi: "गुरुकुल से शिक्षा पूर्ण कर गृहस्थ आश्रम की ओर लौटने का दीक्षांत संस्कार",
      gu: "અભ્યાસ પૂર્ણ કરી ગૃહસ્થાશ્રમ તરફ પાછા ફરવાનો દીક્ષાંત સંસ્કાર"
    },
    timing: {
      en: "Around 21–25 years upon completion of all Vedic education.",
      hi: "शिक्षा पूर्ण होने पर 21 से 25 वर्ष की आयु में।",
      gu: "વિદ્યાભ્યાસ પૂર્ણ થતાં ૨૧ થી ૨૫ વર્ષની વયે."
    },
    significance: {
      en: "The ancient Vedic graduation ceremony. The student takes a ceremonial bath, becoming a 'Snataka' (graduate), ready to marry and contribute to society.",
      hi: "आधुनिक 'कॉन्वोकेशन' का वैदिक रूप। शिष्य को 'स्नातक' की उपाधि मिलती है। गुरु जीवन के सर्वोच्च उपदेश (सत्यं वद, धर्मं चर) देते हैं।",
      gu: "આજના પદવીદાન સમારોહ (Convocation) નું મૂળ. શિષ્ય 'સ્નાતક' બને છે. ગુરુ સત્ય બોલવાનો અને ધર્મનું પાલન કરવાનો અંતિમ ઉપદેશ આપે છે."
    },
    rituals: commonRituals,
    mantra: "ॐ सत्यं वद। धर्मं चर। स्वाध्यायान्मा प्रमदः। मातृदेवो भव। पितृदेवो भव। आचार्यदेवो भव। अतिथिदेवो भव॥"
  },
  {
    id: 15,
    name: {
      en: "Vivaha Sanskar",
      hi: "विवाह संस्कार",
      gu: "વિવાહ સંસ્કાર (લગ્ન સંસ્કાર)"
    },
    meaning: {
      en: "Sacred Holy Matrimony",
      hi: "गृहस्थ आश्रम में प्रवेश का परम पवित्र वैवाहिक संस्कार",
      gu: "ગૃહસ્થાશ્રમમાં પ્રવેશ માટેનો પવિત્ર લગ્ન સંસ્કાર"
    },
    timing: {
      en: "Upon entering youth and completing education.",
      hi: "विद्या पूर्ण करने के उपरांत वयस्क होने पर।",
      gu: "શિક્ષણ પૂર્ણ થયા પછી યુવાવસ્થામાં."
    },
    significance: {
      en: "The cornerstone of social and spiritual order (Grihastha Ashram). A sacred union of two souls across seven lives for Dharma, Artha, Kama, and Moksha.",
      hi: "सभी संस्कारों में गृहस्थ आश्रम का मुख्य आधार। यह केवल दो शरीरों का नहीं बल्कि दो आत्माओं और दो कुलों का पवित्र मिलन है।",
      gu: "સૌથી મહત્ત્વપૂર્ણ સંસ્કાર. ધર્મ, અર્થ, કામ અને મોક્ષની સિદ્ધિ માટે બે આત્મા અને પરિવારોનું પવિત્ર મિલન છે."
    },
    rituals: commonRituals,
    mantra: "ॐ सखा सप्तपदा भव सख्यं ते गमेयम्। सख्यं ते मा योषाः सख्यं मे मा योष्ठाः॥"
  },
  {
    id: 16,
    name: {
      en: "Antyeshti Sanskar",
      hi: "अन्त्येष्टि संस्कार",
      gu: "અંત્યેષ્ટિ સંસ્કાર (અંતિમ સંસ્કાર)"
    },
    meaning: {
      en: "The Final Sacrifice / Funeral Rite",
      hi: "अंतिम यज्ञ, दाह संस्कार एवं जीवात्मा की मुक्ति का संस्कार",
      gu: "અંતિમ યજ્ઞ, અગ્નિ સંસ્કાર અને મોક્ષ સંસ્કાર"
    },
    timing: {
      en: "At the demise of the physical body.",
      hi: "स्थूल देह के त्याग (मृत्यु) के पश्चात।",
      gu: "સ્થૂળ દેહના અવસાન (મૃત્યુ) પછી."
    },
    significance: {
      en: "The last of the 16 sacraments. The mortal body made of the five great elements is offered back to Fire (Agni), guiding the soul on its onward spiritual journey.",
      hi: "मानव जीवन का अंतिम संस्कार। पंचमहाभूतों से बनी देह को पुनः अग्निदेव के माध्यम से प्रकृति को समर्पित कर जीवात्मा की सद्गति की प्रार्थना की जाती है।",
      gu: "માનવ દેહનો આખરી સંસ્કાર. પંચમહાભૂતમાંથી બનેલું શરીર ફરીથી અગ્નિ મારફત પ્રકૃતિમાં વિલીન થાય છે અને આત્માની સદ્ગતિ થાય છે."
    },
    rituals: commonRituals,
    mantra: "ॐ सूर्याच्चक्षुर्गच्छतु वातमात्मा द्यां च गच्छ पृथिवीं च धर्मणा। अपो वा गच्छ यदि तत्र ते हितमोषधीषु प्रति तिष्ठा शरीरैः॥"
  }
];

// Comprehensive Site Translations for Index, About & Contact pages
const siteTranslations = {
  en: {
    siteTitle: "Vaidik Sanskar Vidhi",
    siteSubtitle: "16 Sacred Sacraments (Shodasha Sanskar)",
    navHome: "Home",
    navSanskars: "All 16 Sanskars",
    navAbout: "About Sanskars",
    navContact: "Contact / Inquiry",
    heroNamaste: "🙏 Namaste 🙏",
    heroBadge: "Sacred Vedic Tradition",
    heroTitle: "Awaken Divine Grace with 16 Vedic Sanskars",
    heroSubtitle: "Explore the profound science, mantras, and ceremonies of Shodasha Sanskar for every stage of human life.",
    exploreBtn: "Explore All 16 Sanskars",
    aboutBtn: "Philosophy & Purpose",
    sectionTitle: "The 16 Sacred Sacraments",
    sectionSubtitle: "From Conception to Liberation — A Complete Lifelong Journey of Spiritual Elevation",
    searchPlaceholder: "Search Sanskar by name or keyword...",
    allFilter: "All Sanskars",
    prenatalFilter: "Prenatal (1-3)",
    childhoodFilter: "Childhood (4-9)",
    educationalFilter: "Educational (10-14)",
    socialFilter: "Life & Beyond (15-16)",
    readMore: "View Details & Vidhi",
    timingLabel: "Auspicious Timing:",
    mantraLabel: "Sacred Vedic Mantra:",
    ritualsLabel: "Key Ritual Steps:",
    significanceLabel: "Spiritual Significance:",
    backToHome: "← Back to All Sanskars",
    prevSanskar: "← Previous Sanskar",
    nextSanskar: "Next Sanskar →",
    footerQuote: "“Sanskar transforms ordinary mortal existence into pure divine consciousness.”",
    copyright: "© 2026 Vaidik Sanskar Vidhi. Dedicated to preserving Sanatan Dharma heritage.",
    footerHeadingSanskar: "Sanskar Categories",
    footerHeadingGuidance: "Guidance & Info",
    footerContactTithi: "📞 Tithi Arya : +91 81287 21106",
    footerContactPriyanka: "📞 Priyanka Arya : +91 79847 23878",
    footerSanskar1: "1. Garbhadhana Sanskar",
    footerSanskar5: "5. Namakarana Sanskar",
    footerSanskar11: "11. Upanayana Sanskar",
    footerSanskar15: "15. Vivaha Sanskar",
    kartaTitle: "Created By:",
    kartaNames: "Tithi Arya & Priyanka Arya",
    tithiAryaOnly: "Tithi Arya",
    priyankaAryaOnly: "Priyanka Arya",
    andWord: "&",
    kartaSectionTitle: "🪷 Meet the Vedic Vidhi Kartas",
    kartaSectionSubtitle: "Dedicated to conducting authentic Vedic rituals, Yajna, and Shodasha Sanskar ceremonies.",
    kartaRole: "Vedic Ritual & Havan Guide",
    contactUsLabel: "Contact Us:",
    tithiAryaLabel: "Tithi Arya:",
    priyankaAryaLabel: "Priyanka Arya:",

    // About Page Translations
    aboutHeroTitle: "Glory of the 16 Vedic Sanskars",
    aboutHeroSubtitle: "Through sacred Sanskars, human life attains refinement, divinity, and spiritual elevation.",
    aboutWhatTitle: "What is a Sanskar? (Definition & Purpose)",
    aboutWhatP1: "The word 'Sanskar' literally means purification, refinement, and elevation. Just as raw gold extracted from a mine is melted and purified in sacred fire to become an exquisite ornament, sacred Sanskars purge dormant karmic impurities and awaken divine potential within human consciousness.",
    aboutWhatP2: "As Maharishi Vyasa proclaims: \"Janmana jayate shudrah, sanskarat dvija uchyate.\" Every human being is born simple and untutored, but through noble Sanskars, one is reborn spiritually as a 'Dvija' (an enlightened, ethical, and cultured soul).",
    aboutStagesTitle: "Four Pillars of the 16 Sanskars",
    aboutStage1Title: "1. Conception & Prenatal Rites",
    aboutStage1Desc: "Garbhadhana, Pumsavana, Simantonnayana — Welcoming a noble soul into the womb and protecting the mother and child.",
    aboutStage2Title: "2. Infancy & Childhood",
    aboutStage2Desc: "Jatakarma, Namakarana, Nishkramana, Annaprashana, Chudakarana, Karnavedha — Immunity, health, sensory development, and intellect.",
    aboutStage3Title: "3. Education & Discipline",
    aboutStage3Desc: "Vidyarambha, Upanayana, Vedarambha, Keshanta, Samavartana — Initiation into sacred wisdom, ethical codes, and student life.",
    aboutStage4Title: "4. Householder & Liberation",
    aboutStage4Desc: "Vivaha (Matrimony) & Antyeshti (Final sacrifice) — Family duty, societal contribution, and soul's liberation.",
    aboutScienceTitle: "Scientific and Psychological Significance",
    aboutScienceP: "Vedic Sanskars are not mere orthodox ceremonies; they are rooted in profound neuroscience, psychology, and environmental harmony:",
    aboutScienceLi1: "Prenatal Consciousness: Modern Epigenetics confirms that mother's emotional state and auditory inputs directly shape fetal neuro-development.",
    aboutScienceLi2: "Acupressure & Vigor: Ear piercing stimulates vital meridian points boosting memory and vision, while tonsure allows solar energy to nourish the brain.",
    aboutScienceLi3: "Yajna & Eco-cleansing: Herbal offerings in sacred fire disinfect atmospheric air and radiate serene, positive vibrations.",
    aboutBtnExplore: "Explore All 16 Sanskars →",

    // Contact Page Translations
    contactHeroTitle: "Sanskar Guidance & Consultation",
    contactHeroSubtitle: "Send inquiries regarding auspicious timings, puja essentials, and expert Vedic Vidhi",
    contactFormTitle: "Sanskar Inquiry Form",
    contactFormSubtitle: "If you wish to inquire about auspicious Muhurta, required Samagri list (Havan items), or authentic Vedic Vidhi for any Sanskar, please fill out the form below.",
    contactLabelName: "Full Name *",
    contactPlaceholderName: "e.g. Ramesh Kumar Sharma",
    contactLabelPhone: "Mobile / Phone Number *",
    contactPlaceholderPhone: "+91 98765 43210",
    contactLabelEmail: "Email Address *",
    contactPlaceholderEmail: "yourname@example.com",
    contactLabelSanskar: "Select Sanskar of Interest *",
    contactSelectDefault: "-- Select a Sanskar --",
    contactLabelLocation: "City / Location *",
    contactPlaceholderLocation: "e.g. Ahmedabad, Mumbai, London...",
    contactLabelMessage: "Your Inquiry / Message (Optional)",
    contactPlaceholderMessage: "Write your questions regarding auspicious timing, required items, or rituals...",
    contactSubmitBtn: "Send Inquiry via WhatsApp 💬",
    contactDirectWa: "Or Chat Directly on WhatsApp:",
    contactAlertSuccess: "Opening WhatsApp to send your inquiry...",
    modalTitle: "Choose Whom to Contact",
    modalSubtitle: "Please select a number to send your inquiry on WhatsApp:",
    modalTithi: "Tithi Arya",
    modalPriyanka: "Priyanka Arya"
  },
  hi: {
    siteTitle: "वैदिक संस्कार विधि",
    siteSubtitle: "सोलह संस्कार (पावन संस्कार)",
    navHome: "मुखपृष्ठ",
    navSanskars: "सभी 16 संस्कार",
    navAbout: "संस्कार परिचय",
    navContact: "संपर्क / परामर्श",
    heroNamaste: "🙏 नमस्ते 🙏",
    heroBadge: "वैदिक सनातन परम्परा",
    heroTitle: "सोलह संस्कारों से संवारें जीवन की पावन यात्रा",
    heroSubtitle: "गर्भाधान से लेकर अन्त्येष्टि तक, मानव जीवन के सर्वांगीण विकास, शुद्धि और मोक्ष हेतु वैदिक विधि एवं मन्त्र।",
    exploreBtn: "सभी 16 संस्कार देखें",
    aboutBtn: "संस्कारों का रहस्य",
    sectionTitle: "सोलह संस्कार संग्रह",
    sectionSubtitle: "गर्भाधान से मुक्ति पर्यन्त — मानव जीवन के अध्यात्मिक उन्नयन की सम्पूर्ण यात्रा",
    searchPlaceholder: "संस्कार का नाम या शब्द खोजें...",
    allFilter: "सभी संस्कार",
    prenatalFilter: "जन्म पूर्व (1-3)",
    childhoodFilter: "शैशव व बाल्यकाल (4-9)",
    educationalFilter: "शिक्षा व ब्रह्मचर्य (10-14)",
    socialFilter: "गृहस्थ व मुक्ति (15-16)",
    readMore: "विस्तृत विधि व मन्त्र पढ़ें",
    timingLabel: "शुभ काल / मुहूर्त:",
    mantraLabel: "पवित्र वैदिक मन्त्र:",
    ritualsLabel: "प्रमुख कर्मकाण्ड व विधि:",
    significanceLabel: "आध्यात्मिक व वैज्ञानिक महत्व:",
    backToHome: "← सभी संस्कारों पर लौटें",
    prevSanskar: "← पिछला संस्कार",
    nextSanskar: "अगला संस्कार →",
    footerQuote: "“संस्कारो हि नाम स भवति यस्मिन् जाते पदार्थो भवति योग्यः कस्यचिदर्थस्य।” — महर्षि जैमिनि",
    copyright: "© 2026 वैदिक संस्कार विधि। सनातन वैदिक संस्कृति के संरक्षण हेतु समर्पित।",
    footerHeadingSanskar: "संस्कार श्रेणियां",
    footerHeadingGuidance: "मार्गदर्शन",
    footerContactTithi: "📞 तिथि आर्य : +91 81287 21106",
    footerContactPriyanka: "📞 प्रियंका आर्य : +91 79847 23878",
    footerSanskar1: "1. गर्भाधान संस्कार",
    footerSanskar5: "5. नामकरण संस्कार",
    footerSanskar11: "11. उपनयन संस्कार",
    footerSanskar15: "15. विवाह संस्कार",
    kartaTitle: "कर्ता:",
    kartaNames: "तिथि आर्य एवं प्रियंका आर्य",
    tithiAryaOnly: "तिथि आर्य",
    priyankaAryaOnly: "प्रियंका आर्य",
    andWord: "एवं",
    kartaSectionTitle: "🪷 वैदिक संस्कार विधि कर्ता परिचय",
    kartaSectionSubtitle: "वैदिक मन्त्रोच्चार, यज्ञ-हवन एवं पवित्र सोलह संस्कारों के संचालन हेतु समर्पित।",
    kartaRole: "वैदिक संस्कार एवं यज्ञ-हवन मार्गदर्शक",
    contactUsLabel: "संपर्क:",
    tithiAryaLabel: "तिथि आर्य:",
    priyankaAryaLabel: "प्रियंका आर्य:",

    // About Page Translations
    aboutHeroTitle: "वैदिक सोलह संस्कार की महिमा",
    aboutHeroSubtitle: "संस्कारों से ही मानव जीवन का परिष्कार, दिव्यता एवं आध्यात्मिक उत्थान संभव है",
    aboutWhatTitle: "संस्कार क्या है? (What is a Sanskar?)",
    aboutWhatP1: "'संस्कार' शब्द का शाब्दिक अर्थ है — 'शुद्ध करना', 'परिष्कृत करना' अथवा 'योग्य बनाना'। जिस प्रकार खान से निकले अशुद्ध स्वर्ण को अग्नि में तपाकर कुंदन और बहुमूल्य आभूषण बनाया जाता है, ठीक उसी प्रकार मनुष्य के जन्मजात दोषों को दूर कर उसमें दिव्य गुणों का आरोपण करना 'संस्कार' कहलाता है।",
    aboutWhatP2: "महर्षि व्यास के अनुसार: \"जन्मना जायते शूद्रः संस्कारात् द्विज उच्यते।\" अर्थात् प्रत्येक व्यक्ति जन्म से सामान्य होता है, परंतु उत्तम संस्कारों के द्वारा ही वह 'द्विज' (श्रेष्ठ, ज्ञानी और सुसंस्कृत) बनता है।",
    aboutStagesTitle: "सोलह संस्कार के चार मुख्य चरण",
    aboutStage1Title: "१. गर्भाधान एवं जन्म-पूर्व",
    aboutStage1Desc: "गर्भाधान, पुंसवन, सीमन्तोन्नयन — उत्तम संतति का आह्वान और गर्भस्थ शिशु की सुरक्षा।",
    aboutStage2Title: "२. शैशव एवं बाल्यकाल",
    aboutStage2Desc: "जातकर्म, नामकरण, निष्क्रमण, अन्नप्राशन, चूड़ाकरण, कर्णवेध — स्वास्थ्य और बौद्धिक तेज।",
    aboutStage3Title: "३. विद्या एवं ब्रह्मचर्य",
    aboutStage3Desc: "विद्यारम्भ, उपनयन, वेदारम्भ, केशान्त, समावर्तन — ज्ञान, अनुशासन एवं चारित्रिक निर्माण।",
    aboutStage4Title: "४. गृहस्थ एवं मुक्ति",
    aboutStage4Desc: "विवाह एवं अन्त्येष्टि संस्कार — समाज का पोषण, परिवार कल्याण एवं आत्मा की सद्गति।",
    aboutScienceTitle: "संस्कारों का वैज्ञानिक एवं मनोवैज्ञानिक महत्व",
    aboutScienceP: "वैदिक संस्कार केवल रूढ़िवादिता या कर्मकाण्ड नहीं हैं, अपितु इनमें गहरा मनोविज्ञान, शरीर विज्ञान और पर्यावरण संरक्षण निहित है:",
    aboutScienceLi1: "गर्भावस्थीय चेतना: आधुनिक विज्ञान (Epigenetics) भी स्वीकार करता है कि माता के विचार और वातावरण गर्भस्थ शिशु के डीएनए और मानसिक स्थिति पर गहरा प्रभाव डालते हैं।",
    aboutScienceLi2: "कर्णवेध व मुंडन का आरोग्य: एक्यूप्रेशर के सिद्धांतों के अनुसार कान छेदने से मस्तिष्क की स्मरण शक्ति व नेत्र ज्योति बढ़ती है, और मुंडन से सिर को सात्विक ऊर्जा मिलती है।",
    aboutScienceLi3: "यज्ञ एवं पर्यावरण शुद्धि: प्रत्येक संस्कार में होने वाले वैदिक हव्य और मन्त्रोच्चार से आसपास का वायुमण्डल शुद्ध होता है और सूक्ष्म सकारात्मक ऊर्जा का संचार होता है।",
    aboutBtnExplore: "सोलहों संस्कारों की विस्तृत सूची देखें →",

    // Contact Page Translations
    contactHeroTitle: "संस्कार मार्गदर्शन एवं परामर्श",
    contactHeroSubtitle: "शुभ मुहूर्त, विधि विधान एवं योग्य पुरोहित चयन हेतु संदेश भेजें",
    contactFormTitle: "परामर्श हेतु संपर्क फॉर्म",
    contactFormSubtitle: "यदि आप किसी विशिष्ट संस्कार के शुभ मुहूर्त, सामग्री सूची (हवन सामग्री) या वैदिक विधि के संबंध में जानकारी प्राप्त करना चाहते हैं, तो कृपया नीचे दिए गए फॉर्म को भरें।",
    contactLabelName: "पूरा नाम (Full Name) *",
    contactPlaceholderName: "उदा. रमेश कुमार शर्मा",
    contactLabelPhone: "दूरभाष / मोबाइल (Phone) *",
    contactPlaceholderPhone: "+91 98765 43210",
    contactLabelEmail: "ईमेल पता (Email) *",
    contactPlaceholderEmail: "yourname@example.com",
    contactLabelSanskar: "इच्छित संस्कार (Select Sanskar of Interest) *",
    contactSelectDefault: "-- संस्कार का चयन करें --",
    contactLabelLocation: "शहर / स्थान (City / Location) *",
    contactPlaceholderLocation: "उदा. अहमदाबाद, मुंबई, दिल्ली...",
    contactLabelMessage: "आपका संदेश या प्रश्न (ऐच्छिक / Optional)",
    contactPlaceholderMessage: "मुहूर्त, सामग्री अथवा विधि के संबंध में अपना प्रश्न लिखें...",
    contactSubmitBtn: "WhatsApp पर विवरण भेजें 💬",
    contactDirectWa: "अथवा सीधे WhatsApp पर संपर्क करें:",
    contactAlertSuccess: "पूछताछ भेजने हेतु WhatsApp खुल रहा है...",
    modalTitle: "किन्हें संपर्क करना चाहते हैं?",
    modalSubtitle: "कृपया WhatsApp पर संदेश भेजने हेतु चयन करें:",
    modalTithi: "तिथि आर्य (Tithi Arya)",
    modalPriyanka: "प्रियंका आर्य (Priyanka Arya)"
  },
  gu: {
    siteTitle: "વૈદિક સંસ્કાર વિધિ",
    siteSubtitle: "સોળ સંસ્કાર (સોળ પવિત્ર સંસ્કાર)",
    navHome: "મુખ્ય પૃષ્ઠ",
    navSanskars: "બધા ૧૬ સંસ્કારો",
    navAbout: "સંસ્કાર પરિચય",
    navContact: "સંપર્ક / પરામર્શ",
    heroNamaste: "🙏 નમસ્તે 🙏",
    heroBadge: "વૈદિક સનાતન પરંપરા",
    heroTitle: "સોળ સંસ્કારોથી ઉજાળો માનવ જીવનની પવિત્ર યાત્રા",
    heroSubtitle: "ગર્ભાધાનથી અંત્યેષ્ટિ સુધી, માનવ જીવનના સર્વાંગી વિકાસ, પવિત્રતા અને મોક્ષ માટેની વૈદિક વિધિ અને મંત્રો.",
    exploreBtn: "સોળે સંસ્કાર જુઓ",
    aboutBtn: "સંસ્કારોનું મહત્વ",
    sectionTitle: "સોળ સંસ્કાર સંગ્રહ",
    sectionSubtitle: "ગર્ભાધાનથી મુક્તિ સુધી — માનવ જીવનના આધ્યાત્મિક ઉત્થાનની પૂર્ણ યાત્રા",
    searchPlaceholder: "સંસ્કારનું નામ કે વિગત શોધો...",
    allFilter: "બધા સંસ્કારો",
    prenatalFilter: "જન્મ પૂર્વે (૧-૩)",
    childhoodFilter: "બાળપણ (૪-૯)",
    educationalFilter: "વિદ્યાભ્યાસ (૧૦-૧૪)",
    socialFilter: "ગૃહસ્થ અને મોક્ષ (૧૫-૧૬)",
    readMore: "સંપૂર્ણ વિધિ અને મંત્ર જુઓ",
    timingLabel: "શુભ સમય / મુહૂર્ત:",
    mantraLabel: "પવિત્ર વૈદિક મંત્ર:",
    ritualsLabel: "મુખ્ય વિધિ અને ચરણો:",
    significanceLabel: "આધ્યાત્મિક તેમજ વૈજ્ઞાનિક મહત્વ:",
    backToHome: "← બધા સંસ્કારો પર પાછા જાઓ",
    prevSanskar: "← અગાઉનો સંસ્કાર",
    nextSanskar: "આગળનો સંસ્કાર →",
    footerQuote: "“સંસ્કાર દ્વારા સામાન્ય માનવ જીવન દિવ્ય અને આદર્શ બને છે.”",
    copyright: "© 2026 વૈદિક સંસ્કાર વિધિ. સનાતન સંસ્કૃતિના પ્રચાર અર્થે સમર્પિત.",
    footerHeadingSanskar: "સંસ્કાર શ્રેણીઓ",
    footerHeadingGuidance: "માર્ગદર્શન",
    footerContactTithi: "📞 તિથી આર્ય : +91 81287 21106",
    footerContactPriyanka: "📞 પ્રિયંકા આર્ય : +91 79847 23878",
    footerSanskar1: "1. ગર્ભાધાન સંસ્કાર",
    footerSanskar5: "5. નામકરણ સંસ્કાર",
    footerSanskar11: "11. ઉપનયન સંસ્કાર",
    footerSanskar15: "15. વિવાહ સંસ્કાર",
    kartaTitle: "કર્તા:",
    kartaNames: "તિથી આર્ય અને પ્રિયંકા આર્ય",
    tithiAryaOnly: "તિથી આર્ય",
    priyankaAryaOnly: "પ્રિયંકા આર્ય",
    andWord: "અને",
    kartaSectionTitle: "🪷 વૈદિક સંસ્કાર વિધિ કર્તા પરિચય",
    kartaSectionSubtitle: "વૈદિક મંત્રોચ્ચાર, યજ્ઞ-હવન અને પવિત્ર સોળ સંસ્કારોના સંચાલન અર્થે સમર્પિત.",
    kartaRole: "વૈદિક સંસ્કાર અને યજ્ઞ-હવન માર્ગદર્શક",
    contactUsLabel: "સંપર્ક:",
    tithiAryaLabel: "તિથી આર્ય:",
    priyankaAryaLabel: "પ્રિયંકા આર્ય:",

    // About Page Translations
    aboutHeroTitle: "વૈદિક સોળ સંસ્કારનો મહિમા",
    aboutHeroSubtitle: "સંસ્કારો દ્વારા જ માનવ જીવનનો પરિષ્કાર, દિવ્યતા અને આધ્યાત્મિક ઉત્થાન શક્ય બને છે",
    aboutWhatTitle: "સંસ્કાર એટલે શું? (What is a Sanskar?)",
    aboutWhatP1: "'સંસ્કાર' શબ્દનો શાબ્દિક અર્થ છે — 'શુદ્ધ કરવું', 'પરિષ્કૃત કરવું' અથવા 'યોગ્ય બનાવવું'. જેવી રીતે ખાણમાંથી નીકળેલ અશુદ્ધ સોનાને અગ્નિમાં તપાવીને શુદ્ધ કુંદન બનાવવામાં આવે છે, તેવી જ રીતે મનુષ્યના જન્મજાત દોષો દૂર કરી તેમાં દિવ્ય ગુણોનું સિંચન કરવું તેને 'સંસ્કાર' કહેવાય છે.",
    aboutWhatP2: "મહર્ષિ વ્યાસ અનુસાર: \"જન્મના જાયતે શૂદ્રઃ સંસ્કારાત્ દ્વિજ ઉચ્યતે।\" એટલે કે જન્મથી દરેક વ્યક્તિ સામાન્ય હોય છે, પરંતુ ઉત્તમ સંસ્કારોથી જ તે 'દ્વિજ' (જ્ઞાની, સદ્ગુણી અને સુસંસ્કૃત) બને છે.",
    aboutStagesTitle: "સોળ સંસ્કારના ચાર મુખ્ય ચરણો",
    aboutStage1Title: "૧. ગર્ભાધાન અને જન્મ પૂર્વે",
    aboutStage1Desc: "ગર્ભાધાન, પુંસવન, સીમન્તોન્નયન (ખોળો ભરવો) — શ્રેષ્ઠ સંતાન આહ્વાન અને ગર્ભસ્થ શિશુનું રક્ષણ.",
    aboutStage2Title: "૨. શૈશવ અને બાળપણ",
    aboutStage2Desc: "જાતકર્મ, નામકરણ, નિષ્ક્રમણ, અન્નપ્રાશન, ચૂડાકરણ (બાબરી), કર્ણવેધ — આરોગ્ય અને તેજ.",
    aboutStage3Title: "૩. વિદ્યા અને બ્રહ્મચર્ય",
    aboutStage3Desc: "વિદ્યારંભ, ઉપનયન (જનોઈ), વેદારંભ, કેશાંત, સમાવર્તન — જ્ઞાન, શિસ્ત અને ચારિત્ર્ય નિર્માણ.",
    aboutStage4Title: "૪. ગૃહસ્થ અને મુક્તિ",
    aboutStage4Desc: "વિવાહ (લગ્ન) અને અંત્યેષ્ટિ સંસ્કાર — સમાજ અને પરિવાર કલ્યાણ તેમજ મોક્ષ.",
    aboutScienceTitle: "સંસ્કારોનું વૈજ્ઞાનિક તેમજ મનોવૈજ્ઞાનિક મહત્વ",
    aboutScienceP: "વૈદિક સંસ્કાર માત્ર રૂઢિવાદી કર્મકાંડ નથી, પરંતુ તેમાં ઊંડું મનોવિજ્ઞાન, શરીર વિજ્ઞાન અને પર્યાવરણ શુદ્ધિ સમાયેલી છે:",
    aboutScienceLi1: "ગર્ભાવસ્થામાં ચેતના: આધુનિક વિજ્ઞાન (Epigenetics) પણ માને છે કે માતાના સદ્વિચારો ગર્ભસ્થ શિશુના માનસિક વિકાસ માટે અત્યંત જરૂરી છે.",
    aboutScienceLi2: "કર્ણવેધ અને મુંડનનું આરોગ્ય: એક્યુપ્રેશરના સિદ્ધાંત મુજબ કાન વીંધવાથી સ્મરણશક્તિ વધે છે અને બાબરીથી મગજને સાત્વિક ઊર્જા મળે છે.",
    aboutScienceLi3: "યજ્ઞ અને પર્યાવરણ શુદ્ધિ: દરેક સંસ્કારમાં થતા પવિત્ર હવન અને મંત્રોચ્ચારથી આબોહવા શુદ્ધ થાય છે અને સકારાત્મક તરંગો ફેલાય છે.",
    aboutBtnExplore: "સોળેય સંસ્કારોની સંપૂર્ણ યાદી જુઓ →",

    // Contact Page Translations
    contactHeroTitle: "સંસ્કાર માર્ગદર્શન અને પરામર્શ",
    contactHeroSubtitle: "શુભ મુહૂર્ત, વિધિ-વિધાન તેમજ યોગ્ય પુરોહિત પસંદગી માટે સંપર્ક કરો",
    contactFormTitle: "માર્ગદર્શન માટે સંપર્ક ફોર્મ",
    contactFormSubtitle: "જો આપ કોઈ વિશિષ્ટ સંસ્કારના શુભ મુહૂર્ત, સામગ્રી યાદી (હવન સામગ્રી) કે વૈદિક વિધિ અંગે માહિતી મેળવવા માંગતા હોવ, તો નીચેનું ફોર્મ ભરો.",
    contactLabelName: "પૂરું નામ (Full Name) *",
    contactPlaceholderName: "દા.ત. રમેશભાઈ શર્મા",
    contactLabelPhone: "મોબાઈલ નંબર (Phone) *",
    contactPlaceholderPhone: "+91 98765 43210",
    contactLabelEmail: "ઈમેલ સરનામું (Email) *",
    contactPlaceholderEmail: "yourname@example.com",
    contactLabelSanskar: "પસંદગીનો સંસ્કાર (Select Sanskar of Interest) *",
    contactSelectDefault: "-- સંસ્કાર પસંદ કરો --",
    contactLabelLocation: "શહેર / સ્થળ (City / Location) *",
    contactPlaceholderLocation: "દા.ત. અમદાવાદ, વડોદરા, સુરત...",
    contactLabelMessage: "આપનો સંદેશ અથવા પ્રશ્ન (મરજીયાત / Optional)",
    contactPlaceholderMessage: "મુહૂર્ત, સામગ્રી કે વિધિ અંગે આપનો પ્રશ્ન લખો...",
    contactSubmitBtn: "WhatsApp પર વિગતો મોકલો 💬",
    contactDirectWa: "અથવા સીધો WhatsApp પર સંપર્ક કરો:",
    contactAlertSuccess: "પૂછપરછ મોકલવા માટે WhatsApp ખુલી રહ્યું છે...",
    modalTitle: "કોને સંપર્ક કરવો છે?",
    modalSubtitle: "કૃપા કરીને WhatsApp પર પૂછપરછ મોકલવા માટે પસંદ કરો:",
    modalTithi: "તિથી આર્ય (Tithi Arya)",
    modalPriyanka: "પ્રિયંકા આર્ય (Priyanka Arya)"
  }
};
