let getPersonalGreeting = (greeting) => {
 return (separator) => {
        return (firstName) => {
            return (punctuation) => {
                return greeting + separator + firstName + punctuation;
            }
        }
    }
}

let personalGreeting = getPersonalGreeting('Hello');

let greeting = personalGreeting (', ')('Stephen')('!')

greeting