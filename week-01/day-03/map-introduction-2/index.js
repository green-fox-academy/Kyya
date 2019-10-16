const books = {
    '978-1-60309-452-8': 'A Letter to Jo',
    '978-1-60309-459-7': 'Lupus',
    '978-1-60309-444-3': 'Red Panda and Moon Bear',
    '978-1-60309-461-0': 'The Lab'
}
// Print all the key-value pairs in format
// console.log(Object.entries(books))
for (const [isbn, name] of Object.entries(books)) {
    console.log(`${name} (ISBN: ${isbn})`)
}

// Remove the key-value pair with key 978-1-60309-444-3
delete books['978-1-60309-444-3']
console.log(books['978-1-60309-444-3'])

// Remove the key-value pair with value The Lab
for (const [isbn, name] of Object.entries(books)) {
    console.log(`${name} (ISBN: ${isbn})`)
    if (name == 'The Lab') {
        delete books[isbn]
        break
    }
}

// Add new key-value pairs to the map
books['978-1-60309-450-4'] = 'They Called Us Enemy'
books['978-1-60309-453-5'] = 'Why Did We Trust Him?'

// Print whether there is an associated value with key 478-0-61159-424-8 or not
console.log(books['478-0-61159-424-8'] != undefined)

// Print the value associated with key 978-1-60309-453-5
console.log(books['978-1-60309-453-5'])
