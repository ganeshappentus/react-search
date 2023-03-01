import "regenerator-runtime/runtime";
import React, { useEffect, useState } from "react";
import reactLogo from "./assets/LOGO.png";
import { DebounceInput } from "react-debounce-input";

import "./App.css";
import axios from "axios";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Speech from "react-speech";

function App() {
  const [text, setText] = useState("");
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    alert("Browser doesn't support speech recognition.");
  }

  useEffect(() => {
    setText(transcript);
  }, [transcript]);

  return (
    <div className="App">
      <div>
        <img src={reactLogo} />
      </div>
      <div>
        <h3>
          This is a Translation Demo App developed by Appentus Technologies Pvt.
          Ltd. for Parliament of India.
        </h3>
      </div>

      <div>
        <DebounceInput
          minLength={2}
          debounceTimeout={500}
          placeholder="Search here..."
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div>
        <p>Microphone: {listening ? "on" : "off"}</p>
        <button onClick={SpeechRecognition.startListening}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
        <p>{transcript}</p>
      </div>

      <div>
        <h3>Hindi</h3>
        <Convert text={text} language={"hi"}></Convert>
      </div>
      <div>
        <h3>Assamese</h3>
        <Convert text={text} language={"as"}></Convert>
      </div>
      <div>
        <h3>Bengali</h3>
        <Convert text={text} language={"bn"}></Convert>
      </div>
      <div>
        <h3>Gujarati</h3>
        <Convert text={text} language={"gu"}></Convert>
      </div>
      <div>
        <h3>Marathi</h3>
        <Convert text={text} language={"mr"}></Convert>
      </div>
      <div>
        <h3>Tamil</h3>
        <Convert text={text} language={"ta"}></Convert>
      </div>
      <div>
        <h3>Telugu</h3>
        <Convert text={text} language={"te"}></Convert>
      </div>
      <div>
        <h3>Kannada</h3>
        <Convert text={text} language={"kn"}></Convert>
      </div>
      <div>
        <h3>Malayalam</h3>
        <Convert text={text} language={"ml"}></Convert>
      </div>
      <div>
        <h3>Oriya</h3>
        <Convert text={text} language={"or"}></Convert>
      </div>
      <div>
        <h3>Punjabi</h3>
        <Convert text={text} language={"pa"}></Convert>
      </div>
    </div>
  );
}

