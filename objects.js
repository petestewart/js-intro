const meal1 = {
    vendor: 'Mas Tacos',
    date: '042020',
    price: 1501
}

const isApproved = (expense) => {
    if (expense.price > 1500) {
    expense.approved=false
    } else {
    expense.approved=true;}
}

isApproved(meal1);

console.log(meal1);
