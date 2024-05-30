# My Portfolio 👩‍🎨

_Welcome to my web developer portfolio!_<br><br>
Here, you'll find a selection of projects that highlight my passion for web development. They include freelance work, study assignments, and personal projects I've worked on during weekends. <br><br>
While, the portfolio is technically complete, I am still working on adding content to give you a better idea of my skills and expertise.<br><br> 
Enjoy!

## Demo

[My Portfolio]

## Tech stack

&nbsp;&nbsp;&nbsp;&nbsp;&check;&nbsp;&nbsp; VueJS<br>
&nbsp;&nbsp;&nbsp;&nbsp;&check;&nbsp;&nbsp; Vite<br>
&nbsp;&nbsp;&nbsp;&nbsp;&check;&nbsp;&nbsp; Vuelidate<br>
&nbsp;&nbsp;&nbsp;&nbsp;&check;&nbsp;&nbsp; EmailJS<br>
&nbsp;&nbsp;&nbsp;&nbsp;&check;&nbsp;&nbsp; SASS<br>
&nbsp;&nbsp;&nbsp;&nbsp;&check;&nbsp;&nbsp; GSAP<br>

## Feedback and Contributions

Contributions are always welcome! If you want to contribute:

```bash
# Clone the repository and create a new branch:
$ git checkout https://github.com/AlenaGM/alg -b name_for_new_branch

#  Make changes
#  Submit a pull request with a description of the changes
```

If you have any suggestions, critiques, or advice, please contact me via [email] 


## License
My Portfolio is open source - feel free to clone, modify, and enhance it for your purposes.

```bash
# Clone this repository
$ git clone https://github.com/AlenaGM/alg

# Go into the repository
$ cd https://github.com/AlenaGM/alg

# Install dependencies
$ npm install

# Run the app
$ npm run dev

# Compile and minify for Production
$ run build
```
 

   [My Portfolio]: <https://alg.netlify.app/>
   [email]: <mailto: alena.guillaume@yahoo.com />


   ***



1. Reverse‏ ‎linked‏ ‎list

2. Two ‎sum

3. Add‏ ‎two ‎numbers

4. Linked‏ ‎list ‎cycle

5. Reverse‏ ‎integer

6. Merge‏ ‎k ‎sorted‏ ‎lists

7. Binary ‎search

8. Guess ‎Number ‎Higher ‎or‏ ‎Lower

9. Group ‎anagrams

10. Get‏ ‎object‏ ‎field ‎and ‎return ‎its‏ ‎value

Функция ‎на‏ ‎вход ‎получает ‎два ‎параметра:

Объект‏ ‎любой‏ ‎вложенности.
Адрес ‎поля‏ ‎в ‎этом ‎объекте.
Если ‎в‏ ‎объекте ‎есть ‎поле‏ ‎с‏ ‎адресом ‎path, ‎необходимо‏ ‎вернуть ‎значение ‎этого‏ ‎поля. ‎Если‏ ‎такого‏ ‎поля ‎в ‎объекте‏ ‎нет ‎— ‎вернуть ‎undefined.

Пример‏ ‎входных ‎данных‏ ‎и‏ ‎результата:

const‏ ‎obj ‎= ‎{
  ‎name:‏ ‎'Masha',
  ‎birthday:‏ ‎{
    ‎year:‏ ‎1989,‏
    ‎month: ‎6,
    ‎day:‏ ‎23,
    ‎time:‏ ‎{
      ‎hours: ‎14,
      ‎minutes:‏ ‎34,‏ 
    ‎}
  ‎}‏
‎};
‎const ‎path1 ‎=‏ ‎'birthday.time.minutes';
‎const‏ ‎output1‏ ‎=‏ ‎getObjectField(obj, ‎path1);‏ ‎// ‎Результат‏ ‎— ‎34‏
‎const‏ ‎path2 ‎=‏ ‎'name.secondname';
‎const ‎output2 ‎= ‎getObjectField(obj,‏ ‎path2); ‎//‏ ‎Результат‏ ‎— ‎undefined
‎
Должно ‎корректно‏ ‎работать ‎в‏ ‎случае ‎пустого ‎объекта ‎и/или‏ ‎пустой‏ ‎строки ‎на‏ ‎входе.

11. Valid ‎Palindrome

12. Valid ‎Parentheses

13. Flatten

