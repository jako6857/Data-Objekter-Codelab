/* opgave 1 */

const todoApp = {
            shopping: {
            name: "Indkøb",
            items: [
            { text: "Køb mælk", done: false },
            { text: "Køb brød", done: true }
            ]
            },
            school: {
            name: "Skolearbejde",
            items: [
            { text: "Læs kapitel 3", done: false },
            { text: "Skriv rapport", done: true }
            ]
            }
            };


          

console.group("opgave 1");

console.groupEnd();
/* opgave 2 */

  function addItem(listKey, itemText) {
            const list = todoApp[listKey];
            if (list) { 
                const newItem = {text: itemText, done: false };
                list.items.push(newItem);
             }
                console.log(todoApp);
                }

                addItem("shopping", "Køb smør");
console.group("opgave 2");



console.groupEnd();
/* opgave 3 */
  function toggleItemDone(listKey, itemNr) {
                const list = todoApp[listKey];
                if (list) {
                    const item = list.items[itemNr];
                    if (item) {
                    item.done = !item.done;
                    }
                }
                    console.log(todoApp);
                }

                toggleItemDone("school", 0);

console.log(todoApp);

console.group("opgave 3");
console.groupEnd();
