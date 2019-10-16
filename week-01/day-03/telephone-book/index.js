const contacts = {
    'William A. Lathan'   : '405-709-1865',
    'John K. Miller'      : '402-247-8568',
    'Hortensia E. Foster' : '606-481-6467',
    'Amanda D. Newland'   : '319-243-5613',
    'Brooke P. Askew'     : '307-687-2982'
}

function findSomeonePhoneNumber(who) {
    return contacts[who]
}

function findPhoneNumberOwner(phoneNumber) {
    for (const [ owner, phone ] of Object.entries(contacts)) {
        if (phone == phoneNumber) {
            return owner
        }
    }
    return 'Nobody'
}

function findSomeoneExistsInContact(who) {
    return Object.keys(contacts).includes(who)
}

// What is John K. Miller's phone number?
console.log(findSomeonePhoneNumber('John K. Miller'))

// Whose phone number is 307-687-2982?
console.log(findPhoneNumberOwner('307-687-2982'))

// Do we know Chris E. Myers' phone number?
console.log(findSomeoneExistsInContact('Chris E. Myer'))