Функция ‎на‏ ‎вход ‎получает ‎массив‏ ‎с‏ ‎любыми ‎значениями ‎и‏ ‎любой ‎вложенности. ‎Необходимо‏ ‎вернуть ‎массив‏ ‎с‏ ‎уровнем ‎вложенности ‎1.

Примеры:

[1, [2, 3], ] ->‏ ‎[1, ‎2, ‎3, ‎4]‏
‎[1, ‎[4,‏ ‎[6],‏ ‎[]]]‏ ‎-> ‎[1, ‎4, ‎6]‏
‎[0, ‎'qwe{}',‏ ‎null, ‎{a:‏ ‎1},‏ ‎[1, ‎2, ‎3],‏ ‎, ‎[9,‏ ‎[8, ‎'a']], ‎[], ‎5,‏ ‎]‏ ‎-> ‎[0,‏ ‎'qwe{}', ‎null, ‎{a: ‎1},‏ ‎1, ‎2,‏ ‎3,‏ ‎9,‏ ‎8, ‎'a',‏ ‎5, ‎0]‏
‎
14. Fuzzy ‎search

Функция‏ ‎принимает‏ ‎два ‎параметра:

Строка‏ ‎str, ‎в ‎которой ‎нужно ‎сделать‏ ‎поиск.
Подстрока ‎substr,‏ ‎по‏ ‎которой ‎нужно ‎сделать ‎поиск‏ ‎в ‎str.
Примеры‏ ‎работы:

// fuzzySearch(substr, ‎str);
‎fuzzySearch('whdtgo', ‎'where‏ ‎did‏ ‎the ‎glass‏ ‎go'); ‎// ‎true
‎fuzzySearch('where‏ ‎did', ‎'where ‎did‏ ‎the‏ ‎glass ‎go'); ‎//‏ ‎true
‎fuzzySearch('wretg ‎g',‏ ‎'where ‎did‏ ‎the‏ ‎glass ‎go'); ‎//‏ ‎true
‎fuzzySearch('gdt', ‎'where ‎did‏ ‎the ‎glass‏ ‎go');‏ ‎//‏ ‎false
‎
Принцип ‎работы: ‎если‏ ‎в ‎str‏ ‎встречаются ‎все‏ ‎буквы‏ ‎из ‎substr ‎в‏ ‎том ‎же‏ ‎порядке, ‎в ‎котором ‎они‏ ‎в‏ ‎substr ‎—‏ ‎подходит, ‎подстрока ‎найдена. ‎Иначе‏ ‎не ‎подходит.

По‏ ‎такому‏ ‎принципу‏ ‎работает ‎поиск‏ ‎по ‎файлам,‏ ‎например, ‎в‏ ‎Visual‏ ‎Studio ‎Code:‏ ‎не ‎обязательно ‎вводить ‎в ‎поисковой‏ ‎строке ‎все‏ ‎буквы‏ ‎из ‎названия, ‎можно ‎пропустить.‏ ‎А ‎вот‏ ‎если ‎перепутать ‎порядок, ‎то‏ ‎уже‏ ‎не ‎найдёт.

15. Single‏ ‎number

16. Find ‎All ‎Anagrams ‎in‏ ‎a ‎String

17. Valid ‎Anagram

18. Top‏ ‎K‏ ‎Frequent ‎Words

19. Top ‎K‏ ‎Frequent ‎Elements

20. IQ ‎Test‏ ‎(find ‎numbers‏ ‎that‏ ‎differs ‎in ‎even/odd‏ ‎from ‎the ‎rest, ‎and‏ ‎return ‎its‏ ‎position)

Тут‏ ‎в‏ ‎целом ‎из ‎названия ‎понятно,‏ ‎что ‎нужно‏ ‎сделать, ‎поэтому‏ ‎приведу‏ ‎только ‎примеры:

iqTest('2 ‎4‏ ‎7 ‎8‏ ‎10'); ‎// ‎3
‎iqTest('1‏ ‎2‏ ‎1 ‎1');‏ ‎// ‎2
‎iqTest('5 ‎7‏ ‎1 ‎9‏ ‎3‏ ‎1‏ ‎8'); ‎//‏ ‎7
‎
Нужно‏ ‎найти ‎позицию‏ ‎числа,‏ ‎отличающегося ‎от‏ ‎остальных ‎по ‎чётности.

21. Longest ‎Increasing ‎Subsequence

22. Find‏ ‎Minimum ‎in‏ ‎Rotated‏ ‎Sorted ‎Array

