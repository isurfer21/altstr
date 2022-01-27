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

class FilterData {
    static get Separators() {
        return {
            newline: "\n",
            carriagereturn: "\r",
            tab: "\t",
            comma: ",",
            semicolon: ";",
            colon: ":",
            pipe: "|",
            space: " "
        };
    }
    static do(type, text, separator) {
        let output = '',
            list = text.split(FilterData.Separators[separator]);
        switch (type) {
            case 'unique':
                let uniqueList = [...new Set(list)];
                output = uniqueList.join('\n');
                break;
            case 'duplicate':
                let duplicateList = list.filter((item, index) => list.indexOf(item) !== index);
                output = duplicateList.join('\n');
                break;
        }
        return output;
    }
}