const Convert = ({ text, language }) => {
  const [convertedText, setConvertedText] = useState("");
  const [result, setResult] = useState("");

  const article = [
    `गरीबी एक ऐसी स्थिति है जिसमें एक व्यक्ति या परिवार के पास भोजन, आश्रय, कपड़े, स्वास्थ्य देखभाल और शिक्षा जैसी बुनियादी जरूरतों को पूरा करने के लिए वित्तीय संसाधनों का अभाव होता है। गरीबी एक व्यापक समस्या है जो दुनिया भर में लाखों लोगों को प्रभावित करती है, खासकर विकासशील देशों में। यह आर्थिक असमानता, बेरोजगारी, कम मजदूरी, शिक्षा तक पहुंच की कमी और भेदभाव जैसे विभिन्न कारकों के कारण होता है।

गरीबी का व्यक्तियों, परिवारों और बड़े पैमाने पर समाज पर कई नकारात्मक प्रभाव पड़ते हैं। यह स्वास्थ्य सेवा, शिक्षा और स्वच्छ पानी जैसी बुनियादी सेवाओं तक लोगों की पहुंच को सीमित करता है, जिससे खराब स्वास्थ्य परिणाम और कम जीवन प्रत्याशा होती है। गरीबी से कुपोषण, शिशु मृत्यु दर और संक्रामक रोगों का खतरा भी बढ़ जाता है, जो जानलेवा हो सकता है।

गरीबी का व्यक्तियों और परिवारों पर सामाजिक और मनोवैज्ञानिक प्रभाव भी पड़ता है। यह उनके मानसिक स्वास्थ्य और कल्याण को प्रभावित करते हुए सामाजिक बहिष्कार, अलगाव और कम आत्मसम्मान का कारण बन सकता है। गरीबी व्यक्तिगत और व्यावसायिक विकास के लिए लोगों के अवसरों को भी सीमित करती है, जिससे समाज में सकारात्मक योगदान देने की उनकी क्षमता में बाधा आती है।

गरीबी को दूर करने के लिए, सरकारों, गैर-सरकारी संगठनों और व्यक्तियों को आर्थिक विकास को बढ़ावा देने, असमानता को कम करने, शिक्षा और स्वास्थ्य सेवा तक पहुंच बढ़ाने और सामाजिक समावेश को बढ़ावा देने वाली रणनीतियों को लागू करने के लिए मिलकर काम करने की आवश्यकता है। इसमें कमजोर परिवारों को वित्तीय सहायता प्रदान करना, शिक्षा और कौशल विकास में निवेश करना, नौकरी के अवसर पैदा करना और लैंगिक समानता और सामाजिक न्याय को बढ़ावा देना शामिल है।

अंत में, गरीबी एक व्यापक समस्या है जो दुनिया भर में लाखों लोगों को प्रभावित करती है, व्यक्तिगत और व्यावसायिक विकास के लिए बुनियादी जरूरतों और अवसरों तक पहुंचने की उनकी क्षमता को सीमित करती है। गरीबी को दूर करने के लिए, हमें आर्थिक विकास को बढ़ावा देने, असमानता को कम करने और सामाजिक समावेश और न्याय को बढ़ावा देने वाली रणनीतियों को लागू करने के लिए मिलकर काम करने की आवश्यकता है। ऐसा करके हम एक ऐसी दुनिया बना सकते हैं जहां हर किसी को फलने-फूलने और अपनी पूरी क्षमता तक पहुंचने का अवसर मिले।`,
    `મહિલા સશક્તિકરણ એ મહિલાઓને જીવનના તમામ પાસાઓમાં સંપૂર્ણ રીતે ભાગ લેવા સક્ષમ બનાવવા માટે તકો, સંસાધનો અને નિર્ણય લેવાની શક્તિની સમાન પહોંચ આપવાની પ્રક્રિયાનો ઉલ્લેખ કરે છે. લિંગ સમાનતા હાંસલ કરવા અને ટકાઉ વિકાસને પ્રોત્સાહન આપવા માટે મહિલાઓનું સશક્તિકરણ મહત્વપૂર્ણ છે.

મહિલા સશક્તિકરણના મહિલાઓ અને સમાજ બંને માટે ઘણા ફાયદા છે. જ્યારે મહિલાઓ સશક્ત થાય છે, ત્યારે તેઓ કાર્યબળમાં વધુ સારી રીતે ભાગ લેવા, વ્યવસાય શરૂ કરવા અને આર્થિક વૃદ્ધિમાં યોગદાન આપવા માટે વધુ સક્ષમ બને છે. અર્થવ્યવસ્થામાં મહિલાઓની ભાગીદારી પણ ઘરની વધુ આવક તરફ દોરી જાય છે, જેનો લાભ સમગ્ર પરિવારને મળે છે.

મહિલાઓને સશક્તિકરણ કરવાથી સ્વાસ્થ્ય પરિણામો પર પણ સકારાત્મક અસર પડે છે, કારણ કે જે મહિલાઓને શિક્ષણ અને આરોગ્યસંભાળની પહોંચ હોય છે તેઓ પોતાની અને તેમના પરિવારોની વધુ સારી રીતે કાળજી લેવામાં સક્ષમ હોય છે. જ્યારે મહિલાઓ સશક્ત બને છે, ત્યારે તેઓ રાજકીય, આર્થિક અને સામાજિક ક્ષેત્રો સહિત તમામ સ્તરે નિર્ણય લેવાની પ્રક્રિયામાં વધુ સારી રીતે ભાગ લેવા સક્ષમ બને છે. આ સામાજિક ન્યાયને પ્રોત્સાહન આપે છે અને સુનિશ્ચિત કરે છે કે નીતિઓ અને નિર્ણયો સમાવિષ્ટ છે અને વિવિધ પરિપ્રેક્ષ્યોના પ્રતિનિધિ છે.`,
    `பட்ஜெட் என்பது ஒரு தனிநபரின் அல்லது நிறுவனத்தின் வருமானம் மற்றும் செலவுகளை ஒரு குறிப்பிட்ட காலத்தில், பொதுவாக ஒரு வருடத்தில் கோடிட்டுக் காட்டும் நிதித் திட்டமாகும். நிதிகளை நிர்வகிப்பதற்கும், செலவினங்களைக் கண்காணிப்பதற்கும், செலவுகளை ஈடுகட்ட வருமானம் போதுமானதாக இருப்பதை உறுதி செய்வதற்கும் பட்ஜெட் ஒரு இன்றியமையாத கருவியாகும்.

வரவு செலவுத் திட்டத்தை உருவாக்குவது என்பது வருமான ஆதாரங்கள் மற்றும் அனைத்து செலவினங்களையும் கண்டறிவதை உள்ளடக்கியது, வாடகை அல்லது அடமானக் கொடுப்பனவுகள், பயன்பாடுகள் மற்றும் காப்பீடு போன்ற நிலையான செலவுகள், அத்துடன் மளிகை பொருட்கள், பொழுதுபோக்கு மற்றும் போக்குவரத்து செலவுகள் போன்ற மாறக்கூடிய செலவுகள் உட்பட. அனைத்து செலவுகளும் கண்டறியப்பட்டவுடன், பட்ஜெட் உபரி அல்லது பற்றாக்குறை உள்ளதா என்பதைத் தீர்மானித்து, அதற்கேற்ப செலவை சரிசெய்யலாம்.

ஓய்வூதியத்திற்கான சேமிப்பு, கடனை செலுத்துதல் அல்லது வீடு வாங்குதல் போன்ற நிதி இலக்குகளை அடைவதற்கு பட்ஜெட் அவசியம். தனிநபர்கள் மற்றும் நிறுவனங்களுக்கு எதிர்பாராத செலவுகள் மற்றும் அவசரநிலைகளை நிர்வகிக்கவும் இது உதவும்.

வெற்றிகரமான வரவுசெலவுத் திட்டத்திற்கான பல குறிப்புகள் உள்ளன, இதில் செலவுகளை தவறாமல் கண்காணிப்பது, செலவுகளுக்கு முன்னுரிமை அளிப்பது மற்றும் யதார்த்தமான இலக்குகளை அமைப்பது ஆகியவை அடங்கும். கூடுதலாக, தற்போதைய வருமானம் மற்றும் செலவுகளுடன் சீரமைக்கப்படுவதை உறுதிசெய்ய, வரவுசெலவுத் திட்டத்தை தவறாமல் மதிப்பாய்வு செய்து சரிசெய்ய வேண்டியது அவசியம்.

ஒட்டுமொத்தமாக, பட்ஜெட்டை உருவாக்குவதும் பின்பற்றுவதும் ஒரு முக்கியமான நிதி மேலாண்மை கருவியாகும், இது தனிநபர்கள் மற்றும் நிறுவனங்களுக்கு அவர்களின் நிதி இலக்குகளை அடையவும், கடனைத் தவிர்க்கவும் மற்றும் அவர்களின் நிதி ஸ்திரத்தன்மையை மேம்படுத்தவும் உதவும்.`,
    `ਗਰੀਬੀ ਇੱਕ ਅਜਿਹੀ ਸਥਿਤੀ ਹੈ ਜਿਸ ਵਿੱਚ ਇੱਕ ਵਿਅਕਤੀ ਜਾਂ ਪਰਿਵਾਰ ਕੋਲ ਆਪਣੀਆਂ ਬੁਨਿਆਦੀ ਲੋੜਾਂ ਜਿਵੇਂ ਕਿ ਭੋਜਨ, ਆਸਰਾ, ਕੱਪੜੇ, ਸਿਹਤ ਸੰਭਾਲ ਅਤੇ ਸਿੱਖਿਆ ਨੂੰ ਪੂਰਾ ਕਰਨ ਲਈ ਵਿੱਤੀ ਸਰੋਤਾਂ ਦੀ ਘਾਟ ਹੈ। ਗਰੀਬੀ ਇੱਕ ਵਿਆਪਕ ਸਮੱਸਿਆ ਹੈ ਜੋ ਵਿਸ਼ਵ ਭਰ ਵਿੱਚ ਲੱਖਾਂ ਲੋਕਾਂ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਦੀ ਹੈ, ਖਾਸ ਕਰਕੇ ਵਿਕਾਸਸ਼ੀਲ ਦੇਸ਼ਾਂ ਵਿੱਚ। ਇਹ ਆਰਥਿਕ ਅਸਮਾਨਤਾ, ਬੇਰੁਜ਼ਗਾਰੀ, ਘੱਟ ਉਜਰਤਾਂ, ਸਿੱਖਿਆ ਤੱਕ ਪਹੁੰਚ ਦੀ ਘਾਟ, ਅਤੇ ਵਿਤਕਰੇ ਵਰਗੇ ਵੱਖ-ਵੱਖ ਕਾਰਕਾਂ ਕਰਕੇ ਹੁੰਦਾ ਹੈ।

    ਗਰੀਬੀ ਦੇ ਵਿਅਕਤੀਆਂ, ਪਰਿਵਾਰਾਂ ਅਤੇ ਸਮਾਜ 'ਤੇ ਬਹੁਤ ਸਾਰੇ ਮਾੜੇ ਪ੍ਰਭਾਵ ਹੁੰਦੇ ਹਨ। ਇਹ ਸਿਹਤ ਸੰਭਾਲ, ਸਿੱਖਿਆ, ਅਤੇ ਸਾਫ਼ ਪਾਣੀ ਵਰਗੀਆਂ ਬੁਨਿਆਦੀ ਸੇਵਾਵਾਂ ਤੱਕ ਪਹੁੰਚ ਕਰਨ ਦੀ ਲੋਕਾਂ ਦੀ ਯੋਗਤਾ ਨੂੰ ਸੀਮਤ ਕਰਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਸਿਹਤ ਦੇ ਮਾੜੇ ਨਤੀਜੇ ਨਿਕਲਦੇ ਹਨ ਅਤੇ ਘੱਟ ਉਮਰ ਦੀ ਸੰਭਾਵਨਾ ਹੁੰਦੀ ਹੈ। ਗਰੀਬੀ ਕੁਪੋਸ਼ਣ, ਬਾਲ ਮੌਤ ਦਰ ਅਤੇ ਛੂਤ ਦੀਆਂ ਬਿਮਾਰੀਆਂ ਦੇ ਜੋਖਮ ਨੂੰ ਵੀ ਵਧਾਉਂਦੀ ਹੈ, ਜੋ ਘਾਤਕ ਹੋ ਸਕਦੀਆਂ ਹਨ।
    
    ਗਰੀਬੀ ਦਾ ਵਿਅਕਤੀਆਂ ਅਤੇ ਪਰਿਵਾਰਾਂ 'ਤੇ ਸਮਾਜਿਕ ਅਤੇ ਮਨੋਵਿਗਿਆਨਕ ਪ੍ਰਭਾਵ ਵੀ ਪੈਂਦਾ ਹੈ। ਇਹ ਸਮਾਜਿਕ ਅਲਹਿਦਗੀ, ਅਲੱਗ-ਥਲੱਗ ਅਤੇ ਘੱਟ ਸਵੈ-ਮਾਣ ਦਾ ਕਾਰਨ ਬਣ ਸਕਦਾ ਹੈ, ਜਿਸ ਨਾਲ ਉਨ੍ਹਾਂ ਦੀ ਮਾਨਸਿਕ ਸਿਹਤ ਅਤੇ ਤੰਦਰੁਸਤੀ ਪ੍ਰਭਾਵਿਤ ਹੋ ਸਕਦੀ ਹੈ। ਗਰੀਬੀ ਲੋਕਾਂ ਦੇ ਨਿੱਜੀ ਅਤੇ ਪੇਸ਼ੇਵਰ ਵਿਕਾਸ ਦੇ ਮੌਕਿਆਂ ਨੂੰ ਵੀ ਸੀਮਤ ਕਰਦੀ ਹੈ, ਸਮਾਜ ਵਿੱਚ ਸਕਾਰਾਤਮਕ ਯੋਗਦਾਨ ਪਾਉਣ ਦੀ ਉਹਨਾਂ ਦੀ ਸਮਰੱਥਾ ਨੂੰ ਰੋਕਦੀ ਹੈ।
    
    ਗਰੀਬੀ ਨੂੰ ਦੂਰ ਕਰਨ ਲਈ, ਸਰਕਾਰਾਂ, ਗੈਰ-ਸਰਕਾਰੀ ਸੰਸਥਾਵਾਂ, ਅਤੇ ਵਿਅਕਤੀਆਂ ਨੂੰ ਆਰਥਿਕ ਵਿਕਾਸ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਨ, ਅਸਮਾਨਤਾ ਨੂੰ ਘਟਾਉਣ, ਸਿੱਖਿਆ ਅਤੇ ਸਿਹਤ ਸੰਭਾਲ ਤੱਕ ਪਹੁੰਚ ਵਧਾਉਣ, ਅਤੇ ਸਮਾਜਿਕ ਸ਼ਮੂਲੀਅਤ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਨ ਵਾਲੀਆਂ ਰਣਨੀਤੀਆਂ ਨੂੰ ਲਾਗੂ ਕਰਨ ਲਈ ਮਿਲ ਕੇ ਕੰਮ ਕਰਨ ਦੀ ਲੋੜ ਹੈ। ਇਸ ਵਿੱਚ ਕਮਜ਼ੋਰ ਪਰਿਵਾਰਾਂ ਨੂੰ ਵਿੱਤੀ ਸਹਾਇਤਾ ਪ੍ਰਦਾਨ ਕਰਨਾ, ਸਿੱਖਿਆ ਅਤੇ ਹੁਨਰ ਵਿਕਾਸ ਵਿੱਚ ਨਿਵੇਸ਼ ਕਰਨਾ, ਨੌਕਰੀ ਦੇ ਮੌਕੇ ਪੈਦਾ ਕਰਨਾ ਅਤੇ ਲਿੰਗ ਸਮਾਨਤਾ ਅਤੇ ਸਮਾਜਿਕ ਨਿਆਂ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਨਾ ਸ਼ਾਮਲ ਹੈ।
    
    ਸਿੱਟੇ ਵਜੋਂ, ਗਰੀਬੀ ਇੱਕ ਵਿਆਪਕ ਸਮੱਸਿਆ ਹੈ ਜੋ ਦੁਨੀਆ ਭਰ ਦੇ ਲੱਖਾਂ ਲੋਕਾਂ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਦੀ ਹੈ, ਬੁਨਿਆਦੀ ਲੋੜਾਂ ਅਤੇ ਨਿੱਜੀ ਅਤੇ ਪੇਸ਼ੇਵਰ ਵਿਕਾਸ ਲਈ ਮੌਕਿਆਂ ਤੱਕ ਪਹੁੰਚ ਕਰਨ ਦੀ ਉਹਨਾਂ ਦੀ ਯੋਗਤਾ ਨੂੰ ਸੀਮਤ ਕਰਦੀ ਹੈ। ਗਰੀਬੀ ਨੂੰ ਦੂਰ ਕਰਨ ਲਈ, ਸਾਨੂੰ ਆਰਥਿਕ ਵਿਕਾਸ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਨ, ਅਸਮਾਨਤਾ ਨੂੰ ਘਟਾਉਣ, ਅਤੇ ਸਮਾਜਿਕ ਸ਼ਮੂਲੀਅਤ ਅਤੇ ਨਿਆਂ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਨ ਵਾਲੀਆਂ ਰਣਨੀਤੀਆਂ ਨੂੰ ਲਾਗੂ ਕਰਨ ਲਈ ਮਿਲ ਕੇ ਕੰਮ ਕਰਨ ਦੀ ਲੋੜ ਹੈ। ਅਜਿਹਾ ਕਰਨ ਨਾਲ, ਅਸੀਂ ਇੱਕ ਅਜਿਹੀ ਦੁਨੀਆ ਬਣਾ ਸਕਦੇ ਹਾਂ ਜਿੱਥੇ ਹਰ ਕਿਸੇ ਨੂੰ ਵੱਧਣ-ਫੁੱਲਣ ਅਤੇ ਆਪਣੀ ਪੂਰੀ ਸਮਰੱਥਾ ਤੱਕ ਪਹੁੰਚਣ ਦਾ ਮੌਕਾ ਮਿਲੇ।`,
    `দারিদ্র্য হল এমন একটি অবস্থা যেখানে একজন ব্যক্তি বা পরিবারের তাদের মৌলিক চাহিদা যেমন খাদ্য, বাসস্থান, বস্ত্র, স্বাস্থ্যসেবা এবং শিক্ষা পূরণের জন্য আর্থিক সংস্থান নেই। দারিদ্র্য একটি বিস্তৃত সমস্যা যা বিশ্বব্যাপী লক্ষ লক্ষ মানুষকে প্রভাবিত করে, বিশেষ করে উন্নয়নশীল দেশগুলিতে। এটি অর্থনৈতিক বৈষম্য, বেকারত্ব, কম মজুরি, শিক্ষার সুযোগের অভাব এবং বৈষম্যের মতো বিভিন্ন কারণের কারণে ঘটে।

    দারিদ্র্য ব্যক্তি, পরিবার এবং বৃহত্তর সমাজের উপর অসংখ্য নেতিবাচক প্রভাব ফেলে। এটি স্বাস্থ্যসেবা, শিক্ষা এবং বিশুদ্ধ পানির মতো মৌলিক পরিষেবাগুলি অ্যাক্সেস করার জনগণের ক্ষমতাকে সীমিত করে, যার ফলে স্বাস্থ্যের খারাপ ফলাফল এবং কম আয়ু হয়। দারিদ্র্য অপুষ্টি, শিশুমৃত্যু এবং সংক্রামক রোগের ঝুঁকি বাড়ায়, যা মারাত্মক হতে পারে।
    
    ব্যক্তি এবং পরিবারের উপর দারিদ্র্যের সামাজিক ও মানসিক প্রভাব রয়েছে। এটি সামাজিক বর্জন, বিচ্ছিন্নতা এবং নিম্ন আত্ম-সম্মানের দিকে নিয়ে যেতে পারে, যা তাদের মানসিক স্বাস্থ্য এবং সুস্থতাকে প্রভাবিত করে। দারিদ্র ব্যক্তি ও পেশাগত উন্নয়নের জন্য মানুষের সুযোগ সীমিত করে, সমাজে ইতিবাচকভাবে অবদান রাখার সম্ভাবনাকে বাধাগ্রস্ত করে।
    
    দারিদ্র্য মোকাবেলা করার জন্য, সরকার, বেসরকারি সংস্থা এবং ব্যক্তিদের একসঙ্গে কাজ করতে হবে এমন কৌশল বাস্তবায়নের জন্য যা অর্থনৈতিক প্রবৃদ্ধি, বৈষম্য হ্রাস, শিক্ষা ও স্বাস্থ্যসেবার অ্যাক্সেস বৃদ্ধি করে এবং সামাজিক অন্তর্ভুক্তি প্রচার করে। এর মধ্যে রয়েছে দুর্বল পরিবারকে আর্থিক সহায়তা প্রদান, শিক্ষা ও দক্ষতা উন্নয়নে বিনিয়োগ, চাকরির সুযোগ সৃষ্টি এবং লিঙ্গ সমতা ও সামাজিক ন্যায়বিচারের প্রচার।
    
    উপসংহারে, দারিদ্র্য একটি বিস্তৃত সমস্যা যা বিশ্বব্যাপী লক্ষ লক্ষ মানুষকে প্রভাবিত করে, তাদের মৌলিক চাহিদা এবং ব্যক্তিগত ও পেশাগত উন্নয়নের সুযোগগুলি অ্যাক্সেস করার ক্ষমতা সীমিত করে। দারিদ্র্য মোকাবেলায়, অর্থনৈতিক প্রবৃদ্ধি, বৈষম্য হ্রাস এবং সামাজিক অন্তর্ভুক্তি ও ন্যায়বিচারকে উন্নীত করে এমন কৌশল বাস্তবায়নের জন্য আমাদের একসঙ্গে কাজ করতে হবে। এটি করার মাধ্যমে, আমরা এমন একটি বিশ্ব তৈরি করতে পারি যেখানে প্রত্যেকের উন্নতির এবং তাদের পূর্ণ সম্ভাবনায় পৌঁছানোর সুযোগ রয়েছে।`,
  ];

  useEffect(() => {
    if (text != "") {
      const response = axios
        .post(
          "https://translation.googleapis.com/language/translate/v2",
          {},
          {
            params: {
              q: text,
              target: language,
              key: "AIzaSyASWiTxATD_-wH5M6ZsUrUHveTl6Mq4Sxo",
            },
          }
        )
        .then((response) => {
          setConvertedText(response.data.data.translations[0].translatedText);
          const text = response.data.data.translations[0].translatedText;
          if (text) {
            for (let i = 0; i < article.length; i++) {
              const element = article[i];
              if (element.includes(text)) {
                setResult(element);
                return;
              } else {
                setResult(`${text} was not found`);
              }
            }
          }
        })
        .catch((err) => {
          setConvertedText("Translation error.");
          console.log("Translation error.");
        });
    }
  }, [text, language]);

  return (
    <div>
      {result}
      {/* <Speech
        displayText={"play"}
        text={convertedText}
        voice="Google UK English Female"
      /> */}
    </div>
  );
};

export default App;