23. Same ‎Tree

24. Symmetric ‎tree

25. Merge‏ ‎Intervals

26. Sum ‎Flatten

Почти‏ ‎как ‎Flatten ‎под ‎номером‏ ‎13.‏ ‎Функции ‎на‏ ‎вход ‎подаётся ‎так ‎же‏ ‎массив, ‎а ‎вернуть‏ ‎нужно‏ ‎сумму ‎всех ‎чисел‏ ‎из ‎массива. ‎Если‏ ‎строка ‎корректно‏ ‎преобразуется‏ ‎к ‎числу, ‎нужно‏ ‎это ‎число ‎тоже ‎посчитать.‏ ‎Если ‎не‏ ‎преобразуется‏ ‎—‏ ‎не ‎учитывать.

Примеры:

sumFlatten([1, ‎'2r', ‎[4,‏ ‎'y'], ‎'1',‏ ‎'6y', ‎[5,‏ ‎['3',‏ ‎'i8']]]); ‎// ‎22‏
‎sumFlatten([3, ‎6,‏ ‎'x2']); ‎// ‎9
‎sumFlatten([3,‏ ‎[1,‏ ‎6], ‎2,‏ ‎'1q']); ‎// ‎13
‎sumFlatten([1,‏ ‎2, ‎'3']);‏ ‎//‏ ‎6‏
‎
27. Remove ‎Subsequent‏ ‎Repeating ‎Symbols‏ ‎(AAAvvvvR ‎=>‏ ‎AvR)

Функция‏ ‎принимает ‎строку‏ ‎из ‎латиницы. ‎Нужно ‎вернуть ‎строку‏ ‎с ‎символами‏ ‎без‏ ‎дублей.

28. Shorten ‎Subsequent ‎Repeating ‎Symbols‏ ‎(AAAvvvvR ‎=>‏ ‎3A4vR)

Почти ‎как ‎в ‎предыдущей‏ ‎задаче,‏ ‎но ‎нужно‏ ‎не ‎просто ‎убрать ‎дублирование,‏ ‎а ‎сократить ‎с‏ ‎указанием‏ ‎количества: ‎трижды ‎встретившийся‏ ‎символ ‎'А' ‎превращается‏ ‎в ‎'3А'.‏ ‎Если‏ ‎символ ‎встречается ‎1‏ ‎раз ‎подряд, ‎то ‎ему‏ ‎не ‎нужно‏ ‎дописывать‏ ‎в‏ ‎начало ‎единичку.

29. Best ‎Time ‎to‏ ‎Buy ‎and‏ ‎Sell ‎Stock

30. Best‏ ‎Time‏ ‎to ‎Buy ‎and‏ ‎Sell ‎Stock‏ ‎II

31. Output ‎Every ‎Second

32. Spy ‎decorator

33. Delaying‏ ‎decorator

34. Debounce‏ ‎decorator

35. Throttle ‎decorator

36. Depth-first‏ ‎search

Поиск ‎и ‎обход ‎дерева‏ ‎в ‎глубину.

37. Breadth-first‏ ‎search

Поиск‏ ‎и‏ ‎обход ‎дерева‏ ‎в ‎ширину.‏ ‎Для ‎тестов‏ ‎ко‏ ‎всем ‎задачам‏ ‎на ‎деревья ‎сделала ‎себе ‎хэлпер‏ ‎для ‎генерации‏ ‎дерева‏ ‎— ‎это ‎не ‎есть‏ ‎задача, ‎но‏ ‎из-за ‎потребности ‎в ‎тестах‏ ‎получается‏ ‎так, ‎что‏ ‎помимо ‎самой ‎задачи ‎периодически‏ ‎решаешь ‎какую-то ‎дополнительную‏ ‎и‏ ‎лучше ‎понимаешь/запоминаешь.

38. Write ‎fetch‏ ‎with ‎X ‎retries‏ ‎on ‎failed‏ ‎request

Написать‏ ‎функцию, ‎которая ‎принимает‏ ‎два ‎параметра:

url, ‎на ‎который‏ ‎нужно ‎отправить‏ ‎запрос.
Количество‏ ‎попыток‏ ‎(ретраев) ‎запроса, ‎которое ‎нужно‏ ‎сделать, ‎если‏ ‎запрос ‎завершится‏ ‎с‏ ‎ошибкой. ‎По ‎умолчанию‏ ‎количество ‎ретраев‏ ‎можно ‎считать ‎5. ‎Или‏ ‎другим‏ ‎константным ‎числом,‏ ‎это ‎не ‎так ‎важно.
39. Balanced‏ ‎Binary ‎Tree

