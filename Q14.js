function items(categories) {

    const catCount = categories.reduce((acc,category) => {
        acc[category] = (acc[category]||0)+1;
        return acc;
    }, {});

    const sortedCategories = Object.entries(catCount)
        .sort((a, b) => b[1] - a[1])
        .map(entry => entry[0]);

    return  {catCount,sortedCategories};
}

const cat =
 ["electronics",
 "clothing",
  "electronics",
   "toys",
"clothing",
 "toys", 
 "toys"];

const ans = items(cat);
console.log(ans.catCount);
console.log(ans.sortedCategories); 