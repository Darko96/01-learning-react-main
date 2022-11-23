Assignmnet 2

- Kreirati novu Filter komponentu
- Trebalo bi slusati dogadjaj kada korisnik izabere neku od godina
- Takodje bi trebalo dodati ExpenseFilter komponentu unutar Expenses komponente
- Naravno trebace nam novi div da bude omotac oko te komponente i Card komponente

- Onda kada imamo komponentu, trebalo bi dovuci trenutnu godinu tj podatke iz  
  ExpenseFilter komponente i sacuvati te podatke unutar stejta
- Za sad ne treba nista da updejtujemo, samo treba da slusamo dogadjaj i onda da
  prosledimo podatke ka roditeljskoj komponenti (Expenses).
- I na kraju treba da sacuvamo podatke u state.

Assignmnet 3

- Trebalo bi napraviti da radi deo sa biranjem godine
- Tako da kada izaberemo zeljenu godinu
  Prikazu se samo stavke koje su se desile u toj godini.

Hint:

1. Mogu koristit filter metodu da kreiram novi niz sa elementima koji zadovoljavaju uslov.
2. Ne treba previse komplikovati, ne treba menjati
   glavni niz, samo treba kreirati novi niz i njega koristiti.

Assignmnet 4

- Treba izmeniti tako da NewExpense prvo ima dugme Add New Expense, pa kada se klikne na njega onda dugme nestaje i otvara nas prozor.
- Kada se popuni forma i klikne se na dugme onda opet forma nestaje i pojavlje se dugme Add New Expense
- Takodje bi trebalo imati Cancel dugme koje takodje cini da forma nestane i da se pojavi dugme Add New Expense

Resenje:
Znaci trebalo bi promeniti da NewExpense na pocetku pokazuje dugme Add New Expense i onda kada se klikne na to dugme onda bi trebalo otvoriti ExpenseForm.
