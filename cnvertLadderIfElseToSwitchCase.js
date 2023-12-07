
        const studentName = prompt('Rentrez votre prénom');
        const grade = prompt('Rentrez votre grade');

        switch(grade) {
            case "1":
                document.write(`${studentName} has 35% fee refund.`);
            break;
            case "2":
                document.write(`${studentName} has 25% fee refund.`);
            break;
            case "3":
                document.write(`${studentName} has 20% fee refund.`);
            break;
            case "4":
                document.write(`${studentName} has 10% fee refund.`);
            break;
            case "5":
                document.write(`${studentName} passed with margin.`);
            break;
            case "0":
                document.write(`${studentName} has failed, please retry.`);
            break;
            default:
                document.write(`${studentName} has an invalid grade ?`);
            break;
        }