40. Serial‏ ‎Output‏ ‎(abc‏ ‎timer)

Есть ‎три‏ ‎функции ‎с‏ ‎таймерами:

function ‎funcA(callback)‏ ‎{‏ ‎setTimeout(() ‎=>‏ ‎callback('a'), ‎Math.random() ‎* ‎100); ‎}‏
‎function ‎funcB(callback)‏ ‎{‏ ‎setTimeout(() ‎=> ‎callback('b'), ‎Math.random()‏ ‎* ‎100);‏ ‎}
‎function ‎funcC(callback) ‎{‏ ‎setTimeout(()‏ ‎=> ‎callback('c'),‏ ‎Math.random() ‎* ‎100); ‎}‏
‎
Необходимо ‎написать ‎функцию,‏ ‎которая‏ ‎принимает ‎массив ‎из‏ ‎функций ‎выше ‎и‏ ‎вызывает ‎их‏ ‎в‏ ‎таком ‎же ‎порядке:

wait([funcA,‏ ‎funcB, ‎funcC]); ‎// ‎Должно‏ ‎вывести ‎'a',‏ ‎затем‏ ‎'b',‏ ‎затем ‎'c'.
‎
41. OneZero

Написать ‎функцию,‏ ‎которая ‎принимает‏ ‎две ‎строки,‏ ‎каждая‏ ‎из ‎которых ‎представляют‏ ‎собой ‎числа‏ ‎в ‎двоичной ‎системе ‎счисления.‏ ‎Числа‏ ‎представлены ‎последовательностью‏ ‎слов ‎без ‎пробелов, ‎обозначающих‏ ‎цифры ‎(0‏ ‎—‏ ‎zero,‏ ‎1 ‎—‏ ‎one). ‎Необходимо‏ ‎сравнить ‎эти‏ ‎два‏ ‎числа. ‎Примеры‏ ‎с ‎результатами, ‎которые ‎должна ‎вернуть‏ ‎функция:

onezero('oneone', ‎'onezerozero');‏ ‎//‏ ‎Должно ‎вернуть ‎'<'
‎onezero('oneonezerozero',‏ ‎'onezeroonezero'); ‎//‏ ‎Должно ‎вернуть ‎'>'
‎onezero('zero',‏ ‎'zero');‏ ‎// ‎Должно‏ ‎вернуть ‎'='
‎
42. Partition ‎Labels

43. Find‏ ‎maximum ‎intersection ‎of‏ ‎segments.‏ ‎The ‎maximum ‎number‏ ‎of ‎segments ‎that‏ ‎intersect ‎at‏ ‎one‏ ‎time

Написать ‎функцию, ‎которая‏ ‎принимает ‎массив ‎отрезков, ‎например,‏ ‎и ‎возвращает‏ ‎наиболее‏ ‎количество‏ ‎пересекающихся ‎отрезков. ‎Примеры:

(почему-то ‎синтаксис‏ ‎квадратных ‎скобок‏ ‎в ‎квадратных‏ ‎скобок‏ ‎съедается, ‎поэтому ‎вставила‏ ‎скрином)

44. Palindrome ‎Number

45. Roman‏ ‎to ‎Integer

46. Matrix ‎Diagonal ‎Sum

47. Find‏ ‎the‏ ‎Highest ‎Altitude

48. Search‏ ‎a ‎2D ‎Matrix

49. Search ‎in‏ ‎Rotated ‎Sorted‏ ‎Array

50. Search‏ ‎in‏ ‎Rotated ‎Sorted‏ ‎Array ‎II

51. Longest‏ ‎Repeating ‎Character‏ ‎Replacement

52. Sliding‏ ‎Window ‎Maximum

53. Sliding‏ ‎Window ‎Median

54. Longest ‎Common ‎Prefix

55. Length ‎of‏ ‎Last ‎Word

56. Power‏ ‎of‏ ‎Four

57. Longest ‎Substring ‎Without ‎Repeating‏ ‎Characters

58. Merge ‎Two‏ ‎Sorted ‎Lists

59. Remove ‎Duplicates ‎from‏ ‎Sorted‏ ‎Array

60. Palindrome ‎Linked‏ ‎List

61. Remove ‎Element

62. Implement ‎strStr()

