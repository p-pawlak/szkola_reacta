# 1. Modyfikowalny button
Napisz komponent przycisku Button. Ale nie będzie to taki zwykły przycisk - będzie posiadał pewnie niezwykłe właściwości ;) Do stworzenia tego komponentu skorzystaj z tagu button, w taki sposób, aby można było przekazać props label, który będzie wyświetlał jego etykietkę.

Poza tym komponent powinien przyjmować props bgColor oraz color, które będą odpowiednio zmieniały kolor tła oraz kolor etykiety. Kolory powinny być zdefiniowane jako słownik w komponencie, czyli zamiast hex przekazujemy string np. red. Kolory możesz pobrać z palety kolorów: https://flatuicolors.com/

# 2. Input i Textarea
Przygotuj komponenty Input oraz Textarea, które podobnie jak komponent Button przyjmą propsy bgColor dla tła oraz color dla koloru wpisywanego tekstu. Dodatkowo te komponenty powinny mieć propsy, które pozwolą na zmianę obramowania: borderSize, borderRadius, borderColor.

# 3. Eksport komponentów Button, Input i Textarea
Mając przygotowane komponenty Button, Input oraz Textarea stwórz folder Form, w którym się znajdą, a następnie przygotuj plik index.js, w którym zdefiniujesz eksporty. Eksporty powinny być tak zdefiniowane, abym w każdym miejscu aplikacji mógł skorzystać z importu:
import { Button, Input, Textarea } from 'components/Form';

# 4. Komponent Card
Przygotuj component Card podobny do tego. Możesz pominąć trzy kropki po prawej stronie. Ikonki można również pominąć, a rozwijaną treść dodatkową możesz pokazywać za pomocą propsa showMore, który będzie przyjmował wartość logiczną np.: 
```javascript
<Card title="Shrim and Chorizo Paella" intro="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like." showMore content="Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes...." />
```

# 5. Przygotuj menu nawigacyjne
Napisz komponenty odpowiedzialne za pokazywanie menu po lewej stronie aplikacji. Stwórz komponenty Menu oraz MenuLink, aby stosować je w następujący sposób:

```javascript
<Menu>
  <MenuLink to="/">Home</MenuLink>
  <MenuLink to="/about">About</MenuLink>
  <MenuLink to="/contact" isActive>Contact</MenuLink>
  <MenuLink to="/posts">Posts</MenuLink>
</Menu>
```

Jeśli komponent MenuLink posiada propsa isActive to znaczy, że trzeba wyróżnić etykietę np. czerwonym kolorem.

# 6. Lista pracowników
Stwórz component Employees, który będzie się składał z dwóch kolumn. Lewa będzie zawierała informacje o pracowniku takie jak imię i nazwisko, natomiast prawa będzie z czasem wyświetlała informacje bardziej szczegółowe (rozwiwniemy to zadanie w kolejnych tygodniach). Pracowników możesz przechowywać w tablicy z obiekatmi np. data i przekazywać do komponentu Employees.

Po kliknięciu w imię i nazwisko, w kolumnie po prawej stronie pojawiają się szczegółowe informacje o pracowniku jak wiek, płaca, stanowisko.

Wszystko ma działać bez routingu.
