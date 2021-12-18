/*********************************************************************
* @function      : dotLess(string)
* @purpose       : Removes dots (tanqeet) from Arabic text
* @version       : 1.01
* @author        : Mohsen Alyafei
* @date          : 18 Dec 2021
* @Licence       : MIT
* @param         : {string} Arabic String to Process
* @returns       : {string} The Arabic Text without dots (tanqeet)
**********************************************************************
Notes: Only dots from dotty letters are removed
       Tashkeel signs and Tahmeez letters are maintained.
**********************************************************************/
function dotLess(str) {
str = str.split(" ");
for (let i=0; i<str.length; i++) {
let pos,char,newWord="", oneWord= [...str[i]], size= oneWord.length-1;
for (let j=0; j<=size; j++) {                                    // one word
newChar=char=oneWord[j];                                         // default newChar same as current char
if ((pos = 'ةبتثجخذزشضظغفقني'.indexOf(char))!==-1) {            // we found our dotty char
    newChar='هٮٮٮححدرسصطعڡٯٮٮ'[pos];                            // change it
    if (j===size || (j<=size && !/[ء-غف-ي]/.test(oneWord[j+1]))) // is next char non-Arabic letter?
    char=="ي"?newChar="ى" : char=="ن" && (newChar="ں");          // check for "ي" and "ن" and change them
}
newWord+=newChar;  // create word
}
str[i]=newWord;    // change word
}
return str.join(" ");
}
// *=======================================================


//===================================
//             Test Cases
//===================================
console.log(dotLess("ظهرت في جنوب شبه الجزيرة العربية في اليمن الكتابة الحميرية المعروفة بخط المسند المختلفة في القواعد والتصريف عن اللغة العربية تحدثًا وكتابة، تزامن ظهور هذا الخط والكتابة مع ظهور مملكة سبأ قبل القرن العاشر قبل الميلاد ثم توقف استخدام هذا الخط مع القرن السابع الميلادي حيث كان لظهور العصر الإسلامي اثر كبير في اندثار الاستخدام اليومي لهذه اللغة عند معظم الحميريين، واصبحت يكتبون باللغة العربية المكتوبة بلغة قريش والتي تطورت بدورها أيضا بعد تنقيطها ببعض النقاط والحركات المميزة.ومع عدم اخذ اللغوين باللسان الحميري ولغاته (السامية الجنوبية) بشقيها الشرقي والغربي، هناك اعتقاد مبني على الدراسات والبحوث العلمية بأن الأبجدية العربية تطورت من النبطية أو من السريانية وهو التصور الأقوى. الجدول التالي يظهر التطورات الخاضعة لشكل الأحرف من المنشأ الآرامي إلى الأشكال النبطية والسريانية. وقد تم وضع العربية بالمنتصف للتوضيح ولكي لايشير إلى التطور الزمني."));
console.log(dotLess("معدي انسان"));
console.log(dotLess("في"));
console.log(dotLess("الحميريين. الحميريين"));
console.log(dotLess("انسان؟"));
console.log(dotLess('"انسانَ"'));
console.log(dotLess('حِسَابٌ وَحِسَابًا مِنْ ثَلَاثُمِئَةِ رِيَالٍ قَطَرِيٍّ'));