63. Search ‎Insert‏ ‎Position

64. Ransom ‎Note

65. Reordered ‎Power‏ ‎of‏ ‎2

66. Plus ‎One

67. Sqrt(x)

68. Words ‎In‏ ‎Dictionary. ‎Тренировки ‎по‏ ‎алгоритмам ‎от‏ ‎Яндекса.‏ ‎Лекция ‎3: ‎«Множества».‏ ‎Задача ‎2. ‎Пропущенная ‎буква,‏ ‎словарь.

69. Is ‎Same‏ ‎Digits.‏ ‎Тренировки‏ ‎по ‎алгоритмам ‎от ‎Яндекса.‏ ‎Лекция ‎4:‏ ‎«Словари ‎и‏ ‎сортировка‏ ‎подсчётом». ‎Задача ‎1.‏ ‎Первое ‎из‏ ‎второго ‎перестановкой ‎цифр

70. Count ‎Beating‏ ‎Rooks.‏ ‎Тренировки ‎по‏ ‎алгоритмам ‎от ‎Яндекса. ‎Лекция‏ ‎4: ‎«Словари‏ ‎и‏ ‎сортировка‏ ‎подсчётом». ‎Задача‏ ‎2. ‎Ладьи.

71. Zero‏ ‎count. ‎Тренировки‏ ‎по‏ ‎алгоритмам ‎от‏ ‎Яндекса. ‎Лекция ‎5: ‎«Префиксные ‎суммы‏ ‎и ‎два‏ ‎указателя».‏ ‎Зачада ‎1.

72. Zero ‎intervals. ‎Тренировки‏ ‎по ‎алгоритмам‏ ‎от ‎Яндекса. ‎Лекция ‎5:‏ ‎«Префиксные‏ ‎суммы ‎и‏ ‎два ‎указателя». ‎Задача ‎2.

73. Count‏ ‎Pairs ‎A ‎and‏ ‎B.‏ ‎Тренировки ‎по ‎алгоритмам‏ ‎от ‎Яндекса. ‎Лекция‏ ‎5: ‎«Префиксные‏ ‎суммы‏ ‎и ‎два ‎указателя».‏ ‎Задача ‎3.

74. Football ‎Max ‎Pro‏ ‎Sum. ‎Тренировки‏ ‎по‏ ‎алгоритмам‏ ‎от ‎Яндекса. ‎Лекция ‎5:‏ ‎«Префиксные ‎суммы‏ ‎и ‎два‏ ‎указателя».‏ ‎Задача ‎4.

75. Merge. ‎Тренировки‏ ‎по ‎алгоритмам‏ ‎от ‎Яндекса. ‎Лекция ‎5:‏ ‎«Префиксные‏ ‎суммы ‎и‏ ‎два ‎указателя». ‎Задача ‎5.

76. Search‏ ‎Min ‎Day‏ ‎Count.‏ ‎Тренировки‏ ‎по ‎алгоритмам‏ ‎от ‎Яндекса.‏ ‎Лекция ‎6:‏ ‎«Бинарный‏ ‎поиск». ‎Задача‏ ‎2.

77. Stickers ‎Count. ‎Тренировки ‎по ‎алгоритмам‏ ‎от ‎Яндекса.‏ ‎Лекция‏ ‎6: ‎«Бинарный ‎поиск». ‎Задача‏ ‎3.

78. Find ‎First‏ ‎Index. ‎Тренировки ‎по ‎алгоритмам‏ ‎от‏ ‎Яндекса. ‎Лекция‏ ‎6: ‎«Бинарный ‎поиск». ‎Задача‏ ‎4.

79. Count ‎X. ‎Тренировки‏ ‎по‏ ‎алгоритмам ‎от ‎Яндекса.‏ ‎Лекция ‎6: ‎«Бинарный‏ ‎поиск». ‎Задача‏ ‎5.

80. Online‏ ‎Time. ‎Тренировки ‎по‏ ‎алгоритмам ‎от ‎Яндекса. ‎Лекция‏ ‎7: ‎«Сортировка‏ ‎событий».‏ ‎Задача‏ ‎2.

81. Boss ‎Counters. ‎Тренировки ‎по‏ ‎алгоритмам ‎от‏ ‎Яндекса. ‎Лекция‏ ‎7:‏ ‎«Сортировка ‎событий». ‎Задача‏ ‎3.

82. Evaluate ‎Reverse‏ ‎Polish ‎Notation
