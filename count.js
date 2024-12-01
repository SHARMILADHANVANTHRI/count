

        let c = 0
        let value = 0
        let zero = 0

        function reset() {
        value = zero
        document.getElementById('number').innerHTML = value
        }

        function minus() {
            value -= 1
        document.getElementById('number').innerHTML = value
        }

        function plus() {
            value += 1
        document.getElementById('number').innerHTML = value
        }