class ConvertCase {
    static do(type, text) {
        let output = '';
        switch (type) {
            case 'uppercase':
                output = text.toUpperCase();
                break;
            case 'lowercase':
                output = text.toLowerCase();
                break;
            case 'capitalize':
                text = text.toLowerCase();
                let words = text.split(' ');
                for (let i = 0; i < words.length; i++) {
                    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
                }
                output = words.join(' ');
                break;
        }
        return output;
    }
}